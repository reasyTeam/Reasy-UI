## 文字提示

鼠标移入显示提示，移出消失。

### 基础示例

:::demo

```html
<template>
  <div class="tooltip-demo__position-12">
    <v-row>
      <v-col :offset="3" :span="2">
        <v-tooltip content="top left" position="top-left">
          <v-button>上左</v-button>
        </v-tooltip>
      </v-col>
      <v-col :span="2">
        <v-tooltip content="top center" position="top-center">
          <v-button>上中</v-button>
        </v-tooltip>
      </v-col>
      <v-col :span="2">
        <v-tooltip content="top bottom" position="top-right">
          <v-button>上右</v-button>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row class="left-right-row">
      <v-col :offset="1" :span="2">
        <v-tooltip content="left top" position="left-top">
          <v-button>左上</v-button>
        </v-tooltip>
      </v-col>
      <v-col :offset="6" :span="2">
        <v-tooltip content="right top" position="right-top">
          <v-button>右上</v-button>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row class="left-right-row">
      <v-col :offset="1" :span="2">
        <v-tooltip content="left center" position="left-center">
          <v-button>左中</v-button>
        </v-tooltip>
      </v-col>
      <v-col :offset="6" :span="2">
        <v-tooltip content="right center" position="right-center">
          <v-button>右中</v-button>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row class="left-right-row">
      <v-col :offset="1" :span="2">
        <v-tooltip content="left bottom" position="left-bottom">
          <v-button>左下</v-button>
        </v-tooltip>
      </v-col>
      <v-col :offset="6" :span="2">
        <v-tooltip content="right bottom" position="right-bottom">
          <v-button>右下</v-button>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row class="left-right-row">
      <v-col :offset="3" :span="2">
        <v-tooltip content="bottom left" position="bottom-left">
          <v-button>下左</v-button>
        </v-tooltip>
      </v-col>
      <v-col :span="2">
        <v-tooltip content="bottom center" position="bottom-center">
          <v-button>下中</v-button>
        </v-tooltip>
      </v-col>
      <v-col :span="2">
        <v-tooltip content="bottom right" position="bottom-right">
          <v-button>下右</v-button>
        </v-tooltip>
      </v-col>
    </v-row>
  </div>
</template>
```

:::


### 指令用法

:::demo 直接使用`v-tooltip`指令通过传入字符串来显示文字提示，或传入配置对象，如`max-width`来限制文字提示的最大宽度。`enterable`是用来控制鼠标是否可移入文字提示弹窗内，默认值为`true`。

```html
<template>
  <v-button class="left-right-row" v-tooltip="customContent"
    >常规用法</v-button
  >
  <v-button
    class="left-right-row"
    v-tooltip="{ content: longContent, maxWidth: 200 }"
    >最大宽度</v-button
  >
  <v-button
    class="left-right-row"
    v-tooltip="{ content: customContent, enterable: false }"
    >鼠标不可移入</v-button
  >
</template>

<script>
export default {
  data() {
    return {
      customContent: "自定义内容",
      longContent: "这是一段内容,这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    };
  },
};
</script>
```

:::




### 属性 Attributes

| 参数        | 说明                                      | 类型    | 可选值                                                                                                                                                                                  | 默认值     |
| ----------- | ----------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| effect      | 提供的主题                                | string  | dark/light                                                                                                                                                                              | dark       |
| max-width   | 最大宽度，单位px，超出换行                | number  | -                                                                                                                                                                                       | -          |
| content     | 显示的内容                                | string  | -                                                                                                                                                                                       | -          |
| position    | tooltip出现的位置，如果不配置，位置自适应 | string  | top-left<br/>top-center<br/> top-right<br/>right-top<br/>right-center<br/>right-bottom<br/>bottom-right<br/> bottom-center<br/>bottom-left<br/>left-bottom<br/>left-center<br/>left-top | top-center |
| transition  | 定义过渡动画名，与vue过渡动画组件使用一致 | string  | -                                                                                                                                                                                       | -          |
| enterable   | 鼠标是否可以进入tooltip中                 | boolean | -                                                                                                                                                                                       | true       |
| open-delay  | 延迟出现，单位：毫秒                      | number  | -                                                                                                                                                                                       | 0          |
| close-delay | 延迟出现，单位：毫秒                      | number  | -                                                                                                                                                                                       | 0          |


### Slot

| name    | 说明                      |
| ------- | ------------------------- |
| default | 触发tooltip显示的HTML元素 |
| content | 自定义内容                |