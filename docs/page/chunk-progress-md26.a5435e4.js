(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{259:function(t,e,r){"use strict";r.r(e);var s=r(34),s={name:"component-doc",components:{"mo-demo0":Object(s.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-row",{attrs:{gutter:24}},[e("v-col",{attrs:{span:24}},[e("v-progress",{attrs:{height:40,value:.5,type:"line"}})],1),t._v(" "),e("v-col",{attrs:{span:24}},[e("v-progress",{attrs:{height:40,state:"success",value:1,type:"line"}})],1),t._v(" "),e("v-col",{attrs:{span:24}},[e("v-progress",{attrs:{height:40,state:"error",value:.7,type:"line"}})],1)],1)],1)},staticRenderFns:[]},{}),"mo-demo1":Object(s.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-row",{attrs:{gutter:24}},[e("v-col",{attrs:{offset:9,span:6}},[e("v-progress",{attrs:{height:30,strokeWidth:6,value:.5,type:"line"}})],1),t._v(" "),e("v-col",{attrs:{offset:9,span:6}},[e("v-progress",{attrs:{height:30,strokeWidth:6,state:"success",value:1,type:"line"}})],1),t._v(" "),e("v-col",{attrs:{offset:9,span:6}},[e("v-progress",{attrs:{height:30,strokeWidth:6,state:"error",value:.7,type:"line"}})],1)],1)],1)},staticRenderFns:[]},{}),"mo-demo2":Object(s.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("v-row",{attrs:{gutter:24}},[t("v-col",{attrs:{span:8}},[t("v-progress",{attrs:{height:120,strokeWidth:4,iconSize:16,value:.7}})],1),this._v(" "),t("v-col",{attrs:{span:8}},[t("v-progress",{attrs:{height:120,strokeWidth:4,state:"success",iconSize:24,value:1}})],1),this._v(" "),t("v-col",{attrs:{span:8}},[t("v-progress",{attrs:{height:120,strokeWidth:4,state:"error",iconSize:24,value:.7}})],1)],1)],1)},staticRenderFns:[]},{}),"mo-demo3":Object(s.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("v-row",{attrs:{gutter:24}},[t("v-col",{attrs:{span:8}},[t("v-progress",{attrs:{height:88,strokeWidth:2,iconSize:12,value:.7}})],1),this._v(" "),t("v-col",{attrs:{span:8}},[t("v-progress",{attrs:{height:88,strokeWidth:2,state:"success",iconSize:16,value:1}})],1),this._v(" "),t("v-col",{attrs:{span:8}},[t("v-progress",{attrs:{height:88,strokeWidth:2,state:"error",iconSize:16,value:.7}})],1)],1)],1)},staticRenderFns:[]},{})}},r=r(1),s=Object(r.a)(s,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content reasy-doc"},[t._m(0),e("p",[t._v("在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。 加载中进度条，存在加载中、成功、失败三种状态，进度条长度支持自定义。")]),t._m(1),t._m(2),t._m(3),e("p",[t._v("标准的进度条。")]),e("demo-block",[e("template",{slot:"source"},[e("mo-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-row :gutter="24">\n  <v-col :span="24">\n    <v-progress :height="40" :value=".5" type="line"></v-progress>\n  </v-col>\n  <v-col :span="24">\n    <v-progress :height="40" state="success" :value="1" type="line">\n    </v-progress>\n  </v-col>\n  <v-col :span="24">\n    <v-progress :height="40" state="error" :value=".7" type="line">\n    </v-progress>\n  </v-col>\n</v-row>\n')])])])],2),t._m(4),e("p",[t._v("适合放在较狭窄的区域内。")]),e("demo-block",[e("template",{slot:"source"},[e("mo-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-row :gutter="24">\n  <v-col :offset="9" :span="6">\n    <v-progress :height="30" :strokeWidth="6" :value=".5" type="line"></v-progress>\n  </v-col>\n  <v-col :offset="9" :span="6">\n    <v-progress :height="30" :strokeWidth="6" state="success" :value="1" type="line">\n    </v-progress>\n  </v-col>\n  <v-col :offset="9" :span="6">\n    <v-progress :height="30" :strokeWidth="6" state="error" :value=".7" type="line">\n    </v-progress>\n  </v-col>\n</v-row>\n')])])])],2),t._m(5),e("p",[t._v("圈形的进度。")]),e("demo-block",[e("template",{slot:"source"},[e("mo-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-row :gutter="24">\n  <v-col :span="8">\n    <v-progress :height="120" :strokeWidth="4"  :iconSize="16" :value=".7"></v-progress>\n  </v-col>\n  <v-col :span="8">\n    <v-progress :height="120" :strokeWidth="4" state="success" :iconSize="24" :value="1">\n    </v-progress>\n  </v-col>\n  <v-col :span="8">\n    <v-progress :height="120" :strokeWidth="4" state="error" :iconSize="24" :value=".7">\n    </v-progress>\n  </v-col>\n</v-row>\n\n')])])])],2),t._m(6),e("p",[t._v("小一号的圈形进度。")]),e("demo-block",[e("template",{slot:"source"},[e("mo-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-row :gutter="24">\n  <v-col :span="8">\n    <v-progress :height="88" :strokeWidth="2" :iconSize="12" :value=".7"></v-progress>\n  </v-col>\n  <v-col :span="8">\n    <v-progress :height="88" :strokeWidth="2" state="success" :iconSize="16" :value="1">\n    </v-progress>\n  </v-col>\n  <v-col :span="8">\n    <v-progress :height="88" :strokeWidth="2" state="error" :iconSize="16" :value=".7">\n    </v-progress>\n  </v-col>\n</v-row>\n\n')])])])],2),t._m(7),t._m(8),e("side-link")],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"progress-jin-du-tiao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#progress-jin-du-tiao"}},[t._v("¶")]),t._v(" Progress 进度条")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"an-xu-yin-yong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",{staticClass:"language-js"},[t._v('import { Base, Progress, Percent } from "@reasy-team/reasy-ui";\n\nVue.use(Progress);\nVue.use(Percent);\nVue.use(Base);\n')])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"jin-du-tiao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jin-du-tiao"}},[t._v("¶")]),t._v(" 进度条")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"xiao-xing-jin-du-tiao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xiao-xing-jin-du-tiao"}},[t._v("¶")]),t._v(" 小型进度条")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"jin-du-quan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jin-du-quan"}},[t._v("¶")]),t._v(" 进度圈")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"xiao-xing-jin-du-quan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xiao-xing-jin-du-quan"}},[t._v("¶")]),t._v(" 小型进度圈")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"shu-xing-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing-attributes"}},[t._v("¶")]),t._v(" 属性 Attributes")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("type")]),e("td",[t._v("类型")]),e("td",[t._v("number")]),e("td",[t._v("circle、line")]),e("td",[t._v("circle")])]),e("tr",[e("td",[t._v("state")]),e("td",[t._v("状态")]),e("td",[t._v("string")]),e("td",[t._v("success、progress、error")]),e("td",[t._v("progress")])]),e("tr",[e("td",[t._v("value")]),e("td",[t._v("值")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("progressColor")]),e("td",[t._v("进行中的颜色值")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("#ff801f")])]),e("tr",[e("td",[t._v("successColor")]),e("td",[t._v("完成的颜色值")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("#17cc82")])]),e("tr",[e("td",[t._v("errorColor")]),e("td",[t._v("失败的颜色值")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("#f7421e")])]),e("tr",[e("td",[t._v("back-color")]),e("td",[t._v("与 colors 对应的底色值")]),e("td",[t._v("array")]),e("td",[t._v("-")]),e("td",[t._v("#e9e9e9")])]),e("tr",[e("td",[t._v("width")]),e("td",[t._v("宽，单位 px")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("外层容器的宽")])]),e("tr",[e("td",[t._v("height")]),e("td",[t._v("高，单位 px")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("外层容器的高")])]),e("tr",[e("td",[t._v("stroke-width")]),e("td",[t._v("线条的粗细，单位 px")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("8")])]),e("tr",[e("td",[t._v("padding")]),e("td",[t._v("图形容器的内边距，单位 px")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("20")])]),e("tr",[e("td",[t._v("icon-size")]),e("td",[t._v("图标或者文本的大小")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("14")])])])])}],!1,null,null,null);e.default=s.exports}}]);