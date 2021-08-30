## reasy-ui

Tenda 基于 Vue2.x 的 PC 组件库，[查看源码](https://github.com/reasyTeam/Reasy-UI)。

### 安装

```
npm i @reasy-team/reasy-ui -S
```

### 完全引用

```
import ReasyUi from '@reasy-team/reasy-ui';
import "@reasy-team/reasy-ui/dist/style.css";

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
import { Base, Datepicker, Input } from "@reasy-team/reasy-ui";

Vue.use(Base);
Vue.use(Datepicker);
Vue.use(Input);
```

> 其中`Base`为组件基础支撑项，必须引入项，否则组件部分功能会不生效。
