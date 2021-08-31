(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{240:function(t,e,n){"use strict";n.r(e);var a=n(40),r={name:"component-doc",components:{"mo-demo0":Object(a.a)({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-upload",{ref:"upload",attrs:{action:"/cgi-bin/upload","on-change":t.changeCallBack}})],1)},staticRenderFns:[]},{methods:{changeCallBack:function(){this.$refs.upload.submit()}}}),"mo-demo1":Object(a.a)({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-upload",{ref:"upload",attrs:{action:"/cgi-bin/upload",type:"picture","on-change":this.changeCallBack}})],1)},staticRenderFns:[]},{methods:{changeCallBack:function(){this.$refs.upload.submit()}}}),"mo-demo2":Object(a.a)({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-upload",{ref:"upload",attrs:{action:"/cgi-bin/upload",disabled:"","on-change":this.changeCallBack}})],1)},staticRenderFns:[]},{methods:{changeCallBack:function(){this.$refs.upload.submit()}}}),"mo-demo3":Object(a.a)({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-upload",{ref:"upload",attrs:{action:"/cgi-bin/upload",disabled:"",type:"picture","on-change":this.changeCallBack}})],1)},staticRenderFns:[]},{methods:{changeCallBack:function(){this.$refs.upload.submit()}}})}},s=n(1),c=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content reasy-doc"},[t._m(0),n("p",[t._v("选择本地文件上传的组件。")]),t._m(1),t._m(2),t._m(3),n("demo-block",[n("template",{slot:"source"},[n("mo-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-upload\n  action="/cgi-bin/upload"\n  ref="upload"\n  :on-change="changeCallBack"\n  ></v-upload>\n</div>\n<script>\n  export default {\n    methods: {\n      changeCallBack() {\n        this.$refs.upload.submit();\n      }\n    }\n  };\n<\/script>\n\n')])])])],2),t._m(4),t._m(5),n("demo-block",[n("template",{slot:"source"},[n("mo-demo1")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-upload\n  action="/cgi-bin/upload"\n  ref="upload"\n  type="picture"\n  :on-change="changeCallBack"\n  ></v-upload>\n</div>\n<script>\n  export default {\n    methods: {\n      changeCallBack() {\n        this.$refs.upload.submit();\n      }\n    }\n  };\n<\/script>\n\n')])])])],2),t._m(6),n("demo-block",[n("template",{slot:"source"},[n("mo-demo2")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-upload\n  action="/cgi-bin/upload"\n  ref="upload"\n  disabled\n  :on-change="changeCallBack"\n  ></v-upload>\n</div>\n<script>\n  export default {\n    methods: {\n      changeCallBack() {\n        this.$refs.upload.submit();\n      }\n    }\n  };\n<\/script>\n\n')])])])],2),n("p",[t._v("图片禁用")]),n("demo-block",[n("template",{slot:"source"},[n("mo-demo3")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<v-upload\n  action="/cgi-bin/upload"\n  ref="upload"\n  disabled\n  type="picture"\n  :on-change="changeCallBack"\n  ></v-upload>\n</div>\n<script>\n  export default {\n    methods: {\n      changeCallBack() {\n        this.$refs.upload.submit();\n      }\n    }\n  };\n<\/script>\n\n')])])])],2),t._m(7),t._m(8),t._m(9),t._m(10),n("side-link")],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"wen-jian-shang-chuan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wen-jian-shang-chuan"}},[t._v("¶")]),t._v(" 文件上传")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"an-xu-yin-yong"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[t._v("¶")]),t._v(" 按需引用")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-js"},[t._v('import { Upload } from "@reasy-team/reasy-ui";\n\nVue.use(Upload);\n')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"ji-ben-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa"}},[t._v("¶")]),t._v(" 基本用法")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"tu-pian-shang-chuan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tu-pian-shang-chuan"}},[t._v("¶")]),t._v(" 图片上传")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("code",[t._v("type")]),t._v(" 配置上传的类型，支持"),n("code",[t._v("picture")]),t._v("和"),n("code",[t._v("text")]),t._v("，默认为"),n("code",[t._v("text")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"jin-yong"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jin-yong"}},[t._v("¶")]),t._v(" 禁用")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"v-upload-attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v-upload-attributes"}},[t._v("¶")]),t._v(" v-upload Attributes")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("name")]),n("td",[t._v("上传的文件字段名")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("file")])]),n("tr",[n("td",[t._v("action")]),n("td",[t._v("必选参数，上传的地址")]),n("td",[t._v("string")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("accept")]),n("td",[t._v("接受上传的文件类型，例如 .bin")]),n("td",[t._v("string")]),n("td"),n("td")]),n("tr",[n("td",[t._v("disabled")]),n("td",[t._v("是否禁用")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("data")]),n("td",[t._v("上传时附带的额外参数")]),n("td",[t._v("object")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("list-type")]),n("td",[t._v("文件列表的类型，文本 图片")]),n("td",[t._v("string")]),n("td",[t._v("text/picture")]),n("td",[t._v("text")])]),n("tr",[n("td",[t._v("show-file-list")]),n("td",[t._v("是否显示已上传文件列表")]),n("td",[t._v("boolean")]),n("td",[t._v("—")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("on-success")]),n("td",[t._v("文件上传成功时的钩子")]),n("td",[t._v("function(response)")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("on-change")]),n("td",[t._v("文件改变时的钩子，添加文件或修改文件")]),n("td",[t._v("function(file)")]),n("td",[t._v("—")]),n("td",[t._v("—")])]),n("tr",[n("td",[t._v("before-upload")]),n("td",[t._v("上传文件之前的钩子，参数为上传的文件，"),n("br"),t._v("若返回 false 则不上传")]),n("td",[t._v("function(file)")]),n("td",[t._v("—")]),n("td",[t._v("—")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"v-upload-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#v-upload-events"}},[t._v("¶")]),t._v(" v-upload Events")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),n("th",[t._v("说明")]),n("th",[t._v("参数")])])]),n("tbody",[n("tr",[n("td",[t._v("submit")]),n("td",[t._v("手动上传文件列表")]),n("td",[t._v("—")])])])])}],!1,null,null,null);e.default=c.exports}}]);