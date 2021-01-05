## 复选框组

适应于支持选择多个选项

### 基本用法

::: demo

```html
<v-checkbox-group v-model="checked" :options="options"></v-checkbox-group>
<script>
  export default {
    data() {
      return {
        checked: [],
        options: [
          {
            label: "选项一",
            value: 1
          },
          {
            label: "选项二",
            value: 2
          },
          {
            label: "选项三",
            value: 3
          },
          {
            label: "选项四",
            value: 4
          }
        ]
      };
    }
  };
</script>
```

:::

如果选项和值一致时，options 选项可简化为具体的值

::: demo

```html
<v-checkbox-group v-model="checked" :options="options"></v-checkbox-group>
<script>
  export default {
    data() {
      return {
        checked: [],
        options: [1, 2, 3, 4]
      };
    }
  };
</script>
```

:::

### 支持全选

`is-select-all` 配置支持全选

::: demo

```html
<v-checkbox-group
  is-select-all
  v-model="checked"
  :options="options"
></v-checkbox-group>
<script>
  export default {
    data() {
      return {
        checked: [],
        options: [
          {
            label: "选项一",
            value: 1
          },
          {
            label: "选项二",
            value: 2
          },
          {
            label: "选项三",
            value: 3
          },
          {
            label: "选项四",
            value: 4
          }
        ]
      };
    }
  };
</script>
```

:::

自定义全选文字

`slect-text`配置全选的文字

::: demo

```html
<v-checkbox-group
  is-select-all
  select-text="选中所有"
  v-model="checked"
  :options="options"
></v-checkbox-group>
<script>
  export default {
    data() {
      return {
        checked: [],
        options: [
          {
            label: "选项一",
            value: 1
          },
          {
            label: "选项二",
            value: 2
          },
          {
            label: "选项三",
            value: 3
          },
          {
            label: "选项四",
            value: 4
          }
        ]
      };
    }
  };
</script>
```

:::

### 禁用

全部选项禁用

::: demo

```html
<v-checkbox-group
  disabled
  v-model="checked"
  :options="options"
></v-checkbox-group>
<script>
  export default {
    data() {
      return {
        checked: [],
        options: [
          {
            label: "选项一",
            value: 1
          },
          {
            label: "选项二",
            value: 2
          },
          {
            label: "选项三",
            value: 3
          },
          {
            label: "选项四",
            value: 4
          }
        ]
      };
    }
  };
</script>
```

:::

部分选项禁用

::: demo

```html
<v-checkbox-group v-model="checked" :options="options"></v-checkbox-group>
<script>
  export default {
    data() {
      return {
        checked: [],
        options: [
          {
            label: "选项一",
            value: 1
          },
          {
            label: "选项二",
            value: 2
          },
          {
            label: "选项三",
            value: 3,
            disabled: true
          },
          {
            label: "选项四",
            value: 4
          }
        ]
      };
    }
  };
</script>
```

:::

### 选项范围

支持`min`和`max`，配置选项的最少选择个数和最大选择个数

::: demo

```html
<v-checkbox-group
  :min="2"
  :max="4"
  v-model="checked"
  :options="options"
></v-checkbox-group>
<script>
  export default {
    data() {
      return {
        checked: [1, 2, 3],
        options: [
          {
            label: "选项一",
            value: 1
          },
          {
            label: "选项二",
            value: 2
          },
          {
            label: "选项三",
            value: 3
          },
          {
            label: "选项四",
            value: 4
          },
          {
            label: "选项五",
            value: 5
          },
          {
            label: "选项六",
            value: 6
          }
        ]
      };
    }
  };
</script>
```

:::

### v-checkbox-group Attributes

| 参数            | 说明                                                                      | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------------------------------------------------------- | ------- | ------ | ------ |
| value / v-model | 绑定值                                                                    | Arrray  | —      | []     |
| name            | checkbox 的名称                                                           | string  | —      |        |
| disabled        | 是否禁用                                                                  | boolean | —      | false  |
| options         | 选项数组对象[{label: 显示文字，<br /> value：值，disabled: 是否禁用此项}] | Array   | —      | []     |
| is-select-all   | 是否支持全选                                                              | boolean | —      | false  |
| select-text     | 全部选中的文字描述                                                        | string  | —      | 全选   |
| min             | 最小支持选项                                                              | number  | —      | 0      |
| max             | 最大支持选项，最大为选项的个数                                            | number  | —      | —      |

### options 选项

| 参数     | 说明                         | 类型                      | 可选值 | 默认值 |
| -------- | ---------------------------- | ------------------------- | ------ | ------ |
| label    | 选项框描述文字               | string                    |        |        |
| value    | 选项框值，各选项的值不能一样 | string / number / boolean |        |        |
| disabled | 该选项是否禁用               | boolean                   |        | false  |

## v-checkbox-group Events

| 事件名 | 说明           | 参数       |
| ------ | -------------- | ---------- |
| change | 值改变时触发   | 改变后的值 |
| click  | 点击选项时触发 | 选项 value |
