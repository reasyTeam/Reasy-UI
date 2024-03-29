<template>
  <div
    :class="[
      'v-input-number',
      `${sizeToCss(size, 'v-input-number--')}`,
      { 'v-input-number--control': isControls && controlsPosition == 'right' }
    ]"
    :style="{ width: inputWidth }"
  >
    <div
      class="input-group--content"
      :class="{
        'is-hover': isHover,
        'is-focus': isFocus,
        'is-controls': isControls && controlsPosition === 'right',
        'is-disabled': isDisabled,
        'is-input-error': isError
      }"
      @mouseover="isHover = true"
      @mouseout="isHover = false"
    >
      <!-- 减少按钮 -->
      <v-button
        class="v-input-number__controls v-icon-minus v-input-number__controls--left v-input--no-border"
        :class="{ 'btn-disabled': subDisabled }"
        :disabled="isDisabled"
        @click="subNum"
        :name="name | id('minus')"
        no-id
        :size="size"
        v-if="isControls && controlsPosition != 'right'"
      ></v-button>
      <!-- 输入框组件 -->
      <v-input
        v-model="inputValue"
        no-id
        :name="name"
        :data-name="_name"
        is-child
        :width="width"
        :disabled="isDisabled"
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
        <!-- 添加按钮 -->
        <v-button
          class="v-input-number__controls v-icon-add v-input-number__controls--right v-input--no-border"
          :class="{ 'btn-disabled': addDisabled }"
          :disabled="isDisabled"
          v-if="controlsPosition !== 'right'"
          @click="addNum"
          no-id
          :name="name | id('add')"
          :size="size"
        ></v-button>
        <!-- 控制器在右边时 -->
        <div class="v-input-number__arrow" v-else>
          <!-- 上箭头 -->
          <span
            class="v-icon-up v-input-number__button up"
            :class="{ 'btn-disabled': addDisabled }"
            :name="name | id('add')"
            @click="addNum"
          ></span>
          <!-- 下箭头 -->
          <span
            class="v-icon-down v-input-number__button down"
            :class="{ 'btn-disabled': subDisabled }"
            :name="name | id('minus')"
            @click="subNum"
          ></span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { accSub, getPrecision } from "../libs";
import { sizeToCss } from "../filters";
import FormMixin from "../form-mixins";
import NameMixin from "../name-mixins";
export default {
  name: "v-input-number",
  mixins: [FormMixin, NameMixin],
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: [Number, String],
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
    // 必填时  不输入会自动校验值 // 否则 不处理
    required: {
      type: Boolean,
      default: false
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
    // 最大输入长度
    maxlength() {
      return this.isMaxInfinity ? 50 : String(this.max).length;
    },
    minlength() {
      return this.isMinInfinity ? 50 : String(this.min).length;
    },
    // 输入框最大输入长度
    inputMaxLength() {
      return (
        Math.max(this.maxlength, this.minlength) +
        (this.precision > 0 ? this.precision + 1 : 0)
      );
    },
    // 添加按钮是否禁用
    addDisabled() {
      return this.inputValue >= this.max || this.disabled;
    },
    // 减少按钮是否禁用
    subDisabled() {
      return this.inputValue <= this.min || this.disabled;
    },
    // 是否有精度
    hasPrecision() {
      return typeof this.precision === "number";
    },
    // 精度数字
    precisionVal() {
      if (this.hasPrecision) {
        return this.precision;
      }
      return getPrecision(this.step);
    },
    isError() {
      return !!(this.elFormItem && this.elFormItem.showError);
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
    sizeToCss,
    // 输入框修改值
    handlerChange(value) {
      if (!value && !this.required) {
        this.$emit("change", value);
        return;
      }
      //  为空时 默认为0  在根据最大值和最小值修改
      if (value === "") {
        value = 0;
      }

      let val = parseFloat(value);
      if (this.hasPrecision) {
        val = +val.toFixed(this.precisionVal);
      }
      // 错误值 或小于最小值时
      if (isNaN(val) || val < this.min) {
        // 无穷小时 取当前值  其他情况取最小值
        val = this.isMinInfinity ? this.value : this.min;
      }
      //大于最大值
      if (val > this.max) {
        val = this.isMaxInfinity ? this.value : this.max;
      }
      //严格步长
      val = this.getStrictStep(val);
      //手动修改输入框值
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
    // 增加
    addNum() {
      if (this.addDisabled || this.isDisabled) {
        return;
      }
      let val = accSub(Number(this.inputValue) || 0, -this.step);
      val = this.getStrictStep(val);
      this.setInputValue(val);
      this.$emit("change", val);
    },
    // 减少
    subNum() {
      if (this.subDisabled || this.isDisabled) {
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
    // 修改输入框值
    setInputValue(val) {
      if (this.hasPrecision) {
        this.$refs.input.setInputValue(val.toFixed(this.precisionVal));
      } else {
        this.$refs.input.setInputValue(String(val));
      }
    }
  },
  watch: {
    isFocus(focus) {
      if (this.elFormItem && !this.elFormItem.ignore) {
        //当form组件存在且需要数据验证时
        this.$dispatch("v-form-item", "form:error", !focus);
      }
    }
  }
};
</script>
