<template>
  <div
    class="v-step"
    :class="[
      currentStatus ? `v-step--${currentStatus}` : '',
      { 'v-step--center': alignCenter }
    ]"
    :style="stepStyle"
  >
    <!-- icon -->
    <div class="v-step__icon">
      <slot name="icon">
        <i v-if="currentIcon" :class="[currentIcon, 'is-icon']"></i>
        <i v-else :class="['is-text']">{{ index + 1 }}</i>
      </slot>
    </div>

    <!-- title & description -->
    <div class="v-step__content">
      <div class="v-step__title">
        <slot name="title">
          <span class="v-step__title--default">{{ title }}</span>
        </slot>
      </div>
      <div class="v-step__description">
        <slot name="description">
          <span v-if="description" class="v-step__description--default">
            {{ description }}
          </span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { isEmpty } from "../libs";
import scssVars from "../../scss/components/steps.scss";

const { iconSize, iconLineSpace } = scssVars;

export default {
  name: "v-step",
  props: {
    title: String,
    description: String,
    icon: String,
    status: String
  },
  data() {
    return {
      index: -1,
      stepStyle: {},
      scssVarIconSize: parseInt(iconSize),
      scssVarIconLineSpace: parseInt(iconLineSpace)
    };
  },
  beforeCreate() {
    this.$parent.steps.push(this);
  },
  computed: {
    alignCenter() {
      return this.$parent.alignCenter;
    },
    currentStatus() {
      let {
        index,
        status,
        $parent: { active, finishStatus, processStatus }
      } = this;

      // 如果传入status，则优先取status值
      if (isEmpty(status)) {
        // 未传入status
        if (index === active) {
          // 获取父级processStatus的值
          status = processStatus;
        } else if (active > index) {
          // 获取父级finishStatus的值
          status = finishStatus;
        }
      }

      return status;
    },
    currentIcon() {
      const statusIcon = {
        finish: "v-icon-ok-line",
        error: "v-icon-close-line"
      };
      let { icon, currentStatus } = this;

      return isEmpty(icon) ? statusIcon[currentStatus] : icon;
    }
  },
  mounted() {
    // this.$parent挂载后执行
    this.$nextTick(() => this.getStepStyle());
  },
  methods: {
    getStepStyle() {
      const {
          index,
          alignCenter,
          scssVarIconSize,
          scssVarIconLineSpace,
          $parent: { steps, space }
        } = this,
        stepsLength = steps.length;
      let styleObj = {};

      if (space === undefined) {
        // 自适应间距，设置内容区的宽度
        styleObj.width = `${100 / stepsLength}%`;

        if (alignCenter) {
          // 居中样式设置padding
          styleObj.padding = `0 ${(stepsLength * 25) / 100}%`;
        } else {
          styleObj["padding-right"] = `${stepsLength}%`;
          if (index !== 0) {
            // 通过推演得出此表达式“-${scssVarIconSize / stepsLength}px”
            styleObj["margin-left"] = `-${scssVarIconSize / stepsLength}px`;
          }
        }
      } else {
        // 自定义间距
        styleObj.width = `${space}px`;

        if (index !== 0) {
          styleObj["margin-left"] = `${scssVarIconSize +
            scssVarIconLineSpace * 2}px`;
        }
      }

      this.stepStyle = styleObj;
    }
  }
};
</script>
