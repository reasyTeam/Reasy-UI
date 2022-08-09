## 标签页

Tab 让用户可以在不同的子任务、视图、模式之间切换，它具有全局导航的作用，是全局功能的主要展示和切换区域，一个Tab标记一个核心功能，Tab之间可以快速点击切换。提供平级的区域将大块内容进行收纳盒展现，保持界面整洁。

## 按需引用

```js
import { Base, Tabs } from "@reasy-team/reasy-ui";

Vue.use(Tabs);
Vue.use(Base);
```

## 基础示例

:::demo

```html
<template>
  <v-tabs v-model="activeName" name="tabs-base">
    <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
    <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
    <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: ""
    };
  }
};
</script>
```

:::



## 标签页大小

:::demo 通过设置`tabs`的`size`属性来控制标签页大小，可选值有`S/M/L`，默认为`M`。

```html
<template>
  <div>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>小</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName" name="tabs-s" size="S">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>中</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName1" name="tabs-m" size="M">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>大</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName2" name="tabs-l" size="L">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "",
      activeName1: "",
      activeName2: ""
    };
  }
};
</script>
```

:::

## tag样式

:::demo `type`设置为`tag`。

```html
<template>
  <div>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>小</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName" size="S" name="tabs-tag" type="tag">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>中</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName1" name="tabs-tag-m" size="M" type="tag">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>大</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName2" name="tabs-tag-l" size="L" type="tag">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "",
      activeName1: "",
      activeName2: ""
    };
  }
};
</script>
```

:::

## 卡片样式

:::demo `type`设置为`card`。

```html
<template>
  <div>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>小</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName" name="tabs-s-card" size="S" type="card">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>中</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName1" name="tabs-card-m" size="M" type="card">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>大</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName2" name="tabs-card-l" size="L" type="card">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "",
      activeName1: "",
      activeName2: ""
    };
  }
};
</script>
```

:::

## 按钮样式

:::demo `type`设置为`button`。

```html
<template>
  <div>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>小</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName" name="tabs-s-btn" size="S" type="button">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>中</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName1" name="tabs-btn-m" size="M" type="button">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="tabs-demo__size">
      <v-col :span="1">
        <label>大</label>
      </v-col>
      <v-col :span="22">
        <v-tabs v-model="activeName2" name="tabs-btn-l" size="L" type="button">
          <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
          <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
          <v-tab-pane label="标签3" value="3">标签3内容</v-tab-pane>
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "",
      activeName1: "",
      activeName2: ""
    };
  }
};
</script>
```

:::


## 标签禁用

:::demo `disabled`设置为`true`。

```html
<template>
  <div class="tabs-demo">
    <h5></h5>
    <v-tabs v-model="activeName" name="tabs-m-d">
      <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
      <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
      <v-tab-pane label="标签3" value="3" :disabled="true">标签3内容</v-tab-pane>
    </v-tabs>
  </div>
  <div class="tabs-demo">
    <h5></h5>
    <v-tabs v-model="activeName1" name="tabs-card-d" type="card">
      <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
      <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
      <v-tab-pane label="标签3" value="3" :disabled="true">标签3内容</v-tab-pane>
    </v-tabs>
  </div>
  <div class="tabs-demo">
    <h5></h5>
    <v-tabs v-model="activeName2" name="tbas-btn-d" type="button">
      <v-tab-pane label="标签1" value="1">标签1内容</v-tab-pane>
      <v-tab-pane label="标签2" value="2">标签2内容</v-tab-pane>
      <v-tab-pane label="标签3" value="3" :disabled="true">标签3内容</v-tab-pane>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "",
      activeName1: "",
      activeName2: ""
    };
  }
};
</script>
```

:::


## tabs

### Props

| 参数         | 说明                                                                 | 类型                                  | 可选值           | 默认值              |
| ------------ | -------------------------------------------------------------------- | ------------------------------------- | ---------------- | ------------------- |
| v-model      | 当前激活tab的key                                                     | string                                | -                | 第一个选项卡的value |
| no-id       | 是否不需要id，为false则以`name`作为id，除特殊情况，表单中使用必须添加id         | boolean  | - | false|
| name        | 原生属性name，同时渲染为id属性，当`no-id`为false时**必填**  | string  | - | -   |
| type         | 风格类型                                                             | string                                | link/card/button/tag | link                |
| size         | 大小                                                                 | string                                | S/M/L            | M                   |
| lazy         | tab内容加载方式。true使用v-if加载，false使用v-show              | string                                | -                | true                |
| disabled     | 是否全部禁用                                                         | boolean                               | -                | false               |
| before-leave | 切换标签之前的钩子，若返回false或者返回Promise且被reject，则阻止切换 | Function(activeValue, oldActiveValue) | -                | -                   |

### @Events

| 事件名称  | 说明            | 参数                            |
| --------- | --------------- | ------------------------------- |
| tab-click | tab被选中时触发 | (被选中的标签tab实例, 事件对象) |


### Slots

| name    | 说明               |
| ------- | ------------------ |
| default | 一般为tab-pane组件 |

## tab-pane

### Props

| 参数     | 说明                                            | 类型        | 可选值 | 默认值                                                |
| -------- | ----------------------------------------------- | ----------- | ------ | ----------------------------------------------------- |
| label    | 选项卡标题                                      | string/slot | -      | -                                                     |
| disabled | 是否禁用                                        | boolean     | -      | false                                                 |
| value    | 与选项卡绑定值value对应的标识符，标识选项卡别名 | string      | -      | 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为“1” |


### Slots

| name    | 说明      |
| ------- | --------- |
| default | tab内容区 |