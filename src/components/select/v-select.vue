<template>
  <div
    class="v-select"
    :class="[sizeCss, { 'is-disabled': isDisabled }]"
    :style="{ width: selectWidth }"
    @mouseover="handlerMouseover"
    @mouseout="isMouseover = false"
  >
    <v-input
      class="v-select__input"
      :class="{ 'v-select__input--clear': inputValue && isClear }"
      v-if="isShowInput"
      v-model="inputValue"
      ref="input"
      is-child
      :name="name"
      :data-name="_name"
      :maxlength="maxlength"
      :minlength="minlength"
      :disabled="isDisabled"
      :is-clear="isClear"
      @blur="handlerBlur"
      @input="handlerInput"
      @focus="handlerFoucs"
      @change="changeValue"
      :unit="unit"
      :placeholder="placeholder"
      :allow="allow"
      :size="size"
      :ignoreUpdateValue="true"
    >
    </v-input>
    <div
      :name="name"
      :data-name="_name"
      v-else
      class="v-select__label input-text"
      :class="{ 'is-disabled': isDisabled, 'is-focus': dropdownShow }"
      @click="showOptions"
    >
      <div v-if="!isMultiple" class="v-select__label--text">
        {{ selectLabel }}
      </div>
      <!--多选-->
      <div v-else class="v-select__label--text v-select__label--position">
        <template v-if="multipleLabel.length > 0">
          <span class="v-select__label__item">
            <span class="v-select__label--text__item">{{
              multipleLabel[0].label
            }}</span>
            <span
              class="v-select__icon--right v-icon-close"
              @click.stop.prevent="delValue"
            ></span>
          </span>
          <!-- 多选个数大于1时 其他项用数字表示 -->
          <span v-if="multipleLabel.length > 1" class="v-select__label__item">
            <span class="v-select__label--text__item">
              +{{ multipleLabel.length - 1 }}
            </span>
          </span>
        </template>
      </div>
      <div class="placeholder-text" v-if="isEmpty">
        {{ placeholder }}
      </div>
    </div>
    <!-- 下拉图标 -->
    <span
      class="v-select__icon"
      :class="{
        'v-select__icon--active': dropdownShow,
        'v-icon-down': !hasClear,
        'v-icon-close-plane': hasClear
      }"
      @click="showOptions(true)"
    ></span>
    <create-to-body
      ref="body"
      :data-name="_name"
      :show="dropdownShow"
      v-clickoutside="hide"
      :position="position"
    >
      <dropdown-list
        :class="sizeCss"
        :options="optionList"
        :is-multiple="isMultiple"
        :multiple-limit="multipleLimit"
        :select-value="value"
        :count="displayOptionsNumber"
        @click-options="clickOptions"
        @hide="hide"
      ></dropdown-list>
    </create-to-body>
  </div>
</template>

<script>
import DropdownList from "./dropdown-list";
import CreateToBody from "../create-to-body.vue";
import { size } from "../filters";
import FormMixin from "../form-mixins";

export default {
  name: "v-select",
  mixins: [FormMixin],
  components: {
    DropdownList,
    CreateToBody
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: [String, Number, Array, Boolean],
      default: ""
    },
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    //是否支持多选
    isMultiple: {
      type: Boolean,
      default: false
    },
    //多选限制个数
    multipleLimit: {
      type: Number,
      default: 0
    },
    //选项
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    //是否手动配置
    isManual: {
      type: Boolean,
      default: false
    },
    //手动配置文字
    manualText: {
      type: String,
      default: _("Custom")
    },
    //下拉选项位置
    position: {
      type: String,
      default: "auto"
    },
    //最大输入长度
    maxlength: Number,
    //最小输入长度
    minlength: Number,
    //宽度
    width: [String, Number],
    //占位符
    placeholder: {
      type: String,
      default: _("Please select")
    },
    //是否支持清空
    isClear: {
      type: Boolean,
      default: false
    },
    //是否只读
    readonly: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "M"
    },
    //后缀图标
    suffixIcon: String,
    //允许输入字符的正则表达式
    allow: RegExp,
    displayOptionsNumber: {
      type: Number,
      default: 5
    },
    unit: {
      type: String,
      default: ""
    }
  },
  computed: {
    //大小
    sizeCss() {
      let cssObj = {
        M: "v-select--medium",
        S: "v-select--small",
        L: "v-select--large"
      };
      return cssObj[this.size] || cssObj.M;
    },
    //宽度
    selectWidth() {
      return size(this.width);
    },
    //选项列表
    optionList() {
      let list = [];
      this.options.forEach(item => {
        if (typeof item === "object") {
          list.push(item);
        } else {
          list.push({
            label: String(item),
            value: item,
            disabled: false
          });
        }
      });
      //支持自定义 && 不支持多选时
      if (this.isManual && !this.isMultiple) {
        list.push({
          label: this.manualText,
          disabled: false,
          isManual: true
        });
      }
      return list;
    },
    //值是否在选项内
    isExsitOption() {
      let isExsitOptions = this.optionList.filter(item => {
        return item.value === this.value;
      });
      return isExsitOptions.length > 0 ? isExsitOptions : false;
    },
    multipleLabel() {
      let list = [];
      this.value.forEach(item => {
        let isExsit = this.optionList.filter(item1 => item1.value === item);
        if (isExsit.length > 0) {
          list.push(isExsit[0]);
        } else {
          list.push({
            value: item,
            label: item
          });
        }
      });
      return list;
    },
    selectLabel() {
      return this.isExsitOption ? this.isExsitOption[0].label : this.value;
    },
    isShowInput() {
      return this.isManual && (!this.isExsitOption || this.isInput);
    },
    isEmpty() {
      return this.isMultiple ? this.value.length === 0 : this.value === "";
    },
    hasClear() {
      return this.isClear && !this.isEmpty && this.isMouseover;
    },
    isShowError() {
      return !this.isInput && !this.dropdownShow;
    }
  },
  data() {
    return {
      dropdownShow: false,
      isInput: false,
      inputValue: "",
      isMouseover: false
    };
  },
  methods: {
    showOptions(isArrow) {
      if (this.isDisabled) return;
      if (isArrow === true) {
        if (this.hasClear) {
          this.$emit("change", this.isMultiple ? [] : "");
          this.$dispatch("v-form", "form:change");

          this.$emit("clear");
          this.dropdownShow = false;
          return;
        }
      }
      this.dropdownShow = !this.dropdownShow;
    },
    clickOptions(options) {
      //自定义时
      if (options.isManual) {
        this.handlerManual();
        return;
      }
      this.isInput = false;
      //多选时
      if (this.isMultiple) {
        this.changeMultiple(options.value);
      } else {
        this.changeValue(options.value);
      }
    },
    handlerManual() {
      //处理自定义
      this.isInput = true;
      this.inputValue = "";
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    handlerBlur(event) {
      //失焦
      this.inputValue = this.value;
      this.isInput = false;
      this.$emit("blur", event);
    },
    handlerFoucs(event) {
      //聚焦
      this.$emit("focus", event);
    },
    handlerInput(val) {
      //输入框输入事件
      this.$emit("input", val);
    },
    handlerMouseover() {
      if (!this.isDisabled && !this.isShowInput) this.isMouseover = true;
    },
    changeValue(value) {
      if (this.value === value) {
        return;
      }

      let isExsitLabel = this.optionList.filter(item => {
        return item.label === value;
      });
      //label存在选项内 且不是自定义时
      if (isExsitLabel.length === 1 && !isExsitLabel[0].isManual) {
        value = isExsitLabel[0].value;
      }

      this.$emit("change", value);
      this.$dispatch("v-form", "form:change");

      this.$nextTick(function() {
        this.checkValid(value);
      });
    },
    changeMultiple(value) {
      let index = this.value.indexOf(value);
      if (index === -1) {
        if (this.multipleLimit === 0) {
          this.value.push(value);
        } else if (this.value.length < this.multipleLimit) {
          this.value.push(value);
        }
      } else {
        this.value.splice(index, 1);
      }
      this.$emit("change", this.value);
      this.$dispatch("v-form", "form:change");

      this.checkValid(this.value);
    },
    delValue() {
      if (this.isDisabled) {
        return;
      }
      this.value.shift();
      this.checkValid(this.value);
    },
    hide() {
      this.dropdownShow = false;
    },
    setInputValue(val) {
      if (this.$refs.input) {
        this.$refs.input.setInputValue(val);
      }
    },
    beforeCheckError() {
      if (this.isExsitOption) {
        return true;
      }
    }
  },
  watch: {
    value: {
      handler(val) {
        this.inputValue = val;
      },
      immediate: true
    },
    dropdownShow(val) {
      this.$emit("visible-change", val);
    },
    isShowError(val) {
      if (this.elFormItem && !this.elFormItem.ignore) {
        //当form组件存在且需要数据验证时
        this.$dispatch("v-form-item", "form:error", val);
      }
    }
  }
};
</script>
