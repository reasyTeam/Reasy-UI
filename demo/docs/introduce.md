### Reasy-UI 是什么？

Reasy-UI 是一套为开发者、设计师和产品经理准备的桌面端组件库，旨在将通用、繁琐的工作，通过组件化的形式抽离出来，达到开发简单化、规范化的目的。开发人员可以将更多的时间投入于更有创造性、更有价值意义的工作中去。目前组件库基本上完全覆盖桌面端会使用到的表单组件和交互组件。

### 组件规范化的过程

组件规范化的过程，首先提取产品中的共用部分（比如：导航、按钮、表单、tab）制作成通用组件，再思考相互之间的组合方式，最终形成规范文档。

### 对产品设计的意义

- 提升品牌辨识度
- 提升效率
- 符合功能逻辑
- 保持交互一致性
- 保持视觉风格统一
- 便于多设计师协作
- 便于修改设计

> 项目设计过程中，可直接采用交互元件库、视觉组件库应用于设计稿的开发活动，降低误操作和规范不统一的情况，降低设计成本，提升设计效率约**30%**。

### 对开发的意义

- 提升效率
- 降低耦合度
- 减少冗余
- 优化性能
- 便于多人协作开发
- 便于查错
- 便于修改

开发过程由原先按页面来开发的思想转为按组件来开发，我们以组件为单位，而不是以页面为单位进行开发，至此页面的开发就变为了一个个组件的排列组合。同时组件在不同的页面不同的项目中都可以复用。

![组件化开发](../../img/dev.jpg)

> 项目开发过程中，直接使用组件库，无需适配，无需优化，开箱即用，降低开发成本，提升开发效率约**40%**


### 维护

#### 框架
![框架](../../img/1.png)
<div style="color: #999;text-align: center;padding: 2px;margin-top: -40px;font-size: 12px;">表单组件框架</div>


#### 代码结构

```
├─ build # 打包相关文件
├─ demo # 使用文档根目录
├─ dist # 打包后文件，用于上传至npm
├─ docs # 打包后的使用文档根，用于github pages展示
├─ langs # 多语言环境相关词条
├─ src # 组件库源码
```

### 打包环境

代码目录
```
├─ build # 打包相关文件
|   ├─ md-loader # markdown文件解析
|   |   ├─ index.js # markdown解析主入口文件
|   ├─ components.js # 单个组件对应的js打包入口文件配置
|   ├─ scss.js # 单个组件对应的CSS打包入口配置
|   ├─ webpack.component.js # 单个组件对应的js打包配置
|   ├─ webpack.demo.js # 使用文档打包配置
|   ├─ webpack.publish.full.js # 所有组件合并打包配置
|   ├─ webpack.publish.js # 常用组件合并打包配置
|   ├─ webpack.scss.js # 单个组件对应的scss打包配置
|   ├─ webpack.theme.full.js # 所有组件CSS合并打包配置
|   ├─ webpack.theme.single.js # 单个组件css打包配置
```


#### markdown解析原理
将markdown转成抽象语法树AST，然后解析AST，生成html代码在浏览器中展示，对于自定义的指令进行解析，提取Vue相关代码，以插件的形式注入到页面中，显示为对应的组件。

#### 组件打包

打包环境分为，组件合并打包、组件单独打包、使用文档打包三块，分别对应不同的配置文件。

组件单独打包一每个组件为入口文件，多入口的形式，同时对每个组件分别进行打包，各组件之间相互独立。

### 组件开发

代码目录如下：
```
├─ src # 组件库源码
|   ├─ components # 各组件源码，核心文件夹
|   |   ├─ xxx文件夹 # 组件源码
|   |   ├─ base.js # 组件公共install配置
|   |   ├─ create-to-body.vue # 弹窗组件
|   |   ├─ ease-function.js # 组件使用到的缓动函数集
|   |   ├─ filters.js # 组件过滤器
|   |   ├─ form-mixins.js # form表单组件公共功能mixin
|   |   ├─ index.js # 全组件入口文件
|   |   ├─ lib.js # 组件工具函数文件
|   |   ├─ translate.js # 内置翻译机制
|   ├─ scss # 各组件样式文件
|   ├─ views # 开发自测试用例文件
|   ├─ router # 开的自测试用例导航配置
|   ├─ App.vue # 用例主页
|   ├─ main.js # 用例入口文件
```

开发步骤：
- 开发前，先确定组件的接口和使用方式，并讨论审核通过
- 风格设计需遵循设计规范
- 在`components`文件夹下添加以组件名命名的文件夹
- 文件夹内天`index.js`和`v-组件名.vue`文件
- 两个文件的编码格式都需要满足编程规范

`index.js`的文件内容如下：

```js
/// Demo为组件名，首字母大写
import Demo from "./v-demo.vue";

Demo.install = function(Vue) {
  Vue.component(Demo.name, Demo);
};

export default Demo;
```

`v-组件名.vue`的文件内容格式如下：

```html
<template>
  <div class="v-xxx">
    ---
  </div>
</template>

<script>
export default {
  name: "v-xxx",
  props: {
    ---
  }
};
</script>
```

### 使用文档开发

代码目录
```
├─ demo # 使用文档根目录
|   ├─ components # 使用文档相关组件，无需关注
|   ├─ demo-styles # 使用文档相关样式
|   ├─ docs
|   |   ├─ xxx.md # xxx组件使用文档
|   ├─ pages

```
使用文档的格式完全按照Markdowm标准格式去写即可。在原语法的基础上添加了一个自定义的指令用于渲染组件，具体如下：
```
::: demo

\```html
<div class="input-group">
  <v-input type="text" v-model="sizeL" size="L"></v-input>
</div>
<div class="input-group">
  <v-input type="text" v-model="sizeM" size="M"></v-input>
</div>
<div class="input-group">
  <v-input type="text" v-model="sizeS" size="S"></v-input>
</div>

<script>
  export default {
    data() {
      return {
        sizeL: "L",
        sizeM: "M",
        sizeS: "S"
      };
    }
  };
</script>
\```

:::
```
以`::: demo`开始，以`:::`结束，中间填写合法的`Vue`代码即可正常解析显示。