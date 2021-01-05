## 百分比图

用于表示在一个内容中占该内容整体的百分之多少。

### 基础示例

百分比图的默认配置示例。

:::demo 默认配置要保证组件的外层容器有对应的`高`和`宽`，否则无法渲染图表。

```html
<div style="height: 200px;">
  <v-chart-percent :value=".7"></v-chart-percent>
</div>
```

:::

### 百分比图类型

提供圆环和条形两种百分比图的样式可供选择。

:::demo 通过`type`设置百分比图的样式类型，可选值为`circle`、`line`，其中默认值为`circle`。

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

### 区间值

设置百分比图不同区间值对应不同的颜色和底色。

:::demo 通过`color-value`设置区间值，通过`colors`属性设置区间值对应的颜色，通过`back-color`属性设置区间值对应的底色值。

```html
<div style="height: 200px;">
  <v-chart-percent
    :value="val"
    :colors="['#6ebbff', '#7ee6f2', '#ace06f', '#ffcd58', '#b792f7', '#ff7348']"
    :color-value="[0.2, 0.35, 0.5, 0.65, 0.8, 1]"
  ></v-chart-percent>
</div>

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

设置百分比图的圆环的粗细和边距。

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
| colors       | 区间对应的颜色值          | array  | -            | ['#ACE06F']  |
| color-value  | 颜色对应的值区间          | array  | -            | [1]          |
| back-color   | 与 colors 对应的底色值    | array  | -            | ['#F5F5F5']  |
| width        | 宽，单位 px               | number | -            | 外层容器的宽 |
| height       | 高，单位 px               | number | -            | 外层容器的高 |
| stroke-width | 线条的粗细，单位 px       | number | -            | 10           |
| padding      | 图形容器的内边距，单位 px | number | -            | 20           |

### Slot

| name    | 说明                                 |
| ------- | ------------------------------------ |
| default | 默认显示百分比，在圆环内或者在直线上 |
