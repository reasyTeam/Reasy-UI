(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{254:function(t,e,n){"use strict";n.r(e);var o=n(34),o=(n(2),{name:"component-doc",components:{"mo-demo0":(l={data:function(){return{showDialog:!1,showBigDialog:!1,closeOnClickModal:!0,dialogTitle:"对话框的标题",showDialog1:!1,closeOnClickModal1:!1}},methods:{handleButtonClick:function(){this.showDialog=!this.showDialog},handleButtonClick1:function(){this.showDialog1=!this.showDialog1},handleConfirm:function(){console.log("Emit CONFIRM event, timestamp: ".concat((new Date).getTime())),this.handleButtonClick()},handleOpen:function(){console.log("Emit OPEN event, timestamp: ".concat((new Date).getTime()))},handleAfterClose:function(){console.log("Emit AFTER-CLOSE event, timestamp: ".concat((new Date).getTime()))},handleCancel:function(){console.log("Emit CANCEL event, timestamp: ".concat((new Date).getTime()))},handleDialogInputClick:function(){this.showInputDialog=!this.showInputDialog},handleBigClick:function(){this.showBigDialog=!this.showBigDialog}}},Object(o.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("v-dialog",{attrs:{name:"basic",title:e.dialogTitle,"close-on-click-modal":e.closeOnClickModal,modal:!0,"append-to-body":""},on:{confirm:e.handleConfirm,open:e.handleOpen,"after-close":e.handleAfterClose,cancel:e.handleCancel},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[e._v("\n    我是对话框区域内容。\n  ")]),e._v(" "),t("v-dialog",{attrs:{name:"basic-t",title:e.dialogTitle,"close-on-click-modal":e.closeOnClickModal1,modal:!0,width:640,"append-to-body":""},on:{confirm:e.handleConfirm,open:e.handleOpen,"after-close":e.handleAfterClose,cancel:e.handleCancel},model:{value:e.showDialog1,callback:function(t){e.showDialog1=t},expression:"showDialog1"}},[e._v("\n    我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框。\n  ")]),e._v(" "),t("v-dialog",{attrs:{name:"dialog1",title:e.dialogTitle,width:800,modal:!0,"append-to-body":""},model:{value:e.showBigDialog,callback:function(t){e.showBigDialog=t},expression:"showBigDialog"}},[t("div",{staticStyle:{height:"1000px"}},[e._v("超高弹出框！")])]),e._v(" "),t("v-button",{attrs:{name:"button1",type:"text"},on:{click:e.handleButtonClick}},[e._v("点我打开 Dialog")]),e._v(" "),t("v-button",{attrs:{name:"button2",type:"text"},on:{click:e.handleButtonClick1}},[e._v("点击外部不关闭 Dialog")]),e._v(" "),t("v-button",{attrs:{name:"button3",type:"text"},on:{click:e.handleBigClick}},[e._v("超高弹出框")])]],2)},staticRenderFns:[]},l)),"mo-demo1":(l={data:function(){return{showDialog:!1,closeOnClickModal:!0,dialogTitle:"带控件对话框的标题",showInputDialog:!1,dialogInput:"",selectVal:1,ruleForm:{name:"",hobit:0},selectOptions:[{label:"shooting",value:0},{label:"eating",value:1},{label:"sleeping",value:2}]}},methods:{handleConfirm:function(){console.log("Emit CONFIRM event, timestamp: ".concat((new Date).getTime())),this.showInputDialog=!1},handleAfterClose:function(){this.$message.success("保存成功")},handleDialogInputClick:function(){this.showInputDialog=!this.showInputDialog}}},Object(o.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("v-dialog",{attrs:{name:"dialog2",title:e.dialogTitle,"close-on-click-modal":e.closeOnClickModal,modal:!0,"append-to-body":""},on:{"after-close":e.handleAfterClose,confirm:e.handleConfirm},model:{value:e.showInputDialog,callback:function(t){e.showInputDialog=t},expression:"showInputDialog"}},[t("v-form",{ref:"form",attrs:{model:e.ruleForm}},[t("v-form-item",{attrs:{label:"姓名",prop:"name"}},[t("v-input",{attrs:{name:"name1"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),t("v-form-item",{attrs:{label:"爱好",prop:"hobit"}},[t("v-select",{attrs:{name:"hobit",options:e.selectOptions},model:{value:e.ruleForm.hobit,callback:function(t){e.$set(e.ruleForm,"hobit",t)},expression:"ruleForm.hobit"}})],1)],1)],1),e._v(" "),t("v-button",{attrs:{name:"button5",type:"text"},on:{click:e.handleDialogInputClick}},[e._v("内嵌表单的 Dialog")])]],2)},staticRenderFns:[]},l)),"mo-demo2":(l={data:function(){return{showDialog:!1,closeOnClickModal:!0,dialogTitle:"居中布局对话框的标题"}},methods:{handleConfirm:function(){console.log("Emit CONFIRM event, timestamp: ".concat((new Date).getTime())),this.handleButtonClick()},handleDialogClick:function(){this.showDialog=!this.showDialog}}},Object(o.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[[t("v-dialog",{attrs:{name:"dialog3",title:e.dialogTitle,"close-on-click-modal":e.closeOnClickModal,"show-close":!1,modal:!0,"align-center":!0,"append-to-body":""},on:{confirm:e.handleConfirm},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[t("div",[e._v("需要注意的是内容不居中。")])]),e._v(" "),t("v-button",{attrs:{name:"button6",type:"text"},on:{click:e.handleDialogClick}},[e._v("居中布局的 Dialog")])]],2)},staticRenderFns:[]},l))}}),l=n(1),n=Object(l.a)(o,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("section",{staticClass:"content reasy-doc"},[e("h1",[t._v("对话框")]),e("p",[t._v("在保留当前页面状态的情况下，告知用户并承载相关操作。")]),t._m(0),t._m(1),t._m(2),e("demo-block",[e("template",{slot:"source"},[e("mo-demo0")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-dialog\n    name="basic"\n    v-model="showDialog"\n    :title="dialogTitle"\n    :close-on-click-modal="closeOnClickModal"\n    :modal="true"\n    @confirm="handleConfirm"\n    @open="handleOpen"\n    @after-close="handleAfterClose"\n    @cancel="handleCancel"\n    append-to-body\n  >\n    我是对话框区域内容。\n  </v-dialog>\n\n  <v-dialog\n    name="basic-t"\n    v-model="showDialog1"\n    :title="dialogTitle"\n    :close-on-click-modal="closeOnClickModal1"\n    :modal="true"\n    :width="640"\n    @confirm="handleConfirm"\n    @open="handleOpen"\n    @after-close="handleAfterClose"\n    @cancel="handleCancel"\n    append-to-body\n  >\n    我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框。\n  </v-dialog>\n  <v-dialog\n    name="dialog1"\n    v-model="showBigDialog"\n    :title="dialogTitle"\n    :width="800"\n    :modal="true"\n    append-to-body\n  >\n    <div style="height: 1000px;">超高弹出框！</div>\n  </v-dialog>\n\n  <v-button name="button1" type="text" @click="handleButtonClick"\n    >点我打开 Dialog</v-button\n  >\n  <v-button name="button2" type="text" @click="handleButtonClick1"\n    >点击外部不关闭 Dialog</v-button\n  >\n  <v-button name="button3" type="text" @click="handleBigClick">超高弹出框</v-button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        showDialog: false,\n        showBigDialog: false,\n        closeOnClickModal: true,\n        dialogTitle: "对话框的标题",\n\n        showDialog1: false,\n        closeOnClickModal1: false\n      };\n    },\n    methods: {\n      handleButtonClick() {\n        this.showDialog = !this.showDialog;\n      },\n      handleButtonClick1() {\n        this.showDialog1 = !this.showDialog1;\n      },\n      handleConfirm() {\n        console.log(`Emit CONFIRM event, timestamp: ${new Date().getTime()}`);\n        this.handleButtonClick();\n      },\n      handleOpen() {\n        console.log(`Emit OPEN event, timestamp: ${new Date().getTime()}`);\n      },\n      handleAfterClose() {\n        console.log(\n          `Emit AFTER-CLOSE event, timestamp: ${new Date().getTime()}`\n        );\n      },\n      handleCancel() {\n        console.log(`Emit CANCEL event, timestamp: ${new Date().getTime()}`);\n      },\n      handleDialogInputClick() {\n        this.showInputDialog = !this.showInputDialog;\n      },\n      handleBigClick() {\n        this.showBigDialog = !this.showBigDialog;\n      }\n    }\n  };\n<\/script>\n')])])])],2),t._m(3),e("p",[t._v("Dialog 的内容可以是任意的，甚至可以是表格和表单，下面是应用了本组件的表单组件的 demo。")]),e("demo-block",[e("div",[e("p",[t._v("通过设置"),e("code",[t._v("默认插槽")]),t._v("来自定义对话框内容。")])]),e("template",{slot:"source"},[e("mo-demo1")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-dialog\n    name="dialog2"\n    v-model="showInputDialog"\n    :title="dialogTitle"\n    :close-on-click-modal="closeOnClickModal"\n    :modal="true"\n    @after-close="handleAfterClose"\n    @confirm="handleConfirm"\n    append-to-body\n  >\n    <v-form ref="form" :model="ruleForm">\n      <v-form-item label="姓名" prop="name">\n        <v-input name="name1" v-model="ruleForm.name"></v-input>\n      </v-form-item>\n      <v-form-item label="爱好" prop="hobit">\n        <v-select name="hobit" v-model="ruleForm.hobit" :options="selectOptions"></v-select>\n      </v-form-item>\n    </v-form>\n  </v-dialog>\n  <v-button name="button5" type="text" @click="handleDialogInputClick"\n    >内嵌表单的 Dialog</v-button\n  >\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        showDialog: false,\n        closeOnClickModal: true,\n        dialogTitle: "带控件对话框的标题",\n\n        showInputDialog: false,\n        dialogInput: "",\n        selectVal: 1,\n        ruleForm: {\n          name: "",\n          hobit: 0\n        },\n        selectOptions: [\n          {\n            label: "shooting",\n            value: 0\n          },\n          {\n            label: "eating",\n            value: 1\n          },\n          {\n            label: "sleeping",\n            value: 2\n          }\n        ]\n      };\n    },\n    methods: {\n      handleConfirm() {\n        console.log(`Emit CONFIRM event, timestamp: ${new Date().getTime()}`);\n        this.showInputDialog = false;\n      },\n      handleAfterClose() {\n        this.$message.success("保存成功");\n      },\n      handleDialogInputClick() {\n        this.showInputDialog = !this.showInputDialog;\n      }\n    }\n  };\n<\/script>\n')])])])],2),t._m(4),e("p",[t._v("标题和底部可以设置水平居中。")]),e("demo-block",[e("div",[e("p",[t._v("通过"),e("code",[t._v("align-center")]),t._v("来设置居中。")])]),e("template",{slot:"source"},[e("mo-demo2")],1),e("template",{slot:"highlight"},[e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <v-dialog\n    name="dialog3"\n    v-model="showDialog"\n    :title="dialogTitle"\n    :close-on-click-modal="closeOnClickModal"\n    :show-close="false"\n    :modal="true"\n    :align-center="true"\n    @confirm="handleConfirm"\n    append-to-body\n  >\n    <div>需要注意的是内容不居中。</div>\n  </v-dialog>\n  <v-button name="button6" type="text" @click="handleDialogClick"\n    >居中布局的 Dialog</v-button\n  >\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        showDialog: false,\n        closeOnClickModal: true,\n        dialogTitle: "居中布局对话框的标题"\n      };\n    },\n    methods: {\n      handleConfirm() {\n        console.log(`Emit CONFIRM event, timestamp: ${new Date().getTime()}`);\n        this.handleButtonClick();\n      },\n      handleDialogClick() {\n        this.showDialog = !this.showDialog;\n      }\n    }\n  };\n<\/script>\n')])])])],2),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),e("side-link")],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"an-xu-yin-yong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("pre",[e("code",{staticClass:"language-js"},[t._v('import { Base, Dialog, Button } from "@reasy-team/reasy-ui";\n\nVue.use(Dialog);\nVue.use(Button);\nVue.use(Base);\n')])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"ji-chu-shi-li"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-shi-li"}},[t._v("¶")]),t._v(" 基础示例")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"zi-ding-yi-nei-rong"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-nei-rong"}},[t._v("¶")]),t._v(" 自定义内容")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"ju-zhong-bu-ju"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ju-zhong-bu-ju"}},[t._v("¶")]),t._v(" 居中布局")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("¶")]),t._v(" Props")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选值")]),e("th",[t._v("默认值")])])]),e("tbody",[e("tr",[e("td",[t._v("v-model")]),e("td",[t._v("是否显示 dialog")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("no-id")]),e("td",[t._v("是否不需要id，为false则以"),e("code",[t._v("name")]),t._v("作为id，除特殊情况，表单中使用必须添加id")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("name")]),e("td",[t._v("原生属性name，同时渲染为id属性，当"),e("code",[t._v("no-id")]),t._v("为false时"),e("strong",[t._v("必填")])]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("dialog 的标题，也可通过具名 slot 传入")]),e("td",[t._v("-")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("show-title")]),e("td",[t._v("是否显示 dialog 标题")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("width")]),e("td",[t._v("dialog 的宽度")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("auto")])]),e("tr",[e("td",[t._v("modal")]),e("td",[t._v("是否需要遮罩层")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("close-on-click-modal")]),e("td",[t._v("是否可以通过点击 modal 关闭 dialog")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("show-close")]),e("td",[t._v("是否显示关闭按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("show-confirm")]),e("td",[t._v("是否显示确定按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("show-cancel")]),e("td",[t._v("是否显示取消按钮")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("true")])]),e("tr",[e("td",[t._v("confirm-button-text")]),e("td",[t._v("确认按钮文字")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("确定")])]),e("tr",[e("td",[t._v("cancel-button-text")]),e("td",[t._v("取消按钮文字")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("取消")])]),e("tr",[e("td",[t._v("confirm-button-type")]),e("td",[t._v("确认按钮类型")]),e("td",[t._v("string")]),e("td",[t._v("参考 button 组件类型")]),e("td",[t._v("primary")])]),e("tr",[e("td",[t._v("cancel-button-type")]),e("td",[t._v("取消按钮类型")]),e("td",[t._v("string")]),e("td",[t._v("参考 button 组件类型")]),e("td",[t._v("info")])]),e("tr",[e("td",[t._v("align-center")]),e("td",[t._v("是否对头部和底部采用居中布局")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("append-to-body")]),e("td",[t._v("是否将内容插入到 body 中去")]),e("td",[t._v("boolean")]),e("td",[t._v("-")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("append-to-id")]),e("td",[t._v("有id则将内容插入到 id 中去")]),e("td",[t._v("string")]),e("td",[t._v("-")]),e("td",[t._v("空")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("¶")]),t._v(" @Events")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("参数")])])]),e("tbody",[e("tr",[e("td",[t._v("open")]),e("td",[t._v("打开 dialog 触发")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("after-close")]),e("td",[t._v("关闭后回调")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("confirm")]),e("td",[t._v("点击确定按钮触发")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("cancel")]),e("td",[t._v("点击取消按钮触发")]),e("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("h2",{attrs:{id:"slots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("¶")]),t._v(" Slots")])},function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),e("th",[t._v("说明")])])]),e("tbody",[e("tr",[e("td",[t._v("default")]),e("td",[t._v("dialog 的内容")])]),e("tr",[e("td",[t._v("title")]),e("td",[t._v("dialog 标题区的内容")])]),e("tr",[e("td",[t._v("footer")]),e("td",[t._v("dialog 按钮操作区的内容")])])])])}],!1,null,null,null);e.default=n.exports}}]);