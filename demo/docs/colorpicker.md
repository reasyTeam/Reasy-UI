## 颜色选择器

用于颜色选择，支持 RGB 、 HEX 或数组颜色格式，支持颜色预设。

### 按需引用

```js
import { Base, Colorpicker, Input } from "@reasy-team/reasy-ui";

Vue.use(ColorPicker);
Vue.use(Input);
Vue.use(Base);
```

### 基础示例

::: demo

```html
<div class="input-group">
  <v-colorpicker v-model="color" no-id></v-colorpicker>
</div>

<script>
  export default {
    data() {
      return {
        color: [211, 233, 211]
      };
    }
  };
</script>
```

:::

### 颜色预设

`colors`配置颜色预设盘的可选颜色，支持 RGB 、 HEX 或数组颜色格式

::: demo

```html
<div class="input-group">
  <v-colorpicker v-model="color" :colors="colors" name="colorpicker-color"></v-colorpicker>
</div>

<script>
  export default {
    data() {
      return {
        color: "#fff",
        colors: ["#eee", "rgb(222, 222, 222)", "#8d8d8d", [1, 66, 88]]
      };
    }
  };
</script>
```

:::

### 自定义返回

`format` 为自定义返回值，支持 RGB 、 HEX 或数组三种格式的返回，分别对应 format 值为`rgb`、`hex`、`array`，默认为`rgb`

::: demo

```html
<div class="input-group">
  <v-colorpicker v-model="color" format="hex"  name="colorpicker-self"></v-colorpicker>
</div>

<script>
  export default {
    data() {
      return {
        color: "#8d8d8d"
      };
    }
  };
</script>
```

:::

### 禁用样式

`disabled` 配置颜色选择器是否禁用

::: demo

```html
<div class="input-group">
  <v-colorpicker v-model="color" :disabled="true" name="colorpicker-disabled"></v-colorpicker>
</div>

<script>
  export default {
    data() {
      return {
        color: "rgb(233, 211, 234)"
      };
    }
  };
</script>
```

:::

### v-colorpicker Attributes

| 参数       | 说明               | 类型    | 可选值                    | 默认值                                                                            |
| ---------- | ------------------ | ------- | ------------------------- | --------------------------------------------------------------------------------- |
| v-model    | 绑定值             | string  | RGB 、 HEX 或数组颜色格式 | —                                                                                 |
| no-id       | 是否不需要id，为false则以`name`作为id，除特殊情况，表单中使用必须添加id         | boolean  | - | false|
| name        | 原生属性name，同时渲染为id属性，当`no-id`为false时**必填**  | string  | - | -   |
| colors     | 预设可选颜色       | array   | RGB 、 HEX 或数组颜色格式 | ["#39B09A","#1599FF","#FF9800","#0165B1","#A90000","#2D3195","#727272","#D2B98D"] |
| format     | 返回的颜色格式     | string  | rgb / hex / array         | rgb                                                                               |
| disabled   | 是否禁用           | boolean | —                         | false                                                                             |
| show-panel | 是否显示颜色预设盘 | boolean | —                         | true                                                                              |

### v-colorpicker Events

| 事件名      | 说明                 | 参数           |
| ----------- | -------------------- | -------------- |
| change      | 值改变时执行         | 改变后的值     |
| input       | 输入框值改变时触发   | 输入框的值     |
| blur        | 输入框失焦时触发     | event          |
| focus       | 输入框聚焦时触发     | event          |
| click-panel | 点击颜色预设盘时触发 | 当前点击的颜色 |
