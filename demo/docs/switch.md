## 开关

### 基本用法

::: demo

```html
<v-switch v-model="enable"></v-switch>

<script>
  export default {
    data() {
      return {
        enable: false
      };
    }
  };
</script>
```

:::

### 开启关闭值

`on-value`开启时的值，`off-value`关闭时的值

::: demo

```html
<v-switch on-value="on" off-value="off" v-model="enable"></v-switch>

<script>
  export default {
    data() {
      return {
        enable: "on"
      };
    }
  };
</script>
```

:::

开启或关闭时的文字

::: demo

```html
<v-switch size="L" on-text="开启" off-text="关闭" v-model="enable"></v-switch>

<script>
  export default {
    data() {
      return {
        enable: false
      };
    }
  };
</script>
```

:::

### 禁用

::: demo

```html
<v-switch disabled v-model="enable"></v-switch>
<script>
  export default {
    data() {
      return {
        enable: true
      };
    }
  };
</script>
```

:::

### 属性 Attributes

| 参数            | 说明                                                | 类型                      | 可选值    | 默认值                   |
| --------------- | --------------------------------------------------- | ------------------------- | --------- | ------------------------ |
| value / v-model | 绑定值                                              | string / number / boolean | —         | —                        |
| name            | 开关的名称                                          | string                    | —         | —                        |
| disabled        | 是否禁用                                            | boolean                   | —         | false                    |
| on-value        | 选中时的值                                          | string / number / boolean | —         | true                     |
| off-value       | 未选中时的值                                        | string / number / boolean | —         | false                    |
| on-text         | 选中时的文字                                        | string                    | —         | —                        |
| off-text        | 未选中时的文字                                      | string                    | —         | —                        |
| before-change   | 开关值切换前的钩子，返回 false 时，不会改变开关状态 | function(value) {}        | —         | function() {return true} |
| size            | 开关大小                                            | string                    | S / M / L | M                        |

### 事件 Events

| 事件名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| change | 值改变时触发 | 改变后的值 |
