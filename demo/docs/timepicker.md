## 时间选择器

用于选择时间

### 基本用法

::: demo

```html
<v-timepicker v-model="time"></v-timepicker>
<script>
  export default {
    data() {
      return {
        time: ""
      };
    }
  };
</script>
```

:::

### 禁用

::: demo

```html
<v-timepicker disabled v-model="time"></v-timepicker>
<script>
  export default {
    data() {
      return {
        time: "12:23"
      };
    }
  };
</script>
```

:::

### 支持秒钟

`format`中存在`ss`时，支持秒钟显示

::: demo

```html
<v-timepicker format="hh:mm:ss" is-clear v-model="time"></v-timepicker>
<script>
  export default {
    data() {
      return {
        time: "12:11:00"
      };
    }
  };
</script>
```

:::

### 配置间隔

`minute-interval`配置分钟间隔，`second-interval`配置秒钟间隔

::: demo

```html
<v-timepicker
  :minute-interval="5"
  :second-interval="10"
  format="hh:mm:ss"
  is-clear
  v-model="time"
></v-timepicker>
<script>
  export default {
    data() {
      return {
        time: "09:15:40"
      };
    }
  };
</script>
```

:::

### 自定义时间格式

`format`配置时间格式，`hh`表示小时，`mm`表示分钟，`ss`表示秒

**当配置 format 时，对应的`min`和`max`必须满足 format 格式**

::: demo

```html
<v-timepicker v-model="time" format="hh%mm-ss"></v-timepicker>
<script>
  export default {
    data() {
      return {
        time: "11%12-11"
      };
    }
  };
</script>
```

:::

### 可选时间区域

配置最大和最小的可选时间

`min`和`max`配置可选时间的区域

::: demo

```html
<v-timepicker v-model="time" min="12:00" max="18:00"></v-timepicker>
<script>
  export default {
    data() {
      return {
        time: "13:30"
      };
    }
  };
</script>
```

:::

### 支持时间范围

`is-range`支持时间范围配置

**`v-model`值必须为数组**

::: demo

```html
<v-timepicker is-range v-model="time"></v-timepicker>
<script>
  export default {
    data() {
      return {
        time: ["12:11", "23:23"]
      };
    }
  };
</script>
```

:::

`placeholder`和`end-placeholder`分别显示开始时间和结束时间的占位符

::: demo

```html
<v-timepicker
  is-range
  placeholder="开始时间"
  end-placeholder="结束时间"
  v-model="time"
></v-timepicker>
<script>
  export default {
    data() {
      return {
        time: []
      };
    }
  };
</script>
```

:::

### v-timepicker Attributes

| 参数            | 说明                                                                             | 类型    | 可选值   | 默认值 |
| --------------- | -------------------------------------------------------------------------------- | ------- | -------- | ------ |
| value / v-model | 绑定值                                                                           | string  | —        | —      |
| name            | 时间框名称                                                                       | string  | —        | —      |
| disabled        | 是否禁用                                                                         | boolean | —        | false  |
| is-clear        | 是否支持清除                                                                     | boolean | —        | true   |
| is-range        | 是否支持范围选择                                                                 | boolean | —        | false  |
| placeholder     | 占位内容，支持范围选择时为开始时间的占位符<br />不支持范围时为时间选择框的占位符 | string  | —        | —      |
| end-placeholder | 支持范围选择时结束时间的占位符                                                   | string  |          |        |
| format          | 时间格式，支持 hh、mm、ss 与任意字符组合，小时 hh 为必填项                       | string  | —        | hh:mm  |
| min             | 最小时间                                                                         | string  | —        | —      |
| max             | 最大时间                                                                         | string  | —        | —      |
| minute-interval | 分钟间隔                                                                         | number  | —        | 1      |
| second-interval | 秒间隔                                                                           | number  | —        | 1      |
| size            | 输入框尺寸                                                                       | string  | S/ M / L | M      |

### v-timepicker Events

| 事件名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| change | 值改变时执行 | 改变后的值 |
