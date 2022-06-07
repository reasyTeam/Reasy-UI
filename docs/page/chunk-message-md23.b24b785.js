(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{267:function(t,e,n){"use strict";n.r(e);var s,a=n(41),a={name:"component-doc",components:{"mo-demo0":Object(a.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("v-button",{staticClass:"msg-btn",attrs:{name:"button"},on:{click:this.handleInfoClick}},[this._v("打开消息提醒")])],1)},staticRenderFns:[]},{data:function(){return{count:0}},methods:{handleInfoClick:function(){this.$message.success("这是一条消息提醒")}}}),"mo-demo1":Object(a.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-button",{staticClass:"msg-btn",attrs:{name:"button1"},on:{click:t.handleSuccessClick}},[t._v("Success")]),t._v(" "),e("v-button",{staticClass:"msg-btn",attrs:{name:"button2"},on:{click:t.handleErrorClick}},[t._v("Error")]),t._v(" "),e("v-button",{staticClass:"msg-btn",attrs:{name:"button3"},on:{click:t.handleWarnClick}},[t._v("Warn")]),t._v(" "),e("v-button",{staticClass:"msg-btn",attrs:{name:"button4"},on:{click:t.handleLoadingClick}},[t._v("Loading")])],1)},staticRenderFns:[]},{methods:{handleSuccessClick:function(){this.$message.success("恭喜你！这是一条成功的提示信息。")},handleErrorClick:function(){this.$message.error("完蛋啦！这是一条失败的提示信息。")},handleWarnClick:function(){this.$message.warn("哦豁！这是一条警告的提示信息。")},handleLoadingClick:function(){this.$message.loading("哦豁！这是一条加载中的提示信息。")}}}),"mo-demo2":(o={methods:{handleCustomClick:function(){this.$message({showIcon:!1,dangerouslyUseHTMLString:!0,closeCallback:function(){return console.log("HTML片段提示信息触发了关闭回调")},content:'<div class="custom-message">这里是使用了HTML片段的提示信息内容</div>'})}}},Object(a.a)({render:function(){var t=this.$createElement,t=this._self._c||t;return t("div",[t("v-button",{staticClass:"msg-btn",attrs:{name:"button5"},on:{click:this.handleCustomClick}},[this._v("使用HTML片段")])],1)},staticRenderFns:[]},o)),"mo-demo3":(s=["关闭","打开"],o={data:function(){return{buttonText:s[1],messageVm:null}},methods:{handleCustomClick:function(){this.messageVm?(this.buttonText=s[1],this.messageVm.close(),this.messageVm=null):(this.buttonText=s[0],this.messageVm=this.$message({type:"success",duration:0,content:"手动快关提示窗提示信息。",closeCallback:function(){return console.log("手动关闭提示信息触发了关闭回调")}}))}}},Object(a.a)({render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("v-button",{staticClass:"msg-btn",attrs:{name:"button6"},on:{click:t.handleCustomClick}},[t._v(t._s(t.buttonText))])],1)},staticRenderFns:[]},o))}},o=n(1),n=Object(o.a)(a,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content reasy-doc"},[t._m(0),e("p",[t._v("全局展示操作反馈信息，一种不打断用于操作的轻量级提示方式。")]),t._m(1),t._m(2),t._m(3),e("p",[t._v("从顶部出现，2 秒后自动消失。")]),e("demo-block",[e("div",[e("p",[t._v("在全局注册了$message方法，接收一个options字面量参数。在最简单的情况下，直接传入一个字符串即可设置提示内容，或通过传入的options中的"),e("code",[t._v("content")]),t._v("字段的值来设置内容。默认情况下，经过一段时间后Message组件会关闭，可以通过设置"),e("code",[t._v("duration")]),t._v("控制关闭的时间间隔，特别的是，如果设置为"),e("code",[t._v("0")]),t._v("，则不会关闭。注："),e("code",[t._v("duration")]),t._v("接收一个"),e("code",[t._v("Number")]),t._v("，单位为毫秒，默认为"),e("code",[t._v("2000")]),t._v("。")])]),e("template",{slot:"source"},[e("mo-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-button name="button"  class="msg-btn" @click="handleInfoClick">打开消息提醒</v-button>\n\n<script>\nexport default {\n  data() {\n    return {\n      count: 0\n    };\n  },\n  methods: {\n    handleInfoClick() {\n      this.$message.success("这是一条消息提醒");\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(4),t._m(5),e("demo-block",[e("template",{slot:"source"},[e("mo-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('\x3c!-- <v-button no-id  class="msg-btn" @click="handleInfoClick">Info</v-button> --\x3e\n<v-button name="button1"  class="msg-btn" @click="handleSuccessClick">Success</v-button>\n<v-button name="button2"  class="msg-btn" @click="handleErrorClick">Error</v-button>\n<v-button name="button3"  class="msg-btn" @click="handleWarnClick">Warn</v-button>\n<v-button name="button4"  class="msg-btn" @click="handleLoadingClick">Loading</v-button>\n\n<script>\nexport default {\n  methods: {\n    // handleInfoClick() {\n    //   this.$message("这是一条消息提醒。", 1000, () => console.log(`Info配置并触发了关闭回调`));\n    // },\n    handleSuccessClick() {\n      this.$message.success("恭喜你！这是一条成功的提示信息。");\n    },\n    handleErrorClick() {\n      this.$message.error("完蛋啦！这是一条失败的提示信息。");\n    },\n    handleWarnClick() {\n      this.$message.warn("哦豁！这是一条警告的提示信息。");\n    },\n    handleLoadingClick() {\n      this.$message.loading("哦豁！这是一条加载中的提示信息。");\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(6),e("demo-block",[e("template",{slot:"source"},[e("mo-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-button name="button5" class="msg-btn" @click="handleCustomClick">使用HTML片段</v-button>\n\n<script>\nexport default {\n  methods: {\n    handleCustomClick() {\n      this.$message({\n        showIcon: false,\n        dangerouslyUseHTMLString: true,\n        closeCallback: () => console.log(`HTML片段提示信息触发了关闭回调`),\n        content: `<div class="custom-message">这里是使用了HTML片段的提示信息内容</div>`\n      });\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(7),e("demo-block",[e("div",[e("p",[t._v("通过"),e("code",[t._v("this.$message(options).close()")]),t._v("来关闭提示窗。")])]),e("template",{slot:"source"},[e("mo-demo3")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-button name="button6" class="msg-btn" @click="handleCustomClick">{{ buttonText }}</v-button>\n\n<script>\nconst textSet = ["关闭", "打开"];\nexport default {\n  data() {\n    return {\n      buttonText: textSet[1],\n      messageVm: null\n    };\n  },\n  methods: {\n    handleCustomClick() {\n      if(!this.messageVm) {\n        this.buttonText = textSet[0];\n        this.messageVm = this.$message({\n          type: "success",\n          duration: 0,\n          content: "手动快关提示窗提示信息。",\n          closeCallback: () => console.log(`手动关闭提示信息触发了关闭回调`)\n        });\n      } else {\n        this.buttonText = textSet[1];\n        this.messageVm.close();\n        this.messageVm = null;\n      }\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),e("side-link")],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"quan-ju-ti-shi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quan-ju-ti-shi"}},[t._v("¶")]),t._v(" 全局提示")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"an-xu-yin-yong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",{staticClass:"language-js"},[t._v('import { Base, Message } from "@reasy-team/reasy-ui";\n\nVue.use(Message);\nVue.use(Base);\n')])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"ji-chu-shi-li"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-shi-li"}},[t._v("¶")]),t._v(" 基础示例")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"bu-tong-zhuang-tai"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bu-tong-zhuang-tai"}},[t._v("¶")]),t._v(" 不同状态")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("p",[t._v("用来显示"),e("code",[t._v("成功")]),t._v("、"),e("code",[t._v("警告")]),t._v("、"),e("code",[t._v("消息")]),t._v("、"),e("code",[t._v("错误")]),t._v("、"),e("code",[t._v("加载中")]),t._v("类的操作反馈。")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"shi-yong-htmlpian-duan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-htmlpian-duan"}},[t._v("¶")]),t._v(" 使用HTML片段")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"shou-dong-kai-guan-ti-shi-chuang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shou-dong-kai-guan-ti-shi-chuang"}},[t._v("¶")]),t._v(" 手动开关提示窗")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"shu-xing-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing-attributes"}},[t._v("¶")]),t._v(" 属性 Attributes")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("content")]),e("td",[t._v("消息内容")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("主题")]),e("td",[t._v("string")]),e("td",[t._v("success/warn/info/error/loading")]),e("td",[t._v("info")])]),e("tr",[e("td",[t._v("showIcon")]),e("td",[t._v("是否显示icon")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("icon")]),e("td",[t._v("Icon图标类名，会覆盖type配置")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("duration")]),e("td",[t._v("显示时间，单位：毫秒。设为0则不关闭")]),e("td",[t._v("number")]),e("td",[t._v("-")]),e("td",[t._v("2000")])]),e("tr",[e("td",[t._v("closeCallback")]),e("td",[t._v("消息关闭回调，关闭后触发")]),e("td",[t._v("function")]),e("td",[t._v("-")]),e("td",[t._v("() => {}")])]),e("tr",[e("td",[t._v("dangerouslyUseHTMLString")]),e("td",[t._v("把content当做html解析，谨慎使用")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"shi-li-fang-fa-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shi-li-fang-fa-methods"}},[t._v("¶")]),t._v(" 实例方法 Methods")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("方法名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("success")]),e("td",[t._v("弹出成功message框")]),e("td",[t._v("fn(消息内容, 显示时长, 关闭回调)")])]),e("tr",[e("td",[t._v("error")]),e("td",[t._v("弹出失败的message框")]),e("td",[t._v("fn(消息内容, 显示时长, 关闭回调)")])]),e("tr",[e("td",[t._v("warn")]),e("td",[t._v("弹出警告的message框")]),e("td",[t._v("fn(消息内容, 显示时长, 关闭回调)")])]),e("tr",[e("td",[t._v("info")]),e("td",[t._v("弹出普通消息的message框")]),e("td",[t._v("fn(消息内容, 显示时长, 关闭回调)")])]),e("tr",[e("td",[t._v("loading")]),e("td",[t._v("弹出加载中的message框")]),e("td",[t._v("fn(消息内容, 显示时长, 关闭回调)")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h3",{attrs:{id:"zhi-xing-hou-fan-hui-de-shi-li-fang-fa-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zhi-xing-hou-fan-hui-de-shi-li-fang-fa-methods"}},[t._v("¶")]),t._v(" 执行后返回的实例方法 Methods")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("方法名")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("close")]),e("td",[t._v("关闭当前的message")]),e("td",[t._v("-")])])])])}],!1,null,null,null);e.default=n.exports}}]);