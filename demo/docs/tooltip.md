## 文字提示

鼠标移入显示提示，移出消失。

### 按需引用

```js
import { Tooltip } from "@reasy-team/reasy-ui";

Vue.use(Tooltip);
```

### 基础示例

:::demo

```html
<template>
  <div class="tooltip-demo__position-12">
    <v-row>
      <v-col :offset="3" :span="2">
        <v-tooltip :max-width="210" :enterable="false" content="骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。" position="top-left">
          <v-button>上左</v-button>
        </v-tooltip>
      </v-col>
      <v-col :offset="1" :span="2">
        <v-tooltip :max-width="210" :enterable="false" content="骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。" position="top-center">
          <v-button>上中</v-button>
        </v-tooltip>
      </v-col>
      <v-col :offset="1" :span="2">
        <v-tooltip :max-width="210" :enterable="false" content="骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。" position="top-right">
          <v-button>上右</v-button>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row class="left-right-row">
      <v-col :offset="1" :span="2">
        <v-tooltip :max-width="210" :enterable="false" content="骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。" position="left-top">
          <v-button>左上</v-button>
        </v-tooltip>
      </v-col>
      <v-col :offset="8" :span="2">
        <v-tooltip :max-width="210" :enterable="false" content="骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。" position="right-top">
          <v-button>右上</v-button>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row class="left-right-row">
      <v-col :offset="1" :span="2">
        <v-tooltip :max-width="210" :enterable="false" content="骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。" position="left-center">
          <v-button>左中</v-button>
        </v-tooltip>
      </v-col>
      <v-col :offset="8" :span="2">
        <v-tooltip :max-width="210" :enterable="false" content="骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。" position="right-center">
          <v-button>右中</v-button>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row class="left-right-row">
      <v-col :offset="1" :span="2">
        <v-tooltip :max-width="210" :enterable="false" content="骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。" position="left-bottom">
          <v-button>左下</v-button>
        </v-tooltip>
      </v-col>
      <v-col :offset="8" :span="2">
        <v-tooltip :max-width="210" :enterable="false" content="骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。" position="right-bottom">
          <v-button>右下</v-button>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row class="left-right-row">
      <v-col :offset="3" :span="2">
        <v-tooltip :max-width="210" :enterable="false" content="骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。" position="bottom-left">
          <v-button>下左</v-button>
        </v-tooltip>
      </v-col>
      <v-col :offset="1" :span="2">
        <v-tooltip :max-width="210" :enterable="false" content="骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。" position="bottom-center">
          <v-button>下中</v-button>
        </v-tooltip>
      </v-col>
      <v-col :offset="1" :span="2">
        <v-tooltip :max-width="210" :enterable="false" content="骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。" position="bottom-right">
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

  <!-- 单例html start -->
  <v-button
    class="left-right-row"
    v-tooltip.single="{ content: '单例1内容', enterable: false }"
    >单例1</v-button
  >
  <v-button
    class="left-right-row"
    v-tooltip.single="{ content: '单例2内容', enterable: false }"
    >单例2</v-button
  >
  <v-button
    class="left-right-row"
    v-tooltip.single="{ content: '单例3内容', enterable: false }"
    >单例3</v-button
  >
  <!-- 单例html end -->
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


### 特殊用法

:::demo 使用`v-tooltip`指令的配置`show-only-ellipsis`，设置为`true`即可生效。

```html
<template>
  <section>
    <p
      v-tooltip="{
        effect: 'light',
        position: 'bottom-left',
        showOnlyEllipsis: true,
        enterable: false,
        betweenSpace: 0,
        content: ellipsisShort
      }"
      style="width: 150px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
    >{{ ellipsisShort }}</p>
    <p
      v-tooltip="{
        effect: 'light',
        position: 'bottom-left',
        showOnlyEllipsis: true,
        enterable: false,
        betweenSpace: 0,
        content: ellipsisLong
      }"
      style="width: 150px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
      >{{ ellipsisLong }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ellipsisShort: "文字不够长，不打点",
      ellipsisLong: "文字过长，打点处理，这里是长文本，这里是长文本，这里是长文本，这里是长文本"
    };
  },
};
</script>
```

:::




### 属性 Attributes

| 参数                 | 说明                                                                                                     | 类型    | 可选值                                                                                                                                                                                  | 默认值         |
| -------------------- | -------------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| effect               | 提供的主题                                                                                               | string  | dark/light                                                                                                                                                                              | dark           |
| trigger              | 触发方式                                                                                                 | string  | hover/click/manual                                                                                                                                                                      | hover          |
| max-width            | 最大宽度，单位px，超出换行                                                                               | number  | -                                                                                                                                                                                       | -              |
| content              | 显示的内容                                                                                               | string  | -                                                                                                                                                                                       | -              |
| position             | tooltip出现的位置，如果不配置，位置自适应                                                                | string  | top-left<br/>top-center<br/> top-right<br/>right-top<br/>right-center<br/>right-bottom<br/>bottom-right<br/> bottom-center<br/>bottom-left<br/>left-bottom<br/>left-center<br/>left-top | top-center     |
| transition           | 定义过渡动画名，与vue过渡动画组件使用一致                                                                | string  | -                                                                                                                                                                                       | -              |
| enterable            | 鼠标是否可以进入tooltip中                                                                                | boolean | -                                                                                                                                                                                       | true           |
| between-space        | 弹出框与参考元素的距离                                                                                   | number  | -                                                                                                                                                                                       | 三角形底边 + 4 |
| open-delay           | 延迟出现，单位：毫秒                                                                                     | number  | -                                                                                                                                                                                       | 0              |
| close-delay          | 延迟出现，单位：毫秒                                                                                     | number  | -                                                                                                                                                                                       | 0              |
| auto-adjust-position | 超出视窗自动调整位置                                                                                     | boolean | -                                                                                                                                                                                       | true           |
| arrow-offset         | 小箭头偏移量                                                                                             | number  | -                                                                                                                                                                                       | 小箭头底边长   |
| white-space          | 同css的white-space                                                                                       | string  | -                                                                                                                                                                                       | normal         |
| word-break           | 同css的word-break                                                                                        | string  | -                                                                                                                                                                                       | normal         |
| show-only-ellipsis   | 仅在文字过长打点处理显示文字提示（注意：需要手动添加css`打点`样式。若使用该配置，请不要随意更改trigger） | boolean | -                                                                                                                                                                                       | false          |


### Slot

| name    | 说明                      |
| ------- | ------------------------- |
| default | 触发tooltip显示的HTML元素 |
| content | 自定义内容                |


### 修饰符（指令模式） Modifiers

| modifiers | 说明                                 |
| --------- | ------------------------------------ |
| single    | 单例模式，目前仅支持trigger为`hover` |