## 日期选择器

### 基本用法

::: demo

```html
<v-datepicker v-model="date"></v-datepicker>
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
<v-datepicker disabled v-model="date"></v-datepicker>
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
<v-datepicker type="datetime" v-model="date"></v-datepicker>
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
<v-datepicker is-range v-model="date"></v-datepicker>
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

| 参数            | 说明                                                                                                                                                                     | 类型           | 可选值          | 默认值     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | --------------- | ---------- |
| value / v-model | 绑定值                                                                                                                                                                   | string         | —               | —          |
| type            | 日期时间类型，date 日期 <br />datetime 时间日期                                                                                                                          | string         | date / datetime | date       |
| name            | 时间框名称                                                                                                                                                               | string         | —               | —          |
| disabled        | 是否禁用                                                                                                                                                                 | boolean        | —               | false      |
| width           | 日期选择器宽度                                                                                                                                                           | string / Array | —               | —          |
| is-clear        | 是否支持清除                                                                                                                                                             | boolean        | —               | true       |
| is-range        | 是否支持范围选择                                                                                                                                                         | boolean        | —               | false      |
| placeholder     | 占位内容，支持范围选择时为开始日期的占位符<br />不支持范围时为日期选择框的占位符                                                                                         | string         | —               | —          |
| end-placeholder | 支持范围选择时结束时间的占位符                                                                                                                                           | string         |                 |            |
| format          | 日期格式，YYYY-MM-DD hh:mm:ss<br />日期格式 YYYY-MM-DD 可任意调整年月日的位置 <br />YYYY 表示年 MM 表示月 DD 表示天 分隔符可自定义<br /><br />时分秒格式见`v-timepicker` | string         | —               | YYYY-MM-DD |
| min             | 最小日期，必须与日期格式对应                                                                                                                                             | string         | —               | 2000-01-01 |
| max             | 最大日期，必须与日期格式对应                                                                                                                                             | string         | —               | 2037-12-31 |
| minute-interval | 分钟间隔                                                                                                                                                                 | number         | —               | 1          |
| second-interval | 秒间隔                                                                                                                                                                   | number         | —               | 1          |
| size            | 输入框尺寸                                                                                                                                                               | string         | S / M / L       | M          |

## v-datepicker Events

| 事件名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| change | 值改变时执行 | 改变后的值 |
