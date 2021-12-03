(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{256:function(e,t,r){"use strict";r.r(t);var i=r(34),i=(r(11),{name:"component-doc",components:{"mo-demo0":Object(i.a)({render:function(){var e=this.$createElement,e=this._self._c||e;return e("div",[e("div",{staticStyle:{height:"300px"}},[e("v-chart-pie",{attrs:{series:this.series,categories:this.categories}})],1)])},staticRenderFns:[]},{data:function(){return{series:[86,150,80,195,120,100],categories:["Adele","Novak","LiNa","serena","Maria","Victroria"]}}}),"mo-demo1":Object(i.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("v-row",{attrs:{gutter:24}},[t("v-col",{attrs:{span:12}},[t("v-chart-pie",{attrs:{series:e.series,height:300,legend:"square",categories:e.categories}})],1),e._v(" "),t("v-col",{attrs:{span:12}},[t("v-chart-pie",{attrs:{series:e.series1,height:300,categories:e.categories}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{series:[5,15,5,27,8,5,15,55,5,15,5,5,5,5,5,18,7,8,8,53,5,13],series1:[15,5,9,100,7,12,5,10,15,5,25,5,15,5,15,5,150,8,18,8,15,23],categories:[1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]}}}),"mo-demo2":Object(i.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("v-row",{attrs:{gutter:24}},[t("v-col",{attrs:{span:12}},[t("v-chart-pie",{attrs:{title:"缓动函数: easeOutExpo",series:e.series,animation:"easeOutExpo",height:300,categories:e.categories}})],1),e._v(" "),t("v-col",{attrs:{span:12}},[t("v-chart-pie",{attrs:{title:"无动画",series:e.series,height:300,animation:"",categories:e.categories}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{series:[150,178,50,178,78,45],categories:["Jim","Lucy","Lily","HanMeiMei","LiLei"]}}}),"mo-demo3":Object(i.a)({render:function(){var e=this.$createElement,e=this._self._c||e;return e("div",[e("div",[e("v-chart-pie",{attrs:{title:"环形图标题",comment:"注：数据为后台监测数据",height:300,series:this.series,categories:this.categories}})],1)])},staticRenderFns:[]},{data:function(){return{series:[150,178,50,178,78,45],categories:["Jim","Lucy","Lily","HanMeiMei","LiLei"]}}}),"mo-demo4":Object(i.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("div",[t("v-chart-pie",{attrs:{height:300,series:e.series,categories:e.categories},on:{click:e.click,legendClick:e.legendClick}})],1)])},staticRenderFns:[]},{data:function(){return{series:[150,178,50,178,78,45],categories:["Jim","Lucy","Lily","HanMeiMei","LiLei"]}},methods:{legendClick:function(e){this.$message.success("点击[".concat(e,"]"))},click:function(e){this.$message.success("类别[".concat(e.category,"]，值[").concat(e.value,"]"))}}}),"mo-demo5":Object(i.a)({render:function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("div",[t("v-row",{attrs:{gutter:24}},[t("v-col",{attrs:{span:12}},[t("v-chart-pie",{attrs:{title:"添加预设文本，legend：circle","tip-text":"tip预设文本",series:e.series,height:300,"show-value":!0,categories:e.categories}})],1),e._v(" "),t("v-col",{attrs:{span:12}},[t("v-chart-pie",{attrs:{title:"无悬浮提提示，legend：square",series:e.series,legend:"square",height:300,"show-tip":!1,categories:e.categories}})],1)],1)],1)},staticRenderFns:[]},{data:function(){return{series:[150,178,50,178,78,45],categories:["Jim","Lucy","Lily","HanMeiMei","LiLei"]}}})}}),r=r(1),i=Object(r.a)(i,function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("section",{staticClass:"content reasy-doc"},[e._m(0),t("p",[e._v("用于表示不同分类的占比情况，通过弧度大小来对比各种分类")]),e._m(1),e._m(2),e._m(3),t("p",[e._v("饼图的默认配置示例。")]),t("demo-block",[t("div",[t("p",[e._v("默认配置要保证组件的外层容器有对应的"),t("code",[e._v("高")]),e._v("和"),t("code",[e._v("宽")]),e._v("，否则无法渲染图表。")])]),t("template",{slot:"source"},[t("mo-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<div style="height: 300px;">\n  <v-chart-pie :series="series" :categories="categories"> </v-chart-pie>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        series: [86, 150, 80, 195, 120, 100],\n        categories: ["Adele", "Novak", "LiNa", "serena", "Maria", "Victroria"]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(4),t("p",[e._v("根据文本进行位置自适应调整。")]),t("demo-block",[t("template",{slot:"source"},[t("mo-demo1")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-row :gutter="24">\n  <v-col :span="12">\n    <v-chart-pie\n      :series="series"\n      :height="300"\n      legend="square"\n      :categories="categories"\n    ></v-chart-pie>\n  </v-col>\n  <v-col :span="12">\n    <v-chart-pie\n      :series="series1"\n      :height="300"\n      :categories="categories"\n    ></v-chart-pie>\n  </v-col>\n</v-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        series: [5, 15, 5, 27, 8, 5, 15, 55, 5, 15, 5, 5, 5, 5, 5, 18, 7, 8, 8, 53, 5, 13],\n        series1: [15, 5, 9, 100, 7, 12, 5, 10, 15, 5, 25, 5, 15, 5, 15, 5, 150, 8, 18, 8, 15, 23],\n        categories: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(5),e._m(6),t("demo-block",[t("div",[t("p",[e._v("通过"),t("code",[e._v("animation")]),e._v("属性设置动画类型，默认为"),t("code",[e._v("easeOutCubic")]),e._v("，为空则不设置任何动画。")])]),t("template",{slot:"source"},[t("mo-demo2")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-row :gutter="24">\n  <v-col :span="12">\n    <v-chart-pie\n      title="缓动函数: easeOutExpo"\n      :series="series"\n      animation="easeOutExpo"\n      :height="300"\n      :categories="categories"\n    ></v-chart-pie>\n  </v-col>\n  <v-col :span="12">\n    <v-chart-pie\n      title="无动画"\n      :series="series"\n      :height="300"\n      animation=""\n      :categories="categories"\n    ></v-chart-pie>\n  </v-col>\n</v-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        series: [150, 178, 50, 178, 78, 45],\n        categories: ["Jim", "Lucy", "Lily", "HanMeiMei", "LiLei"]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(7),t("p",[e._v("设置环形图的标题和备注信息。")]),t("demo-block",[t("div",[t("p",[e._v("通过"),t("code",[e._v("title")]),e._v("属性设置标题，显示在左上角。通过"),t("code",[e._v("comment")]),e._v("属性设置备注，显示在右下角。")])]),t("template",{slot:"source"},[t("mo-demo3")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<div>\n  <v-chart-pie\n    title="环形图标题"\n    comment="注：数据为后台监测数据"\n    :height="300"\n    :series="series"\n    :categories="categories"\n  >\n  </v-chart-pie>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        series: [150, 178, 50, 178, 78, 45],\n        categories: ["Jim", "Lucy", "Lily", "HanMeiMei", "LiLei"]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(8),t("p",[e._v("定义与环形图的交互逻辑。")]),t("demo-block",[t("div",[t("p",[e._v("通过"),t("code",[e._v("legendClick")]),e._v("事件进行切换显示图例交互， 参数为被点击的图例索引。通过"),t("code",[e._v("click")]),e._v("事件与柱条交互， 参数为柱条数据。")])]),t("template",{slot:"source"},[t("mo-demo4")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<div>\n  <v-chart-pie\n    :height="300"\n    :series="series"\n    :categories="categories"\n    @click="click"\n    @legendClick="legendClick"\n  >\n  </v-chart-pie>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        series: [150, 178, 50, 178, 78, 45],\n        categories: ["Jim", "Lucy", "Lily", "HanMeiMei", "LiLei"]\n      };\n    },\n    methods: {\n      legendClick(index) {\n        this.$message.success(`点击[${index}]`);\n      },\n      click(arg) {\n        this.$message.success(`类别[${arg.category}]，值[${arg.value}]`);\n      }\n    }\n  };\n<\/script>\n')])])])],2),e._m(9),t("p",[e._v("可以控制环形图上数值是否显示，图例形状，鼠标悬浮是否显示详情等。")]),t("demo-block",[t("div",[t("p",[e._v("通过"),t("code",[e._v("tip-text")]),e._v("来设置悬浮提示的预设文本，"),t("code",[e._v("legend")]),e._v("属性设置图例形状，"),t("code",[e._v("show-tip")]),e._v("属性设置是否显示悬浮提示信息。")])]),t("template",{slot:"source"},[t("mo-demo5")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<v-row :gutter="24">\n  <v-col :span="12">\n    <v-chart-pie\n      title="添加预设文本，legend：circle"\n      tip-text="tip预设文本"\n      :series="series"\n      :height="300"\n      :show-value="true"\n      :categories="categories"\n    ></v-chart-pie>\n  </v-col>\n  <v-col :span="12">\n    <v-chart-pie\n      title="无悬浮提提示，legend：square"\n      :series="series"\n      legend="square"\n      :height="300"\n      :show-tip="false"\n      :categories="categories"\n    ></v-chart-pie>\n  </v-col>\n</v-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        series: [150, 178, 50, 178, 78, 45],\n        categories: ["Jim", "Lucy", "Lily", "HanMeiMei", "LiLei"]\n      };\n    }\n  };\n<\/script>\n')])])])],2),e._m(10),e._m(11),e._m(12),e._m(13),t("side-link")],1)},[function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h2",{attrs:{id:"huan-xing-tu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#huan-xing-tu"}},[e._v("¶")]),e._v(" 环形图")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"an-xu-yin-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-yong"}},[e._v("¶")]),e._v(" 按需引用")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("pre",[t("code",{staticClass:"language-js"},[e._v('import { Base, Pie } from "@reasy-team/reasy-ui";\n\nVue.use(Pie);\nVue.use(Base);\n')])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"ji-chu-shi-li"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-shi-li"}},[e._v("¶")]),e._v(" 基础示例")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"dui-nei-rong-de-zi-gua-ying"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dui-nei-rong-de-zi-gua-ying"}},[e._v("¶")]),e._v(" 对内容的自适应")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"dong-hua"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dong-hua"}},[e._v("¶")]),e._v(" 动画")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("p",[e._v("设置环形图的的显示动画的缓存函数名，也可以不设置任何动画。缓动函数名请参考："),t("a",{attrs:{href:"https://easings.net/cn#"}},[e._v("缓动函数")])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"fu-jia-xin-xi-she-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fu-jia-xin-xi-she-zhi"}},[e._v("¶")]),e._v(" 附加信息设置")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"shi-jian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shi-jian"}},[e._v("¶")]),e._v(" 事件")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"qi-ta-she-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qi-ta-she-zhi"}},[e._v("¶")]),e._v(" 其它设置")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"shu-xing-attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing-attributes"}},[e._v("¶")]),e._v(" 属性 Attributes")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("参数")]),t("th",[e._v("说明")]),t("th",[e._v("类型")]),t("th",[e._v("可选值")]),t("th",[e._v("默认值")])])]),t("tbody",[t("tr",[t("td",[e._v("colors")]),t("td",[e._v("数据列颜色配置")]),t("td",[e._v("array")]),t("td",[e._v("-")]),t("td",[e._v("['#FFCD58','#ACE06F',"),t("br"),e._v("'#7EE6F2','#6EBBFF',"),t("br"),e._v("'#FF7348','#B792F7']")])]),t("tr",[t("td",[e._v("series")]),t("td",[e._v("数据列")]),t("td",[e._v("array")]),t("td"),t("td")]),t("tr",[t("td",[e._v("categories")]),t("td",[e._v("类别")]),t("td",[e._v("array")]),t("td",[e._v("-")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("legend")]),t("td",[e._v("图例")]),t("td",[e._v("string")]),t("td",[e._v("circle, square")]),t("td",[e._v("circle")])]),t("tr",[t("td",[e._v("animation")]),t("td",[e._v("动画效果，空表示不需要动画")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("easeOutCubic")])]),t("tr",[t("td",[e._v("width")]),t("td",[e._v("宽，单位 px")]),t("td",[e._v("number")]),t("td",[e._v("-")]),t("td",[e._v("外层容器的宽")])]),t("tr",[t("td",[e._v("height")]),t("td",[e._v("高，单位 px")]),t("td",[e._v("number")]),t("td",[e._v("-")]),t("td",[e._v("外层容器的高")])]),t("tr",[t("td",[e._v("tip-text")]),t("td",[e._v("鼠标悬浮预留提示信息，独行显示")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("show-tip")]),t("td",[e._v("鼠标悬浮显示数据")]),t("td",[e._v("boolean")]),t("td",[e._v("-")]),t("td",[e._v("true")])]),t("tr",[t("td",[e._v("title")]),t("td",[e._v("图表标题")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("-")])]),t("tr",[t("td",[e._v("comment")]),t("td",[e._v("图表注释")]),t("td",[e._v("string")]),t("td",[e._v("-")]),t("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("h3",{attrs:{id:"shi-jian-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shi-jian-events"}},[e._v("¶")]),e._v(" 事件 Events")])},function(){var e=this,t=e.$createElement,t=e._self._c||t;return t("table",[t("thead",[t("tr",[t("th",[e._v("方法名")]),t("th",[e._v("说明")]),t("th",[e._v("参数")])])]),t("tbody",[t("tr",[t("td",[e._v("click")]),t("td",[e._v("图形点击事件")]),t("td",[e._v("{ "),t("br"),e._v("value: data.value, "),t("br"),e._v("category: data.category"),t("br"),e._v("}")])]),t("tr",[t("td",[e._v("legendClick")]),t("td",[e._v("图例点击事件")]),t("td",[e._v("被点击的图例")])])])])}],!1,null,null,null);t.default=i.exports}}]);