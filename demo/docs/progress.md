# Progress 进度条

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。 加载中进度条，存在加载中、成功、失败三种状态，进度条长度支持自定义。

## 按需引用

```js
import { Base, Progress, Percent } from "@reasy-team/reasy-ui";

Vue.use(Progress);
Vue.use(Percent);
Vue.use(Base);
```

## 进度条

标准的进度条。

:::demo

```html
<v-row :gutter="24">
  <v-col :span="24">
    <v-progress :height="40" :value=".5" type="line"></v-progress>
  </v-col>
  <v-col :span="24">
    <v-progress :height="40" state="success" :iconSize="24" :value="1" type="line">
    </v-progress>
  </v-col>
  <v-col :span="24">
    <v-progress :height="40" state="error" :iconSize="24" :value=".7" type="line">
    </v-progress>
  </v-col>
</v-row>
```

:::

## 小型进度条

适合放在较狭窄的区域内。

:::demo

```html
<v-row :gutter="24">
  <v-col :offset="9" :span="6">
    <v-progress :height="30" :strokeWidth="4" :value=".5" type="line"></v-progress>
  </v-col>
  <v-col :offset="9" :span="6">
    <v-progress :height="30" :strokeWidth="4" state="success" :value="1" type="line">
    </v-progress>
  </v-col>
  <v-col :offset="9" :span="6">
    <v-progress :height="30" :strokeWidth="4" state="error" :value=".7" type="line">
    </v-progress>
  </v-col>
</v-row>
```

:::



## 进度圈

圈形的进度。

:::demo

```html
<v-row :gutter="24">
  <v-col :span="8">
    <v-progress :height="120" :strokeWidth="4"  :iconSize="16" :value=".7"></v-progress>
  </v-col>
  <v-col :span="8">
    <v-progress :height="120" :strokeWidth="4" state="success" :iconSize="24" :value="1">
    </v-progress>
  </v-col>
  <v-col :span="8">
    <v-progress :height="120" :strokeWidth="4" state="error" :iconSize="24" :value=".7">
    </v-progress>
  </v-col>
</v-row>

```

:::

## 小型进度圈

小一号的圈形进度。

:::demo

```html
<v-row :gutter="24">
  <v-col :span="8">
    <v-progress :height="88" :strokeWidth="2" :iconSize="12" :value=".7"></v-progress>
  </v-col>
  <v-col :span="8">
    <v-progress :height="88" :strokeWidth="2" state="success" :iconSize="16" :value="1">
    </v-progress>
  </v-col>
  <v-col :span="8">
    <v-progress :height="88" :strokeWidth="2" state="error" :iconSize="16" :value=".7">
    </v-progress>
  </v-col>
</v-row>

```

:::

## Props

| 参数         | 说明                      | 类型   | 可选值       | 默认值       |
| ------------ | ------------------------- | ------ | ------------ | ------------ |
| type         | 类型                      | number | circle、line | circle       |
| state        | 状态                      | string | success、progress、error  | progress    |
| value        | 值                        | number | -            | -            |
| progressColor | 进行中的颜色值          | string  | -            | #ff801f  |
| successColor  | 完成的颜色值          | string  | -            | #17cc82         |
| errorColor  | 失败的颜色值          | string  | -            | #f7421e         |
| back-color   | 与 colors 对应的底色值    | array  | -            | #e9e9e9  |
| width        | 宽，单位 px               | number | -            | 外层容器的宽 |
| height       | 高，单位 px               | number | -            | 外层容器的高 |
| stroke-width | 线条的粗细，单位 px       | number | -            | 8            |
| padding      | 图形容器的内边距，单位 px | number | -            | 20           |
| icon-size    | 图标或者文本的大小 | number | -            | 14         |

