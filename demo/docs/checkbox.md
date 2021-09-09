## 复选框

一组备选项中进行多选

### 按需引用

```js
import { Checkbox } from "@reasy-team/reasy-ui";

Vue.use(Checkbox);
```

### 基础用法

单独使用可以切换两种状态

:::demo

```html
<!-- `checked` 为 true 或 false -->
<v-form>
  <v-form-item label="正常">
    <v-checkbox v-model="unchecked">选项</v-checkbox>
  </v-form-item>
  <v-form-item label="选中">
    <v-checkbox v-model="checked">选项</v-checkbox>
  </v-form-item>
  <v-form-item label="未选中禁用">
    <v-checkbox v-model="unchecked" disabled>选项</v-checkbox>
  </v-form-item>
  <v-form-item label="选中禁用">
    <v-checkbox v-model="checked" disabled>选项</v-checkbox>
  </v-form-item>
</v-form>
<script>
  export default {
    data() {
      return {
        unchecked: false,
        checked: true
      };
    }
  };
</script>
```

:::

### 禁用

::: demo

```html
<v-checkbox v-model="checked" disabled>禁用</v-checkbox>
<script>
  export default {
    data() {
      return {
        checked: false
      };
    }
  };
</script>
```

:::

### 自定义选中值

`on-value`为选中后的值 `off-value`为未选中时的值

::: demo

```html
<v-checkbox v-model="checked" on-value="on" off-value="off"
  >自定义值</v-checkbox
>
<script>
  export default {
    data() {
      return {
        checked: "on"
      };
    }
  };
</script>
```

:::

### v-checkbox Attributes

| 参数            | 说明                                                | 类型                      | 可选值 | 默认值                   |
| --------------- | --------------------------------------------------- | ------------------------- | ------ | ------------------------ |
| value / v-model | 绑定值                                              | string / number / boolean | —      | —                        |
| name            | checkbox 的名称                                     | string                    | —      | —                        |
| disabled        | 是否禁用                                            | boolean                   | —      | false                    |
| on-value        | 选中时的值                                          | string / number / boolean | —      | true                     |
| off-value       | 未选中时的值                                        | string / number / boolean | —      | false                    |
| before-change   | 切换之前执行的函数，返回 false 时，不会执行数据更新 | function(value) {}        | —      | function() {return true} |
| tooltip         | 文字提示，配置参考v-tooltip指令                     | object                    | —      | —                        |

### v-checkbox Events

| 事件名 | 说明           | 参数       |
| ------ | -------------- | ---------- |
| change | 值改变时触发   | 改变后的值 |
| click  | 点击选项时触发 | 当前值     |
