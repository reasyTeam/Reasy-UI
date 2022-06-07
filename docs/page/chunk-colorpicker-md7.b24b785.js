(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{252:function(t,e,r){"use strict";r.r(e);var o=r(41),o={name:"component-doc",components:{"mo-demo0":Object(o.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("div",{staticClass:"input-group"},[t("v-colorpicker",{attrs:{name:"cp-color"},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}})],1)])},staticRenderFns:[]},{data:function(){return{color:[211,233,211]}}}),"mo-demo1":Object(o.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("div",{staticClass:"input-group"},[t("v-colorpicker",{attrs:{colors:e.colors,name:"colorpicker-color"},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}})],1)])},staticRenderFns:[]},{data:function(){return{color:"#fff",colors:["#eee","rgb(222, 222, 222)","#8d8d8d",[1,66,88]]}}}),"mo-demo2":Object(o.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("div",{staticClass:"input-group"},[t("v-colorpicker",{attrs:{format:"hex",name:"colorpicker-self"},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}})],1)])},staticRenderFns:[]},{data:function(){return{color:"#8d8d8d"}}}),"mo-demo3":Object(o.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("div",{staticClass:"input-group"},[t("v-colorpicker",{attrs:{disabled:!0,name:"colorpicker-disabled"},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}})],1)])},staticRenderFns:[]},{data:function(){return{color:"rgb(233, 211, 234)"}}})}},r=r(1),r=Object(r.a)(o,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content reasy-doc"},[t._m(0),e("p",[t._v("用于颜色选择，支持 RGB 、 HEX 或数组颜色格式，支持颜色预设。")]),t._m(1),t._m(2),t._m(3),e("demo-block",[e("template",{slot:"source"},[e("mo-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="input-group">\n  <v-colorpicker v-model="color" name="cp-color"></v-colorpicker>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: [211, 233, 211]\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(4),t._m(5),e("demo-block",[e("template",{slot:"source"},[e("mo-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="input-group">\n  <v-colorpicker v-model="color" :colors="colors" name="colorpicker-color"></v-colorpicker>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: "#fff",\n        colors: ["#eee", "rgb(222, 222, 222)", "#8d8d8d", [1, 66, 88]]\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(6),t._m(7),e("demo-block",[e("template",{slot:"source"},[e("mo-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="input-group">\n  <v-colorpicker v-model="color" format="hex"  name="colorpicker-self"></v-colorpicker>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: "#8d8d8d"\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(8),t._m(9),e("demo-block",[e("template",{slot:"source"},[e("mo-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="input-group">\n  <v-colorpicker v-model="color" :disabled="true" name="colorpicker-disabled"></v-colorpicker>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        color: "rgb(233, 211, 234)"\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(10),t._m(11),t._m(12),t._m(13),e("side-link")],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"yan-se-xuan-ze-qi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yan-se-xuan-ze-qi"}},[t._v("¶")]),t._v(" 颜色选择器")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"an-xu-yin-yong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",{staticClass:"language-js"},[t._v('import { Base, Colorpicker, Input } from "@reasy-team/reasy-ui";\n\nVue.use(ColorPicker);\nVue.use(Input);\nVue.use(Base);\n')])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"ji-chu-shi-li"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-shi-li"}},[t._v("¶")]),t._v(" 基础示例")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"yan-se-yu-she"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yan-se-yu-she"}},[t._v("¶")]),t._v(" 颜色预设")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("colors")]),t._v("配置颜色预设盘的可选颜色，支持 RGB 、 HEX 或数组颜色格式")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"zi-ding-yi-fan-hui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-fan-hui"}},[t._v("¶")]),t._v(" 自定义返回")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("format")]),t._v(" 为自定义返回值，支持 RGB 、 HEX 或数组三种格式的返回，分别对应 format 值为"),e("code",[t._v("rgb")]),t._v("、"),e("code",[t._v("hex")]),t._v("、"),e("code",[t._v("array")]),t._v("，默认为"),e("code",[t._v("rgb")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"jin-yong-yang-shi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong-yang-shi"}},[t._v("¶")]),t._v(" 禁用样式")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[e("code",[t._v("disabled")]),t._v(" 配置颜色选择器是否禁用")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"v-colorpicker-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-colorpicker-attributes"}},[t._v("¶")]),t._v(" v-colorpicker Attributes")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("v-model")]),e("td",[t._v("绑定值")]),e("td",[t._v("string")]),e("td",[t._v("RGB 、 HEX 或数组颜色格式")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("no-id")]),e("td",[t._v("是否不需要id，为false则以"),e("code",[t._v("name")]),t._v("作为id，除特殊情况，表单中使用必须添加id")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("name")]),e("td",[t._v("原生属性name，同时渲染为id属性，当"),e("code",[t._v("no-id")]),t._v("为false时"),e("strong",[t._v("必填")])]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("colors")]),e("td",[t._v("预设可选颜色")]),e("td",[t._v("array")]),e("td",[t._v("RGB 、 HEX 或数组颜色格式")]),e("td",[t._v('["#39B09A","#1599FF","#FF9800","#0165B1","#A90000","#2D3195","#727272","#D2B98D"]')])]),e("tr",[e("td",[t._v("format")]),e("td",[t._v("返回的颜色格式")]),e("td",[t._v("string")]),e("td",[t._v("rgb / hex / array")]),e("td",[t._v("rgb")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("是否禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("show-panel")]),e("td",[t._v("是否显示颜色预设盘")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"v-colorpicker-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-colorpicker-events"}},[t._v("¶")]),t._v(" v-colorpicker Events")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v("值改变时执行")]),e("td",[t._v("改变后的值")])]),e("tr",[e("td",[t._v("input")]),e("td",[t._v("输入框值改变时触发")]),e("td",[t._v("输入框的值")])]),e("tr",[e("td",[t._v("blur")]),e("td",[t._v("输入框失焦时触发")]),e("td",[t._v("event")])]),e("tr",[e("td",[t._v("focus")]),e("td",[t._v("输入框聚焦时触发")]),e("td",[t._v("event")])]),e("tr",[e("td",[t._v("click-panel")]),e("td",[t._v("点击颜色预设盘时触发")]),e("td",[t._v("当前点击的颜色")])])])])}],!1,null,null,null);e.default=r.exports}}]);