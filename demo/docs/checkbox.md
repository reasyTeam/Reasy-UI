# 复选框

一组备选项中进行多选

## 按需引用

```js
import { Base, Checkbox } from "@reasy-team/reasy-ui";

Vue.use(Checkbox);
Vue.use(Base);
```

## 基础用法

单独使用可以切换两种状态

:::demo

```html
<!-- `checked` 为 true 或 false -->
<v-form>
  <v-form-item label="正常">
    <v-checkbox v-model="unchecked" name="checkbox-false">选项</v-checkbox>
  </v-form-item>
  <v-form-item label="选中">
    <v-checkbox v-model="checked" name="checkbox-true">选项</v-checkbox>
  </v-form-item>
  <v-form-item label="未选中禁用">
    <v-checkbox v-model="unchecked" disabled name="checkbox1">选项</v-checkbox>
  </v-form-item>
  <v-form-item label="选中禁用">
    <v-checkbox v-model="checked" disabled name="checkbox2">选项 
    <template #content>
      content to to you
    </template>
    </v-checkbox>
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

## 禁用

::: demo

```html
<v-checkbox v-model="checked" name="checkbox3" disabled>禁用</v-checkbox>
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

## 自定义选中值

`on-value`为选中后的值 `off-value`为未选中时的值

::: demo

```html
<v-checkbox v-model="checked" name="checkbox-on" on-value="on" off-value="off"
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

## Props

| 参数            | 说明                                                                         | 类型                      | 可选值 | 默认值                   |
| --------------- | ---------------------------------------------------------------------------- | ------------------------- | ------ | ------------------------ |
| value / v-model | 绑定值                                                                       | string / number / boolean | —      | —                        |
| no-id           | 是否不需要 id，为 false 则以`name`作为 id，除特殊情况，表单中使用必须添加 id | boolean                   | -      | false                    |
| name            | 原生属性 name，同时渲染为 id 属性，当`no-id`为 false 时**必填**              | string                    | -      | -                        |
| disabled        | 是否禁用                                                                     | boolean                   | —      | false                    |
| on-value        | 选中时的值                                                                   | string / number / boolean | —      | true                     |
| off-value       | 未选中时的值                                                                 | string / number / boolean | —      | false                    |
| before-change   | 切换之前执行的函数，返回 false 时，不会执行数据更新                          | function(value) {}        | —      | function() {return true} |
| tooltip         | 文字提示，配置参考 v-tooltip 指令                                            | object                    | —      | —                        |

## @Events

| 事件名 | 说明           | 参数       |
| ------ | -------------- | ---------- |
| change | 值改变时触发   | 改变后的值 |
| click  | 点击选项时触发 | 当前值     |
