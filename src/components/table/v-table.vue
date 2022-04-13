<template>
  <div class="v-table" :class="[sizeCss, { disabled: disabled }]">
    <!-- 搜索 -->
    <div class="v-table__search" v-if="search">
      <v-input
        v-model="searchValue"
        :placeholder="searchPlaceholder"
        suffix-icon="v-icon-search"
        @change="goSearch"
      ></v-input>
    </div>
    <!-- 表头 -->
    <div class="v-table__header-wrap" ref="header">
      <table-header
        :columns="columns"
        :border="border"
        :sortProp="sortProp"
        :value="checkboxAllVal"
        :is-selected="hasCheckBoxSelect"
        :before-select-all="beforeSelectAll"
        :is-select-all-disabled="isSelectAllDisabled || pageData.length === 0"
        @change="changeCheckboxAll"
        @sort="sortTable"
      ></table-header>
      <div
        v-if="leftFixedWidth > 0"
        class="table--fixed table--left"
        :style="{ width: `${leftFixedWidth}px` }"
      >
        <table-header
          :columns="columns"
          :border="border"
          :sortProp="sortProp"
          :value="checkboxAllVal"
          :is-selected="hasCheckBoxSelect"
          :before-select-all="beforeSelectAll"
          :is-select-all-disabled="isSelectAllDisabled || pageData.length === 0"
          @change="changeCheckboxAll"
          @sort="sortTable"
          :style="{ width: `${tableWidth}px` }"
        ></table-header>
      </div>

      <div
        v-if="rightFixedWidth > 0"
        class="table--fixed table--right"
        :style="{ width: `${rightFixedWidth}px` }"
      >
        <table-header
          :columns="columns"
          :border="border"
          :sortProp="sortProp"
          :value="checkboxAllVal"
          :is-selected="hasCheckBoxSelect"
          :before-select-all="beforeSelectAll"
          :is-select-all-disabled="isSelectAllDisabled || pageData.length === 0"
          @change="changeCheckboxAll"
          @sort="sortTable"
          :style="{ width: `${tableWidth}px` }"
        ></table-header>
      </div>
    </div>
    <!-- 表格内容 -->
    <div
      ref="table-body"
      class="v-table__body"
      :class="{ 'v-table__border': border }"
    >
      <v-scroll
        ref="scroll"
        @scroll="scroll"
        overflow="auto"
        class="v-table__scroll"
        active
        @mouseleave.native="hoverIndex = -1"
      >
        <table ref="table" class="table" :class="{ 'v-table__stripe': stripe }">
          <colgroup>
            <col
              v-for="(col, index) in columns"
              :width="col.width"
              :key="index + 1"
            />
          </colgroup>
          <tbody>
            <slot name="header"></slot>
            <!-- 列表数据信息 -->
            <template v-for="(rowData, rowIndex) in pageData">
              <!-- 数据行信息 -->
              <tr
                ref="table-body-tr"
                class="v-table__row"
                :class="{
                  'v-table__row--active':
                    getActive(rowData) || rowData[checkboxField],
                  'v-table__row--hover': hoverIndex === rowIndex
                }"
                @click="clickRow(rowData)"
                @mouseenter="hoverIndex = rowIndex"
                :key="rowIndex + 1"
              >
                <template v-for="(col, index) in columns">
                  <v-td
                    :column="col"
                    :key="index + 1"
                    :index="index"
                    :checkbox-field="checkboxField"
                    :expand-field="expandField"
                    :row-data="rowData"
                    :row-index="rowIndex"
                    :filter-search="filterSearch.bind(this)"
                    :click-checkbox="clickCheckbox.bind(this)"
                    :expand-table="expandTable.bind(this)"
                    :before-change="col.beforeSelected.bind(this, rowData)"
                    ref="checktd"
                  ></v-td>
                </template>
              </tr>
              <!-- expand展开信息 -->
              <tr
                class="v-table__row"
                :key="rowIndex + 1 + expandField"
                v-if="expandFunc && rowData[expandField]"
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
          </tbody>
          <!-- 默认slot -->
          <slot></slot>
        </table>

        <template v-slot:content>
          <div
            v-if="leftFixedWidth > 0"
            ref="tableLeft"
            class="table--fixed table--left"
            :style="{ width: `${leftFixedWidth}px` }"
          >
            <table
              class="table"
              :class="{ 'v-table__stripe': stripe }"
              :style="{ width: `${tableWidth}px` }"
            >
              <colgroup>
                <col
                  v-for="(col, index) in columns"
                  :width="col.width"
                  :key="index + 1"
                />
              </colgroup>
              <tbody>
                <template v-for="(rowData, rowIndex) in pageData">
                  <!-- 数据行信息 -->
                  <tr
                    ref="table-body-tr"
                    class="v-table__row"
                    :class="{
                      'v-table__row--active':
                        getActive(rowData) || rowData[checkboxField],
                      'v-table__row--hover': hoverIndex === rowIndex
                    }"
                    @click="clickRow(rowData)"
                    @mouseenter="hoverIndex = rowIndex"
                    :key="rowIndex + 1"
                  >
                    <template v-for="(col, index) in columns">
                      <v-td
                        :column="col"
                        :key="index + 1"
                        :index="index"
                        :checkbox-field="checkboxField"
                        :expand-field="expandField"
                        :row-data="rowData"
                        :row-index="rowIndex"
                        :filter-search="filterSearch.bind(this)"
                        :click-checkbox="clickCheckbox.bind(this)"
                        :expand-table="expandTable.bind(this)"
                        :before-change="col.beforeSelected.bind(this, rowData)"
                        ref="checktd"
                      ></v-td>
                    </template>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
          <div
            v-if="rightFixedWidth > 0"
            ref="tableRight"
            class="table--fixed table--right"
            :style="{ width: `${rightFixedWidth}px` }"
          >
            <table
              class="table"
              :class="{ 'v-table__stripe': stripe }"
              :style="{ width: `${tableWidth}px` }"
            >
              <colgroup>
                <col
                  v-for="(col, index) in columns"
                  :width="col.width"
                  :key="index + 1"
                />
              </colgroup>
              <tbody>
                <template v-for="(rowData, rowIndex) in pageData">
                  <!-- 数据行信息 -->
                  <tr
                    ref="table-body-tr"
                    class="v-table__row"
                    :class="{
                      'v-table__row--active':
                        getActive(rowData) || rowData[checkboxField],
                      'v-table__row--hover': hoverIndex === rowIndex
                    }"
                    @click="clickRow(rowData)"
                    @mouseenter="hoverIndex = rowIndex"
                    :key="rowIndex + 1"
                  >
                    <template v-for="(col, index) in columns">
                      <v-td
                        :column="col"
                        :key="index + 1"
                        :index="index"
                        :checkbox-field="checkboxField"
                        :expand-field="expandField"
                        :row-data="rowData"
                        :row-index="rowIndex"
                        :filter-search="filterSearch.bind(this)"
                        :click-checkbox="clickCheckbox.bind(this)"
                        :expand-table="expandTable.bind(this)"
                        :before-change="col.beforeSelected.bind(this, rowData)"
                        ref="checktd"
                      ></v-td>
                    </template>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </template>
      </v-scroll>
    </div>
    <!-- </v-scroll> -->
    <!-- 分页信息 -->
    <table-footer
      v-if="isPagination && tableData.length > 0"
      :page="page"
      :total="tableData.length"
      :border="showPageBorder"
      :pageSize="pageSizeValue"
      :isChangeSize="isChangeSize"
      :isInputPage="isInputPage && totalPage > 1"
      :pageSizeOptions="pageSizeOptions"
      @change-page="changePage"
      @change-size="changeSize"
    >
    </table-footer>

    <div v-if="$slots.loading" v-show="isLoading">
      <slot name="loading"></slot>
    </div>
    <v-loading class="v-table__loading" v-else :visible="isLoading">
      {{ loadingText }}
    </v-loading>
  </div>
</template>

<script>
// import VTd from "./v-td.vue";
import VTd from "./table-td.vue";
import CollapseTransition from "../collapse/collapse-transition.js";
import TableExpand from "./table-tb-fn.vue";
import TableHeader from "./table-header.vue";
import TableFooter from "./table-footer.vue";
import {
  copyDeepData,
  sortByKey,
  escapeHTML,
  isUndefinedOrNull,
  // throttle,
  on,
  off
} from "../libs";
import { size } from "../filters";
//判断是否存在
let fileterField = (searchV, content) => {
  try {
    if (content.indexOf(searchV) != -1) {
      return true;
    }
  } catch (e) {
    console.log("");
  }

  return false;
};

/**
 * 表格过滤
 *
 * @param {Array} tableData 当前表格数据
 * @param {string} filterStr 查找字符串
 * @param {[string]} field   查找类型
 *
 * @return {[type]} [description]
 */
let filterTable = (tableData, filterStr, field, columns) => {
  let newTable = [];
  let formatObj = {};
  columns.forEach(item => {
    formatObj[item.prop] = item.format;
  });
  if (field.length > 0) {
    tableData.forEach(item => {
      for (let prop in item) {
        if (field.indexOf(prop) != -1) {
          if (fileterField(filterStr, formatObj[prop](prop, item))) {
            newTable.push(item);
            break;
          }
        }
      }
    });
  }

  return copyDeepData(newTable);
};

const CHECKBOX_UNCHECKED = false; //选项未选中值
const CHECKBOX_CHECKED = true; //选项选中值
const CHECKBOX_NAME = "$checked"; //选择的属性
const EXPAND_NAME = "$expand"; //展开属性

//支持事件 updateCallBack  参数为当前表格的数据，原始的表格数据被复制成表格数据，
//导致中间双向绑定断层，页面需要获取表格数据时，需执行此事件

export default {
  name: "v-table",
  components: {
    VTd,
    TableHeader,
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
      default: false
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
      return Math.ceil(this.tableData.length / this.pageSizeValue);
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
      let isSelect = this.pageData.some(item => {
        return item[this.checkboxField] === CHECKBOX_CHECKED;
      });
      return this.checkboxAllVal === CHECKBOX_UNCHECKED && isSelect;
    }
  },
  data() {
    this.lastScrollTop = 0;
    this.lastScrollLeft = 0;
    return {
      columns: [], //表头信息
      leftFixedWidth: 0, // 固定在左侧列宽
      rightFixedWidth: 0, // 固定在右侧列宽
      hoverIndex: -1, // 鼠标悬浮的行索引
      tableWidth: 0, //表格宽度
      checkboxField: CHECKBOX_NAME,
      expandField: EXPAND_NAME,
      tableData: [], //表格数据
      checkboxAllVal: CHECKBOX_UNCHECKED, //全选
      searchValue: "", //搜索框值
      searchText: "", //搜索时的文字
      page: 1, //当前页
      pageData: [], //当前页数据
      searchSupportArr: [], //支持search字段
      expandFunc: false, //展开事件
      sortProp: "", //当前排序元素
      pageSizeValue: 10, //每页条数
      currentSelectData: [] //当前的选中项
    };
  },
  created() {
    this.columns = [];
    this.searchSupportArr = [];
    this.leftFixedWidth = 0;
    this.leftFixedCount = 0;
    this.rightFixedWidth = 0;

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
      if (item.fixed === true || item.fixed === "") {
        item.fixed = "left";
      }

      if (item.width) {
        item.width = size(item.width);
      } else if (item.type === "selection") {
        item.width = 48;
      } else if (item.fixed) {
        item.width = 100;
      }

      if (item.fixed === "left") {
        this.columns.splice(this.leftFixedCount++, 0, item);
        this.leftFixedWidth += parseInt(item.width);
      } else if (item.fixed === "right") {
        this.rightFixedWidth += parseInt(item.width);
        this.columns.push(item);
      } else {
        this.columns.push(item);
      }
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
    this.$on("update.column", item => {
      let exsitIndex = findColumn(this.columns, item.prop);
      if (exsitIndex == -1) {
        return;
      }
      //替换
      this.columns.splice(exsitIndex, 1, item);
    });

    //删除列
    this.$on("remove.column", prop => {
      let exsitIndex = findColumn(this.columns, prop);
      if (exsitIndex == -1) {
        return;
      }
      this.columns.splice(exsitIndex, 1);
    });

    on(window, "resize", this.updateBodyWidth);
  },
  methods: {
    getActive(rowData) {
      if (this.currentSelectData.length < 1 || !this.rowKey) {
        return false;
      }
      return this.currentSelectData.some(item => {
        if (item[this.rowKey] === rowData[this.rowKey]) {
          if (isUndefinedOrNull(rowData[this.checkboxField])) {
            this.$set(rowData, this.checkboxField, true);
          } else {
            return false;
          }
          return true;
        }
        return false;
      });
    },
    updateTable(isChanged) {
      this.pageData = this.getPageData();

      this.$nextTick(() => {
        this.updateScrollHeight(isChanged);
        this.$emit("after-update", this.pageData);
        // 更新表头选中的值
        // 是否有未选中的
        const hasNoSelect = this.pageData.some(item => {
          return item[this.checkboxField] !== CHECKBOX_CHECKED;
        });
        if (hasNoSelect || this.pageData.length == 0) {
          this.checkboxAllVal = CHECKBOX_UNCHECKED;
        } else {
          this.checkboxAllVal = CHECKBOX_CHECKED;
        }
      });
    },
    updateScrollHeight(isChanged) {
      let maxRow = this.maxRow,
        height = 0;
      if (maxRow <= 0) {
        maxRow = Number.MAX_SAFE_INTEGER;
      }

      if (maxRow < this.pageData.length) {
        let trRefs = this.$refs["table-body-tr"],
          trArr = Array.isArray(trRefs) ? trRefs : [trRefs];

        for (let i = 0; i < maxRow; i++) {
          if (trArr[i]) {
            height += trArr[i].offsetHeight;
          }
        }
      } else {
        height = "auto";
      }

      this.$refs.scroll.setSize(height, "", isChanged);
    },
    updateBodyWidth() {
      this.tableWidth = parseInt(this.$refs.table.scrollWidth);
      // this.$refs.scroll.update();
    },

    //搜索
    goSearch() {
      this.sortProp = "";
      this.searchText = this.searchValue;
      if (this.searchValue == "") {
        this.tableData = copyDeepData(this.data);
      } else {
        let searchField = [];
        this.searchSupportArr.forEach(item => {
          searchField.push(item.prop);
        });
        this.tableData = filterTable(
          this.data,
          this.searchValue,
          searchField,
          this.columns
        );
      }
      this.page = 1;
      this.checkboxAllVal = CHECKBOX_UNCHECKED;
      this.updateTable(true);
    },
    filterSearch(data) {
      let text = data,
        searchText = this.searchText;
      if (searchText === "" || text.indexOf(searchText) === -1) {
        return escapeHTML(text);
      }
      text = escapeHTML(text);
      searchText = escapeHTML(searchText);
      text = text.replaceAll(
        searchText,
        "<span class='is-active'>" + searchText + "</span>"
      );
      return text;
    },
    //排序
    sortTable(prop, sortType) {
      this.sortProp = prop;
      this.tableData.sort((a, b) => {
        return sortByKey(a, b, prop, { [prop]: sortType });
      });
      this.updateTable(true);
    },

    //全选
    changeCheckboxAll(val) {
      this.checkboxAllVal = val;
      this.pageData.forEach((item, index) => {
        // if (!this.$refs.checktd[index].selection.disabled) {
        //   this.$set(item, this.checkboxField, val);
        // }
        if (!this.$refs.checktd[index].disabled) {
          this.$set(item, this.checkboxField, val);
        }
      });
      // 更新
      this.updateCurrentSelectData();
    },
    //单选
    clickCheckbox() {
      if (this.checkboxAllVal == CHECKBOX_UNCHECKED) {
        //未选中时，如果全部都选中，则选中
        let result = this.pageData.every(item => {
          return item[this.checkboxField] == CHECKBOX_CHECKED;
        });
        if (result) {
          this.checkboxAllVal = CHECKBOX_CHECKED;
        }
      } else {
        //选中时，如果存在未选中的，则取消选中
        let result = this.pageData.some(item => {
          return item[this.checkboxField] == CHECKBOX_UNCHECKED;
        });
        if (result) {
          this.checkboxAllVal = CHECKBOX_UNCHECKED;
        }
      }
      // 更新
      this.updateCurrentSelectData();
    },
    updateCurrentSelectData() {
      this.currentSelectData = this.getSelected();
      this.$emit("selection-change", this.currentSelectData);
    },
    //展开
    expandTable(rowData, index) {
      this.$set(rowData, this.expandField, !rowData[this.expandField]);

      //滚动条跳转到对应的行
      this.$nextTick(() => {
        this.$refs.scroll.update();
        this.$refs.scroll.scrollToNode(this.$refs["table-body-tr"][index]);
      });
    },

    //点击列
    clickRow(rowData) {
      this.$emit("clickRow", rowData);
    },
    //获取选中的数据
    getSelected() {
      let result = this.pageData.filter(item => {
        return item[this.checkboxField] == CHECKBOX_CHECKED;
      });
      let selectArr = copyDeepData(result);
      selectArr.forEach(item => {
        delete item[this.checkboxField];
      });
      return selectArr;
    },
    //获取当前页的数据，给外部使用
    getCurrentPageData() {
      return this.pageData;
    },

    //获取当前页的数据
    getPageData() {
      //是否分页
      let pageData = [];
      if (this.isPagination) {
        pageData = this.tableData.slice(
          (this.page - 1) * this.pageSizeValue,
          this.page * this.pageSizeValue
        );
      } else {
        pageData = this.tableData;
      }
      return copyDeepData(pageData);
    },
    //切换页
    changePage(page) {
      this.page = page;
      this.updateTable(true);
    },
    //切换每页数
    changeSize(pageSize) {
      this.pageSizeValue = pageSize;
      this.updateTable(true);
    },
    scroll() {
      let left = this.$refs.scroll.view.scrollLeft;
      if (this.lastScrollLeft !== left) {
        this.$refs.header.scrollLeft = left;
        this.lastScrollLeft = left;
      }
      let top = this.$refs.scroll.view.scrollTop;
      if (this.lastScrollTop !== top) {
        this.$refs.tableLeft && (this.$refs.tableLeft.style.top = `-${top}px`);
        this.$refs.tableRight &&
          (this.$refs.tableRight.style.top = `-${top}px`);
        this.lastScrollTop = top;
      }
    }
  },
  destroyed() {
    off(window, "resize", this.updateBodyWidth);
  },

  watch: {
    pageSize: {
      handler(val) {
        this.pageSizeValue = val;
      },
      immediate: true
    },
    data: {
      handler(val) {
        this.tableData = copyDeepData(val || []);
        if (this.page > 1) {
          if (this.tableData.length === 0) {
            this.page = 1;
          } else if (
            this.tableData.length <=
            (this.page - 1) * this.pageSizeValue
          ) {
            this.page = Math.ceil(this.tableData.length / this.pageSizeValue);
          }
        }
        this.updateTable();
        this.$nextTick(() => {
          this.updateCurrentSelectData();
        });
      },
      immediate: true
    },
    columns: {
      handler() {
        // 重新汇总columns数据
        this.$nextTick(() => {
          this.updateBodyWidth();
        });
      },
      immediate: true
    },
    selectData: {
      handler(val) {
        this.currentSelectData = copyDeepData(val || []);
      },
      immediate: true
    }
  }
};
</script>
