<template>
  <div class="v-table v-table-trade" :class="[sizeCss, { disabled: disabled }]">
    <!-- 搜索 -->
    <div class="v-table__search">
      <!-- 表格上方左侧按钮 -->
      <div class="search-input"><slot name="btnLeft"></slot></div>
      <!-- 表格上方右侧按钮 -->
      <div class="float_right">
        <div class="search-input"><slot name="btnRight"></slot></div>
        <v-input
          no-id
          :name="name | id('search')"
          v-if="search"
          class="search-input"
          v-model="searchValue"
          placeholder="搜索"
          suffix-icon="v-icon-search"
          @input="inputSearch"
          @change="changeSearch"
        ></v-input>
      </div>
    </div>
    <div class="clearfix"></div>

    <div class="v-table__content">
      <!-- 表格内容 -->
      <div
        ref="table-body"
        class="v-table__body"
        :class="{ 'v-table__border': border }"
      >
        <table ref="table" class="table" :class="{ 'v-table__stripe': stripe }">
          <colgroup>
            <col
              v-for="(col, index) in columns"
              :width="col.width"
              :key="index + 1"
              v-bind:style="{ minWidth: col.width }"
            />
          </colgroup>
          <table-header-trade
            :name="name | id('tht')"
            :isTable="false"
            :data="tableData"
            :style="{ visibility: maxRow > 0 ? 'collapse' : 'visible' }"
            :checkOperateData="checkOperateData"
            @getCheckOperateData="getCheckOperateData"
            :columns="columns"
            :border="border"
            :sortProp="sortProp"
            :value="checkboxAllVal"
            :is-selected="hasCheckBoxSelect"
            :before-select-all="beforeSelectAll"
            :is-select-all-disabled="
              isSelectAllDisabled || tableData.length === 0
            "
            @change="changeCheckboxAll"
            @sort="sortTable"
            :head-operate="headOperate"
          ></table-header-trade>
          <tbody>
            <slot name="header"></slot>
            <!-- 列表数据信息 -->
            <template v-for="(rowData, rowIndex) in tableData">
              <!-- 数据行信息 -->
              <tr
                ref="table-body-tr"
                class="v-table__row"
                :class="{
                  'v-table__row--active': rowData[CHECKBOX_NAME]
                }"
                @click="clickRow(rowData)"
                :key="rowData[rowKey] || rowIndex"
              >
                <template v-for="(col, index) in columns">
                  <v-td
                    :emptyValue="emptyValue"
                    :column="col"
                    :key="index"
                    :index="index"
                    :checkbox-field="CHECKBOX_NAME"
                    :expand-field="EXPAND_NAME"
                    :row-data="rowData"
                    :row-index="rowIndex"
                    :filter-search="filterSearch.bind(this)"
                    :click-checkbox="clickCheckbox.bind(this, rowData)"
                    :expand-table="expandTable.bind(this)"
                    :before-change="col.beforeSelected.bind(this, rowData)"
                    ref="checktd"
                  ></v-td>
                </template>
              </tr>
              <!-- expand展开信息 -->
              <tr
                class="v-table__row"
                :key="rowIndex + 1 + EXPAND_NAME"
                v-if="expandFunc && rowData[EXPAND_NAME]"
              >
                <td :colspan="columns.length" class="v-table__expand--inner">
                  <collapse-transition>
                    <table-expand
                      class="v-table__expand__wrapper"
                      :rowData="rowData"
                      :index="rowIndex"
                      :fn="expandFunc"
                    ></table-expand>
                  </collapse-transition>
                </td>
              </tr>
            </template>
            <!-- 列表为空信息 -->
            <tr v-show="tableData.length === 0 && !isLoading">
              <td :colspan="columns.length">
                <slot name="empty">
                  <div class="v-table__empty-data">
                    {{ emptyText }}
                  </div>
                </slot>
              </td>
            </tr>
            <!-- 默认表格loading要多加一空行 -->
            <tr v-if="tableData.length === 0 && isLoading && !$slots.loading">
              <td :colspan="columns.length">
                <div class="v-table__empty-data"></div>
              </td>
            </tr>
            <tr v-if="customLastLine">
              <td :colspan="columns.length" class="is_left">
                <slot name="lastTr"></slot>
              </td>
            </tr>
          </tbody>
          <!-- 默认slot -->
          <slot></slot>
        </table>
      </div>
      <!-- 分页信息 -->
      <table-footer
        v-if="isPagination && totalLength > 0"
        :page="currentPage"
        :total="totalLength"
        :border="showPageBorder"
        :pageSize="pageSize"
        :isChangeSize="isChangeSize"
        :isInputPage="isInputPage && totalPage > 1"
        :pageSizeOptions="pageSizeOptions"
        @change-page="changePage"
        @change-size="changeSize"
      >
      </table-footer>
      <v-loading
        v-if="!$slots.loading"
        class="v-table__loading"
        :visible="isLoading"
        background="#0058e4"
      >
        {{ loadingText }}
      </v-loading>
    </div>

    <div v-if="$slots.loading" v-show="isLoading">
      <slot name="loading"></slot>
    </div>
  </div>
</template>

<script>
// import VTd from "./v-td.vue";
import VTd from "./table-td-trade.vue";
import CollapseTransition from "../collapse/collapse-transition.js";
import TableExpand from "./table-tb-fn.vue";
import TableHeaderTrade from "./table-header-trade.vue";
import TableFooter from "./table-footer.vue";
import NameMixin from "../name-mixins";
import {
  copyDeepData,
  escapeHTML
  // isUndefinedOrNull,
} from "../libs";
import { size } from "../filters";
const CHECKBOX_UNCHECKED = false; //选项未选中值
// const CHECKBOX_CHECKED = true; //选项选中值
const CHECKBOX_NAME = "$checked"; //选择的属性
const EXPAND_NAME = "$expand"; //展开属性
const DISABLED_FIELD = "DISABLED";

export { DISABLED_FIELD };

export default {
  name: "v-table",
  mixins: [NameMixin],
  components: {
    VTd,
    TableHeaderTrade,
    TableExpand,
    TableFooter,
    CollapseTransition
  },
  props: {
    data: Array,
    size: {
      type: String,
      default: "L"
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    rowKey: String,
    maxRow: {
      type: Number,
      default: 0
    },
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    isLoading: {
      type: Boolean,
      default: false
    },
    loadingText: String,
    emptyText: {
      type: String,
      default: _("No Data")
    },
    isPagination: {
      type: Boolean,
      default: false
    },
    pageSize: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    },
    isChangeSize: {
      type: Boolean,
      default: false
    },
    pageSizeOptions: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50, 100];
      }
    },
    isInputPage: {
      type: Boolean,
      default: false
    },
    // 是否显示分页的框
    showPageBorder: {
      type: Boolean,
      default: true
    },
    totalLength: {
      type: Number,
      default: 0
    },
    //选中的选项
    selectData: {
      type: Array,
      default() {
        return [];
      }
    },
    beforeSelectAll: {
      type: Function,
      default() {
        return true;
      }
    },
    //全选是否禁用
    isSelectAllDisabled: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    headOperate: {
      type: Boolean,
      default: false
    },
    checkOperateData: {
      type: Array,
      default() {
        return [];
      }
    },
    beforeEditClick: {
      type: Function,
      default() {
        return true;
      }
    },
    //是否有删除按钮
    isDelete: {
      type: Boolean,
      default: false
    },
    deleteConfig: {
      type: Object,
      default() {
        return {};
      }
    },
    //数据为空配置
    emptyValue: {
      type: String,
      default: "-"
    },
    beforeDeleteClick: {
      type: Function,
      default() {
        return true;
      }
    },
    customLastLine: {
      type: Boolean,
      default: false
    },
    //实时搜索
    realtimeSearch: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sizeCss() {
      let cssObj = {
        M: "v-table--medium",
        S: "v-table--small",
        L: "v-table--large"
      };
      return cssObj[this.size] || cssObj.L;
    },
    //是否显示搜索信息
    search() {
      return this.searchSupportArr.length > 0;
    },
    //总页数
    totalPage() {
      return Math.ceil(this.totalLength / this.pageSize);
    },
    searchPlaceholder() {
      if (this.placeholder) return this.placeholder;
      let searchArr = [];
      this.searchSupportArr.forEach(item => {
        searchArr.push(item.label);
      });
      return searchArr.join("/");
    },
    //非全选时是否有选中的项
    hasCheckBoxSelect() {
      return !this.checkboxAllVal && this.selectedCount > 0;
    },
    // selectData映射
    selectedObject() {
      return this.selectData.reduce((preValue, item) => {
        preValue[item[this.rowKey]] = item;
        return preValue;
      }, {});
    },
    selectedCount() {
      return this.runtimeSelected.length;
    }
  },
  data() {
    this.disabledCount = 0;
    this.CHECKBOX_NAME = CHECKBOX_NAME;
    this.EXPAND_NAME = EXPAND_NAME;
    return {
      runtimeSelected: [],
      columns: [], //表头信息
      tableWidth: 0, //表格宽度
      tableData: [], // 表格当前数据
      checkboxAllVal: CHECKBOX_UNCHECKED, //全选
      searchValue: "", //搜索框值
      searchText: "", //搜索时的文字
      searchSupportArr: [], //支持search字段
      expandFunc: false, //展开事件
      sortProp: "" //当前排序元素
    };
  },
  created() {
    this.columns = [];
    this.searchSupportArr = [];
    // 列信息收集
    // 添加表格列信息
    this.$on("add.column", item => {
      if (this.columns.some(colItem => item.prop == colItem.prop)) {
        return;
      }
      //支持展开
      if (item.type === "expand") {
        this.expandFunc = item.expandFn;
      }

      if (item.isSearch) {
        //支持搜索
        this.searchSupportArr.push({
          label: item.label,
          prop: item.prop
        });
      }

      if (item.width) {
        item.width = size(item.width);
      } else if (item.type === "selection") {
        item.width = 40;
      } else if (item.type === "index") {
        item.width = 48;
      }

      this.columns.push(item);
    });

    function findColumn(columns, prop) {
      let exsitIndex = -1;
      columns.filter((colItem, index) => {
        if (prop == colItem.prop) {
          exsitIndex = index;
          return true;
        }
      });
      return exsitIndex;
    }
    //更新表格列信息
    this.$on("update.column", (item, updateCol) => {
      if (updateCol) {
        this.columns = item;
      } else {
        let exsitIndex = findColumn(this.columns, item.prop);
        if (exsitIndex == -1) {
          return;
        }
        //替换
        this.columns.splice(exsitIndex, 1, item);
      }
    });

    //删除列
    this.$on("remove.column", prop => {
      let exsitIndex = findColumn(this.columns, prop);
      if (exsitIndex == -1) {
        return;
      }
      this.columns.splice(exsitIndex, 1);
    });
  },
  methods: {
    updateTable() {
      this.$nextTick(() => {
        // todo
        const { rowKey, selectedObject, tableData } = this;
        this.disabledCount = 0;
        this.runtimeSelected = [];
        if (rowKey) {
          tableData.forEach(item => {
            if (item[CHECKBOX_NAME] || selectedObject[item[rowKey]]) {
              this.$set(item, CHECKBOX_NAME, true);
              this.runtimeSelected.push(item);
            } else {
              this.$set(item, CHECKBOX_NAME, false);
            }
            item[DISABLED_FIELD] && this.disabledCount++;
          });
        }
        this.checkboxAllVal =
          this.selectedCount + this.disabledCount >= tableData.length;
      });
    },

    inputSearch(val) {
      if (this.realtimeSearch) {
        this.searchValue = val;
        this.goSearch();
      }
    },
    changeSearch() {
      if (!this.realtimeSearch) {
        this.goSearch();
      }
    },
    //表头操作项
    getCheckOperateData(data) {
      this.$emit("getCheckOperateData", data);
    },
    //搜索
    goSearch() {
      this.sortProp = "";
      // if (this.searchValue != "") {
      let searchField = [];
      this.searchSupportArr.forEach(item => {
        searchField.push(item.prop);
      });
      this.$emit("search", this.searchValue, searchField);
      // }
      // this.checkboxAllVal = CHECKBOX_UNCHECKED;
      this.changeCheckboxAll(false);
      // this.updateTable(true);
    },
    filterSearch(data) {
      let text = "" + data,
        searchText = this.searchValue;
      let replaceStr = text ? text.match(new RegExp(searchText, "ig")) : null;
      if (searchText === "" || replaceStr == null) {
        return escapeHTML(text);
      }
      text = escapeHTML(text);
      searchText = escapeHTML(searchText);

      text = text.replaceAll(
        replaceStr[0],
        "<span style='color:#0058e4'>" + replaceStr[0] + "</span>"
      );
      return text;
    },

    //排序
    sortTable(prop, sortType) {
      this.sortProp = prop;
      this.$emit("sort", prop, sortType);
    },

    //全选
    changeCheckboxAll(val) {
      this.checkboxAllVal = val;
      this.runtimeSelected = [];
      this.tableData.forEach(item => {
        if (!item[DISABLED_FIELD]) {
          item[CHECKBOX_NAME] = val;
          val && this.runtimeSelected.push(item);
        }
      });
      this.$emit("selection-change", this.getSelected());
    },
    //单选
    clickCheckbox(rowData) {
      this.$nextTick(() => {
        if (rowData[CHECKBOX_NAME]) {
          this.runtimeSelected.push(rowData);
        } else {
          let index = this.runtimeSelected.indexOf(rowData);
          index > -1 && this.runtimeSelected.splice(index, 1);
        }
        this.checkboxAllVal =
          this.selectedCount + this.disabledCount >= this.tableData.length;
        this.$emit("selection-change", this.getSelected());
      });
    },
    //展开
    expandTable(rowData) {
      this.$set(rowData, EXPAND_NAME, !rowData[EXPAND_NAME]);
    },

    //点击列
    clickRow(rowData) {
      this.$emit("clickRow", rowData);
    },
    //获取选中的数据
    getSelected() {
      return copyDeepData(this.runtimeSelected);
    },
    //获取当前页的数据，给外部使用
    getCurrentPageData() {
      return this.tableData;
    },
    //切换页
    changePage(page) {
      this.$emit("selection-change", []);
      this.$emit("change-page", page);
    },
    //切换每页数
    changeSize(pageSize) {
      this.$emit("change-size", pageSize);
    }
  },

  watch: {
    data: {
      handler(data) {
        this.sortProp &&
          this.columns.forEach(element => {
            let load = element.prop == this.sortProp ? false : true;
            this.$set(element, "load", load);
          });
        this.tableData = copyDeepData(data);
        this.updateTable();
      },
      immediate: true
    }
  }
};
</script>
