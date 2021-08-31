## 输入框组

多个输入框按自定义需求进行组合，生成不同的输入框组。

### 按需引用

```js
import { Input } from "@reasy-team/reasy-ui";

Vue.use(Input);
```

### 输入框大小

`type`输入框组内置类型，可选值`ip`，`mac`，默认为空

::: demo

```html
<v-form ref="form">
  <v-form-item label="IP/网关等其它">
    <v-input-group type="ip" v-model="ip"></v-input-group>
  </v-form-item>
  <v-form-item label="MAC地址">
    <v-input-group type="mac" v-model="mac"></v-input-group>
  </v-form-item>
</v-form>

<script>
  export default {
    data() {
      return {
        ip: "192.168.0.1",
        mac: "C8:3A:35:21:22:11"
      };
    }
  };
</script>
```

:::

### 自定义输入框组

`input-nums`控制输入框个数，`splitter`输入框分隔符，`maxlength`每个输入框可输入的字符长度，`allow`输入框允许输入字符的正则表达式

::: demo

```html
<v-input-group
  v-model="mac"
  :input-nums="3"
  splitter="-"
  :maxlength="4"
  :allow="/[\da-f]/ig"
></v-input-group>
<script>
  export default {
    data() {
      return {
        mac: "C83A-3521-2211"
      };
    }
  };
</script>
```

:::

### 自动纠错

`auto-correction`配置输入框的纠错范围，可选两种数据格式进行配置，第一种：数组的子元素格式和`v-model`相同，第二种：数组的子元素格式为包含范围的数组

::: demo

```html
 <v-input-group
  v-model="num"
  splitter="-"
  :input-nums="2"
  :allow="/\d/g"
  :auto-correction="['0-0', '500-500']"
></v-input-group>
 <v-input-group
  type="ip"
  v-model="ip"
  :auto-correction="[
    [0, 223],
    [0, 255],
    [0, 255],
    [0, 221]
  ]"
></v-input-group>
<script>
  export default {
    data() {
      return {
        num: "100-300",
        ip: "192.168.0.1"
      };
    }
  };
</script>
```

:::

### v-input-group Attributes

| 参数       | 说明                                               | 类型            | 可选值    | 默认值 |
| ---------- | -------------------------------------------------- | --------------- | --------- | ------ |
| v-model    | 绑定值                                             | string          | —         | —      |
| type       | 输入框组类型                                       | string          | ip / mac  | —      |
| name       | 原生属性                                           | string          | —         | —      |
| disabled   | 是否禁用                                           | boolean         | —         | false  |
| width      | 输入框长度，支持数字和字符串，如 70 或 70px 或 70% | string / number |           |        |
| size       | 输入框大小                                         | string          | S / M / L | M      |
| input-nums | 输入框个数（自定义类型时需要定义输入框组个数）     | number          | —         | —      |
| splitter   | 输入框的分隔符                                     | string          | —         | —      |
| maxlength  | 每个输入框最大输入长度                             | number          | —         | —      |
| allow      | 输入框允许输入的字符的正则表达式                   | RegExp          | —         | —      |
| auto-correction | 自动纠错，仅支持按范围进行数字纠错             | Array          | —         | []      |

### v-input-group Events

| 事件名 | 说明               | 参数       |
| ------ | ------------------ | ---------- |
| change | 值改变时执行       | 改变后的值 |
| input  | 输入框值改变时触发 | 输入框的值 |
| focus  | 输入框聚焦时触发   | —          |
| blur   | 输入框失焦时触发   | —          |
