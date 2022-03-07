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
    <v-button type="primary" no-id>主按钮</v-button>
    <v-button type="primary" no-id disabled>主按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="info" name="button-info">次按钮</v-button>
    <v-button type="info" no-id disabled>次按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="danger" no-id >高危按钮</v-button>
    <v-button type="danger" no-id disabled>高危按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="text" name="button-text">文本按钮</v-button>
    <v-button type="text" no-id disabled>文本按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="text" no-id icon="v-icon-delete"></v-button>
  </div>
  <div class="button-group">
    <v-button type="text" no-id icon="v-icon-upload">图标按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="text" name="button-down" suffix-icon="v-icon-down">后缀按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" no-id :is-loading="true">加载中</v-button>
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
    <v-button type="primary" no-id size="S">按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" name="button-size-s-d"icon="v-icon-delete" size="S">按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" no-id size="M">按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" no-id size="M">按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" name="button-size-l" size="L">按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" no-id icon="v-icon-delete" size="L">按钮</v-button>
  </div>
</section>
```

:::

### 文字按钮

:::demo

```html
<section class="button-content">
  <div class="button-group">
    <v-button type="text" name="button-text1">文本按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="text" no-id disabled>文本按钮</v-button>
  </div>
</section>
```

:::

### v-button Attributes

| 参数        | 说明         | 类型    | 可选值                                                                                                    | 默认值 |
| ----------- | ------------ | ------- | --------------------------------------------------------------------------------------------------------- | ------ |
| type        | 类型         | string  | primary 主按钮<br />info 次按钮 常用按钮<br />danger 高危按钮<br />text 文字按钮 | info   |
| no-id       | 是否不需要id，为false则以`name`作为id，除特殊情况，表单中使用必须添加id         | boolean  | - | false|
| name        | 原生属性name，同时渲染为id属性，当`no-id`为false时**必填**  | string  | - | -   |
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
