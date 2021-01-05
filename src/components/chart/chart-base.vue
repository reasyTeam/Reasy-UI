<template>
  <section class="v-chart">
    <svg
      :width="renderWidth"
      :height="renderHeight"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- title -->
      <text name="title" x="0" :y="titleY" v-if="title" class="v-chart__title">
        {{ title }}
      </text>
      <!-- 坐标轴背景 -->
      <g name="axis" ref="back"></g>
      <!-- 具体图表内容区 -->
      <slot></slot>
      <!-- comment -->
      <text
        name="comment"
        x="100%"
        :y="commentY"
        v-if="comment"
        class="v-chart__comment"
        text-anchor="end"
      >
        {{ comment }}
      </text>
    </svg>
    <!-- legends -->
    <v-chart-legend
      :style="{ top: `${legendY}px`, right: `3px` }"
      :legend="legend"
      :legends="legends"
      :legendColor="legendColor"
      :hideLegends="hideLegends"
      @change="change"
    ></v-chart-legend>
    <!-- tool tip -->
    <slot name="tip"></slot>
  </section>
</template>

<script>
import VChartLegend from "./v-chart-legend.vue";
import ChartAxis from "./axis";
import { CHARTBASE_CONFIG } from "./chart-lib";
import mixin from "./chart-mixins";

export default {
  mixins: [mixin],
  data() {
    // 图表的坐标轴位置信息
    this.axis = new ChartAxis({
      categories: this.categories,
      series: this.series
    });

    return {
      // 置灰的图例列表
      hideLegends: {},
      // 图表的渲染宽度
      renderWidth: this.width,
      // 图表的渲染高度
      renderHeight: this.height
    };
  },
  computed: {
    // title在Y轴的位置
    titleY() {
      return this.title
        ? (CHARTBASE_CONFIG.title.height - CHARTBASE_CONFIG.title.fontsize) /
            2 +
            CHARTBASE_CONFIG.title.fontsize
        : 0;
    },
    // 注释在Y轴的位置
    commentY() {
      return this.comment
        ? this.renderHeight -
            (CHARTBASE_CONFIG.legend.height -
              CHARTBASE_CONFIG.legend.fontsize) /
              2
        : 0;
    },
    // 图例在Y轴的位置
    legendY() {
      return (this.title ? CHARTBASE_CONFIG.title.height : 0) + 1;
    },
    // 图例对应的颜色值
    legendColor() {
      let l = this.series.length;
      return this.series.reduce((obj, item, i) => {
        obj[item.name] = this.colors[i % l];
        return obj;
      }, {});
    },
    // 图表当前渲染的series数据(去除hideLegends之后的数据)
    chartSeries() {
      return this.series.filter(item => !this.hideLegends[item.name]);
    }
  },
  components: {
    VChartLegend
  },
  methods: {
    // 计算坐标轴相关信息
    calcuate() {
      this.renderWidth = this.width || this.$el.clientWidth;
      this.renderHeight = this.height || this.$el.parentNode.clientHeight;

      this.axis.refresh({
        offsetGridLines: this.isOffset,
        categories: this.categories,
        series: this.chartSeries,
        hideLegends: this.hideLegends,
        renderWidth: this.renderWidth,
        renderHeight: this.renderHeight,
        start: this.legendY + CHARTBASE_CONFIG.legend.height,
        end:
          this.renderHeight -
          (this.comment ? CHARTBASE_CONFIG.comment.height : 0)
      });
      this.$refs.back.innerHTML = "";
      // 在指定区域绘制坐标轴
      this.axis.draw(this.$refs.back);
    },
    // 刷新图表数据
    refresh(legend) {
      this.$nextTick(() => {
        this.calcuate();
        legend && this.$emit("change", legend);
      });
    },
    // 切换图例事件
    change(item) {
      this.$set(this.hideLegends, item, !this.hideLegends[item]);
      this.refresh(item);
    }
  },
  mounted() {
    this.calcuate();
  },
  beforeDestroy() {
    this.axis.uninstall();
  }
};
</script>
