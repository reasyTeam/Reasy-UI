## 通知提醒

全局展示通知提醒信息，用于较复杂的通知内容。

### 按需引用

```js
import { Base, Notification } from "@reasy-team/reasy-ui";

Vue.use(Notification);
Vue.use(Base);
```

### 基础示例

:::demo 在全局注册了$notify方法，接收一个options字面量参数。在最简单的情况下，直接传入的`content`和`title`的来设置内容和标题。默认情况下，经过一段时间后Notification组件会关闭，可以通过设置`duration`控制关闭的时间间隔，特别的是，如果设置为`0`，则不会关闭。注：`duration`接收一个`Number`，单位为毫秒，默认为`4500`。

```html
<template>
  <v-button no-id  class="notify-btn" @click="handleAutoHideClick">自动关闭</v-button>
  <v-button no-id  class="notify-btn" type="primary" @click="handleKeepShowClick">一直显示</v-button>
  <v-button no-id  class="notify-btn" @click="handleStatueShowClick">显示状态</v-button>
</template>

<script>
export default {
  methods: {
    handleAutoHideClick() {
      this.$notify({
        title: "自动隐藏标题",
        content: "这是常规用法的通知提醒框内容，自动隐藏",
        showConfirm: true,
        position: "top-right"
      });
    },
    handleKeepShowClick() {
      this.$notify({
        title: "一直显示标题",
        content: "这是常规用法的通知提醒框内容，不会自动隐藏",
        showConfirm: true,
        duration: 0,
        position: "top-right"
      });
    },handleStatueShowClick() {
      this.$notify({
        status: "success",
        content: "显示状态",
        duration: 0,
        position: "top-right"
      });
    }
  }
};
</script>
```

:::


### 不同状态提醒

:::demo 通过配置`status`显示预置的状态信息，目前可选的状态信息有`success`成功、`error`失败、`warning`警告、`notice`正常通知和`none`无状态，默认为`none`。

```html
<template>
  <v-button no-id  class="notify-btn" type="primary" @click="handleSuccess">成功</v-button>
  <v-button no-id  class="notify-btn" type="danger" @click="handleError">失败</v-button>
  <v-button no-id  class="notify-btn" type="info" @click="handleWarning">警告</v-button>
  <v-button no-id  class="notify-btn" type="primary" @click="handleNotice">提醒</v-button>
</template>

<script>
export default {
  methods: {
    handleSuccess() {
      // this.$notify({
      //   status: "success",
      //   content: "这是一条成功信息！",
      //   position: "top-right"
      // });
      this.$notify.success("这是一条成功信息！")
    },
    handleError() {
      // this.$notify({
      //   status: "error",
      //   content: "这是一条错误信息！",
      //   position: "top-right"
      // });
      this.$notify.error("这是一条成功信息！")

    },
    handleWarning() {
      // this.$notify({
      //   status: "warning",
      //   content: "这是一条警告！",
      //   position: "top-right"
      // });
      this.$notify.warning("这是一条成功信息！")

    },
    handleNotice() {
      // this.$notify({
      //   status: "notice",
      //   content: "这是一条普通的消息提醒",
      //   position: "top-right"
      // });
      this.$notify.notice("这是一条成功信息！")

    }
  }
};
</script>
```

:::

### 自定义弹出位置

可以让通知提醒框在屏幕四个角中的任意一角弹出

:::demo 使用`position`属性来配置Notification的弹出位置，有以下4个选项：`top-right`、`top-left`、`bottom-right`和`bottom-left`，默认值为`top-right`。

```html
<template>
  <v-button no-id  class="notify-btn" @click="handleTopRightClick">右上角</v-button>
  <v-button no-id  class="notify-btn" @click="handleBottomRightClick">右下角</v-button>
  <v-button no-id  class="notify-btn" @click="handleTopLeftClick">左上角</v-button>
  <v-button no-id  class="notify-btn" @click="handleBottomLeftClick">左下角</v-button>
</template>

<script>
export default {
  methods: {
    handleTopRightClick() {
      this.$notify({
        title: "右上角标题",
        content: "这是右上角的通知提醒内容",
        showConfirm: true,
        position: "top-right"
      });
    },
    handleBottomRightClick() {
      this.$notify({
        title: "右下角标题",
        content: "这是右下角的通知提醒内容",
        showConfirm: true,
        position: "bottom-right"
      });
    },
    handleTopLeftClick() {
      this.$notify({
        title: "左上角标题",
        content: "这是左上角的通知提醒内容",
        showConfirm: true,
        position: "top-left"
      });
    },
    handleBottomLeftClick() {
      this.$notify({
        title: "左下角标题",
        content: "这是左下角的通知提醒内容",
        showConfirm: true,
        position: "bottom-left"
      });
    }
  }
};
</script>
```

:::


### 弹窗关闭回调

:::demo 调用$notify后返回一个`Promise`对象，通过使用`then`来执行关闭后的操作。

```html
<template>
  <v-button no-id  class="notify-btn" @click="handleClick">关闭后的回调使用</v-button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$notify({
        title: "关闭后回调使用的标题",
        content: `这里关闭后回调使用的通知提醒内容`,
        showConfirm: true,
        position: "top-right"
      }).then(res => {
        this.$message.warn("通知提醒弹窗已关闭！");
        console.log(`auto-hide: `);
        console.log(res);
        console.log(`\n`);
      });
    }
  }
};
</script>
```

:::



### 自定义按钮

:::demo

```html
<template>
  <v-button no-id  class="notify-btn" @click="handleShowCloseBtnClick">仅显示关闭按钮</v-button>
  <v-button no-id  class="notify-btn" @click="handleshowConfirmBtnClick">仅显示确定按钮</v-button>
  <v-button no-id  class="notify-btn" @click="handleshowCloseConfirmBtnClick">显示确定和关闭按钮</v-button>
  <v-button no-id  class="notify-btn" @click="handleHideAllBtnClick">不显示按钮</v-button>
  <v-button no-id  class="notify-btn" @click="handleCustomConfirmTextBtnClick">自定义确定文本</v-button>
  <v-button no-id  class="notify-btn" @click="handleNoTitleClick">无标题</v-button>
</template>

<script>
export default {
  methods: {
    handleShowCloseBtnClick() {
      this.$notify({
        title: "仅显示关闭按钮标题",
        content: "这是仅显示关闭按钮的内容",
        position: "top-right"
      });
    },
    handleshowConfirmBtnClick() {
      this.$notify({
        title: "仅显示确认按钮标题",
        content: "这是仅显示确认按钮的内容",
        showConfirm: true,
        showClose: false,
        position: "top-right"
      });
    },
    handleshowCloseConfirmBtnClick() {
      this.$notify({
        title: "显示确认和关闭按钮标题",
        content: "这是显示确认和关闭按钮的内容",
        showConfirm: true,
        position: "top-right"
      });
    },
    handleHideAllBtnClick() {
      this.$notify({
        title: "不显示按钮标题",
        content: "这是不显示按钮的内容",
        showConfirm: false,
        showClose: false,
        position: "top-right"
      });
    },
    handleCustomConfirmTextBtnClick() {
      this.$notify({
        title: "自定义确认按钮文本标题",
        content: "这是自定义确认按钮文本的内容",
        showConfirm: true,
        showClose: false,
        confirmText: "知道了",
        position: "top-right"
      });
    },
    handleNoTitleClick() {
      this.$notify({
        content: "骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。列国周齐秦汉楚，赢，都变做了土；输，都变做了土。",
        showConfirm: true,
        showClose: false,
        position: "top-right"
      });
    }
  }
};
</script>
```

:::


### 使用HTML片段

:::demo

```html
<template>
  <v-button no-id  class="notify-btn" @click="handleClick">使用HTML片段</v-button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$notify({
        title: "使用HTML片段标题",
        content: `<div class="custom-message">这里使用了HTML片段的通知提醒内容</div>`,
        showConfirm: true,
        dangerouslyUseHTMLString: true,
        position: "top-right"
      });
    }
  }
};
</script>
```

:::




### 属性 Attributes

| 参数                     | 说明                                    | 类型    | 可选值                                                  | 默认值    |
| ------------------------ | --------------------------------------- | ------- | ------------------------------------------------------- | --------- |
| title                    | 标题                                    | string  | -                                                       | -         |
| status                   | 状态，不同状态显示不同的图标            | string  | success、error、notice、warning、none                   | none      |
| content                  | 说明文字                                | string  | -                                                       | -         |
| duration                 | 显示时间，单位：毫秒。设置为0则不会关闭 | number  | -                                                       | 4500      |
| position                 | 自定义弹出位置                          | string  | top-right<br/>top-left<br/>bottom-right<br/>bottom-left | top-right |
| show-close               | 是否显示关闭按钮                        | boolean | -                                                       | true      |
| show-confirm             | 是否显示确定按钮                        | boolean | -                                                       | false     |
| confirm-text             | 确定按钮文本                            | string  | -                                                       | 确定      |
| dangerouslyUseHTMLString | 把content当做html解析                   | Boolean | -                                                       | false     |