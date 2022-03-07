<template>
  <div class="header-operate">
    <div class="operate-btn" @click="visibleChange">
      <div class="v-icon-more"></div>
    </div>
    <create-to-body width="180px" :show="dropdownShow">
      <div class="v-dropdown__menu">
        <v-scroll v-clickoutside="visibleChange" @mounted="setPosition">
          <div class="v-checkbox-trade v-checkbox-group">
            <v-checkbox
              no-id
              class="v-checkbox-group__item"
              v-model="isAllChecked"
            >
              全选
            </v-checkbox>
            <v-checkbox
              no-id
              class="v-checkbox-group__item"
              v-model="isDefaultChecked"
            >
              默认状态
            </v-checkbox>
            <div class="line"></div>
            <!-- 选项 -->
            <v-checkbox
              no-id
              class="v-checkbox-group__item"
              :class="{
                'v-checkbox-group__item--active': activeValue === item.value
              }"
              v-for="(item, index) in optionList"
              :key="item.value"
              :value="checkboxValueList[index]"
              :disabled="item.disabled"
              :on-value="item.value"
              :off-value="offValue"
              @change="changeValue(item)"
            >
              {{ item.label }}
            </v-checkbox>
          </div>
        </v-scroll>
      </div>
    </create-to-body>
  </div>
</template>
<script>
import CreateToBody from "../create-to-body";
import { copyDeepData } from "../libs";

export default {
  components: {
    CreateToBody
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {},
    options: {},
    defaultSelectValue: {},
    activeValue: [String, Number, Boolean]
  },
  data() {
    return {
      dropdownShow: false,
      offValue: undefined
    };
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
    defaultSelectArr() {
      let list = copyDeepData(this.defaultSelectValue);
      this.optionList.forEach(item => {
        //为禁用 或者 禁用却被选中
        if (
          item.disabled &&
          this.value.indexOf(item.value) !== -1 &&
          list.indexOf(item.value) == -1
        ) {
          list.push(item.value);
        }
      });
      return list;
    },
    unSelectedAllValue() {
      let list = [];
      this.optionList.forEach(item => {
        //为禁用 且 被选中
        if (item.disabled && this.value.indexOf(item.value) !== -1) {
          list.push(item.value);
        }
      });
      return list;
    },
    isAllChecked: {
      get() {
        return (
          this.value.length === this.selectAllValue.length &&
          this.selectAllValue.every(ele => this.value.includes(ele))
        );
      },
      set(value) {
        this.selectAll(value);
      }
    },
    isDefaultChecked: {
      get() {
        return (
          this.value.length === this.defaultSelectArr.length &&
          this.defaultSelectArr.every(ele => this.value.includes(ele))
        );
      },
      set(value) {
        this.selectDefault(value);
      }
    }
  },
  methods: {
    changeValue(options) {
      if (this.disabled || options.disabled) return;

      let index = this.value.indexOf(options.value);
      if (index === -1) {
        this.value.push(options.value);
      } else {
        this.value.splice(index, 1);
      }
      this.$emit("change", this.value);
    },
    selectAll(value) {
      let allValue = [].concat(this.selectAllValue);
      if (value) {
        this.$emit("change", allValue);
      } else {
        this.$emit("change", this.unSelectedAllValue);
      }
    },
    selectDefault(value) {
      if (value) {
        this.$emit("change", this.defaultSelectArr);
      } else {
        this.$emit("change", this.unSelectedAllValue);
      }
    },
    visibleChange() {
      this.dropdownShow = !this.dropdownShow;
    },
    setPosition() {
      this.$dispatch("create-to-body", "update:position");
    }
  }
};
</script>
