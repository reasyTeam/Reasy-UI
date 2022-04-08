<template>
  <transition
    name="el-zoom-in-top"
    @before-leave="beforeLeave"
    @after-leave="doDestroy"
    v-if="show"
  >
    <div class="position-panel" :style="style">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { on, off } from "./libs.js";
let zIndex = 2000;
const transformMap = {
  TOP: "center bottom",
  BOTTOM: "center top"
};
export default {
  name: "create-to-body",
  props: {
    show: {
      type: Boolean,
      default: true
    },
    //位置
    position: {
      type: String,
      default: "auto"
    },
    //宽度放大倍数
    scale: {
      type: Number,
      default: 1
    },
    //宽度
    width: String
  },
  data() {
    return {
      popperElm: null,
      parentElm: null,
      style: {
        left: 0,
        top: 0,
        minWidth: 0,
        zIndex: 0
      },
      isAnimation: false //是否正在动画中，动画中时不注销，需主动注销
    };
  },
  created() {
    this.$on("update:position", this.setPotion);
  },
  methods: {
    appendBody() {
      this.isAnimation = false;
      document.body.appendChild(this.$el);
      this.popperElm = this.$el;
      //父节点信息
      this.$parent.parentElm = this.parentElm = this.$parent.$el;
    },
    //设置选项的位置
    setPotion() {
      let $parent = this.$parent.$el,
        parentRect = $parent.getBoundingClientRect(),
        scrollTop =
          (window.pageYOffset || document.documentElement.scrollTop) +
          document.body.scrollTop,
        scrollLeft =
          (window.pageXOffset || document.documentElement.scrollLeft) +
          document.body.scrollLeft;

      //更新dom
      //this.popperElm = this.$el;
      this.style.left = parentRect.left + scrollLeft + "px";
      this.style.top = parentRect.bottom + scrollTop + "px";
      //宽度和放大倍数同时存在时优先宽度
      this.style.minWidth = this.width
        ? this.width
        : $parent.clientWidth * this.scale + "px";
      this.style.zIndex = zIndex;
      //挂载完成
      if (this.$el.offsetHeight) {
        let bodyHeight =
            document.documentElement.clientHeight || document.body.clientHeight,
          elHeight = this.$el.offsetHeight,
          marginTop =
            parseInt(window.getComputedStyle(this.$el, null).marginTop, 10) ||
            0;
        let transformOrigin = transformMap.BOTTOM;

        //位置自动 && 超出屏幕高度 || 位置在上
        if (
          (parentRect.bottom + elHeight > bodyHeight &&
            this.position === "auto") ||
          this.position === "top"
        ) {
          this.style.top =
            scrollTop + parentRect.top - elHeight - 2 * marginTop + "px";
          transformOrigin = transformMap.TOP;
        }

        if (this.$el) {
          this.$el.style.transformOrigin = transformOrigin;
        }
      }
    },
    setAnimation(isAnimation) {
      this.isAnimation = isAnimation;
    },
    doDestroy() {
      if (this.popperElm) {
        this.parentElm = null;
        document.body.removeChild(this.$el);
      }
      off(window, "resize", this.setPotion);
    },
    beforeLeave() {
      this.setAnimation(true);
    }
  },
  beforeDestroy() {
    if (this.isAnimation) {
      return;
    }
    this.doDestroy();
  },
  watch: {
    show(val) {
      if (val) {
        this.appendBody();
        zIndex++;
        this.setPotion();
        on(window, "resize", this.setPotion);
        on(window, "scroll", this.setPotion);
      } else {
        off(window, "resize", this.setPotion);
        off(window, "scroll", this.setPotion);
      }
    },
    width() {
      let $parent = this.$parent.$el;
      this.style.minWidth = this.width
        ? this.width
        : $parent.clientWidth * this.scale + "px";
    }
  }
};
</script>
