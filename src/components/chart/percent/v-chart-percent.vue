<template>
  <section class="v-chart__percent">
    <svg
      :width="renderWidth"
      :height="renderHeight"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- 圆环 -->
      <g
        v-if="type === 'circle'"
        name="circle"
        :class="{ 'v-chart__percent__circle': mounted }"
      >
        <!-- 背景圆环 -->
        <circle
          name="back"
          :cx="center.x"
          :cy="center.y"
          :r="center.r"
          :stroke="backColor[activeIndex % backColor.length]"
          :stroke-width="strokeWidth"
          fill="none"
        />
        <!-- 数值环 -->
        <circle
          name="back"
          :cx="center.x"
          :cy="center.y"
          :r="center.r"
          :stroke="colors[activeIndex % colors.length]"
          :stroke-width="strokeWidth"
          stroke-linecap="round"
          :stroke-dasharray="dashArray"
          fill="none"
          class="dash-animate"
        ></circle>
      </g>
      <!-- 线条 -->
      <g v-else name="bar">
        <!-- 背景条 -->
        <line
          name="back"
          :x1="center.x"
          :x2="center.x + center.r"
          :y1="center.y"
          :y2="center.y"
          :stroke="backColor[activeIndex % backColor.length]"
          :stroke-width="strokeWidth"
          stroke-linecap="round"
        ></line>
        <!-- 进度条 -->
        <line
          name="line"
          :x1="center.x"
          :x2="center.x + center.r"
          :y1="center.y"
          :y2="center.y"
          :stroke="colors[activeIndex % colors.length]"
          :stroke-width="strokeWidth"
          stroke-linecap="round"
          :stroke-dasharray="dashArray"
          class="dash-animate"
        ></line>
      </g>
    </svg>
    <!-- 描述信息 -->
    <div
      class="v-chart__percent__detail"
      v-show="showText"
      :class="{ line: !isCircle, 'chart-text-right': isTextRight }"
      :style="{ width: `${detailWidth}px` }"
    >
      <slot>
        <div class="v-chart__percent__detail__value">{{ value | percent }}</div>
        <div class="v-chart__percent__detail__text" v-if="title">
          {{ title }}
        </div>
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "v-chart-percent",
  props: {
    // 百分比图类型
    type: {
      type: String,
      default: "circle",
      validator(val) {
        return ["circle", "line"].indexOf(val) > -1;
      }
    },
    // 值
    value: {
      type: Number,
      default: 0
    },
    // 标题
    title: String,
    // 颜色区间
    colors: {
      type: Array,
      default() {
        return ["#ff801f"];
      }
    },
    // 颜色值区间
    colorValue: {
      type: Array,
      default() {
        return [1];
      }
    },
    // 背景色区间
    backColor: {
      type: Array,
      default() {
        return ["#e9e9e9"];
      }
    },
    // 百分比图线条宽
    strokeWidth: {
      type: Number,
      default: 8
    },
    // 百分比图内边距
    padding: {
      type: Number,
      default: 20
    },
    // 图宽
    width: {
      type: Number,
      default: 0
    },
    // 图高
    height: {
      type: Number,
      default: 0
    },
    showText:{
      type: Boolean,
      default: true
    },
    textPosition:{
      type: String,
      default: 'auto',
      validator(val) {
        return ["auto", "right"].indexOf(val) > -1;
      }
    },
    textWidth:{
      type: Number, String,
      default: 40
    }
  },
  data() {
    // 描述信息高
    this.detailHeight = 34;
    return {
      // 图表的渲染宽度
      renderWidth: this.width,
      // 图表的渲染高度
      renderHeight: this.height,
      // 图表渲染完成
      mounted: false,
      // stroke-dasharray
      dashArray: "0,3000",
      // 图标初始值
      initValue: this.value,
      // 中心点坐标
      center: {
        x: 0,
        y: 0,
        r: 0
      }
    };
  },
  computed: {
    // 周长
    perimeter() {
      if (this.isCircle) {
        return Math.PI * 2 * (this.center.r || 0);
      }
      return this.center.r;
    },
    // 当前值所在的区间索引
    activeIndex() {
      for (let i = 0; i < this.colorValue.length; i++) {
        if (this.value <= this.colorValue[i]) {
          return i;
        }
      }
      return 0;
    },
    // 是否是圆环
    isCircle() {
      return this.type === "circle";
    },
    // 描述信息宽
    detailWidth() {
      if (this.isCircle) {
        return this.center.r * 2;
      }
      if(this.isTextRight){
        return this.textWidth;
      }
      return this.center.r;
    },
    isTextRight() {
      return this.textPosition === 'right';
    }
  },
  watch: {
    value() {
      let perimeter = this.perimeter;
      this.dashArray = `${this.value * perimeter}, ${perimeter}`;
    }
  },
  filters: {
    percent(val) {
      return (val * 100).toFixed(0) + "%";
    }
  },
  methods: {
    /**
     * 计算图表信息
     */
    calculate() {
      if (this.type === "circle") {
        this.calculateCircle();
      } else {
        this.calculateBar();
      }
      // 解决初始动画卡顿问题
      setTimeout(() => {
        this.dashArray = `${this.value * this.perimeter},${this.perimeter}`;
      }, 200);
    },
    /**
     * 计算圆环信息
     */
    calculateCircle() {
      let width = this.renderWidth;
      let height = this.renderHeight;
      let { center, padding } = this;

      width -= padding * 2;
      height -= padding * 2;
      center.x = padding + Math.floor(width / 2);
      center.y = padding + Math.floor(height / 2);
      center.r = Math.floor((width < height ? width : height) / 2);
      this.mounted = true;
    },
    /**
     * 计算进度条信息
     */
    calculateBar() {
      let width = this.renderWidth;
      let height = this.renderHeight;
      let { center, padding } = this;

      width -= padding * 2;
      if(this.isTextRight){
        width -= this.textWidth + 10;
      }
      center.x = padding;
      center.y = Math.floor((height + ((this.isTextRight || !this.showText) ? 0 : this.detailHeight)) / 2);
      center.r = width;
    }
  },
  mounted() {
    this.renderWidth = this.width || this.$el.clientWidth;
    this.renderHeight = this.height || this.$el.parentNode.clientHeight;
    this.calculate();
  }
};
</script>
