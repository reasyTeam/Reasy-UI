(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{213:function(e,t,r){"use strict";r.r(t);r(15),r(28);var n,o,i=r(30),l={name:"component-doc",components:{"mo-demo0":(o={data:function(){return{ruleForm:{ssid:"111",pwd:"123",power:12,ip:"192.168.0.10",index:10,downLimit:1,day:[],time:"10:12",date:"",date1:[],on:!0,security:""},options:[{label:"1MB",value:1},{label:"2MB",value:2},{label:"3MB",value:3},{label:"4MB",value:4}],checkboxOptions:[{label:"星期一",value:"1"},{label:"星期二",value:"2"},{label:"星期三",value:"3"},{label:"星期四",value:"4"},{label:"星期五",value:"5"},{label:"星期六",value:"6"},{label:"星期日",value:"7"}],radioOptions:[{label:"加密",value:"aes"},{label:"不加密",value:"none"}],rules:{ssid:[{type:"num",args:[1,12],msg:"请输入正确的范围，范围1-12"}],power:{type:"num",args:[1,12]},ip:[{type:"ip"},this.checkIp],index:{type:"num",args:[1,12]},downLimit:{type:"num",args:[1,12]}}}},methods:{submitForm:function(){this.$refs.form.submitForm()},submit:function(e){this.$message.success("验证成功"),console.log("submit data",e)},checkIp:function(e){if(+e.split(".")[0]<=193)return"自定义验证说明"},cancel:function(){}},watch:{}},Object(i.a)({render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-form",{ref:"form",attrs:{model:t.ruleForm,rules:t.rules},on:{submit:t.submit}},[r("v-form-item",{attrs:{label:"数字",prop:"ssid",unit:"秒"}},[r("v-input",{model:{value:t.ruleForm.ssid,callback:function(e){t.$set(t.ruleForm,"ssid",e)},expression:"ruleForm.ssid"}})],1),t._v(" "),r("v-form-item",{attrs:{label:"密码",prop:"pwd"},scopedSlots:t._u([{key:"unit",fn:function(){return[t._v("这里显示单位信息")]},proxy:!0}])},[r("v-input",{model:{value:t.ruleForm.pwd,callback:function(e){t.$set(t.ruleForm,"pwd",e)},expression:"ruleForm.pwd"}})],1),t._v(" "),r("v-form-item",{attrs:{label:"IP地址",prop:"ip",description:"这里显示描述信息描述信息"}},[r("v-input-group",{attrs:{type:"ip"},model:{value:t.ruleForm.ip,callback:function(e){t.$set(t.ruleForm,"ip",e)},expression:"ruleForm.ip"}})],1),t._v(" "),r("v-form-item",{attrs:{label:"个数",prop:"index"}},[r("v-input-number",{attrs:{min:1,max:12},model:{value:t.ruleForm.index,callback:function(e){t.$set(t.ruleForm,"index",e)},expression:"ruleForm.index"}})],1),t._v(" "),r("v-form-item",{attrs:{label:"功率",prop:"power"}},[r("v-slider",{attrs:{min:0,max:100},model:{value:t.ruleForm.power,callback:function(e){t.$set(t.ruleForm,"power",e)},expression:"ruleForm.power"}})],1),t._v(" "),r("v-form-item",{attrs:{label:"加密",prop:"security"}},[r("v-radio",{attrs:{options:t.radioOptions},model:{value:t.ruleForm.security,callback:function(e){t.$set(t.ruleForm,"security",e)},expression:"ruleForm.security"}})],1),t._v(" "),r("v-form-item",{attrs:{label:"开启",prop:"on"}},[r("v-switch",{model:{value:t.ruleForm.on,callback:function(e){t.$set(t.ruleForm,"on",e)},expression:"ruleForm.on"}})],1),t._v(" "),r("v-form-item",{attrs:{label:"限速",prop:"downLimit"}},[r("v-select",{attrs:{options:t.options,"is-manual":""},model:{value:t.ruleForm.downLimit,callback:function(e){t.$set(t.ruleForm,"downLimit",e)},expression:"ruleForm.downLimit"}})],1),t._v(" "),r("v-form-item",{attrs:{label:"日期",prop:"day"}},[r("v-checkbox-group",{attrs:{"is-select-all":"",selectText:"每天",options:t.checkboxOptions,"is-manual":""},model:{value:t.ruleForm.day,callback:function(e){t.$set(t.ruleForm,"day",e)},expression:"ruleForm.day"}})],1),t._v(" "),r("v-form-item",{attrs:{label:"时间",prop:"time"}},[r("v-timepicker",{model:{value:t.ruleForm.time,callback:function(e){t.$set(t.ruleForm,"time",e)},expression:"ruleForm.time"}}),t._v(" "),r("v-form-item",{attrs:{prop:"time","is-no-label":"","is-inline":""}},[r("v-datepicker",{attrs:{type:"datetime"},model:{value:t.ruleForm.date,callback:function(e){t.$set(t.ruleForm,"date",e)},expression:"ruleForm.date"}})],1)],1),t._v(" "),r("v-form-item",{attrs:{label:"日期时间",prop:"date1"}},[r("v-datepicker",{attrs:{width:400,"is-range":"",type:"datetime"},model:{value:t.ruleForm.date1,callback:function(e){t.$set(t.ruleForm,"date1",e)},expression:"ruleForm.date1"}})],1),t._v(" "),r("v-form-item",[r("v-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("保存")]),t._v(" "),r("v-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)},staticRenderFns:[]},o)),"mo-demo1":(n={data:function(){return{ruleForm:{ssid:"111",pwd:"123",power:12,ip:"192.168.0.10",index:10,downLimit:1,day:[],time:"10:12",date:"",date1:[],security:""},options:[{label:"1MB",value:1},{label:"2MB",value:2},{label:"3MB",value:3},{label:"4MB",value:4}],checkboxOptions:[{label:"星期一",value:"1"},{label:"星期二",value:"2"},{label:"星期三",value:"3"},{label:"星期四",value:"4"},{label:"星期五",value:"5"},{label:"星期六",value:"6"},{label:"星期日",value:"7"}],radioOptions:[{label:"加密",value:"aes"},{label:"不加密",value:"none"}],rules:{ssid:[{type:"num",args:[1,12],msg:"请输入正确的范围，范围1-12"}],power:{type:"num",args:[1,12]},ip:[{type:"ip"},this.checkIp],index:{type:"num",args:[1,12]},downLimit:{type:"num",args:[1,12]}}}},methods:{submitForm:function(){this.$refs.form.submitForm()},submit:function(e){this.$message.success("验证成功"),console.log("submit data",e)},checkIp:function(e){if(+e.split(".")[0]<=193)return"自定义验证说明"},cancel:function(){}},watch:{}},Object(i.a)({render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v("全部禁用")]),t._v(" "),r("v-form",{ref:"form",attrs:{disabled:"",model:t.ruleForm,rules:t.rules},on:{submit:t.submit}},[r("v-form-item",{attrs:{label:"数字",prop:"ssid",unit:"秒"}},[r("v-input",{model:{value:t.ruleForm.ssid,callback:function(e){t.$set(t.ruleForm,"ssid",e)},expression:"ruleForm.ssid"}})],1),t._v(" "),r("v-form-item",{attrs:{label:"密码",prop:"pwd"},scopedSlots:t._u([{key:"description",fn:function(){return[t._v("这里显示单位信息")]},proxy:!0}])},[r("v-input",{model:{value:t.ruleForm.pwd,callback:function(e){t.$set(t.ruleForm,"pwd",e)},expression:"ruleForm.pwd"}})],1),t._v(" "),r("v-form-item",{attrs:{label:"IP地址",prop:"ip",description:"这里显示描述信息描述信息"}},[r("v-input-group",{attrs:{type:"ip"},model:{value:t.ruleForm.ip,callback:function(e){t.$set(t.ruleForm,"ip",e)},expression:"ruleForm.ip"}})],1),t._v(" "),r("v-form-item",{attrs:{label:"个数",prop:"index"}},[r("v-input-number",{attrs:{min:1,max:12},model:{value:t.ruleForm.index,callback:function(e){t.$set(t.ruleForm,"index",e)},expression:"ruleForm.index"}})],1),t._v(" "),r("v-form-item",{attrs:{label:"功率",prop:"power"}},[r("v-slider",{attrs:{min:0,max:100},model:{value:t.ruleForm.power,callback:function(e){t.$set(t.ruleForm,"power",e)},expression:"ruleForm.power"}})],1),t._v(" "),r("v-form-item",{attrs:{disabled:""}},[r("v-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("保存")]),t._v(" "),r("v-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1),t._v(" "),r("p",[t._v("部分禁用")]),t._v(" "),r("v-form",[r("v-form-item",{attrs:{label:"功率",prop:"power"}},[r("v-slider",{attrs:{min:0,max:100},model:{value:t.ruleForm.power,callback:function(e){t.$set(t.ruleForm,"power",e)},expression:"ruleForm.power"}})],1),t._v(" "),r("v-form-item",{attrs:{disabled:"",label:"加密",prop:"security"}},[r("v-radio",{attrs:{options:t.radioOptions},model:{value:t.ruleForm.security,callback:function(e){t.$set(t.ruleForm,"security",e)},expression:"ruleForm.security"}})],1),t._v(" "),r("v-form-item",{attrs:{label:"限速",prop:"downLimit"}},[r("v-select",{attrs:{options:t.options,"is-manual":""},model:{value:t.ruleForm.downLimit,callback:function(e){t.$set(t.ruleForm,"downLimit",e)},expression:"ruleForm.downLimit"}})],1),t._v(" "),r("v-form-item",{attrs:{disabled:"",label:"日期",prop:"day"}},[r("v-checkbox-group",{attrs:{"is-select-all":"",selectText:"每天",options:t.checkboxOptions,"is-manual":""},model:{value:t.ruleForm.day,callback:function(e){t.$set(t.ruleForm,"day",e)},expression:"ruleForm.day"}})],1),t._v(" "),r("v-form-item",{attrs:{label:"时间",prop:"time"}},[r("v-timepicker",{model:{value:t.ruleForm.time,callback:function(e){t.$set(t.ruleForm,"time",e)},expression:"ruleForm.time"}}),t._v(" "),r("v-form-item",{attrs:{prop:"time","is-no-label":"","is-inline":""}},[r("v-datepicker",{attrs:{type:"datetime"},model:{value:t.ruleForm.date,callback:function(e){t.$set(t.ruleForm,"date",e)},expression:"ruleForm.date"}})],1)],1),t._v(" "),r("v-form-item",[r("v-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("保存")]),t._v(" "),r("v-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)},staticRenderFns:[]},n))}},a=r(1),s=Object(a.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"content reasy-doc"},[e._m(0),r("p",[e._v("表单包含复选框、单选框、输入框、下拉选择框等元素，用于收集数据、校验和提交数据。")]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),r("demo-block",[r("template",{slot:"source"},[r("mo-demo0")],1),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-form ref="form" :model="ruleForm" :rules="rules" @submit="submit">\n  <v-form-item label="数字" prop="ssid" unit="秒">\n    <v-input v-model="ruleForm.ssid"></v-input>\n  </v-form-item>\n  <v-form-item label="密码" prop="pwd">\n    <v-input v-model="ruleForm.pwd"></v-input>\n    <template v-slot:unit>这里显示单位信息</template>\n  </v-form-item>\n  <v-form-item label="IP地址" prop="ip" description="这里显示描述信息描述信息">\n    <v-input-group type="ip" v-model="ruleForm.ip"></v-input-group>\n  </v-form-item>\n  <v-form-item label="个数" prop="index">\n    <v-input-number\n      v-model="ruleForm.index"\n      :min="1"\n      :max="12"\n    ></v-input-number>\n  </v-form-item>\n  <v-form-item label="功率" prop="power">\n    <v-slider :min="0" :max="100" v-model="ruleForm.power"></v-slider>\n  </v-form-item>\n  <v-form-item label="加密" prop="security">\n    <v-radio v-model="ruleForm.security" :options="radioOptions"></v-radio>\n  </v-form-item>\n  <v-form-item label="开启" prop="on">\n    <v-switch v-model="ruleForm.on"></v-switch>\n  </v-form-item>\n  <v-form-item label="限速" prop="downLimit">\n    <v-select\n      v-model="ruleForm.downLimit"\n      :options="options"\n      is-manual\n    ></v-select>\n  </v-form-item>\n  <v-form-item label="日期" prop="day">\n    <v-checkbox-group\n      is-select-all\n      selectText="每天"\n      v-model="ruleForm.day"\n      :options="checkboxOptions"\n      is-manual\n    ></v-checkbox-group>\n  </v-form-item>\n  <v-form-item label="时间" prop="time">\n    <v-timepicker v-model="ruleForm.time"></v-timepicker>\n    <v-form-item prop="time" is-no-label is-inline>\n      <v-datepicker v-model="ruleForm.date" type="datetime"></v-datepicker>\n    </v-form-item>\n  </v-form-item>\n  <v-form-item label="日期时间" prop="date1">\n    <v-datepicker\n      v-model="ruleForm.date1"\n      :width="400"\n      is-range\n      type="datetime"\n    ></v-datepicker>\n  </v-form-item>\n  <v-form-item>\n    <v-button type="primary" @click="submitForm">保存</v-button>\n    <v-button @click="cancel">取消</v-button>\n  </v-form-item>\n</v-form>\n\n<script>\n  export default {\n    data() {\n      return {\n        ruleForm: {\n          ssid: "111",\n          pwd: "123",\n          power: 12,\n          ip: "192.168.0.10",\n          index: 10,\n          downLimit: 1,\n          day: [],\n          time: "10:12",\n          date: "",\n          date1: [],\n          on: true,\n          security: ""\n        },\n        options: [\n          {\n            label: "1MB",\n            value: 1\n          },\n          {\n            label: "2MB",\n            value: 2\n          },\n          {\n            label: "3MB",\n            value: 3\n          },\n          {\n            label: "4MB",\n            value: 4\n          }\n        ],\n        checkboxOptions: [\n          {\n            label: "星期一",\n            value: "1"\n          },\n          {\n            label: "星期二",\n            value: "2"\n          },\n          {\n            label: "星期三",\n            value: "3"\n          },\n          {\n            label: "星期四",\n            value: "4"\n          },\n          {\n            label: "星期五",\n            value: "5"\n          },\n          {\n            label: "星期六",\n            value: "6"\n          },\n          {\n            label: "星期日",\n            value: "7"\n          }\n        ],\n        radioOptions: [\n          {\n            label: "加密",\n            value: "aes"\n          },\n          {\n            label: "不加密",\n            value: "none"\n          }\n        ],\n        rules: {\n          ssid: [\n            { type: "num", args: [1, 12], msg: "请输入正确的范围，范围1-12" }\n          ],\n          power: { type: "num", args: [1, 12] },\n          ip: [{ type: "ip" }, this.checkIp],\n          index: { type: "num", args: [1, 12] },\n          downLimit: { type: "num", args: [1, 12] }\n        }\n      };\n    },\n    methods: {\n      submitForm() {\n        this.$refs.form.submitForm();\n      },\n      submit(data) {\n        this.$message.success("验证成功");\n        console.log("submit data", data);\n      },\n      checkIp(ip) {\n        let ipArr = ip.split(".");\n        if (+ipArr[0] <= 193) {\n          return "自定义验证说明";\n        }\n      },\n      cancel() {}\n    },\n    watch: {}\n  };\n<\/script>\n')])])])],2),e._m(9),e._m(10),e._m(11),r("demo-block",[r("template",{slot:"source"},[r("mo-demo1")],1),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[e._v('<p>全部禁用</p>\n\n<v-form ref="form" disabled :model="ruleForm" :rules="rules" @submit="submit">\n  <v-form-item label="数字" prop="ssid" unit="秒">\n    <v-input v-model="ruleForm.ssid"></v-input>\n  </v-form-item>\n  <v-form-item label="密码" prop="pwd">\n    <v-input v-model="ruleForm.pwd"></v-input>\n    <template v-slot:description>这里显示单位信息</template>\n  </v-form-item>\n  <v-form-item label="IP地址" prop="ip" description="这里显示描述信息描述信息">\n    <v-input-group type="ip" v-model="ruleForm.ip"></v-input-group>\n  </v-form-item>\n  <v-form-item label="个数" prop="index">\n    <v-input-number\n      v-model="ruleForm.index"\n      :min="1"\n      :max="12"\n    ></v-input-number>\n  </v-form-item>\n  <v-form-item label="功率" prop="power">\n    <v-slider :min="0" :max="100" v-model="ruleForm.power"></v-slider>\n  </v-form-item>\n  <v-form-item disabled>\n    <v-button type="primary" @click="submitForm">保存</v-button>\n    <v-button @click="cancel">取消</v-button>\n  </v-form-item>\n</v-form>\n\n<p>部分禁用</p>\n<v-form>\n  <v-form-item label="功率" prop="power">\n    <v-slider :min="0" :max="100" v-model="ruleForm.power"></v-slider>\n  </v-form-item>\n  <v-form-item disabled label="加密" prop="security">\n    <v-radio v-model="ruleForm.security" :options="radioOptions"></v-radio>\n  </v-form-item>\n  <v-form-item label="限速" prop="downLimit">\n    <v-select\n      v-model="ruleForm.downLimit"\n      :options="options"\n      is-manual\n    ></v-select>\n  </v-form-item>\n  <v-form-item disabled label="日期" prop="day">\n    <v-checkbox-group\n      is-select-all\n      selectText="每天"\n      v-model="ruleForm.day"\n      :options="checkboxOptions"\n      is-manual\n    ></v-checkbox-group>\n  </v-form-item>\n  <v-form-item label="时间" prop="time">\n    <v-timepicker v-model="ruleForm.time"></v-timepicker>\n    <v-form-item prop="time" is-no-label is-inline>\n      <v-datepicker v-model="ruleForm.date" type="datetime"></v-datepicker>\n    </v-form-item>\n  </v-form-item>\n  <v-form-item>\n    <v-button type="primary" @click="submitForm">保存</v-button>\n    <v-button @click="cancel">取消</v-button>\n  </v-form-item>\n</v-form>\n\n<script>\n  export default {\n    data() {\n      return {\n        ruleForm: {\n          ssid: "111",\n          pwd: "123",\n          power: 12,\n          ip: "192.168.0.10",\n          index: 10,\n          downLimit: 1,\n          day: [],\n          time: "10:12",\n          date: "",\n          date1: [],\n          security: ""\n        },\n        options: [\n          {\n            label: "1MB",\n            value: 1\n          },\n          {\n            label: "2MB",\n            value: 2\n          },\n          {\n            label: "3MB",\n            value: 3\n          },\n          {\n            label: "4MB",\n            value: 4\n          }\n        ],\n        checkboxOptions: [\n          {\n            label: "星期一",\n            value: "1"\n          },\n          {\n            label: "星期二",\n            value: "2"\n          },\n          {\n            label: "星期三",\n            value: "3"\n          },\n          {\n            label: "星期四",\n            value: "4"\n          },\n          {\n            label: "星期五",\n            value: "5"\n          },\n          {\n            label: "星期六",\n            value: "6"\n          },\n          {\n            label: "星期日",\n            value: "7"\n          }\n        ],\n        radioOptions: [\n          {\n            label: "加密",\n            value: "aes"\n          },\n          {\n            label: "不加密",\n            value: "none"\n          }\n        ],\n        rules: {\n          ssid: [\n            { type: "num", args: [1, 12], msg: "请输入正确的范围，范围1-12" }\n          ],\n          power: { type: "num", args: [1, 12] },\n          ip: [{ type: "ip" }, this.checkIp],\n          index: { type: "num", args: [1, 12] },\n          downLimit: { type: "num", args: [1, 12] }\n        }\n      };\n    },\n    methods: {\n      submitForm() {\n        this.$refs.form.submitForm();\n      },\n      submit(data) {\n        this.$message.success("验证成功");\n        console.log("submit data", data);\n      },\n      checkIp(ip) {\n        let ipArr = ip.split(".");\n        if (+ipArr[0] <= 193) {\n          return "自定义验证说明";\n        }\n      },\n      cancel() {}\n    },\n    watch: {}\n  };\n<\/script>\n')])])])],2),e._m(12),e._m(13),e._m(14),r("p",[e._v("key 为 表单选项的 prop，")]),r("p",[e._v("值为验证规则，多条验证规则时，为数组")]),r("p",[e._v("验证规则，rules 选项配置")]),e._m(15),e._m(16),e._m(17),e._m(18),e._m(19),e._m(20),e._m(21),e._m(22),e._m(23),e._m(24),e._m(25),r("side-link")],1)},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",{attrs:{id:"biao-dan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#biao-dan"}},[e._v("¶")]),e._v(" 表单")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"an-xu-yin-yong"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[e._v("¶")]),e._v(" 按需引用")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",{staticClass:"language-js"},[e._v('import { Form } from "@reasy-team/reasy-ui";\n\nVue.use(Form);\n')])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"qian-ti-tiao-jian"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qian-ti-tiao-jian"}},[e._v("¶")]),e._v(" 前提条件")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("首先要在"),r("code",[e._v("Vue")]),e._v("的"),r("code",[e._v("prototype")]),e._v("上绑定"),r("code",[e._v("$valid")]),e._v("数据验证对象，对象形式时，执行"),r("code",[e._v("all")]),e._v("方法")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",{staticClass:"language-js"},[e._v('  const valid = {\n    //函数形式\n    num: function(str, min, max) {\n      if (!/^([-0-9])?([0-9]+)$/.test(str)) {\n        return "输入值必须为整数";\n      }\n      if (typeof min === "number" && typeof max === "number") {\n        if (parseInt(str, 10) < min || parseInt(str, 10) > max) {\n          return `有效输入范围：${min} - ${max}`;\n        }\n      }\n    },\n    //对象形式\n    ssid: {\n      all: function(str) {\n        let ret = this.specific(str);\n\n        if (ret) {\n          return ret;\n        }\n      },\n\n      specific: function(str) {\n        if(str.length > 32) {\n          return "请输入正确的ssid";\n        }\n      }\n    }\n  };\n\n  //绑定在原型链上\n  Vue.prototype.$valid = valid;\n')])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"ji-ben-yong-fa"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa"}},[e._v("¶")]),e._v(" 基本用法")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("表单元素组件为"),r("code",[e._v("v-form-item")]),e._v("，元素组件必须包含在"),r("code",[e._v("v-form-item")]),e._v("组件内才能生效。")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("code",[e._v("rules")]),e._v("为元素验证规则。")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"jin-yong"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong"}},[e._v("¶")]),e._v(" 禁用")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("表单元素组件为"),r("code",[e._v("v-form-item")]),e._v("，元素组件必须包含在"),r("code",[e._v("v-form-item")]),e._v("组件内才能生效。")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("code",[e._v("rules")]),e._v("为元素验证规则。")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"v-form-attributes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v-form-attributes"}},[e._v("¶")]),e._v(" v-form Attributes")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("参数")]),r("th",[e._v("说明")]),r("th",[e._v("类型")]),r("th",[e._v("可选值")]),r("th",[e._v("默认值")])])]),r("tbody",[r("tr",[r("td",[e._v("rules")]),r("td",[e._v("数据验证规则")]),r("td",[e._v("boolean")]),r("td"),r("td",[e._v("{}")])]),r("tr",[r("td",[e._v("padding-width")]),r("td",[e._v("表单选项文字与右边组件的距离")]),r("td",[e._v("number")]),r("td"),r("td",[e._v("24")])]),r("tr",[r("td",[e._v("model")]),r("td",[e._v("表单数据对象")]),r("td",[e._v("Object")]),r("td",[e._v("—")]),r("td",[e._v("{}")])]),r("tr",[r("td",[e._v("is-label-right")]),r("td",[e._v("文字方向是否右对齐")]),r("td",[e._v("boolean")]),r("td"),r("td",[e._v("false")])]),r("tr",[r("td",[e._v("beforeSubmit")]),r("td",[e._v("表单提交前数据验证，返回 false 时不会执行 submit"),r("br"),e._v("function(data) {}")]),r("td",[e._v("function")]),r("td"),r("td")]),r("tr",[r("td",[e._v("disabled")]),r("td",[e._v("表单是否禁用")]),r("td",[e._v("boolean")]),r("td"),r("td",[e._v("false")])]),r("tr",[r("td",[e._v("unit")]),r("td",[e._v("表单显示的单位信息")]),r("td",[e._v("string")]),r("td",[e._v("-")]),r("td")]),r("tr",[r("td",[e._v("description")]),r("td",[e._v("表单显示的描述信息")]),r("td",[e._v("string")]),r("td",[e._v("-")]),r("td")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"rules-yan-zheng-gui-ze"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rules-yan-zheng-gui-ze"}},[this._v("¶")]),this._v(" rules 验证规则")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("参数")]),r("th",[e._v("说明")]),r("th",[e._v("类型")]),r("th",[e._v("可选值")]),r("th",[e._v("默认值")])])]),r("tbody",[r("tr",[r("td",[e._v("type")]),r("td",[e._v("数据验证类型")]),r("td",[e._v("string")]),r("td"),r("td")]),r("tr",[r("td",[e._v("args")]),r("td",[e._v("数据验证需要用到的值")]),r("td",[e._v("Array")]),r("td"),r("td")]),r("tr",[r("td",[e._v("msg")]),r("td",[e._v("错误提示信息，如果定义了，当验证错误时会提示此信息")]),r("td",[e._v("string")]),r("td"),r("td")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"v-form-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-form-methods"}},[this._v("¶")]),this._v(" v-form Methods")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("方法名")]),r("th",[e._v("说明")]),r("th",[e._v("参数")])])]),r("tbody",[r("tr",[r("td",[e._v("submitForm")]),r("td",[e._v("提交表单事件")]),r("td",[e._v("—")])]),r("tr",[r("td",[e._v("getSubmitData")]),r("td",[e._v("获取表单提交数据")]),r("td",[e._v("—")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"v-form-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-form-events"}},[this._v("¶")]),this._v(" v-form Events")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("事件名")]),r("th",[e._v("说明")]),r("th",[e._v("参数")])])]),r("tbody",[r("tr",[r("td",[e._v("submit")]),r("td",[e._v("表单验证完后的提交数据事件")]),r("td",[e._v("提交的表单数据")])]),r("tr",[r("td",[e._v("cancel")]),r("td",[e._v("表单取消事件")]),r("td",[e._v("—")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"v-form-item-attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-form-item-attributes"}},[this._v("¶")]),this._v(" v-form-item Attributes")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("参数")]),r("th",[e._v("说明")]),r("th",[e._v("类型")]),r("th",[e._v("可选值")]),r("th",[e._v("默认值")])])]),r("tbody",[r("tr",[r("td",[e._v("label")]),r("td",[e._v("选项文字")]),r("td",[e._v("string")]),r("td"),r("td")]),r("tr",[r("td",[e._v("is-no-label")]),r("td",[e._v("不显示文字")]),r("td",[e._v("boolean")]),r("td"),r("td",[e._v("false")])]),r("tr",[r("td",[e._v("prop")]),r("td",[e._v("选项属性，用于数据验证规则和提交数据，不填不会对数据进行验证和提交")]),r("td",[e._v("string")]),r("td"),r("td")]),r("tr",[r("td",[e._v("required")]),r("td",[e._v("是否必填")]),r("td",[e._v("boolean")]),r("td"),r("td",[e._v("true")])]),r("tr",[r("td",[e._v("ignore")]),r("td",[e._v("是否忽略验证")]),r("td",[e._v("boolean")]),r("td"),r("td",[e._v("false")])]),r("tr",[r("td",[e._v("valid")]),r("td",[e._v("数据验证规格，与 rules 配置一致，支持 type， args，msg 配置")]),r("td",[e._v("Array / Object")]),r("td"),r("td")]),r("tr",[r("td",[e._v("disabled")]),r("td",[e._v("选项是否禁用")]),r("td",[e._v("boolean")]),r("td"),r("td",[e._v("false")])]),r("tr",[r("td",[e._v("isInline")]),r("td",[e._v("是否不换行显示，适用于紧接着前面的组件显示在一行")]),r("td",[e._v("boolean")]),r("td"),r("td",[e._v("false")])]),r("tr",[r("td",[e._v("show-pop-error")]),r("td",[e._v("是否错误提示显示为提示小浮窗")]),r("td",[e._v("boolean")]),r("td"),r("td",[e._v("false")])]),r("tr",[r("td",[e._v("pop-error-position")]),r("td",[e._v("错误提示小浮窗位置，参考"),r("a",{attrs:{href:"./#/component/tooltip"}},[e._v("tooltip")]),e._v("组件")]),r("td",[e._v("string")]),r("td"),r("td",[e._v("right-center")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"v-form-item-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-form-item-methods"}},[this._v("¶")]),this._v(" v-form-item Methods")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("方法名")]),r("th",[e._v("说明")]),r("th",[e._v("参数")])])]),r("tbody",[r("tr",[r("td",[e._v("checkValid")]),r("td",[e._v("数据验证，返回是否验证成功"),r("br"),e._v("function(data)")]),r("td",[e._v("选项的值")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"v-form-item-slot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v-form-item-slot"}},[this._v("¶")]),this._v(" v-form-item slot")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("name")]),r("th",[e._v("说明")])])]),r("tbody",[r("tr",[r("td",[e._v("default")]),r("td",[e._v("表单元素右边显示内容")])]),r("tr",[r("td",[e._v("content")]),r("td",[e._v("右边多个数据验证时需要把第二个放入此插槽内，显示在 default 插槽后面")])]),r("tr",[r("td",[e._v("label")]),r("td",[e._v("表单元素左边文字内容")])]),r("tr",[r("td",[e._v("unit")]),r("td",[e._v("单位信息，与"),r("code",[e._v("unit")]),e._v("属性作用相同，若同时配置"),r("code",[e._v("unit")]),e._v("属性，则只生效该slot")])]),r("tr",[r("td",[e._v("description")]),r("td",[e._v("描述信息，可自定义特定样式描述信息，若同时配置"),r("code",[e._v("description")]),e._v("属性，则只生效该slot")])])])])}],!1,null,null,null);t.default=s.exports}}]);