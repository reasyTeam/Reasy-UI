## 单选框

用于一组可选项单项选择。

### 按需引用

```js
import { Base, Radio } from "@reasy-team/reasy-ui";

Vue.use(Radio);
Vue.use(Base);
```

### 基础用法

:::demo

```html
<v-radio v-model="radio1" name="radio" :options="options"></v-radio>
<script>
  export default {
    data() {
      return {
        radio1: 1,
        options: [1, 2, 3, 4]
      };
    }
  };
</script>
```

:::

### 禁用

:::demo

```html
<v-radio v-model="radio1" name="radio-d" disabled :options="options1"></v-radio>
<div>
  <v-radio v-model="radio2" name="radio-d1" :options="options2"></v-radio>
</div>
<script>
  export default {
    data() {
      return {
        radio1: 1,
        options1: [1, 2, 3, 4],
        radio2: 1,
        options2: [
          {
            label: "选项1",
            value: 1
          },
          {
            label: "选项2",
            value: 2
          },
          {
            label: "选项3",
            value: 3,
            disabled: true
          },
          {
            label: "选项4",
            value: 4
          }
        ]
      };
    }
  };
</script>
```

:::

### v-radio Attributes

| 参数          | 说明                                            | 类型               | 可选值 | 默认值                   |
| ------------- | ----------------------------------------------- | ------------------ | ------ | ------------------------ |
| v-model       | 绑定值                                          | string             | —      | —                        |
| no-id       | 是否不需要id，为false则以`name`作为id，除特殊情况，表单中使用必须添加id         | boolean  | - | false|
| name        | 原生属性name，同时渲染为id属性，当`no-id`为false时**必填**  | string  | - | -   |
| options       | 下拉选项数组对象                                | Array              | —      | []                       |
| disabled      | 是否禁用                                        | boolean            |        | false                    |
| before-change | 切换选中前的钩子，返回 false 时，不会修改选中项 | function(value) {} | —      | function() {return true} |

**options 选项支持字符串、数字、boolean 或者对象，不为对象时显示的选项文字和值一致**

#### options 属性

| 参数     | 说明         | 类型                      | 可选值 | 默认值 |
| -------- | ------------ | ------------------------- | ------ | ------ |
| label    | 选项文字     | string                    | —      | —      |
| value    | 选项值       | string / boolean / number | —      | —      |
| disabled | 选项是否禁用 | boolean                   | —      | false  |

### v-radio Events

| 事件名 | 说明           | 参数       |
| ------ | -------------- | ---------- |
| change | 值改变时触发   | 改变后的值 |
| click  | 点击选项时触发 | 选项 value |
