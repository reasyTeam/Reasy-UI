## 加载中

用于页面和区块的加载中状态。页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

### 按需引用

```js
import { Base, Loading } from "@reasy-team/reasy-ui";

Vue.use(Loading);
Vue.use(Base);
```

### 基础示例

:::demo

```html
<div class="loading-box">
  <v-loading :visible="true"></v-loading>
</div>

<style>
  .loading-box {
    height: 160px;
    border-radius: 2px;
    border: 1px solid #f0f0f0;
    position: relative;
    color: #000;
  }
</style>
```

:::

### 显示隐藏

:::demo 通过`visible`属性控制loading的显示与隐藏。

```html
<div class="loading-box loading-box__fill">
  <v-loading :visible="show"></v-loading>
</div>
<div>
  <label>显示loading：</label>
  <v-switch no-id v-model="show"></v-switch>
</div>

<script>
  export default {
    data() {
      return {
        show: false
      };
    }
  };
</script>

<style>
  .loading-box {
    height: 160px;
    border-radius: 2px;
    border: 1px solid #f0f0f0;
    position: relative;
    color: #000;
  }

  .loading-box__fill {
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
  }
</style>
```

:::

### 描述信息

:::demo 通过`text`属性设置加载中的提示文本信息。

```html
<div class="loading-box">
  <v-loading text="加载中" :visible="true"></v-loading>
</div>

<style>
  .loading-box {
    height: 160px;
    border-radius: 2px;
    border: 1px solid #f0f0f0;
    position: relative;
    color: #000;
  }
</style>
```

:::

### 遮罩

:::demo 通过`has-mask`设置是否显示蒙版遮罩，默认为显示遮罩。

```html
<v-row :gutter="12">
  <v-col :span="12">
    <div class="loading-box loading-box__fill">
      has-mask="true"
      <v-loading :visible="true"></v-loading>
    </div>
  </v-col>
  <v-col :span="12">
    <div class="loading-box loading-box__fill">
      has-mask="false"
      <v-loading :has-mask="false" :visible="true"></v-loading>
    </div>
  </v-col>
</v-row>

<style>
  .loading-box {
    height: 160px;
    border-radius: 2px;
    border: 1px solid #f0f0f0;
    position: relative;
    color: #000;
  }
  .loading-box__fill {
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
  }
</style>
```

:::

### 不同颜色展示

:::demo 通过`background`设置不同颜色风格的 loading 风格。

```html
<v-row :gutter="12">
  <v-col :span="8">
    <div class="loading-box">
      <v-loading background="#1890ff" :visible="true"></v-loading>
    </div>
  </v-col>
  <v-col :span="8">
    <div class="loading-box">
      <v-loading :visible="true"></v-loading>
    </div>
  </v-col>
  <v-col :span="8">
    <div class="loading-box">
      <v-loading background="#d82228" :visible="true"></v-loading>
    </div>
  </v-col>
</v-row>

<style>
  .loading-box {
    height: 160px;
    border-radius: 2px;
    border: 1px solid #f0f0f0;
    position: relative;
    color: #000;
  }
</style>
```

:::

### 不同尺寸

小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。

:::demo 通过`size`属性设置不同的 loading 尺寸。

```html
<v-row :gutter="12">
  <v-col :span="8">
    <div class="loading-box">
      <v-loading text="size: L" size="L" :visible="true"></v-loading>
    </div>
  </v-col>
  <v-col :span="8">
    <div class="loading-box">
      <v-loading text="size: M" size="M" :visible="true"></v-loading>
    </div>
  </v-col>
  <v-col :span="8">
    <div class="loading-box">
      <v-loading text="size: S" size="S" :visible="true"></v-loading>
    </div>
  </v-col>
</v-row>
<style>
  .loading-box {
    height: 160px;
    border-radius: 2px;
    border: 1px solid #f0f0f0;
    position: relative;
    color: #000;
  }
</style>
```

:::

### 自定义

:::demo 通过`default slot`设置自定义的提升信息。

```html
<div class="loading-box">
  <v-loading :visible="true">
    <label style="color: #fff; background-color: rgb(255,0,0);">我</label>
    <label style="color: #fff; background-color: rgba(255,165,0);">是</label>
    <label style="color: #fff; background-color: rgba(255,255,0);">自</label>
    <label style="color: #fff; background-color: rgba(0,255,0);">定</label>
    <label style="color: #fff; background-color: rgba(0,127,255);">义</label>
    <label style="color: #fff; background-color: rgba(139,0,255);">内</label>
    <label style="color: #fff; background-color: rgba(0,0,255);">容</label>
  </v-loading>
</div>

<style>
  .loading-box {
    height: 160px;
    border-radius: 2px;
    border: 1px solid #f0f0f0;
    position: relative;
    color: #000;
  }
</style>
```

:::

### Attributes

| 参数       | 说明         | 类型                | 可选值 | 默认值         |
| ---------- | ------------ | ------------------- | ------ | -------------- |
| visible    | 是否显示     | boolean             | -      | false          |
| size       | 尺寸         | string              | S/M/L  | M              |
| target     | 遮罩内容     | object(HTMLElement) | -      | 默认为外层容器 |
| has-mask   | 是否有遮罩   | boolean             | -      | true           |
| text       | 显示文本     | string              | -      | -              |
| background | 旋转点背景色 | string              | -      | #ff8f00        |

> target 的 position 不能为 static，否则遮罩不生效

### slot

| name    | 说明                      |
| ------- | ------------------------- |
| default | 内容区域，优先级高于 text |
