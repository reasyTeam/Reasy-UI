(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{216:function(t,e,r){"use strict";r.r(e);var n=r(40),a={name:"component-doc",components:{"mo-demo0":Object(n.a)({render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-form",{ref:"form"},[r("v-form-item",{attrs:{label:"IP/网关等其它"}},[r("v-input-group",{attrs:{type:"ip"},model:{value:e.ip,callback:function(t){e.ip=t},expression:"ip"}})],1),e._v(" "),r("v-form-item",{attrs:{label:"MAC地址"}},[r("v-input-group",{attrs:{type:"mac"},model:{value:e.mac,callback:function(t){e.mac=t},expression:"mac"}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{ip:"192.168.0.1",mac:"C8:3A:35:21:22:11"}}}),"mo-demo1":Object(n.a)({render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-input-group",{attrs:{"input-nums":3,splitter:"-",maxlength:4,allow:/[\da-f]/gi},model:{value:e.mac,callback:function(t){e.mac=t},expression:"mac"}})],1)},staticRenderFns:[]},{data:function(){return{mac:"C83A-3521-2211"}}})}},v=r(1),_=Object(v.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"content reasy-doc"},[t._m(0),t._m(1),t._m(2),r("demo-block",[r("template",{slot:"source"},[r("mo-demo0")],1),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-form ref="form">\n  <v-form-item label="IP/网关等其它">\n    <v-input-group type="ip" v-model="ip"></v-input-group>\n  </v-form-item>\n  <v-form-item label="MAC地址">\n    <v-input-group type="mac" v-model="mac"></v-input-group>\n  </v-form-item>\n</v-form>\n\n<script>\n  export default {\n    data() {\n      return {\n        ip: "192.168.0.1",\n        mac: "C8:3A:35:21:22:11"\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(3),t._m(4),r("demo-block",[r("template",{slot:"source"},[r("mo-demo1")],1),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-input-group\n  v-model="mac"\n  :input-nums="3"\n  splitter="-"\n  :maxlength="4"\n  :allow="/[\\da-f]/ig"\n></v-input-group>\n<script>\n  export default {\n    data() {\n      return {\n        mac: "C83A-3521-2211"\n      };\n    }\n  };\n<\/script>\n')])])])],2),t._m(5),t._m(6),t._m(7),t._m(8),r("side-link")],1)},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{attrs:{id:"shu-ru-kuang-zu"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shu-ru-kuang-zu"}},[t._v("¶")]),t._v(" 输入框组")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{attrs:{id:"shu-ru-kuang-da-xiao"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shu-ru-kuang-da-xiao"}},[t._v("¶")]),t._v(" 输入框大小")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("code",[t._v("type")]),t._v("输入框组内置类型，可选值"),r("code",[t._v("ip")]),t._v("，"),r("code",[t._v("mac")]),t._v("，默认为空")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{attrs:{id:"zi-ding-yi-shu-ru-kuang-zu"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-shu-ru-kuang-zu"}},[t._v("¶")]),t._v(" 自定义输入框组")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("code",[t._v("input-nums")]),t._v("控制输入框个数，"),r("code",[t._v("splitter")]),t._v("输入框分隔符，"),r("code",[t._v("maxlength")]),t._v("每个输入框可输入的字符长度，"),r("code",[t._v("allow")]),t._v("输入框允许输入字符的正则表达式")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{attrs:{id:"v-input-group-attributes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v-input-group-attributes"}},[t._v("¶")]),t._v(" v-input-group Attributes")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),r("th",[t._v("说明")]),r("th",[t._v("类型")]),r("th",[t._v("可选值")]),r("th",[t._v("默认值")])])]),r("tbody",[r("tr",[r("td",[t._v("v-model")]),r("td",[t._v("绑定值")]),r("td",[t._v("string")]),r("td",[t._v("—")]),r("td",[t._v("—")])]),r("tr",[r("td",[t._v("type")]),r("td",[t._v("输入框组类型")]),r("td",[t._v("string")]),r("td",[t._v("ip / mac")]),r("td",[t._v("—")])]),r("tr",[r("td",[t._v("name")]),r("td",[t._v("原生属性")]),r("td",[t._v("string")]),r("td",[t._v("—")]),r("td",[t._v("—")])]),r("tr",[r("td",[t._v("disabled")]),r("td",[t._v("是否禁用")]),r("td",[t._v("boolean")]),r("td",[t._v("—")]),r("td",[t._v("false")])]),r("tr",[r("td",[t._v("width")]),r("td",[t._v("输入框长度，支持数字和字符串，如 70 或 70px 或 70%")]),r("td",[t._v("string / number")]),r("td"),r("td")]),r("tr",[r("td",[t._v("size")]),r("td",[t._v("输入框大小")]),r("td",[t._v("string")]),r("td",[t._v("S / M / L")]),r("td",[t._v("M")])]),r("tr",[r("td",[t._v("input-nums")]),r("td",[t._v("输入框个数（自定义类型时需要定义输入框组个数）")]),r("td",[t._v("number")]),r("td",[t._v("—")]),r("td",[t._v("—")])]),r("tr",[r("td",[t._v("splitter")]),r("td",[t._v("输入框的分隔符")]),r("td",[t._v("string")]),r("td",[t._v("—")]),r("td",[t._v("—")])]),r("tr",[r("td",[t._v("maxlength")]),r("td",[t._v("每个输入框最大输入长度")]),r("td",[t._v("number")]),r("td",[t._v("—")]),r("td",[t._v("—")])]),r("tr",[r("td",[t._v("allow")]),r("td",[t._v("输入框允许输入的字符的正则表达式")]),r("td",[t._v("RegExp")]),r("td",[t._v("—")]),r("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{attrs:{id:"v-input-group-events"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v-input-group-events"}},[t._v("¶")]),t._v(" v-input-group Events")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("事件名")]),r("th",[t._v("说明")]),r("th",[t._v("参数")])])]),r("tbody",[r("tr",[r("td",[t._v("change")]),r("td",[t._v("值改变时执行")]),r("td",[t._v("改变后的值")])]),r("tr",[r("td",[t._v("input")]),r("td",[t._v("输入框值改变时触发")]),r("td",[t._v("输入框的值")])]),r("tr",[r("td",[t._v("focus")]),r("td",[t._v("输入框聚焦时触发")]),r("td",[t._v("—")])]),r("tr",[r("td",[t._v("blur")]),r("td",[t._v("输入框失焦时触发")]),r("td",[t._v("—")])])])])}],!1,null,null,null);e.default=_.exports}}]);