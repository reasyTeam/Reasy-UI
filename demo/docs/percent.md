## 百分比图、进度条

用于表示在一个内容中占该内容整体的百分之多少。

### 按需引用

```js
import { Base, Percent } from "@reasy-team/reasy-ui";

Vue.use(Percent);
Vue.use(Base);
```

### 基础示例

进度条的默认配置示例。

:::demo 默认配置要保证组件的外层容器有对应的`高`和`宽`，否则无法渲染图表。

```html
<v-row :gutter="24">
  <v-col :span="8">
    <v-chart-percent :height="160" :value=".7"></v-chart-percent>
  </v-col>
  <v-col :span="8">
    <v-chart-percent :height="160" :colors="['#17cc82']" :value="1">
      <i class="v-icon-ok" style="color:#17cc82; font-size:34px;"></i>
    </v-chart-percent>
  </v-col>
  <v-col :span="8">
    <v-chart-percent :height="160" :colors="['#f7421e']" :value=".7">
      <i class="v-icon-close" style="color:#f7421e; font-size:34px;"></i>
    </v-chart-percent>
  </v-col>
</v-row>
```

:::

### 类型

提供圆环和条形两种进度条的样式可供选择。

:::demo 通过`type`设置进度条的样式类型，可选值为`circle`、`line`，其中默认值为`circle`。

```html
<v-row :gutter="24">
  <v-col :span="12">
    <v-chart-percent
      :height="200"
      :value=".7"
      type="circle"
      title="圆环"
    ></v-chart-percent>
  </v-col>
  <v-col :span="12">
    <v-chart-percent
      :height="200"
      :value=".7"
      type="line"
      title="条形"
    ></v-chart-percent>
  </v-col>
</v-row>
```

:::

### 文本位置

设置进度条中文本的位置。

:::demo 通过`text-position`设置文本是显示位置，可选值为`auot`（水平垂直居中显示）和`right`（垂直居中显示在最右边），默认值为`auto`。如果需要自定义显示的文本，那么也需要配置`text-width`属性的值，组件无法识别文本的长度，默认为`40px`。

```html
<v-row :gutter="24">
  <v-col :span="24">
    <v-chart-percent text-position="right" :height="40" :colors="['#FF801F']" :back-color="['#D8D8D8']" :value=".5" type="line"></v-chart-percent>
  </v-col>
  <v-col :span="24">
    <v-chart-percent text-position="right" :height="40" :colors="['#17cc82']" :back-color="['#D8D8D8']" :value="1" type="line">
      <i class="v-icon-ok-plane" style="color:#17cc82;"></i>
    </v-chart-percent>
  </v-col>
  <v-col :span="24">
    <v-chart-percent text-position="right" :height="40" :colors="['#f7421e']" :back-color="['#D8D8D8']" :value=".7" type="line">
      <i class="v-icon-close-plane" style="color:#f7421e;"></i>
    </v-chart-percent>
  </v-col>
</v-row>

```

:::

### 是否显示文本

设置图形中的文本内容是否显示。

:::demo 通过`show-text`设置文本是显示，默认值为`true`显示文本信息。

```html
<v-row :gutter="24">
  <v-col :span="6">
    <v-chart-percent :height="200" :value=".8" type="circle"></v-chart-percent>
  </v-col>
  <v-col :span="6">
    <v-chart-percent :show-text="false" :height="200" :value=".8" type="circle"></v-chart-percent>
  </v-col>
  <v-col :span="6">
    <v-chart-percent :height="200" :value=".8" type="line"></v-chart-percent>
  </v-col>
  <v-col :span="6">
    <v-chart-percent :show-text="false" :height="200" :value=".8" type="line"></v-chart-percent>
  </v-col>
</v-row>
```

:::

### 区间值

设置进度条不同区间值对应不同的颜色和底色。

:::demo 通过`color-value`设置区间值，通过`colors`属性设置区间值对应的颜色，通过`back-color`属性设置区间值对应的底色值。

```html
<v-row :gutter="24">
  <v-col :span="12">
    <v-chart-percent
      :height="200"
      :value="val"
      :colors="['#6ebbff', '#7ee6f2', '#ace06f', '#ffcd58', '#b792f7', '#ff7348']"
      :color-value="[0.2, 0.35, 0.5, 0.65, 0.8, 1]"
    ></v-chart-percent>
  </v-col>
  <v-col :span="12">
    <v-chart-percent
      :height="200"
      :value="val"
      :colors="['#6ebbff', '#7ee6f2', '#ace06f', '#ffcd58', '#b792f7', '#ff7348']"
      :color-value="[0.2, 0.35, 0.5, 0.65, 0.8, 1]"
      type="line"
    ></v-chart-percent>
  </v-col>
</v-row>
<script>
  export default {
    data() {
      return { val: 0 };
    },
    methods: {
      interval() {
        this.timer = setInterval(() => {
          if (this.val < 1) {
            this.val += 0.01;
          } else {
            this.val = 0;
          }
        }, 100);
      }
    },
    mounted() {
      this.interval();
    },
    beforeDestroy() {
      clearInterval(this.timer);
    }
  };
</script>
```

:::

### 样式设置

设置进度条的圆环的粗细和边距。

:::demo 通过`stroke-width`属性设置圆环的粗细，通过`padding`属性设置容器的内边距。

```html
<v-row :gutter="24">
  <v-col :span="12">
    <v-chart-percent
      :height="200"
      :value=".5"
      :stroke-width="20"
      type="circle"
      title="stroke-width: 20"
    ></v-chart-percent>
  </v-col>
  <v-col :span="12">
    <v-chart-percent
      :height="200"
      :value=".8"
      :padding="30"
      title="padding: 30"
    ></v-chart-percent>
  </v-col>
</v-row>
```

:::

### Slot

设置自定义文本信息。

:::demo 通过`default slot`设置自定义的文本信息。

```html
<v-row :gutter="24">
  <v-col :span="12">
    <v-chart-percent :height="200" :value=".5" type="circle">
      自定义的文本
    </v-chart-percent>
  </v-col>
  <v-col :span="12">
    <v-chart-percent :height="200" :value=".8" type="line">
      自定义的文本
    </v-chart-percent>
  </v-col>
</v-row>
```

:::

### 属性 Attributes

| 参数         | 说明                      | 类型   | 可选值       | 默认值       |
| ------------ | ------------------------- | ------ | ------------ | ------------ |
| type         | 类型                      | number | circle、line | circle       |
| title        | 标题                      | string | -            | -            |
| value        | 值                        | number | -            | -            |
| colors       | 区间对应的颜色值          | array  | -            | ['#ff801f']  |
| color-value  | 颜色对应的值区间          | array  | -            | [1]          |
| back-color   | 与 colors 对应的底色值    | array  | -            | ['#e9e9e9']  |
| width        | 宽，单位 px               | number | -            | 外层容器的宽 |
| height       | 高，单位 px               | number | -            | 外层容器的高 |
| stroke-width | 线条的粗细，单位 px       | number | -            | 8            |
| padding      | 图形容器的内边距，单位 px | number | -            | 20           |
| show-text    | 是否显示图形上的提示文本 | boolean | -            | true         |
| text-position | 文本显示位置 | boolean | right、auto            | auto         |
| text-width | 右侧显示文本的宽度，单位px | Number、String | -         | 40         |

### Slot

| name    | 说明                                 |
| ------- | ------------------------------------ |
| default | 默认显示百分比，在圆环内或者在直线上 |
