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
        :class="['v-popups', `v-popups--${effect}`, customClass]"
        :style="popupsStyle"
        @mouseenter="handlePopupsEnter"
        @mouseleave="handlePopupsLeave"
        v-clickoutside="handleClickOutside"
      >
        <div class="v-popups__main" :style="customStyle">
          <slot></slot>
        </div>
        <svg
          v-show="showArrow"
          :class="['v-popups__arrow']"
          :style="arrowStyle"
        >
          <polygon :points="polygonPoints" />
        </svg>
      </div>
    </transition>

    <slot name="reference" :visible="visible"></slot>
  </div>
</template>

<script>
import { on, off } from "../libs";
import scssVars from "../../scss/varibles.scss";
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

// 每个方向三角形的位置
const positionTriangle = {
  top: `0,0 ${arrowBottomSideLength},0 ${arrowBottomSideLength /
    2},${arrowHeight}`,
  bottom: `0,${arrowHeight} ${arrowBottomSideLength},${arrowHeight} ${arrowBottomSideLength /
    2},0`,
  left: `0,0 0,${arrowBottomSideLength} ${arrowHeight},${arrowBottomSideLength /
    2}`,
  right: `${arrowHeight},0 ${arrowHeight},${arrowBottomSideLength} 0,${arrowBottomSideLength /
    2}`
};

// const space = arrowBottomSideLength + 4;
// const toZeroSpace = arrowBottomSideLength / 2;

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
    arrowOffset: {
      type: Number,
      default: arrowBottomSideLength
    },
    popupsOffset: {
      type: Number,
      default: 0
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
    },
    betweenSpace: {
      type: Number,
      default: arrowBottomSideLength / 2 + 4
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
      visible: false,
      popupsStyle: {},
      arrowStyle: {},
      arrowClass: "",
      popupsDomProps: {},
      referenceDomProps: {},
      polygonPoints: ""
    };
  },
  mounted() {
    // 点击该parentElm元素不会执行v-clickoutside的方法
    this.parentElm = this.$el;
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

        const $body = document.body;
        if (isShow) {
          this.bindEvent();
          this.$nextTick(() => {
            $body.appendChild(this.$refs.popups);
            this.setPosition();
            this.$emit("after-change", isShow);
          });
        } else {
          $body.removeChild(this.$refs.popups);
          this.unbindEvent();
          this.$emit("after-change", isShow);
        }
      }
    },
    show() {
      this.clearTimer(false);
      this.proxyVisibleDelay(true);
    },
    hide() {
      this.proxyVisibleDelay(false);
    },
    getBetweenSpace(p1) {
      const moveNegative = ["top", "left"].includes(p1);

      let space = this.showArrow
        ? this.betweenSpace + arrowHeight
        : this.betweenSpace;

      return moveNegative ? -space : space;
    },
    setPosition(_position = this._position) {
      if (this.visible) {
        this.popupsDomProps = this.$refs.popups.getBoundingClientRect();
        this.referenceDomProps = this.parentElm.getBoundingClientRect();
      }

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
        // this.referenceDomProps = this.parentElm.getBoundingClientRect();
      } else if (this.trigger === "hover") {
        // hover时获取触发弹出的元素属性，用于滚动后获取
        // this.referenceDomProps = this.parentElm.getBoundingClientRect();
      }

      const { popupsDomProps, referenceDomProps } = this;
      const _betweenSpace = this.getBetweenSpace(p1);

      // 设置top-center => p1-p2
      if (p1 === "top" || p1 === "left") {
        popupsStyleObj[p1] = `${referenceDomProps[p1] -
          popupsDomProps[positionSideNameMap[p1]] +
          _betweenSpace}px`;
      } else {
        popupsStyleObj[positionPropMap[p1]] = `${referenceDomProps[p1] +
          _betweenSpace}px`;
      }

      if (p2 === "top" || p2 === "left") {
        popupsStyleObj[p2] = `${referenceDomProps[p2] + this.popupsOffset}px`;
      } else if (p2 === "center") {
        popupsStyleObj[centerFixedMap[p1]] = `${referenceDomProps[
          centerFixedMap[p1]
        ] +
          referenceDomProps[positionSideNameMap[centerFixedMap[p1]]] / 2 -
          popupsDomProps[positionSideNameMap[centerFixedMap[p1]]] / 2}px`;
      } else {
        popupsStyleObj[positionPropMap[p2]] = `${referenceDomProps[p2] -
          popupsDomProps[positionSideNameMap[p2]] +
          this.popupsOffset}px`;
      }

      this.popupsStyle = Object.assign(this.popupsStyle, popupsStyleObj);
    },
    setArrowStyle(p1, p2) {
      const arrowStyleObj = {
        [positionSideNameMap[p1]]: `${arrowHeight}px`,
        [positionSideNameMap[centerFixedMap[p1]]]: `${arrowBottomSideLength}px`
      };

      arrowStyleObj[positionReverseMap[p1]] = `-${arrowHeight}px`;
      if (p2 !== "center") {
        arrowStyleObj[p2] = `${this.arrowOffset}px`;
      } else {
        arrowStyleObj[centerFixedMap[p1]] = "50%";
        arrowStyleObj[
          `margin-${centerFixedMap[p1]}`
        ] = `-${arrowBottomSideLength / 2}px`;
      }

      // this.arrowClass = `v-popups__arrow--${p1}`;
      this.polygonPoints = positionTriangle[p1];
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
        // this.popupsDomProps = this.$refs.popups.getBoundingClientRect();
        // this.referenceDomProps = this.parentElm.getBoundingClientRect();
        this.setPosition();
      }
    }
  },
  beforeDestroy() {
    const {
      $refs: { popups }
    } = this;

    this.unbindEvent();
    try {
      // 切换页面如果还显示在body中，则移除
      popups && document.body.removeChild(popups);
    } catch (e) {
      // 当前页面remove依赖元素（容错处理）
    }
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
