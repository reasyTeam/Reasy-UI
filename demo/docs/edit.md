# 可编辑输入框

用户可以输入任意字母，数字或符号。

## 按需引用

```js
import { Edit } from "@reasy-team/reasy-ui";

Vue.use(Edit);
```

## 编辑框大小

`size`配置编辑框大小，大中小分别为 `L`，`M`，`S`，默认为`M`

::: demo

```html
<div class="input-group">
  <v-edit v-model="sizeL" name="edit-l" size="L" />
</div>
<div class="input-group">
  <v-edit v-model="sizeM" name="edit-m" size="M" />
</div>
<div class="input-group">
  <v-edit v-model="sizeS" name="edit-s" size="S" />
</div>

<script>
  export default {
    data() {
      return {
        sizeL: "L",
        sizeM: "M",
        sizeS: "S"
      };
    }
  };
</script>
```

:::

## 禁用

`disabled` 配置编辑框是否禁用

::: demo

```html
<v-edit disabled name="input-e" v-model="edit" />
<script>
  export default {
    data() {
      return {
        edit: "1234"
      };
    }
  };
</script>
```

:::

## 编辑框宽度

`width`配置编辑框长度，支持数字和字符串，数字时为具体的 px，字符串支持百分比显示和具体的宽度

::: demo

```html
<div class="input-group">
  <v-edit :width="200" placeholder="数字200" name="input-e-1" v-model="edit" />
</div>
<div class="input-group">
  <v-edit width="120px" placeholder="字符120px" name="input-e-2" v-model="edit1" />
</div>
<div class="input-group">
  <v-edit width="50%" placeholder="字符50%" name="input-e-3" v-model="edit2" />
</div>
<script>
  export default {
    data() {
      return {
        edit: "",
        edit1: "",
        edit2: ""
      };
    }
  };
</script>
```

:::

## 输入长度限制

`maxlength`配置输入框最大输入字符个数

::: demo

```html
<v-edit :maxlength="10" name="input-e-4" v-model="edit" />
<script>
  export default {
    data() {
      return {
        edit: "1234"
      };
    }
  };
</script>
```

:::

配合`show-word-limit`显示输入框当前输入个数和最大输入个数

::: demo

```html
<v-edit :maxlength="100" name="edit-limit" v-model="edit" show-word-limit />
<script>
  export default {
    data() {
      return {
        edit: "1234"
      };
    }
  };
</script>
```

:::

## 支持清除

`is-clear`配置输入框是否支持清空

::: demo

```html
<v-edit is-clear name="edit-clear" v-model="edit" />
<script>
  export default {
    data() {
      return {
        edit: "1234"
      };
    }
  };
</script>
```

:::

## 输入字符限制

`allow`配置输入框允许输入字符的正则表达式

只允许输入数字

::: demo

```html
<v-edit :allow="/\d/g" name="input-e-5" v-model="edit" />
<script>
  export default {
    data() {
      return {
        edit: 1234
      };
    }
  };
</script>
```

:::

## 输入单位

`unit`配置输入框的单位

::: demo

```html
<v-edit unit="KB/s" autofocus name="input-e-6" v-model="edit" />
<script>
  export default {
    data() {
      return {
        edit: "1234"
      };
    }
  };
</script>
```

:::

## 自动纠错

`auto-correction`配置输入框的纠错范围

::: demo

```html
<v-edit v-model="edit" name="edit-cor" :auto-correction="[1, 10]" :allow="/\d/g" :not-correct-empty="false" />
<script>
  export default {
    data() {
      return {
        edit: 10
      };
    }
  };
</script>
```

:::

## Props

| 参数            | 说明                                                                    | 类型            | 可选值    | 默认值 |
| --------------- | ----------------------------------------------------------------------- | --------------- | --------- | ------ |
| v-model         | 绑定值                                                                  | string / number | —         | —      |
| no-id           | 是否不需要id，为false则以`name`作为id，除特殊情况，表单中使用必须添加id | boolean         | -         | false  |
| name            | 原生属性name，同时渲染为id属性，当`no-id`为false时**必填**              | string          | -         | -      |
| maxlength       | 最大输入长度                                                            | number          | —         | —      |
| disabled        | 是否禁用                                                                | boolean         | —         | false  |
| width           | 输入框长度，支持数字和字符串，如 70 或 70px 或 70%                      | string / number | —         | —      |
| placeholder     | 输入框占位文字                                                          | string          | —         | —      |
| is-clear        | 是否支持清空                                                            | boolean         | —         | false  |
| show-word-limit | 是否显示输入字数统计                                                    | boolean         | —         | false  |
| autofocus       | 是否自动聚焦                                                            | boolean         | —         | false  |
| size            | 编辑框大小                                                              | string          | S / M / L | M      |
| allow           | 输入框允许输入字符的正则表达式                                          | RegExp          | —         | —      |
| unit            | 输入框单位                                                              | String          | —         | —      |
| auto-correction | 自动纠错，仅支持按范围进行数字纠错                                      | Array           | —         | []     |

## @Events

| 事件名 | 说明               | 参数       |
| ------ | ------------------ | ---------- |
| change | 值改变时执行       | 改变后的值 |
| input  | 输入框值改变时触发 | 输入框的值 |
| blur   | 输入框失焦时触发   | event      |
| focus  | 输入框聚焦时触发   | event      |
| clear  | 点击清空时触发     | —          |
