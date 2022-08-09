# 警告提示

用于页面中展示重要的提示信息。

## 按需引用

```js
import { Base, Alert } from "@reasy-team/reasy-ui";

Vue.use(Alert);
Vue.use(Base);
```

## 基础示例

:::demo

```html
<template>
  <v-alert
    name="alert1"
    class="alert-box"
    type="success"
    title="恭喜！这里是成功成功成功成功成功的提示信息。"
  ></v-alert>
  <v-alert
    name="alert2"
    class="alert-box"
    type="warn"
    title="这里是警告警告警告警告警告警告警告的提示信息。"
  ></v-alert>
  <v-alert
    name="alert3"
    class="alert-box"
    type="info"
    title="这里是常规常规常规常规常规常规常规的提示信息。"
  ></v-alert>
  <v-alert
    name="alert4"
    class="alert-box"
    type="error"
    title="这里是错误错误错误错误错误错误错误的提示信息。"
  ></v-alert>
</template>
```

:::


## 不带图标的提示

:::demo 通过设置`show-icon`来控制图标的显示，默认值为`true`。

```html
<template>
  <v-alert
    name="alert5"
    class="alert-box"
    type="success"
    title="恭喜！这里是成功成功成功成功成功的提示信息。"
    :show-icon="false"
  ></v-alert>
</template>
```
:::


## 含查看链接的提示

:::demo 通过设置`show-details-button`和`show-close`来仅显示`查看详情`按钮。

```html
<template>
  <v-alert
    name="alert6"
    class="alert-box"
    type="success"
    title="恭喜！这里是成功成功成功成功成功的提示信息。"
    :show-icon="false"
    :show-details-button="true"
    :show-close="false"
    @handle-details-click="handleDetailsClick"
  ></v-alert>
  <v-alert
    name="alert7"
    class="alert-box"
    type="warn"
    title="这里是警告警告警告警告警告警告警告的提示信息。"
    :show-icon="false"
    :show-details-button="true"
    :show-close="false"
    @handle-details-click="handleDetailsClick"
  ></v-alert>
  <v-alert
    name="alert8"
    class="alert-box"
    type="info"
    title="这里是常规常规常规常规常规常规常规的提示信息。"
    :show-icon="false"
    :show-details-button="true"
    :show-close="false"
    @handle-details-click="handleDetailsClick"
  ></v-alert>
  <v-alert
    name="alert9"
    class="alert-box"
    type="error"
    title="这里是错误错误错误错误错误错误错误的提示信息。"
    :show-icon="false"
    :show-details-button="true"
    :show-close="false"
    @handle-details-click="handleDetailsClick"
  ></v-alert>
</template>

<script>
export default {
  methods: {
    handleDetailsClick() {
      this.$message.warn("点击了“查看详情”按钮！");
    }
  }
};
</script>
```

:::

## 带有辅助性文字介绍

:::demo 通过设置`title`和`descrition`来实现。

```html
<template>
  <v-alert
    name="alert10"
    class="alert-box"
    type="success"
    title="成功提示信息标题"
    icon="v-icon-ok-line"
    description="恭喜！这里是成功成功成功成功成功的提示信息。"
  ></v-alert>
</template>
```

:::

## 自定义description内容

:::demo 通过设置`default slot`来插入`description`内容。

```html
<template>
  <v-alert
    name="alert11"
    class="alert-box"
    type="success"
    title="提示信息标题"
    icon="v-icon-ok-line"
  >
    <div class="slot-content">这是插槽中的内容</div>
  </v-alert>
</template>
```

:::


## Props

| 参数                | 说明                               | 类型    | 可选值                  | 默认值 |
| ------------------- | ---------------------------------- | ------- | ----------------------- | ------ |
| no-id       | 是否不需要id，为false则以`name`作为id，除特殊情况，表单中使用必须添加id         | boolean  | - | false|
| name        | 原生属性name，同时渲染为id属性，当`no-id`为false时**必填**  | string  | - | -   |
| title               | 标题                               | string  | -                       | -      |
| type                | 消息类型                           | string  | success/warn/info/error | info   |
| description         | 消息详细描述，也可通过默认slot传入 | string  | -                       | -      |
| icon                | 图标类名，不传默认取响应状态的值   | String  | -                       | -      |
| show-icon           | 是否显示icon                       | Boolean | -                       | true   |
| show-close          | 是否显示关闭按钮                   | boolean | -                       | true   |
| show-details-button | 是否显示查看详情按钮               | boolean | -                       | false  |


## @Events

| 事件名称             | 说明               | 参数 |
| -------------------- | ------------------ | ---- |
| close                | 关闭时触发         | -    |
| handle-details-click | 点击查看详情时触发 | -    |


## Slots

| name    | 说明                    |
| ------- | ----------------------- |
| default | description消息详细描述 |
