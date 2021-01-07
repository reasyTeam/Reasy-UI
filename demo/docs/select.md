## 选择器

### 基本用法

::: demo

```html
<v-select v-model="select1" :options="selectOption"></v-select>

<script>
  export default {
    data() {
      return {
        select1: "1",
        selectOption: [
          {
            value: "1",
            label: "选项一"
          },
          {
            value: "2",
            label: "选项二"
          },
          {
            value: "3",
            label: "选项三"
          },
          {
            value: "4",
            label: "选项四"
          }
        ]
      };
    }
  };
</script>
```

:::

### 选项配置

`options`支持数字

::: demo

```html
<v-select v-model="select1" :options="selectOption"></v-select>
<script>
  export default {
    data() {
      return {
        select1: "1",
        selectOption: [1, 2, 3, 4, 5]
      };
    }
  };
</script>
```

:::

### 禁用

选择器禁用

::: demo

```html
<v-select v-model="select1" disabled :options="selectOption"></v-select>

<script>
  export default {
    data() {
      return {
        select1: "1",
        selectOption: [
          {
            value: "1",
            label: "选项一"
          },
          {
            value: "2",
            label: "选项二"
          },
          {
            value: "3",
            label: "选项三"
          },
          {
            value: "4",
            label: "选项四"
          }
        ]
      };
    }
  };
</script>
```

:::

选项禁用

::: demo

```html
<v-select v-model="select1" :options="selectOption"></v-select>
<script>
  export default {
    data() {
      return {
        select1: "1",
        selectOption: [
          {
            value: "1",
            label: "选项一"
          },
          {
            value: "2",
            label: "选项二",
            disabled: true
          },
          {
            value: "3",
            label: "选项三"
          },
          {
            value: "4",
            label: "选项四"
          }
        ]
      };
    }
  };
</script>
```

:::

### 支持输入

`is-manual`支持手动配置，`manual-text`手动配置的文字

::: demo

```html
<v-select
  v-model="select1"
  is-manual
  manual-text="其他选项"
  :options="selectOption"
></v-select>

<script>
  export default {
    data() {
      return {
        select1: "1",
        selectOption: [
          {
            value: "1",
            label: "选项一"
          },
          {
            value: "2",
            label: "选项二"
          },
          {
            value: "3",
            label: "选项三"
          },
          {
            value: "4",
            label: "选项四"
          }
        ]
      };
    }
  };
</script>
```

:::

### 支持清除

`is-clear`支持手动配置

::: demo

```html
<v-select v-model="select1" is-clear :options="selectOption"></v-select>

<script>
  export default {
    data() {
      return {
        select1: "1",
        selectOption: [
          {
            value: "1",
            label: "选项一"
          },
          {
            value: "2",
            label: "选项二"
          },
          {
            value: "3",
            label: "选项三"
          },
          {
            value: "4",
            label: "选项四"
          }
        ]
      };
    }
  };
</script>
```

:::

### 选项位置

`position`支持配置选项的位置，`top`选项出现在上面，`bottom`选项出现在下面，`auto`选项根据下拉框位置自适应，默认值`auto`

::: demo

```html
<div class="input-group">
  <div>top</div>
  <v-select v-model="select1" position="top" :options="selectOption"></v-select>
</div>
<div>
  <div>bottom</div>
  <v-select
    v-model="select1"
    position="bottom"
    :options="selectOption"
  ></v-select>
</div>

<script>
  export default {
    data() {
      return {
        select1: "1",
        selectOption: [
          {
            value: "1",
            label: "选项一"
          },
          {
            value: "2",
            label: "选项二"
          },
          {
            value: "3",
            label: "选项三"
          },
          {
            value: "4",
            label: "选项四"
          }
        ]
      };
    }
  };
</script>
```

:::

### 支持多选

`is-multiple`支持多项选择，`multiple-limit`多选个数限制，`0`表示无限制

::: demo

```html
<v-select
  v-model="select1"
  is-multiple
  :multiple-limit="4"
  :options="selectOption"
></v-select>

<script>
  export default {
    data() {
      return {
        select1: ["1"],
        selectOption: [
          {
            value: "1",
            label: "选项一"
          },
          {
            value: "2",
            label: "选项二"
          },
          {
            value: "3",
            label: "选项三"
          },
          {
            value: "4",
            label: "选项四"
          },
          {
            value: "5",
            label: "选项五"
          },
          {
            value: "6",
            label: "选项六"
          }
        ]
      };
    }
  };
</script>
```

:::

### v-select Attributes

| 参数           | 说明                                         | 类型           | 可选值              | 默认值 |
| -------------- | -------------------------------------------- | -------------- | ------------------- | ------ |
| v-model        | 绑定值，多选时值为数组，单选时为字符串       | string / Array | —                   | —      |
| name           | select input 的 name 属性                    | string         | —                   | —      |
| disabled       | 是否禁用                                     | boolean        | —                   | false  |
| width          | 选择器宽度                                   | string / Array | —                   | —      |
| is-clear       | 是否可以清空选项                             | boolean        | —                   | false  |
| is-multiple    | 是否可以多选，支持多选时不能配置自定义       | boolean        | —                   | false  |
| multiple-limit | 多选时用户最多可以选择的个数，为 0 则不限制  | number         | —                   | 0      |
| placeholder    | 占位符                                       | string         | —                   | 请选择 |
| size           | 输入框尺寸                                   | string         | S / M / L           | M      |
| options        | 下拉选项数组对象，支持数据选项为对象和字符串 | Array          | —                   | []     |
| is-manual      | 是否支持手动输入                             | boolean        | —                   | false  |
| manual-text    | 手动输入时选项的文字                         | string         | —                   | 自定义 |
| position       | 选项框位置，对应上 、下、 自适应             | string         | top / bottom / auto | auto   |

**当支持手动输入时，支持输入框组件的属性**

### options

选择器选项配置，支持`Object`，`Boolean`，`Number`，`String`

- 数组选项为非对象时，显示文本和值一致

| 参数     | 说明         | 类型                      | 可选值 | 默认值 |
| -------- | ------------ | ------------------------- | ------ | ------ |
| label    | 选项文字     | string                    | —      | —      |
| value    | 选项的值     | string / number / boolean | —      | —      |
| disabled | 是否禁用此项 | boolean                   | —      | false  |

### 事件 Events

| 事件名         | 说明                                     | 参数                          |
| -------------- | ---------------------------------------- | ----------------------------- |
| change         | 值改变时执行（失焦或者选择选项后）       | 改变后的值                    |
| input          | 输入框值改变时触发                       | 输入框的值                    |
| blur           | 输入框失焦时触发，不支持手动输入时不执行 | event                         |
| focus          | 输入框聚焦时触发，不支持手动输入时不执行 | event                         |
| clear          | 点击清空时触发                           | —                             |
| visible-change | 下拉框出现/隐藏时触发                    | 出现则为 true，隐藏则为 false |
