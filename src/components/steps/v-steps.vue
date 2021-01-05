<template>
  <div class="v-steps">
    <!-- lines -->
    <div class="v-steps__lines">
      <div class="v-steps__lines-wrapper" :style="lineWrapperStyle">
        <template v-for="(item, idx) in steps">
          <div
            v-if="idx !== stepsLength - 1"
            :key="item.index"
            :style="lineStyle"
            :class="{ 'v-steps__line--finish': active > item.index }"
            class="v-steps__line"
          >
            <div class="v-steps__line-inner" :style="lineInnerStyle"></div>
          </div>
        </template>
      </div>
    </div>

    <!-- v-step -->
    <div class="v-steps__main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const stepStatus = ["wait", "process", "finish", "error", "disabled"];

export default {
  name: "v-steps",
  props: {
    active: {
      type: Number,
      default: 0
    },
    space: Number,
    processStatus: {
      type: String,
      default: "process",
      validator(val) {
        return stepStatus.includes(val);
      }
    },
    finishStatus: {
      type: String,
      default: "finish",
      validator(val) {
        return stepStatus.includes(val);
      }
    },
    alignCenter: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      steps: [] // 存储v-step实例
    };
  },
  computed: {
    stepsLength() {
      return this.steps.length;
    },
    lineWrapperStyle() {
      const { space, stepsLength, alignCenter } = this,
        styleObj = {};

      if (alignCenter) {
        // 文字居中显示
        if (space === undefined) {
          // 状态间的间距自适应
          styleObj.padding = `0 ${100 / stepsLength / 2}%`;
        } else {
          // 间距固定
          styleObj.display = `inline-block`;
          styleObj.padding = `0 ${space / 2}px`;
        }
      }

      return styleObj;
    },
    lineStyle() {
      const { space, stepsLength, alignCenter } = this,
        styleObj = {};

      if (space === undefined) {
        // 间距自适应
        if (alignCenter) {
          // 居中样式
          styleObj.width = `${100 / (stepsLength - 1)}%`;
        } else {
          // 居左样式
          styleObj.width = `${100 / stepsLength}%`;
        }
      }

      return styleObj;
    },
    lineInnerStyle() {
      const { space } = this,
        styleObj = {};

      if (space !== undefined) {
        // 间距自定，线长度取space值
        styleObj.width = `${space}px`;
      }

      return styleObj;
    }
  },
  watch: {
    steps(steps) {
      steps.forEach((child, index) => {
        child.index = index;
      });
    }
  }
};
</script>
