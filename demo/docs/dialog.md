## 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

### 按需引用

```js
import { Dialog } from "@reasy-team/reasy-ui";

Vue.use(Dialog);
```

### 基础示例

:::demo

```html
<template>
  <v-dialog
    v-model="showDialog"
    :title="dialogTitle"
    :close-on-click-modal="closeOnClickModal"
    :modal="true"
    @confirm="handleConfirm"
    @open="handleOpen"
    @after-close="handleAfterClose"
    @cancel="handleCancel"
  >
    我是对话框区域内容。
  </v-dialog>

  <v-dialog
    v-model="showDialog1"
    :title="dialogTitle"
    :close-on-click-modal="closeOnClickModal1"
    :modal="true"
    :width="600"
    @confirm="handleConfirm"
    @open="handleOpen"
    @after-close="handleAfterClose"
    @cancel="handleCancel"
  >
    我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框。
  </v-dialog>
  <v-dialog v-model="showBigDialog" :title="dialogTitle" :width="800" :modal="true">
    <div style="height: 1000px;">超高弹出框！</div>
  </v-dialog>

  <v-button type="text" @click="handleButtonClick">点我打开 Dialog</v-button>
  <v-button type="text" @click="handleButtonClick1"
    >点击外部不关闭 Dialog</v-button
  >
  <v-button type="text" @click="handleBigClick">超高弹出框</v-button>
</template>

<script>
  export default {
    data() {
      return {
        showDialog: false,
        showBigDialog: false,
        closeOnClickModal: true,
        dialogTitle: "对话框的标题",

        showDialog1: false,
        closeOnClickModal1: false
      };
    },
    methods: {
      handleButtonClick() {
        this.showDialog = !this.showDialog;
      },
      handleButtonClick1() {
        this.showDialog1 = !this.showDialog1;
      },
      handleConfirm() {
        console.log(`Emit CONFIRM event, timestamp: ${new Date().getTime()}`);
        this.handleButtonClick();
      },
      handleOpen() {
        console.log(`Emit OPEN event, timestamp: ${new Date().getTime()}`);
      },
      handleAfterClose() {
        console.log(
          `Emit AFTER-CLOSE event, timestamp: ${new Date().getTime()}`
        );
      },
      handleCancel() {
        console.log(`Emit CANCEL event, timestamp: ${new Date().getTime()}`);
      },
      handleDialogInputClick() {
        this.showInputDialog = !this.showInputDialog;
      },
      handleBigClick() {
        this.showBigDialog = !this.showBigDialog;
      }
    }
  };
</script>
```

:::

### 自定义内容

Dialog 的内容可以是任意的，甚至可以是表格和表单，下面是应用了本组件的表单组件的 demo。

:::demo 通过设置`默认插槽`来自定义对话框内容。

```html
<template>
  <v-dialog
    v-model="showInputDialog"
    :title="dialogTitle"
    :close-on-click-modal="closeOnClickModal"
    :modal="true"
    @after-close="handleAfterClose"
    @confirm="handleConfirm"
  >
    <v-form ref="form" :model="ruleForm">
      <v-form-item label="姓名" prop="name">
        <v-input v-model="ruleForm.name"></v-input>
      </v-form-item>
      <v-form-item label="爱好" prop="hobit">
        <v-select v-model="ruleForm.hobit" :options="selectOptions"></v-select>
      </v-form-item>
    </v-form>
  </v-dialog>
  <v-button type="text" @click="handleDialogInputClick"
    >内嵌表单的 Dialog</v-button
  >
</template>

<script>
  export default {
    data() {
      return {
        showDialog: false,
        closeOnClickModal: true,
        dialogTitle: "带控件对话框的标题",

        showInputDialog: false,
        dialogInput: "",
        selectVal: 1,
        ruleForm: {
          name: "",
          hobit: 0
        },
        selectOptions: [
          {
            label: "shooting",
            value: 0
          },
          {
            label: "eating",
            value: 1
          },
          {
            label: "sleeping",
            value: 2
          }
        ]
      };
    },
    methods: {
      handleConfirm() {
        console.log(`Emit CONFIRM event, timestamp: ${new Date().getTime()}`);
        this.showInputDialog = false;
      },
      handleAfterClose() {
        this.$message.success("保存成功");
      },
      handleDialogInputClick() {
        this.showInputDialog = !this.showInputDialog;
      }
    }
  };
</script>
```

:::

### 居中布局

标题和底部可以设置水平居中。

:::demo 通过`align-center`来设置居中。

```html
<template>
  <v-dialog
    v-model="showDialog"
    :title="dialogTitle"
    :close-on-click-modal="closeOnClickModal"
    :show-close="false"
    :modal="true"
    :align-center="true"
    @confirm="handleConfirm"
  >
    <div>需要注意的是内容不居中。</div>
  </v-dialog>
  <v-button type="text" @click="handleDialogClick">居中布局的 Dialog</v-button>
</template>

<script>
  export default {
    data() {
      return {
        showDialog: false,
        closeOnClickModal: true,
        dialogTitle: "居中布局对话框的标题"
      };
    },
    methods: {
      handleConfirm() {
        console.log(`Emit CONFIRM event, timestamp: ${new Date().getTime()}`);
        this.handleButtonClick();
      },
      handleDialogClick() {
        this.showDialog = !this.showDialog;
      }
    }
  };
</script>
```

:::

### 属性 Attributes

| 参数                 | 说明                                  | 类型    | 可选值               | 默认值  |
| -------------------- | ------------------------------------- | ------- | -------------------- | ------- |
| v-model              | 是否显示 dialog                       | boolean | -                    | false   |
| title                | dialog 的标题，也可通过具名 slot 传入 | -       | -                    | -       |
| show-title           | 是否显示 dialog 标题                  | boolean | -                    | true    |
| width                | dialog 的宽度                         | string  | -                    | auto    |
| modal                | 是否需要遮罩层                        | boolean | -                    | true    |
| close-on-click-modal | 是否可以通过点击 modal 关闭 dialog    | boolean | -                    | false   |
| show-close           | 是否显示关闭按钮                      | boolean | -                    | true    |
| show-confirm         | 是否显示确定按钮                      | boolean | -                    | true    |
| show-cancel          | 是否显示取消按钮                      | boolean | -                    | true    |
| confirm-button-text  | 确认按钮文字                          | string  | -                    | 确定    |
| cancel-button-text   | 取消按钮文字                          | string  | -                    | 取消    |
| confirm-button-type  | 确认按钮类型                          | string  | 参考 button 组件类型 | primary |
| cancel-button-type   | 取消按钮类型                          | string  | 参考 button 组件类型 | info    |
| align-center         | 是否对头部和底部采用居中布局          | boolean | -                    | false   |

### Events

| 事件名称    | 说明             | 参数 |
| ----------- | ---------------- | ---- |
| open        | 打开 dialog 触发 | -    |
| after-close | 关闭后回调       | -    |
| confirm     | 点击确定按钮触发 | -    |
| cancel      | 点击取消按钮触发 | -    |

### Slot

| name    | 说明                    |
| ------- | ----------------------- |
| default | dialog 的内容           |
| title   | dialog 标题区的内容     |
| footer  | dialog 按钮操作区的内容 |
