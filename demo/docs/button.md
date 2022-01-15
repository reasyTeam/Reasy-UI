## 按钮

常用的操作按钮。

### 按需引用

```js
import { Base, Button } from "@reasy-team/reasy-ui";

Vue.use(Button);
Vue.use(Base);
```

### 基础用法

基础的按钮用法。

:::demo

```html
<section class="button-content">
  <div class="button-group">
    <v-button type="primary">主按钮</v-button>
    <v-button type="primary" disabled>主按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="info">次按钮</v-button>
    <v-button type="info" disabled>次按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="danger">高危按钮</v-button>
    <v-button type="danger" disabled>高危按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="text">文本按钮</v-button>
    <v-button type="text" disabled>文本按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="text" icon="v-icon-delete"></v-button>
  </div>
  <div class="button-group">
    <v-button type="text" icon="v-icon-upload">图标按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="text" suffix-icon="v-icon-down">后缀按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" :is-loading="true">加载中</v-button>
  </div>
</section>
```

:::

### 按钮大小

支持 S、M、L 三种尺寸，默认使用 M。

:::demo

```html
<section class="button-content">
  <div class="button-group">
    <v-button type="primary" size="S">按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" icon="v-icon-delete" size="S">按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" size="M">按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" icon="v-icon-delete" size="M">按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" size="L">按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" icon="v-icon-delete" size="L">按钮</v-button>
  </div>
</section>
```

:::

### 文字按钮

:::demo

```html
<section class="button-content">
  <div class="button-group">
    <v-button type="text">文本按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="text" disabled>文本按钮</v-button>
  </div>
</section>
```

:::

### v-button Attributes

| 参数        | 说明         | 类型    | 可选值                                                                                                    | 默认值 |
| ----------- | ------------ | ------- | --------------------------------------------------------------------------------------------------------- | ------ |
| type        | 类型         | string  | primary 主按钮<br />info 次按钮 常用按钮<br />danger 高危按钮<br />text 文字按钮 | info   |
| disabled    | 是否禁用     | boolean | —                                                                                                         | false  |
| is-loading  | 是否在加载中 | boolean | —                                                                                                         | false  |
| icon        | 图标类名     | string  | —                                                                                                         | —      |
| suffix-icon | 尾部图标     | string  | —                                                                                                         | —      |
| size        | 按钮大小     | string  | S / M / L                                                                                                 | M      |

## v-button Events

| 事件名 | 说明     | 参数 |
| ------ | -------- | ---- |
| click  | 按钮事件 | —    |

### slot

| name    | 说明     |
| ------- | -------- |
| default | 按钮文字 |
