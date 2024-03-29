# 滑块

滑动型输入器，在范围内滑动选择数据。

## 按需引用

```js
// 当显示输入时需要同时引入Input和Button组件
import { Base, Input, Button, Slider } from "@reasy-team/reasy-ui";

Vue.use(Slider);
Vue.use(Button);
Vue.use(Input);
Vue.use(Base);
```

## 基本用法

::: demo

```html
<v-slider name="slider" v-model="slider"></v-slider>
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

## 自定义范围

::: demo

```html
<v-slider name="slider-range" :min="10" :max="15" v-model="slider"></v-slider>
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
<v-slider name="slider-show" show-range :min="10" :max="15" v-model="slider"></v-slider>
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

## 显示输入框

::: demo

```html
<v-slider show-input name="slider-input" :min="10" :max="15" v-model="slider"></v-slider>
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
  name="slider-ctr"
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

## 精度和步长

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
  name="slider-step"
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

## Tooltip

::: demo

```html
<v-slider show-tooltip name="slider-tip" v-model="slider"></v-slider>
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
<v-slider show-tooltip name="slider-f" :format="format" v-model="slider"></v-slider>
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

## 禁用

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
  name="slider-d"
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

## Props

| 参数                | 说明                                              | 类型     | 可选值    | 默认值 |
| ------------------- | ------------------------------------------------- | -------- | --------- | ------ |
| v-model             | 绑定值                                            | number   | —         | —      |
| no-id       | 是否不需要id，为false则以`name`作为id，除特殊情况，表单中使用必须添加id         | boolean  | - | false|
| name        | 原生属性name，同时渲染为id属性，当`no-id`为false时**必填**  | string  | - | -   |
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

## @Events

| 事件名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| change | 值改变时执行 | 改变后的值 |
