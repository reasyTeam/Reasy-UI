<template>
  <section class="v-chart v-chart-pie" @mousemove="hover">
    <svg
      :width="renderWidth"
      :height="renderHeight"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- title部分 -->
      <text name="title" x="0" :y="titleY" v-if="title" class="v-chart__title">
        {{ title }}
      </text>
      <!-- 饼图部分 -->
      <g name="pie">
        <!-- 如果单个类别占满100%则直接绘制圆形 -->
        <template
          v-if="
            animateSectors.length === 1 &&
              Math.abs(animateSectors[0].start.x - animateSectors[0].end.x) < 1
          "
        >
          <circle
            :cx="center.x"
            :cy="center.y"
            :r="animateSectors[0].r"
            stroke-width="3"
            stroke="#fff"
            :fill="animateSectors[0].fill"
          ></circle>
        </template>
        <!-- 绘制扇形 -->
        <template v-else>
          <path
            stroke="#fff"
            stroke-width="3"
            v-for="path in animateSectors"
            :key="path.name"
            :d="
              `M${path.start.x} ${path.start.y} A ${path.r} ${path.r}, 0, ${
                path.percent > 0.5 ? 1 : 0
              }, 1, ${path.end.x} ${path.end.y} L ${center.x} ${center.y} Z`
            "
            :fill="path.fill"
          />
        </template>
        <!-- 内部白底圆 -->
        <circle
          v-if="center.r > 0"
          :cx="center.x"
          :cy="center.y"
          :r="center.r - cfg.circleWidth"
          fill="#fff"
        ></circle>
      </g>
      <!-- 每个扇形的描述信息 -->
      <transition name="fade">
        <g name="lines" v-if="showDesc">
          <g v-for="point in points" :key="point.name" :name="point.name">
            <path
              :d="
                `M${point.start.x} ${point.start.y} Q${point.center.x} ${point.center.y}, ${point.end.x} ${point.end.y}`
              "
              :stroke="point.stroke"
              stroke-width="1.5"
              fill="none"
            ></path>
            <text
              :x="point.end.x + (point.isLeft ? -4 : 4)"
              :y="point.end.y + 6"
              :fill="point.stroke"
              :text-anchor="point.isLeft ? 'end' : 'start'"
              font-size="12"
            >
              {{ point.percent | percent }}
            </text>
          </g>
        </g>
      </transition>
      <!-- 底部备注信息 -->
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
      <!-- 鼠标悬浮突出块扇形圆环 -->
      <g @click="click" v-if="tipIndex > -1">
        <path
          stroke="#fff"
          stroke-width="3"
          :d="
            `M${tipArc[1].start} A ${tipArc[1].r} ${tipArc[1].r}, 0, ${
              tipArc[1].percent > 0.5 ? 1 : 0
            }, 1, ${tipArc[1].end} L ${center.x} ${center.y} Z`
          "
          :fill="tipArc[1].fill"
        />
        <path
          stroke="#fff"
          stroke-width="3"
          :d="
            `M${tipArc[0].start} A ${tipArc[0].r} ${tipArc[0].r}, 0, ${
              tipArc[0].percent > 0.5 ? 1 : 0
            }, 1, ${tipArc[0].end} L ${center.x} ${center.y} Z`
          "
          fill="#fff"
        />
      </g>
    </svg>
    <!-- legends -->
    <v-chart-legend
      :style="{ bottom: `${legendY}px` }"
      :legend="legend"
      :legends="categories"
      :legendColor="legendColor"
      :hideLegends="hideLegends"
      @change="change"
    ></v-chart-legend>
    <!-- 鼠标悬浮提示信息 -->
    <transition name="fade">
      <div
        class="v-chart__tip"
        v-if="showTip && tipIndex > -1"
        :style="{ top: tip.y + 'px', left: tip.x + 'px' }"
      >
        <div v-if="tipText">{{ tipText }}</div>
        <div>{{ points[tipIndex].name }}</div>
        <div class="v-chart__tip__data">
          <i
            class="v-chart__tip__data__point"
            :style="{ background: points[tipIndex].stroke }"
          ></i>
          <span>{{ points[tipIndex].percent | percent }}</span>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import VChartLegend from "../v-chart-legend.vue";
import mixin, { ChartProps } from "../chart-mixins";
import { CHARTBASE_CONFIG } from "../chart-lib";
import { SvgHandle } from "../axis";
import tween from "../../easing-function";

const DESC_OFFSET = 16;

export default {
  name: "v-chart-pie",
  mixins: [mixin, ChartProps],
  props: {
    series: {
      type: Array,
      required: true
    }
  },
  data() {
    let svgHandle = new SvgHandle();
    this.svgHeight = svgHandle.getTextHeight();
    this.dataObject = {};
    this.showCates = [];
    this.cfg = {
      circleWidth: 18,
      offset: 4
    };
    this.oldSectors = [];
    return {
      // 扇形的路径信息
      paths: [],
      // 动画过程中的扇形信息
      animateSectors: [],
      // 扇形描述信息的坐标
      points: [],
      // 鼠标悬浮显示的tip位置信息
      tipArc: [],
      // 置灰隐藏的图例
      hideLegends: {},
      // 显示描述信息
      showDesc: false,
      // 鼠标悬浮选中的扇形索引
      tipIndex: -1,
      // 鼠标悬浮框的位置
      tip: {
        x: 0,
        y: 0
      },
      // svg中心的坐标和扇形半径
      center: {
        x: 0,
        y: 0,
        r: 0
      },
      // 图表的渲染宽度
      renderWidth: this.width,
      // 图表的渲染高度
      renderHeight: this.height
    };
  },
  components: {
    VChartLegend
  },
  computed: {
    // legend在Y轴的位置
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
            (CHARTBASE_CONFIG.comment.height -
              CHARTBASE_CONFIG.comment.fontsize) /
              2
        : 0;
    },
    // 图例在Y轴的位置
    legendY() {
      return this.comment ? CHARTBASE_CONFIG.comment.height : 0;
    },
    // 图例对应的颜色值
    legendColor() {
      let l = this.colors.length;
      return this.categories.reduce((obj, item, i) => {
        obj[item] = this.colors[i % l];
        return obj;
      }, {});
    }
  },
  watch: {
    tipIndex() {
      if (this.tipIndex === -1) {
        return;
      }

      let { x, y, r } = this.center;
      let { circleWidth, offset } = this.cfg;
      let { percent, endPercent, stroke } = this.points[this.tipIndex];
      // 动画
      tween(
        0,
        1,
        state => {
          let r1 = r + (offset - circleWidth) * state;
          let r2 = r + offset * state;
          let res = [
            {
              start: `${x + r1 * this.sin(endPercent - percent)} ${y -
                r1 * this.cos(endPercent - percent)}`,
              end: `${x + r1 * this.sin(endPercent)} ${y -
                r1 * this.cos(endPercent)}`,
              r: r1,
              fill: stroke,
              percent: percent
            },
            {
              start: `${x + r2 * this.sin(endPercent - percent)} ${y -
                r2 * this.cos(endPercent - percent)}`,
              end: `${x + r2 * this.sin(endPercent)} ${y -
                r2 * this.cos(endPercent)}`,
              r: r2,
              fill: stroke,
              percent: percent
            }
          ];

          this.tipArc.splice(0, this.tipArc.length, ...res);
        },
        500,
        "easeOutElastic"
      );
    }
  },
  filters: {
    percent(val) {
      return (val * 100).toFixed(2) + "%";
    }
  },
  methods: {
    /**
     * 整理数据
     */
    format() {
      this.dataObject = this.categories.reduce((res, item, i) => {
        res[item] = {
          data: this.series[i],
          percent: 0
        };
        return res;
      }, {});
    },
    /**
     * 确定圆心和半径
     */
    circleAndRadius() {
      let top = this.titleY;
      let height =
        this.renderHeight -
        top -
        (this.comment ? CHARTBASE_CONFIG.comment.height : 0) -
        CHARTBASE_CONFIG.legend.height;
      // 饼图占空余部分的2/3
      let r = (this.center.r = Math.floor((height * 2) / 3 / 2));
      this.center.x = Math.floor(this.renderWidth / 2);
      // 圆心Y坐标：top + r + 饼图上面空白部分的高
      this.center.y =
        top + r + Math.floor((height - r * 2) / 2 - this.cfg.offset / 2);
    },
    /**
     * 更新图表
     */
    update() {
      this.renderWidth = this.width || this.$el.clientWidth;
      this.renderHeight = this.height || this.$el.parentNode.clientHeight;
      this.calculate();
      this.circleAndRadius();
      this.showDesc = false;
      this.animatePie().then(() => {
        this.getPoints();
        this.showDesc = true;
      });
    },
    animatePie() {
      if (!this.hasAnimation) {
        this.animateSectors.splice(
          0,
          this.animateSectors.length,
          ...this.getSectors(1)
        );
        return Promise.resolve();
      }

      return tween(
        0,
        1,
        state => {
          let paths = this.getSectors(state);
          this.animateSectors.splice(0, this.animateSectors.length, ...paths);
        },
        500,
        this.animation
      );
    },
    /**
     * 计算所有扇形路径
     */
    getSectors(state) {
      let paths = [],
        oldSectors = this.oldSectors;
      // 圆上点坐标，起始方向为Y轴正方向，角度为a
      // x = 圆心横坐标x + r * sin(a)
      // y = 圆心Y坐标 - r * cos(a)
      let { x, y, r } = this.center;
      let start = { x, y: y - r },
        per = 0,
        isRemove = oldSectors.length > this.showCates.length,
        index = 0;
      this.showCates.forEach(name => {
        let { percent } = this.dataObject[name];
        let oldSector = oldSectors[index++];
        while (isRemove && oldSector && oldSector.name !== name) {
          per += oldSector.percent * (1 - state);
          start = {
            x: x + r * this.sin(per),
            y: y - r * this.cos(per)
          };
          oldSector = oldSectors[index++];
        }
        if (oldSector && oldSector.name === name) {
          percent = oldSector.percent + state * (percent - oldSector.percent);
        } else {
          index--;
          percent = percent * state;
        }
        per += percent;
        // 扇形
        let end = {
          x: x + r * this.sin(per),
          y: y - r * this.cos(per)
        };
        paths.push({
          start,
          end,
          name,
          r,
          fill: this.legendColor[name],
          percent: percent
        });
        start = end;
      });
      return paths;
    },
    /**
     * 计算所有扇形描述信息的位置
     */
    getPoints() {
      let points = [],
        per = 0;
      this.showCates.forEach(name => {
        let { data, percent } = this.dataObject[name];
        per += percent;
        points.push(this.locateDesc(data, percent, per, name));
      });
      this.correctLocate(points);
      this.points.splice(0, this.points.length, ...points);
    },
    /**
     * 确定描述信息和线条的初始位置
     */
    locateDesc(data, percent, per, name) {
      let { x, y, r } = this.center;
      let rPoint = r + DESC_OFFSET;
      per = per - percent / 2;
      let sin = this.sin(per),
        cos = this.cos(per);
      let start = {
          x: x + r * sin,
          y: y - r * cos
        },
        center = {
          x: x + (r + 14) * sin,
          y: y - (r + 14) * cos
        },
        end = {
          x:
            x +
            (sin > 0 ? 1 : -1) *
              Math.sqrt(Math.pow(rPoint, 2) - Math.pow(center.y - y, 2)),
          y: center.y
        };
      return {
        start,
        center,
        end,
        percent,
        per,
        endPercent: per + percent / 2,
        stroke: this.legendColor[name],
        name,
        isLeft: per > 0.5,
        data
      };
    },
    /**
     * 修正位置信息。避免出现重叠和遮挡
     */
    correctLocate(points) {
      // 按左右划分，分别计算offset
      let quadrants = {
        left: [],
        right: []
      };
      // let quadrantsOffset = {};
      points.forEach(point => {
        if (point.per <= 0.5) {
          quadrants.right.push(point);
        } else {
          quadrants.left.push(point);
        }
      });
      // 分别修正饼图左右不分
      this.correctPoint(quadrants.right);
      this.correctPoint(quadrants.left.reverse());
    },
    /**
     * 同方向位置修正
     */
    correctPoint(points) {
      if (points.length <= 1) {
        return;
      }
      let { x, y, r } = this.center;
      let fontHeight = this.svgHeight - 2,
        offset = 0,
        lastY = 0,
        rOffset = r + DESC_OFFSET;
      // 从上到下逐个便宜
      points.forEach((point, i) => {
        let end = point.end;
        offset = end.y - lastY;
        if (offset > fontHeight) {
          lastY = end.y;
        } else {
          lastY = end.y += fontHeight - offset;
          if (rOffset - Math.abs(y - lastY) > 0) {
            end.x =
              x +
              (point.isLeft ? -1 : 1) *
                Math.sqrt(Math.pow(rOffset, 2) - Math.pow(lastY - y, 2));
          } else {
            if (point.isLeft && points[i - 1].end.x > end.x) {
              end.x = points[i - 1].end.x;
            } else if (!point.isLeft && points[i - 1].end.x < end.x) {
              end.x = points[i - 1].end.x;
            }
          }
        }
      });
      let topOffset = y - points[0].end.y - rOffset;
      let bottomOffset = points[points.length - 1].end.y - rOffset - y;
      if (bottomOffset > 0 && bottomOffset > topOffset) {
        let t = (bottomOffset - topOffset) / 2;
        if (t - bottomOffset > 0) {
          t = bottomOffset;
        }
        // 从下到上回位修正
        points.reverse().forEach((point, i) => {
          if (i === 0) {
            lastY = point.end.y -= t;

            return true;
          }
          offset = lastY - point.end.y;
          if (offset > fontHeight) {
            lastY = point.end.y;
          } else {
            lastY = point.end.y -= fontHeight - offset;
            if (rOffset - Math.abs(lastY - y) > 0) {
              point.end.x =
                x +
                (point.isLeft ? -1 : 1) *
                  Math.sqrt(Math.pow(rOffset, 2) - Math.pow(lastY - y, 2));
            }
          }
        });
      }
    },
    /**
     * 计算当前需要显示的数据
     */
    calculate() {
      let sum = 0,
        showCates = [];
      let { dataObject, hideLegends, categories } = this;
      categories.forEach(item => {
        if (!hideLegends[item]) {
          sum += dataObject[item].data;
          showCates.push(item);
        }
      });
      showCates.forEach(item => {
        dataObject[item].percent = dataObject[item].data / sum;
      });
      this.showCates = showCates;
    },
    /**
     * 正弦
     */
    sin(per) {
      return Math.sin(per * Math.PI * 2);
    },
    /**
     * 余弦
     */
    cos(per) {
      return Math.cos(per * Math.PI * 2);
    },
    /**
     * 求和
     */
    sum(arr) {
      return arr.reduce((res, item) => res + item, 0);
    },

    refresh(legend) {
      // nextTick收集同时间多次refresh一次处理
      this.$nextTick(() => {
        this.update();
        legend && this.$emit("legendClick", legend);
      });
    },

    change(item) {
      this.$set(this.hideLegends, item, !this.hideLegends[item]);
      this.cacheSectors();
      this.refresh(item);
    },

    cacheSectors() {
      this.oldSectors = this.animateSectors.slice();
    },

    hover(e) {
      let index = this.getIndex(e);
      if (index === -1) {
        this.tipIndex = -1;
        return;
      }
      this.tipIndex = index;

      let offset = this.getContainerOffset();
      this.tip.x = e.pageX - offset.x;
      this.tip.y = e.pageY - offset.y;
    },

    getIndex(e) {
      let offset = this.getContainerOffset(),
        centerX = this.center.x,
        centerY = this.center.y,
        points = this.points,
        r = this.center.r,
        x = e.pageX - offset.x,
        y = e.pageY - offset.y;
      // 不在饼图的绘制区域内则不作任何处理
      if (Math.sqrt(Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2)) > r) {
        return -1;
      }

      let angel = 0;
      if (x > centerX) {
        angel = Math.atan((x - centerX) / (centerY - y));
        if (angel < 0) {
          angel = Math.PI + angel;
        }
      } else {
        angel = Math.atan((centerX - x) / (centerY - y));
        if (angel > 0) {
          angel = Math.PI * 2 - angel;
        } else {
          angel = Math.PI - angel;
        }
      }
      let angelPercent = angel / Math.PI / 2;
      for (let i = 0, l = points.length; i < l; i++) {
        if (angelPercent <= points[i].endPercent) {
          return i;
        }
      }
      return points.length - 1;
    },

    click(e) {
      let index = this.getIndex(e);
      if (index === -1) {
        this.tipIndex = -1;
        return;
      }

      this.$emit("click", {
        value: this.points[index].data,
        category: this.points[index].name
      });
    },

    leave() {
      this.tipIndex = -1;
      this.containerOffset = null;
    },

    getContainerOffset() {
      if (this.containerOffset) {
        return this.containerOffset;
      } else {
        return (this.containerOffset = {
          x: this.$el.offsetLeft,
          y: this.$el.offsetTop
        });
      }
    }
  },
  mounted() {
    this.format();
    this.update();
  }
};
</script>
