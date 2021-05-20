<template>
  <div class="v-scroll" :style="scrollStyle">
    <!-- 滚动条体 -->
    <div ref="view" class="v-scroll__wrap" :style="wrapStyle" @scroll="scroll">
      <slot></slot>
    </div>
    <!-- 垂直滚动条 -->
    <bar
      ref="ybar"
      v-if="isVertical"
      direct="y"
      :barsize="vbarHeight"
      v-model="scrollTop"
      @change="change"
      :style="{visibility: isMac ? 'hidden':'visible'}"
    ></bar>
    <!-- 水平滚动条 -->
    <bar
      ref="xbar"
      v-if="isHorizontal"
      direct="x"
      :barsize="hBarWidth"
      v-model="scrollLeft"
      :style="{visibility: isMac ? 'hidden':'visible'}"
      @change="change"
    ></bar>
  </div>
</template>

<script>
import { getScrollWidth } from "./scroll-lib.js";
import Bar from "./bar.vue";
import { on, off } from "../libs.js";

export default {
  name: "v-scroll",
  props: {
    // 内容区域高
    height: {
      type: [Number, String],
      default: "inherit",
      validator(val) {
        if (typeof val === "number") {
          return true;
        }
        return ["inherit", "auto"].indexOf(val) !== -1;
      }
    },
    // 内容区域宽
    width: {
      type: Number,
      default: 0
    },
    // 滚动到X轴的具体位置，单位px
    toX: {
      type: Number,
      default: 0
    },
    // 滚动到Y轴的具体位置，单位px
    toY: {
      type: Number,
      default: 0
    },
    // 滚动到第几个元素
    toIndex: {
      type: Number,
      default: 0
    },
    overflow: {
      type: String,
      default: "auto",
      validator(val) {
        return ["x", "y", "auto", "hidden"].indexOf(val) !== -1;
      }
    },
    isBlock: {
      type: Boolean,
      default: true
    }
  },
  data() {
    // 水平和垂直方向可滚动的范围
    this.scrollLeftRange = this.scrollTopRange = 1;
    this.isMac = /macintosh|mac os x/i.test(navigator.userAgent);
    this.newHeight = this.height;
    this.newWidth = this.height;
    return {
      // 浏览器默认滚动条宽度
      barWidth: getScrollWidth(),
      // 滚动内容宽度
      wrapWidth: this.width,
      wrapHeight: this.height,
      // 是否有垂直滚动条
      isVertical: false,
      // 是否有水平滚动条
      isHorizontal: false,
      // 垂直滚动滑块的高
      vbarHeight: 0,
      // 水平滚动滑块的宽度
      hBarWidth: 0,
      // 滚动距离占比，范围（0-1）
      scrollTop: 0,
      scrollLeft: 0,
      scrollSize: {
        height: 0,
        width: 0
      }
    };
  },
  computed: {
    // 滚动容器DOM
    view() {
      return this.$refs.view;
    },
    scrollStyle() {
      let res = {
        display: this.isBlock ? "block" : "inline-block"
      };
      if ((this.width || this.isHorizontal) && this.wrapWidth) {
        res.maxWidth = `${this.wrapWidth}px`;
      }
      if ((this.height || this.isVertical) && this.wrapHeight) {
        res.maxHeight = `${this.wrapHeight}px`;
      }

      return res;
    },
    wrapStyle() {
      let wrapStyle = {};
      if (this.isVertical) {
        wrapStyle["overflow-y"] = "scroll";
        wrapStyle["margin-right"] = `-${this.barWidth}px`;
      } else {
        wrapStyle["overflow-y"] = "hidden";
      }

      if (this.isHorizontal) {
        if (this.wrapHeight) {
          wrapStyle.height = `${this.wrapHeight + this.barWidth}px`;
        }
        wrapStyle["overflow-x"] = "scroll";
      } else {
        if (this.wrapHeight) {
          wrapStyle.height = `${this.wrapHeight}px`;
        }
        wrapStyle["overflow-x"] = "hidden";
      }
      return wrapStyle;
    }
  },
  watch: {
    height(val) {
      this.setSize(val, this.width);
    },
    width(val) {
      this.setSize(this.height, val);
    }
  },
  components: {
    Bar
  },
  methods: {
    /**
     * 根据选择器滚动到指定的DOM节点
     * @param {String} selector css选择器
     */
    scrollTo(selector) {
      let target =
        this.$el.querySelector(selector) || document.querySelector(selector);
      if (target === null) {
        // eslint-disable-next-line
        console.warn(`selector[${selector}]无效`);
        return;
      }

      this.scrollToNode(target);
    },
    /**
     * 滚动到指定的DOM节点
     * @param {HtmlElement} node dom节点
     */
    scrollToNode(node) {
      this.view.scrollLeft = node.offsetLeft;
      this.view.scrollTop = node.offsetTop;
      this.scroll();
    },
    /**
     * 水平滚动到指定的位置
     * @param {Number} x x方向的位置
     */
    scrollToX(x) {
      this.view.scrollLeft = x;
      this.scrollLeft = this.view.scrollLeft / this.scrollLeftRange;
    },
    /**
     * 垂直滚动到指定的位置
     * @param {Number} y y方向的位置
     */
    scrollToY(y) {
      this.view.scrollTop = y;
      this.scrollTop = this.view.scrollTop / this.scrollTopRange;
    },
    /**
     * 滚动到第几个元素
     * @param {Number} index 滚动到的位置
     */
    scrollToIndex(index) {
      let node = this.view.children[0];
      if (node) {
        node = node.children[index - 1];
        node && this.scrollToNode(node);
      }
    },
    /**
     * 重新设置容器的宽和高
     * @param {Number} height 容器高
     * @param {Number} width 容器宽
     * @param {Boolean} isScrollToTop 是否滚动到初始位置
     */
    setSize(height, width, isScrollToTop) {
      this.newHeight = height;
      this.newWidth = width;
      if (isScrollToTop) {
        this.view.scrollTop = this.scrollTop = 0;
        this.view.scrollLeft = this.scrollLeft = 0;
      }
      this.isVertical = false;
      this.isHorizontal = false;

      this.$nextTick(() => {
        this.update();
        this.$emit("mounted");
      });
    },
    /**
     * 更新滚动条相关配置
     * 内部内容变化需要手动调用重新计算高度
     */
    update() {
      this.wrapWidth = this.newWidth || this.$el.parentNode.offsetWidth;
      let newHeight = this.newHeight;
      if (newHeight === "inherit") {
        this.wrapHeight = this.$el.parentNode.offsetHeight;
      } else if (newHeight === "auto") {
        this.wrapHeight = 0;
      } else {
        this.wrapHeight = newHeight;
      }

      let width = this.view.scrollWidth;
      let height = this.view.scrollHeight;

      this.isVertical = this.overflow === "auto" || this.overflow === "y";
      this.isVertical = this.isVertical && this.wrapHeight < height;
      this.isHorizontal = this.overflow === "auto" || this.overflow === "x";
      this.isHorizontal = this.isHorizontal && this.wrapWidth < width;

      if (this.isHorizontal) {
        this.hBarWidth = parseInt((this.wrapWidth / width) * this.wrapWidth);
        this.scrollLeftRange = width - this.wrapWidth;
        this.scrollSize.width = this.wrapWidth;
      } else {
        this.hBarWidth = 0;
        this.scrollLeftRange = 0;
        this.scrollSize.width = 0;
      }

      if (this.isVertical) {
        this.vbarHeight = parseInt(
          (this.wrapHeight / height) * this.wrapHeight
        );
        this.scrollTopRange = height - this.wrapHeight;
        this.scrollSize.height = this.wrapHeight;
      } else {
        this.vbarHeight = 0;
        this.scrollTopRange = 0;
        this.scrollSize.height = 0;
      }
      this.scroll();
    },
    /**
     * bar组件对应的v-model响应
     */
    change() {
      this.view.scrollTop = this.scrollTop * this.scrollTopRange;
      this.view.scrollLeft = this.scrollLeft * this.scrollLeftRange;
    },
    /**
     * 同步Bar组件的滚动距离
     */
    scroll() {
      this.scrollTop = this.view.scrollTop / this.scrollTopRange;
      this.scrollLeft = this.view.scrollLeft / this.scrollLeftRange;
    },
    /**
     * props属性生效处理
     */
    emitProps() {
      if (this.toIndex) {
        this.scrollToIndex(this.toIndex);
      } else if (this.toY) {
        this.scrollToY(this.toY);
      }

      if (this.toX) {
        this.scrollToX(this.toX);
      }
    },
    resizeHandle() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.update();
      }, 100);
    }
  },
  mounted() {
    this.isHorizontal = this.overflow === "auto" || this.overflow === "x";
    this.isVertical = this.overflow === "auto" || this.overflow === "y";
    this.update();
    on(window, "resize", this.resizeHandle);

    this.emitProps();
  },
  beforeDestroy() {
    off(window, "resize", this.resizeHandle);
  }
};
</script>
