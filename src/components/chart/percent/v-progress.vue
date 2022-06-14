<template>
  <v-chart-percent
    :value="value"
    :type="type"
    :strokeWidth="strokeWidth"
    :padding="padding"
    :text-position="type === 'line' ? 'right' : 'auto'"
    :width="width"
    :height="height"
    :colors="[color]"
  >
    <i
      v-if="iconClass"
      :class="iconClass"
      :style="{ color: color, fontSize: iconSize + 'px' }"
    ></i>

    <div v-else :style="{ fontSize: iconSize + 'px' }">
      {{ value | percent }}
    </div>
  </v-chart-percent>
</template>

<script>
const STATUS = {
  PROGRESS: "progress",
  ERROR: "success",
  SUCCESS: "error"
};
const IS_TRADE = process.env.THEME === "trade";
export default {
  name: "v-progress",
  props: {
    // 百分比图类型
    type: {
      type: String,
      default: "circle",
      validator(val) {
        return ["circle", "line"].indexOf(val) > -1;
      }
    },
    // 状态
    state: {
      type: String,
      default: STATUS.PROGRESS,
      validator(val) {
        return (
          [STATUS.PROGRESS, STATUS.SUCCESS, STATUS.ERROR].indexOf(val) > -1
        );
      }
    },
    // 值
    value: {
      type: Number,
      default: 0
    },
    // 进行中颜色
    progressColor: {
      type: String,
      default: IS_TRADE ? "#0058E4" : "#ff801f"
    },
    // 完成颜色
    successColor: {
      type: String,
      default: IS_TRADE ? "#1DB879" : "#17cc82"
    },
    // 失败颜色
    errorColor: {
      type: String,
      default: IS_TRADE ? "#F7421E" : "#f7421e"
    },
    // 背景色区间
    backColor: {
      type: String,
      default: IS_TRADE ? "#E8E9EC" : "#e9e9e9"
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
    iconSize: {
      type: Number,
      default: 14
    }
  },
  data() {
    this.STATUS = STATUS;
    // 描述信息高
    return {
      status: this.state
    };
  },
  watch: {
    value(val) {
      this.status = val === 1 ? STATUS.SUCCESS : STATUS.PROGRESS;
    },
    state(val) {
      this.status = val;
    }
  },
  filters: {
    percent(val) {
      return (val * 100).toFixed(0) + "%";
    }
  },
  computed: {
    color() {
      switch (this.status) {
        case STATUS.SUCCESS:
          return this.successColor;
        case STATUS.ERROR:
          return this.errorColor;
        default:
          return this.progressColor;
      }
    },
    iconClass() {
      let t = "";
      switch (this.status) {
        case STATUS.SUCCESS:
          t = "v-icon-ok";
          break;
        case STATUS.ERROR:
          t = "v-icon-close";
          break;
      }
      if (t && this.type === "line") {
        t += "-plane";
      }
      return t;
    }
  }
};
</script>
