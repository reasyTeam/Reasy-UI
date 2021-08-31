(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{211:function(t,e,n){"use strict";n.r(e);var l,o,a,i=n(40),s={name:"component-doc",components:{"mo-demo0":(a={data:function(){return{showDialog:!1,closeOnClickModal:!0,dialogTitle:"对话框的标题",showDialog1:!1,closeOnClickModal1:!1}},methods:{handleButtonClick:function(){this.showDialog=!this.showDialog},handleButtonClick1:function(){this.showDialog1=!this.showDialog1},handleConfirm:function(){console.log("Emit CONFIRM event, timestamp: ".concat((new Date).getTime())),this.handleButtonClick()},handleOpen:function(){console.log("Emit OPEN event, timestamp: ".concat((new Date).getTime()))},handleAfterClose:function(){console.log("Emit AFTER-CLOSE event, timestamp: ".concat((new Date).getTime()))},handleCancel:function(){console.log("Emit CANCEL event, timestamp: ".concat((new Date).getTime()))},handleDialogInputClick:function(){this.showInputDialog=!this.showInputDialog}}},Object(i.a)({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("v-dialog",{attrs:{title:e.dialogTitle,"close-on-click-modal":e.closeOnClickModal,modal:!0,width:600},on:{confirm:e.handleConfirm,open:e.handleOpen,"after-close":e.handleAfterClose,cancel:e.handleCancel},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[e._v("\n    我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框。\n  ")]),e._v(" "),n("v-dialog",{attrs:{title:e.dialogTitle,"close-on-click-modal":e.closeOnClickModal1,modal:!0,width:600},on:{confirm:e.handleConfirm,open:e.handleOpen,"after-close":e.handleAfterClose,cancel:e.handleCancel},model:{value:e.showDialog1,callback:function(t){e.showDialog1=t},expression:"showDialog1"}},[e._v("\n    我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框。\n  ")]),e._v(" "),n("v-button",{attrs:{type:"text"},on:{click:e.handleButtonClick}},[e._v("点我打开 Dialog")]),e._v(" "),n("v-button",{attrs:{type:"text"},on:{click:e.handleButtonClick1}},[e._v("点击外部不关闭 Dialog")])]],2)},staticRenderFns:[]},a)),"mo-demo1":(o={data:function(){return{showDialog:!1,closeOnClickModal:!0,dialogTitle:"带控件对话框的标题",showInputDialog:!1,dialogInput:"",selectVal:1,selectOptions:[{label:"shooting",value:0},{label:"eating",value:1},{label:"sleeping",value:2}]}},methods:{handleConfirm:function(){console.log("Emit CONFIRM event, timestamp: ".concat((new Date).getTime())),this.handleButtonClick()},handleDialogInputClick:function(){this.showInputDialog=!this.showInputDialog}}},Object(i.a)({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("v-dialog",{attrs:{title:e.dialogTitle,"close-on-click-modal":e.closeOnClickModal,modal:!0},on:{confirm:e.handleConfirm},model:{value:e.showInputDialog,callback:function(t){e.showInputDialog=t},expression:"showInputDialog"}},[n("div",{staticClass:"form-control"},[n("label",{staticClass:"form-control__label",attrs:{for:""}},[e._v("name:")]),e._v(" "),n("v-input",{model:{value:e.dialogInput,callback:function(t){e.dialogInput=t},expression:"dialogInput"}})],1),e._v(" "),n("div",{staticClass:"form-control"},[n("label",{staticClass:"form-control__label",attrs:{for:""}},[e._v("hobit:")]),e._v(" "),n("v-select",{attrs:{options:e.selectOptions},model:{value:e.selectVal,callback:function(t){e.selectVal=t},expression:"selectVal"}})],1)]),e._v(" "),n("v-button",{attrs:{type:"text"},on:{click:e.handleDialogInputClick}},[e._v("内嵌表单的 Dialog")])]],2)},staticRenderFns:[]},o)),"mo-demo2":(l={data:function(){return{showDialog:!1,closeOnClickModal:!0,dialogTitle:"居中布局对话框的标题"}},methods:{handleConfirm:function(){console.log("Emit CONFIRM event, timestamp: ".concat((new Date).getTime())),this.handleButtonClick()},handleDialogClick:function(){this.showDialog=!this.showDialog}}},Object(i.a)({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("v-dialog",{attrs:{title:e.dialogTitle,"close-on-click-modal":e.closeOnClickModal,"show-close":!1,modal:!0,"align-center":!0},on:{confirm:e.handleConfirm},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[n("p",{staticClass:"dialog-content"},[e._v("需要注意的是内容不居中。")])]),e._v(" "),n("v-button",{attrs:{type:"text"},on:{click:e.handleDialogClick}},[e._v("居中布局的 Dialog")])]],2)},staticRenderFns:[]},l))}},c=n(1),d=Object(c.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content reasy-doc"},[t._m(0),n("p",[t._v("在保留当前页面状态的情况下，告知用户并承载相关操作。")]),t._m(1),t._m(2),t._m(3),n("demo-block",[n("template",{slot:"source"},[n("mo-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-dialog\n    v-model="showDialog"\n    :title="dialogTitle"\n    :close-on-click-modal="closeOnClickModal"\n    :modal="true"\n    :width="600"\n    @confirm="handleConfirm"\n    @open="handleOpen"\n    @after-close="handleAfterClose"\n    @cancel="handleCancel"\n  >\n    我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框。\n  </v-dialog>\n\n  <v-dialog\n    v-model="showDialog1"\n    :title="dialogTitle"\n    :close-on-click-modal="closeOnClickModal1"\n    :modal="true"\n    :width="600"\n    @confirm="handleConfirm"\n    @open="handleOpen"\n    @after-close="handleAfterClose"\n    @cancel="handleCancel"\n  >\n    我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框。\n  </v-dialog>\n\n  <v-button type="text" @click="handleButtonClick">点我打开 Dialog</v-button>\n  <v-button type="text" @click="handleButtonClick1">点击外部不关闭 Dialog</v-button>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      showDialog: false,\n      closeOnClickModal: true,\n      dialogTitle: "对话框的标题",\n\n      showDialog1: false,\n      closeOnClickModal1: false\n    };\n  },\n  methods: {\n    handleButtonClick() {\n      this.showDialog = !this.showDialog;\n    },\n    handleButtonClick1() {\n      this.showDialog1 = !this.showDialog1;\n    },\n    handleConfirm() {\n      console.log(`Emit CONFIRM event, timestamp: ${new Date().getTime()}`);\n      this.handleButtonClick();\n    },\n    handleOpen() {\n      console.log(`Emit OPEN event, timestamp: ${new Date().getTime()}`);\n    },\n    handleAfterClose() {\n      console.log(`Emit AFTER-CLOSE event, timestamp: ${new Date().getTime()}`);\n    },\n    handleCancel() {\n      console.log(`Emit CANCEL event, timestamp: ${new Date().getTime()}`);\n    },\n    handleDialogInputClick() {\n      this.showInputDialog = !this.showInputDialog;\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(4),n("p",[t._v("Dialog的内容可以是任意的，甚至可以是表格和表单，下面是应用了本组件的表单组件的demo。")]),n("demo-block",[n("div",[n("p",[t._v("通过设置"),n("code",[t._v("默认插槽")]),t._v("来自定义对话框内容。")])]),n("template",{slot:"source"},[n("mo-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-dialog\n    v-model="showInputDialog"\n    :title="dialogTitle"\n    :close-on-click-modal="closeOnClickModal"\n    :modal="true"\n    @confirm="handleConfirm"\n  >\n    <div class="form-control">\n      <label class="form-control__label" for="">name:</label>\n      <v-input v-model="dialogInput"></v-input>\n    </div>\n    <div class="form-control">\n      <label class="form-control__label" for="">hobit:</label>\n      <v-select v-model="selectVal" :options="selectOptions"></v-select>\n    </div>\n  </v-dialog>\n  <v-button type="text" @click="handleDialogInputClick">内嵌表单的 Dialog</v-button>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      showDialog: false,\n      closeOnClickModal: true,\n      dialogTitle: "带控件对话框的标题",\n\n      showInputDialog: false,\n      dialogInput: "",\n      selectVal: 1,\n      selectOptions: [\n        {\n          label: "shooting",\n          value: 0\n        },\n        {\n          label: "eating",\n          value: 1\n        },\n        {\n          label: "sleeping",\n          value: 2\n        }\n      ]\n    };\n  },\n  methods: {\n    handleConfirm() {\n      console.log(`Emit CONFIRM event, timestamp: ${new Date().getTime()}`);\n      this.handleButtonClick();\n    },\n    handleDialogInputClick() {\n      this.showInputDialog = !this.showInputDialog;\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(5),n("p",[t._v("标题和底部可以设置水平居中。")]),n("demo-block",[n("div",[n("p",[t._v("通过"),n("code",[t._v("align-center")]),t._v("来设置居中。")])]),n("template",{slot:"source"},[n("mo-demo2")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-dialog\n    v-model="showDialog"\n    :title="dialogTitle"\n    :close-on-click-modal="closeOnClickModal"\n    :show-close="false"\n    :modal="true"\n    :align-center="true"\n    @confirm="handleConfirm"\n  >\n    <p class="dialog-content">需要注意的是内容不居中。</p>\n  </v-dialog>\n  <v-button type="text" @click="handleDialogClick">居中布局的 Dialog</v-button>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      showDialog: false,\n      closeOnClickModal: true,\n      dialogTitle: "居中布局对话框的标题",\n    };\n  },\n  methods: {\n    handleConfirm() {\n      console.log(`Emit CONFIRM event, timestamp: ${new Date().getTime()}`);\n      this.handleButtonClick();\n    },\n    handleDialogClick() {\n      this.showDialog = !this.showDialog;\n    }\n  }\n};\n<\/script>\n')])])])],2),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),n("side-link")],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"dui-hua-kuang"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dui-hua-kuang"}},[t._v("¶")]),t._v(" 对话框")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"an-xu-yin-yong"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-js"},[t._v('import { Dialog } from "@reasy-team/reasy-ui";\n\nVue.use(Dialog);\n')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"ji-chu-shi-li"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-shi-li"}},[t._v("¶")]),t._v(" 基础示例")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"zi-ding-yi-nei-rong"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-nei-rong"}},[t._v("¶")]),t._v(" 自定义内容")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"ju-zhong-bu-ju"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ju-zhong-bu-ju"}},[t._v("¶")]),t._v(" 居中布局")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"shu-xing-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing-attributes"}},[t._v("¶")]),t._v(" 属性 Attributes")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("v-model")]),n("td",[t._v("是否显示dialog")]),n("td",[t._v("boolean")]),n("td",[t._v("-")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("title")]),n("td",[t._v("dialog的标题，也可通过具名slot传入")]),n("td",[t._v("-")]),n("td",[t._v("-")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("show-title")]),n("td",[t._v("是否显示dialog标题")]),n("td",[t._v("boolean")]),n("td",[t._v("-")]),n("td",[t._v("true")])]),n("tr",[n("td",[t._v("width")]),n("td",[t._v("dialog的宽度")]),n("td",[t._v("string")]),n("td",[t._v("-")]),n("td",[t._v("auto")])]),n("tr",[n("td",[t._v("modal")]),n("td",[t._v("是否需要遮罩层")]),n("td",[t._v("boolean")]),n("td",[t._v("-")]),n("td",[t._v("true")])]),n("tr",[n("td",[t._v("close-on-click-modal")]),n("td",[t._v("是否可以通过点击modal关闭dialog")]),n("td",[t._v("boolean")]),n("td",[t._v("-")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("show-close")]),n("td",[t._v("是否显示关闭按钮")]),n("td",[t._v("boolean")]),n("td",[t._v("-")]),n("td",[t._v("true")])]),n("tr",[n("td",[t._v("show-confirm")]),n("td",[t._v("是否显示确定按钮")]),n("td",[t._v("boolean")]),n("td",[t._v("-")]),n("td",[t._v("true")])]),n("tr",[n("td",[t._v("show-cancel")]),n("td",[t._v("是否显示取消按钮")]),n("td",[t._v("boolean")]),n("td",[t._v("-")]),n("td",[t._v("true")])]),n("tr",[n("td",[t._v("confirm-button-text")]),n("td",[t._v("确认按钮文字")]),n("td",[t._v("string")]),n("td",[t._v("-")]),n("td",[t._v("确定")])]),n("tr",[n("td",[t._v("cancel-button-text")]),n("td",[t._v("取消按钮文字")]),n("td",[t._v("string")]),n("td",[t._v("-")]),n("td",[t._v("取消")])]),n("tr",[n("td",[t._v("confirm-button-type")]),n("td",[t._v("确认按钮类型")]),n("td",[t._v("string")]),n("td",[t._v("参考button组件类型")]),n("td",[t._v("primary")])]),n("tr",[n("td",[t._v("cancel-button-type")]),n("td",[t._v("取消按钮类型")]),n("td",[t._v("string")]),n("td",[t._v("参考button组件类型")]),n("td",[t._v("info")])]),n("tr",[n("td",[t._v("align-center")]),n("td",[t._v("是否对头部和底部采用居中布局")]),n("td",[t._v("boolean")]),n("td",[t._v("-")]),n("td",[t._v("false")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("¶")]),t._v(" Events")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名称")]),n("th",[t._v("说明")]),n("th",[t._v("参数")])])]),n("tbody",[n("tr",[n("td",[t._v("open")]),n("td",[t._v("打开dialog触发")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("after-close")]),n("td",[t._v("关闭后回调")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("confirm")]),n("td",[t._v("点击确定按钮触发")]),n("td",[t._v("-")])]),n("tr",[n("td",[t._v("cancel")]),n("td",[t._v("点击取消按钮触发")]),n("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"slot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[t._v("¶")]),t._v(" Slot")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("name")]),n("th",[t._v("说明")])])]),n("tbody",[n("tr",[n("td",[t._v("default")]),n("td",[t._v("dialog的内容")])]),n("tr",[n("td",[t._v("title")]),n("td",[t._v("dialog标题区的内容")])]),n("tr",[n("td",[t._v("footer")]),n("td",[t._v("dialog按钮操作区的内容")])])])])}],!1,null,null,null);e.default=d.exports}}]);