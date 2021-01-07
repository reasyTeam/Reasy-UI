(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{203:function(t,e,n){"use strict";n.r(e);var r,i=n(37),a={name:"component-doc",components:{"mo-demo0":Object(i.a)({render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v('const valid = {\n    //函数形式\n    num: function(str, min, max) {\n      if (!/^([-0-9])?([0-9]+)$/.test(str)) {\n        return "输入值必须为整数";\n      }\n      if (typeof min === "number" && typeof max === "number") {\n        if (parseInt(str, 10) '),this._v(' max) {\n          return `有效输入范围：${min} - ${max}`;\n        }\n      }\n    },\n    //对象形式\n    ssid: {\n      all: function(str) {\n        let ret = this.specific(str);\n\n        if (ret) {\n          return ret;\n        }\n      },\n\n      specific: function(str) {\n        if(str.length > 32) {\n          return "请输入正确的ssid";\n        }\n      }\n    }\n  };\n\n  //绑定在原型链上\n  Vue.prototype.$valid = valid;</div>')])}]},{}),"mo-demo1":(r={data:function(){return{ruleForm:{ssid:"111",pwd:"123",power:12,ip:"192.168.0.10",index:10,downLimit:1,day:[],time:"10:12",date:"",security:""},options:[{label:"1MB",value:1},{label:"2MB",value:2},{label:"3MB",value:3},{label:"4MB",value:4}],checkboxOptions:[{label:"星期一",value:"1"},{label:"星期二",value:"2"},{label:"星期三",value:"3"},{label:"星期四",value:"4"},{label:"星期五",value:"5"},{label:"星期六",value:"6"},{label:"星期日",value:"7"}],radioOptions:[{label:"加密",value:"aes"},{label:"不加密",value:"none"}],rules:{ssid:[{type:"num",args:[1,12],msg:"请输入正确的范围，范围1-12"}],power:{type:"num",args:[1,12]},ip:{type:"ip"},index:{type:"num",args:[1,12]},downLimit:{type:"num",args:[1,12]}}}},methods:{submitForm:function(){this.$refs.form.submitForm()},submit:function(t){this.$message.success("验证成功"),console.log("submit data",t)},cancel:function(){}},watch:{}},Object(i.a)({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-form",{ref:"form",attrs:{model:e.ruleForm,rules:e.rules},on:{submit:e.submit}},[n("v-form-item",{attrs:{label:"数字",prop:"ssid"}},[n("v-input",{model:{value:e.ruleForm.ssid,callback:function(t){e.$set(e.ruleForm,"ssid",t)},expression:"ruleForm.ssid"}})],1),e._v(" "),n("v-form-item",{attrs:{label:"密码",prop:"pwd"}},[n("v-input",{model:{value:e.ruleForm.pwd,callback:function(t){e.$set(e.ruleForm,"pwd",t)},expression:"ruleForm.pwd"}})],1),e._v(" "),n("v-form-item",{attrs:{label:"功率",prop:"power"}},[n("v-slider",{attrs:{min:0,max:100},model:{value:e.ruleForm.power,callback:function(t){e.$set(e.ruleForm,"power",t)},expression:"ruleForm.power"}})],1),e._v(" "),n("v-form-item",{attrs:{label:"IP地址",prop:"ip"}},[n("v-input-group",{attrs:{type:"ip"},model:{value:e.ruleForm.ip,callback:function(t){e.$set(e.ruleForm,"ip",t)},expression:"ruleForm.ip"}})],1),e._v(" "),n("v-form-item",{attrs:{label:"个数",prop:"index"}},[n("v-input-number",{attrs:{min:1,max:12},model:{value:e.ruleForm.index,callback:function(t){e.$set(e.ruleForm,"index",t)},expression:"ruleForm.index"}})],1),e._v(" "),n("v-form-item",{attrs:{label:"加密",prop:"security"}},[n("v-radio",{attrs:{options:e.radioOptions},model:{value:e.ruleForm.security,callback:function(t){e.$set(e.ruleForm,"security",t)},expression:"ruleForm.security"}})],1),e._v(" "),n("v-form-item",{attrs:{label:"限速",prop:"downLimit"}},[n("v-select",{attrs:{options:e.options,"is-manual":""},model:{value:e.ruleForm.downLimit,callback:function(t){e.$set(e.ruleForm,"downLimit",t)},expression:"ruleForm.downLimit"}})],1),e._v(" "),n("v-form-item",{attrs:{label:"日期",prop:"day"}},[n("v-checkbox-group",{attrs:{"is-select-all":"",selectText:"每天",options:e.checkboxOptions,"is-manual":""},model:{value:e.ruleForm.day,callback:function(t){e.$set(e.ruleForm,"day",t)},expression:"ruleForm.day"}})],1),e._v(" "),n("v-form-item",{attrs:{label:"时间",prop:"time"}},[n("v-timepicker",{model:{value:e.ruleForm.time,callback:function(t){e.$set(e.ruleForm,"time",t)},expression:"ruleForm.time"}})],1),e._v(" "),n("v-form-item",{attrs:{label:"日期时间",prop:"date",required:!1}},[n("v-datepicker",{attrs:{type:"datetime"},model:{value:e.ruleForm.date,callback:function(t){e.$set(e.ruleForm,"date",t)},expression:"ruleForm.date"}})],1),e._v(" "),n("v-form-item",[n("v-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("保存")]),e._v(" "),n("v-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},staticRenderFns:[]},r))}},o=n(0),l=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content reasy-doc"},[t._m(0),t._m(1),t._m(2),n("demo-block",[n("template",{slot:"source"},[n("mo-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('  const valid = {\n    //函数形式\n    num: function(str, min, max) {\n      if (!/^([-0-9])?([0-9]+)$/.test(str)) {\n        return "输入值必须为整数";\n      }\n      if (typeof min === "number" && typeof max === "number") {\n        if (parseInt(str, 10) <script min || parseInt(str, 10) > max) {\n          return `有效输入范围：${min} - ${max}`;\n        }\n      }\n    },\n    //对象形式\n    ssid: {\n      all: function(str) {\n        let ret = this.specific(str);\n\n        if (ret) {\n          return ret;\n        }\n      },\n\n      specific: function(str) {\n        if(str.length > 32) {\n          return "请输入正确的ssid";\n        }\n      }\n    }\n  };\n\n  //绑定在原型链上\n  Vue.prototype.$valid = valid;\n')])])])],2),t._m(3),t._m(4),t._m(5),n("demo-block",[n("template",{slot:"source"},[n("mo-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-form ref="form" :model="ruleForm" :rules="rules" @submit="submit">\n  <v-form-item label="数字" prop="ssid">\n    <v-input v-model="ruleForm.ssid"></v-input>\n  </v-form-item>\n  <v-form-item label="密码" prop="pwd">\n    <v-input v-model="ruleForm.pwd"></v-input>\n  </v-form-item>\n  <v-form-item label="功率" prop="power">\n    <v-slider :min="0" :max="100" v-model="ruleForm.power"></v-slider>\n  </v-form-item>\n  <v-form-item label="IP地址" prop="ip">\n    <v-input-group type="ip" v-model="ruleForm.ip"></v-input-group>\n  </v-form-item>\n  <v-form-item label="个数" prop="index">\n    <v-input-number\n      v-model="ruleForm.index"\n      :min="1"\n      :max="12"\n    ></v-input-number>\n  </v-form-item>\n  <v-form-item label="加密" prop="security">\n    <v-radio v-model="ruleForm.security" :options="radioOptions"></v-radio>\n  </v-form-item>\n  <v-form-item label="限速" prop="downLimit">\n    <v-select\n      v-model="ruleForm.downLimit"\n      :options="options"\n      is-manual\n    ></v-select>\n  </v-form-item>\n  <v-form-item label="日期" prop="day">\n    <v-checkbox-group\n      is-select-all\n      selectText="每天"\n      v-model="ruleForm.day"\n      :options="checkboxOptions"\n      is-manual\n    ></v-checkbox-group>\n  </v-form-item>\n  <v-form-item label="时间" prop="time">\n    <v-timepicker v-model="ruleForm.time"></v-timepicker>\n  </v-form-item>\n  <v-form-item label="日期时间" prop="date" :required="false">\n    <v-datepicker v-model="ruleForm.date" type="datetime"></v-datepicker>\n  </v-form-item>\n  <v-form-item>\n    <v-button type="primary" @click="submitForm">保存</v-button>\n    <v-button @click="cancel">取消</v-button>\n  </v-form-item>\n</v-form>\n\n<script>\n  export default {\n    data() {\n      return {\n        ruleForm: {\n          ssid: "111",\n          pwd: "123",\n          power: 12,\n          ip: "192.168.0.10",\n          index: 10,\n          downLimit: 1,\n          day: [],\n          time: "10:12",\n          date: "",\n          security: ""\n        },\n        options: [\n          {\n            label: "1MB",\n            value: 1\n          },\n          {\n            label: "2MB",\n            value: 2\n          },\n          {\n            label: "3MB",\n            value: 3\n          },\n          {\n            label: "4MB",\n            value: 4\n          }\n        ],\n        checkboxOptions: [\n          {\n            label: "星期一",\n            value: "1"\n          },\n          {\n            label: "星期二",\n            value: "2"\n          },\n          {\n            label: "星期三",\n            value: "3"\n          },\n          {\n            label: "星期四",\n            value: "4"\n          },\n          {\n            label: "星期五",\n            value: "5"\n          },\n          {\n            label: "星期六",\n            value: "6"\n          },\n          {\n            label: "星期日",\n            value: "7"\n          }\n        ],\n        radioOptions: [\n          {\n            label: "加密",\n            value: "aes"\n          },\n          {\n            label: "不加密",\n            value: "none"\n          }\n        ],\n        rules: {\n          ssid: [\n            { type: "num", args: [1, 12], msg: "请输入正确的范围，范围1-12" }\n          ],\n          power: { type: "num", args: [1, 12] },\n          ip: { type: "ip" },\n          index: { type: "num", args: [1, 12] },\n          downLimit: { type: "num", args: [1, 12] }\n        }\n      };\n    },\n    methods: {\n      submitForm() {\n        this.$refs.form.submitForm();\n      },\n      submit(data) {\n        this.$message.success("验证成功");\n        console.log("submit data", data);\n      },\n      cancel() {}\n    },\n    watch: {}\n  };\n<\/script>\n')])])])],2),t._m(6),t._m(7),t._m(8),n("p",[t._v("key 为 表单选项的 prop，")]),n("p",[t._v("值为验证规则，多条验证规则时，为数组")]),n("p",[t._v("验证规则，rules 选项配置")]),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),n("side-link")],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"biao-dan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#biao-dan"}},[t._v("¶")]),t._v(" 表单")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"qian-ti-tiao-jian"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#qian-ti-tiao-jian"}},[t._v("¶")]),t._v(" 前提条件")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("首先要在"),n("code",[t._v("Vue")]),t._v("的"),n("code",[t._v("prototype")]),t._v("上绑定"),n("code",[t._v("$valid")]),t._v("数据验证对象，对象形式时，执行"),n("code",[t._v("all")]),t._v("方法")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"ji-ben-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa"}},[t._v("¶")]),t._v(" 基本用法")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("表单元素组件为"),n("code",[t._v("v-form-item")]),t._v("，元素组件必须包含在"),n("code",[t._v("v-form-item")]),t._v("组件内才能生效。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("code",[t._v("rules")]),t._v("为元素验证规则。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"shu-xing-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing-attributes"}},[t._v("¶")]),t._v(" 属性 Attributes")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("rules")]),n("td",[t._v("数据验证规则")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("{}")])]),n("tr",[n("td",[t._v("model")]),n("td",[t._v("表单数据对象")]),n("td",[t._v("Object")]),n("td",[t._v("—")]),n("td",[t._v("{}")])]),n("tr",[n("td",[t._v("is-label-right")]),n("td",[t._v("文字方向是否右对齐")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("beforeSubmit")]),n("td",[t._v("表单提交前数据验证，返回 false 时不会执行 submit"),n("br"),t._v("function(data) {}")]),n("td",[t._v("function")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td"),n("td"),n("td",[t._v("—")]),n("td"),n("td")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"rules-yan-zheng-gui-ze"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rules-yan-zheng-gui-ze"}},[t._v("¶")]),t._v(" rules 验证规则")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("type")]),n("td",[t._v("数据验证类型")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("max")]),n("td",[t._v("最大值或最大长度")]),n("td",[t._v("string / number")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("min")]),n("td",[t._v("最小值或最小长度")]),n("td",[t._v("string / number")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("msg")]),n("td",[t._v("错误提示信息，如果定义了，当验证错误时会提示此信息")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"v-form-methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v-form-methods"}},[t._v("¶")]),t._v(" v-form Methods")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("方法名")]),n("th",[t._v("说明")]),n("th",[t._v("参数")])])]),n("tbody",[n("tr",[n("td",[t._v("submitForm")]),n("td",[t._v("提交表单事件")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("getSubmitData")]),n("td",[t._v("获取表单提交数据")]),n("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"v-form-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v-form-events"}},[t._v("¶")]),t._v(" v-form Events")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),n("th",[t._v("说明")]),n("th",[t._v("参数")])])]),n("tbody",[n("tr",[n("td",[t._v("submit")]),n("td",[t._v("表单验证完后的提交数据事件")]),n("td",[t._v("提交的表单数据")])]),n("tr",[n("td",[t._v("cancel")]),n("td",[t._v("表单取消事件")]),n("td",[t._v("—")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"v-form-item-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-form-item-attributes"}},[this._v("¶")]),this._v(" v-form-item Attributes")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("label")]),n("td",[t._v("选项文字")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("is-no-label")]),n("td",[t._v("不显示文字")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("prop")]),n("td",[t._v("选项属性，用于数据验证规则和提交数据，不填不会对数据进行验证和提交")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("required")]),n("td",[t._v("是否必填")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("true")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"v-form-item-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-form-item-methods"}},[this._v("¶")]),this._v(" v-form-item Methods")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("方法名")]),n("th",[t._v("说明")]),n("th",[t._v("参数")])])]),n("tbody",[n("tr",[n("td",[t._v("checkValid")]),n("td",[t._v("数据验证，返回是否验证成功"),n("br"),t._v("function(data)")]),n("td",[t._v("选项的值")])])])])}],!1,null,null,null);e.default=l.exports}}]);