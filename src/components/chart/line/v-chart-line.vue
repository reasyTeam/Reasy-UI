<template>
  <chart-base
    ref="chartbase"
    class="v-chart-line"
    :isOffset="isOffset"
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
    <!-- 折线区域 -->
    <g :name="t.legend" v-for="(t, i) in lineList" :key="i">
      <path
        :d="t.d"
        :stroke="legendColor[t.legend]"
        stroke-width="1.5"
        fill="none"
      ></path>
      <!-- 折线数据坐标点 -->
      <template v-if="showPoint && animatePercent === 1">
        <circle
          v-for="circle in points[i]"
          :key="circle.x"
          :cx="circle.x"
          :cy="circle.y"
          r="2"
          :fill="legendColor[t.legend]"
        ></circle>
      </template>
    </g>
    <!-- 鼠标悬浮，标志线区域 -->
    <transition name="fade">
      <g v-if="tipIndex > -1">
        <line
          :x1="hoverX"
          :y1="axis.yStart"
          :x2="hoverX"
          :y2="axis.yEnd"
          stroke-width="1"
          stroke="#838383"
          shape-rendering="crispEdges"
          stroke-dasharray="0"
        ></line>
        <circle
          v-for="(circle, i) in hoverPoints"
          :key="i"
          :cx="circle.x"
          :cy="circle.y"
          r="3.5"
          stroke-width="2"
          stroke="#fff"
          :fill="legendColor[circle.legend]"
        ></circle>
      </g>
    </transition>
    <!-- tool tip -->
    <template v-slot:tip>
      <transition name="fade">
        <div
          class="v-chart__tip"
          v-if="showTip && tipIndex > -1"
          :style="tipStyle"
        >
          <div v-if="tipText">{{ tipText }}</div>
          <div>{{ categories[tipIndex] }}</div>
          <div
            class="v-chart__tip__data"
            v-for="(item, i) in hoverPoints"
            :key="i"
          >
            <i
              class="v-chart__tip__data__point"
              :style="{ background: legendColor[item.legend] }"
            ></i>
            <span>{{ item.data }}</span>
          </div>
        </div>
      </transition>
    </template>
  </chart-base>
</template>

<script>
import ChartBase from "../chart-base.vue";
import mixin, { BarLineMixin, ChartProps } from "../chart-mixins";
import { BezierCurve } from "../chart-lib";
import { TIP_OFFSET_TOP, TIP_OFFSET_HORIZONTAL } from "../chart-lib";
import tween from "../../easing-function";

export default {
  name: "v-chart-line",
  mixins: [mixin, BarLineMixin, ChartProps],
  props: {
    // 折线图的显示类型，2：曲线，1：直线
    type: {
      type: [String, Number],
      default: 2
    },
    // 是否在柱条上显示对应的数值
    showPoint: {
      type: Boolean,
      default: false
    }
  },
  data() {
    this.axis = {};
    // 上一次的坐标点位置信息，在过渡动画时使用
    this.oldPoints = [];
    return {
      // 折线的路径信息
      lineList: [],
      // 动画的完成情况
      animatePercent: this.hasAnimation ? 0 : 1,
      // 折线坐标点信息
      points: [],
      // 鼠标悬浮选中的柱条的索引
      tipIndex: -1,
      // 鼠标悬浮标志线X轴坐标
      hoverX: 0,
      // 鼠标悬浮tooltip的Y轴坐标
      tipY: 0,
      // 鼠标悬浮标志线上的点集
      hoverPoints: []
    };
  },
  computed: {
    // 鼠标悬浮tool tip相关信息
    tipStyle() {
      let res = {
        top: this.tipY - TIP_OFFSET_TOP + "px"
      };

      let translateX = "0",
        left = this.hoverX + TIP_OFFSET_HORIZONTAL;
      if (this.tipIndex > (this.categories.length - 1) / 2) {
        translateX = "-100%";
        left -= TIP_OFFSET_HORIZONTAL * 2;
      }

      res["left"] = `${left}px`;
      res["-webkit-transform"] = `translate(${translateX}, 0)`;
      res["-ms-transform"] = `translate(${translateX}, 0)`;
      res["transform"] = `translate(${translateX}, 0)`;

      return res;
    }
  },
  watch: {
    tipIndex(val) {
      if (val === -1) {
        return;
      }
      this.hoverPoints.splice(
        0,
        this.hoverPoints.length,
        ...this.points.map(item => item[val])
      );
      if (this.axis) {
        let { xLabelWidth, xStart } = this.axis;
        this.hoverX =
          xStart + val * xLabelWidth + (this.isOffset ? xLabelWidth / 2 : 0);
      }
    },
    points(val) {
      if (!this.hasAnimation) {
        let list = [];
        val.forEach(points => {
          list.push({
            d: this.getPath(points),
            legend: points[0].legend
          });
        });
        this.lineList.splice(0, this.lineList.length, ...list);
        return;
      }

      this.animatePercent = 0;
      tween(
        0,
        1,
        state => {
          let list = [],
            oldPoints = this.oldPoints;
          val.forEach(item => {
            let oldItem = oldPoints[item[0].legend] || [];
            let points = [];
            item.forEach((point, j) => {
              let oldPoint = oldItem[j] || { y: this.axis.yEnd };
              points.push({
                x: point.x,
                y: oldPoint.y + state * (point.y - oldPoint.y)
              });
            });
            list.push({
              d: this.getPath(points),
              legend: item[0].legend
            });
          });
          this.lineList.splice(0, this.lineList.length, ...list);
        },
        500,
        this.animation
      ).then(() => {
        this.animatePercent = 1;
      });
    }
  },
  components: { ChartBase },
  methods: {
    update() {
      this.axis = this.getAxis();
      this.draw();
    },
    /**
     * 绘制柱折线
     */
    draw() {
      let pointList = [];
      let { xLabelWidth, xStart, yStart, range, min, yHeight } = this.axis;
      this.cachePoints();
      this.$refs.chartbase.chartSeries.forEach(item => {
        let offset = xStart + (this.isOffset ? xLabelWidth / 2 : 0),
          points = [];

        item.data.forEach((data, j) => {
          let y = Math.floor(yStart + yHeight * (1 - (data - min) / range));

          if (j !== 0) {
            offset += xLabelWidth;
          }
          points.push({ x: offset, y, data, legend: item.name });
        });
        pointList.push(points);
      });
      this.points.splice(0, this.points.length, ...pointList);
    },
    /**
     * 缓存上一次的数据，用于过渡动画显示
     */
    cachePoints() {
      let oldPoints = this.points.slice(0);
      let res = {};
      oldPoints.forEach(points => {
        res[points[0].legend] = points;
      });
      this.oldPoints = res;
    },
    /**
     * 计算折线的path
     */
    getPath(points) {
      if (this.type === 2) {
        return this.getBezierPath(points);
      }
      let d = "";
      points.forEach((point, i) => {
        if (i === 0) {
          d += `M${point.x} ${point.y}`;
        } else {
          d += ` L${point.x} ${point.y}`;
        }
      });
      return d;
    },
    /**
     * 计算贝塞尔曲线的路径
     */
    getBezierPath(points) {
      // 控制点集
      let cps = [];
      for (var i = 0; i < points.length - 2; i += 1) {
        cps = cps.concat(
          BezierCurve.getControlPoints(
            points[i].x,
            points[i].y,
            points[i + 1].x,
            points[i + 1].y,
            points[i + 2].x,
            points[i + 2].y
          )
        );
      }
      return BezierCurve.drawCurvedPath(cps, points);
    },
    /**
     * mouseover
     */
    hover(e) {
      let offset = this.getContainerOffset();
      let { xStart, xEnd, yStart, yEnd, xLabelWidth } = this.axis;
      let x = e.pageX - offset.x;
      let y = e.pageY - offset.y;
      // 不在折线的绘制区域内则不作任何处理
      if (x < xStart || x > xEnd || y < yStart || y > yEnd) {
        this.tipIndex = -1;
        return;
      }

      let i = 0,
        offsetPercent = 1 - (this.isOffset ? 0 : 0.5);
      x -= xStart;
      this.tipY = y;

      let percentage = x / xLabelWidth;
      for (i = 0; i < this.categories.length; i++) {
        if (percentage > i + offsetPercent) {
          continue;
        }
        break;
      }
      if (i === this.categories.length) {
        i--;
      }
      this.tipIndex = i;
    },
    leave() {
      this.tipIndex = -1;
      this.containerOffset = null;
    }
  }
};
</script>
