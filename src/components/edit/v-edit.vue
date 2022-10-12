<template>
  <div
    class="v-edit"
    :class="[sizeCss, { 'v-edit--disabled': isDisabled }]"
    :style="{ width: inputWidth }"
  >
    <div v-show="!isEditing" class="edit-show">
      <label
        :title="labelVal"
        :id="name | id('disabled')"
        :name="name"
        class="edit-plane edit__lable"
        >{{ labelVal }}</label
      >
      <span
        class="v-icon-edit v-edit__icon pointer edit-gray"
        :id="name | id('edit')"
        @click="changeEditStatus"
      ></span>
    </div>
    <div v-show="isEditing" @click="handlerDivClick">
      <input
        ref="input"
        :name="name"
        :id="name"
        type="text"
        :class="['edit-plane', 'edit__text', { 'is-input-error': isError }]"
        @input="handlerInput"
        @change="handlerChange"
        @blur="handlerBlur"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :minlength="minlength"
        :style="{ paddingRight: subffixWidth }"
      />
      <span
        v-if="hasSuffix"
        ref="suffix"
        class="v-edit__icon--suffix"
        :id="name | id('suff')"
        @mousedown="isClickSuffix = true"
      >
        <!-- 清除图标 -->
        <span
          v-if="valueLen && isClear"
          :id="name | id('clear')"
          class="v-icon-close-plane v-edit__icon pointer edit-gray"
          @click="clearValue"
        ></span>
        <!-- 字数限制文字 -->
        <span class="input-word-limit" v-show="showWordLimit && this.maxlength">
          {{ valueLen + "/" + this.maxlength }}
        </span>
      </span>
    </div>
  </div>
</template>
<script>
import { size, sizeToCss } from "../filters";
import FormMixin from "../form-mixins";
import NameMixin from "../name-mixins";
import { setCursorPos, getCursorPos, on, off } from "../libs";

export default {
  name: "v-edit",
  mixins: [FormMixin, NameMixin],
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    maxlength: Number,
    minlength: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String, Number],
      default: 100
    },
    placeholder: String,
    isClear: {
      type: Boolean,
      default: false
    },
    //显示输入框文字长度限制
    showWordLimit: {
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
    //输入框允许输入字符正则
    allow: RegExp,
    //单位
    unit: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isEditing: false,
      valueLen: this.value.toString().length || 0,
      subffixWidth: "",
      isClickSuffix: false, //是否在点击后缀Icon
      isZh: false //是否非英文输入法,
    };
  },
  computed: {
    //尺寸大小样式
    sizeCss() {
      return sizeToCss(this.size, "v-edit--");
    },
    //自定义输入框宽度
    inputWidth() {
      return size(this.width);
    },
    //是否有后缀图标，处理后缀宽度
    hasSuffix() {
      let iconIdex = 0;
      this.isClear && this.valueLen && iconIdex++;
      this.showWordLimit && iconIdex++;
      return iconIdex > 0;
    },
    //非编辑状态时的内容
    labelVal() {
      return `${this.value} ${this.value && this.unit}`;
    },
    isError() {
      return !!(this.elFormItem && this.elFormItem.showError);
    }
  },
  watch: {
    value: {
      handler(val) {
        this.valueLen = val.toString().length;
        this.setInputValue(val);
      },
      immediate: true
    },
    isEditing(val) {
      if (val) {
        this.hasSuffix && this.getSubffixWidth(); //输入框显示时重新获取后缀图标宽度
      } else {
        this.subffixWidth = "";
      }
    },
    //输入内容长度变化时会影响 wordlimit长度 和 清除图标是否显示
    valueLen(newVal) {
      this.hasSuffix && newVal && this.getSubffixWidth();
    }
  },
  methods: {
    setInputValue(newValue) {
      const input = this.$refs.input;
      if (!input) return;
      if (input.value === newValue) return;
      input.value = newValue;
    },

    changeEditStatus() {
      if (this.isDisabled) {
        return;
      }
      this.isEditing = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
        this.$emit("focus", event);
      });
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

    getSubffixWidth() {
      this.$nextTick(() => {
        this.subffixWidth = this.$refs.suffix.scrollWidth + "px";
      });
    },

    handlerInput(event) {
      if (this.isZh) return;
      this.valueLen = event.target.value.toString().length;
      this.rectifyValue(event);
    },
    handlerChange(event) {
      this.$emit("change", event.target.value);
      this.$dispatch("v-form", "form:change");
    },
    handlerDivClick() {
      this.isClickSuffix = false; //input完成聚焦后重置状态
      // 事件执行顺序：mousedown(this.isClickSuffix = true)=>isClickSuffix == true && input blur(input.focus())=>handlerDivClick(this.isClickSuffix = false)
      this.$refs.input.focus();
      this.$emit("focus", event);
      this.$dispatch("v-form-item", "form:error", false);
    },
    handlerBlur(event) {
      if (this.isClickSuffix) {
        this.$refs.input.focus();
        return;
      }

      this.isEditing = false;
      this.$emit("blur", event);

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
          if (this.elFormItem.errorMsg) {
            this.isEditing = true;
            this.$dispatch("v-form-item", "form:error", true);
          }
        });
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
      this.valueLen = inputVal.toString().length;
      this.$emit("input", inputVal);
    }
  },

  mounted() {
    this.setInputValue(this.value);
    if (this.autofocus) {
      this.isEditing = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
        this.$emit("focus", event);
      });
    }
    this.isZh = false;
    on(this.$refs.input, "compositionstart", this.compositionstart);
    on(this.$refs.input, "compositionend", this.compositionend);
  },
  beforeDestroy() {
    off(this.$refs.input, "compositionstart", this.compositionstart);
    off(this.$refs.input, "compositionend", this.compositionend);
  }
};
</script>
