## 气泡确认框

点击元素，弹出气泡确认框。

### 按需引用

```js
import { Base, Popconfirm, Button, Popups } from "@reasy-team/reasy-ui";

Vue.use(Popconfirm);
Vue.use(Button);
Vue.use(Popups);
Vue.use(Base);
```

### 基础示例

:::demo 通过`title`配置内容、`icon`配置图标。

```html
<template>
  <v-popconfirm
    name="confirm1"
    ref="popconfirm"
    icon="v-icon-help-plane popconfirm-custom-icon"
    title="确定要删除这一段内容吗？"
    @confirm="handleConfirm"
    @cancel="handleCancel"
  >
    <v-button name="button1" slot="reference">删除</v-button>
  </v-popconfirm>
</template>

<script>
export default {
  methods: {
    handleConfirm() {
      this.$message.success("点击了“确定”按钮");
    },
    handleCancel() {
      this.$message.error("点击了“取消”按钮");
    }
  }
};
</script>
```

:::


### 自定义内容

:::demo 通过`slot="default"`自定义内容。

```html
<template>
  <v-popconfirm
    name="confirm2"
    :show-cancel="false"
    confirm-button-type="text"
    confirm-button-text="知道了"
  >
    <div class="popconfirm-demo-box">
      <div class="popconfirm-demo__title">
        自定义标题
      </div>
      <div class="popconfirm-demo__content">
        这里是<strong class="popconfirm-demo__content--height-line">自定义自定义自定义自定义</strong>内容
      </div>
    </div>
    <v-button name="button2" slot="reference">自定义内容确认框</v-button>
  </v-popconfirm>
</template>
```

:::


### 属性 Attributes

| 参数                | 说明                                                 | 类型    | 可选值                                                                                                                                                                                  | 默认值           |
| ------------------- | ---------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| no-id       | 是否不需要id，为false则以`name`作为id，除特殊情况，表单中使用必须添加id         | boolean  | - | false|
| name        | 原生属性name，同时渲染为id属性，当`no-id`为false时**必填**  | string  | - | -   |
| title               | 标题                                                 | string  | -                                                                                                                                                                                       | -                |
| icon                | Icon图标类名；<br /> 如不配置，则隐藏                | string  | -                                                                                                                                                                                       | -                |
| position            | popconfirm出现的位置                                 | string  | top-left<br/>top-center<br/> top-right<br/>right-top<br/>right-center<br/>right-bottom<br/>bottom-right<br/> bottom-center<br/>bottom-left<br/>left-bottom<br/>left-center<br/>left-top | top-center       |
| popups-offset       | 弹出内容偏移量，基于position位置偏移，xxx-center无效 | number  | -                                                                                                                                                                                       | 0                |
| arrow-offset        | 箭头偏移量，基于position的弹出内容偏移               | number  | -                                                                                                                                                                                       | 10（箭头底边长） |
| between-space       | 弹出内容与触发元素的距离                             | number  | -                                                                                                                                                                                       | 0                |
| trigger             | 触发条件                                             | string  | -                                                                                                                        click/hover                                                    | click            |
| transition          | 定义渐变动画                                         | string  | -                                                                                                                                                                                       |                  |
| show-arrow          | 是否显示箭头                                         | boolean | -                                                                                                                                                                                       | true             |
| open-delay          | 延迟出现，单位：毫秒                                 | number  | -                                                                                                                                                                                       | 0                |
| close-delay         | 延迟出现，单位：毫秒                                 | number  | -                                                                                                                                                                                       | 0                |
| clickOutsideToHide  | 点击外部隐藏弹窗                                     | boolean | -                                                                                                                                                                                       | false            |
| show-confirm        | 是否显示确认按钮                                     | boolean | -                                                                                                                                                                                       | true             |
| show-cancel         | 是否显示取消按钮                                     | boolean | -                                                                                                                                                                                       | true             |
| confirm-button-text | 确认按钮文字                                         | string  | -                                                                                                                                                                                       | 确定             |
| cancel-button-text  | 取消按钮文字                                         | string  | -                                                                                                                                                                                       | 取消             |
| confirm-button-type | 确认按钮类型                                         | string  | 参考button组件类型                                                                                                                                                                      | primary          |
| cancel-button-type  | 取消按钮类型                                         | string  | 参考button组件类型                                                                                                                                                                      | info             |

### Events

| 事件名称 | 说明             | 参数 |
| -------- | ---------------- | ---- |
| confirm  | 点击确认按钮触发 | -    |
| cancel   | 点击确认按钮触发 | -    |


### Slot

| name      | 说明                      |
| --------- | ------------------------- |
| default   | 自定义内容                |
| reference | 触发popover显示的HTML元素 |