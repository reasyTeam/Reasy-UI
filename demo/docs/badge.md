## 徽标数

主要用于通知未读数的角标，提醒用户点击。

### 基础示例

:::demo

```html
<v-badge text="3" status="error" position="rt" class="badge">
  <div class="badge-box"></div>
</v-badge>
<v-badge text="2" status="error"> </v-badge>

<style>
  .badge-box {
    width: 40px;
    height: 40px;
    background-color: #ebebeb;
  }

  .badge {
    margin-right: 40px;
  }
</style>
```

:::

### 多位数字

超过一位数字时。

:::demo

```html
<v-badge :text="val" status="error" position="rt" class="badge">
  <div class="badge-box"></div>
</v-badge>
<v-badge :text="val | format" status="error" position="rt" class="badge">
  <div class="badge-box"></div>
</v-badge>
<v-badge :text="val" status="error" class="badge"> </v-badge>
<v-badge :text="val | format" status="error"> </v-badge>

<script>
  export default {
    data(){
      return {
        val: 100
      }
    },
    filters:{
      format(val){
        if(val >= 100){
          return '99+';
        }
        return val;
      }
    }
  };
</script>

<style>
  .badge-box {
    width: 40px;
    height: 40px;
    background-color: #ebebeb;
  }

  .badge {
    margin-right: 40px;
  }
</style>
```

:::

### 小红点

没有具体数字的提示。

:::demo

```html
<v-badge type="dot" status="error" position="rt" class="badge">
  <div>小红点</div>
</v-badge>
<v-badge type="dot" status="error" position="rt" class="badge">
  <i class="v-icon-remind-line"></i>
</v-badge>

<style>
  .badge {
    margin-right: 40px;
  }
</style>
```

:::

### 状态点

表示状态的小圆点。

:::demo

```html
<v-badge type="dot" status="success" class="badge">
  <label class="dot-text">正常</label>
</v-badge>
<v-badge type="dot" status="warn" class="badge">
  <label class="dot-text">异常</label>
</v-badge>
<v-badge type="dot" status="error" class="badge">
  <label class="dot-text">失败</label>
</v-badge>
<v-badge type="dot">
  <label class="dot-text">默认</label>
</v-badge>

<style>
  .badge {
    margin-right: 40px;
  }
  .dot-text {
    padding-left: 6px;
    vertical-align: middle;
  }
</style>
```

:::

### Attributes

| 参数     | 说明             | 类型   | 可选值                        | 默认值  |
| -------- | ---------------- | ------ | ----------------------------- | ------- |
| text     | 内容             | string | -                             | -       |
| type     | 圆点或小圆       | string | dot(圆点)，tip                | tip     |
| status   | 不同状态不同颜色 | string | success, error, warn, default | default |
| position | 圆点位置         | string | rt                            | -       |

position: 为空，在正常的文档流中，不添加任何定位效果。

### Slot

| name    | 说明   |
| ------- | ------ |
| default | 内容区 |
