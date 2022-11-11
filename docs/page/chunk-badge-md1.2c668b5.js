(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{318:function(t,e,a){"use strict";a.r(e);var s=a(50),s={name:"component-doc",components:{"mo-demo0":Object(s.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-badge",{staticClass:"badge",attrs:{text:"3",status:"error",position:"rt"}},[e("div",{staticClass:"badge-box"})]),t._v(" "),e("v-badge",{attrs:{text:"2",status:"error"}})],1)},staticRenderFns:[]},{}),"mo-demo1":Object(s.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-badge",{staticClass:"badge",attrs:{text:t.val,status:"error",position:"rt"}},[e("div",{staticClass:"badge-box"})]),t._v(" "),e("v-badge",{staticClass:"badge",attrs:{text:t._f("format")(t.val),status:"error",position:"rt"}},[e("div",{staticClass:"badge-box"})]),t._v(" "),e("v-badge",{staticClass:"badge",attrs:{text:t.val,status:"error"}}),t._v(" "),e("v-badge",{attrs:{text:t._f("format")(t.val),status:"error"}})],1)},staticRenderFns:[]},{data:function(){return{val:100}},filters:{format:function(t){return 100<=t?"99+":t}}}),"mo-demo2":Object(s.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("v-badge",{staticClass:"badge",attrs:{type:"dot",status:"error",position:"rt"}},[t("div",[this._v("小红点")])]),this._v(" "),t("v-badge",{staticClass:"badge",attrs:{type:"dot",status:"error",position:"rt"}},[t("i",{staticClass:"v-icon-remind-line"})])],1)},staticRenderFns:[]},{}),"mo-demo3":Object(s.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-badge",{staticClass:"badge",attrs:{type:"dot",status:"success"}},[e("label",{staticClass:"dot-text"},[t._v("正常")])]),t._v(" "),e("v-badge",{staticClass:"badge",attrs:{type:"dot",status:"warn"}},[e("label",{staticClass:"dot-text"},[t._v("异常")])]),t._v(" "),e("v-badge",{staticClass:"badge",attrs:{type:"dot",status:"error"}},[e("label",{staticClass:"dot-text"},[t._v("失败")])]),t._v(" "),e("v-badge",{attrs:{type:"dot"}},[e("label",{staticClass:"dot-text"},[t._v("默认")])])],1)},staticRenderFns:[]},{})}},a=a(1),a=Object(a.a)(s,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content reasy-doc"},[e("h1",[t._v("徽标数")]),e("p",[t._v("主要用于通知未读数的角标，提醒用户点击。")]),t._m(0),t._m(1),t._m(2),e("demo-block",[e("template",{slot:"source"},[e("mo-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-badge text="3" status="error" position="rt" class="badge">\n  <div class="badge-box"></div>\n</v-badge>\n<v-badge text="2" status="error"> </v-badge>\n\n<style>\n  .badge-box {\n    width: 40px;\n    height: 40px;\n    background-color: #ebebeb;\n  }\n\n  .badge {\n    margin-right: 40px;\n  }\n</style>\n')])])])],2),t._m(3),e("p",[t._v("超过一位数字时。")]),e("demo-block",[e("template",{slot:"source"},[e("mo-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-badge :text="val" status="error" position="rt" class="badge">\n  <div class="badge-box"></div>\n</v-badge>\n<v-badge :text="val | format" status="error" position="rt" class="badge">\n  <div class="badge-box"></div>\n</v-badge>\n<v-badge :text="val" status="error" class="badge"> </v-badge>\n<v-badge :text="val | format" status="error"> </v-badge>\n\n<script>\n  export default {\n    data(){\n      return {\n        val: 100\n      }\n    },\n    filters:{\n      format(val){\n        if(val >= 100){\n          return \'99+\';\n        }\n        return val;\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .badge-box {\n    width: 40px;\n    height: 40px;\n    background-color: #ebebeb;\n  }\n\n  .badge {\n    margin-right: 40px;\n  }\n</style>\n')])])])],2),t._m(4),e("p",[t._v("没有具体数字的提示。")]),e("demo-block",[e("template",{slot:"source"},[e("mo-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-badge type="dot" status="error" position="rt" class="badge">\n  <div>小红点</div>\n</v-badge>\n<v-badge type="dot" status="error" position="rt" class="badge">\n  <i class="v-icon-remind-line"></i>\n</v-badge>\n\n<style>\n  .badge {\n    margin-right: 40px;\n  }\n</style>\n')])])])],2),t._m(5),e("p",[t._v("表示状态的小圆点。")]),e("demo-block",[e("template",{slot:"source"},[e("mo-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-badge type="dot" status="success" class="badge">\n  <label class="dot-text">正常</label>\n</v-badge>\n<v-badge type="dot" status="warn" class="badge">\n  <label class="dot-text">异常</label>\n</v-badge>\n<v-badge type="dot" status="error" class="badge">\n  <label class="dot-text">失败</label>\n</v-badge>\n<v-badge type="dot">\n  <label class="dot-text">默认</label>\n</v-badge>\n\n<style>\n  .badge {\n    margin-right: 40px;\n  }\n  .dot-text {\n    padding-left: 6px;\n    vertical-align: middle;\n  }\n</style>\n')])])])],2),t._m(6),t._m(7),e("p",[t._v("position: 为空，在正常的文档流中，不添加任何定位效果。")]),t._m(8),t._m(9),e("side-link")],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"an-xu-yin-yong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",{staticClass:"language-js"},[t._v('import { Base, Badge } from "@reasy-team/reasy-ui";\n\nVue.use(Badge);\nVue.use(Base);\n')])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"ji-chu-shi-li"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-shi-li"}},[t._v("¶")]),t._v(" 基础示例")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"duo-wei-shu-zi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#duo-wei-shu-zi"}},[t._v("¶")]),t._v(" 多位数字")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"xiao-hong-dian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xiao-hong-dian"}},[t._v("¶")]),t._v(" 小红点")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"zhuang-tai-dian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zhuang-tai-dian"}},[t._v("¶")]),t._v(" 状态点")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("¶")]),t._v(" Props")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("text")]),e("td",[t._v("内容")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("圆点或小圆")]),e("td",[t._v("string")]),e("td",[t._v("dot(圆点)，tip")]),e("td",[t._v("tip")])]),e("tr",[e("td",[t._v("status")]),e("td",[t._v("不同状态不同颜色")]),e("td",[t._v("string")]),e("td",[t._v("success, error, warn, default")]),e("td",[t._v("default")])]),e("tr",[e("td",[t._v("position")]),e("td",[t._v("圆点位置")]),e("td",[t._v("string")]),e("td",[t._v("rt")]),e("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"slots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("¶")]),t._v(" Slots")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("default")]),e("td",[t._v("内容区")])])])])}],!1,null,null,null);e.default=a.exports}}]);