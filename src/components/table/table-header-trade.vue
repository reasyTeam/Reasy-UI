<template>
  <table
    ref="table"
    class="table v-table__header"
    :class="{ 'v-table__border': border }"
  >
    <v-dropdown-trade
      v-if="headOperate"
      class="check-group"
      @visible-change="visibleChange"
    >
      <template #head>
        <div class="v-icon-more"></div>
      </template>
      <template #content>
        <div>
          <v-checkbox-group-trade
            :min="1"
            v-model="checked"
            :options="options"
            :default-select-value="defaultSelectValue"
            is-select-all
            is-default-select
          ></v-checkbox-group-trade>
        </div>
      </template>
    </v-dropdown-trade>
    <colgroup>
      <col
        v-for="(col, index) in columns"
        :width="col.width"
        :key="index + 1"
        :align="col.align"
      />
    </colgroup>
    <thead>
      <tr>
        <th
          v-for="(col, index) in columns"
          :key="index + 1"
          :class="[{ 'v-table__header--sort': col.isSort }, `is_${col.align}`]"
          @click="sortTable(col)"
          @mouseenter="mouseenter(col)"
          @mouseleave="mouseleave(col)"
        >
          <!-- 选择框 -->
          <v-checkbox
            v-if="col.type === 'selection'"
            class="v-table__header__checkbox"
            :before-change="beforeSelectAll"
            v-model="isSelectedAll"
            :hasValue="isSelected"
            :disabled="isSelectAllDisabled"
          ></v-checkbox>
          <!-- 表头文字 -->
          <!-- 支持显示html -->
          <span
            class="v-table__header__label"
            :class="{
              'text--active': sortProp === col.prop && col.isSort
            }"
            v-if="col.isHtmlHeader"
            v-html="col.label"
          ></span>
          <!-- text格式显示 -->
          <span
            class="v-table__header__label"
            v-else
            :class="{
              'text--active': sortProp === col.prop && col.isSort
            }"
            >{{ col.label }}</span
          >
          <!-- 排序 -->
          <span v-if="col.isSort" class="v-table__sort">
            <span
              v-if="col.load && sortProp === col.prop"
              class="v-table__icon v-icon-sort-load text--active"
            ></span>
            <span
              v-else-if="col.hover && col.sortType == ''"
              class="v-table__icon v-icon-sort-up"
            ></span>
            <span
              v-else-if="col.sortType === 'asc' && sortProp === col.prop"
              class="v-table__icon v-icon-sort-up text--active"
            ></span>
            <span
              v-else-if="col.sortType === 'desc' && sortProp === col.prop"
              class="v-table__icon v-icon-sort-down text--active"
            ></span>
          </span>
        </th>
      </tr>
    </thead>
  </table>
</template>
<script>
import VDropdownTrade from "../dropdown/v-dropdown-trade.vue";
import VCheckboxGroupTrade from "../checkbox/v-checkbox-group-trade.vue";
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
    //是否有选项框被选中
    isSelected: Boolean,
    beforeSelectAll: Function,
    isSelectAllDisabled: Boolean,
    disabled: Boolean,
    headOperate: Boolean
  },
  components: {
    VDropdownTrade,
    VCheckboxGroupTrade
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
      this.columns.forEach((element) => {
        if (element.type == "selection") {
          return;
        }
        //下拉框option
        this.options.push({
          label: element.label,
          value: element.prop,
          disabled: !element.addOperate
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
        col.sortType = "desc";
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
        let arr = this.columnsCopy.filter((element) => {
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
