(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{208:function(t,n,e){"use strict";e.r(n);var r=e(40),i={name:"component-doc",components:{"mo-demo0":Object(r.a)({render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"input-group"},[e("v-input-number",{attrs:{size:"L"},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1),n._v(" "),e("div",{staticClass:"input-group"},[e("v-input-number",{attrs:{size:"M"},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1),n._v(" "),e("div",{staticClass:"input-group"},[e("v-input-number",{attrs:{size:"S"},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1)])},staticRenderFns:[]},{data:function(){return{num:5}}}),"mo-demo1":Object(r.a)({render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("v-input-number",{attrs:{disabled:""},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}}),n._v(" "),e("v-input-number",{attrs:{min:0,max:10,disabled:"","controls-position":"right"},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:5}}}),"mo-demo2":Object(r.a)({render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("v-input-number",{attrs:{min:1,max:10},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:5}}}),"mo-demo3":Object(r.a)({render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("v-input-number",{attrs:{"is-controls":!1},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:0}}}),"mo-demo4":Object(r.a)({render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("v-input-number",{attrs:{min:0,max:10,"controls-position":"right"},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:0}}}),"mo-demo5":Object(r.a)({render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("v-input-number",{attrs:{min:0,max:10,step:2},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:0}}}),"mo-demo6":Object(r.a)({render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("v-input-number",{attrs:{min:0,max:10,precision:2},model:{value:n.num,callback:function(t){n.num=t},expression:"num"}})],1)},staticRenderFns:[]},{data:function(){return{num:0}}})}},a=e(0),s=Object(a.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"content reasy-doc"},[t._m(0),t._m(1),t._m(2),e("demo-block",[e("template",{slot:"source"},[e("mo-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="input-group">\n  <v-input-number size="L" v-model="num"></v-input-number>\n</div>\n<div class="input-group">\n  <v-input-number size="M" v-model="num"></v-input-number>\n</div>\n<div class="input-group">\n  <v-input-number size="S" v-model="num"></v-input-number>\n</div>\n<script>\n  export default {\n    data() {\n      return {\n        num: 5\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(3),t._m(4),e("demo-block",[e("template",{slot:"source"},[e("mo-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-input-number disabled v-model="num"></v-input-number>\n\n<v-input-number\n  v-model="num"\n  :min="0"\n  :max="10"\n  disabled\n  controls-position="right"\n></v-input-number>\n\n<script>\n  export default {\n    data() {\n      return {\n        num: 5\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(5),t._m(6),e("demo-block",[e("template",{slot:"source"},[e("mo-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-input-number v-model="num" :min="1" :max="10"></v-input-number>\n<script>\n  export default {\n    data() {\n      return {\n        num: 5\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(7),t._m(8),e("p",[t._v("不显示控制器按钮")]),e("demo-block",[e("template",{slot:"source"},[e("mo-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-input-number v-model="num" :is-controls="false"></v-input-number>\n<script>\n  export default {\n    data() {\n      return {\n        num: 0\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(9),t._m(10),e("demo-block",[e("template",{slot:"source"},[e("mo-demo4")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-input-number\n  v-model="num"\n  :min="0"\n  :max="10"\n  controls-position="right"\n></v-input-number>\n<script>\n  export default {\n    data() {\n      return {\n        num: 0\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(11),t._m(12),e("demo-block",[e("template",{slot:"source"},[e("mo-demo5")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-input-number v-model="num" :min="0" :max="10" :step="2"></v-input-number>\n<script>\n  export default {\n    data() {\n      return {\n        num: 0\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(13),t._m(14),e("demo-block",[e("template",{slot:"source"},[e("mo-demo6")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-input-number\n  v-model="num"\n  :min="0"\n  :max="10"\n  :precision="2"\n></v-input-number>\n<script>\n  export default {\n    data() {\n      return {\n        num: 0\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(15),t._m(16),t._m(17),t._m(18),e("side-link")],1)},[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h2",{attrs:{id:"ji-shu-qi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-shu-qi"}},[t._v("¶")]),t._v(" 计数器")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h3",{attrs:{id:"shu-ru-kuang-da-xiao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shu-ru-kuang-da-xiao"}},[t._v("¶")]),t._v(" 输入框大小")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("code",[t._v("size")]),t._v("配置输入框大小，大中小分别为 "),e("code",[t._v("L")]),t._v("，"),e("code",[t._v("M")]),t._v("，"),e("code",[t._v("S")]),t._v("，默认为"),e("code",[t._v("M")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h3",{attrs:{id:"jin-yong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong"}},[t._v("¶")]),t._v(" 禁用")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("code",[t._v("disabled")]),t._v("配置是否禁用")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h3",{attrs:{id:"ji-shu-qi-fan-wei"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-shu-qi-fan-wei"}},[t._v("¶")]),t._v(" 计数器范围")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("code",[t._v("min")]),t._v("和"),e("code",[t._v("max")]),t._v("控制计数器可配置的范围")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h3",{attrs:{id:"kong-zhi-qi-an-niu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kong-zhi-qi-an-niu"}},[t._v("¶")]),t._v(" 控制器按钮")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("code",[t._v("is-controls")]),t._v("控制计数器按钮，默认为"),e("code",[t._v("true")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h3",{attrs:{id:"kong-zhi-qi-wei-zhi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kong-zhi-qi-wei-zhi"}},[t._v("¶")]),t._v(" 控制器位置")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("code",[t._v("controls-position")]),t._v("控制器位置，默认为空值，控制按钮在输入框两侧，可选值"),e("code",[t._v("right")]),t._v("，按钮位置在右侧")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h3",{attrs:{id:"bu-chang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bu-chang"}},[t._v("¶")]),t._v(" 步长")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("code",[t._v("step")]),t._v("配置计数器的步长，默认为"),e("code",[t._v("1")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h3",{attrs:{id:"jing-du"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jing-du"}},[t._v("¶")]),t._v(" 精度")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("code",[this._v("precision")]),this._v("配置计数器的精度")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"v-input-number-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v-input-number-attributes"}},[this._v("¶")]),this._v(" v-input-number Attributes")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("v-model")]),e("td",[t._v("绑定值")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("name")]),e("td",[t._v("原生属性")]),e("td",[t._v("string")]),e("td"),e("td")]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("是否禁用")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("width")]),e("td",[t._v("输入框长度，支持数字和字符串，如 70 或 70px 或 70%")]),e("td",[t._v("string / number")]),e("td",[t._v("—")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("min")]),e("td",[t._v("输入框最小值")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("-Infinity")])]),e("tr",[e("td",[t._v("max")]),e("td",[t._v("输入框最大值")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("Infinity")])]),e("tr",[e("td",[t._v("is-controls")]),e("td",[t._v("输入框右侧是否有控制器")]),e("td",[t._v("boolean")]),e("td",[t._v("—")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("controls-position")]),e("td",[t._v("控制器按钮位置")]),e("td",[t._v("string")]),e("td",[t._v("right")]),e("td",[t._v("—")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("输入框尺寸")]),e("td",[t._v("string")]),e("td",[t._v("S / M / L")]),e("td",[t._v("M")])]),e("tr",[e("td",[t._v("step")]),e("td",[t._v("步长")]),e("td",[t._v("number")]),e("td",[t._v("—")]),e("td",[t._v("1")])]),e("tr",[e("td",[t._v("precision")]),e("td",[t._v("数值精度，小于步长精度时计算会用步长的精度")]),e("td",[t._v("number")]),e("td",[t._v("0 或正整数")]),e("td",[t._v("—")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"v-input-number-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v-input-number-events"}},[this._v("¶")]),this._v(" v-input-number Events")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("change")]),e("td",[t._v("值改变时执行")]),e("td",[t._v("改变后的值")])])])])}],!1,null,null,null);n.default=s.exports}}]);