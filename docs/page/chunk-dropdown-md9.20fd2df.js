(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{212:function(n,e,t){"use strict";t.r(e);t(105),t(47),t(46),t(157),t(81);var i,o,d,c,s,l=t(40);function r(n,e,t,i){var o=1<arguments.length&&void 0!==e?e:[],d=2<arguments.length&&void 0!==t?t:[],c=3<arguments.length?i:void 0;return Array.from(Array(n)).map(function(n,e){var t={text:"这是选项".concat(e+1),value:"value".concat(e)};return c&&(t.icon="v-icon-delete"),o.includes(e)&&(t.disabled=!0),d.includes(e)&&(t.devided=!0),t})}function a(n,e,t,i){var o=1<arguments.length&&void 0!==e?e:[],d=2<arguments.length&&void 0!==t?t:[],c=3<arguments.length?i:void 0;return Array.from(Array(n)).map(function(n,e){var t={text:"这是选项".concat(e+1),value:"value".concat(e)};return c&&(t.icon="v-icon-delete"),o.includes(e)&&(t.disabled=!0),d.includes(e)&&(t.devided=!0),t})}function v(n,e,t,i){var o=1<arguments.length&&void 0!==e?e:[],d=2<arguments.length&&void 0!==t?t:[],c=3<arguments.length?i:void 0;return Array.from(Array(n)).map(function(n,e){var t={text:"这是选项".concat(e+1),value:"value".concat(e)};return c&&(t.icon="v-icon-delete"),o.includes(e)&&(t.disabled=!0),d.includes(e)&&(t.devided=!0),t})}function u(n,e,t,i){var o=1<arguments.length&&void 0!==e?e:[],d=2<arguments.length&&void 0!==t?t:[],c=3<arguments.length?i:void 0;return Array.from(Array(n)).map(function(n,e){var t={text:"这是选项".concat(e+1),value:"value".concat(e)};return c&&(t.icon="v-icon-delete"),o.includes(e)&&(t.disabled=!0),d.includes(e)&&(t.devided=!0),t})}function p(n,e,t,i){var o=1<arguments.length&&void 0!==e?e:[],d=2<arguments.length&&void 0!==t?t:[],c=3<arguments.length?i:void 0;return Array.from(Array(n)).map(function(n,e){var t={text:"这是选项".concat(e+1),value:"value".concat(e)};return c&&(t.icon="v-icon-delete"),o.includes(e)&&(t.disabled=!0),d.includes(e)&&(t.devided=!0),t})}var m={name:"component-doc",components:{"mo-demo0":(s={data:function(){return{options:p(7),options1:p(7)}},methods:{visibleChange:function(n){console.log("current visible value: ".concat(n))},clickItem:function(n,e){console.log("cfg of click-item: "),console.log(n),console.log("idx of click-item: ".concat(e))}}},Object(l.a)({render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("v-dropdown",{ref:"dropdown",staticClass:"dropdown-item",attrs:{label:"普通样式",options:n.options},on:{"visible-change":n.visibleChange,"click-item":n.clickItem}}),n._v(" "),t("v-dropdown",{ref:"dropdown1",staticClass:"dropdown-item",attrs:{label:"按钮样式",type:"button",options:n.options1},on:{"visible-change":n.visibleChange,"click-item":n.clickItem}})],1)},staticRenderFns:[]},s)),"mo-demo1":(c={data:function(){return{options:u(7),options1:u(7)}},methods:{visibleChange:function(n){console.log("current visible value: ".concat(n))},clickItem:function(n,e){console.log("cfg of click-item: "),console.log(n),console.log("idx of click-item: ".concat(e))}}},Object(l.a)({render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("v-dropdown",{ref:"dropdown",staticClass:"dropdown-item",attrs:{label:"点击显示",options:n.options},on:{"visible-change":n.visibleChange,"click-item":n.clickItem}}),n._v(" "),t("v-dropdown",{ref:"dropdown1",staticClass:"dropdown-item",attrs:{label:"移入显示",trigger:"hover",options:n.options1},on:{"visible-change":n.visibleChange,"click-item":n.clickItem}})],1)},staticRenderFns:[]},c)),"mo-demo2":(d={data:function(){return{options:v(7),options1:v(7)}},methods:{visibleChange:function(n){console.log("current visible value: ".concat(n))},clickItem:function(n,e){console.log("cfg of click-item: "),console.log(n),console.log("idx of click-item: ".concat(e))}}},Object(l.a)({render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("v-dropdown",{ref:"dropdown",staticClass:"dropdown-item",attrs:{label:"选后关闭",options:n.options},on:{"visible-change":n.visibleChange,"click-item":n.clickItem}}),n._v(" "),t("v-dropdown",{ref:"dropdown1",staticClass:"dropdown-item",attrs:{label:"选后不关闭","hide-after-selected":!1,options:n.options1},on:{"visible-change":n.visibleChange,"click-item":n.clickItem}})],1)},staticRenderFns:[]},d)),"mo-demo3":(o={data:function(){return{options:a(7),options1:a(7)}},methods:{visibleChange:function(n){console.log("current visible value: ".concat(n))},clickItem:function(n,e){console.log("cfg of click-item: "),console.log(n),console.log("idx of click-item: ".concat(e))}}},Object(l.a)({render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("v-dropdown",{ref:"dropdown",staticClass:"dropdown-item",attrs:{label:"普通样式",options:n.options,disabled:!0},on:{"visible-change":n.visibleChange,"click-item":n.clickItem}}),n._v(" "),t("v-dropdown",{ref:"dropdown1",staticClass:"dropdown-item",attrs:{label:"按钮样式",type:"button",disabled:!0,options:n.options1},on:{"visible-change":n.visibleChange,"click-item":n.clickItem}})],1)},staticRenderFns:[]},o)),"mo-demo4":(i={data:function(){return{options:r(7,[],[],!0),options1:r(7,[2,5],[3,4],!0)}},methods:{visibleChange:function(n){console.log("current visible value: ".concat(n))},clickItem:function(n,e){console.log("cfg of click-item: "),console.log(n),console.log("idx of click-item: ".concat(e))}}},Object(l.a)({render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("v-dropdown",{ref:"dropdown",staticClass:"dropdown-item",attrs:{label:"带有图标",options:n.options},on:{"visible-change":n.visibleChange,"click-item":n.clickItem}}),n._v(" "),t("v-dropdown",{ref:"dropdown1",staticClass:"dropdown-item",attrs:{label:"其他配置",options:n.options1},on:{"visible-change":n.visibleChange,"click-item":n.clickItem}})],1)},staticRenderFns:[]},i))}},h=t(1),_=Object(h.a)(m,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content reasy-doc"},[n._m(0),t("p",[n._v("当页面操作命令过多时，用于收纳操作元素，将动作或菜单折叠到下拉菜单中。")]),n._m(1),n._m(2),n._m(3),n._m(4),t("p",[n._v("点击下拉菜单按钮，展开更多操作。")]),t("demo-block",[t("div",[t("p",[n._v("通过"),t("code",[n._v("type")]),n._v("设置下拉菜单类型，默认为"),t("code",[n._v("link")]),n._v("。")])]),t("template",{slot:"source"},[t("mo-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<v-dropdown\n  ref="dropdown"\n  class="dropdown-item"\n  label="普通样式"\n  :options="options"\n  @visible-change="visibleChange"\n  @click-item="clickItem"\n></v-dropdown>\n\n<v-dropdown\n  ref="dropdown1"\n  class="dropdown-item"\n  label="按钮样式"\n  type="button"\n  :options="options1"\n  @visible-change="visibleChange"\n  @click-item="clickItem"\n></v-dropdown>\n\n<script>\n// 生成假数据\nconst getOptions = (num, disabledIdxs = [], dividedIdxs = [], hasIcon) => {\n  return Array.from(Array(num)).map((item, idx) => {\n    const obj = {\n      text: `这是选项${idx + 1}`,\n      value: `value${idx}`\n    };\n\n    if (hasIcon) {\n      obj.icon = "v-icon-delete";\n    }\n\n    if (disabledIdxs.includes(idx)) {\n      obj.disabled = true;\n    }\n\n    if (dividedIdxs.includes(idx)) {\n      obj.devided = true;\n    }\n\n    return obj;\n  });\n};\n\nexport default {\n  data() {\n    return {\n      options: getOptions(7),\n      options1: getOptions(7)\n    };\n  },\n  methods: {\n    visibleChange(visible) {\n      console.log(`current visible value: ${visible}`);\n    },\n    clickItem(cfg, idx) {\n      console.log(`cfg of click-item: `);\n      console.log(cfg);\n      console.log(`idx of click-item: ${idx}`);\n    }\n  }\n};\n<\/script>\n')])])])],2),n._m(5),n._m(6),t("demo-block",[t("div",[t("p",[n._v("通过"),t("code",[n._v("trigger")]),n._v("设置下拉菜单类型，默认为"),t("code",[n._v("click")]),n._v("。")])]),t("template",{slot:"source"},[t("mo-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<v-dropdown\n  ref="dropdown"\n  class="dropdown-item"\n  label="点击显示"\n  :options="options"\n  @visible-change="visibleChange"\n  @click-item="clickItem"\n></v-dropdown>\n\n<v-dropdown\n  ref="dropdown1"\n  class="dropdown-item"\n  label="移入显示"\n  trigger="hover"\n  :options="options1"\n  @visible-change="visibleChange"\n  @click-item="clickItem"\n></v-dropdown>\n\n<script>\n// 生成假数据\nconst getOptions = (num, disabledIdxs = [], dividedIdxs = [], hasIcon) => {\n  return Array.from(Array(num)).map((item, idx) => {\n    const obj = {\n      text: `这是选项${idx + 1}`,\n      value: `value${idx}`\n    };\n\n    if (hasIcon) {\n      obj.icon = "v-icon-delete";\n    }\n\n    if (disabledIdxs.includes(idx)) {\n      obj.disabled = true;\n    }\n\n    if (dividedIdxs.includes(idx)) {\n      obj.devided = true;\n    }\n\n    return obj;\n  });\n};\n\nexport default {\n  data() {\n    return {\n      options: getOptions(7),\n      options1: getOptions(7)\n    };\n  },\n  methods: {\n    visibleChange(visible) {\n      console.log(`current visible value: ${visible}`);\n    },\n    clickItem(cfg, idx) {\n      console.log(`cfg of click-item: `);\n      console.log(cfg);\n      console.log(`idx of click-item: ${idx}`);\n    }\n  }\n};\n<\/script>\n')])])])],2),n._m(7),t("demo-block",[t("div",[t("p",[n._v("通过"),t("code",[n._v("hide-after-selected")]),n._v("属性来配置，默认值为"),t("code",[n._v("true")]),n._v("。")])]),t("template",{slot:"source"},[t("mo-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<v-dropdown\n  ref="dropdown"\n  class="dropdown-item"\n  label="选后关闭"\n  :options="options"\n  @visible-change="visibleChange"\n  @click-item="clickItem"\n></v-dropdown>\n\n<v-dropdown\n  ref="dropdown1"\n  class="dropdown-item"\n  label="选后不关闭"\n  :hide-after-selected="false"\n  :options="options1"\n  @visible-change="visibleChange"\n  @click-item="clickItem"\n></v-dropdown>\n\n<script>\n// 生成假数据\nconst getOptions = (num, disabledIdxs = [], dividedIdxs = [], hasIcon) => {\n  return Array.from(Array(num)).map((item, idx) => {\n    const obj = {\n      text: `这是选项${idx + 1}`,\n      value: `value${idx}`\n    };\n\n    if (hasIcon) {\n      obj.icon = "v-icon-delete";\n    }\n\n    if (disabledIdxs.includes(idx)) {\n      obj.disabled = true;\n    }\n\n    if (dividedIdxs.includes(idx)) {\n      obj.devided = true;\n    }\n\n    return obj;\n  });\n};\n\nexport default {\n  data() {\n    return {\n      options: getOptions(7),\n      options1: getOptions(7)\n    };\n  },\n  methods: {\n    visibleChange(visible) {\n      console.log(`current visible value: ${visible}`);\n    },\n    clickItem(cfg, idx) {\n      console.log(`cfg of click-item: `);\n      console.log(cfg);\n      console.log(`idx of click-item: ${idx}`);\n    }\n  }\n};\n<\/script>\n')])])])],2),n._m(8),t("demo-block",[t("div",[t("p",[n._v("通过"),t("code",[n._v("disabled")]),n._v("属性来配置，默认值为"),t("code",[n._v("false")]),n._v("。")])]),t("template",{slot:"source"},[t("mo-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<v-dropdown\n  ref="dropdown"\n  class="dropdown-item"\n  label="普通样式"\n  :options="options"\n  :disabled="true"\n  @visible-change="visibleChange"\n  @click-item="clickItem"\n></v-dropdown>\n\n<v-dropdown\n  ref="dropdown1"\n  class="dropdown-item"\n  label="按钮样式"\n  type="button"\n  :disabled="true"\n  :options="options1"\n  @visible-change="visibleChange"\n  @click-item="clickItem"\n></v-dropdown>\n\n<script>\n// 生成假数据\nconst getOptions = (num, disabledIdxs = [], dividedIdxs = [], hasIcon) => {\n  return Array.from(Array(num)).map((item, idx) => {\n    const obj = {\n      text: `这是选项${idx + 1}`,\n      value: `value${idx}`\n    };\n\n    if (hasIcon) {\n      obj.icon = "v-icon-delete";\n    }\n\n    if (disabledIdxs.includes(idx)) {\n      obj.disabled = true;\n    }\n\n    if (dividedIdxs.includes(idx)) {\n      obj.devided = true;\n    }\n\n    return obj;\n  });\n};\n\nexport default {\n  data() {\n    return {\n      options: getOptions(7),\n      options1: getOptions(7)\n    };\n  },\n  methods: {\n    visibleChange(visible) {\n      console.log(`current visible value: ${visible}`);\n    },\n    clickItem(cfg, idx) {\n      console.log(`cfg of click-item: `);\n      console.log(cfg);\n      console.log(`idx of click-item: ${idx}`);\n    }\n  }\n};\n<\/script>\n')])])])],2),n._m(9),t("demo-block",[t("template",{slot:"source"},[t("mo-demo4")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<v-dropdown\n  ref="dropdown"\n  class="dropdown-item"\n  label="带有图标"\n  :options="options"\n  @visible-change="visibleChange"\n  @click-item="clickItem"\n></v-dropdown>\n\n<v-dropdown\n  ref="dropdown1"\n  class="dropdown-item"\n  label="其他配置"\n  :options="options1"\n  @visible-change="visibleChange"\n  @click-item="clickItem"\n></v-dropdown>\n\n<script>\n// 生成假数据\nconst getOptions = (num, disabledIdxs = [], dividedIdxs = [], hasIcon) => {\n  return Array.from(Array(num)).map((item, idx) => {\n    const obj = {\n      text: `这是选项${idx + 1}`,\n      value: `value${idx}`\n    };\n\n    if (hasIcon) {\n      obj.icon = "v-icon-delete";\n    }\n\n    if (disabledIdxs.includes(idx)) {\n      obj.disabled = true;\n    }\n\n    if (dividedIdxs.includes(idx)) {\n      obj.devided = true;\n    }\n\n    return obj;\n  });\n};\n\nexport default {\n  data() {\n    return {\n      options: getOptions(7, [], [], true),\n      options1: getOptions(7, [2, 5], [3, 4], true)\n    };\n  },\n  methods: {\n    visibleChange(visible) {\n      console.log(`current visible value: ${visible}`);\n    },\n    clickItem(cfg, idx) {\n      console.log(`cfg of click-item: `);\n      console.log(cfg);\n      console.log(`idx of click-item: ${idx}`);\n    }\n  }\n};\n<\/script>\n')])])])],2),n._m(10),n._m(11),n._m(12),n._m(13),n._m(14),n._m(15),t("side-link")],1)},[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h2",{attrs:{id:"xia-la-cai-dan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xia-la-cai-dan"}},[n._v("¶")]),n._v(" 下拉菜单")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h3",{attrs:{id:"an-xu-yin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[n._v("¶")]),n._v(" 按需引用")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[n._v("该组件依赖于"),t("code",[n._v("v-scroll")]),n._v("组件。")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("pre",[t("code",{staticClass:"language-js"},[n._v('import { Scroll, Dropdown } from "@reasy-team/reasy-ui";\n\nVue.use(Scroll);\nVue.use(Dropdown);\n')])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h3",{attrs:{id:"ji-chu-shi-li"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-shi-li"}},[n._v("¶")]),n._v(" 基础示例")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h3",{attrs:{id:"chu-fa-fang-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chu-fa-fang-shi"}},[n._v("¶")]),n._v(" 触发方式")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[n._v("可以配置"),t("code",[n._v("click")]),n._v("激活或者"),t("code",[n._v("hover")]),n._v("激活。")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h3",{attrs:{id:"cai-dan-yin-cang-fang-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cai-dan-yin-cang-fang-shi"}},[n._v("¶")]),n._v(" 菜单隐藏方式")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h3",{attrs:{id:"an-niu-jin-yong-zhuang-tai"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-niu-jin-yong-zhuang-tai"}},[n._v("¶")]),n._v(" 按钮禁用状态")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h3",{attrs:{id:"qi-ta-pei-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qi-ta-pei-zhi"}},[n._v("¶")]),n._v(" 其他配置")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h3",{attrs:{id:"shu-xing-attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing-attributes"}},[n._v("¶")]),n._v(" 属性 Attributes")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[n._v("参数")]),t("th",[n._v("说明")]),t("th",[n._v("类型")]),t("th",[n._v("可选值")]),t("th",[n._v("默认值")])])]),t("tbody",[t("tr",[t("td",[n._v("type")]),t("td",[n._v("下拉菜单类型")]),t("td",[n._v("string")]),t("td",[n._v("link/button")]),t("td",[n._v("link")])]),t("tr",[t("td",[n._v("label")]),t("td",[n._v("下拉菜单标签名称")]),t("td",[n._v("string")]),t("td",[n._v("-")]),t("td",[n._v("下拉菜单")])]),t("tr",[t("td",[n._v("disabled")]),t("td",[n._v("菜单是否禁用")]),t("td",[n._v("boolean")]),t("td",[n._v("-")]),t("td",[n._v("false")])]),t("tr",[t("td",[n._v("trigger")]),t("td",[n._v("触发下拉的行为")]),t("td",[n._v("string")]),t("td",[n._v("hover/click")]),t("td",[n._v("click")])]),t("tr",[t("td",[n._v("hide-after-selected")]),t("td",[n._v("选择完成后隐藏下拉选项")]),t("td",[n._v("boolean")]),t("td",[n._v("-")]),t("td",[n._v("true")])]),t("tr",[t("td",[n._v("display-options-number")]),t("td",[n._v("设置可显示选项的数量，如options.length大于该值，则显示滚动条")]),t("td",[n._v("number")]),t("td",[n._v("-")]),t("td",[n._v("4")])]),t("tr",[t("td",[n._v("options")]),t("td",[n._v("菜单项配置"),t("br")]),t("td",[n._v("Array<object>")]),t("td",[n._v("-")]),t("td",[n._v("-")])]),t("tr",[t("td",[n._v("panel-class")]),t("td",[n._v("下拉菜单项容器的类名")]),t("td",[n._v("String")]),t("td",[n._v("-")]),t("td",[n._v("-")])])])])},function(){var n=this.$createElement,e=this._self._c||n;return e("h3",{attrs:{id:"options-attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-attributes"}},[this._v("¶")]),this._v(" Options Attributes")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[n._v("参数")]),t("th",[n._v("说明")]),t("th",[n._v("类型")]),t("th",[n._v("可选值")]),t("th",[n._v("默认值")])])]),t("tbody",[t("tr",[t("td",[n._v("text")]),t("td",[n._v("显示文本")]),t("td",[n._v("string/number/object")]),t("td",[n._v("-")]),t("td",[n._v("-")])]),t("tr",[t("td",[n._v("value")]),t("td",[n._v("值")]),t("td",[n._v("string/number/object")]),t("td",[n._v("-")]),t("td",[n._v("-")])]),t("tr",[t("td",[n._v("disabled")]),t("td",[n._v("禁用")]),t("td",[n._v("boolean")]),t("td",[n._v("-")]),t("td",[n._v("false")])]),t("tr",[t("td",[n._v("divided")]),t("td",[n._v("显示分割线")]),t("td",[n._v("boolean")]),t("td",[n._v("-")]),t("td",[n._v("false")])]),t("tr",[t("td",[n._v("icon")]),t("td",[n._v("图标类名，不配置则不显示")]),t("td",[n._v("string")]),t("td",[n._v("-")]),t("td",[n._v("-")])])])])},function(){var n=this.$createElement,e=this._self._c||n;return e("h3",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[this._v("¶")]),this._v(" Events")])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[n._v("事件名称")]),t("th",[n._v("说明")]),t("th",[n._v("参数")])])]),t("tbody",[t("tr",[t("td",[n._v("visible-change")]),t("td",[n._v("菜单显示状态改变时触发")]),t("td",[n._v("显示为true，隐藏为false")])]),t("tr",[t("td",[n._v("click-item")]),t("td",[n._v("点击子菜单时触发")]),t("td",[n._v("当前子菜单的值string/number/object")])])])])}],!1,null,null,null);e.default=_.exports}}]);