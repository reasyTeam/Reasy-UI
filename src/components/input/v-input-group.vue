<template>
  <div class="v-input-group" :style="{ width: inputWidth }">
    <div
      class="input-group--content"
      :class="{
        'is-hover': isHover,
        'is-focus': isFocus,
        'is-disabled': isDisabled,
        'is-input-error': isError
      }"
      :id="name"
      @mouseover="isHover = true"
      @mouseout="isHover = false"
    >
      <span
        class="v-input-group__item"
        v-for="item in inputGroups"
        :key="item.index"
      >
        <!-- 输入框项 -->
        <v-input
          :class="['v-input--no-border', `v-input-group--${type}`]"
          v-model="item.value"
          :maxlength="inputMaxLen"
          :data-index="item.index"
          :allow="inputAllow"
          :disabled="isDisabled"
          is-child
          :width="item.width"
          ref="input"
          @focus="handlerFocus"
          @blur="handlerBlur"
          :name="name | id(item.index)"
          no-id
          :size="size"
          @input="handlerInput"
          @change="handlerChange"
          @keydown="handlerKeydown"
          @keyup="handlerKeyUp"
          :auto-correction="item.correctArg"
        >
          <template #suffix>
            <div
              v-if="item.index != inputGroups.length - 1"
              class="v-input-group__splitter"
            >
              <span>{{ inputSplitter }}</span>
            </div>
          </template>
        </v-input>
      </span>
    </div>
  </div>
</template>

<script>
import { getCursorPos, setCursorPos } from "../libs";
import FormMixin from "../form-mixins";
import NameMixin from "../name-mixins";
export default {
  name: "v-input-group",
  mixins: [FormMixin, NameMixin],
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    maxlength: Number,
    width: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "M"
    },
    inputNums: Number,
    splitter: String,
    allow: RegExp,
    autoCorrection: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    inputGroupValue() {
      return this.value.split(this.inputSplitter);
    },
    inputGroups() {
      let arr = [];
      for (let i = 0; i < this.inputNumber; i++) {
        arr.push({
          index: i,
          value: this.inputGroupValue[i],
          width: 100 / this.inputNumber + "%",
          correctArg: this.correctArgs[i]
        });
      }
      return arr;
    },
    inputWidth() {
      if (!this.width) {
        return "";
      } else {
        return typeof this.width === "number" ? this.width + "px" : this.width;
      }
    },
    isError() {
      return !!(this.elFormItem && this.elFormItem.showError);
    }
  },
  data() {
    return {
      inputMaxLen: 0, //输入框内容
      inputSplitter: "", //分隔符
      inputNumber: 0, //输入框个数
      isFocus: false, //是否聚焦
      focusIndex: 0, //聚焦时输入框标记
      isChanged: false, //是否已修改
      isHover: false,
      correctArgs: [] //纠正的范围
    };
  },
  methods: {
    handlerInput() {
      //input 事件
      let inputValue = this.getValue();
      if (this.inputGroupValue.join(this.inputSplitter) == inputValue) return;
      this.$emit("input", inputValue);
    },
    handlerChange() {
      this.isFocus = true;
      this.isChanged = true;
    },
    handlerKeydown(event) {
      let evtTarget = event.target,
        keyCode = event.keyCode,
        position = getCursorPos(evtTarget); //光标位置

      if (keyCode === 8) {
        //回退
        if (position === 0) {
          let selectText = window.getSelection().toString() || "";
          if (selectText.length > 0) {
            return;
          }
          this.setInputFocus(event, "prev");
          event.preventDefault();
          return;
        }
      } else if (keyCode == 39 || keyCode == 40) {
        //右 或者下
        if (position === evtTarget.value.length) {
          this.setInputFocus(event, "next");
        }
      } else if (keyCode == 37 || keyCode == 38) {
        //左 或者 上
        if (position === 0) {
          this.setInputFocus(event, "prev");
        }
      }
    },
    handlerKeyUp(event) {
      let evtTarget = event.target,
        keyVal = event.char || event.key,
        keyCode = event.keyCode,
        position = getCursorPos(evtTarget); //光标位置

      if (
        keyCode === 8 ||
        keyCode === 9 ||
        keyCode == 39 ||
        keyCode == 40 ||
        keyCode == 37 ||
        keyCode == 38
      ) {
        return;
      } else if (keyVal === this.inputSplitter) {
        //按键为分隔符时
        //当前值为空时不跳转
        evtTarget.value.length && this.setInputFocus(event, "next");
      } else {
        //输入框最大输入长度 == 当输入框内值长度 && 光标在最后一位时跳转
        if (
          this.inputMaxLen === evtTarget.value.length &&
          position === this.inputMaxLen
        ) {
          this.setInputFocus(event, "next");
          //event.preventDefault();
        }
      }
    },
    //输入框聚焦事件 type=next/prev
    setInputFocus(event, type) {
      let maxIndex = this.inputNumber - 1,
        index = this.focusIndex,
        inputElArr = this.$refs.input;
      if (type === "next") {
        if (index !== maxIndex) {
          inputElArr[index + 1].focus();
          // //设置光标在第一个位置
          //setCursorPos(inputElArr[index + 1].getInput(), 0);
          inputElArr[index + 1].select();
          event.preventDefault();
        }
      } else {
        if (index !== 0) {
          inputElArr[index - 1].focus();
          //设置光标在最后一位
          setCursorPos(
            inputElArr[index - 1].getInput(),
            inputElArr[index - 1].value.length
          );
          event.preventDefault();
        }
      }
    },
    getValue() {
      let inputElArr = this.$refs.input,
        inputValArr = [],
        reg = new RegExp("(\\" + this.inputSplitter + ")+$", "g");
      for (let i = 0; i < inputElArr.length; i++) {
        inputValArr.push(inputElArr[i].getNativeInputValue() || "");
      }
      //去掉尾部的分隔符
      return inputValArr.join(this.inputSplitter).replace(reg, "");
    },
    handlerFocus(event) {
      this.$nextTick(() => {
        this.isFocus = true;
      });
      this.focusIndex = +event.target.parentNode.getAttribute("data-index");
      this.$emit("focus");
    },
    handlerBlur() {
      this.isFocus = false;
      this.$emit("blur");
    }
  },
  watch: {
    type: {
      handler(val) {
        if (val === "ip") {
          this.inputSplitter = ".";
          this.inputMaxLen = 3;
          this.inputNumber = 4;
          this.inputAllow = /[0-9]/g;
        } else if (val === "mac") {
          this.inputSplitter = ":";
          this.inputMaxLen = 2;
          this.inputNumber = 6;
          this.inputAllow = /[0-9a-z]/gi;
        } else {
          this.inputSplitter = this.splitter;
          this.inputMaxLen = this.maxlength;
          this.inputNumber = this.inputNums;
          this.inputAllow = this.allow;
        }
      },
      immediate: true
    },
    isFocus: {
      handler(focus) {
        //失焦时 && 值有修改
        if (!focus && this.isChanged) {
          this.$emit("change", this.getValue());
          this.isChanged = false;
        }
        if (this.elFormItem && !this.elFormItem.ignore) {
          //当form组件存在且需要数据验证时
          this.$dispatch("v-form-item", "form:error", !focus);
        }
      },
      immediate: true
    },
    autoCorrection: {
      handler(val) {
        this.correctArgs = [];
        if (typeof val[0] === "string") {
          if (val.length !== 2) {
            this.correctArgs = [];
          } else {
            const limitMin = val[0].split(this.inputSplitter),
              limitMax = val[1].split(this.inputSplitter),
              len = limitMin.length;
            let i = 0;

            for (; i < len; i++) {
              if (!limitMin[i] || !limitMax[i]) {
                this.correctArgs = [];
                break;
              }
              const limitArr = [];
              limitArr.push(Number(limitMin[i]));
              limitArr.push(Number(limitMax[i]));
              this.correctArgs.push(limitArr);
            }
          }
        } else {
          this.correctArgs = val;
        }
      },
      immediate: true
    }
  }
};
</script>
