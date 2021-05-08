<template>
  <chart-base
    ref="chartbase"
    class="v-chart-bar"
    :isOffset="true"
    :title="title"
    :comment="comment"
    :height="height"
    :width="width"
    :series="series"
    :categories="categories"
    :legend="legend"
    @change="refresh"
    @mousemove.native="hover"
    @mouseleave.native="leave"
  >
    <!-- 鼠标悬浮柱条的背景遮罩 -->
    <transition name="fade">
      <rect
        name="tip-shadow"
        v-if="tipIndex > -1"
        :x="shadowX"
        :y="axis.yStart"
        :width="shadowWidth"
        :height="axis.yHeight"
        fill="rgba(0,0,0,0.03)"
        @click="click"
      ></rect>
    </transition>
    <!-- 柱条集合 -->
    <g name="bar">
      <rect
        v-for="(t, i) in animateBarList"
        :key="i"
        :x="t.x"
        :y="t.y"
        :width="t.width"
        :height="t.height"
        :fill="legendColor[t.legend]"
        stroke="none"
        stroke-width="0"
      ></rect>
    </g>
    <!-- 柱条上的数值集合 -->
    <g name="value" v-if="showValue && animatePercent === 1">
      <text
        v-for="(t, i) in barList"
        :x="t.x + t.width / 2"
        :y="t.y - 3"
        font-size="12"
        fill="#565656"
        text-anchor="middle"
        :key="i"
        >{{ t.value | format }}
      </text>
    </g>
    <!-- tool tip -->
    <template v-slot:tip>
      <transition name="fade">
        <div
          class="v-chart__tip"
          v-if="showTip && tipIndex > -1"
          :style="tipStyle"
        >
          <div v-if="tipText">{{ tipText }}</div>
          <div>{{ barList[tipIndex].legend }}</div>
          <div class="v-chart__tip__data">
            <i
              class="v-chart__tip__data__point"
              :style="{ background: legendColor[barList[tipIndex].legend] }"
            ></i>
            <span>{{ barList[tipIndex].value | format }}</span>
          </div>
        </div>
      </transition>
    </template>
  </chart-base>
</template>

<script>
import ChartBase from "../chart-base.vue";
import mixin, { BarLineMixin, ChartProps } from "../chart-mixins";
import {
  TIP_OFFSET_TOP,
  TIP_OFFSET_HORIZONTAL,
  BAR_CONFIG
} from "../chart-lib";
import tween from "../../easing-function";

export default {
  name: "v-chart-bar",
  mixins: [mixin, BarLineMixin, ChartProps],
  props: {
    // 是否在柱条上显示对应的数值
    showValue: {
      type: Boolean,
      default: false
    }
  },
  data() {
    this.axis = {};
    // 上一次的柱条位置信息，在过渡动画时使用
    this.oldBars = {};

    return {
      // 动画的完成情况
      animatePercent: this.hasAnimation ? 0 : 1,
      // 柱条的最终位置大小信息
      barList: [],
      // 动画过程中的柱条位置大小信息
      animateBarList: [],
      // 柱条的配置信息
      barCfg: {
        // 柱条的位置间隔偏移
        offset: 0,
        // 柱条的实际宽度
        barWidth: 0
      },
      // 鼠标悬浮提示框的位置信息
      tip: {
        x: 0,
        y: 0
      },
      // 鼠标悬浮柱条背景遮罩的X轴坐标
      shadowX: 0,
      // 鼠标悬浮柱条背景遮罩的宽度(柱条宽度 + 2 * 柱条间距)
      shadowWidth: 0,
      // 鼠标悬浮选中的柱条的索引
      tipIndex: -1,
      // 当前选中的category索引
      categoryIndex: 0
    };
  },
  filters: {
    format(data) {
      data = Number(data);
      if ((data | 0) == data) {
        return data | 0;
      }
      return data.toFixed(2);
    }
  },
  watch: {
    barList(barList) {
      if (!this.hasAnimation) {
        this.animateBarList.splice(0, this.animateBarList.length, ...barList);
        return;
      }

      this.animatePercent = 0;
      let remove = false;
      tween(
        0,
        1,
        state => {
          let list = [],
            oldBars = this.oldBars,
            // 记录需要移除的柱条
            cloneOldBars = Object.assign({}, oldBars);
          // 更新所有需要显示的柱条的信息
          barList.forEach(bar => {
            let key = `${bar.legend}-${bar.category}`;
            let oldBar = oldBars[key];
            list.push(
              Object.assign(
                {},
                bar,
                // 新增柱条从0开始过渡到当前值，已存在的柱条从上一次的值过渡到当前值
                oldBar
                  ? {
                      x: oldBar.x + state * (bar.x - oldBar.x),
                      y: oldBar.y + state * (bar.y - oldBar.y),
                      width: oldBar.width + state * (bar.width - oldBar.width),
                      height:
                        oldBar.height + state * (bar.height - oldBar.height)
                    }
                  : {
                      x: bar.x,
                      y: bar.y + (1 - state) * bar.height,
                      width: state * bar.width,
                      height: state * bar.height
                    }
              )
            );
            // 只保留需要移除的柱条信息，便于后面区别处理
            if (oldBar) {
              delete cloneOldBars[key];
            }
          });
          // 对需要隐藏的柱条，将其慢慢从图表中缩小至消失
          for (let key in cloneOldBars) {
            remove = true;
            let oldBar = oldBars[key];
            // 将所有需要移除的柱条反正数组最前面，这样显示的时候可以慢慢被后面的柱条覆盖，直至消失
            list.unshift(
              Object.assign({}, oldBar, {
                x: oldBar.x + (state * oldBar.width) / 2,
                y: oldBar.y + state * oldBar.height,
                width: (1 - state) * oldBar.width,
                height: (1 - state) * oldBar.height
              })
            );
          }

          this.animateBarList.splice(0, this.animateBarList.length, ...list);
        },
        500,
        this.animation
      ).then(() => {
        this.animatePercent = 1;
        // 动画结束，移除已经消失的柱条
        remove && this.animateBarList.splice(0, this.categories.length);
      });
    }
  },
  computed: {
    // 鼠标悬浮tool tip相关信息
    tipStyle() {
      let res = { top: `${this.tip.y - TIP_OFFSET_TOP}px` };
      let isLeft = this.tipIndex > this.barList.length / 2;
      let left = this.tip.x + TIP_OFFSET_HORIZONTAL,
        translateX = "0";
      if (isLeft) {
        left -= TIP_OFFSET_HORIZONTAL * 2;
        translateX = "-100%";
      }

      res["left"] = `${left}px`;
      res["-webkit-transform"] = `translate(${translateX}, 0)`;
      res["-ms-transform"] = `translate(${translateX}, 0)`;
      res["transform"] = `translate(${translateX}, 0)`;

      return res;
    }
  },
  components: { ChartBase },
  methods: {
    update() {
      this.axis = this.getAxis();
      this.draw();
    },
    /**
     * 绘制柱条
     */
    draw() {
      this.getBarWidth();
      let { categories, axis, barCfg } = this;
      let { xLabelWidth, xStart, yEnd } = axis;

      let list = [],
        seriesLen = this.$refs.chartbase.chartSeries.length;
      this.cacheBar();

      this.$refs.chartbase.chartSeries.forEach((item, i) => {
        item.data.forEach((data, j) => {
          let h = this.toSize(data);
          list[j * seriesLen + i] = {
            x:
              xStart +
              barCfg.offset +
              j * xLabelWidth +
              i * (barCfg.barWidth + BAR_CONFIG.barGap),
            y: yEnd - h,
            width: barCfg.barWidth,
            height: h,
            value: data,
            legend: item.name,
            category: categories[j]
          };
        });
      });
      this.barList.splice(0, this.barList.length, ...list);
    },
    /**
     * 缓存上一次的数据，用于过渡动画显示
     */
    cacheBar() {
      let res = {};
      this.barList.forEach(item => {
        res[`${item.legend}-${item.category}`] = item;
      });
      this.oldBars = res;
    },
    /**
     * 计算柱条的宽度等信息
     */
    getBarWidth() {
      let { xLabelWidth } = this.axis;
      let len = this.$refs.chartbase.chartSeries.length;
      let perBarWidth =
        (xLabelWidth - (len - 1) * BAR_CONFIG.barGap) / (len + 1);
      perBarWidth = Math.floor(perBarWidth);
      if (perBarWidth > BAR_CONFIG.MAX_WIDTH) {
        perBarWidth = BAR_CONFIG.MAX_WIDTH;
      }

      this.barCfg.barWidth = perBarWidth;
      this.barCfg.offset =
        (xLabelWidth - perBarWidth * len - (len - 1) * BAR_CONFIG.barGap) / 2;
    },
    /**
     * 根据数值计算柱条的高度
     */
    toSize(val) {
      let { min, range, yHeight } = this.axis,
        data = val - min;
      return Math.floor((data / range) * yHeight);
    },
    /**
     * 柱条的点击事件
     */
    click() {
      let data = this.barList[this.tipIndex];
      this.$emit("click", {
        value: data.value,
        legend: data.legend,
        category: data.category
      });
    },
    /**
     * mouseover交互
     */
    hover(e) {
      let { xStart, xEnd, yStart, yEnd, xLabelWidth } = this.axis;
      let offset = this.getContainerOffset();
      let x = e.pageX - offset.x;
      let y = e.pageY - offset.y;

      // 不在柱状图的绘制区域内则不作任何处理
      if (x < xStart || x > xEnd || y < yStart || y > yEnd) {
        this.tipIndex = -1;
        return;
      }

      let categoryIndex = 0;

      // 记录tool tip的x、y轴坐标
      this.tip.x = x;
      this.tip.y = y;

      x -= xStart;
      let percentage = x / xLabelWidth;

      // 鼠标在最末尾
      if (percentage === this.categories.length) {
        this.tipIndex = -1;
        return;
      }
      this.categoryIndex = categoryIndex = ~~percentage;
      percentage -= categoryIndex;
      let width = x - xLabelWidth * categoryIndex;
      // 鼠标在两个类别之间不显示tool tip
      if (width < this.barCfg.offset) {
        this.tipIndex = -1;
        return;
      }
      width -= this.barCfg.offset;
      let index = ~~(width / (this.barCfg.barWidth + BAR_CONFIG.barGap)),
        len = this.$refs.chartbase.chartSeries.length;
      // 鼠标超出范围
      if (categoryIndex >= this.categories.length || index >= len) {
        this.tipIndex = -1;
        return;
      }
      this.tipIndex = categoryIndex * len + index;

      this.shadowX = this.barList[this.tipIndex].x - BAR_CONFIG.barGap / 2;
      this.shadowWidth = this.barCfg.barWidth + BAR_CONFIG.barGap;
    },
    leave() {
      this.tipIndex = -1;
      this.containerOffset = null;
    }
  }
};
</script>
