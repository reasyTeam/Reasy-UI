<template>
  <table
    ref="table"
    class="table v-table__header"
    :class="{ 'v-table__border': border }"
    v-if="isTable"
  >
    <v-header-operate
      v-model="checked"
      v-if="headOperate"
      class="check-group"
      :options="options"
      :default-selected="defaultSelectValue"
      @getCheckOperateData="getCheckOperateData"
    >
    </v-header-operate>
    <colgroup>
      <col
        v-for="(col, index) in columns"
        :width="col.colWidth"
        :key="index + 1"
        :align="col.align"
        :style="{ minWidth: col.colWidth + 'px' }"
      />
    </colgroup>
    <thead>
      <tr>
        <th
          v-for="(col, index) in columns"
          :key="index + 1"
          :class="[
            { 'v-table__header--sort': col.isSort },
            `is_${col.align}`,
            'fixed'
          ]"
          :data-help="col.help || col.prop"
          @click="sortTable(col)"
          :id="name | id(col.prop)"
          @mouseenter="mouseenter(col)"
          @mouseleave="mouseleave(col)"
        >
          <!-- 选择框 -->
          <v-checkbox
            no-id
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
              v-else-if="col.sortType === 'des' && sortProp === col.prop"
              class="v-table__icon v-icon-sort-down text--active"
            ></span>
          </span>
        </th>
      </tr>
    </thead>
  </table>

  <thead
    ref="table"
    class="table v-table__header"
    :class="{ 'v-table__border': border }"
    v-else
  >
    <v-header-operate
      v-model="checked"
      v-if="headOperate"
      class="check-group"
      :options="options"
      :default-selected="defaultSelectValue"
      @getCheckOperateData="getCheckOperateData"
    >
    </v-header-operate>
    <tr>
      <th
        v-for="(col, index) in columns"
        class="fixed"
        :key="index + 1"
        :class="[
          { 'v-table__header--sort': col.isSort },
          `is_${col.align}`,
          `headerWidth_${col.prop}`
        ]"
        :data-help="col.help || col.prop"
        @click="sortTable(col)"
        @mouseenter="mouseenter(col)"
        @mouseleave="mouseleave(col)"
        :ref="`headerWidth_${col.prop}`"
        :style="{ 'min-width': col.width }"
        :id="name | id(col.rawProp || index)"
      >
        <!-- 选择框 -->
        <v-checkbox
          :no-id="!name"
          :name="name | id((col.rawProp || index) + '-checbox')"
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
            v-else-if="col.sortType === 'des' && sortProp === col.prop"
            class="v-table__icon v-icon-sort-down text--active"
          ></span>
        </span>
      </th>
    </tr>
  </thead>
</template>
<script>
import NameMixin from "../name-mixins";
import VHeaderOperate from "./v-header-operate.vue";
import { copyDeepData } from "../libs";
export default {
  mixins: [NameMixin],
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
    headOperate: Boolean,
    checkOperateData: Array,
    data: Array,
    isTable: {
      type: Boolean,
      default: true
    }
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
      this.updateColumn();

      this.columnsCopy = copyDeepData(this.columns);
      let checkedData = [];
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
          checkedData.push(element.prop);
      });

      this.checked =
        this.checkOperateData.length > 0 ? this.checkOperateData : checkedData;
    });
  },
  methods: {
    updateColumn() {
      if (!this.isTable) {
        this.columns.forEach(el => {
          el.colWidth = 0;
        });
        this.$nextTick(() => {
          this.columns.forEach(el => {
            let eles = this.$refs[`headerWidth_${el.prop}`];
            if (eles.length) {
              el.colWidth = eles[0].offsetWidth;
            }
            if (el.type === "selection") {
              el.colWidth = 40;
            } else if (el.type === "index") {
              el.colWidth = 48;
            } else if (el.fixed) {
              el.colWidth = 100;
            }
          });
        });
      }
    },
    getCheckOperateData(data) {
      this.$emit("getCheckOperateData", data);
    },
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
    visibleChange() {
      let arr = this.columnsCopy.filter(element => {
        if (element.type == "selection" || element.hideInOperate) {
          return true;
        }

        return this.checked.indexOf(element.prop) != -1;
      });
      this.$dispatch("v-table", "update.column", arr, true);
    }
  },
  watch: {
    checked() {
      this.visibleChange();
    },
    checkOperateData() {
      this.checked =
        this.checkOperateData.length > 0 ? this.checkOperateData : this.checked;
    },
    data: {
      handler() {
        this.updateColumn();
      },
      immediate: true
    },
    columns: {
      handler() {
        // 重新汇总columns数据
        this.$nextTick(() => {
          this.updateColumn();
        });
      },
      immediate: true
    }
  }
};
</script>
