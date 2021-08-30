# reasy-ui
Tenda基于Vue2.x的PC组件库。[在线示例](https://reasyteam.github.io/Reasy-UI/)

## 使用

### 安装
```
npm i @reasy-team/reasy-ui -S

```

### 常用功能引用
不包含折线图、饼图、柱图、和百分比

```
import ReasyUi from '@reasy-team/reasy-ui';
import "@reasy-team/reasy-ui/dist/style.css";

Vue.use(ReasyUi);
```
### 完全引用
包含所有组件

```
import ReasyUi from '@reasy-team/reasy-ui/dist/reasy-ui-full.js';
import "@reasy-team/reasy-ui/dist/styleFull.css";

Vue.use(ReasyUi);
```

### 按需引用

1. 安装 [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component) 插件
2. `.babelrc`或`babel.config.js`文件配置
```js
plugins: [
  [
    "component",
    {
      libraryName: "@reasy-team/reasy-ui", //插件名称
      libDir: "dist/lib" //插件库路径
    }
  ]
]
```
3. `import`需要使用的组件
```js
import { Base, Datepicker, Input } from "@reasy-team/reasy-ui";

Vue.use(Base);
Vue.use(Datepicker);
Vue.use(Input);
```
> 其中`Base`为组件基础支撑项，必须引入项，否则组件部分功能会不生效。
