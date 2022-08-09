(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{269:function(t,a,e){"use strict";e.r(a);var s=e(34),s={name:"component-doc",components:{"mo-demo0":Object(s.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("v-pagination",{attrs:{total:1e3,name:"page-base","current-page":1}})],1)},staticRenderFns:[]},{}),"mo-demo1":Object(s.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("v-pagination",{attrs:{border:!1,name:"page-easy",total:100,"current-page":6}})],1)},staticRenderFns:[]},{}),"mo-demo2":Object(s.a)({render:function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("div",[a("v-row",{staticClass:"page-row"},[a("v-col",{staticClass:"page-row__title page-row__border",attrs:{span:2}},[t._v("基础")]),t._v(" "),a("v-col",{attrs:{span:22}},[a("v-pagination",{attrs:{total:100,name:"page-border","current-page":6}})],1)],1),t._v(" "),a("v-row",{staticClass:"page-row"},[a("v-col",{staticClass:"page-row__title",attrs:{span:2}},[t._v("简洁")]),t._v(" "),a("v-col",{attrs:{span:22}},[a("v-pagination",{attrs:{border:!1,name:"page-noborder",total:100,"current-page":1}})],1)],1)],1)},staticRenderFns:[]},{}),"mo-demo3":Object(s.a)({render:function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("div",[a("v-row",{staticClass:"page-row"},[a("v-col",{staticClass:"page-row__title page-row__border",attrs:{span:2}},[t._v("基础")]),t._v(" "),a("v-col",{attrs:{span:22}},[a("v-pagination",{attrs:{total:100,name:"page-basic","is-show-total":"","is-change-size":"","is-input-page":"","current-page":8}})],1)],1),t._v(" "),a("v-row",{staticClass:"page-row"},[a("v-col",{staticClass:"page-row__title",attrs:{span:2}},[t._v("简洁")]),t._v(" "),a("v-col",{attrs:{span:22}},[a("v-pagination",{attrs:{total:100,name:"page-total","is-show-total":"","is-change-size":"","is-input-page":"",border:!1,"current-page":8,pageSizeOptions:[10,20,50,100]}})],1)],1)],1)},staticRenderFns:[]},{}),"mo-demo4":Object(s.a)({render:function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("div",[a("v-row",{staticClass:"page-row"},[a("v-col",{staticClass:"page-row__title page-row__border",attrs:{span:2}},[t._v("基础")]),t._v(" "),a("v-col",{attrs:{span:22}},[a("v-pagination",{attrs:{total:100,name:"page-d","is-show-total":"","is-change-size":"","is-input-page":"","current-page":2,disabled:""}})],1)],1),t._v(" "),a("v-row",{staticClass:"page-row"},[a("v-col",{staticClass:"page-row__title",attrs:{span:2}},[t._v("简洁")]),t._v(" "),a("v-col",{attrs:{span:22}},[a("v-pagination",{attrs:{total:100,name:"page-max-d","is-show-total":"","is-change-size":"","is-show-total-page":"","is-input-page":"",border:!1,"current-page":8,disabled:""}})],1)],1)],1)},staticRenderFns:[]},{}),"mo-demo5":Object(s.a)({render:function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("div",[a("v-row",{staticClass:"page-row"},[a("v-col",{staticClass:"page-row__title page-row__border",attrs:{span:3}},[t._v("显示总页")]),t._v(" "),a("v-col",{attrs:{span:21}},[a("v-pagination",{attrs:{total:100,name:"page-1","is-show-total-page":"","current-page":3}})],1)],1),t._v(" "),a("v-row",{staticClass:"page-row"},[a("v-col",{staticClass:"page-row__title page-row__border",attrs:{span:3}},[t._v("显示总条数")]),t._v(" "),a("v-col",{attrs:{span:21}},[a("v-pagination",{attrs:{total:100,name:"page-2","is-show-total":"","current-page":4}})],1)],1),t._v(" "),a("v-row",{staticClass:"page-row"},[a("v-col",{staticClass:"page-row__title",attrs:{span:3}},[t._v("显示完整")]),t._v(" "),a("v-col",{attrs:{span:21}},[a("v-pagination",{attrs:{total:100,name:"page-3","is-show-total":"","is-show-total-page":"","is-change-size":"","is-input-page":"",border:!1,"current-page":5}})],1)],1)],1)},staticRenderFns:[]},{})}},e=e(1),e=Object(e.a)(s,function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("section",{staticClass:"content reasy-doc"},[a("h1",[t._v("Pagination 分页")]),a("p",[t._v("有大量内容展现以及数据量过多时可使用分页加载处理来分解数据。采用分页的形式分隔长列表，切换页码浏览数据，每次只加载一个页面，节省加载时间。")]),t._m(0),t._m(1),t._m(2),a("p",[t._v("标签页的常用样式。")]),a("demo-block",[a("template",{slot:"source"},[a("mo-demo0")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-pagination :total="1000" name="page-base" :current-page="1"></v-pagination>\n')])])])],2),t._m(3),a("p",[t._v("简洁样式尺寸更小，样式更简洁")]),a("demo-block",[a("template",{slot:"source"},[a("mo-demo1")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-pagination :border="false" name="page-easy" :total="100" :current-page="6"></v-pagination>\n')])])])],2),t._m(4),a("p",[t._v("在页数很多时使用。")]),a("demo-block",[a("template",{slot:"source"},[a("mo-demo2")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-row class="page-row">\n  <v-col :span="2" class="page-row__title page-row__border">基础</v-col>\n  <v-col :span="22">\n    <v-pagination :total="100" name="page-border" :current-page="6"></v-pagination>\n  </v-col>\n</v-row>\n<v-row class="page-row">\n  <v-col :span="2" class="page-row__title">简洁</v-col>\n  <v-col :span="22">\n    <v-pagination :border="false" name="page-noborder" :total="100" :current-page="1"></v-pagination>\n  </v-col>\n</v-row>\n')])])])],2),t._m(5),a("p",[t._v("包括总数，跳转，改变三个附加功能，可根据需要自行选择所需功能。")]),a("demo-block",[a("template",{slot:"source"},[a("mo-demo3")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-row class="page-row">\n  <v-col :span="2" class="page-row__title page-row__border">基础</v-col>\n  <v-col :span="22">\n    <v-pagination :total="100" name="page-basic" is-show-total is-change-size is-input-page :current-page="8" ></v-pagination>\n  </v-col>\n</v-row>\n<v-row class="page-row">\n  <v-col :span="2" class="page-row__title">简洁</v-col>\n  <v-col :span="22">\n    <v-pagination :total="100" name="page-total" is-show-total is-change-size is-input-page :border="false" :current-page="8" :pageSizeOptions="[10,20,50,100]"></v-pagination>\n  </v-col>\n</v-row>\n')])])])],2),t._m(6),a("demo-block",[a("template",{slot:"source"},[a("mo-demo4")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-row class="page-row">\n  <v-col :span="2" class="page-row__title page-row__border">基础</v-col>\n  <v-col :span="22">\n    <v-pagination :total="100" name="page-d" is-show-total is-change-size is-input-page :current-page="2" disabled></v-pagination>\n  </v-col>\n</v-row>\n<v-row class="page-row">\n  <v-col :span="2" class="page-row__title">简洁</v-col>\n  <v-col :span="22">\n    <v-pagination :total="100" name="page-max-d" is-show-total is-change-size is-show-total-page is-input-page :border="false" :current-page="8" disabled></v-pagination>\n  </v-col>\n</v-row>\n')])])])],2),a("p",[t._v("高级用法")]),a("demo-block",[a("template",{slot:"source"},[a("mo-demo5")],1),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-row class="page-row">\n  <v-col :span="3" class="page-row__title page-row__border">显示总页</v-col>\n  <v-col :span="21">\n    <v-pagination :total="100" name="page-1" is-show-total-page :current-page="3"></v-pagination>\n </v-col>\n</v-row>\n\n<v-row class="page-row">\n  <v-col :span="3" class="page-row__title page-row__border">显示总条数</v-col>\n  <v-col :span="21">\n    <v-pagination :total="100" name="page-2" is-show-total :current-page="4"></v-pagination>\n </v-col>\n</v-row>\n\n<v-row class="page-row">\n  <v-col :span="3" class="page-row__title">显示完整</v-col>\n  <v-col :span="21">\n    <v-pagination :total="100" name="page-3" is-show-total is-show-total-page is-change-size is-input-page :border="false" :current-page="5" ></v-pagination>\n  </v-col>\n</v-row>\n')])])])],2),t._m(7),t._m(8),t._m(9),t._m(10),a("side-link")],1)},[function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("h2",{attrs:{id:"an-xu-yin-yong"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("pre",[a("code",{staticClass:"language-js"},[t._v('import { Base, Pagination } from "@reasy-team/reasy-ui";\n\nVue.use(Pagination);\nVue.use(Base);\n')])])},function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("h2",{attrs:{id:"ji-ben-yang-shi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yang-shi"}},[t._v("¶")]),t._v(" 基本样式")])},function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("h2",{attrs:{id:"jian-dan-yang-shi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jian-dan-yang-shi"}},[t._v("¶")]),t._v(" 简单样式")])},function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("h2",{attrs:{id:"geng-duo-fen-ye"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geng-duo-fen-ye"}},[t._v("¶")]),t._v(" 更多分页")])},function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("h2",{attrs:{id:"fu-jia-gong-neng"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fu-jia-gong-neng"}},[t._v("¶")]),t._v(" 附加功能")])},function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("h2",{attrs:{id:"jin-yong"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong"}},[t._v("¶")]),t._v(" 禁用")])},function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("h2",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("¶")]),t._v(" Props")])},function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("border")]),a("td",[t._v("页码是否有边框")]),a("td",[t._v("boolean")]),a("td",[t._v("—")]),a("td",[t._v("true")])]),a("tr",[a("td",[t._v("page-size")]),a("td",[t._v("每页多少条")]),a("td",[t._v("number")]),a("td",[t._v("—")]),a("td",[t._v("10")])]),a("tr",[a("td",[t._v("total")]),a("td",[t._v("总条目数")]),a("td",[t._v("number")]),a("td",[t._v("—")]),a("td",[t._v("—")])]),a("tr",[a("td",[t._v("pager-count")]),a("td",[t._v("页面按钮的数量，超过时会折叠")]),a("td",[t._v("number")]),a("td",[t._v("大于等于 5 且小于等于 13 的奇数")]),a("td",[t._v("9")])]),a("tr",[a("td",[t._v("current-page")]),a("td",[t._v("当前页")]),a("td",[t._v("number")]),a("td",[t._v("—")]),a("td",[t._v("—")])]),a("tr",[a("td",[t._v("is-show-total")]),a("td",[t._v("是否显示总条目数")]),a("td",[t._v("boolean")]),a("td"),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("is-show-total-page")]),a("td",[t._v("是否显示总页目数")]),a("td",[t._v("boolean")]),a("td"),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("is-change-size")]),a("td",[t._v("是否支持修改每页条数")]),a("td",[t._v("boolean")]),a("td",[t._v("—")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("page-size-options")]),a("td",[t._v("每页显示个数选择器的选项设置")]),a("td",[t._v("number[]")]),a("td",[t._v("—")]),a("td",[t._v("[10, 20, 30, 40, 50, 100]")])]),a("tr",[a("td",[t._v("is-input-page")]),a("td",[t._v("是否支持手动输入页面")]),a("td",[t._v("boolean")]),a("td",[t._v("—")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("是否禁用")]),a("td",[t._v("boolean")]),a("td",[t._v("—")]),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("prev-text")]),a("td",[t._v("替代图标显示的上一页文字")]),a("td",[t._v("string")]),a("td",[t._v("—")]),a("td",[t._v("—")])]),a("tr",[a("td",[t._v("next-text")]),a("td",[t._v("替代图标显示的下一页文字")]),a("td",[t._v("string")]),a("td",[t._v("—")]),a("td",[t._v("—")])])])])},function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("¶")]),t._v(" @Events")])},function(){var t=this,a=t.$createElement,a=t._self._c||a;return a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),a("th",[t._v("说明")]),a("th",[t._v("参数")])])]),a("tbody",[a("tr",[a("td",[t._v("change-size")]),a("td",[t._v("每页条数改变后触发")]),a("td",[t._v("每页条数")])]),a("tr",[a("td",[t._v("change-page")]),a("td",[t._v("当前页改变时会触发")]),a("td",[t._v("当前页")])]),a("tr",[a("td",[t._v("click-prev")]),a("td",[t._v("用户点击上一页按钮改变当前页后触发")]),a("td",[t._v("当前页")])]),a("tr",[a("td",[t._v("click-next")]),a("td",[t._v("用户点击下一页按钮改变当前页后触发")]),a("td",[t._v("当前页")])])])])}],!1,null,null,null);a.default=e.exports}}]);