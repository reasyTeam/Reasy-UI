(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{246:function(t,n,e){"use strict";e.r(n);var r=e(34),r={name:"component-doc",components:{"mo-demo0":Object(r.a)({render:function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("div",[t("div",{staticClass:"input-group"},[t("v-input-number",{attrs:{size:"L"},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1),n._v(" "),t("div",{staticClass:"input-group"},[t("v-input-number",{attrs:{size:"M"},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1),n._v(" "),t("div",{staticClass:"input-group"},[t("v-input-number",{attrs:{size:"S"},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1),n._v(" "),t("div",{staticClass:"input-group"},[t("v-input-number",{attrs:{size:"L","controls-position":"right"},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1),n._v(" "),t("div",{staticClass:"input-group"},[t("v-input-number",{attrs:{size:"M","controls-position":"right"},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1),n._v(" "),t("div",{staticClass:"input-group"},[t("v-input-number",{attrs:{size:"S","controls-position":"right"},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1)])},staticRenderFns:[]},{data:function(){return{num:5}}}),"mo-demo1":Object(r.a)({render:function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("div",[t("v-input-number",{attrs:{disabled:""},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}}),n._v(" "),t("v-input-number",{attrs:{min:0,max:10,disabled:"","controls-position":"right"},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:5}}}),"mo-demo2":Object(r.a)({render:function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("div",[t("v-input-number",{attrs:{min:1,max:10},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:5}}}),"mo-demo3":Object(r.a)({render:function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("div",[t("v-input-number",{attrs:{"is-controls":!1},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:0}}}),"mo-demo4":Object(r.a)({render:function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("div",[t("v-input-number",{attrs:{min:0,max:10,"controls-position":"right"},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:0}}}),"mo-demo5":Object(r.a)({render:function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("div",[t("v-input-number",{attrs:{min:0,max:10,step:2},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:0}}}),"mo-demo6":Object(r.a)({render:function(){var n=this,t=n.$createElement,t=n._self._c||t;return t("div",[t("v-input-number",{attrs:{min:0,max:10,precision:2},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:0}}})}},e=e(1),r=Object(e.a)(r,function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("section",{staticClass:"content reasy-doc"},[t._m(0),n("p",[t._v("通过鼠标或键盘，输入范围内的数值。")]),t._m(1),t._m(2),t._m(3),t._m(4),n("demo-block",[n("template",{slot:"source"},[n("mo-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="input-group">\n  <v-input-number size="L" v-model="num"></v-input-number>\n</div>\n<div class="input-group">\n  <v-input-number size="M" v-model="num"></v-input-number>\n</div>\n<div class="input-group">\n  <v-input-number size="S" v-model="num"></v-input-number>\n</div>\n<div class="input-group">\n  <v-input-number size="L" v-model="num" controls-position="right"></v-input-number>\n</div>\n<div class="input-group">\n  <v-input-number size="M" v-model="num" controls-position="right"></v-input-number>\n</div>\n<div class="input-group">\n  <v-input-number size="S" v-model="num" controls-position="right"></v-input-number>\n</div>\n<script>\n  export default {\n    data() {\n      return {\n        num: 5\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(5),t._m(6),n("demo-block",[n("template",{slot:"source"},[n("mo-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-input-number disabled v-model="num"></v-input-number>\n\n<v-input-number\n  v-model="num"\n  :min="0"\n  :max="10"\n  disabled\n  controls-position="right"\n></v-input-number>\n\n<script>\n  export default {\n    data() {\n      return {\n        num: 5\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(7),t._m(8),n("demo-block",[n("template",{slot:"source"},[n("mo-demo2")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-input-number v-model="num" :min="1" :max="10"></v-input-number>\n<script>\n  export default {\n    data() {\n      return {\n        num: 5\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(9),t._m(10),n("p",[t._v("不显示控制器按钮")]),n("demo-block",[n("template",{slot:"source"},[n("mo-demo3")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-input-number v-model="num" :is-controls="false"></v-input-number>\n<script>\n  export default {\n    data() {\n      return {\n        num: 0\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(11),t._m(12),n("demo-block",[n("template",{slot:"source"},[n("mo-demo4")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-input-number\n  v-model="num"\n  :min="0"\n  :max="10"\n  controls-position="right"\n></v-input-number>\n<script>\n  export default {\n    data() {\n      return {\n        num: 0\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(13),t._m(14),n("demo-block",[n("template",{slot:"source"},[n("mo-demo5")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-input-number v-model="num" :min="0" :max="10" :step="2"></v-input-number>\n<script>\n  export default {\n    data() {\n      return {\n        num: 0\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(15),t._m(16),n("demo-block",[n("template",{slot:"source"},[n("mo-demo6")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-input-number\n  v-model="num"\n  :min="0"\n  :max="10"\n  :precision="2"\n></v-input-number>\n<script>\n  export default {\n    data() {\n      return {\n        num: 0\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(17),t._m(18),t._m(19),t._m(20),n("side-link")],1)},[function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h2",{attrs:{id:"ji-shu-qi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-shu-qi"}},[t._v("¶")]),t._v(" 计数器")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h3",{attrs:{id:"an-xu-yin-yong"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("pre",[n("code",{staticClass:"language-js"},[t._v('// 依赖于v-button\nimport { Base, Input, Button } from "@reasy-team/reasy-ui";\n\nVue.use(Input);\nVue.use(Button);\nVue.use(Base);\n')])])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h3",{attrs:{id:"shu-ru-kuang-da-xiao"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shu-ru-kuang-da-xiao"}},[t._v("¶")]),t._v(" 输入框大小")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("p",[n("code",[t._v("size")]),t._v("配置输入框大小，大中小分别为 "),n("code",[t._v("L")]),t._v("，"),n("code",[t._v("M")]),t._v("，"),n("code",[t._v("S")]),t._v("，默认为"),n("code",[t._v("M")])])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h3",{attrs:{id:"jin-yong"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong"}},[t._v("¶")]),t._v(" 禁用")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("p",[n("code",[t._v("disabled")]),t._v("配置是否禁用")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h3",{attrs:{id:"ji-shu-qi-fan-wei"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-shu-qi-fan-wei"}},[t._v("¶")]),t._v(" 计数器范围")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("p",[n("code",[t._v("min")]),t._v("和"),n("code",[t._v("max")]),t._v("控制计数器可配置的范围")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h3",{attrs:{id:"kong-zhi-qi-an-niu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kong-zhi-qi-an-niu"}},[t._v("¶")]),t._v(" 控制器按钮")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("p",[n("code",[t._v("is-controls")]),t._v("控制计数器按钮，默认为"),n("code",[t._v("true")])])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h3",{attrs:{id:"kong-zhi-qi-wei-zhi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kong-zhi-qi-wei-zhi"}},[t._v("¶")]),t._v(" 控制器位置")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("p",[n("code",[t._v("controls-position")]),t._v("控制器位置，默认为空值，控制按钮在输入框两侧，可选值"),n("code",[t._v("right")]),t._v("，按钮位置在右侧")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("h3",{attrs:{id:"bu-chang"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bu-chang"}},[t._v("¶")]),t._v(" 步长")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("p",[n("code",[t._v("step")]),t._v("配置计数器的步长，默认为"),n("code",[t._v("1")])])},function(){var t=this.$createElement,t=this._self._c||t;return t("h3",{attrs:{id:"jing-du"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jing-du"}},[this._v("¶")]),this._v(" 精度")])},function(){var t=this.$createElement,t=this._self._c||t;return t("p",[t("code",[this._v("precision")]),this._v("配置计数器的精度")])},function(){var t=this.$createElement,t=this._self._c||t;return t("h3",{attrs:{id:"v-input-number-attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-input-number-attributes"}},[this._v("¶")]),this._v(" v-input-number Attributes")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("v-model")]),n("td",[t._v("绑定值")]),n("td",[t._v("number")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("name")]),n("td",[t._v("原生属性")]),n("td",[t._v("string")]),n("td"),n("td")]),n("tr",[n("td",[t._v("disabled")]),n("td",[t._v("是否禁用")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("width")]),n("td",[t._v("输入框长度，支持数字和字符串，如 70 或 70px 或 70%")]),n("td",[t._v("string / number")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("min")]),n("td",[t._v("输入框最小值")]),n("td",[t._v("number")]),n("td",[t._v("—")]),n("td",[t._v("-Infinity")])]),n("tr",[n("td",[t._v("max")]),n("td",[t._v("输入框最大值")]),n("td",[t._v("number")]),n("td",[t._v("—")]),n("td",[t._v("Infinity")])]),n("tr",[n("td",[t._v("is-controls")]),n("td",[t._v("输入框右侧是否有控制器")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("true")])]),n("tr",[n("td",[t._v("controls-position")]),n("td",[t._v("控制器按钮位置")]),n("td",[t._v("string")]),n("td",[t._v("right")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("size")]),n("td",[t._v("输入框尺寸")]),n("td",[t._v("string")]),n("td",[t._v("S / M / L")]),n("td",[t._v("M")])]),n("tr",[n("td",[t._v("step")]),n("td",[t._v("步长")]),n("td",[t._v("number")]),n("td",[t._v("—")]),n("td",[t._v("1")])]),n("tr",[n("td",[t._v("precision")]),n("td",[t._v("数值精度，小于步长精度时计算会用步长的精度")]),n("td",[t._v("number")]),n("td",[t._v("0 或正整数")]),n("td",[t._v("—")])])])])},function(){var t=this.$createElement,t=this._self._c||t;return t("h2",{attrs:{id:"v-input-number-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-input-number-events"}},[this._v("¶")]),this._v(" v-input-number Events")])},function(){var t=this,n=t.$createElement,n=t._self._c||n;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),n("th",[t._v("说明")]),n("th",[t._v("参数")])])]),n("tbody",[n("tr",[n("td",[t._v("change")]),n("td",[t._v("值改变时执行")]),n("td",[t._v("改变后的值")])])])])}],!1,null,null,null);n.default=r.exports}}]);