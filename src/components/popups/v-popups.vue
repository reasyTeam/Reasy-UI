<template>
  <div
    ref="popupsWrapper"
    class="v-popups__wrapper"
    @click="handleClick"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <transition :name="transition">
      <div
        v-if="visible"
        ref="popups"
        :class="[
          'v-popups',
          `v-popups--${effect}`,
          customClass,
          { 'v-popups--hidden': hidden }
        ]"
        :style="popupsStyle"
        @mouseenter="handlePopupsEnter"
        @mouseleave="handlePopupsLeave"
        v-clickoutside="handleClickOutside"
      >
        <div class="v-popups__main" :style="customStyle">
          <slot></slot>
        </div>
        <i
          v-show="showArrow"
          :class="['v-popups__arrow', arrowClass]"
          :style="arrowStyle"
          class="v-popups__arrow"
        ></i>
      </div>
    </transition>

    <slot name="reference"></slot>
  </div>
</template>

<script>
import { on, off } from "../libs";
import scssVars from "../../scss/components/popups.scss";
let { arrowHeight, arrowBottomSideLength } = scssVars;

let zIndex = 2000;

// top-left ==> [方向1/p1]-[方向2/p2]
/*
 * 方向1位置需要获取width/height属性调整：
 * 1.上下方向获取height
 * 2.左右方向获取width
 */
const positionSideNameMap = {
    top: "height",
    bottom: "height",
    left: "width",
    right: "width"
  },
  /*
   * 传入方向1需要修改的style中的top/left属性：
   * 1.上下方向统一通过修改top属性来实现定位
   * 2.左右统一通过修改left属性来实现定位
   */
  positionPropMap = {
    top: "top",
    bottom: "top",
    left: "left",
    right: "left"
  },
  /*
   * 传入方向2为center时，需要修改的style中的top/left属性：
   * 1.上下方向统一通过修改left属性来实现定位居中
   * 2.左右统一通过修改left属性来实现定位居中
   */
  centerFixedMap = {
    top: "left",
    bottom: "left",
    left: "top",
    right: "top"
  },
  // 反方向映射
  positionReverseMap = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
  };

// 箭头三角形高和底边
arrowHeight = parseInt(arrowHeight);
arrowBottomSideLength = parseInt(arrowBottomSideLength);

const space = arrowBottomSideLength + 4;

// 用于enterable为true默认的delay时间
const minDelay = 300;

export default {
  name: "v-popups",
  props: {
    value: Boolean,
    effect: {
      type: String,
      default: "light",
      validator(val) {
        return ["light", "dark"].includes(val);
      }
    },
    customClass: String,
    customStyle: Object,
    trigger: {
      type: String,
      default: "click",
      validator(val) {
        return ["click", "hover", "manual"].includes(val);
      }
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: "top-center",
      validator(val) {
        return [
          "top-left",
          "top-center",
          "top-right",
          "right-top",
          "right-center",
          "right-bottom",
          "bottom-right",
          "bottom-center",
          "bottom-left",
          "left-bottom",
          "left-center",
          "left-top"
        ].includes(val);
      }
    },
    autoAdjustPosition: {
      type: Boolean,
      default: true
    },
    popupsAppendToBody: {
      // todo
      Type: Boolean,
      default: true
    },
    clickOutsideToHide: {
      Type: Boolean,
      default: true
    },
    transition: {
      type: String,
      default: "pop-fade-in-out"
    },
    enterable: {
      type: Boolean,
      default: true
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    }
  },
  computed: {
    _openDelay() {
      let { trigger, enterable, openDelay } = this,
        minOpenDelay = minDelay - 200;

      if (trigger === "hover" && enterable) {
        openDelay = openDelay >= minOpenDelay ? openDelay : minOpenDelay;
      }

      return openDelay;
    },
    _closeDelay() {
      let { trigger, enterable, closeDelay } = this;

      if (trigger === "hover" && enterable) {
        closeDelay = closeDelay >= minDelay ? closeDelay : minDelay;
      }

      return closeDelay;
    },
    _position() {
      return this.position.split("-");
    }
  },
  data() {
    return {
      visible: true,
      hidden: true,
      popupsStyle: {},
      arrowStyle: {},
      arrowClass: "",
      popupsDomProps: {},
      referenceDomProps: {}
    };
  },
  mounted() {
    const {
      $el,
      $refs: { popups }
    } = this;

    // 点击该parentElm元素不会执行v-clickoutside的方法
    this.parentElm = $el;
    this.$nextTick(() => {
      // 先渲染，获取到弹出框宽高后再隐藏弹出框
      this.popupsDomProps = popups.getBoundingClientRect();
      this.referenceDomProps = this.parentElm.getBoundingClientRect();
      this.visible = false;
      this.hidden = false;
      if (this.trigger === "manual") {
        this.visible = this.value;
        if (this.visible) {
          this.show();
        } else {
          this.hide();
        }
      }
      document.body.appendChild(popups);
    });
  },
  methods: {
    handleMouseenter() {
      if (this.trigger === "hover") {
        this.show();
      }
    },
    handleMouseleave() {
      if (this.trigger === "hover") {
        this.hide();
      }
    },
    handleClick() {
      if (this.trigger === "click") {
        this.proxyVisibleDelay(!this.visible);
      }
    },
    handlePopupsEnter() {
      if (this.enterable && this.trigger === "hover") {
        this.show();
      }
    },
    handlePopupsLeave() {
      if (this.enterable && this.trigger === "hover") {
        this.hide();
      }
    },
    handleDocumentScroll() {
      const [p1, p2] = this._position,
        latestReferenceDomProps = this.parentElm.getBoundingClientRect();

      const p1Key = positionPropMap[p1],
        p2Key = p2 === "center" ? centerFixedMap[p1] : p2;

      if (
        this.referenceDomProps[p1Key] !== latestReferenceDomProps[p1Key] ||
        this.referenceDomProps[p2Key] !== latestReferenceDomProps[p2Key]
      ) {
        this.referenceDomProps = latestReferenceDomProps;
        this.setPosition();
      }
    },
    handleWindowResize() {
      this.referenceDomProps = this.parentElm.getBoundingClientRect();
      this.setPosition();
    },
    handleClickOutside() {
      if (this.trigger === "click" && this.clickOutsideToHide) {
        this.hide();
      }
    },
    clearTimer(isShow) {
      const status = isShow ? "_open" : "_close";

      clearTimeout(this[`${status}Timer`]);
      this[`${status}Timer`] = null;
    },
    proxyVisibleDelay(isShow) {
      const { _openDelay, _closeDelay } = this,
        status = isShow ? "_open" : "_close";

      if ((_openDelay === 0 && isShow) || (_closeDelay === 0 && !isShow)) {
        this.visibleChange(isShow);
      } else if (!this[`${status}Timer`]) {
        this[`${status}Timer`] = setTimeout(() => {
          this.clearTimer(isShow);
          this.visibleChange(isShow);
        }, this[`${status}Delay`]);
      }
    },
    bindEvent() {
      on(document, "scroll", this.handleDocumentScroll, true);
      on(window, "resize", this.handleWindowResize);
    },
    unbindEvent() {
      off(document, "scroll", this.handleDocumentScroll);
      off(window, "resize", this.handleWindowResize);
    },
    visibleChange(isShow) {
      if (this.visible !== isShow) {
        this.visible = isShow;
        this.$emit("visible-change", isShow);
      }

      if (isShow) {
        this.bindEvent();
        this.$nextTick(() => {
          this.setPosition();
        });
      } else {
        this.unbindEvent();
      }
    },
    show() {
      this.clearTimer(false);
      this.proxyVisibleDelay(true);
    },
    hide() {
      this.proxyVisibleDelay(false);
    },
    setPosition(_position = this._position) {
      this.setPopupsStyle(..._position);
      this.setArrowStyle(..._position);

      if (this.autoAdjustPosition) {
        this.autoFixedPosition(..._position);
      }
    },
    setPopupsStyle(p1, p2) {
      const popupsStyleObj = {};

      if (!this.popupsStyle.zIndex) {
        // 首次加载
        popupsStyleObj.zIndex = zIndex++;
        this.referenceDomProps = this.parentElm.getBoundingClientRect();
      } else if (this.trigger === "hover") {
        // hover时获取触发弹出的元素属性，用于滚动后获取
        this.referenceDomProps = this.parentElm.getBoundingClientRect();
      }

      const { popupsDomProps, referenceDomProps } = this;

      // 设置top-center => p1-p2
      if (p1 === "top" || p1 === "left") {
        popupsStyleObj[p1] = `${referenceDomProps[p1] -
          popupsDomProps[positionSideNameMap[p1]] -
          space}px`;
      } else {
        popupsStyleObj[positionPropMap[p1]] = `${referenceDomProps[p1] +
          space}px`;
      }

      if (p2 === "top" || p2 === "left") {
        popupsStyleObj[p2] = `${referenceDomProps[p2]}px`;
      } else if (p2 === "center") {
        popupsStyleObj[centerFixedMap[p1]] = `${referenceDomProps[
          centerFixedMap[p1]
        ] +
          referenceDomProps[positionSideNameMap[centerFixedMap[p1]]] / 2 -
          popupsDomProps[positionSideNameMap[centerFixedMap[p1]]] / 2}px`;
      } else {
        popupsStyleObj[positionPropMap[p2]] = `${referenceDomProps[p2] -
          popupsDomProps[positionSideNameMap[p2]]}px`;
      }

      this.popupsStyle = Object.assign(this.popupsStyle, popupsStyleObj);
    },
    setArrowStyle(p1, p2) {
      const arrowStyleObj = {};

      arrowStyleObj[positionReverseMap[p1]] = `-${arrowHeight * 2}px`;
      if (p2 !== "center") {
        arrowStyleObj[p2] = `${arrowBottomSideLength}px`;
      } else {
        arrowStyleObj[centerFixedMap[p1]] = "50%";
        arrowStyleObj[
          `margin-${centerFixedMap[p1]}`
        ] = `-${arrowBottomSideLength / 2}px`;
      }

      this.arrowClass = `v-popups__arrow--${p1}`;
      this.arrowStyle = arrowStyleObj;
    },
    autoFixedPosition(p1, p2) {
      const bodyDomProps = document.body.getBoundingClientRect();

      if (p1 === "top" || p1 === "left") {
        if (parseInt(this.popupsStyle[p1]) < bodyDomProps[p1]) {
          this.setPosition([positionReverseMap[p1], p2]);
        }
      } else if (
        parseInt(this.popupsStyle[positionPropMap[p1]]) +
          this.popupsDomProps[positionSideNameMap[p1]] >
        bodyDomProps[positionSideNameMap[p1]]
      ) {
        this.setPosition([positionReverseMap[p1], p2]);
      }
    },
    updatePosition() {
      if (this.visible) {
        this.popupsDomProps = this.$refs.popups.getBoundingClientRect();
        this.referenceDomProps = this.parentElm.getBoundingClientRect();
        this.setPosition();
      } else {
        this.hidden = true;
        this.visible = true;
        this.$nextTick(() => {
          this.popupsDomProps = this.$refs.popups.getBoundingClientRect();
          this.referenceDomProps = this.parentElm.getBoundingClientRect();
          this.visible = false;
          this.hidden = false;
        });
      }
    }
  },
  beforeDestroy() {
    const {
      $refs: { popups }
    } = this;

    this.unbindEvent();
    popups && document.body.removeChild(popups);
  },
  watch: {
    value(newVal) {
      if (this.trigger === "manual") {
        // 手动模式
        if (newVal) {
          this.show();
        } else {
          this.hide();
        }
      }
    }
  }
};
</script>
