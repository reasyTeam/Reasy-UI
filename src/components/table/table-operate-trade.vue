<template>
  <v-header-operate
    v-model="checked"
    v-if="headOperate"
    class="check-group"
    :options="options"
    :default-selected="defaultSelectValue"
  >
  </v-header-operate>
</template>
<script>
import VHeaderOperate from "./v-header-operate.vue";
import { copyDeepData } from "../libs";
export default {
  props: {
    //全选值
    value: Boolean,
    //表头选项
    columns: Array,
    //是否有边框
    border: Boolean,
    //排序元素
    sortProp: String,
    // //默认排序类型
    // defaultSortType:String,
    //是否有选项框被选中
    isSelected: Boolean,
    beforeSelectAll: Function,
    isSelectAllDisabled: Boolean,
    disabled: Boolean,
    headOperate: Boolean
  },
  components: {
    VHeaderOperate
  },
  data() {
    return {
      columnsCopy: [], //列数据拷贝
      checked: [], //列表项选择的数据
      options: [], //选择组的选项
      defaultSelectValue: [] //默认状态的选择的数据
    };
  },
  computed: {
    isSelectedAll: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("change", val);
      }
    },
    isDisabled() {
      return this.disabled || this.$parent.disabled;
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.columnsCopy = copyDeepData(this.columns);
      this.columns.forEach(element => {
        if (element.type == "selection") {
          return;
        }
        //下拉框option
        this.options.push({
          label: element.label,
          value: element.prop,
          disabled: !element.addOperate,
          hideInOperate: element.hideInOperate
        });
        //默认状态值
        element.isDefaultValue && this.defaultSelectValue.push(element.prop);
        //默认状态
        (!element.addOperate || element.isDefaultValue) &&
          this.checked.push(element.prop);
      });
      //更新表格
      this.visibleChange(false);
    });
  },
  methods: {
    getHeight() {
      return parseInt(this.$refs.table.scrollHeight);
    },
    getWidth() {
      return parseInt(this.$refs.table.scrollWidth);
    },
    mouseenter(col) {
      this.$set(col, "hover", true);
    },
    mouseleave(col) {
      this.$set(col, "hover", false);
    },
    sortTable(col) {
      if (this.isDisabled) {
        return;
      }

      if (!col.isSort) {
        return;
      }
      this.$set(col, "load", true);
      if (col.sortType === "asc") {
        col.sortType = "des";
      } else {
        col.sortType = "asc";
      }
      this.columns.forEach((element, index) => {
        element.prop != col.prop &&
          this.$set(this.columns[index], "sortType", "");
      });
      this.$emit("sort", col.prop, col.sortType);
    },
    visibleChange(isShow) {
      if (!isShow) {
        let arr = this.columnsCopy.filter(element => {
          if (element.type == "selection") {
            return true;
          }
          return this.checked.indexOf(element.prop) != -1;
        });
        this.$dispatch("v-table", "update.column", arr, true);
      }
    }
  },
  watch: {
    checked() {
      this.visibleChange();
    }
  }
};
</script>
