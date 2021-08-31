## 计数器

通过鼠标或键盘，输入范围内的数值。
### 按需引用

```js
import { Input } from "@reasy-team/reasy-ui";

Vue.use(Input);
```

### 输入框大小

`size`配置输入框大小，大中小分别为 `L`，`M`，`S`，默认为`M`

::: demo

```html
<div class="input-group">
  <v-input-number size="L" v-model="num"></v-input-number>
</div>
<div class="input-group">
  <v-input-number size="M" v-model="num"></v-input-number>
</div>
<div class="input-group">
  <v-input-number size="S" v-model="num"></v-input-number>
</div>
<div class="input-group">
  <v-input-number size="L" v-model="num" controls-position="right"></v-input-number>
</div>
<div class="input-group">
  <v-input-number size="M" v-model="num" controls-position="right"></v-input-number>
</div>
<div class="input-group">
  <v-input-number size="S" v-model="num" controls-position="right"></v-input-number>
</div>
<script>
  export default {
    data() {
      return {
        num: 5
      };
    }
  };
</script>
```

:::

### 禁用

`disabled`配置是否禁用

::: demo

```html
<v-input-number disabled v-model="num"></v-input-number>

<v-input-number
  v-model="num"
  :min="0"
  :max="10"
  disabled
  controls-position="right"
></v-input-number>

<script>
  export default {
    data() {
      return {
        num: 5
      };
    }
  };
</script>
```

:::

### 计数器范围

`min`和`max`控制计数器可配置的范围

::: demo

```html
<v-input-number v-model="num" :min="1" :max="10"></v-input-number>
<script>
  export default {
    data() {
      return {
        num: 5
      };
    }
  };
</script>
```

:::

### 控制器按钮

`is-controls`控制计数器按钮，默认为`true`

不显示控制器按钮

::: demo

```html
<v-input-number v-model="num" :is-controls="false"></v-input-number>
<script>
  export default {
    data() {
      return {
        num: 0
      };
    }
  };
</script>
```

:::

### 控制器位置

`controls-position`控制器位置，默认为空值，控制按钮在输入框两侧，可选值`right`，按钮位置在右侧

::: demo

```html
<v-input-number
  v-model="num"
  :min="0"
  :max="10"
  controls-position="right"
></v-input-number>
<script>
  export default {
    data() {
      return {
        num: 0
      };
    }
  };
</script>
```

:::

### 步长

`step`配置计数器的步长，默认为`1`

::: demo

```html
<v-input-number v-model="num" :min="0" :max="10" :step="2"></v-input-number>
<script>
  export default {
    data() {
      return {
        num: 0
      };
    }
  };
</script>
```

:::

### 精度

`precision`配置计数器的精度

::: demo

```html
<v-input-number
  v-model="num"
  :min="0"
  :max="10"
  :precision="2"
></v-input-number>
<script>
  export default {
    data() {
      return {
        num: 0
      };
    }
  };
</script>
```

:::

### v-input-number Attributes

| 参数              | 说明                                               | 类型            | 可选值     | 默认值    |
| ----------------- | -------------------------------------------------- | --------------- | ---------- | --------- |
| v-model           | 绑定值                                             | number          | —          | —         |
| name              | 原生属性                                           | string          |            |           |
| disabled          | 是否禁用                                           | boolean         | —          | false     |
| width             | 输入框长度，支持数字和字符串，如 70 或 70px 或 70% | string / number | —          | —         |
| min               | 输入框最小值                                       | number          | —          | -Infinity |
| max               | 输入框最大值                                       | number          | —          | Infinity  |
| is-controls       | 输入框右侧是否有控制器                             | boolean         | —          | true      |
| controls-position | 控制器按钮位置                                     | string          | right      | —         |
| size              | 输入框尺寸                                         | string          | S / M / L  | M         |
| step              | 步长                                               | number          | —          | 1         |
| precision         | 数值精度，小于步长精度时计算会用步长的精度         | number          | 0 或正整数 | —         |

## v-input-number Events

| 事件名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| change | 值改变时执行 | 改变后的值 |
