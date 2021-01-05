<template>
  <div></div>
</template>
<script>
import { copyDeepData } from "../libs";
let expandFn = function() {};
export default {
  name: "v-table-col",
  props: {
    type: String,
    label: {
      //表头文字
      default: "",
      type: String
    },
    prop: {
      //表格字段
      default: "",
      type: String
    },
    width: {
      //宽度
      type: String
    },
    isTooltip: {
      //是否支持提示信息
      type: Boolean,
      default: false
    },
    isSort: {
      //是否支持排序
      type: Boolean,
      default: false
    },
    isSearch: {
      //是否支持搜索
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: "left"
    },
    format: {
      type: Function,
      default(prop, data) {
        return data[prop];
      }
    },
    beforeSelected: {
      type: Function,
      default() {
        return true;
      }
    },
    getDisabled: {
      type: Function,
      default() {
        return false;
      }
    }
  },
  mounted() {
    this.$dispatch("v-table", "add.column", this.getProps());
  },
  methods: {
    getProps() {
      let props = copyDeepData(this.$props);
      props.sortType = "";
      props.fn = this.$scopedSlots.default;
      props.expandFn = this.$scopedSlots.expand || expandFn;
      return props;
    }
  },
  beforeDestroy() {
    this.$dispatch("VTable", "remove.column", this.prop);
  },
  watch: {
    label() {
      this.$dispatch("VTable", "update.column", this.getProps());
    }
  }
};
</script>
