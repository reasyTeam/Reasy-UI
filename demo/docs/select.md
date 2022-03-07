## 选择器

当选项过多时，使用下拉菜单展示并选择。

### 按需引用

该组件依赖于`v-scroll`组件。

```js
import { Base, Scroll, Select } from "@reasy-team/reasy-ui";

Vue.use(Scroll);
Vue.use(Select);
Vue.use(Base);
```

### 基本用法

::: demo

```html
<v-select v-model="select1" name="select" :options="selectOption"></v-select>

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
<v-select v-model="select1" no-id :options="selectOption"></v-select>
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

### 自定义选项 HTML 结构

通过设定默认的`slot`可以自定义显示的内容，`slotProps`包含`label`和`value`两个属性。

::: demo

```html
<v-select v-model="select1" name="select-tem" :options="selectOption">
  <template v-slot="slotProps">
    <li>自定义列-{{slotProps.value}}</li>
  </template>
</v-select>
<script>
  export default {
    data() {
      return {
        select1: "white",
        selectOption: ["red", "black", "white", "blue", "gray"]
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
<v-select v-model="select1" no-id disabled :options="selectOption"></v-select>

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
<v-select v-model="select1" no-id :options="selectOption"></v-select>
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
   name="select-manual"
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

`is-clear`支持清除数据

::: demo

```html
<v-select v-model="select1" name="select-clear" is-clear :options="selectOption"></v-select>

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

### 支持搜索

`is-search`支持搜索数据

::: demo

```html
<v-select v-model="select" name="select-search" is-search :options="selectOption"></v-select>

<script>
  export default {
    data() {
      return {
        select: "1",
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
<v-row class="page-row">
  <v-col :span="2" class="page-row__title page-row__border">top</v-col>
  <v-col :span="22">
    <v-select
      v-model="select1"
      name="select-top"
      position="top"
      :options="selectOption"
    ></v-select>
  </v-col>
</v-row>
<v-row class="page-row">
  <v-col :span="2" class="page-row__title page-row__border">bottom</v-col>
  <v-col :span="22">
    <v-select
      v-model="select1"
      position="bottom"
      no-id
      :options="selectOption"
    ></v-select>
  </v-col>
</v-row>

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

`is-multiple`支持多项选择，`multiple-limit`多选个数限制，`0`表示无限制， `multiple-show-all`显示所有已选项

::: demo

```html
<v-row class="page-row">
  <v-col :span="2" class="page-row__title page-row__border">省略显示</v-col>
  <v-col :span="22">
    <v-select
      v-model="select1"
      is-multiple
      name="select-mul"
      :multiple-limit="4"
      :options="selectOption"
    ></v-select>
  </v-col>
</v-row>

<v-row class="page-row">
  <v-col :span="2" class="page-row__title page-row__border">完整显示</v-col>
  <v-col :span="22">
    <v-select
      v-model="select2"
      is-multiple
      name="select-all"
      multiple-show-all
      :options="selectOption"
    ></v-select>
  </v-col>
</v-row>

<script>
  export default {
    data() {
      return {
        select1: ["1"],
        select2: ["1"],
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

| 参数                   | 说明                                                           | 类型                              | 可选值              | 默认值 |
| ---------------------- | -------------------------------------------------------------- | --------------------------------- | ------------------- | ------ |
| v-model                | 绑定值，多选时值为数组，单选时为字符串                         | string / Array / Number / Boolean | —                   | —      |
| name                   | 原生属性name，同时渲染为id属性，**必填**                                       | string                            | —                   | —      |
| disabled               | 是否禁用                                                       | boolean                           | —                   | false  |
| width                  | 选择器宽度                                                     | string / Number                   | —                   | —      |
| is-clear               | 是否可以清空选项                                               | boolean                           | —                   | false  |
| is-search              | 是否可以搜索                                                   | boolean                           | —                   | false  |
| is-multiple            | 是否可以多选，支持多选时不能配置自定义                         | boolean                           | —                   | false  |
| multiple-limit         | 多选时用户最多可以选择的个数，为 0 则不限制                    | number                            | —                   | 0      |
| multiple-show-all      | 多选时是否展示所有的已选值                                     | boolean                           | —                   | false  |
| placeholder            | 占位符                                                         | string                            | —                   | 请选择 |
| size                   | 输入框尺寸                                                     | string                            | S / M / L           | M      |
| options                | 下拉选项数组对象，支持数据选项为对象和字符串                   | Array                             | —                   | []     |
| is-manual              | 是否支持手动输入                                               | boolean                           | —                   | false  |
| manual-text            | 手动输入时选项的文字                                           | string                            | —                   | 自定义 |
| position               | 选项框位置，对应上 、下、 自适应                               | string                            | top / bottom / auto | auto   |
| display-options-number | 设置可显示选项的数量，如 options.length 大于该值，则显示滚动条 | number                            | -                   | 5      |
| unit                   | 手动输入时，输入框支持的单位，同 v-input                       | string                            | -                   | -      |

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
