<template>
  <div
    :class="[
      'v-scroll__bar',
      direct === 'y' ? 'is-vertical' : 'is-horizontal',
      { active: isDragging }
    ]"
    @mousedown="barClick"
    :style="barStyle"
  >
    <div
      ref="slider"
      class="v-scroll__bar__slider"
      :style="style"
      @mousedown="mousedown"
    ></div>
  </div>
</template>

<script>
import { on, off, throttle } from "../libs";
import { renderTranslateStyle, PROPERTYS } from "./scroll-lib.js";

// 滚动滑块的最小高度/宽度
const MIN_SIZE = 25;

export default {
  props: {
    direct: String, // x, y
    barsize: Number,
    scroll: Number,
    sliderWidth: {
      type: Number,
      default: 6
    }
  },
  model: {
    prop: "scroll",
    event: "change"
  },
  data() {
    // 滚动条整体高或宽
    this.size = 0;
    // 滚动开始节点位置
    this.startPoint = 0;
    this.throttleMove = throttle(this.mousemove, 1000 / 60, true);
    return {
      // 是否正在拖动滚动条
      isDragging: false,
      // 最大可滚动距离
      maxTranslate: 0
    };
  },
  computed: {
    slider() {
      return this.$refs.slider;
    },
    propertys() {
      return PROPERTYS[this.direct];
    },
    style() {
      let style = renderTranslateStyle(
        this.direct,
        this.scroll * this.maxTranslate
      );
      let barSize = this.barsize
        ? Math.max(this.barsize, MIN_SIZE)
        : this.barsize;

      style[this.direct === "x" ? "width" : "height"] = barSize + "px";

      return style;
    },
    barStyle() {
      let style = {};
      if (this.direct === "y") {
        style.width = `${this.sliderWidth}px`;
      } else {
        style.height = `${this.sliderWidth}px`;
      }
      return style;
    }
  },
  watch: {
    barsize() {
      this.update();
    }
  },
  methods: {
    computedSize() {
      // 0的时候返回0  其他时候返回最小值和当前值中大的值
      return this.barsize ? Math.max(this.barsize, MIN_SIZE) : this.barsize;
    },
    update() {
      this.size = this.$el[this.propertys.offset];
      this.maxTranslate = this.size - this.computedSize();
    },
    emitChange(distance) {
      if (distance < 0) {
        distance = 0;
      } else if (distance > this.maxTranslate) {
        distance = this.maxTranslate;
      }
      distance = distance / this.maxTranslate;

      this.$emit("change", distance);
    },
    /**
     * 点击滚动条
     */
    barClick(e) {
      e.stopPropagation();
      let distance = Math.abs(
        e.target.getBoundingClientRect()[this.direct] - e[this.propertys.client]
      );
      // 去除滑块的一半高度或宽度
      distance = distance - this.computedSize() / 2;
      this.emitChange(distance);
    },
    mousedown(e) {
      e.stopPropagation();
      if (e.ctrlKey || e.button === 2) {
        return;
      }

      this.isDragging = true;
      this.oldOffset = this.scroll * this.maxTranslate;
      this.startPoint = e[this.propertys.client];
      on(window, "mousemove", this.throttleMove);
      on(window, "mouseup", this.mouseup);
      window.onselectstart = () => false;
    },
    mousemove(e) {
      e.preventDefault();
      if (this.isDragging === false) return;

      let distance =
        this.oldOffset + e[this.propertys.client] - this.startPoint;
      this.emitChange(distance);
    },
    mouseup() {
      this.isDragging = false;
      off(window, "mousemove", this.throttleMove);
      off(window, "mouseup", this.mouseup);
      window.onselectstart = null;
    }
  },
  mounted() {
    this.update();
  }
};
</script>
