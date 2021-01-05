<template>
  <r-page>
    <section class="dialog-page">
      <r-h title="test" tag="h2">
        <section class="dialog-page-inner">
          <v-dialog
            v-model="showDialog"
            :title="dialogTitle"
            :close-on-click-modal="closeOnClickModal"
            :modal="true"
            :width="200"
            @confirm="handleConfirm"
            @open="handleOpen"
            @after-close="handleAfterClose"
            @cancel="handleCancel"
          >
            我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框我是对话框区域内容对话框。
          </v-dialog>
          <v-button @click="handleButtonClick">点我</v-button>
        </section>

        <section class="dialog-page-inner">
          <v-dialog
            v-model="showInputDialog"
            :title="dialogTitle"
            :close-on-click-modal="closeOnClickModal"
            :modal="true"
            :width="200"
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

            <template #title>
              <h2 class="custom-dialog-title">custom title</h2>
            </template>
            <template #footer>
              <h2 class="custom-dialog-footer">Custom footer</h2>
            </template>
          </v-dialog>
          <v-button @click="handleDialogInputClick">自定义内容</v-button>
        </section>
      </r-h>
    </section>
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      showDialog: false,
      closeOnClickModal: true,
      dialogTitle: "对话框的标题",

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
    handleButtonClick() {
      this.showDialog = !this.showDialog;
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
<style lang="scss">
.dialog-page {
  &-inner {
    padding: 20px;

    .form-control {
      margin-bottom: 24px;
      &:last-child {
        margin: 0;
      }
      &__label {
        display: inline-block;
        margin-right: 16px;
        width: 80px;
        text-align: right;
        line-height: 32px;
      }
    }

    .custom-dialog-title {
      padding: 24px;
      font-size: 16px;
      font-weight: 600;
      color: $main-active-color;
    }
    .custom-dialog-footer {
      font-size: 16px;
      font-weight: 600;
      font-style: italic;
      text-align: center;
      color: darkviolet;
    }
  }
}
</style>
