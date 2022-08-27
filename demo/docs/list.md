# 列表

基本的列表展示。

## 按需引用

```js
import { Base, List } from "@reasy-team/reasy-ui";

Vue.use(List);
Vue.use(Base);
```

## 基础示例

:::demo

```html
<div class="empty-list-demo">
  <strong>圆形图标</strong>
  <v-list
    :bordered="true"
    :options="options1"
    @click="clickItem"
    name="list1"
  >
  </v-list>
</div>

<div class="empty-list-demo">
  <strong>方形图标</strong>
  <v-list
    :bordered="true"
    :options="options2"
    @click="clickItem"
    name="list2"
  >
  </v-list>
</div>

<script>
// 生成假数据
const getOptions = (nums, type = "circle") => {
  const obj = {
    avatar: {
      type,
      src: "./img/dog.jpg"
    },
    title: "列表主要内容",
    description: "次要信息"
  };

  return Array.from(Array(nums)).map(() => obj);
};

export default {
  data() {
    return {
      options1: getOptions(3),
      options2: getOptions(3, "square")
    };
  },
  methods: {
    clickItem(option) {
      console.log(option);
    }
  }
};
</script>
```

:::


## 空列表

通过empty属性来自定义空列表显示的文字，或者使用具名插槽empty自定义空列表显示内容。

:::demo

```html
<div class="empty-list-demo">
  <strong>默认显示</strong>
  <v-list
    :bordered="true"
    @click="clickItem"
    name="list3"
  >
  </v-list>
</div>

<div class="empty-list-demo">
  <strong>自定义文字内容</strong>
  <v-list
    :bordered="true"
    empty-text="no data"
    @click="clickItem"
    name="list4"
  >
  </v-list>
</div>

<div class="empty-list-demo">
  <strong>自定义内容</strong>
  <v-list
    :bordered="true"
    @click="clickItem"
    name="list5"
  >
    <template #empty-text>
      <div class="custom-empty-content">
        <img src="img/empty.png" alt="no data" />
      </div>
    </template>
  </v-list>
</div>

<script>
// 生成假数据
const options = (() => {
  const obj = {
    avatar: "./img/dog.jpg",
    title: "列表主要内容",
    description: "次要信息"
  };

  return Array.from(Array(5)).map(() => obj);
})();

export default {
  data() {
    return {
      options
    };
  },
  methods: {
    clickItem(option) {
      console.log(option);
    }
  }
};
</script>
```

:::


## Props

| 参数       | 说明                                                | 类型           | 可选值 | 默认值   |
| ---------- | --------------------------------------------------- | -------------- | ------ | -------- |
| bordered   | 是否展示外边框                                      | boolean        | -      | false    |
| options    | 配置项，详情见下表                                  | Array\<object> | -      | []       |
| empty-text | 空数据时显示的文本内容，可使用slot="empty-text"设置 | string/slot    | -      | 暂无数据 |
| devided    | 是否展示分割线                                      | Boolean        | -      | true     |
| row-key    | v-for中key字段名称                                  | string         | -      | index    |

**options数据项属性**

| 参数        | 说明                                         | 类型               | 可选值 | 默认值 |
| ----------- | -------------------------------------------- | ------------------ | ------ | ------ |
| avatar      | 图标资源路径配置，不配置则不显示，详情见下表 | string/object/slot | -      | -      |
| title       | 列表子项的标题配置，不配置则不显示           | string/slot        | -      | -      |
| description | 列表子项的描述文字配置，不配置则不显示       | string/slot        | -      | -      |


avatar类型为`String`，表示avatar的资源路径，类型为`Object`，可配置头像的形状及资源路径，也可通过插槽自定义头像内容


**avatar数据项属性**

| 参数 | 说明             | 类型   | 可选值        | 默认值 |
| ---- | ---------------- | ------ | ------------- | ------ |
| type | 头像类型，即形状 | string | circle/square | circle |
| src  | 头像资源路径     | string | -             | -      |


## @Events

| 事件名称 | 说明               | 参数         |
| -------- | ------------------ | ------------ |
| click    | 点击列表子项时触发 | 子项的option |


## Slot

| name        | 说明              |
| ----------- | ----------------- |
| avatar      | 头像              |
| title       | 标题              |
| description | 描述信息/详细内容 |
| empty-text  | 空数据内容        |