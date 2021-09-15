## reasy-ui

Tenda 基于 Vue2.x 的 PC 组件库，[查看源码](https://github.com/reasyTeam/Reasy-UI)。

### 使用

如有多语言环境，使用前请先引入`B28n.js`文件。

> 组件中词条已提取到`lang.en.zh.json`文件，项目中请自行导入。

### 安装

```
npm i @reasy-team/reasy-ui -S
```

### 常用组件引用
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
import "@reasy-team/reasy-ui/dist/style-full.css";

Vue.use(ReasyUi);
```

### 按需引用

**1. 安装 [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component) 插件**

**2. `.babelrc`或`babel.config.js`文件添加如下配置：**

```js
plugins: [
  [
    "component",
    {
      libraryName: "@reasy-team/reasy-ui", //插件名称
      libDir: "dist/lib" //插件库路径
    }
  ]
];
```

**3. `import`需要使用的组件**

```js
import { Base, Input } from "@reasy-team/reasy-ui";

Vue.use(Base); // 必须引入
Vue.use(Input);
```

> 其中`Base`为组件基础支撑项，必须引入项，否则其它组件部分功能会不生效。
