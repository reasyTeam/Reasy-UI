(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{278:function(e,t,n){"use strict";n.r(t);var l=n(41),l={name:"component-doc",components:{"mo-demo0":Object(l.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-select",{attrs:{name:"select",options:t.selectOption},model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}})],1)},staticRenderFns:[]},{data:function(){return{select1:"1",selectOption:[{value:"1",label:"选项一"},{value:"2",label:"选项二"},{value:"3",label:"选项三"},{value:"4",label:"选项四"}]}}}),"mo-demo1":Object(l.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-select",{attrs:{name:"select-num",options:t.selectOption},model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}})],1)},staticRenderFns:[]},{data:function(){return{select1:"1",selectOption:[1,2,3,4,5]}}}),"mo-demo2":Object(l.a)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-select",{attrs:{name:"select-tem",options:t.selectOption},scopedSlots:t._u([{key:"default",fn:function(e){return[n("li",[t._v("自定义列-"+t._s(e.value))])]}}]),model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}})],1)},staticRenderFns:[]},{data:function(){return{select1:"white",selectOption:["red","black","white","blue","gray"]}}}),"mo-demo3":Object(l.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-select",{attrs:{name:"select-d",disabled:"",options:t.selectOption},model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}})],1)},staticRenderFns:[]},{data:function(){return{select1:"1",selectOption:[{value:"1",label:"选项一"},{value:"2",label:"选项二"},{value:"3",label:"选项三"},{value:"4",label:"选项四"}]}}}),"mo-demo4":Object(l.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-select",{attrs:{name:"select-3",options:t.selectOption},model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}})],1)},staticRenderFns:[]},{data:function(){return{select1:"1",selectOption:[{value:"1",label:"选项一"},{value:"2",label:"选项二",disabled:!0},{value:"3",label:"选项三"},{value:"4",label:"选项四"}]}}}),"mo-demo5":Object(l.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-select",{attrs:{name:"select-manual","is-manual":"","manual-text":"其他选项",options:t.selectOption},model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}})],1)},staticRenderFns:[]},{data:function(){return{select1:"1",selectOption:[{value:"1",label:"选项一"},{value:"2",label:"选项二"},{value:"3",label:"选项三"},{value:"4",label:"选项四"}]}}}),"mo-demo6":Object(l.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-select",{attrs:{name:"select-clear","is-clear":"",options:t.selectOption},model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}})],1)},staticRenderFns:[]},{data:function(){return{select1:"1",selectOption:[{value:"1",label:"选项一"},{value:"2",label:"选项二"},{value:"3",label:"选项三"},{value:"4",label:"选项四"}]}}}),"mo-demo7":Object(l.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-select",{attrs:{name:"select-search","is-search":"",options:t.selectOption},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1)},staticRenderFns:[]},{data:function(){return{select:"1",selectOption:[{value:"1",label:"选项一"},{value:"2",label:"选项二"},{value:"3",label:"选项三"},{value:"4",label:"选项四"}]}}}),"mo-demo8":Object(l.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-row",{staticClass:"page-row"},[e("v-col",{staticClass:"page-row__title page-row__border",attrs:{span:2}},[t._v("top")]),t._v(" "),e("v-col",{attrs:{span:22}},[e("v-select",{attrs:{name:"select-top",position:"top",options:t.selectOption},model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}})],1)],1),t._v(" "),e("v-row",{staticClass:"page-row"},[e("v-col",{staticClass:"page-row__title page-row__border",attrs:{span:2}},[t._v("bottom")]),t._v(" "),e("v-col",{attrs:{span:22}},[e("v-select",{attrs:{position:"bottom",name:"select-5",options:t.selectOption},model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{select1:"1",selectOption:[{value:"1",label:"选项一"},{value:"2",label:"选项二"},{value:"3",label:"选项三"},{value:"4",label:"选项四"}]}}}),"mo-demo9":Object(l.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-row",{staticClass:"page-row"},[e("v-col",{staticClass:"page-row__title page-row__border",attrs:{span:2}},[t._v("省略显示")]),t._v(" "),e("v-col",{attrs:{span:22}},[e("v-select",{attrs:{"is-multiple":"",name:"select-mul","multiple-limit":4,options:t.selectOption},model:{value:t.select1,callback:function(e){t.select1=e},expression:"select1"}})],1)],1),t._v(" "),e("v-row",{staticClass:"page-row"},[e("v-col",{staticClass:"page-row__title page-row__border",attrs:{span:2}},[t._v("完整显示")]),t._v(" "),e("v-col",{attrs:{span:22}},[e("v-select",{attrs:{"is-multiple":"",name:"select-all","multiple-show-all":"",options:t.selectOption},model:{value:t.select2,callback:function(e){t.select2=e},expression:"select2"}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{select1:["1"],select2:["1"],selectOption:[{value:"1",label:"选项一"},{value:"2",label:"选项二"},{value:"3",label:"选项三"},{value:"4",label:"选项四"},{value:"5",label:"选项五"},{value:"6",label:"选项六"}]}}})}},n=n(1),n=Object(n.a)(l,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content reasy-doc"},[e._m(0),t("p",[e._v("当选项过多时，使用下拉菜单展示并选择。")]),e._m(1),e._m(2),e._m(3),e._m(4),t("demo-block",[t("template",{slot:"source"},[t("mo-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-select v-model="select1" name="select" :options="selectOption"></v-select>\n\n<script>\n  export default {\n    data() {\n      return {\n        select1: "1",\n        selectOption: [\n          {\n            value: "1",\n            label: "选项一"\n          },\n          {\n            value: "2",\n            label: "选项二"\n          },\n          {\n            value: "3",\n            label: "选项三"\n          },\n          {\n            value: "4",\n            label: "选项四"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(5),e._m(6),t("demo-block",[t("template",{slot:"source"},[t("mo-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-select v-model="select1" name="select-num" :options="selectOption"></v-select>\n<script>\n  export default {\n    data() {\n      return {\n        select1: "1",\n        selectOption: [1, 2, 3, 4, 5]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(7),e._m(8),t("demo-block",[t("template",{slot:"source"},[t("mo-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-select v-model="select1" name="select-tem" :options="selectOption">\n  <template v-slot="slotProps">\n    <li>自定义列-{{slotProps.value}}</li>\n  </template>\n</v-select>\n<script>\n  export default {\n    data() {\n      return {\n        select1: "white",\n        selectOption: ["red", "black", "white", "blue", "gray"]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(9),t("p",[e._v("选择器禁用")]),t("demo-block",[t("template",{slot:"source"},[t("mo-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-select v-model="select1" name="select-d" disabled :options="selectOption"></v-select>\n\n<script>\n  export default {\n    data() {\n      return {\n        select1: "1",\n        selectOption: [\n          {\n            value: "1",\n            label: "选项一"\n          },\n          {\n            value: "2",\n            label: "选项二"\n          },\n          {\n            value: "3",\n            label: "选项三"\n          },\n          {\n            value: "4",\n            label: "选项四"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),t("p",[e._v("选项禁用")]),t("demo-block",[t("template",{slot:"source"},[t("mo-demo4")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-select v-model="select1" name="select-3" :options="selectOption"></v-select>\n<script>\n  export default {\n    data() {\n      return {\n        select1: "1",\n        selectOption: [\n          {\n            value: "1",\n            label: "选项一"\n          },\n          {\n            value: "2",\n            label: "选项二",\n            disabled: true\n          },\n          {\n            value: "3",\n            label: "选项三"\n          },\n          {\n            value: "4",\n            label: "选项四"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(10),e._m(11),t("demo-block",[t("template",{slot:"source"},[t("mo-demo5")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-select\n  v-model="select1"\n   name="select-manual"\n  is-manual\n  manual-text="其他选项"\n  :options="selectOption"\n></v-select>\n\n<script>\n  export default {\n    data() {\n      return {\n        select1: "1",\n        selectOption: [\n          {\n            value: "1",\n            label: "选项一"\n          },\n          {\n            value: "2",\n            label: "选项二"\n          },\n          {\n            value: "3",\n            label: "选项三"\n          },\n          {\n            value: "4",\n            label: "选项四"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(12),e._m(13),t("demo-block",[t("template",{slot:"source"},[t("mo-demo6")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-select v-model="select1" name="select-clear" is-clear :options="selectOption"></v-select>\n\n<script>\n  export default {\n    data() {\n      return {\n        select1: "1",\n        selectOption: [\n          {\n            value: "1",\n            label: "选项一"\n          },\n          {\n            value: "2",\n            label: "选项二"\n          },\n          {\n            value: "3",\n            label: "选项三"\n          },\n          {\n            value: "4",\n            label: "选项四"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(14),e._m(15),t("demo-block",[t("template",{slot:"source"},[t("mo-demo7")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-select v-model="select" name="select-search" is-search :options="selectOption"></v-select>\n\n<script>\n  export default {\n    data() {\n      return {\n        select: "1",\n        selectOption: [\n          {\n            value: "1",\n            label: "选项一"\n          },\n          {\n            value: "2",\n            label: "选项二"\n          },\n          {\n            value: "3",\n            label: "选项三"\n          },\n          {\n            value: "4",\n            label: "选项四"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(16),e._m(17),t("demo-block",[t("template",{slot:"source"},[t("mo-demo8")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-row class="page-row">\n  <v-col :span="2" class="page-row__title page-row__border">top</v-col>\n  <v-col :span="22">\n    <v-select\n      v-model="select1"\n      name="select-top"\n      position="top"\n      :options="selectOption"\n    ></v-select>\n  </v-col>\n</v-row>\n<v-row class="page-row">\n  <v-col :span="2" class="page-row__title page-row__border">bottom</v-col>\n  <v-col :span="22">\n    <v-select\n      v-model="select1"\n      position="bottom"\n      name="select-5"\n      :options="selectOption"\n    ></v-select>\n  </v-col>\n</v-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        select1: "1",\n        selectOption: [\n          {\n            value: "1",\n            label: "选项一"\n          },\n          {\n            value: "2",\n            label: "选项二"\n          },\n          {\n            value: "3",\n            label: "选项三"\n          },\n          {\n            value: "4",\n            label: "选项四"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(18),e._m(19),t("demo-block",[t("template",{slot:"source"},[t("mo-demo9")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-row class="page-row">\n  <v-col :span="2" class="page-row__title page-row__border">省略显示</v-col>\n  <v-col :span="22">\n    <v-select\n      v-model="select1"\n      is-multiple\n      name="select-mul"\n      :multiple-limit="4"\n      :options="selectOption"\n    ></v-select>\n  </v-col>\n</v-row>\n\n<v-row class="page-row">\n  <v-col :span="2" class="page-row__title page-row__border">完整显示</v-col>\n  <v-col :span="22">\n    <v-select\n      v-model="select2"\n      is-multiple\n      name="select-all"\n      multiple-show-all\n      :options="selectOption"\n    ></v-select>\n  </v-col>\n</v-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        select1: ["1"],\n        select2: ["1"],\n        selectOption: [\n          {\n            value: "1",\n            label: "选项一"\n          },\n          {\n            value: "2",\n            label: "选项二"\n          },\n          {\n            value: "3",\n            label: "选项三"\n          },\n          {\n            value: "4",\n            label: "选项四"\n          },\n          {\n            value: "5",\n            label: "选项五"\n          },\n          {\n            value: "6",\n            label: "选项六"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(20),e._m(21),e._m(22),e._m(23),e._m(24),e._m(25),e._m(26),e._m(27),e._m(28),t("side-link")],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"xuan-ze-qi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xuan-ze-qi"}},[e._v("¶")]),e._v(" 选择器")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"an-xu-yin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[e._v("¶")]),e._v(" 按需引用")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("该组件依赖于"),t("code",[e._v("v-scroll")]),e._v("组件。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("pre",[t("code",{staticClass:"language-js"},[e._v('import { Base, Scroll, Select } from "@reasy-team/reasy-ui";\n\nVue.use(Scroll);\nVue.use(Select);\nVue.use(Base);\n')])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"ji-ben-yong-fa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa"}},[e._v("¶")]),e._v(" 基本用法")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"xuan-xiang-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xuan-xiang-pei-zhi"}},[e._v("¶")]),e._v(" 选项配置")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("options")]),e._v("支持数字")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"zi-ding-yi-xuan-xiang-html-jie-gou"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-xuan-xiang-html-jie-gou"}},[e._v("¶")]),e._v(" 自定义选项 HTML 结构")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("通过设定默认的"),t("code",[e._v("slot")]),e._v("可以自定义显示的内容，"),t("code",[e._v("slotProps")]),e._v("包含"),t("code",[e._v("label")]),e._v("和"),t("code",[e._v("value")]),e._v("两个属性。")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"jin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong"}},[e._v("¶")]),e._v(" 禁用")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"zhi-chi-shu-ru"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zhi-chi-shu-ru"}},[e._v("¶")]),e._v(" 支持输入")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("is-manual")]),e._v("支持手动配置，"),t("code",[e._v("manual-text")]),e._v("手动配置的文字")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"zhi-chi-qing-chu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zhi-chi-qing-chu"}},[e._v("¶")]),e._v(" 支持清除")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("is-clear")]),e._v("支持清除数据")])},function(){var e=this.$createElement,e=this._self._c||e;return e("h3",{attrs:{id:"zhi-chi-sou-suo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zhi-chi-sou-suo"}},[this._v("¶")]),this._v(" 支持搜索")])},function(){var e=this.$createElement,e=this._self._c||e;return e("p",[e("code",[this._v("is-search")]),this._v("支持搜索数据")])},function(){var e=this.$createElement,e=this._self._c||e;return e("h3",{attrs:{id:"xuan-xiang-wei-zhi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xuan-xiang-wei-zhi"}},[this._v("¶")]),this._v(" 选项位置")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("position")]),e._v("支持配置选项的位置，"),t("code",[e._v("top")]),e._v("选项出现在上面，"),t("code",[e._v("bottom")]),e._v("选项出现在下面，"),t("code",[e._v("auto")]),e._v("选项根据下拉框位置自适应，默认值"),t("code",[e._v("auto")])])},function(){var e=this.$createElement,e=this._self._c||e;return e("h3",{attrs:{id:"zhi-chi-duo-xuan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zhi-chi-duo-xuan"}},[this._v("¶")]),this._v(" 支持多选")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[t("code",[e._v("is-multiple")]),e._v("支持多项选择，"),t("code",[e._v("multiple-limit")]),e._v("多选个数限制，"),t("code",[e._v("0")]),e._v("表示无限制， "),t("code",[e._v("multiple-show-all")]),e._v("显示所有已选项")])},function(){var e=this.$createElement,e=this._self._c||e;return e("h3",{attrs:{id:"v-select-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-select-attributes"}},[this._v("¶")]),this._v(" v-select Attributes")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("v-model")]),t("td",[e._v("绑定值，多选时值为数组，单选时为字符串")]),t("td",[e._v("string / Array / Number / Boolean")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("no-id")]),t("td",[e._v("是否不需要id，为false则以"),t("code",[e._v("name")]),e._v("作为id，除特殊情况，表单中使用必须添加id")]),t("td",[e._v("boolean")]),t("td",[e._v("-")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("name")]),t("td",[e._v("原生属性name，同时渲染为id属性，"),t("strong",[e._v("必填")])]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("width")]),t("td",[e._v("选择器宽度")]),t("td",[e._v("string / Number")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("is-clear")]),t("td",[e._v("是否可以清空选项")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("is-search")]),t("td",[e._v("是否可以搜索")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("is-multiple")]),t("td",[e._v("是否可以多选，支持多选时不能配置自定义")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("multiple-limit")]),t("td",[e._v("多选时用户最多可以选择的个数，为 0 则不限制")]),t("td",[e._v("number")]),t("td",[e._v("—")]),t("td",[e._v("0")])]),t("tr",[t("td",[e._v("multiple-show-all")]),t("td",[e._v("多选时是否展示所有的已选值")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("占位符")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("请选择")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("输入框尺寸")]),t("td",[e._v("string")]),t("td",[e._v("S / M / L")]),t("td",[e._v("M")])]),t("tr",[t("td",[e._v("options")]),t("td",[e._v("下拉选项数组对象，支持数据选项为对象和字符串")]),t("td",[e._v("Array")]),t("td",[e._v("—")]),t("td",[e._v("[]")])]),t("tr",[t("td",[e._v("is-manual")]),t("td",[e._v("是否支持手动输入")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])]),t("tr",[t("td",[e._v("manual-text")]),t("td",[e._v("手动输入时选项的文字")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("自定义")])]),t("tr",[t("td",[e._v("position")]),t("td",[e._v("选项框位置，对应上 、下、 自适应")]),t("td",[e._v("string")]),t("td",[e._v("top / bottom / auto")]),t("td",[e._v("auto")])]),t("tr",[t("td",[e._v("display-options-number")]),t("td",[e._v("设置可显示选项的数量，如 options.length 大于该值，则显示滚动条")]),t("td",[e._v("number")]),t("td",[e._v("-")]),t("td",[e._v("5")])]),t("tr",[t("td",[e._v("unit")]),t("td",[e._v("手动输入时，输入框支持的单位，同 v-input")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("-")])])])])},function(){var e=this.$createElement,e=this._self._c||e;return e("p",[e("strong",[this._v("当支持手动输入时，支持输入框组件的属性")])])},function(){var e=this.$createElement,e=this._self._c||e;return e("h3",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[this._v("¶")]),this._v(" options")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("选择器选项配置，支持"),t("code",[e._v("Object")]),e._v("，"),t("code",[e._v("Boolean")]),e._v("，"),t("code",[e._v("Number")]),e._v("，"),t("code",[e._v("String")])])},function(){var e=this.$createElement,e=this._self._c||e;return e("ul",[e("li",[this._v("数组选项为非对象时，显示文本和值一致")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("label")]),t("td",[e._v("选项文字")]),t("td",[e._v("string")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("value")]),t("td",[e._v("选项的值")]),t("td",[e._v("string / number / boolean")]),t("td",[e._v("—")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("disabled")]),t("td",[e._v("是否禁用此项")]),t("td",[e._v("boolean")]),t("td",[e._v("—")]),t("td",[e._v("false")])])])])},function(){var e=this.$createElement,e=this._self._c||e;return e("h3",{attrs:{id:"shi-jian-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shi-jian-events"}},[this._v("¶")]),this._v(" 事件 Events")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("事件名")]),t("th",[e._v("说明")]),t("th",[e._v("参数")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[e._v("值改变时执行（失焦或者选择选项后）")]),t("td",[e._v("改变后的值")])]),t("tr",[t("td",[e._v("input")]),t("td",[e._v("输入框值改变时触发")]),t("td",[e._v("输入框的值")])]),t("tr",[t("td",[e._v("blur")]),t("td",[e._v("输入框失焦时触发，不支持手动输入时不执行")]),t("td",[e._v("event")])]),t("tr",[t("td",[e._v("focus")]),t("td",[e._v("输入框聚焦时触发，不支持手动输入时不执行")]),t("td",[e._v("event")])]),t("tr",[t("td",[e._v("clear")]),t("td",[e._v("点击清空时触发")]),t("td",[e._v("—")])]),t("tr",[t("td",[e._v("visible-change")]),t("td",[e._v("下拉框出现/隐藏时触发")]),t("td",[e._v("出现则为 true，隐藏则为 false")])])])])}],!1,null,null,null);t.default=n.exports}}]);