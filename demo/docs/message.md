## 全局提示

全局展示操作反馈信息，一种不打断用于操作的轻量级提示方式。

### 基础示例

从顶部出现，2 秒后自动消失。

:::demo 在全局注册了$message方法，接收一个options字面量参数。在最简单的情况下，直接传入一个字符串即可设置提示内容，或通过传入的options中的`content`字段的值来设置内容。默认情况下，经过一段时间后Message组件会关闭，可以通过设置`duration`控制关闭的时间间隔，特别的是，如果设置为`0`，则不会关闭。注：`duration`接收一个`Number`，单位为毫秒，默认为`2000`。

```html
<v-button class="msg-btn" @click="handleInfoClick">打开消息提醒</v-button>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handleInfoClick() {
      this.$message.success("这是一条消息提醒");
    }
  }
};
</script>
```

:::



### 不同状态

用来显示`成功`、`警告`、`消息`、`错误`、`加载中`类的操作反馈。

:::demo

```html
<!-- <v-button class="msg-btn" @click="handleInfoClick">Info</v-button> -->
<v-button class="msg-btn" @click="handleSuccessClick">Success</v-button>
<v-button class="msg-btn" @click="handleErrorClick">Error</v-button>
<v-button class="msg-btn" @click="handleWarnClick">Warn</v-button>
<v-button class="msg-btn" @click="handleLoadingClick">Loading</v-button>

<script>
export default {
  methods: {
    // handleInfoClick() {
    //   this.$message("这是一条消息提醒。", 1000, () => console.log(`Info配置并触发了关闭回调`));
    // },
    handleSuccessClick() {
      this.$message.success("恭喜你！这是一条成功的提示信息。");
    },
    handleErrorClick() {
      this.$message.error("完蛋啦！这是一条失败的提示信息。");
    },
    handleWarnClick() {
      this.$message.warn("哦豁！这是一条警告的提示信息。");
    },
    handleLoadingClick() {
      this.$message.loading("哦豁！这是一条加载中的提示信息。");
    }
  }
};
</script>
```

:::



### 使用HTML片段

:::demo

```html
<v-button class="msg-btn" @click="handleCustomClick">使用HTML片段</v-button>

<script>
export default {
  methods: {
    handleCustomClick() {
      this.$message({
        showIcon: false,
        dangerouslyUseHTMLString: true,
        closeCallback: () => console.log(`HTML片段提示信息触发了关闭回调`),
        content: `<div class="custom-message">这里是使用了HTML片段的提示信息内容</div>`
      });
    }
  }
};
</script>
```

:::



### 手动开关提示窗

:::demo 通过`this.$message(options).close()`来关闭提示窗。

```html
<v-button class="msg-btn" @click="handleCustomClick">{{ buttonText }}</v-button>

<script>
const textSet = ["关闭", "打开"];
export default {
  data() {
    return {
      buttonText: textSet[1],
      messageVm: null
    };
  },
  methods: {
    handleCustomClick() {
      if(!this.messageVm) {
        this.buttonText = textSet[0];
        this.messageVm = this.$message({
          type: "success",
          duration: 0,
          content: "手动快关提示窗提示信息。",
          closeCallback: () => console.log(`手动关闭提示信息触发了关闭回调`)
        });
      } else {
        this.buttonText = textSet[1];
        this.messageVm.close();
        this.messageVm = null;
      }
    }
  }
};
</script>
```

:::





### 属性 Attributes

| 参数                     | 说明                                | 类型     | 可选值                          | 默认值   |
| ------------------------ | ----------------------------------- | -------- | ------------------------------- | -------- |
| content                  | 消息内容                            | string   | -                               | -        |
| type                     | 主题                                | string   | success/warn/info/error/loading | info     |
| showIcon                 | 是否显示icon                        | boolean  | -                               | true     |
| icon                     | Icon图标类名，会覆盖type配置        | string   | -                               | -        |
| duration                 | 显示时间，单位：毫秒。设为0则不关闭 | number   | -                               | 2000     |
| closeCallback            | 消息关闭回调，关闭后触发            | function | -                               | () => {} |
| dangerouslyUseHTMLString | 把content当做html解析，谨慎使用     | boolean  | -                               | false    |


### 实例方法 Methods

| 方法名  | 说明                    | 参数                             |
| ------- | ----------------------- | -------------------------------- |
| success | 弹出成功message框       | fn(消息内容, 显示时长, 关闭回调) |
| error   | 弹出失败的message框     | fn(消息内容, 显示时长, 关闭回调) |
| warn    | 弹出警告的message框     | fn(消息内容, 显示时长, 关闭回调) |
| info    | 弹出普通消息的message框 | fn(消息内容, 显示时长, 关闭回调) |
| loading | 弹出加载中的message框   | fn(消息内容, 显示时长, 关闭回调) |


### 执行后返回的实例方法 Methods

| 方法名 | 说明              | 参数 |
| ------ | ----------------- | ---- |
| close  | 关闭当前的message | -    |