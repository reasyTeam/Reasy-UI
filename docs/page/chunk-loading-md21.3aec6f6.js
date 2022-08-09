(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{265:function(t,e,n){"use strict";n.r(e);var a=n(34),a={name:"component-doc",components:{"mo-demo0":Object(a.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("div",{staticClass:"loading-box"},[t("v-loading",{attrs:{visible:!0}})],1)])},staticRenderFns:[]},{}),"mo-demo1":Object(a.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("div",{staticClass:"loading-box loading-box__fill"},[t("v-loading",{attrs:{visible:e.show}})],1),e._v(" "),t("div",[t("label",[e._v("显示loading：")]),e._v(" "),t("v-switch",{attrs:{"no-id":""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}})],1)])},staticRenderFns:[]},{data:function(){return{show:!1}}}),"mo-demo2":Object(a.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("div",{staticClass:"loading-box"},[t("v-loading",{attrs:{text:"加载中",visible:!0}})],1)])},staticRenderFns:[]},{}),"mo-demo3":Object(a.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-row",{attrs:{gutter:12}},[e("v-col",{attrs:{span:12}},[e("div",{staticClass:"loading-box loading-box__fill"},[t._v('\n      has-mask="true"\n      '),e("v-loading",{attrs:{visible:!0}})],1)]),t._v(" "),e("v-col",{attrs:{span:12}},[e("div",{staticClass:"loading-box loading-box__fill"},[t._v('\n      has-mask="false"\n      '),e("v-loading",{attrs:{"has-mask":!1,visible:!0}})],1)])],1)],1)},staticRenderFns:[]},{}),"mo-demo4":Object(a.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("v-row",{attrs:{gutter:12}},[t("v-col",{attrs:{span:8}},[t("div",{staticClass:"loading-box"},[t("v-loading",{attrs:{background:"#1890ff",visible:!0}})],1)]),this._v(" "),t("v-col",{attrs:{span:8}},[t("div",{staticClass:"loading-box"},[t("v-loading",{attrs:{visible:!0}})],1)]),this._v(" "),t("v-col",{attrs:{span:8}},[t("div",{staticClass:"loading-box"},[t("v-loading",{attrs:{background:"#d82228",visible:!0}})],1)])],1)],1)},staticRenderFns:[]},{}),"mo-demo5":Object(a.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("v-row",{attrs:{gutter:12}},[t("v-col",{attrs:{span:8}},[t("div",{staticClass:"loading-box"},[t("v-loading",{attrs:{text:"size: L",size:"L",visible:!0}})],1)]),this._v(" "),t("v-col",{attrs:{span:8}},[t("div",{staticClass:"loading-box"},[t("v-loading",{attrs:{text:"size: M",size:"M",visible:!0}})],1)]),this._v(" "),t("v-col",{attrs:{span:8}},[t("div",{staticClass:"loading-box"},[t("v-loading",{attrs:{text:"size: S",size:"S",visible:!0}})],1)])],1)],1)},staticRenderFns:[]},{}),"mo-demo6":Object(a.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("div",{staticClass:"loading-box"},[e("v-loading",{attrs:{visible:!0}},[e("label",{staticStyle:{color:"#fff","background-color":"rgb(255,0,0)"}},[t._v("我")]),t._v(" "),e("label",{staticStyle:{color:"#fff","background-color":"rgba(255,165,0)"}},[t._v("是")]),t._v(" "),e("label",{staticStyle:{color:"#fff","background-color":"rgba(255,255,0)"}},[t._v("自")]),t._v(" "),e("label",{staticStyle:{color:"#fff","background-color":"rgba(0,255,0)"}},[t._v("定")]),t._v(" "),e("label",{staticStyle:{color:"#fff","background-color":"rgba(0,127,255)"}},[t._v("义")]),t._v(" "),e("label",{staticStyle:{color:"#fff","background-color":"rgba(139,0,255)"}},[t._v("内")]),t._v(" "),e("label",{staticStyle:{color:"#fff","background-color":"rgba(0,0,255)"}},[t._v("容")])])],1)])},staticRenderFns:[]},{})}},n=n(1),n=Object(n.a)(a,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content reasy-doc"},[e("h1",[t._v("加载中")]),e("p",[t._v("用于页面和区块的加载中状态。页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。")]),t._m(0),t._m(1),t._m(2),e("demo-block",[e("template",{slot:"source"},[e("mo-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="loading-box">\n  <v-loading :visible="true"></v-loading>\n</div>\n\n<style>\n  .loading-box {\n    height: 160px;\n    border-radius: 2px;\n    border: 1px solid #f0f0f0;\n    position: relative;\n    color: #000;\n  }\n</style>\n')])])])],2),t._m(3),e("demo-block",[e("div",[e("p",[t._v("通过"),e("code",[t._v("visible")]),t._v("属性控制loading的显示与隐藏。")])]),e("template",{slot:"source"},[e("mo-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="loading-box loading-box__fill">\n  <v-loading :visible="show"></v-loading>\n</div>\n<div>\n  <label>显示loading：</label>\n  <v-switch no-id v-model="show"></v-switch>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        show: false\n      };\n    }\n  };\n<\/script>\n\n<style>\n  .loading-box {\n    height: 160px;\n    border-radius: 2px;\n    border: 1px solid #f0f0f0;\n    position: relative;\n    color: #000;\n  }\n\n  .loading-box__fill {\n    background-color: #e6f7ff;\n    border: 1px solid #91d5ff;\n  }\n</style>\n')])])])],2),t._m(4),e("demo-block",[e("div",[e("p",[t._v("通过"),e("code",[t._v("text")]),t._v("属性设置加载中的提示文本信息。")])]),e("template",{slot:"source"},[e("mo-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="loading-box">\n  <v-loading text="加载中" :visible="true"></v-loading>\n</div>\n\n<style>\n  .loading-box {\n    height: 160px;\n    border-radius: 2px;\n    border: 1px solid #f0f0f0;\n    position: relative;\n    color: #000;\n  }\n</style>\n')])])])],2),t._m(5),e("demo-block",[e("div",[e("p",[t._v("通过"),e("code",[t._v("has-mask")]),t._v("设置是否显示蒙版遮罩，默认为显示遮罩。")])]),e("template",{slot:"source"},[e("mo-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-row :gutter="12">\n  <v-col :span="12">\n    <div class="loading-box loading-box__fill">\n      has-mask="true"\n      <v-loading :visible="true"></v-loading>\n    </div>\n  </v-col>\n  <v-col :span="12">\n    <div class="loading-box loading-box__fill">\n      has-mask="false"\n      <v-loading :has-mask="false" :visible="true"></v-loading>\n    </div>\n  </v-col>\n</v-row>\n\n<style>\n  .loading-box {\n    height: 160px;\n    border-radius: 2px;\n    border: 1px solid #f0f0f0;\n    position: relative;\n    color: #000;\n  }\n  .loading-box__fill {\n    background-color: #e6f7ff;\n    border: 1px solid #91d5ff;\n  }\n</style>\n')])])])],2),t._m(6),e("demo-block",[e("div",[e("p",[t._v("通过"),e("code",[t._v("background")]),t._v("设置不同颜色风格的 loading 风格。")])]),e("template",{slot:"source"},[e("mo-demo4")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-row :gutter="12">\n  <v-col :span="8">\n    <div class="loading-box">\n      <v-loading background="#1890ff" :visible="true"></v-loading>\n    </div>\n  </v-col>\n  <v-col :span="8">\n    <div class="loading-box">\n      <v-loading :visible="true"></v-loading>\n    </div>\n  </v-col>\n  <v-col :span="8">\n    <div class="loading-box">\n      <v-loading background="#d82228" :visible="true"></v-loading>\n    </div>\n  </v-col>\n</v-row>\n\n<style>\n  .loading-box {\n    height: 160px;\n    border-radius: 2px;\n    border: 1px solid #f0f0f0;\n    position: relative;\n    color: #000;\n  }\n</style>\n')])])])],2),t._m(7),e("p",[t._v("小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。")]),e("demo-block",[e("div",[e("p",[t._v("通过"),e("code",[t._v("size")]),t._v("属性设置不同的 loading 尺寸。")])]),e("template",{slot:"source"},[e("mo-demo5")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-row :gutter="12">\n  <v-col :span="8">\n    <div class="loading-box">\n      <v-loading text="size: L" size="L" :visible="true"></v-loading>\n    </div>\n  </v-col>\n  <v-col :span="8">\n    <div class="loading-box">\n      <v-loading text="size: M" size="M" :visible="true"></v-loading>\n    </div>\n  </v-col>\n  <v-col :span="8">\n    <div class="loading-box">\n      <v-loading text="size: S" size="S" :visible="true"></v-loading>\n    </div>\n  </v-col>\n</v-row>\n<style>\n  .loading-box {\n    height: 160px;\n    border-radius: 2px;\n    border: 1px solid #f0f0f0;\n    position: relative;\n    color: #000;\n  }\n</style>\n')])])])],2),t._m(8),e("demo-block",[e("div",[e("p",[t._v("通过"),e("code",[t._v("default slot")]),t._v("设置自定义的提升信息。")])]),e("template",{slot:"source"},[e("mo-demo6")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<div class="loading-box">\n  <v-loading :visible="true">\n    <label style="color: #fff; background-color: rgb(255,0,0);">我</label>\n    <label style="color: #fff; background-color: rgba(255,165,0);">是</label>\n    <label style="color: #fff; background-color: rgba(255,255,0);">自</label>\n    <label style="color: #fff; background-color: rgba(0,255,0);">定</label>\n    <label style="color: #fff; background-color: rgba(0,127,255);">义</label>\n    <label style="color: #fff; background-color: rgba(139,0,255);">内</label>\n    <label style="color: #fff; background-color: rgba(0,0,255);">容</label>\n  </v-loading>\n</div>\n\n<style>\n  .loading-box {\n    height: 160px;\n    border-radius: 2px;\n    border: 1px solid #f0f0f0;\n    position: relative;\n    color: #000;\n  }\n</style>\n')])])])],2),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),e("side-link")],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"an-xu-yin-yong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",{staticClass:"language-js"},[t._v('import { Base, Loading } from "@reasy-team/reasy-ui";\n\nVue.use(Loading);\nVue.use(Base);\n')])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"ji-chu-shi-li"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-shi-li"}},[t._v("¶")]),t._v(" 基础示例")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"xian-shi-yin-cang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xian-shi-yin-cang"}},[t._v("¶")]),t._v(" 显示隐藏")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"miao-shu-xin-xi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#miao-shu-xin-xi"}},[t._v("¶")]),t._v(" 描述信息")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"zhe-zhao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zhe-zhao"}},[t._v("¶")]),t._v(" 遮罩")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"bu-tong-yan-se-zhan-shi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bu-tong-yan-se-zhan-shi"}},[t._v("¶")]),t._v(" 不同颜色展示")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"bu-tong-chi-cun"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bu-tong-chi-cun"}},[t._v("¶")]),t._v(" 不同尺寸")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"zi-ding-yi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi"}},[t._v("¶")]),t._v(" 自定义")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("¶")]),t._v(" Props")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("visible")]),e("td",[t._v("是否显示")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("尺寸")]),e("td",[t._v("string")]),e("td",[t._v("S/M/L")]),e("td",[t._v("M")])]),e("tr",[e("td",[t._v("target")]),e("td",[t._v("遮罩内容")]),e("td",[t._v("object(HTMLElement)")]),e("td",[t._v("-")]),e("td",[t._v("默认为外层容器")])]),e("tr",[e("td",[t._v("has-mask")]),e("td",[t._v("是否有遮罩")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("text")]),e("td",[t._v("显示文本")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("background")]),e("td",[t._v("旋转点背景色")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("#ff8f00")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("blockquote",[e("p",[t._v("target 的 position 不能为 static，否则遮罩不生效")])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"slots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("¶")]),t._v(" Slots")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("default")]),e("td",[t._v("内容区域，优先级高于 text")])])])])}],!1,null,null,null);e.default=n.exports}}]);