## 警告提示

用于页面中展示重要的提示信息。

### 基础示例

:::demo

```html
<v-alert
  class="alert-box"
  type="success"
  title="恭喜！成功提示的文案"
></v-alert>
<v-alert
  class="alert-box"
  type="warn"
  title="警告提示的文案"
></v-alert>
<v-alert
  class="alert-box"
  type="info"
  title="常规消息的文案"
></v-alert>
<v-alert
  class="alert-box"
  type="error"
  title="错误提示的文案"
></v-alert>
```

:::


### 不带图标的提示

:::demo 通过设置`show-icon`来控制图标的显示，默认值为`true`。

```html
<v-alert
  class="alert-box"
  type="success"
  title="恭喜！成功提示的文案"
  :show-icon="false"
></v-alert>
```
:::

### 居中显示

:::demo 通过设置`align-center`来控制图标的显示，默认值为`false`。

```html
<v-alert
  class="alert-box"
  type="success"
  title="恭喜！成功提示的文案"
  :align-center="true" 
></v-alert>
```
:::

### 含查看链接的提示

:::demo 通过设置`show-details-button`和`show-close`来仅显示`查看详情`按钮。

```html
<v-alert
  class="alert-box"
  type="success"
  title="success title"
  :show-icon="false"
  :show-details-button="true"
  :show-close="false"
></v-alert>
<v-alert
  class="alert-box"
  type="warn"
  title="warn title"
  :show-icon="false"
  :show-details-button="true"
  :show-close="false"
></v-alert>
<v-alert
  class="alert-box"
  type="info"
  title="info title"
  :show-icon="false"
  :show-details-button="true"
  :show-close="false"
></v-alert>
<v-alert
  class="alert-box"
  type="error"
  title="error itle"
  :show-icon="false"
  :show-details-button="true"
  :show-close="false"
></v-alert>
```

:::

### 带有辅助性文字介绍

:::demo 通过设置`title`和`descrition`来实现。

```html
<v-alert
  class="alert-box"
  type="success"
  title="success title"
  icon="v-icon-ok-line"
  description="error content error content error content error content error content error content"
></v-alert>
```

:::

### 自定义description内容

:::demo 通过设置`default slot`来插入`description`内容。

```html
<v-alert
  class="alert-box"
  type="success"
  title="success title"
  icon="v-icon-ok-line"
>
  <div class="slot-content">这是插槽中的内容</div>
</v-alert>
```

:::


### Attributes

| 参数                | 说明                               | 类型    | 可选值                  | 默认值 |
| ------------------- | ---------------------------------- | ------- | ----------------------- | ------ |
| title               | 标题                               | string  | -                       | -      |
| type                | 消息类型                           | string  | success/warn/info/error | info   |
| description         | 消息详细描述，也可通过默认slot传入 | string  | -                       | -      |
| icon                | 图标类名，不传默认取响应状态的值   | String  | -                       | -      |
| show-icon           | 是否显示icon                       | Boolean | -                       | true   |
| show-close          | 是否显示关闭按钮                   | boolean | -                       | true   |
| show-details-button | 是否显示查看详情按钮               | boolean | -                       | false  |
| align-center        | 文字是否居中                       | boolean | -                       | false  |


### Events

| 事件名称             | 说明               | 参数 |
| -------------------- | ------------------ | ---- |
| close                | 关闭时触发         | -    |
| handle-details-click | 点击查看详情时触发 | -    |


### Slot

| name    | 说明                    |
| ------- | ----------------------- |
| default | description消息详细描述 |
