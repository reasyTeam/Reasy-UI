(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{317:function(t,e,a){"use strict";a.r(e);var s=a(50),s={name:"component-doc",components:{"mo-demo0":Object(s.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("v-alert",{staticClass:"alert-box",attrs:{name:"alert1",type:"success",title:"恭喜！这里是成功成功成功成功成功的提示信息。"}}),t._v(" "),e("v-alert",{staticClass:"alert-box",attrs:{name:"alert2",type:"warn",title:"这里是警告警告警告警告警告警告警告的提示信息。"}}),t._v(" "),e("v-alert",{staticClass:"alert-box",attrs:{name:"alert3",type:"info",title:"这里是常规常规常规常规常规常规常规的提示信息。"}}),t._v(" "),e("v-alert",{staticClass:"alert-box",attrs:{name:"alert4",type:"error",title:"这里是错误错误错误错误错误错误错误的提示信息。"}})]],2)},staticRenderFns:[]},{}),"mo-demo1":Object(s.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[[t("v-alert",{staticClass:"alert-box",attrs:{name:"alert5",type:"success",title:"恭喜！这里是成功成功成功成功成功的提示信息。","show-icon":!1}})]],2)},staticRenderFns:[]},{}),"mo-demo2":Object(s.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[[e("v-alert",{staticClass:"alert-box",attrs:{name:"alert6",type:"success",title:"恭喜！这里是成功成功成功成功成功的提示信息。","show-icon":!1,"show-details-button":!0,"show-close":!1},on:{"handle-details-click":t.handleDetailsClick}}),t._v(" "),e("v-alert",{staticClass:"alert-box",attrs:{name:"alert7",type:"warn",title:"这里是警告警告警告警告警告警告警告的提示信息。","show-icon":!1,"show-details-button":!0,"show-close":!1},on:{"handle-details-click":t.handleDetailsClick}}),t._v(" "),e("v-alert",{staticClass:"alert-box",attrs:{name:"alert8",type:"info",title:"这里是常规常规常规常规常规常规常规的提示信息。","show-icon":!1,"show-details-button":!0,"show-close":!1},on:{"handle-details-click":t.handleDetailsClick}}),t._v(" "),e("v-alert",{staticClass:"alert-box",attrs:{name:"alert9",type:"error",title:"这里是错误错误错误错误错误错误错误的提示信息。","show-icon":!1,"show-details-button":!0,"show-close":!1},on:{"handle-details-click":t.handleDetailsClick}})]],2)},staticRenderFns:[]},{methods:{handleDetailsClick:function(){this.$message.warn("点击了“查看详情”按钮！")}}}),"mo-demo3":Object(s.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[[t("v-alert",{staticClass:"alert-box",attrs:{name:"alert10",type:"success",title:"成功提示信息标题",icon:"v-icon-ok-line",description:"恭喜！这里是成功成功成功成功成功的提示信息。"}})]],2)},staticRenderFns:[]},{}),"mo-demo4":Object(s.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[[t("v-alert",{staticClass:"alert-box",attrs:{name:"alert11",type:"success",title:"提示信息标题",icon:"v-icon-ok-line"}},[t("div",{staticClass:"slot-content"},[this._v("这是插槽中的内容")])])]],2)},staticRenderFns:[]},{})}},a=a(1),a=Object(a.a)(s,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content reasy-doc"},[e("h1",[t._v("警告提示")]),e("p",[t._v("用于页面中展示重要的提示信息。")]),t._m(0),t._m(1),t._m(2),e("demo-block",[e("template",{slot:"source"},[e("mo-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-alert\n    name="alert1"\n    class="alert-box"\n    type="success"\n    title="恭喜！这里是成功成功成功成功成功的提示信息。"\n  ></v-alert>\n  <v-alert\n    name="alert2"\n    class="alert-box"\n    type="warn"\n    title="这里是警告警告警告警告警告警告警告的提示信息。"\n  ></v-alert>\n  <v-alert\n    name="alert3"\n    class="alert-box"\n    type="info"\n    title="这里是常规常规常规常规常规常规常规的提示信息。"\n  ></v-alert>\n  <v-alert\n    name="alert4"\n    class="alert-box"\n    type="error"\n    title="这里是错误错误错误错误错误错误错误的提示信息。"\n  ></v-alert>\n</template>\n')])])])],2),t._m(3),e("demo-block",[e("div",[e("p",[t._v("通过设置"),e("code",[t._v("show-icon")]),t._v("来控制图标的显示，默认值为"),e("code",[t._v("true")]),t._v("。")])]),e("template",{slot:"source"},[e("mo-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-alert\n    name="alert5"\n    class="alert-box"\n    type="success"\n    title="恭喜！这里是成功成功成功成功成功的提示信息。"\n    :show-icon="false"\n  ></v-alert>\n</template>\n')])])])],2),t._m(4),e("demo-block",[e("div",[e("p",[t._v("通过设置"),e("code",[t._v("show-details-button")]),t._v("和"),e("code",[t._v("show-close")]),t._v("来仅显示"),e("code",[t._v("查看详情")]),t._v("按钮。")])]),e("template",{slot:"source"},[e("mo-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-alert\n    name="alert6"\n    class="alert-box"\n    type="success"\n    title="恭喜！这里是成功成功成功成功成功的提示信息。"\n    :show-icon="false"\n    :show-details-button="true"\n    :show-close="false"\n    @handle-details-click="handleDetailsClick"\n  ></v-alert>\n  <v-alert\n    name="alert7"\n    class="alert-box"\n    type="warn"\n    title="这里是警告警告警告警告警告警告警告的提示信息。"\n    :show-icon="false"\n    :show-details-button="true"\n    :show-close="false"\n    @handle-details-click="handleDetailsClick"\n  ></v-alert>\n  <v-alert\n    name="alert8"\n    class="alert-box"\n    type="info"\n    title="这里是常规常规常规常规常规常规常规的提示信息。"\n    :show-icon="false"\n    :show-details-button="true"\n    :show-close="false"\n    @handle-details-click="handleDetailsClick"\n  ></v-alert>\n  <v-alert\n    name="alert9"\n    class="alert-box"\n    type="error"\n    title="这里是错误错误错误错误错误错误错误的提示信息。"\n    :show-icon="false"\n    :show-details-button="true"\n    :show-close="false"\n    @handle-details-click="handleDetailsClick"\n  ></v-alert>\n</template>\n\n<script>\nexport default {\n  methods: {\n    handleDetailsClick() {\n      this.$message.warn("点击了“查看详情”按钮！");\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(5),e("demo-block",[e("div",[e("p",[t._v("通过设置"),e("code",[t._v("title")]),t._v("和"),e("code",[t._v("descrition")]),t._v("来实现。")])]),e("template",{slot:"source"},[e("mo-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-alert\n    name="alert10"\n    class="alert-box"\n    type="success"\n    title="成功提示信息标题"\n    icon="v-icon-ok-line"\n    description="恭喜！这里是成功成功成功成功成功的提示信息。"\n  ></v-alert>\n</template>\n')])])])],2),t._m(6),e("demo-block",[e("div",[e("p",[t._v("通过设置"),e("code",[t._v("default slot")]),t._v("来插入"),e("code",[t._v("description")]),t._v("内容。")])]),e("template",{slot:"source"},[e("mo-demo4")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-alert\n    name="alert11"\n    class="alert-box"\n    type="success"\n    title="提示信息标题"\n    icon="v-icon-ok-line"\n  >\n    <div class="slot-content">这是插槽中的内容</div>\n  </v-alert>\n</template>\n')])])])],2),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),e("side-link")],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"an-xu-yin-yong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",{staticClass:"language-js"},[t._v('import { Base, Alert } from "@reasy-team/reasy-ui";\n\nVue.use(Alert);\nVue.use(Base);\n')])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"ji-chu-shi-li"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-shi-li"}},[t._v("¶")]),t._v(" 基础示例")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"bu-dai-tu-biao-de-ti-shi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bu-dai-tu-biao-de-ti-shi"}},[t._v("¶")]),t._v(" 不带图标的提示")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"han-cha-kan-lian-jie-de-ti-shi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#han-cha-kan-lian-jie-de-ti-shi"}},[t._v("¶")]),t._v(" 含查看链接的提示")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"dai-you-fu-zhu-xing-wen-zi-jie-shao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dai-you-fu-zhu-xing-wen-zi-jie-shao"}},[t._v("¶")]),t._v(" 带有辅助性文字介绍")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"zi-ding-yi-descriptionnei-rong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-descriptionnei-rong"}},[t._v("¶")]),t._v(" 自定义description内容")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("¶")]),t._v(" Props")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("no-id")]),e("td",[t._v("是否不需要id，为false则以"),e("code",[t._v("name")]),t._v("作为id，除特殊情况，表单中使用必须添加id")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("name")]),e("td",[t._v("原生属性name，同时渲染为id属性，当"),e("code",[t._v("no-id")]),t._v("为false时"),e("strong",[t._v("必填")])]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("标题")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("消息类型")]),e("td",[t._v("string")]),e("td",[t._v("success/warn/info/error")]),e("td",[t._v("info")])]),e("tr",[e("td",[t._v("description")]),e("td",[t._v("消息详细描述，也可通过默认slot传入")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("icon")]),e("td",[t._v("图标类名，不传默认取响应状态的值")]),e("td",[t._v("String")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("show-icon")]),e("td",[t._v("是否显示icon")]),e("td",[t._v("Boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("show-close")]),e("td",[t._v("是否显示关闭按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("show-details-button")]),e("td",[t._v("是否显示查看详情按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("¶")]),t._v(" @Events")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("close")]),e("td",[t._v("关闭时触发")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("handle-details-click")]),e("td",[t._v("点击查看详情时触发")]),e("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"slots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("¶")]),t._v(" Slots")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("default")]),e("td",[t._v("description消息详细描述")])])])])}],!1,null,null,null);e.default=a.exports}}]);