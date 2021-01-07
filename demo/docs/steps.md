## 步骤条

引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。

### 基础示例

:::demo

```html
<template>
  <div class="steps-demo">
    <v-steps :active="active">
      <v-step
        title="步骤1"
        description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      ></v-step>
      <v-step
        title="步骤2"
        description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      ></v-step>
      <v-step
        title="步骤3"
        description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      ></v-step>
      <v-step
        title="步骤4"
        description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      ></v-step>
    </v-steps>

    <div class="next-step-btn-wrapper">
      <v-button class="next-step-btn" @click="handleButtonClick"
        >下一步</v-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    handleButtonClick() {
      if (this.active++ >= 4) this.active = 0;
      console.log(this.active);
    }
  }
};
</script>
```

:::



### 文字左对齐

:::demo 设置`align-center`为`false`即可实现文字左对齐，文字默认居中对齐。

```html
<template>
  <v-steps :active="active" :align-center="false">
    <v-step
      title="步骤1"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
    <v-step
      title="步骤2"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
    <v-step
      title="步骤3"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
    <v-step
      title="步骤4"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
  </v-steps>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
```

:::



### 步骤间距

:::demo 通过设置`space`来确定每个步骤间的间距，值为`Number`类型，默认自适应。

```html
<template>
  <v-steps :active="active" :space="100">
    <v-step
      title="步骤1"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
    <v-step
      title="步骤2"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
    <v-step
      title="步骤3"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
    <v-step
      title="步骤4"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
  </v-steps>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
```

:::




### 步骤状态

:::demo 通过设置`step`组件的`status`来自定义每个步骤的状态，不设置则会根据`steps`来确定状态。子组件`step`的优先级比`steps`高。

```html
<template>
  <v-steps>
    <v-step
      title="正在处理"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
    <v-step
      status="wait"
      title="等待处理"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
    <v-step
      status="error"
      title="运行错误"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
    <v-step
      status="finish"
      title="处理完成"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
    <v-step
      status="disabled"
      title="禁用步骤"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
  </v-steps>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
```

:::




### 自定义

:::demo 通过`step`的属性`icon`设置图标。

```html
<template>
  <v-steps>
    <v-step
      icon="v-icon-edit"
      title="编辑"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
    <v-step
      icon="v-icon-image"
      title="图片"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
    <v-step
      icon="v-icon-calendar"
      title="日历"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
    <v-step
      icon="v-icon-time"
      title="时间"
      description="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></v-step>
  </v-steps>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
```

:::


### 属性 Attributes

#### steps属性

| 参数           | 说明                                         | 类型    | 可选值                             | 默认值  |
| -------------- | -------------------------------------------- | ------- | ---------------------------------- | ------- |
| active         | 设置当前激活步骤                             | number  | -                                  | 0       |
| space          | 每个step的间距，单位：px。不填写则自适应间距 | number  | -                                  | -       |
| process-status | 设置当前步骤的状态                           | string  | wait/process/finish/error/disabled | process |
| finish-status  | 设置结束步骤的状态                           | string  | wait/process/finish/error/disabled | finish  |
| align-center   | 文字进行居中对齐                             | boolean | -                                  | true    |

#### step属性

| 参数        | 说明                                          | 类型        | 可选值                             | 默认值 |
| ----------- | --------------------------------------------- | ----------- | ---------------------------------- | ------ |
| title       | 标题                                          | string/slot | -                                  | -      |
| description | 描述性文字                                    | string/slot | -                                  | -      |
| icon        | icon的class类名                               | string/slot | -                                  | -      |
| status      | 设置当前步骤的状态，不设置则根据steps确定状态 | string      | wait/process/finish/error/disabled | -      |

#### step Slot

| name        | 说明           |
| ----------- | -------------- |
| icon        | 自定义图标     |
| title       | 自定义标题     |
| description | 自定义描述文字 |