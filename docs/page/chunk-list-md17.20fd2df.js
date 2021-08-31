(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{220:function(t,e,n){"use strict";n.r(e);n(105),n(46),n(81);var r,s,i,o,a=n(40);function c(t,e){var n={avatar:{type:1<arguments.length&&void 0!==e?e:"circle",src:"./img/dog.jpg"},title:"列表主要内容",description:"次要信息"};return Array.from(Array(t)).map(function(){return n})}var v={name:"component-doc",components:{"mo-demo0":(o={data:function(){return{options1:c(3),options2:c(3,"square")}},methods:{clickItem:function(t){console.log(t)}}},Object(a.a)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"empty-list-demo"},[n("strong",[t._v("圆形图标")]),t._v(" "),n("v-list",{attrs:{bordered:!0,options:t.options1},on:{click:t.clickItem}})],1),t._v(" "),n("div",{staticClass:"empty-list-demo"},[n("strong",[t._v("方形图标")]),t._v(" "),n("v-list",{attrs:{bordered:!0,options:t.options2},on:{click:t.clickItem}})],1)])},staticRenderFns:[]},o)),"mo-demo1":(r={avatar:"./img/dog.jpg",title:"列表主要内容",description:"次要信息"},s=Array.from(Array(5)).map(function(){return r}),i={data:function(){return{options:s}},methods:{clickItem:function(t){console.log(t)}}},Object(a.a)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"empty-list-demo"},[n("strong",[t._v("默认显示")]),t._v(" "),n("v-list",{attrs:{bordered:!0},on:{click:t.clickItem}})],1),t._v(" "),n("div",{staticClass:"empty-list-demo"},[n("strong",[t._v("自定义文字内容")]),t._v(" "),n("v-list",{attrs:{bordered:!0,"empty-text":"no data"},on:{click:t.clickItem}})],1),t._v(" "),n("div",{staticClass:"empty-list-demo"},[n("strong",[t._v("自定义内容")]),t._v(" "),n("v-list",{attrs:{bordered:!0},on:{click:t.clickItem},scopedSlots:t._u([{key:"empty-text",fn:function(){return[n("div",{staticClass:"custom-empty-content"},[n("img",{attrs:{src:"img/empty.png",alt:"no data"}})])]},proxy:!0}])})],1)])},staticRenderFns:[]},i))}},d=n(1),l=Object(d.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content reasy-doc"},[t._m(0),n("p",[t._v("基本的列表展示。")]),t._m(1),t._m(2),t._m(3),n("demo-block",[n("template",{slot:"source"},[n("mo-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="empty-list-demo">\n  <strong>圆形图标</strong>\n  <v-list\n    :bordered="true"\n    :options="options1"\n    @click="clickItem"\n  >\n  </v-list>\n</div>\n\n<div class="empty-list-demo">\n  <strong>方形图标</strong>\n  <v-list\n    :bordered="true"\n    :options="options2"\n    @click="clickItem"\n  >\n  </v-list>\n</div>\n\n<script>\n// 生成假数据\nconst getOptions = (nums, type = "circle") => {\n  const obj = {\n    avatar: {\n      type,\n      src: "./img/dog.jpg"\n    },\n    title: "列表主要内容",\n    description: "次要信息"\n  };\n\n  return Array.from(Array(nums)).map(() => obj);\n};\n\nexport default {\n  data() {\n    return {\n      options1: getOptions(3),\n      options2: getOptions(3, "square")\n    };\n  },\n  methods: {\n    clickItem(option) {\n      console.log(option);\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(4),n("p",[t._v("通过empty属性来自定义空列表显示的文字，或者使用具名插槽empty自定义空列表显示内容。")]),n("demo-block",[n("template",{slot:"source"},[n("mo-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="empty-list-demo">\n  <strong>默认显示</strong>\n  <v-list\n    :bordered="true"\n    @click="clickItem"\n  >\n  </v-list>\n</div>\n\n<div class="empty-list-demo">\n  <strong>自定义文字内容</strong>\n  <v-list\n    :bordered="true"\n    empty-text="no data"\n    @click="clickItem"\n  >\n  </v-list>\n</div>\n\n<div class="empty-list-demo">\n  <strong>自定义内容</strong>\n  <v-list\n    :bordered="true"\n    @click="clickItem"\n  >\n    <template #empty-text>\n      <div class="custom-empty-content">\n        <img src="img/empty.png" alt="no data" />\n      </div>\n    </template>\n  </v-list>\n</div>\n\n<script>\n// 生成假数据\nconst options = (() => {\n  const obj = {\n    avatar: "./img/dog.jpg",\n    title: "列表主要内容",\n    description: "次要信息"\n  };\n\n  return Array.from(Array(5)).map(() => obj);\n})();\n\nexport default {\n  data() {\n    return {\n      options\n    };\n  },\n  methods: {\n    clickItem(option) {\n      console.log(option);\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),n("side-link")],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"lie-biao"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lie-biao"}},[t._v("¶")]),t._v(" 列表")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"an-xu-yin-yong"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-js"},[t._v('import { List } from "@reasy-team/reasy-ui";\n\nVue.use(List);\n')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"ji-chu-shi-li"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-shi-li"}},[t._v("¶")]),t._v(" 基础示例")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"kong-lie-biao"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kong-lie-biao"}},[t._v("¶")]),t._v(" 空列表")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"shu-xing-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing-attributes"}},[t._v("¶")]),t._v(" 属性 Attributes")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("bordered")]),n("td",[t._v("是否展示外边框")]),n("td",[t._v("boolean")]),n("td",[t._v("-")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("options")]),n("td",[t._v("配置项，详情见下表")]),n("td",[t._v("Array<object>")]),n("td",[t._v("-")]),n("td",[t._v("[]")])]),n("tr",[n("td",[t._v("empty-text")]),n("td",[t._v('空数据时显示的文本内容，可使用slot="empty-text"设置')]),n("td",[t._v("string/slot")]),n("td",[t._v("-")]),n("td",[t._v("暂无数据")])]),n("tr",[n("td",[t._v("devided")]),n("td",[t._v("是否展示分割线")]),n("td",[t._v("Boolean")]),n("td",[t._v("-")]),n("td",[t._v("true")])]),n("tr",[n("td",[t._v("row-key")]),n("td",[t._v("v-for中key字段名称")]),n("td",[t._v("string")]),n("td",[t._v("-")]),n("td",[t._v("index")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("strong",[t._v("options数据项属性")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("avatar")]),n("td",[t._v("图标资源路径配置，不配置则不显示，详情见下表")]),n("td",[t._v("string/object/slot")]),n("td",[t._v("-")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("title")]),n("td",[t._v("列表子项的标题配置，不配置则不显示")]),n("td",[t._v("string/slot")]),n("td",[t._v("-")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("description")]),n("td",[t._v("列表子项的描述文字配置，不配置则不显示")]),n("td",[t._v("string/slot")]),n("td",[t._v("-")]),n("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("avatar类型为"),n("code",[t._v("String")]),t._v("，表示avatar的资源路径，类型为"),n("code",[t._v("Object")]),t._v("，可配置头像的形状及资源路径，也可通过插槽自定义头像内容")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("strong",[t._v("avatar数据项属性")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("type")]),n("td",[t._v("头像类型，即形状")]),n("td",[t._v("string")]),n("td",[t._v("circle/square")]),n("td",[t._v("circle")])]),n("tr",[n("td",[t._v("src")]),n("td",[t._v("头像资源路径")]),n("td",[t._v("string")]),n("td",[t._v("-")]),n("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("¶")]),t._v(" Events")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名称")]),n("th",[t._v("说明")]),n("th",[t._v("参数")])])]),n("tbody",[n("tr",[n("td",[t._v("click")]),n("td",[t._v("点击列表子项时触发")]),n("td",[t._v("子项的option")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[this._v("¶")]),this._v(" Slot")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("name")]),n("th",[t._v("说明")])])]),n("tbody",[n("tr",[n("td",[t._v("avatar")]),n("td",[t._v("头像")])]),n("tr",[n("td",[t._v("title")]),n("td",[t._v("标题")])]),n("tr",[n("td",[t._v("description")]),n("td",[t._v("描述信息/详细内容")])]),n("tr",[n("td",[t._v("empty-text")]),n("td",[t._v("空数据内容")])])])])}],!1,null,null,null);e.default=l.exports}}]);