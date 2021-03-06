<template>
  <div
    class="v-slider"
    :class="[
      sizeCss,
      { 'is-range': showRange, 'v-slider--disabled': disabled }
    ]"
  >
    <!-- 输入框控制器 -->
    <v-input-number
      v-model="inputValue"
      v-if="showInput"
      class="v-slider__number"
      :class="{ 'v-slider__number--controls': showInputControls }"
      :min="min"
      :max="max"
      ref="input"
      :disabled="disabled"
      :is-controls="showInputControls"
      :precision="precisionVal"
      :size="size"
      :step="step"
      @change="changeValue"
    ></v-input-number>
    <!-- 显示输入框时的占位符 -->
    <span
      ref="endRange1"
      v-if="showInput !== false"
      class="v-slider-text-space"
      :class="{ 'show-input': showInput }"
    ></span>
    <!-- 最小值 -->
    <span
      ref="startRange"
      v-if="showRange !== false"
      class="v-slider-range v-slider-range--left"
    >
      {{ min }}</span
    >
    <!-- 最大值 -->
    <span
      ref="endRange"
      v-if="showRange !== false"
      class="v-slider-range v-slider-range--right"
      :class="{ 'show-input': showInput }"
    >
      {{ max }}</span
    >
    <!-- 线条 -->
    <div
      class="v-slider-line"
      ref="line"
      @click="handlerClickLine"
      :style="{
        'margin-left': rangeMarginLeft + 'px',
        'margin-right': rangeMarginRight + 'px'
      }"
    >
      <div
        class="v-slider-line__inner"
        :style="{ width: leftPercent + '%' }"
      ></div>
      <!-- 滑块区域 -->
      <div
        class="v-slider-line__content"
        ref="bar"
        :style="{ left: leftPercent + '%' }"
        @mousedown.stop="mouseStart"
      >
        <!-- 滑块信息 -->
        <div
          class="v-slider-line__bar"
          :class="{ 'v-slider-line__bar--active': moveStart }"
          @mouseenter="isMouseOver = true"
          @mouseleave="isMouseOver = false"
        ></div>
        <!-- 滑块显示文字 -->
        <template v-if="showTooltip">
          <slider-popups
            v-if="moveStart || isMouseOver"
            class="v-slider-line__popper"
            :value="format(inputValue)"
          ></slider-popups>
        </template>
      </div>
    </div>
    <!-- 错误信息 -->
    <div class="v-form-item__content__msg is-error" v-if="error && !moveStart">
      {{ error }}
    </div>
  </div>
</template>
<script>
import { getPrecision, on, off, accSub } from "../libs";
import FormMixin from "../form-mixins";
import SliderPopups from "./popups.vue";
export default {
  name: "v-slider",
  mixins: [FormMixin],
  components: {
    SliderPopups
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: [Number, String],
    name: String,
    //最小值
    min: {
      type: Number,
      default: 0
    },
    //最大值
    max: {
      type: Number,
      default: 100
    },
    disabled: {
      type: Boolean,
      default: false
    },
    //宽度
    width: [String, Number],
    size: {
      type: String,
      default: "M"
    },
    //精度
    precision: Number,
    //步长
    step: {
      type: Number,
      default: 1
    },
    //是否显示范围
    showRange: {
      type: Boolean,
      default: false
    },
    //是否显示输入框
    showInput: {
      type: Boolean,
      default: false
    },
    //是否显示输入框的加减号
    showInputControls: {
      type: Boolean,
      default: false
    },
    //移动时是否显示当前值
    showTooltip: {
      type: Boolean,
      default: true
    },
    format: {
      //tooltip格式化
      type: Function,
      default(val) {
        return val.toFixed(this.precisionVal);
      }
    }
  },
  computed: {
    leftPercent() {
      //距离左侧的位置百分比
      return ~~(((this.inputValue - this.min) / (this.max - this.min)) * 100);
    },
    perStepPx() {
      //每个步长多少px
      let lineWidth = this.$refs.line.clientWidth;
      return lineWidth / (accSub(this.max, this.min) / this.step);
    },
    sizeCss() {
      let cssObj = {
        M: "v-slider--medium",
        S: "v-slider--small",
        L: "v-slider--large"
      };
      return cssObj[this.size] || cssObj.M;
    },
    precisionVal() {
      //精度值
      if (typeof this.precision === "number") {
        //定义了精度
        return this.precision;
      }
      return getPrecision(this.step);
    }
  },
  data() {
    return {
      inputValue: 0, //值
      startValue: 0, //开始值
      moveStart: false, //
      isMouseOver: false,
      lineClientLeft: 0,
      rangeMarginLeft: 0,
      rangeMarginRight: 0
    };
  },
  mounted() {
    //修改长度
    this.$nextTick(() => {
      let $elemRight = this.$refs.endRange;
      if (this.showRange !== false) {
        let $elem = this.$refs.startRange;
        this.rangeMarginLeft = $elem.clientWidth;
      }
      if ($elemRight) {
        this.rangeMarginRight = $elemRight.clientWidth;
      }
      if (this.showInput != false) {
        let $inputElem = this.$refs.input.$el;
        let $endRange1 = this.$refs.endRange1;
        this.rangeMarginRight += $endRange1.clientWidth;
        this.rangeMarginRight += $inputElem.clientWidth;
      }
    });
  },
  methods: {
    bindEvent() {
      on(window, "mousemove", this.mouseMove);
      on(window, "mouseup", this.mouseUp);
    },
    mouseStart(event) {
      if (this.disabled) return;
      event.preventDefault();
      this.bindEvent(); //绑定事件
      let lineRect = this.$refs.line.getBoundingClientRect();
      //线条左边的位置
      this.lineClientLeft = lineRect.left;
      //起始值
      this.startValue = this.inputValue;
      this.moveStart = true;
    },
    mouseMove(event) {
      if (this.moveStart) {
        this.setValue(event.clientX - this.lineClientLeft);
      }
    },
    mouseUp() {
      this.moveStart = false;
      this.changeValue();
      //解绑
      off(window, "mousemove", this.mouseMove);
      off(window, "mouseup", this.mouseUp);
    },
    handlerClickLine(event) {
      if (this.disabled) return;
      //点击球
      if (event.target === this.$refs.bar) return;

      let lineRect = this.$refs.line.getBoundingClientRect();
      this.startValue = this.inputValue;
      this.setValue(event.clientX - lineRect.left);
      this.changeValue();
    },
    getStrictStep(val) {
      //严格按照步长倍数
      let stepValue;
      //解决浮点数精度
      if (val >= this.max) {
        stepValue = this.max;
      } else if (val <= this.min) {
        stepValue = this.min;
      } else {
        stepValue = val;
      }
      //重新处理精度
      stepValue = Number(stepValue.toFixed(this.precisionVal));
      return stepValue;
    },
    setValue(leftWidth) {
      let leftStep = leftWidth / this.perStepPx,
        sliderValue = Math.round(leftStep) * this.step + this.min, //满足最近步长点的值
        leftValue = leftStep * this.step + this.min, //移动后的值
        maxStepValue =
          Math.floor((this.max - this.min) / this.step) * this.step + this.min; //最大步长时的值

      if (leftValue > this.max) {
        leftValue = this.max;
      }

      //最后部分 && 最大值 - 当前值 小于 当前值 - 最大步长值时
      if (
        leftValue > maxStepValue &&
        this.max - leftValue <= leftValue - maxStepValue
      ) {
        sliderValue = this.max;
      }
      //纠正值是否按照步长
      this.inputValue = this.getStrictStep(sliderValue);
    },
    changeValue() {
      if (this.inputValue !== this.value) {
        this.$emit("change", this.inputValue);
      }
    }
  },
  watch: {
    value: {
      handler(val) {
        this.inputValue = val;
      },
      immediate: true
    }
  }
};
</script>
