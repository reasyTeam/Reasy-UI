(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{217:function(t,e,n){"use strict";n.r(e);var r=n(30),a={name:"component-doc",components:{"mo-demo0":Object(r.a)({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-form",{ref:"form"},[n("v-form-item",{attrs:{label:"IP/Mask等其它"}},[n("v-input-group",{attrs:{type:"ip"},model:{value:e.ip,callback:function(t){e.ip=t},expression:"ip"}})],1),e._v(" "),n("v-form-item",{attrs:{label:"MAC地址"}},[n("v-input-group",{attrs:{type:"mac"},model:{value:e.mac,callback:function(t){e.mac=t},expression:"mac"}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{ip:"192.168.0.1",mac:"C8:3A:35:21:22:11"}}}),"mo-demo1":Object(r.a)({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-input-group",{attrs:{"input-nums":3,splitter:"-",maxlength:4,allow:/[\da-f]/gi},model:{value:e.mac,callback:function(t){e.mac=t},expression:"mac"}})],1)},staticRenderFns:[]},{data:function(){return{mac:"C83A-3521-2211"}}}),"mo-demo2":Object(r.a)({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-input-group",{attrs:{splitter:"-","input-nums":2,allow:/\d/g,"auto-correction":["0-0","500-500"]},model:{value:e.num,callback:function(t){e.num=t},expression:"num"}}),e._v(" "),n("v-input-group",{attrs:{type:"ip","auto-correction":[[0,223],[0,255],[0,255],[0,221]]},model:{value:e.ip,callback:function(t){e.ip=t},expression:"ip"}})],1)},staticRenderFns:[]},{data:function(){return{num:"100-300",ip:"192.168.0.1"}}})}},i=n(1),o=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content reasy-doc"},[t._m(0),n("p",[t._v("多个输入框按自定义需求进行组合，生成不同的输入框组。")]),t._m(1),t._m(2),t._m(3),t._m(4),n("demo-block",[n("template",{slot:"source"},[n("mo-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-form ref="form">\n  <v-form-item label="IP/Mask等其它">\n    <v-input-group type="ip" v-model="ip"></v-input-group>\n  </v-form-item>\n  <v-form-item label="MAC地址">\n    <v-input-group type="mac" v-model="mac"></v-input-group>\n  </v-form-item>\n</v-form>\n\n<script>\n  export default {\n    data() {\n      return {\n        ip: "192.168.0.1",\n        mac: "C8:3A:35:21:22:11"\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(5),t._m(6),n("demo-block",[n("template",{slot:"source"},[n("mo-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-input-group\n  v-model="mac"\n  :input-nums="3"\n  splitter="-"\n  :maxlength="4"\n  :allow="/[\\da-f]/ig"\n></v-input-group>\n<script>\n  export default {\n    data() {\n      return {\n        mac: "C83A-3521-2211"\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(7),t._m(8),n("demo-block",[n("template",{slot:"source"},[n("mo-demo2")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v(' <v-input-group\n  v-model="num"\n  splitter="-"\n  :input-nums="2"\n  :allow="/\\d/g"\n  :auto-correction="[\'0-0\', \'500-500\']"\n></v-input-group>\n <v-input-group\n  type="ip"\n  v-model="ip"\n  :auto-correction="[\n    [0, 223],\n    [0, 255],\n    [0, 255],\n    [0, 221]\n  ]"\n></v-input-group>\n<script>\n  export default {\n    data() {\n      return {\n        num: "100-300",\n        ip: "192.168.0.1"\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),n("side-link")],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"shu-ru-kuang-zu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shu-ru-kuang-zu"}},[t._v("¶")]),t._v(" 输入框组")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"an-xu-yin-yong"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-js"},[t._v('import { Input } from "@reasy-team/reasy-ui";\n\nVue.use(Input);\n')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"shu-ru-kuang-da-xiao"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shu-ru-kuang-da-xiao"}},[t._v("¶")]),t._v(" 输入框大小")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("code",[t._v("type")]),t._v("输入框组内置类型，可选值"),n("code",[t._v("ip")]),t._v("，"),n("code",[t._v("mac")]),t._v("，默认为空")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"zi-ding-yi-shu-ru-kuang-zu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-shu-ru-kuang-zu"}},[t._v("¶")]),t._v(" 自定义输入框组")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("code",[t._v("input-nums")]),t._v("控制输入框个数，"),n("code",[t._v("splitter")]),t._v("输入框分隔符，"),n("code",[t._v("maxlength")]),t._v("每个输入框可输入的字符长度，"),n("code",[t._v("allow")]),t._v("输入框允许输入字符的正则表达式")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"zi-dong-jiu-cuo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zi-dong-jiu-cuo"}},[t._v("¶")]),t._v(" 自动纠错")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("code",[t._v("auto-correction")]),t._v("配置输入框的纠错范围，可选两种数据格式进行配置，第一种：数组的子元素格式和"),n("code",[t._v("v-model")]),t._v("相同，第二种：数组的子元素格式为包含范围的数组")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"v-input-group-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v-input-group-attributes"}},[t._v("¶")]),t._v(" v-input-group Attributes")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("v-model")]),n("td",[t._v("绑定值")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("type")]),n("td",[t._v("输入框组类型")]),n("td",[t._v("string")]),n("td",[t._v("ip / mac")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("name")]),n("td",[t._v("原生属性")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("disabled")]),n("td",[t._v("是否禁用")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("width")]),n("td",[t._v("输入框长度，支持数字和字符串，如 70 或 70px 或 70%")]),n("td",[t._v("string / number")]),n("td"),n("td")]),n("tr",[n("td",[t._v("size")]),n("td",[t._v("输入框大小")]),n("td",[t._v("string")]),n("td",[t._v("S / M / L")]),n("td",[t._v("M")])]),n("tr",[n("td",[t._v("input-nums")]),n("td",[t._v("输入框个数（自定义类型时需要定义输入框组个数）")]),n("td",[t._v("number")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("splitter")]),n("td",[t._v("输入框的分隔符")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("maxlength")]),n("td",[t._v("每个输入框最大输入长度")]),n("td",[t._v("number")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("allow")]),n("td",[t._v("输入框允许输入的字符的正则表达式")]),n("td",[t._v("RegExp")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("auto-correction")]),n("td",[t._v("自动纠错，仅支持按范围进行数字纠错")]),n("td",[t._v("Array")]),n("td",[t._v("—")]),n("td",[t._v("[]")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("blockquote",[n("p",[t._v("type为IP时，可输入ip或mask等类似格式字符串")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"v-input-group-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v-input-group-events"}},[t._v("¶")]),t._v(" v-input-group Events")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),n("th",[t._v("说明")]),n("th",[t._v("参数")])])]),n("tbody",[n("tr",[n("td",[t._v("change")]),n("td",[t._v("值改变时执行")]),n("td",[t._v("改变后的值")])]),n("tr",[n("td",[t._v("input")]),n("td",[t._v("输入框值改变时触发")]),n("td",[t._v("输入框的值")])]),n("tr",[n("td",[t._v("focus")]),n("td",[t._v("输入框聚焦时触发")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("blur")]),n("td",[t._v("输入框失焦时触发")]),n("td",[t._v("—")])])])])}],!1,null,null,null);e.default=o.exports}}]);