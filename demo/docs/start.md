## reasy-ui

Tenda 基于 Vue2.x 的 PC 组件库，[查看源码](https://github.com/reasyTeam/Reasy-UI)。

同时支持风格定制，见[更改主题风格](#geng-gai-zhu-ti-feng-ge)。

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

### 更改主题风格

支持自定义主题风格，只需要几个简单的步骤就可以完成风格切换。

  1. clone组件源码`git clone https://github.com/reasyTeam/Reasy-UI.git`。

  2. 进入组件代码目录，运行`npm install`安装依赖。

  3. 修改`src/scss`文件夹下的`scss`变量文件`varibles.scss`。

  4. 运行`npm run theme`即可生成样式文件到根目录的`theme`文件夹内。

  5. 拷贝生成的样式文件直接在项目中使用即可。

**具体的替换方式如下：**

**常用组件引用**
```js
- import "@reasy-team/reasy-ui/dist/style.css";
+ import 生成的style.css
```

**完全引用**
```js
- import "@reasy-team/reasy-ui/dist/style-full.css";
+ import 生成的style-full.css
```

**按需引用**
在`babel-plugin-component`配置中添加如下配置，取消自动引入CSS文件。
```js
{
  "style": false // 取消自动引入CSS文件
}
```
然后手动引入所需组件对应的CSS文件，比如`Button`组件
```js
import "theme/components/button.css"; // 具体路径根据代码路径进行修改
```