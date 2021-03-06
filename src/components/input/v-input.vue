<template>
  <label
    class="v-input"
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
      class="v-input__icon v-input__icon--prefix"
      v-if="icon"
      :class="icon"
    ></span>
    <template v-if="type !== 'textarea'">
      <input
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :name="name"
        ref="input"
        class="input-text"
        :class="{ 'is-disabled': disabled !== false }"
        @focus="setFocus"
        :disabled="disabled !== false"
        :readonly="readonly"
        :minlength="minlength"
        :maxlength="maxlength"
        :style="{ paddingRight: subffixWidth + 'px' }"
        @blur="blur"
        @change="changeValue"
        @keydown="$emit('keydown', $event)"
        @input="handlerInput"
        :placeholder="placeholder"
      />
    </template>
    <template v-else>
      <textarea
        :rows="rows"
        :name="name"
        ref="input"
        class="input-textarea"
        :class="{ 'is-disabled': disabled !== false }"
        @focus="setFocus"
        :disabled="disabled !== false"
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
      <!-- 清除图标 -->
      <span
        v-if="inputValue && isClear !== false"
        class="v-input__icon pointer v-icon-close-plane"
        @click="clearValue()"
      ></span>
      <!-- 显示密码图标 -->
      <span
        v-if="showPassword !== false"
        class="v-input__icon pointer"
        :class="passwordVisible ? 'v-icon-eye-off' : 'v-icon-eye-on'"
        @click="handlePasswordVisible"
      ></span>
      <!-- 自定义后缀图标 -->
      <span v-if="suffixIcon" class="v-input__icon" :class="suffixIcon"></span>
      <!-- 字数限制文字 -->
      <span
        v-if="showWordLimit !== false"
        class="v-input__icon input-word-limit"
      >
        {{ limitTips }}
      </span>
    </span>
    <!-- 后缀内容 -->
    <slot class="v-input__icon" name="suffix"></slot>
    <!-- 错误信息 -->
    <div class="v-form-item__content__msg is-error" v-if="error && !isFoucs">
      {{ error }}
    </div>
  </label>
</template>
<script>
import { setCursorPos, getCursorPos, on, off } from "../libs";
import { size } from "../filters";
import FormMixin from "../form-mixins";
export default {
  name: "v-input",
  mixins: [FormMixin],
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
    allow: RegExp
  },
  computed: {
    //尺寸大小样式
    sizeCss() {
      let cssObj = {
        M: "v-input--medium",
        S: "v-input--small",
        L: "v-input--large"
      };
      return cssObj[this.size] || cssObj.M;
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
      this.showPassword !== false && iconIdex++;
      this.suffixIcon && iconIdex++;
      this.showWordLimit && iconIdex++;

      this.$nextTick(() => {
        //图标宽度 + 边距 = 24
        let suffixWidth = 8;
        if (this.$refs.suffix) {
          suffixWidth = this.$refs.suffix.scrollWidth + 4;
        }
        this.subffixWidth = suffixWidth; //iconIdex * 24 + 8;
      });
      return iconIdex > 0;
    },
    //输入框值
    inputValue() {
      return this.value;
    },
    //限制字符长度文字
    limitTips() {
      if (!this.maxlength) {
        return "";
      }
      let maxLen = this.inputValue.length;
      if (maxLen > this.maxlength) {
        maxLen = this.maxlength;
      }
      return maxLen + "/" + this.maxlength;
    }
  },
  data() {
    return {
      isFoucs: false,
      subffixWidth: "",
      passwordVisible: false,
      isZh: false //是否非英文输入法
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
  },
  methods: {
    changeValue(event) {
      this.$emit("change", event.target.value);
    },
    clearValue() {
      if (this.disabled !== false) {
        return;
      }
      this.$emit("input", "");
      this.$emit("change", "");
      this.$emit("clear");
      this.$refs.input.focus();
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
    handlePasswordVisible() {
      if (this.disabled !== false) {
        return;
      }
      this.passwordVisible = !this.passwordVisible;
      this.$refs.input.focus();
    },
    setFocus(event) {
      this.$emit("focus", event);
      this.isFoucs = true;
    },
    focus() {
      this.$refs.input.focus();
    },
    blur(event) {
      this.$emit("blur", event);
      //失焦后数据验证
      this.$dispatch("v-form-item", "form:blur");
      this.isFoucs = false;
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
      this.$emit("input", inputVal);
    }
  },
  beforeDestroy() {
    off(this.getInput(), "compositionstart", this.compositionstart);
    off(this.getInput(), "compositionend", this.compositionend);
  },
  watch: {
    value: {
      handler() {
        this.setInputValue(this.inputValue);
      },
      immediate: true
    }
  }
};
</script>
