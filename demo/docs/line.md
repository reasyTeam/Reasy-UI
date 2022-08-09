# 折线图

表征分类型变量 vs 数值型变量的关系。

## 按需引用

```js
import { Base, Line } from "@reasy-team/reasy-ui";

Vue.use(Line);
Vue.use(Base);
```

## 基础示例

折线图的默认配置示例。

:::demo 默认配置要保证组件的外层容器有对应的`高`和`宽`，否则无法渲染图表。
```html
<div style="height: 300px;">
  <v-chart-line
    :series="series"
    :categories="categories"
  >
  </v-chart-line>
</div>

<script>
export default {
  data(){
    return {
      series: [
        {
          name: "KPI",
          data: [180, 80, 38, 144, 89]
        },
        {
          name: "NPM",
          data: [150, 178.34, 50, 178, 78]
        },
        {
          name: "ICU",
          data: [99, 56, 76, 28, 140]
        },
        {
          name: "GDP",
          data: [28, 90, 96, 96, 145]
        },
        {
          name: "PDD",
          data: [62, 24, 156, 60, 89]
        },
        {
          name: "KFF",
          data: [80, 98, 134, 96, 78]
        }
      ],
      categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]
    }
  }
}
</script>
```
:::

## 对文本的自适应

根据文本进行位置自适应调整。

:::demo 
```html
<v-row :gutter="24">
  <v-col :span="10">
    <v-chart-line
      :series="series"
      :height="300"
      :categories="categories"
    ></v-chart-line>
  </v-col>
  <v-col :span="14">
    <v-chart-line
      :series="series"
      :height="300"
      :categories="categories"
    ></v-chart-line>
  </v-col>
</v-row>

<script>
export default {
  data(){
    return {
      series: [
        {
          name: "KPI",
          data: [180, 80, 38, 144, 89]
        },
        {
          name: "NPM",
          data: [150, 178.34, 50, 178, 78]
        },
        {
          name: "ICU",
          data: [99, 56, 76, 28, 140]
        },
        {
          name: "GDP",
          data: [28, 90, 96, 96, 145]
        },
        {
          name: "PDD",
          data: [62, 24, 156, 60, 89]
        },
        {
          name: "KFF",
          data: [80, 98, 134, 96, 78]
        }
      ],
      categories: ["Novak Djokovic", "maria sharapova", "Serena Williams", "Victória Azárenka", "Petra Kvitová"]
    }
  }
}
</script>
```
:::

## 折线类型
提供曲线和直线两种样式的折线图。同时可以设置从坐标原点进行折线图的绘制，或者从坐标原点后面开始绘制。

:::demo 通过`type`设置折线图的样式，其中`1`为直线，`2`为曲线，默认为曲线`2`。
```html
<v-row :gutter="24">
  <v-col :span="12">
    <v-chart-line
      title="直线"
      :series="series"
      :height="300"
      :type="1"
      :categories="categories"
    ></v-chart-line>
  </v-col>
  <v-col :span="12">
    <v-chart-line
      title="曲线且从坐标原点开始绘制"
      :series="series"
      :height="300"
      :type="2"
      :isOffset="false"
      :categories="categories"
    ></v-chart-line>
  </v-col>
</v-row>
      
<script>
export default {
  data(){
    return {
      series: [
        {
          name: "KPI",
          data: [180, 80, 38, 144, 89]
        },
        {
          name: "NPM",
          data: [150, 178.34, 50, 178, 78]
        },
        {
          name: "ICU",
          data: [99, 56, 76, 28, 140]
        },
        {
          name: "GDP",
          data: [28, 90, 96, 96, 145]
        },
        {
          name: "PDD",
          data: [62, 24, 156, 60, 89]
        },
        {
          name: "KFF",
          data: [80, 98, 134, 96, 78]
        }
      ],
      categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]
    }
  }
}
</script>
```
:::


## 动画

设置折线图的的显示动画的缓存函数名，也可以不设置任何动画。缓动函数名请参考：[缓动函数](https://easings.net/cn#)

:::demo 通过`animation`属性设置动画类型，默认为`easeOutCubic`，为空则不设置任何动画。

```html
<v-row :gutter="24">
  <v-col :span="12">
    <v-chart-line
      title="缓动函数: easeOutExpo"
      :series="series"
      animation="easeOutExpo"
      :height="300"
      :categories="categories"
    ></v-chart-line>
  </v-col>
  <v-col :span="12">
    <v-chart-line
      title="无动画"
      :series="series"
      :height="300"
      animation=""
      :categories="categories"
    ></v-chart-line>
  </v-col>
</v-row>

<script>
  export default {
    data() {
      return {
        series: [
          {
            name: "KPI",
            data: [180, 80, 38, 144, 89]
          },
          {
            name: "NPM",
            data: [150, 178.34, 50, 178, 78]
          },
          {
            name: "ICU",
            data: [99, 56, 76, 28, 140]
          },
          {
            name: "GDP",
            data: [28, 90, 96, 96, 145]
          },
          {
            name: "PDD",
            data: [62, 24, 156, 60, 89]
          },
          {
            name: "KFF",
            data: [80, 98, 134, 96, 78]
          }
        ],
        categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]
      };
    }
  };
</script>
```
:::

## 附加信息设置
设置折线图的标题和备注信息。

:::demo 通过`title`属性设置标题，显示在左上角。通过`comment`属性设置备注，显示在右下角。
```html
<div>
  <v-chart-line
    title="折线图标题"
    comment="注：数据为后台监测数据"
    :height="300"
    :series="series"
    :categories="categories"
  >
  </v-chart-line>
</div>

<script>
export default {
  data(){
    return {
      series: [
        {
          name: "KPI",
          data: [180, 80, 38, 144, 89]
        },
        {
          name: "NPM",
          data: [150, 178.34, 50, 178, 78]
        },
        {
          name: "ICU",
          data: [99, 56, 76, 28, 140]
        },
        {
          name: "GDP",
          data: [28, 90, 96, 96, 145]
        },
        {
          name: "PDD",
          data: [62, 24, 156, 60, 89]
        },
        {
          name: "KFF",
          data: [80, 98, 134, 96, 78]
        }
      ],
      categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]
    }
  }
}
</script>
```
:::



## 事件

定义与折线图的交互逻辑。

:::demo 通过`legendClick`事件进行切换显示图例交互， 参数为被点击的图例索引。

```html
<div>
  <v-chart-line
    :height="300"
    :series="series"
    :categories="categories"
    @legendClick="legendClick"
  >
  </v-chart-line>
</div>

<script>
  export default {
    data() {
      return {
        series: [
          {
            name: "KPI",
            data: [180, 80, 38, 144, 89]
          },
          {
            name: "NPM",
            data: [150, 178.34, 50, 178, 78]
          },
          {
            name: "ICU",
            data: [99, 56, 76, 28, 140]
          },
          {
            name: "GDP",
            data: [28, 90, 96, 96, 145]
          },
          {
            name: "PDD",
            data: [62, 24, 156, 60, 89]
          },
          {
            name: "KFF",
            data: [80, 98, 134, 96, 78]
          }
        ],
        categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]
      };
    },
    methods: {
      legendClick(index) {
        this.$message.success(`点击[${index}]`);
      }
    }
  };
</script>
```

:::
## 其它设置

可以控制折线图上坐标点是否显示，图例形状，鼠标悬浮是否显示详情等。

:::demo 通过`tip-text`来设置悬浮提示的预设文本，`legend`属性设置图例形状，`show-tip`属性设置是否显示悬浮提示信息。
```html
<v-row :gutter="24">
  <v-col :span="12">
    <v-chart-line
      title="显示折线图坐标点"
      :series="series"
      :height="300"
      :show-point="true"
      :categories="categories"
    ></v-chart-line>
  </v-col>
  <v-col :span="12">
    <v-chart-line
      title="无悬浮提提示，legend：square"
      :series="series"
      legend="square"
      :height="300"
      :show-tip="false"
      :categories="categories"
    ></v-chart-line>
  </v-col>
</v-row>
      
<script>
export default {
  data(){
    return {
      series: [
        {
          name: "KPI",
          data: [180, 80, 38, 144, 89]
        },
        {
          name: "NPM",
          data: [150, 178.34, 50, 178, 78]
        },
        {
          name: "ICU",
          data: [99, 56, 76, 28, 140]
        },
        {
          name: "GDP",
          data: [28, 90, 96, 96, 145]
        },
        {
          name: "PDD",
          data: [62, 24, 156, 60, 89]
        },
        {
          name: "KFF",
          data: [80, 98, 134, 96, 78]
        }
      ],
      categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]
    }
  }
}
</script>
```
:::


## Props

| 参数       | 说明                      | 类型    | 可选值          | 默认值                                                       |
| ---------- | ------------------------- | ------- | --------------- | ----------------- |
| colors     | 数据列颜色配置                 | array   | -  | ['#FFCD58','#ACE06F',<br/>'#7EE6F2','#6EBBFF',<br/>'#FF7348','#B792F7'] |
| series     | 数据列，必填                        | array   |                 |                                                              |
| categories | 类别，对应x轴描述，必填              | array   | -               | -                                                            |
| legend     | 图例                           | string  | circle, square  | circle         |
| animation  | 动画效果，空表示不需要动画   | string | -  | easeOutCubic   |
| width      | 宽，单位px                     | number  | -               | 外层容器的宽    |
| height     | 高，单位px                     | number  | -               | 外层容器的高    |
| type       | 折线类型                       | number  | 1: 直线 2: 曲线 | 2     |
| tip-text   | 鼠标悬浮预留提示信息，独行显示 | string  | -               | -     |
| show-tip   | 鼠标悬浮显示数据              | boolean | -               | true         |
| title      | 图表标题                     | string  | -               | -          |
| comment    | 图表注释                     | string  | -               | -           |
| is-offset  | 是否从坐标原点后面开始绘制     | boolean | -               | true          |
| show-point | 是否显示曲线坐标点            | boolean | -               | false             |

**series数据项属性**

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| name | 系列名称 | string | -      | -      |
| data | 系列数据 | array  | -      | -      |

## @Events

| 方法名      | 说明         | 参数             |
| ----------- | ------------ | ---------------- |
| legendClick | 图例点击事件 | 被点击的图例名称 |

