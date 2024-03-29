# 输入框

用户可以输入任意字母，数字或符号（除非另有限制）的内容。

## 按需引用

```js
import { Base, Input } from "@reasy-team/reasy-ui";

Vue.use(Input);
Vue.use(Base);
```

## 输入框大小

`size`配置输入框大小，大中小分别为 `L`，`M`，`S`，默认为`M`

::: demo

```html
<div class="input-group">
  <v-input type="text" v-model="sizeL" name="input-size-l" size="L"></v-input>
</div>
<div class="input-group">
  <v-input type="text" v-model="sizeM" name="input-size-m" size="M"></v-input>
</div>
<div class="input-group">
  <v-input type="text" v-model="sizeS" name="input-size-s" size="S"></v-input>
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

`disabled`配置输入框是否禁用

::: demo

```html
<v-input type="password" name="input-p-d" disabled v-model="input"></v-input>
<script>
  export default {
    data() {
      return {
        input: "1234"
      };
    }
  };
</script>
```

:::

## 密码框

`show-password`配置密码框是否显示切换密码框类型

::: demo

```html
<v-input type="password" name="input-p-s1" show-password v-model="input"></v-input>
<script>
  export default {
    data() {
      return {
        input: "1234"
      };
    }
  };
</script>
```

:::

## 密码强度

`show-strength`配置是否显示密码强度

::: demo

```html
<v-input type="password" v-model="input" name="input-p-s" show-strength :strength="strength"></v-input>
<script>
  export default {
    data() {
      return {
        input: "12345",
        strength: "L"
      };
    }
  };
</script>
```

:::

## 自动聚焦

`autofocus`配置是否自动聚焦

::: demo

```html
<v-input type="text" name="input-auto" autofocus v-model="input"></v-input>
<script>
  export default {
    data() {
      return {
        input: "1234"
      };
    }
  };
</script>
```

:::

## 输入框宽度

`width`配置输入框长度，支持数字和字符串，数字时为具体的 px，字符串支持百分比显示和具体的宽度

::: demo

```html
<div class="input-group">
  <v-input type="text" name="input-width" :width="200" placeholder="数字200" v-model="input"></v-input>
</div>
<div class="input-group">
  <v-input type="text" name="input-3" width="120px" placeholder="字符120px" v-model="input1"></v-input>
</div>
<div class="input-group">
  <v-input type="text" width="50%" placeholder="字符50%" name="input-4" v-model="input2"></v-input>
</div>
<script>
  export default {
    data() {
      return {
        input: "",
        input1: "",
        input2: ""
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
<v-input type="text" name="input-max" :maxlength="10" v-model="input"></v-input>
<script>
  export default {
    data() {
      return {
        input: "1234"
      };
    }
  };
</script>
```

:::

配合`show-word-limit`显示输入框当前输入个数和最大输入个数

::: demo

```html
<v-input type="text" name="input-limit" :maxlength="10" v-model="input" show-word-limit></v-input>
<v-input type="textarea" name="input-limit1" :maxlength="100" v-model="input" show-word-limit></v-input>
<script>
  export default {
    data() {
      return {
        input: "1234"
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
<v-input type="text" name="input-clear" is-clear v-model="input"></v-input>
<script>
  export default {
    data() {
      return {
        input: "1234"
      };
    }
  };
</script>
```

:::

## 支持搜索

`is-clear`配置输入框是否支持搜索

::: demo

```html
<v-input type="text" name="input-search1" is-search v-model="input"></v-input>
<script>
  export default {
    data() {
      return {
        input: ""
      };
    }
  };
</script>
```

:::

## 前缀图标和后缀图标

`icon`配置输入框的前缀图标，`suffix-icon`配置输入框的后缀图标，值为对应图标的类名

::: demo

```html
<v-input type="text" name="input-search" icon="v-icon-search" suffix-icon="v-icon-time" v-model="input"></v-input>
<script>
  export default {
    data() {
      return {
        input: "1234"
      };
    }
  };
</script>
```

:::

## 前缀文本

`pre-text`配置输入框的前缀文本

::: demo

```html
<v-input type="text" v-model="input"  name="input-pre" pre-text="http://"></v-input>
<script>
  export default {
    data() {
      return {
        input: "1234"
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
<v-input type="text" name="input-allow" :allow="/\d/g" v-model="input"></v-input>
<script>
  export default {
    data() {
      return {
        input: "1234"
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
<v-input type="text" name="input-unit" unit="KB/s" v-model="input"></v-input>
<script>
  export default {
    data() {
      return {
        input: "1234"
      };
    }
  };
</script>
```

:::

## 文本区域

::: demo

```html
<v-input type="textarea" name="textarea" v-model="input"></v-input>
<script>
  export default {
    data() {
      return {
        input: "1234"
      };
    }
  };
</script>
```

:::

`rows` 设置文本区域的显示行数，仅在`type="textarea"`时有效

::: demo

```html
<v-input type="textarea" name="input-row" :rows="8" v-model="input"></v-input>
<script>
  export default {
    data() {
      return {
        input: "1234"
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
<div>空时不纠正</div>
<v-input type="text" name="input-co" v-model="input" :auto-correction="[1, 10]" :allow="/\d/g" not-correct-empty></v-input>
<div>空时纠正为最小值</div>
<v-input type="text" name="input-co2" v-model="input1" :auto-correction="[1, 10]" :allow="/\d/g"></v-input>

<script>
  export default {
    data() {
      return {
        input: 8,
        input1: 8
      };
    }
  };
</script>
```

:::

## Props

| 参数               | 说明                                                                    | 类型            | 可选值                               | 默认值 |
| ------------------ | ----------------------------------------------------------------------- | --------------- | ------------------------------------ | ------ |
| v-model            | 绑定值                                                                  | string / number | —                                    | —      |
| type               | 类型                                                                    | string          | text/textarea,其他 input type 的类型 | —      |
| no-id              | 是否不需要id，为false则以`name`作为id，除特殊情况，表单中使用必须添加id | boolean         | -                                    | false  |
| name               | 原生属性name，同时渲染为id属性，当`no-id`为false时**必填**              | string          | -                                    | -      |
| maxlength          | 最大输入长度                                                            | number          | —                                    | —      |
| disabled           | 是否禁用                                                                | boolean         | —                                    | false  |
| width              | 输入框长度，支持数字和字符串，如 70 或 70px 或 70%                      | string / number |                                      |        |
| placeholder        | 输入框占位文字                                                          | string          | —                                    | —      |
| is-clear           | 是否支持清空                                                            | boolean         | —                                    | false  |
| is-search          | 是否支持搜索                                                            | boolean         | —                                    | false  |
| show-password      | 是否显示切换密码图标                                                    | boolean         | —                                    | false  |
| show-strength      | 是否显示密码强度                                                        | boolean         | —                                    | false  |
| show-strength-text | 是否显示强度文字说明                                                    | boolean         | —                                    | true   |
| strength           | 密码强度                                                                | string          | L/M/H                                | —      |
| show-word-limit    | 是否显示输入字数统计                                                    | boolean         | —                                    | false  |
| readonly           | 原生属性，是否只读                                                      | boolean         | —                                    | false  |
| autofocus          | 是否自动聚焦                                                            | boolean         | —                                    | false  |
| size               | 输入框大小，textarea 时无效                                             | string          | S / M / L                            | M      |
| icon               | 输入框头部图标                                                          | string          | —                                    | —      |
| suffix-icon        | 输入框尾部图标                                                          | string          | —                                    | —      |
| pre-text           | 输入框头部文字                                                          | string          | —                                    | —      |
| rows               | textarea 时生效                                                         | number          | —                                    | 2      |
| allow              | 输入框允许输入字符的正则表达式                                          | RegExp          | —                                    | —      |
| unit               | 输入框单位                                                              | String          | —                                    | —      |
| auto-correction    | 自动纠错，仅支持按范围进行数字纠错                                      | Array           | —                                    | []     |
| not-correct-empty  | 自动纠错时不对空值纠正                                                  | Boolean         | —                                    | false  |
## @Events

| 事件名 | 说明                                                 | 参数       |
| ------ | ---------------------------------------------------- | ---------- |
| change | 值改变时执行（失焦时），先执行失焦事件，再执行此事件 | 改变后的值 |
| input  | 输入框值改变时触发                                   | 输入框的值 |
| blur   | 输入框失焦时触发                                     | event      |
| focus  | 输入框聚焦时触发                                     | event      |
| clear  | 点击清空时触发                                       | —          |

## Methods

| 方法名        | 说明           | 参数           |
| ------------- | -------------- | -------------- |
| focus         | 输入框聚焦     |                |
| setInputValue | 设置输入框的值 | 设置输入框的值 |
| select        | 输入框内容选中 |                |
