<template>
  <div class="v-checkbox-group">
    <!-- 全选 -->
    <v-checkbox
      class="v-checkbox-group__item"
      v-if="isSelectAll"
      :has-value="!isAllChecked && value.length > 0"
      v-model="isAllChecked"
      :disabled="disabled"
      @click="handleAllClick"
    >
      {{ selectText }}
    </v-checkbox>
    <!-- 选项 -->
    <v-checkbox
      class="v-checkbox-group__item"
      :class="{ 'v-checkbox-group__item--active': activeValue === item.value }"
      v-for="(item, index) in optionList"
      :key="item.value"
      :value="checkboxValueList[index]"
      :on-value="item.value"
      :off-value="offValue"
      :disabled="getDisabled(item, checkboxValueList[index])"
      @change="changeValue(item)"
      @click="handlerClick(item)"
    >
      {{ item.label }}
    </v-checkbox>
  </div>
</template>

<script>
import FormMixin from "../form-mixins";
export default {
  name: "v-checkbox-group",
  mixins: [FormMixin],
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    activeValue: [String, Number, Boolean],
    value: Array,
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    //选项
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    //是否支持全选
    isSelectAll: {
      type: Boolean,
      default: false
    },
    //支持全选时的文字
    selectText: {
      type: String,
      default: "全选"
    },
    //最小选中个数
    min: {
      type: Number,
      default: 0
    },
    //最大选中个数
    max: Number
  },
  computed: {
    //选项显示列表
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
      return list;
    },
    //选项值列表
    checkboxValueList() {
      let list = [];
      this.optionList.forEach(item => {
        if (this.value.indexOf(item.value) !== -1) {
          list.push(item.value);
        } else {
          list.push(this.offValue);
        }
      });
      return list;
    },
    selectAllValue() {
      let list = [];
      this.optionList.forEach(item => {
        //为禁用 或者 禁用却被选中
        if (!item.disabled || this.value.indexOf(item.value) !== -1) {
          list.push(item.value);
        }
      });
      return list;
    },
    isAllChecked: {
      get() {
        return this.value.length >= this.selectAllValue.length;
      },
      set(value) {
        this.selectAll(value);
      }
    }
  },
  data() {
    return {
      offValue: undefined
    };
  },
  methods: {
    changeValue(options) {
      if (this.disabled || options.disabled) return;

      let index = this.value.indexOf(options.value);
      if (index === -1) {
        if (!this.max || this.max - 1 >= this.value.length) {
          this.value.push(options.value);
        }
      } else {
        this.value.splice(index, 1);
      }
      this.$emit("change", this.value);
      this.checkValid(this.value);
    },
    selectAll(value) {
      let allValue = [].concat(this.selectAllValue);
      if (this.max) {
        allValue = allValue.slice(0, this.max);
      }
      if (value) {
        this.$emit("change", allValue);
        this.checkValid(allValue);
      } else {
        this.$emit("change", []);
        this.checkValid([]);
      }
    },
    handlerClick(options) {
      if (this.disabled || options.disabled) return;
      this.$emit("click", options.value);
    },
    handleAllClick() {
      if (this.disabled) return;
      this.$emit("click-all", this.isAllChecked);
    },
    getDisabled(options, value) {
      if (this.disabled || options.disabled) return true;

      //未选中时
      if (value !== options.value) {
        if (this.max && this.value.length >= this.max) {
          return true;
        }
      } else {
        //选中时
        if (this.min && this.value.length <= this.min) {
          return true;
        }
      }
      return false;
    }
  }
};
</script>
