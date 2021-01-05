<template>
  <div
    :class="[
      'v-scroll__bar',
      direct === 'y' ? 'is-vertical' : 'is-horizontal',
      { active: isDragging }
    ]"
    @mousedown="barClick"
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
import { on, off } from "../libs";
import { renderTranslateStyle, PROPERTYS } from "./scroll-lib.js";

export default {
  props: {
    direct: String, // x, y
    barsize: Number,
    scroll: Number
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
      style[this.direct === "x" ? "width" : "height"] = this.barsize + "px";

      return style;
    }
  },
  watch: {
    barsize() {
      this.size = this.$el[this.propertys.offset];
      this.maxTranslate = this.size - this.barsize;
    }
  },
  methods: {
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
      distance = distance - this.barsize / 2;
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
      on(document, "mousemove", this.mousemove);
      on(document, "mouseup", this.mouseup);
      document.onselectstart = () => false;
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
      off(document, "mousemove", this.mousemove);
      off(document, "mouseup", this.mouseup);
      document.onselectstart = null;
    }
  },
  mounted() {
    this.size = this.$el[this.propertys.offset];
    this.maxTranslate = this.size - this.barsize;
  }
};
</script>
