<template>
  <label
    class="v-input"
    @mouseleave="hoverInput = false"
    @mouseenter="hoverInput = true"
    :class="[
      {
        'v-input--prefix': icon,
        'v-input-textarea': type === 'textarea'
      },
      sizeCss
    ]"
    :style="{ width: inputWidth }"
  >
    <span
      class="v-input__middle v-input__icon v-input__icon--prefix"
      v-if="icon"
      :class="icon"
    ></span>
    <template v-if="type !== 'textarea'">
      <input
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :name="name"
        :data-name="_name"
        ref="input"
        class="input-text"
        :class="{
          'is-disabled': isDisabled !== false,
          'is-hover': isHover,
          'is-focus': isFocus,
          'is-input-error': isError
        }"
        @focus="setFocus"
        :disabled="isDisabled !== false"
        :readonly="readonly"
        :minlength="minlength"
        :maxlength="maxlength"
        :style="{ paddingRight: subffixWidth }"
        @blur="blur"
        @change="changeValue"
        @keydown="$emit('keydown', $event)"
        @keyup="$emit('keyup', $event)"
        @input="handlerInput"
        :placeholder="placeholder"
      />
    </template>
    <template v-else>
      <textarea
        :rows="rows"
        :name="name"
        :data-name="_name"
        ref="input"
        class="input-textarea"
        :class="{ 'is-disabled': isDisabled !== false }"
        @focus="setFocus"
        :disabled="isDisabled !== false"
        :readonly="readonly"
        :minlength="minlength"
        :maxlength="maxlength"
        @blur="blur"
        @change="changeValue"
        @input="handlerInput"
        :placeholder="placeholder"
      >
      </textarea>
    </template>
    <div
      @click="focus()"
      class="placeholder-text"
      v-if="!supportPlaceholder && !inputValue"
    >
      {{ placeholder }}
    </div>

    <!-- 后缀内容 -->
    <span v-if="hasSuffix" ref="suffix" class="v-input__icon--suffix">
      <!-- 搜索 -->
      <span
        v-if="isSearch"
        @mouseover="isHover = true"
        @mouseout="isHover = false"
        class="v-input__search v-input__icon pointer v-icon-search"
        :class="{ active: !!value }"
        @click="handlerSearch()"
      ></span>
      <!-- 清除图标 -->
      <span
        v-if="inputValue && isClear !== false"
        class="v-input__middle v-input__icon pointer input-gray v-icon-close-plane"
        @click="clearValue()"
      ></span>
      <!-- 显示密码图标 -->
      <span
        v-if="showPassword"
        class="v-input__middle v-input__icon pointer input-gray"
        :class="passwordVisible ? 'v-icon-eye-on' : 'v-icon-eye-off'"
        @click="handlerPasswordVisible"
      ></span>
      <!-- 自定义后缀图标 -->
      <span
        v-if="suffixIcon"
        class="v-input__middle v-input__icon"
        :class="suffixIcon"
      ></span>
      <!-- 字数限制文字 -->
      <span
        v-if="showWordLimit && this.maxlength"
        class="v-input__middle input-word-limit"
      >
        {{ valueLen + "/" + this.maxlength }}
      </span>
    </span>
    <!-- 后缀内容 -->
    <slot name="suffix"></slot>
  </label>
</template>

<script>
import { setCursorPos, getCursorPos, on, off } from "../libs";
import { size, sizeToCss } from "../filters";
import FormMixin from "../form-mixins";
export default {
  name: "v-input",
  mixins: [FormMixin],
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    name: String,
    maxlength: Number,
    minlength: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    width: [String, Number],
    placeholder: String,
    //是否是搜索
    isSearch: {
      type: Boolean,
      default: false
    },
    isClear: {
      type: Boolean,
      default: false
    },
    //是否有密码切换
    showPassword: {
      type: Boolean,
      default: false
    },
    //显示输入框文字长度限制
    showWordLimit: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    //自动聚焦
    autofocus: {
      type: Boolean,
      default: false
    },
    autoCorrection: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: "M"
    },
    //输入框前面图标
    icon: String,
    //输入框后缀图标
    suffixIcon: String,
    rows: {
      type: Number,
      default: 2
    },
    //输入框允许输入字符正则
    allow: RegExp,
    valid: [Array, Object],
    //单位
    unit: {
      type: String,
      default: ""
    }
  },
  computed: {
    //尺寸大小样式
    sizeCss() {
      return sizeToCss(this.size, "v-input--");
      // let cssObj = {
      //   M: "medium",
      //   S: "v-input--small",
      //   L: "v-input--large"
      // };
      // return cssObj[this.size] || cssObj.M;
    },
    //是否支持placeholder
    supportPlaceholder() {
      let i = document.createElement("input");
      return "placeholder" in i;
    },
    //自定义输入框宽度
    inputWidth() {
      return size(this.width);
    },
    //是否有后缀图标，处理后缀宽度
    hasSuffix() {
      let iconIdex = 0;
      this.isClear !== false && this.inputValue && iconIdex++;
      this.isSearch !== false && iconIdex++;
      this.showPassword !== false && iconIdex++;
      this.suffixIcon && iconIdex++;
      this.showWordLimit && iconIdex++;

      this.$nextTick(() => {
        //图标宽度 + 边距 = 24
        let suffixWidth = 8;
        if (this.$refs.suffix) {
          suffixWidth = this.$refs.suffix.scrollWidth;
        }
        if (suffixWidth !== 8) {
          this.subffixWidth = suffixWidth + "px"; //iconIdex * 24 + 8;
        } else {
          this.subffixWidth = "";
        }
      });
      return iconIdex > 0;
    },
    //输入框值
    inputValue() {
      return this.value;
    },
    isError() {
      return !!(this.elFormItem && this.elFormItem.showError);
    }
  },
  data() {
    return {
      valueLen: 0, //输入框值长度
      isHover: false,
      isFocus: false,
      subffixWidth: "",
      passwordVisible: false,
      isZh: false, //是否非英文输入法,
      hoverInput: false //鼠标是否在输入框内
    };
  },
  mounted() {
    this.setInputValue(this.inputValue);
    //自动聚焦
    if (this.autofocus) {
      setTimeout(() => {
        this.$refs.input.focus();
      }, 50);
    }
    this.isZh = false;
    on(this.getInput(), "compositionstart", this.compositionstart);
    on(this.getInput(), "compositionend", this.compositionend);

    //适配自动化脚本
    this.$refs.input.changeValue = value => {
      if (this.value !== undefined) {
        this.$emit("change", value);
        this.$dispatch("v-form", "form:change");
      }
    };
  },
  methods: {
    changeValue(event) {
      this.$emit("change", event.target.value);
      this.$dispatch("v-form", "form:change");
    },
    clearValue() {
      if (this.isDisabled !== false) {
        return;
      }
      this.$emit("input", "");
      this.$emit("change", "");
      this.$dispatch("v-form", "form:change");
      this.$emit("clear");
      this.$refs.input.focus();
    },
    handlerSearch() {
      if (this.isDisabled !== false) {
        return;
      }
      this.$emit("search", this.value);
      this.isFocus = true;
    },
    setInputValue(newValue) {
      const input = this.$refs.input;
      if (!input) return;
      if (input.value === newValue) return;
      input.value = newValue;
    },
    handlerInput(event) {
      if (this.isZh) return;
      this.rectifyValue(event);
    },
    handlerPasswordVisible() {
      if (this.isDisabled !== false) {
        return;
      }
      this.passwordVisible = !this.passwordVisible;
      this.$refs.input.focus();
    },
    setFocus(event) {
      this.$emit("focus", event);
      this.isFocus = true;
      if (this.unit) {
        this.setInputValue(this.inputValue);
      }
    },
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    },
    blur(event) {
      // if (this.hoverInput) {
      //   this.$refs.input.focus();
      //   return;
      // }

      if (this.unit && this.inputValue) {
        this.setInputValue(this.inputValue + " " + this.unit);
      }
      this.$emit("blur", event);
      //this.$emit("change", this.$refs.input.value);
      this.isFocus = false;
      //if(this.isChild) return;
      const { autoCorrection } = this;

      if (autoCorrection.length) {
        //选择自动纠错，仅可纠正为数字
        const minValue = autoCorrection[0],
          maxValue = autoCorrection[1],
          inputVal = event.target.value;

        const newVal = this.correctInputValue(inputVal, minValue, maxValue);
        event.target.value = newVal;
        this.$emit("change", newVal);
      }
      //失焦后数据验证
      if (this.elFormItem && !this.elFormItem.ignore) {
        //当form组件存在且需要数据验证时
        this.$nextTick(() => {
          this.$dispatch("v-form-item", "form:blur");
        });
      } else {
        // this.checkValid(this.value);
      }
    },
    correctInputValue(inputVal, minValue, maxValue) {
      let newVal = inputVal;

      if (inputVal.match(/[^\d]/g)) {
        newVal = inputVal.replace(/[^\d]/g, "");
      }
      if (inputVal.match(/^0\d/g)) {
        newVal = parseInt(inputVal, 10);
      }
      if (Number(newVal) > Number(maxValue)) {
        newVal = maxValue;
      }
      if (Number(newVal) < Number(minValue)) {
        newVal = minValue;
      }
      if (newVal == "") {
        newVal = minValue;
      }
      return newVal;
    },
    getInput() {
      return this.$refs.input;
    },
    //获取输入框的真实值
    getNativeInputValue() {
      return this.$refs.input.value;
    },
    compositionstart() {
      this.isZh = true;
    },
    compositionend(event) {
      this.isZh = false;
      this.rectifyValue(event);
    },
    // 纠正输入的值
    rectifyValue(event) {
      //有字符限制时 纠正Value
      let inputVal = event.target.value;
      if (this.allow) {
        let cursorPosition = getCursorPos(event.target),
          endNum = inputVal.length - cursorPosition;

        inputVal = (inputVal.match(this.allow) || []).join("");
        //setTimeout(() => {
        event.target.value = inputVal;
        //将光标设置到原位，原位置是输入后光标在数据长度的倒数第几个位置
        //解决刚刚输入的数据被过滤后光标位置不正确
        setCursorPos(event.target, inputVal.length - endNum);
        //});
      }
      this.valueLen = inputVal.length;
      this.$emit("input", inputVal);
    }
  },
  beforeDestroy() {
    off(this.getInput(), "compositionstart", this.compositionstart);
    off(this.getInput(), "compositionend", this.compositionend);
  },
  watch: {
    value: {
      handler(val) {
        this.valueLen = val.length;
        this.$nextTick(() => {
          this.setInputValue(
            this.inputValue + (val && this.unit ? " " + this.unit : "")
          );
        });
      },
      immediate: true
    },
    isFocus(val) {
      if (this.elFormItem && !this.elFormItem.ignore) {
        //当form组件存在且需要数据验证时
        // if (this.hoverInput) {
        //   this.$dispatch("v-form-item", "form:error", false);
        //   return;
        // }
        this.$dispatch("v-form-item", "form:error", !val);
      }
    }
  }
};
</script>
