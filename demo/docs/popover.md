# 弹出框

点击元素，弹出气泡确认框。

## 按需引用

```js
import { Base, Popups, Popover } from "@reasy-team/reasy-ui";

// Popover依赖于Popups
Vue.use(Popups);
Vue.use(Popover);
Vue.use(Base);
```

## 基础示例

:::demo 通过`trigger`配置触发方式。

```html
<template>
  <v-popover
    class="popover-demo"
    title="标题"
    :width="250"
    trigger="hover"
    position="top-left"
  >
    这是一段内容,这是一段内容,这是一段内容,这是一段内容。
    <v-button name="button1" slot="reference">hover 触发</v-button>
  </v-popover>
  <v-popover
    class="popover-demo"
    title="标题"
    :width="250"
    trigger="click"
    position="top-center"
  >
    这是一段内容,这是一段内容,这是一段内容,这是一段内容。
    <v-button name="button2" slot="reference">click 触发</v-button>
  </v-popover>
  <v-popover
    v-model="visible"
    class="popover-demo"
    title="标题"
    :width="250"
    trigger="manual"
    position="bottom-center"
  >
    这是一段内容,这是一段内容,这是一段内容,这是一段内容。
    <v-button name="button3" slot="reference" @click="handleClick">手动触发</v-button>
  </v-popover>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    handleClick() {
      this.visible = !this.visible;
    }
  }
};
</script>
```

:::



## 其他示例

:::demo

```html
<template>
  <v-popover
    class="popover-demo"
    title="标题"
    :width="250"
    trigger="hover"
    :enterable="false"
    position="top-left"
  >
    这是一段内容,这是一段内容,这是一段内容,这是一段内容。
    <v-button name="button4" slot="reference">不可移入弹出框</v-button>
  </v-popover>
  <v-popover
    class="popover-demo"
    title="标题"
    :width="250"
    trigger="hover"
    position="bottom-center"
    transition="el-zoom-in-top"
  >
    这是一段内容,这是一段内容,这是一段内容,这是一段内容。
    <v-button name="button5" slot="reference">触发动画</v-button>
  </v-popover>
  <v-popover
    class="popover-demo"
    title="标题"
    width="auto"
    trigger="hover"
    position="top-right"
  >
    这是一段内容,这是一段内容,这是一段内容,这是一段内容。
    <v-button name="button6" slot="reference">宽度自适应</v-button>
  </v-popover>
</template>
```

:::


## Props

| 参数        | 说明                                                     | 类型          | 可选值                                                                                                                                                                                  | 默认值     |
| ----------- | -------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| v-model     | 触发方式为手动（manual）生效                             | boolean       | -                                                                                                                                                                                       | -          |
| trigger     | 触发方式                                                 | string        | click<br/>hover<br/>  manual                                                                                                                                                            | click      |
| width       | 宽度                                                     | number/string | -                                                                                                                                                                                       | 150        |
| title       | 标题                                                     | string        | -                                                                                                                                                                                       | -          |
| position    | popover出现的位置                                        | string        | top-left<br/>top-center<br/> top-right<br/>right-top<br/>right-center<br/>right-bottom<br/>bottom-right<br/> bottom-center<br/>bottom-left<br/>left-bottom<br/>left-center<br/>left-top | top-center |
| transition  | 定义渐变动画                                             | string        | -                                                                                                                                                                                       |            |
| show-arrow  | 是否显示箭头                                             | boolean       | -                                                                                                                                                                                       | true       |
| enterable   | 鼠标是否可以进入弹出框中，仅在`trigger`等于`hover`时生效 | boolean       | -                                                                                                                                                                                       | true       |
| open-delay  | 延迟出现，单位：毫秒                                     | number        | -                                                                                                                                                                                       | 0          |
| close-delay | 延迟出现，单位：毫秒                                     | number        | -                                                                                                                                                                                       | 0          |

## @Events

| 事件名称       | 说明                   | 参数                    |
| -------------- | ---------------------- | ----------------------- |
| visible-change | 菜单显示状态改变时触发 | 显示为true，隐藏为false |

## Slots

| name      | 说明                      |
| --------- | ------------------------- |
| default   | popover内嵌HTML文本       |
| reference | 触发popover显示的HTML元素 |