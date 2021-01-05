<template>
  <div class="v-input-number" :style="{ width: inputWidth }">
    <div
      class="input-group--content"
      :class="{
        'is-hover': isHover,
        'is-focus': isFocus,
        'is-controls': isControls && controlsPosition === 'right',
        'is-disabled': disabled
      }"
      @mouseover="isHover = true"
      @mouseout="isHover = false"
    >
      <v-button
        class="v-input-number__controls v-input-number__controls--left v-input--no-border"
        :class="{ 'btn-disabled': subDisabled }"
        :disabled="disabled"
        @click="subNum"
        :size="size"
        v-if="isControls && controlsPosition != 'right'"
        >-</v-button
      >
      <v-input
        v-model="inputValue"
        :name="name"
        :disabled="disabled"
        :size="size"
        :maxlength="inputMaxLength"
        ref="input"
        :class="{
          'v-input-number__position': isControls && controlsPosition != 'right'
        }"
        @focus="isFocus = true"
        @blur="isFocus = false"
        class="v-input--no-border"
        :allow="allow"
        @change="handlerChange"
      >
      </v-input>
      <template v-if="isControls">
        <v-button
          class="v-input-number__controls v-input-number__controls--right v-input--no-border"
          :class="{ 'btn-disabled': addDisabled }"
          :disabled="disabled"
          v-if="controlsPosition !== 'right'"
          @click="addNum"
          :size="size"
          >+</v-button
        >
        <template v-else>
          <span
            class="v-button--info v-icon-up v-input-number__button up"
            :class="{ 'btn-disabled': addDisabled }"
            @click="addNum"
          ></span>
          <span
            class="v-button--info v-icon-down v-input-number__button down"
            :class="{ 'btn-disabled': subDisabled }"
            @click="subNum"
          ></span>
        </template>
      </template>
    </div>
    <div class="v-form-item__content__msg is-error" v-if="error && !isFocus">
      {{ error }}
    </div>
  </div>
</template>
<script>
import { accSub, getPrecision } from "../libs";
import FormMixin from "../form-mixins";
export default {
  name: "v-input-number",
  mixins: [FormMixin],
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: [Number, String],
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    width: [String, Number],
    isControls: {
      type: Boolean,
      default: true
    },
    controlsPosition: String,
    size: {
      type: String,
      default: "M"
    },
    step: {
      type: Number,
      default: 1
    },
    precision: Number
  },
  computed: {
    inputValue: {
      get() {
        if (this.precision >= 0) {
          return this.value.toFixed(this.precision);
        }
        return String(this.value);
      },
      set() {}
    },
    inputWidth() {
      if (!this.width) {
        return "";
      } else {
        return typeof this.width === "number" ? this.width + "px" : this.width;
      }
    },
    isMinInfinity() {
      return this.min === -Infinity;
    },
    isMaxInfinity() {
      return this.max === Infinity;
    },
    maxlength() {
      return this.isMaxInfinity ? 50 : String(this.max).length;
    },
    minlength() {
      return this.isMinInfinity ? 50 : String(this.min).length;
    },
    inputMaxLength() {
      return (
        Math.max(this.maxlength, this.minlength) +
        (this.precision > 0 ? this.precision + 1 : 0)
      );
    },
    addDisabled() {
      return this.inputValue >= this.max;
    },
    subDisabled() {
      return this.inputValue <= this.min;
    },
    hasPrecision() {
      return typeof this.precision === "number";
    },
    precisionVal() {
      if (this.hasPrecision) {
        return this.precision;
      }
      return getPrecision(this.step);
    }
  },
  data() {
    return {
      allow: /[0-9-.]/gi,
      isHover: false,
      isFocus: false
    };
  },
  methods: {
    handlerChange(value) {
      let val = parseFloat(value);
      if (this.hasPrecision) {
        val = +val.toFixed(this.precisionVal);
      }
      if (isNaN(val) || val < this.min) {
        val = this.isMinInfinity ? this.value : this.min;
      }

      if (val > this.max) {
        val = this.isMaxInfinity ? this.value : this.max;
      }
      val = this.getStrictStep(val);
      this.setInputValue(val);
      if (val === this.value) {
        return;
      }
      this.$emit("change", val);
    },
    getStrictStep(val) {
      //严格按照步长倍数
      let stepValue, leftStep;
      //解决浮点数精度
      if (val >= this.max) {
        stepValue = this.max;
      } else if (val <= this.min) {
        stepValue = this.min;
      } else {
        //第几个步长
        if (this.isMinInfinity) {
          stepValue = val;
        } else {
          leftStep = Math.round(accSub(val, this.min) / this.step);
          stepValue = this.min + leftStep * this.step;
        }
      }
      //重新处理精度
      stepValue = Number(stepValue.toFixed(this.precisionVal));
      return stepValue;
    },

    addNum() {
      if (this.addDisabled || this.disabled) {
        return;
      }
      let val = accSub(Number(this.inputValue) || 0, -this.step);
      val = this.getStrictStep(val);
      this.setInputValue(val);
      this.$emit("change", val);
    },
    subNum() {
      if (this.subDisabled || this.disabled) {
        return;
      }
      let maxStepValue; //最大步长时的值
      let precision = this.precisionVal,
        val;
      if (this.isMinInfinity || this.isMaxInfinity) {
        maxStepValue = Infinity;
      } else {
        maxStepValue =
          Math.floor(accSub(this.max, this.min) / this.step) * this.step +
          this.min;
      }
      maxStepValue = Number(maxStepValue.toFixed(precision));
      //当输入值大于最大步长的值
      if (this.inputValue > maxStepValue) {
        val = maxStepValue;
      } else {
        val = accSub(Number(this.inputValue) || 0, this.step);
      }
      val = this.getStrictStep(val);
      this.setInputValue(val);
      this.$emit("change", val);
    },
    setInputValue(val) {
      if (this.hasPrecision) {
        this.$refs.input.setInputValue(val.toFixed(this.precisionVal));
      } else {
        this.$refs.input.setInputValue(String(val));
      }
    }
  }
};
</script>
