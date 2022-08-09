# 二维码

可根据任意文本生成二维码

## 按需引用

```js
import { Qrcode } from "@reasy-team/reasy-ui";

Vue.use(Qrcode);
```

## 基本用法

::: demo

```html
<v-qrcode no-id :text="text" />
<script>
  export default {
    data() {
      return {
        text: "http://www.tenda.cn"
      };
    }
  };
</script>
```

:::

## 支持下载

`is-download` 配置二维码图片可下载

::: demo

```html
<v-qrcode name="down" :text="text" is-download />
<script>
  export default {
    data() {
      return {
        text: "http://www.tenda.cn"
      };
    }
  };
</script>
```

:::

## 支持背景图片

`bg-src` 配置背景图片, `dot-scale` 配置像素点缩放大小（需缩小像素点才能清晰的显示背景图）

::: demo

```html
<v-qrcode  no-id
  :text="text"
  :bg-src="require('@/views/img/dog.jpg')"
  :dot-scale="0.3"
/>
<script>
  export default {
    data() {
      return {
        text: "http://www.tenda.cn"
      };
    }
  };
</script>
```

:::

## 支持 logo 显示

`logo-src` 配置 logo 图片，`logo-scale` 配置 logo 大小， logo 图片尽量使用正方形

::: demo

```html
<v-qrcode no-id
  :text="text"
  :logo-src="require('@/views/img/logo2.png')"
  :logo-scale="0.3"
/>
<script>
  export default {
    data() {
      return {
        text: "http://www.tenda.cn"
      };
    }
  };
</script>
```

:::

## 自定义颜色

`color-dark` 配置像素点颜色，`color-light` 配置空白处颜色
::: demo

```html
<v-qrcode no-id
  :text="text"
  :logo-src="require('@/views/img/logo2.png')"
  :logo-scale="0.3"
  :color-dark="'#ffa866'"
  :colorLight="'#efefef'"
/>
<script>
  export default {
    data() {
      return {
        text: "http://www.tenda.cn"
      };
    }
  };
</script>
```

:::

## Props

| 参数              | 说明                                                     | 类型    | 可选值    | 默认值     |
| ----------------- | -------------------------------------------------------- | ------- | --------- | ---------- |
| text              | 需被生成二维码的内容                                     | string  | —         | —          |
| bg-src            | 二维码背景图片（像素点缩小后才能明显显示 ）              | string  | —         | —          |
| gif-bg-src        | GIF 背景图，优先级高于 bgSrc                             | string  | —         | —          |
| bg-color          | 背景色，需设置 margin 才能看到效果，表现为 margin 的颜色 | string  | —         | —          |
| bg-dimming        | 叠加在背景图上的颜色，需先设置背景图                     | string  | —         | —          |
| size-img          | 二维码宽度                                               | number  | —         | 120        |
| margin            | 二维码图像的外边距，（外边距会占二维码总宽度）           | number  | —         | 0          |
| logo-src          | logo 图片                                                | string  | —         | —          |
| logo-scale        | logo 缩放大小                                            | number  | —         | 0.2        |
| logo-margin       | logo 周围的透明边框                                      | number  | —         | 0          |
| logo-cornerRadius | logo 标识及其边框的圆角半径                              | number  | —         | 8          |
| auto-color        | 是否将背景图的主要颜色将作为像素点（colorDark）的颜色    | boolean | —         | true       |
| color-dark        | 像素点颜色                                               | string  | —         | —          |
| color-light       | 空白区颜色                                               | string  | —         | —          |
| dot-scale         | 数据区域点缩小比例                                       | number  | (0,1]     | 1          |
| width             | 二维码容器的宽度                                         | number  | —         | —          |
| is-download       | 是否有下载按钮                                           | boolean | —         | false      |
| disabled          | 下载按钮是否禁用                                         | boolean | —         | false      |
| btn-size          | 下载按钮大小                                             | string  | S / M / L | M          |
| btn-text          | 下载按钮文字                                             | string  | —         | 下载二维码 |
| file-name         | 下载的二维码文件名                                       | string  | —         | 二维码     |

## Slots

| name   | 说明                           |
| ------ | ------------------------------ |
| top    | 二维码上方内容                 |
| bottom | 二维码下方和下载按钮之间的内容 |
