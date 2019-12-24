<template>
    <div class="form-group" v-show="tableOptions.show" :class="tableOptions.css">
        <div class="table-search" v-if="tableOptions.search">
            <input
                type="text"
                ref="search"
                :placeholder="searchText"
                class="text form-search-input"
                v-model="searchValue"
                @keyup.enter="goSearch()"
            >
            <div @click="focus()" class="placeholder-text" v-if="!supportPlaceholder && !searchValue">{{searchText}}</div>
            <span class="v-icon-search" @click="goSearch()"></span>
        </div>
        
        <table
            class="table table-fixed table-header"
            :style="{'padding-right': tableScroll ? '17px' : ''}"
        >
            <thead>
                <tr v-if="tableOptions.secondColumns.length > 0">
                    <th
                        :width="columns.width"
                        :colspan="columns.colspan"
                        :rowspan="columns.rowspan"
                        v-for="(columns) in tableOptions.secondColumns"
                        :key="columns.field"
                    >{{columns.title}}</th>
                </tr>
                <tr>
                    <th width="50px" v-if="tableOptions.selectBox">
                        <span class="select-box">
                            <v-checkbox :data-key="checkbox"></v-checkbox>
                        </span>
                    </th>
                    <th
                        :width="columns.width"
                        v-for="(columns) in tableOptions.columns"
                        :key="columns.field"
                        v-if="columns.title"
                    >
                        <span
                            :class="{'pointer': columns.sort}"
                            @click="sortTable(columns, columns.field)"
                        >
                            {{columns.title}}
                            <span
                                v-if="columns.sort"
                                :class="{'v-icon-unsort': sortType === '',
                                    'v-icon-sort-up': sortType === 'asc' && sortKey == columns.field,
                                    'v-icon-sort-down': sortType === 'desc' && sortKey == columns.field}"
                                class="th-sort"
                            ></span>
                        </span>
                    </th>
                </tr>
            </thead>
        </table>

        <div class="table-body" :style="{'height': bodyHeight != ''? (bodyHeight + 'px') : 'auto'}">
            <table class="table table-fixed" ref="table-body">
                <tbody>
                    <tr ref="table-body-tr" v-for="(rowsData, rowsIndex) in pageData" :key="rowsData[guidKey]">
                        <td class="select-box" style="width: 50px" v-if="tableOptions.selectBox">
                            <component
                                :is="'table-checkbox'"
                                @on-custom-comp="customCompFunc"
                                :rowData="rowsData"
                                :originData="findOriginData(rowsData[guidKey])"
                                field="selected"
                                :index="rowsIndex"
                                :style="{'width': '50px'}"
                            ></component>
                        </td>
                        <template v-for="(columns) in tableOptions.columns">
                            <td v-if="!columns.componentName" :style="{'width': columns.width}" class="fixed" :key="columns.field">
                                <span
                                    v-if="columns.parseHtml"
                                    v-html="rowsData[columns.field]"
                                    v-tooltip
                                    :class="columns.css"  
                                ></span>
                                <span
                                    v-else
                                    :key="rowsData[columns.field]"
                                    v-tooltip="rowsData[columns.field]"
                                    style="cursor: text"
                                    :class="columns.css"
                                >{{rowsData[columns.field]}}</span>
                            </td>
                            <!--自定义组件-->
                            <td
                                v-if="columns.componentName"
                                :class="columns.css"
                                class="fixed"
                                :style="{'width': columns.width}"
                                :key="columns.field"
                            >
                                <component
                                    :is="columns.componentName"
                                    :action="columns.action"
                                    @on-custom-comp="customCompFunc"
                                    :rowData="rowsData"
                                    :originData="findOriginData(rowsData[guidKey])"
                                    :field="columns.field"
                                    :keyword="guidKey"
                                    :index="rowsIndex"
                                    :style="{'width': columns.width}"
                                ></component>
                            </td>
                        </template>
                    </tr>
                    <tr v-if="pageData.length === 0 && isLoadData">
                        <td
                            :colspan="tableOptions.selectBox ? tableOptions.columns.length + 1 : tableOptions.columns.length"
                        >
                            <div class="table-no-data">{{noData}}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div
            class="table-footer clearfix"
            v-if="tableOptions.showPage && tableOptions.totalPage > 1"
        >
            <div class="footer-tips">
                <span>{{pageTips}}</span>
                <span class="page-tips">{{dataTips}}</span>
            </div>
            <div class="footer-page">
                <a class="table-btn" @click="gotoPage('prev')" :class="{'disabled': tableOptions.page === 0}">&lt;</a>
                <a
                    class="table-btn"
                    :class="{'active': footerBtn.value == tableOptions.page}"
                    v-for="footerBtn in footer"
                    :key="footerBtn.value"
                    @click="gotoPage(footerBtn.value)"
                >{{footerBtn.text}}</a>
                <a
                    class="table-btn"
                    @click="gotoPage('next')"
                    :class="{'disabled': tableOptions.page >= (tableOptions.totalPage-1)}"
                >&gt;</a>
            </div>
        </div>
    </div>
</template>

<script>
import tableCheckbox from "./table-checkbox.vue";
import { copyDeepData, sortByKey } from "../libs";
const PAGE_PREV_NUM = 2; //当前页前后显示页数
const MAX_PAGE_SHOW = 2 * PAGE_PREV_NUM + 1 + 2 + 2; // 前后页 + 本身页 + 2个省略 + 首尾两页

let defaults = {
    secondColumns: [],
    columns: [
        /*
        {
            title: "无线名称",
            field: "ssid",
            width: "40%",
            search: //是否支持搜索
            sort: true/false, //是否支持排序
            format:function() {return str},
            parseHtml: true/false, // 是否是html
            componentName: string //自定义组件
        }
     */
    ], //表头配置
    show: true,
    showPage: false, //分页
    maxTableRow: 10, //每页显示多少行，超过行则出现滚动条
    pagePer: 10, //每页多少数据
    totalPage: 1, //共几页
    page: 0, //当前页  从0开始
    key: "", //关键标志
    search: false,
    placeholder: "",
    originData: [],
    selectBox: false
};

//判断是否存在
let fileterField = (searchV, content) => {
    try {
        if (content.indexOf(searchV) != -1) {
            return true;
        }
    } catch (e) {}

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
let filterTable = (tableData, filterStr, field) => {
    let newTable = [];
    tableData.forEach(function(item) {
        for (let prop in item) {
            if (field.length > 0) {
                if (field.indexOf(prop) != -1) {
                    if (fileterField(filterStr, item[prop])) {
                        newTable.push(item);
                        break;
                    }
                }
            } else {
                if (fileterField(filterStr, item[prop])) {
                    newTable.push(item);
                    break;
                }
            }
        }
    });

    return newTable;
};

export default {
    name: "v-table",
    props: ["tableOptions", "callback"],
    components: {
        "table-checkbox": tableCheckbox
    },
    computed: {
        pageTips() {
            return _("第 %s / %s 页", [this.tableOptions.page + 1, this.tableOptions.totalPage]);
        },
        dataTips() {
            return _("共 %s 条数据", [this.tableData.length || 0]);
        },
        guidKey() {
            return this.tableOptions.key || "_GUID";
        },
        supportPlaceholder() {
            var i = document.createElement("input");
            return "placeholder" in i;
        }
    },
    created() {
        //数据合并
        this.tableOptions = this.setOptions(this.tableOptions, defaults);

        let _this = this,
            placeholderArr = [];
        this.tableOptions.columns.forEach(function(item) {
            if (typeof item.format == "function") {
                _this.formatOpt[item.field] = item.format;
            }
            if(item.search) {
                _this.searchItem.push(item.field);
                placeholderArr.push(item.title);
            }
        });
        if(this.tableOptions.placeholder) { //优先以用户定义为准
            this.searchText = this.tableOptions.placeholder;
        } else {
            this.searchText = placeholderArr.join("/");
        }
    },

    mounted() {
        this.tableCallback = this.callback || function() {};
    },

    data() {
        return {
            tableScroll: false,
            pageData: [], //当前页数据
            tableData: [], //当前表格数据 过滤后
            isLoadData: false,
            originData: [], //转换后的原始数据，format后的数据
            formatOpt: {},
            footer: [], //
            sortKey: null, // 排序元素
            sortType: "",
            searchValue: "", //搜索文字
            bodyHeight: "",
            noData: _("暂无数据"),
            searchItem: [],
            searchText: "",
            checkbox: {
                sortArray: [{
                    title: ""
                }],
                values: ["1", "0"],
                events: {
                    click: this.changeSelectAll
                }
            }
        };
    },

    methods: {
        //自定义事件
        customCompFunc(params) {
            //触发父组件的自定义事件
            this.$emit("on-custom-comp", params);
        },

        goSearch() {
            if (this.searchValue == "") {
                this.tableData = this.originData;
            } else {
                this.tableData = filterTable(
                    this.originData,
                    this.searchValue,
                    this.searchItem
                );
            }
            this.sortType = "";
            this.updateTable();
        },

        updateTable() {
            //更新总页数
            if (this.tableOptions.showPage) {
                this.tableOptions.page = 0;
                this.tableOptions.totalPage = Math.ceil(
                    this.tableData.length / this.tableOptions.pagePer
                );
                this.tableOptions.totalPage <= 1
                    ? (this.tableOptions.totalPage = 1)
                    : "";

                //更新当前页
                if (this.tableOptions.totalPage - 1 < this.tableOptions.page) {
                    this.tableOptions.page = this.tableOptions.totalPage - 1;
                }
                this.updateFooter();
            }
            this.updateScroll();
            //当前页显示的数据
            this.pageData = this.getPageData();
            //this.tableOptions.pageData = this.pageData;

            this.$nextTick(function() {
                this.tableCallback(this.pageData); //执行表格更新的回调
            });
        },

        //更新表格的滚动条
        updateScroll() {
            //计算滚动条显示
            this.$nextTick(function() {
                if ((this.$refs["table-body-tr"] || []).length === 0) {
                    this.bodyHeight = '';
                    return;
                }
                let trHeight = this.$refs["table-body-tr"][0].offsetHeight;
                if (this.tableOptions.maxTableRow < this.pageData.length) {
                    this.bodyHeight = trHeight * this.tableOptions.maxTableRow;
                    this.tableScroll = true;
                } else {
                    this.tableScroll = false;
                    this.bodyHeight = '';
                }
            });
        },

        /**
         * 更新表格的页数，处理省略的页数
         *
         */
        updateFooter() {
            //更新表格的页操作
            this.footer = [];
            let footerArr = [];
            this.updateScroll();
            //不需要处理页数时
            if (this.tableOptions.totalPage < MAX_PAGE_SHOW) {
                for (let i = 0; i < this.tableOptions.totalPage; i++) {
                    this.footer.push({
                        text: i + 1,
                        value: i
                    });
                }
                return;
            }

            //获取当前页的前后2页
            for (let i = 0; i < this.tableOptions.totalPage; i++) {
                if (Math.abs(this.tableOptions.page - i) <= PAGE_PREV_NUM) {
                    footerArr.push({
                        text: i + 1,
                        value: i
                    });
                }
            }

            //当页数不满5页时，表明已有一方到首尾
            if (footerArr.length < PAGE_PREV_NUM * 2 + 1) {
                //当第1项是第一页
                if (footerArr[0].value === 0) {
                    //向后扩展
                    while (footerArr.length < PAGE_PREV_NUM * 2 + 1) {
                        footerArr.push({
                            text: footerArr[footerArr.length - 1].text + 1,
                            value: footerArr[footerArr.length - 1].value + 1
                        });
                    }
                } else if (
                    footerArr[footerArr.length - 1].value ===
                    this.tableOptions.totalPage - 1
                ) {
                    //向前扩展
                    while (footerArr.length < PAGE_PREV_NUM * 2 + 1) {
                        footerArr.unshift({
                            text: footerArr[0].text - 1,
                            value: footerArr[0].value - 1
                        });
                    }
                }
            }

            //如果页数小于3，则前面页数不能出现...，需要自动补全
            if (footerArr[0].value < 3) {
                while (footerArr[0].value != 0) {
                    footerArr.unshift({
                        text: footerArr[0].text - 1,
                        value: footerArr[0].value - 1
                    });
                }
            } else {
                //页数以1开头
                footerArr.unshift({
                    text: "...",
                    value: "prevBtn"
                });
                footerArr.unshift({
                    text: 1,
                    value: 0
                });
            }

            //如果是后3页，自动补全 不能出现...
            if (
                this.tableOptions.totalPage -
                    1 -
                    footerArr[footerArr.length - 1].value <
                3
            ) {
                while (
                    footerArr[footerArr.length - 1].value !=
                    this.tableOptions.totalPage - 1
                ) {
                    footerArr.push({
                        text: footerArr[footerArr.length - 1].text + 1,
                        value: footerArr[footerArr.length - 1].value + 1
                    });
                }
            } else {
                //页数以最后页结束
                footerArr.push({
                    text: "...",
                    value: "nextBtn"
                });
                footerArr.push({
                    text: this.tableOptions.totalPage,
                    value: this.tableOptions.totalPage - 1
                });
            }
            this.footer = footerArr;
        },

        //当前个数
        getCustonIndex(index) {
            return this.tableOptions.page * this.tableOptions.pagePer + index;
        },

        //跳转到下一页
        gotoPage(nextPage) {
            //切换页
            if (nextPage == "prev") {
                nextPage = this.tableOptions.page - 1;
            } else if (nextPage == "next") {
                nextPage = this.tableOptions.page + 1;
            } else if(nextPage === "prevBtn" || nextPage === "nextBtn") {
                return;
            }

            //当下一页超出范围 或者下一页 == 当前页时
            if (
                nextPage < 0 ||
                nextPage > this.tableOptions.totalPage - 1 ||
                nextPage == this.tableOptions.page
            ) {
                return;
            }
            //当前页
            this.tableOptions.page = nextPage;
            //当前页数据
            this.pageData = this.getPageData();

            //切换页面时，清除选中
            if (this.tableOptions.selectBox) {
                this.pageData.forEach(item => this.$set(item, "selected", "0"));
                this.checkbox.val = "0";
            }
            this.updateFooter();
        },
        //获取当前页的数据
        getPageData() {
            //是否分页
            if (this.tableOptions.showPage) {
                return this.tableData.slice(
                    this.tableOptions.page * this.tableOptions.pagePer,
                    (this.tableOptions.page + 1) * this.tableOptions.pagePer
                );
            }
            return this.tableData;
        },
        //排序，以field字段排序
        sortTable(fieldOptions, field) {
            let _this = this;
            if (!fieldOptions.sort) {
                return;
            }
            //排序元素
            this.sortKey = field;

            //排序方式
            this.sortType = this.sortType == "asc" ? "desc" : "asc";

            //按照某列数据排序
            _this.tableData = _this.sortData(_this.tableData, {
                [_this.sortKey]: _this.sortType
            });
            this.updateTable();
        },

        /**
         * 排序数据
         */
        sortData(data, sortConfig) {
            let _this = this;
            data = data || [];
            return _this.sortKey
                ? data.sort(function(a, b) {
                      return sortByKey(a, b, _this.sortKey, sortConfig);
                  })
                : data;
        },

        findOriginData(value) {
            //根据key值（key必须是唯一标识） 获取原始数据
            return this.tableOptions.originData.find(
                item => item[this.guidKey] == value
            );
        },

        findIndex(value) {
            //根据key值（key必须是唯一标识） 获取原始数据
            return this.tableOptions.originData.findIndex(
                item => item[this.guidKey] == value
            );
        },

        /**
         * 表格数据自定义转换
         */
        formatTable() {
            //复制表格数据
            let tableArr = copyDeepData(this.tableOptions.originData),
                len = tableArr.length,
                newTableArr = [],
                originData = {},
                _this = this;

            for (let i = 0; i < len; i++) {
                for (let prop in _this.formatOpt) {
                    if (typeof _this.formatOpt[prop] == "function") {
                        originData = _this.findOriginData(tableArr[i][_this.guidKey]);
                        tableArr[i][prop] = _this.formatOpt[prop](
                            tableArr[i][prop],
                            tableArr[i],
                            originData
                        );
                    }
                }

                newTableArr.push(tableArr[i]);
            }
            //转换后的原始数据
            this.originData = newTableArr;
        },
        changeSelectAll() {
            this.pageData.forEach((item) => {
                //过滤禁用的
                item.hasCheckbox !== false && this.$set(item, "selected", this.checkbox.val);
            });
            let selectArr = [],
                tableKey = this.guidKey;
            this.pageData.forEach(item => {
                item.hasCheckbox !== false && selectArr.push(
                    this.tableOptions.originData.filter(
                        item1 => item1[tableKey] == item[tableKey]
                    )[0]
                );
            });
            let params = {
                type: "selectAll",
                rowsData: this.checkbox.val == "1" ? selectArr : []
            };
            this.$emit("on-custom-comp", params);
        },
        focus() {
            this.$refs.search.focus();
        }
    },
    watch: {
        "tableOptions.originData": {
            handler(newData, oldData) {
                let _this = this;

                //解决初次定义执行表格更新问题
                if (typeof oldData === "undefined") {
                    return;
                }
                this.checkbox.val = "0";
                this.formatTable();
                this.isLoadData = true;
                this.tableData = copyDeepData(this.originData);

                this.updateTable();
            },
            deep: true
        }
    },
    destroyed() {}
};
</script>