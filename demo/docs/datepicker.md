## 日期选择器

输入或选择日期的控件，支持年、月、日。
### 按需引用

该组件依赖于`v-scroll`组件。

```js
import { Base, Scroll, Datepicker, Timepicker, Input, Button, Layout } from "@reasy-team/reasy-ui";

Vue.use(Scroll);
Vue.use(Datepicker);
Vue.use(Timepicker);
Vue.use(Input);
Vue.use(Layout);
Vue.use(Button);
Vue.use(Base);
```

### 基本用法

::: demo

```html
<v-datepicker name="datepicker" v-model="date"></v-datepicker>
<script>
  export default {
    data() {
      return {
        date: "2021-01-12"
      };
    }
  };
</script>
```

:::

### 禁用

::: demo

```html
<v-datepicker name="datepicker-d" disabled v-model="date"></v-datepicker>
<script>
  export default {
    data() {
      return {
        date: "2021-01-12"
      };
    }
  };
</script>
```

:::

### 支持时间

`type`支持`date`日期选择和`datetime`时间日期选择，默认为`date`

::: demo

```html
<v-datepicker name="datepicker-dt" type="datetime" v-model="date"></v-datepicker>
<script>
  export default {
    data() {
      return {
        date: "2021-01-12 12:11:23"
      };
    }
  };
</script>
```

:::

### 支持范围选择

`is-range`支持表示支持范围选择，支持范围选择时，值必须为数组。

`placeholder`和`end-placeholder`分别表示开始时间和结束时间的占位符

::: demo

```html
<v-datepicker no-id is-range v-model="date"></v-datepicker>
<script>
  export default {
    data() {
      return {
        date: ["2021-01-12", "2021-02-11"]
      };
    }
  };
</script>
```

:::

时间范围选择

::: demo

```html
<v-datepicker
  width="400px"
  is-range 
  no-id
  type="datetime"
  v-model="date"
></v-datepicker>
<script>
  export default {
    data() {
      return {
        date: ["2021-01-12 11:00:22", "2021-02-11 17:03:12"]
      };
    }
  };
</script>
```

:::

### 自定义格式

`format`为自定义日期格式，`YYYY`表示年，`MM`表示月，`DD`表示天， `hh`表示小时，`mm`表示分钟，`ss`表示秒

定义`format`时，必须定义`min`和`max`，避免最大最小值取值错误

::: demo

```html
<v-datepicker
  format="YYYY/MM/DD"
  v-model="date"  
  no-id
  max="2037/12/31"
  min="2000/01/01"
></v-datepicker>
<script>
  export default {
    data() {
      return {
        date: "2021/01/12"
      };
    }
  };
</script>
```

:::

### v-datepicker Attributes

| 参数            | 说明                                                                                                                                                                     | 类型            | 可选值          | 默认值                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | --------------- | ---------------------------------------------------- |
| value / v-model | 绑定值                                                                                                                                                                   | string          | —               | —                                                    |
| type            | 日期时间类型，date 日期 <br />datetime 时间日期                                                                                                                          | string          | date / datetime | date                                                 |
| name            | 时间框名称                                                                                                                                                               | string          | —               | —                                                    |
| disabled        | 是否禁用                                                                                                                                                                 | boolean         | —               | false                                                |
| width           | 日期选择器宽度                                                                                                                                                           | string / Number | —               | —                                                    |
| is-clear        | 是否支持清除                                                                                                                                                             | boolean         | —               | true                                                 |
| is-range        | 是否支持范围选择                                                                                                                                                         | boolean         | —               | false                                                |
| placeholder     | 占位内容，支持范围选择时为开始日期的占位符<br />不支持范围时为日期选择框的占位符                                                                                         | string          | —               | `is-range`为真时，默认是开始时间，其他默认是选择时间 |
| end-placeholder | 支持范围选择时结束时间的占位符                                                                                                                                           | string          |                 | 结束时间                                             |
| format          | 日期格式，YYYY-MM-DD hh:mm:ss<br />日期格式 YYYY-MM-DD 可任意调整年月日的位置 <br />YYYY 表示年 MM 表示月 DD 表示天 分隔符可自定义<br /><br />时分秒格式见`v-timepicker` | string          | —               | YYYY-MM-DD                                           |
| min             | 最小日期，必须与日期格式对应                                                                                                                                             | string          | —               | 2000-01-01                                           |
| max             | 最大日期，必须与日期格式对应                                                                                                                                             | string          | —               | 2037-12-31                                           |
| minute-interval | 分钟间隔                                                                                                                                                                 | number          | —               | 1                                                    |
| second-interval | 秒间隔                                                                                                                                                                   | number          | —               | 1                                                    |

## v-datepicker Events

| 事件名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| change | 值改变时执行 | 改变后的值 |
