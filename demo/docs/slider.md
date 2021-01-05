## 滑块

### 基本用法

::: demo

```html
<v-slider v-model="slider"></v-slider>
<script>
  export default {
    data() {
      return {
        slider: 12
      };
    }
  };
</script>
```

:::

### 自定义范围

::: demo

```html
<v-slider :min="10" :max="15" v-model="slider"></v-slider>
<script>
  export default {
    data() {
      return {
        slider: 12
      };
    }
  };
</script>
```

:::

显示范围

::: demo

```html
<v-slider show-range :min="10" :max="15" v-model="slider"></v-slider>
<script>
  export default {
    data() {
      return {
        slider: 12
      };
    }
  };
</script>
```

:::

### 显示输入框

::: demo

```html
<v-slider show-input :min="10" :max="15" v-model="slider"></v-slider>
<script>
  export default {
    data() {
      return {
        slider: 12
      };
    }
  };
</script>
```

:::

显示输入框控制器

::: demo

```html
<v-slider
  show-input
  show-input-controls
  :min="10"
  :max="15"
  v-model="slider"
></v-slider>
<script>
  export default {
    data() {
      return {
        slider: 12
      };
    }
  };
</script>
```

:::

### 精度和步长

::: demo

```html
<v-slider
  :step="0.1"
  :precision="2"
  show-input
  show-input-controls
  :min="0"
  :max="1"
  v-model="slider"
></v-slider>
<script>
  export default {
    data() {
      return {
        slider: 0.52
      };
    }
  };
</script>
```

:::

### Tooltip

::: demo

```html
<v-slider show-tooltip v-model="slider"></v-slider>
<script>
  export default {
    data() {
      return {
        slider: 12
      };
    }
  };
</script>
```

:::

格式化 toolTip 显示

::: demo

```html
<v-slider show-tooltip :format="format" v-model="slider"></v-slider>
<script>
  export default {
    data() {
      return {
        slider: 12
      };
    },
    methods: {
      format(value) {
        return value + "KB/s";
      }
    }
  };
</script>
```

:::

### 禁用

::: demo

```html
<v-slider
  :step="0.1"
  disabled
  :precision="2"
  show-input
  show-input-controls
  :min="0"
  :max="1"
  v-model="slider"
></v-slider>
<script>
  export default {
    data() {
      return {
        slider: 0.52
      };
    }
  };
</script>
```

:::

### v-slider Attributes

| 参数                | 说明                                              | 类型     | 可选值    | 默认值 |
| ------------------- | ------------------------------------------------- | -------- | --------- | ------ |
| v-model             | 绑定值                                            | number   | —         | —      |
| name                | 滑动条 name                                       | string   |           |        |
| min                 | 最小值                                            | number   | —         | 0      |
| max                 | 最大值                                            | number   | —         | 100    |
| disabled            | 是否禁用                                          | boolean  | —         | false  |
| step                | 步长                                              | number   | —         | 1      |
| size                | 输入框大小                                        | string   | S / M / L | M      |
| precision           | 精度，小于步长精度时取步长精度                    | Number   |           |        |
| show-range          | 是否显示范围提示文字                              | boolean  |           | false  |
| show-input          | 是否显示输入框                                    | boolean  | —         | false  |
| show-input-controls | 输入框是否显示加减                                | boolean  |           | false  |
| show-tooltip        | 是否显示 tooltip                                  | boolean  | —         | true   |
| format              | tooltip 显示格式化, function(value){return value} | Function | —         | —      |

### v-slider Events

| 事件名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| change | 值改变时执行 | 改变后的值 |
