(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{209:function(e,t,n){"use strict";n.r(t);var a=n(30),l={name:"component-doc",components:{"mo-demo0":Object(a.a)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-checkbox-group",{attrs:{options:t.options},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},staticRenderFns:[]},{data:function(){return{checked:[],options:[{label:"选项一",value:1},{label:"选项二",value:2},{label:"选项三",value:3},{label:"选项四",value:4}]}}}),"mo-demo1":Object(a.a)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-checkbox-group",{attrs:{options:t.options},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},staticRenderFns:[]},{data:function(){return{checked:[],options:[1,2,3,4]}}}),"mo-demo2":Object(a.a)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-checkbox-group",{attrs:{"is-select-all":"",options:t.options},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},staticRenderFns:[]},{data:function(){return{checked:[],options:[{label:"选项一",value:1},{label:"选项二",value:2},{label:"选项三",value:3},{label:"选项四",value:4}]}}}),"mo-demo3":Object(a.a)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-checkbox-group",{attrs:{"is-select-all":"","select-text":"选中所有",options:t.options},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},staticRenderFns:[]},{data:function(){return{checked:[],options:[{label:"选项一",value:1},{label:"选项二",value:2},{label:"选项三",value:3},{label:"选项四",value:4}]}}}),"mo-demo4":Object(a.a)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-checkbox-group",{attrs:{"is-select-all":"",disabled:"",options:t.options},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),n("v-checkbox-group",{attrs:{"is-select-all":"",disabled:"",options:t.options},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},staticRenderFns:[]},{data:function(){return{checked:[],selected:[1,3],options:[{label:"选项一",value:1},{label:"选项二",value:2},{label:"选项三",value:3},{label:"选项四",value:4}]}}}),"mo-demo5":Object(a.a)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-checkbox-group",{attrs:{options:t.options},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},staticRenderFns:[]},{data:function(){return{checked:[1,3],options:[{label:"选项一",value:1},{label:"选项二",value:2},{label:"选项三",value:3,disabled:!0},{label:"选项四",value:4,disabled:!0}]}}}),"mo-demo6":Object(a.a)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-checkbox-group",{attrs:{min:2,max:4,options:t.options},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1)},staticRenderFns:[]},{data:function(){return{checked:[1,2,3],options:[{label:"选项一",value:1},{label:"选项二",value:2},{label:"选项三",value:3},{label:"选项四",value:4},{label:"选项五",value:5},{label:"选项六",value:6}]}}})}},c=n(1),o=Object(c.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content reasy-doc"},[e._m(0),n("p",[e._v("适应于支持选择多个选项")]),e._m(1),e._m(2),e._m(3),n("demo-block",[n("template",{slot:"source"},[n("mo-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox-group v-model="checked" :options="options"></v-checkbox-group>\n<script>\n  export default {\n    data() {\n      return {\n        checked: [],\n        options: [\n          {\n            label: "选项一",\n            value: 1\n          },\n          {\n            label: "选项二",\n            value: 2\n          },\n          {\n            label: "选项三",\n            value: 3\n          },\n          {\n            label: "选项四",\n            value: 4\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),n("p",[e._v("如果选项和值一致时，options 选项可简化为具体的值")]),n("demo-block",[n("template",{slot:"source"},[n("mo-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox-group v-model="checked" :options="options"></v-checkbox-group>\n<script>\n  export default {\n    data() {\n      return {\n        checked: [],\n        options: [1, 2, 3, 4]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(4),e._m(5),n("demo-block",[n("template",{slot:"source"},[n("mo-demo2")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox-group\n  is-select-all\n  v-model="checked"\n  :options="options"\n></v-checkbox-group>\n<script>\n  export default {\n    data() {\n      return {\n        checked: [],\n        options: [\n          {\n            label: "选项一",\n            value: 1\n          },\n          {\n            label: "选项二",\n            value: 2\n          },\n          {\n            label: "选项三",\n            value: 3\n          },\n          {\n            label: "选项四",\n            value: 4\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),n("p",[e._v("自定义全选文字")]),e._m(6),n("demo-block",[n("template",{slot:"source"},[n("mo-demo3")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox-group\n  is-select-all\n  select-text="选中所有"\n  v-model="checked"\n  :options="options"\n></v-checkbox-group>\n<script>\n  export default {\n    data() {\n      return {\n        checked: [],\n        options: [\n          {\n            label: "选项一",\n            value: 1\n          },\n          {\n            label: "选项二",\n            value: 2\n          },\n          {\n            label: "选项三",\n            value: 3\n          },\n          {\n            label: "选项四",\n            value: 4\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(7),n("p",[e._v("全部选项禁用")]),n("demo-block",[n("template",{slot:"source"},[n("mo-demo4")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox-group\n  is-select-all\n  disabled\n  v-model="selected"\n  :options="options"\n></v-checkbox-group>\n<v-checkbox-group\n  is-select-all\n  disabled\n  v-model="checked"\n  :options="options"\n></v-checkbox-group>\n<script>\n  export default {\n    data() {\n      return {\n        checked: [],\n        selected:[1, 3],\n        options: [\n          {\n            label: "选项一",\n            value: 1\n          },\n          {\n            label: "选项二",\n            value: 2\n          },\n          {\n            label: "选项三",\n            value: 3\n          },\n          {\n            label: "选项四",\n            value: 4\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),n("p",[e._v("部分选项禁用")]),n("demo-block",[n("template",{slot:"source"},[n("mo-demo5")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox-group v-model="checked" :options="options"></v-checkbox-group>\n<script>\n  export default {\n    data() {\n      return {\n        checked: [1,3],\n        options: [\n          {\n            label: "选项一",\n            value: 1\n          },\n          {\n            label: "选项二",\n            value: 2\n          },\n          {\n            label: "选项三",\n            value: 3,\n            disabled: true\n          },\n          {\n            label: "选项四",\n            value: 4,\n            disabled: true\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(8),e._m(9),n("demo-block",[n("template",{slot:"source"},[n("mo-demo6")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-checkbox-group\n  :min="2"\n  :max="4"\n  v-model="checked"\n  :options="options"\n></v-checkbox-group>\n<script>\n  export default {\n    data() {\n      return {\n        checked: [1, 2, 3],\n        options: [\n          {\n            label: "选项一",\n            value: 1\n          },\n          {\n            label: "选项二",\n            value: 2\n          },\n          {\n            label: "选项三",\n            value: 3\n          },\n          {\n            label: "选项四",\n            value: 4\n          },\n          {\n            label: "选项五",\n            value: 5\n          },\n          {\n            label: "选项六",\n            value: 6\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(10),e._m(11),e._m(12),e._m(13),e._m(14),e._m(15),n("side-link")],1)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{attrs:{id:"fu-xuan-kuang-zu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fu-xuan-kuang-zu"}},[e._v("¶")]),e._v(" 复选框组")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"an-xu-yin-yong"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[e._v("¶")]),e._v(" 按需引用")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-js"},[e._v('import { Checkbox } from "@reasy-team/reasy-ui";\n\nVue.use(Checkbox);\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"ji-ben-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa"}},[e._v("¶")]),e._v(" 基本用法")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"zhi-chi-quan-xuan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zhi-chi-quan-xuan"}},[e._v("¶")]),e._v(" 支持全选")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("code",[e._v("is-select-all")]),e._v(" 配置支持全选")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("code",[e._v("slect-text")]),e._v("配置全选的文字")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"jin-yong"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong"}},[e._v("¶")]),e._v(" 禁用")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"xuan-xiang-fan-wei"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xuan-xiang-fan-wei"}},[e._v("¶")]),e._v(" 选项范围")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("支持"),n("code",[e._v("min")]),e._v("和"),n("code",[e._v("max")]),e._v("，配置选项的最少选择个数和最大选择个数")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"v-checkbox-group-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v-checkbox-group-attributes"}},[e._v("¶")]),e._v(" v-checkbox-group Attributes")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("参数")]),n("th",[e._v("说明")]),n("th",[e._v("类型")]),n("th",[e._v("可选值")]),n("th",[e._v("默认值")])])]),n("tbody",[n("tr",[n("td",[e._v("value / v-model")]),n("td",[e._v("绑定值")]),n("td",[e._v("Arrray")]),n("td",[e._v("—")]),n("td",[e._v("[]")])]),n("tr",[n("td",[e._v("name")]),n("td",[e._v("checkbox 的名称")]),n("td",[e._v("string")]),n("td",[e._v("—")]),n("td")]),n("tr",[n("td",[e._v("disabled")]),n("td",[e._v("是否禁用全部复选框，包括全选复选框")]),n("td",[e._v("boolean")]),n("td",[e._v("—")]),n("td",[e._v("false")])]),n("tr",[n("td",[e._v("disabled-check-all")]),n("td",[e._v("是否仅禁用全选复选框。特殊情况下使用(一般配合options中的disabled，在多个checkbox组之间修改交互而使用)")]),n("td",[e._v("boolean")]),n("td",[e._v("—")]),n("td",[e._v("false")])]),n("tr",[n("td",[e._v("options")]),n("td",[e._v("选项数组对象[{label: 显示文字，"),n("br"),e._v(" value：值，disabled: 是否禁用此项}]")]),n("td",[e._v("Array")]),n("td",[e._v("—")]),n("td",[e._v("[]")])]),n("tr",[n("td",[e._v("is-select-all")]),n("td",[e._v("是否支持全选")]),n("td",[e._v("boolean")]),n("td",[e._v("—")]),n("td",[e._v("false")])]),n("tr",[n("td",[e._v("select-text")]),n("td",[e._v("全部选中的文字描述")]),n("td",[e._v("string")]),n("td",[e._v("—")]),n("td",[e._v("全选")])]),n("tr",[n("td",[e._v("min")]),n("td",[e._v("最小支持选项")]),n("td",[e._v("number")]),n("td",[e._v("—")]),n("td",[e._v("0")])]),n("tr",[n("td",[e._v("max")]),n("td",[e._v("最大支持选项，最大为选项的个数")]),n("td",[e._v("number")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("tooltip")]),n("td",[e._v("文字提示，配置参考v-tooltip指令。提示内容默认为options项中的label值。若配置了content值，那么所有的复选框的提示内容都为content值")]),n("td",[e._v("object")]),n("td",[e._v("—")]),n("td",[e._v("—")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"options-xuan-xiang"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#options-xuan-xiang"}},[e._v("¶")]),e._v(" options 选项")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("参数")]),n("th",[e._v("说明")]),n("th",[e._v("类型")]),n("th",[e._v("可选值")]),n("th",[e._v("默认值")])])]),n("tbody",[n("tr",[n("td",[e._v("label")]),n("td",[e._v("选项框描述文字")]),n("td",[e._v("string")]),n("td"),n("td")]),n("tr",[n("td",[e._v("value")]),n("td",[e._v("选项框值，各选项的值不能一样")]),n("td",[e._v("string / number / boolean")]),n("td"),n("td")]),n("tr",[n("td",[e._v("disabled")]),n("td",[e._v("该选项是否禁用")]),n("td",[e._v("boolean")]),n("td"),n("td",[e._v("false")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v-checkbox-group-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-checkbox-group-events"}},[this._v("¶")]),this._v(" v-checkbox-group Events")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("事件名")]),n("th",[e._v("说明")]),n("th",[e._v("参数")])])]),n("tbody",[n("tr",[n("td",[e._v("change")]),n("td",[e._v("值改变时触发")]),n("td",[e._v("改变后的值")])]),n("tr",[n("td",[e._v("click")]),n("td",[e._v("点击选项时触发")]),n("td",[e._v("选项 value")])])])])}],!1,null,null,null);t.default=o.exports}}]);