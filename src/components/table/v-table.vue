<template>
  <div class="v-table">
    <div class="v-table__search" v-if="search">
      <v-input
        v-model="searchValue"
        :placeholder="searchPlaceholder"
        suffix-icon="v-icon-search"
        @change="goSearch"
      ></v-input>
    </div>
    <table-header
      :columns="columns"
      :border="border"
      :sortProp="sortProp"
      :value="checkboxAllVal"
      :hasValue="hasCheckBoxSelect"
      @change="changeCheckboxAll"
      @sort="sortTable"
    ></table-header>
    <div
      ref="table-body"
      class="v-table__body"
      :class="{ 'v-table__border': border }"
    >
      <v-scroll ref="scroll">
        <table
          class="table table--fixed"
          :class="{ 'v-table__stripe': stripe }"
        >
          <tbody>
            <slot name="header"></slot>
            <template v-for="(rowsData, rowIndex) in pageData">
              <tr
                class="v-table__row"
                ref="table-body-tr"
                @click="clickRow(rowsData)"
                :key="rowIndex + 1"
              >
                <template v-for="(col, index) in columns">
                  <td
                    :style="{ width: col.width }"
                    :class="[
                      col.css,
                      { 'v-table__expand': col.type === 'expand' }
                    ]"
                    :key="index + 1"
                  >
                    <template v-if="col.type === 'index'">
                      {{ rowIndex + 1 }}
                    </template>
                    <v-checkbox
                      ref="selection"
                      v-if="col.type === 'selection'"
                      v-model="rowsData[checkboxField]"
                      :disabled="col.getDisabled(rowsData)"
                      @change="clickCheckbox"
                    ></v-checkbox>
                    <span
                      v-if="col.type === 'expand'"
                      class="pointer v-table__expand__icon"
                      :class="
                        rowsData[expandField]
                          ? 'v-icon-minus-square'
                          : 'v-icon-add-square'
                      "
                      @click="expandTable(rowsData, rowIndex)"
                    ></span>
                    <div
                      class="fixed"
                      :class="{
                        'v-table__expand__wrapper': col.type === 'expand'
                      }"
                    >
                      <v-td
                        :rowsData="rowsData"
                        v-if="col.fn"
                        :fn="col.fn"
                        :index="rowIndex"
                      >
                      </v-td>
                      <!-- <span
                      v-if="col.tooltip"
                      v-tooltip="rowsData[col.prop]"
                      >{{ rowsData[col.prop] }}</span
                    > -->
                      <span
                        v-else-if="col.isSearch"
                        v-html="filterSearch(col.format(col.prop, rowsData))"
                      ></span>
                      <span v-else>{{ col.format(col.prop, rowsData) }}</span>
                    </div>
                  </td>
                </template>
              </tr>

              <tr
                class="v-table__row"
                :key="rowIndex + 1 + expandField"
                v-if="expandFunc && rowsData[expandField]"
              >
                <td :colspan="columns.length" class="v-table__expand--inner">
                  <collapse-transition>
                    <table-expand
                      class="v-table__expand__wrapper"
                      :rowsData="rowsData"
                      :index="rowIndex"
                      :expandFn="expandFunc"
                    ></table-expand>
                  </collapse-transition>
                </td>
              </tr>
            </template>

            <tr ref="table-body-tr" v-if="tableData.length === 0 && !isLoading">
              <td :colspan="columns.length">
                <div class="v-table__empty-data">{{ emptyText }}</div>
              </td>
            </tr>
          </tbody>
          <slot></slot>
        </table>
      </v-scroll>
    </div>
    <table-footer
      v-if="isPagination && tableData.length > 0"
      :page="page"
      :total="tableData.length"
      :pageSize="pageSizeValue"
      :isChangeSize="isChangeSize"
      :isInputPage="isInputPage && totalPage > 1"
      :pageSizeOptions="pageSizeOptions"
      @change-page="changePage"
      @change-size="changeSize"
    ></table-footer>
    <v-loading :visible="isLoading">{{ loadingText }}</v-loading>
  </div>
</template>
<script>
import VTd from "./v-td.vue";
import CollapseTransition from "../collapse/collapse-transition.js";
import TableExpand from "./table-expand.vue";
import TableHeader from "./table-header.vue";
import TableFooter from "./table-footer.vue";
import { copyDeepData, sortByKey, escapeHTML } from "../libs";
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
    showHeader: {
      type: Boolean,
      default: true
    },
    rowKey: String,
    maxRow: {
      type: Number,
      default: 10
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
      default: "无数据"
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
    }
  },
  computed: {
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
    return {
      columns: [], //表头信息
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
      pageSizeValue: 10 //每页条数
    };
  },

  created() {
    this.columns = [];
    this.searchSupportArr = [];

    //添加表格列信息
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

      this.columns.push(item);
    });

    //更新表格列信息
    this.$on("update.column", item => {
      let exsitIndex = -1;
      let exsitCol = this.columns.filter((colItem, index) => {
        if (item.prop == colItem.prop) {
          exsitIndex = index;
          return true;
        }
      });
      if (exsitCol.length === 0) {
        return;
      }
      //替换
      this.columns.splice(exsitIndex, 1, item);
    });

    //删除列
    this.$on("remove.column", prop => {
      this.columns = this.columns.filter(item => item.prop != prop);
    });
  },
  methods: {
    updateTable() {
      this.pageData = this.getPageData();

      this.$nextTick(() => {
        let rowMinIndex = Math.min(this.maxRow, this.pageData.length) || 1,
          height = 0,
          trRefs = this.$refs["table-body-tr"],
          trArr = Array.isArray(trRefs) ? trRefs : [trRefs];
        for (let i = 0; i < rowMinIndex; i++) {
          if (trArr[i]) {
            height += trArr[i].offsetHeight;
          }
        }
        this.$refs.scroll.setSize(height, this.$refs["table-body"].offsetWidth);
        this.$emit("updateCallBack", this.pageData);
      });
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
      this.updateTable();
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
      this.updateTable();
    },

    //全选
    changeCheckboxAll(val) {
      this.checkboxAllVal = val;
      this.pageData.forEach((item, index) => {
        if (!this.$refs.selection[index].disabled) {
          this.$set(item, this.checkboxField, val);
        }
      });
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
      if (this.isPagination) {
        return this.tableData.slice(
          (this.page - 1) * this.pageSizeValue,
          this.page * this.pageSizeValue
        );
      }
      return this.tableData;
    },
    //切换页
    changePage(page) {
      this.page = page;
      this.updateTable();
    },
    //切换每页数
    changeSize(pageSize) {
      this.pageSizeValue = pageSize;
      this.updateTable();
    }
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
        this.updateTable();
      },
      immediate: true
    }
  }
};
</script>
