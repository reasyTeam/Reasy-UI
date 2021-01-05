## 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基础示例

:::demo

```html
<v-dialog
  v-model="showDialog"
  :title="dialogTitle"
  :close-on-click-modal="closeOnClickModal"
  :modal="true"
  :width="600"
  @confirm="handleConfirm"
  @open="handleOpen"
  @after-close="handleAfterClose"
  @cancel="handleCancel"
>
  我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框。
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

<v-button type="text" @click="handleButtonClick">点我打开 Dialog</v-button>
<v-button type="text" @click="handleButtonClick1">点击外部不关闭 Dialog</v-button>

<script>
export default {
  data() {
    return {
      showDialog: false,
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
      console.log(`Emit AFTER-CLOSE event, timestamp: ${new Date().getTime()}`);
    },
    handleCancel() {
      console.log(`Emit CANCEL event, timestamp: ${new Date().getTime()}`);
    },
    handleDialogInputClick() {
      this.showInputDialog = !this.showInputDialog;
    }
  }
};
</script>
```

:::


### 自定义内容

Dialog的内容可以是任意的，甚至可以是表格和表单，下面是应用了本组件的表单组件的demo。

:::demo 通过设置`默认插槽`来自定义对话框内容。

```html
<v-dialog
  v-model="showInputDialog"
  :title="dialogTitle"
  :close-on-click-modal="closeOnClickModal"
  :modal="true"
  @confirm="handleConfirm"
>
  <div class="form-control">
    <label class="form-control__label" for="">name:</label>
    <v-input v-model="dialogInput"></v-input>
  </div>
  <div class="form-control">
    <label class="form-control__label" for="">hobit:</label>
    <v-select v-model="selectVal" :options="selectOptions"></v-select>
  </div>
</v-dialog>
<v-button type="text" @click="handleDialogInputClick">内嵌表单的 Dialog</v-button>

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
      this.handleButtonClick();
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
<v-dialog
  v-model="showDialog"
  :title="dialogTitle"
  :close-on-click-modal="closeOnClickModal"
  :show-close="false"
  :modal="true"
  :align-center="true"
  @confirm="handleConfirm"
>
  <p class="dialog-content">需要注意的是内容不居中。</p>
</v-dialog>
<v-button type="text" @click="handleDialogClick">居中布局的 Dialog</v-button>

<script>
export default {
  data() {
    return {
      showDialog: false,
      closeOnClickModal: true,
      dialogTitle: "居中布局对话框的标题",
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

| 参数                 | 说明                                           | 类型    | 可选值             | 默认值  |
| -------------------- | ---------------------------------------------- | ------- | ------------------ | ------- |
| v-model              | 是否显示dialog                                 | boolean | -                  | false   |
| title                | dialog的标题，也可通过具名slot传入             | -       | -                  | -       |
| width                | dialog的宽度，最小宽度为400px，最大宽度为720px | string  | -                  | -       |
| modal                | 是否需要遮罩层                                 | boolean | -                  | true    |
| close-on-click-modal | 是否可以通过点击modal关闭dialog                | boolean | -                  | true    |
| show-close           | 是否显示关闭按钮                               | boolean | -                  | true    |
| show-confirm         | 是否显示确定按钮                               | boolean | -                  | true    |
| show-cancel          | 是否显示取消按钮                               | boolean | -                  | true    |
| confirm-button-text  | 确认按钮文字                                   | string  | -                  | 确定    |
| cancel-button-text   | 取消按钮文字                                   | string  | -                  | 取消    |
| confirm-button-type  | 确认按钮类型                                   | string  | 参考button组件类型 | primary |
| cancel-button-type   | 取消按钮类型                                   | string  | 参考button组件类型 | info    |
| align-center         | 是否对头部和底部采用居中布局                   | boolean | -                  | false   |


### Events

| 事件名称    | 说明             | 参数 |
| ----------- | ---------------- | ---- |
| open        | 打开dialog触发   | -    |
| after-close | 关闭后回调       | -    |
| confirm     | 点击确定按钮触发 | -    |
| cancel      | 点击取消按钮触发 | -    |


### Slot

| name    | 说明                   |
| ------- | ---------------------- |
| default | dialog的内容           |
| title   | dialog标题区的内容     |
| footer  | dialog按钮操作区的内容 |
