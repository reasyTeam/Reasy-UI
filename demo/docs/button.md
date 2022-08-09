# 按钮

常用的操作按钮。

## 按需引用

```js
import { Base, Button } from "@reasy-team/reasy-ui";

Vue.use(Button);
Vue.use(Base);
```

## 基础用法

基础的按钮用法。

:::demo

```html
<section class="button-content">
  <div class="button-group">
    <v-button type="primary" name="btn-pri">主按钮</v-button>
    <v-button type="primary" name="btn-pri-d" disabled>主按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="info" name="btn-info">次按钮</v-button>
    <v-button type="info" name="btn-info-d" disabled>次按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="danger" name="btn-danger" >高危按钮</v-button>
    <v-button type="danger" name="btn-danger-d" disabled>高危按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="text" name="btn-text">文本按钮</v-button>
    <v-button type="text" name="btn-text-d" disabled>文本按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="text" name="btn-delete" icon="v-icon-delete"></v-button>
  </div>
  <div class="button-group">
    <v-button type="text" name="btn-upload" icon="v-icon-upload">图标按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="text" name="btn-down" suffix-icon="v-icon-down">后缀按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" name="btn-loading" :is-loading="true">加载中</v-button>
  </div>
</section>
```

:::

## 按钮大小

支持 S、M、L 三种尺寸，默认使用 M。

:::demo

```html
<section class="button-content">
  <div class="button-group">
    <v-button type="primary" name="btn-s" size="S">按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" name="btn-s-del"icon="v-icon-delete" size="S">按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" name="btn-m" size="M">按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" name="btn-m-del" icon="v-icon-delete" size="M">按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" name="btn-l" size="L">按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="primary" name="btn-l-del" icon="v-icon-delete" size="L">按钮</v-button>
  </div>
</section>
```

:::

## 文字按钮

:::demo

```html
<section class="button-content">
  <div class="button-group">
    <v-button type="text" name="btn-text1">文本按钮</v-button>
  </div>
  <div class="button-group">
    <v-button type="text" name="btn-text1-d" disabled>文本按钮</v-button>
  </div>
</section>
```

:::

## Props

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

## @events

| 事件名 | 说明     | 参数 |
| ------ | -------- | ---- |
| click  | 按钮事件 | —    |

## Slots

| name    | 说明     |
| ------- | -------- |
| default | 按钮文字 |
