import { isObject, isArray, isUndefinedOrNull } from "../libs";
import { DEFAULT_COLORS } from "./chart-lib";

export default {
  props: {
    // 系列数据
    series: {
      type: Array,
      required: true,
      validator(val) {
        if (val.length === 0) {
          return true;
        }
        let item = val[0];
        return (
          isObject(item) &&
          !isUndefinedOrNull(item["name"]) &&
          isArray(item["data"])
        );
      }
    },
    // 类别数据，对应x轴
    categories: {
      type: Array,
      required: true
    },
    // 图例显示类型
    legend: {
      type: String,
      default: "circle",
      validator(val) {
        return ["circle", "square"].indexOf(val) > -1;
      }
    },
    // 图表颜色
    colors: {
      type: Array,
      default() {
        return DEFAULT_COLORS;
      }
    },
    // 图表宽度
    width: {
      type: Number,
      default: 0
    },
    // 图表高度
    height: {
      type: Number,
      default: 0
    },
    // 图表X轴是否偏移，用于折线图
    isOffset: {
      type: Boolean,
      default: true
    },
    // 图表标题
    title: String,
    // 图表备注
    comment: String
  },
  computed: {
    // 图例列表
    legends() {
      return this.series.map(item => item.name);
    },
    // 是否加载动画
    hasAnimation() {
      return !!this.animation;
    }
  }
};

export const ChartProps = {
  props: {
    // 是否显示tip
    showTip: {
      type: Boolean,
      default: true
    },
    // 预设tip内容
    tipText: String,
    // 动画名称
    animation: {
      type: String,
      default: "easeOutCubic"
    }
  }
};

// 柱图和折线图Mixin
export const BarLineMixin = {
  computed: {
    // 图例颜色
    legendColor() {
      return this.$refs.chartbase ? this.$refs.chartbase.legendColor : {};
    }
  },
  methods: {
    // 获取坐标轴对象
    getAxis() {
      if (this.$refs.chartbase) {
        let axis = this.$refs.chartbase.axis;
        return axis.getAxis();
      }
    },
    // 获取图表容器的offsetLeft和Top
    getContainerOffset() {
      if (this.containerOffset) {
        return this.containerOffset;
      } else {
        return (this.containerOffset = {
          x: this.$refs.chartbase.$el.offsetLeft,
          y: this.$refs.chartbase.$el.offsetTop
        });
      }
    },
    // 刷新图表
    refresh(data) {
      this.update();
      this.$emit("legendClick", data);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.update();
    });
  }
};
