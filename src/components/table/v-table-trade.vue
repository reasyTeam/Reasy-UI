<template>
  <div class="v-table v-table-trade" :class="[sizeCss, { disabled: disabled }]">
    <!-- 搜索 -->
    <div class="v-table__search">
      <div v-if="isAdd" class="button" @click="btnClick('add')">
        <v-button size="S">新增</v-button>
      </div>
      <div v-if="isEdit" class="button" @click="btnClick('edit')">
        <v-button size="S">编辑</v-button>
      </div>
      <div v-if="isDelete" class="button" @click="btnClick('delete')">
        <v-button size="S">删除</v-button>
      </div>
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

    <!-- 表头 -->
    <div class="v-table__header-wrap" ref="header">
      <table-header-trade
        :columns="columns"
        :border="border"
        :sortProp="sortProp"
        :value="checkboxAllVal"
        :is-selected="hasCheckBoxSelect"
        :before-select-all="beforeSelectAll"
        :is-select-all-disabled="isSelectAllDisabled || data.length === 0"
        @change="changeCheckboxAll"
        @sort="sortTable"
        :head-operate="headOperate"
      ></table-header-trade>
      <div
        v-if="leftFixedWidth > 0"
        class="table--fixed table--left"
        :style="{ width: `${leftFixedWidth}px` }"
      >
        <table-header-trade
          :head-operate="headOperate"
          :columns="columns"
          :border="border"
          :sortProp="sortProp"
          :value="checkboxAllVal"
          :is-selected="hasCheckBoxSelect"
          :before-select-all="beforeSelectAll"
          :is-select-all-disabled="isSelectAllDisabled || data.length === 0"
          @change="changeCheckboxAll"
          @sort="sortTable"
          :style="{ width: `${tableWidth}px` }"
        ></table-header-trade>
      </div>

      <div
        v-if="rightFixedWidth > 0"
        class="table--fixed table--right"
        :style="{ width: `${rightFixedWidth}px` }"
      >
        <table-header-trade
          :head-operate="headOperate"
          :columns="columns"
          :border="border"
          :sortProp="sortProp"
          :value="checkboxAllVal"
          :is-selected="hasCheckBoxSelect"
          :before-select-all="beforeSelectAll"
          :is-select-all-disabled="isSelectAllDisabled || data.length === 0"
          @change="changeCheckboxAll"
          @sort="sortTable"
          :style="{ width: `${tableWidth}px` }"
        ></table-header-trade>
      </div>
    </div>
    <div class="v-table__content">
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
          <table
            ref="table"
            class="table"
            :class="{ 'v-table__stripe': stripe }"
          >
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
              <template v-for="(rowData, rowIndex) in data">
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
                      :emptyValue="emptyValue"
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
              <tr v-show="data.length === 0 && !isLoading">
                <td :colspan="columns.length">
                  <slot name="empty">
                    <div class="v-table__empty-data">
                      {{ emptyText }}
                    </div>
                  </slot>
                </td>
              </tr>
              <!-- 默认表格loading要多加一空行 -->
              <tr v-if="data.length === 0 && isLoading && !$slots.loading">
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
                  <template v-for="(rowData, rowIndex) in data">
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
                          :before-change="
                            col.beforeSelected.bind(this, rowData)
                          "
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
                  <template v-for="(rowData, rowIndex) in data">
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
                          :before-change="
                            col.beforeSelected.bind(this, rowData)
                          "
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

    <v-dialog
      no-id
      :name="name | id('add')"
      v-model="addDialogShow"
      :title="addConfig.title || '新增'"
      :modal="true"
      @confirm="confirm('add')"
      @cancel="cancel('add')"
      append-to-body
    ></v-dialog>
    <v-dialog
      no-id
      :name="name | id('edit')"
      v-model="editDialogShow"
      :title="editConfig.title || '编辑'"
      :modal="true"
      @confirm="confirm('edit')"
      @cancel="cancel('edit')"
      append-to-body
    ></v-dialog>
    <v-dialog
      no-id
      :name="name | id('del')"
      v-model="deleteDialogShow"
      :title="deleteConfig.title || '删除'"
      :modal="true"
      @confirm="confirm('delete')"
      @cancel="cancel('delete')"
      append-to-body
    ></v-dialog>
  </div>
</template>

<script>
// import VTd from "./v-td.vue";
import VTd from "./table-td-trade.vue";
import CollapseTransition from "../collapse/collapse-transition.js";
import TableExpand from "./table-tb-fn.vue";
import TableHeaderTrade from "./table-header-trade.vue";
import TableFooter from "./table-footer.vue";
import VDialog from "../dialog/v-dialog.vue";
import NameMixin from "../name-mixins";
import {
  copyDeepData,
  escapeHTML,
  isUndefinedOrNull,
  // throttle,
  on,
  off
} from "../libs";
import { size } from "../filters";
const CHECKBOX_UNCHECKED = false; //选项未选中值
const CHECKBOX_CHECKED = true; //选项选中值
const CHECKBOX_NAME = "$checked"; //选择的属性
const EXPAND_NAME = "$expand"; //展开属性

export default {
  name: "v-table",
  mixins: [NameMixin],
  components: {
    VTd,
    TableHeaderTrade,
    TableExpand,
    TableFooter,
    CollapseTransition,
    VDialog
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
    //是否有新增按钮
    isAdd: {
      type: Boolean,
      default: false
    },
    addConfig: {
      type: Object,
      default() {
        return {};
      }
    },
    beforeAddClick: {
      type: Function,
      default() {
        return true;
      }
    },
    //是否有编辑按钮
    isEdit: {
      type: Boolean,
      default: false
    },
    editConfig: {
      type: Object,
      default() {
        return {};
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
      let isSelect = this.data.some(item => {
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
      // tableData: [], //表格数据
      checkboxAllVal: CHECKBOX_UNCHECKED, //全选
      searchValue: "", //搜索框值
      searchText: "", //搜索时的文字
      // page: 1, //当前页
      // pageData: [], //当前页数据
      searchSupportArr: [], //支持search字段
      expandFunc: false, //展开事件
      sortProp: "", //当前排序元素
      addDialogShow: false, //是否显示新增弹窗
      editDialogShow: false, //是否显示编辑弹窗
      deleteDialogShow: false //是否显示删除弹窗
      // pageSizeValue: 10 //每页条数
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

    on(window, "resize", this.updateBodyWidth);
  },
  methods: {
    getActive(rowData) {
      if (this.selectData.length < 1 || !this.rowKey) {
        return false;
      }
      return this.selectData.some(item => {
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
      // this.checkboxAllVal = CHECKBOX_UNCHECKED;
      // this.pageData = this.getPageData();

      this.$nextTick(() => {
        this.updateScrollHeight(isChanged);
        // this.$emit("after-update", this.pageData);
      });
    },
    updateScrollHeight(isChanged) {
      let maxRow = this.maxRow,
        height = 0;
      if (maxRow <= 0) {
        maxRow = Number.MAX_SAFE_INTEGER;
      }

      if (maxRow < this.data.length) {
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
      this.checkboxAllVal = CHECKBOX_UNCHECKED;
      this.updateTable(true);
    },
    filterSearch(data) {
      let text = data,
        searchText = this.searchValue;
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
      // this.data.sort((a, b) => {
      //   return sortByKey(a, b, prop, { [prop]: sortType });
      // });
      this.$emit("sort", prop, sortType);
      // this.updateTable(true);
    },

    //全选
    changeCheckboxAll(val) {
      this.checkboxAllVal = val;
      this.data.forEach((item, index) => {
        // if (!this.$refs.checktd[index].selection.disabled) {
        //   this.$set(item, this.checkboxField, val);
        // }
        if (!this.$refs.checktd[index].disabled) {
          this.$set(item, this.checkboxField, val);
        }
      });
      this.$emit("selection-change", this.getSelected());
    },
    //单选
    clickCheckbox() {
      if (this.checkboxAllVal == CHECKBOX_UNCHECKED) {
        //未选中时，如果全部都选中，则选中
        let result = this.data.every(item => {
          return item[this.checkboxField] == CHECKBOX_CHECKED;
        });
        if (result) {
          this.checkboxAllVal = CHECKBOX_CHECKED;
        }
      } else {
        //选中时，如果存在未选中的，则取消选中
        let result = this.data.some(item => {
          return item[this.checkboxField] == CHECKBOX_UNCHECKED;
        });
        if (result) {
          this.checkboxAllVal = CHECKBOX_UNCHECKED;
        }
      }
      this.$emit("selection-change", this.getSelected());
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
      let result = this.data.filter(item => {
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
      return this.data;
    },
    //切换页
    changePage(page) {
      // this.page = page;
      this.$emit("change-page", page);
      // this.updateTable(true);
    },
    //切换每页数
    changeSize(pageSize) {
      // this.pageSizeValue = pageSize;
      this.$emit("change-size", pageSize);
      // this.updateTable(true);
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
    },
    btnClick(type) {
      if (type == "add") {
        if (this.beforeAddClick) {
          this.addDialogShow = true;
        }
      } else if (type == "edit") {
        if (this.beforeEditClick) {
          this.editDialogShow = true;
        }
      } else {
        if (this.beforeDeleteClick) {
          this.deleteDialogShow = true;
        }
      }
    },
    confirm(type) {
      if (type == "add") {
        this.addDialogShow = false;
      } else if (type == "edit") {
        this.editDialogShow = false;
      } else {
        this.deleteDialogShow = false;
      }
    },
    cancel(type) {
      if (type == "add") {
        this.addDialogShow = false;
      } else if (type == "edit") {
        this.editDialogShow = false;
      } else {
        this.deleteDialogShow = false;
      }
    }
  },
  destroyed() {
    off(window, "resize", this.updateBodyWidth);
  },

  watch: {
    data: {
      handler() {
        this.sortProp &&
          this.columns.forEach(element => {
            let load = element.prop == this.sortProp ? false : true;
            this.$set(element, "load", load);
          });
        this.updateTable();
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
    }
  }
};
</script>
