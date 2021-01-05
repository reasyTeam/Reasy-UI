<template>
  <r-page>
    <r-h tag="h1" title="radio 单选按钮" desc="">
      <r-h tag="h2" title="普通单选按钮" desc="">
        <div class="radio-group">
          <v-radio v-model="radio.value" :options="radio.options"></v-radio>
        </div>
      </r-h>
      <r-h tag="h2" title="禁用单选按钮" desc="">
        <div class="radio-group">
          <v-radio
            v-model="radio.value"
            disabled
            :options="radio.options"
          ></v-radio>
        </div>
        <div class="radio-group">
          <v-radio v-model="radio2.value" :options="radio2.options"></v-radio>
        </div>
      </r-h>
    </r-h>
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      radio: {
        value: 1,
        options: [1, 2, 3, 4]
      },
      radio2: {
        value: "1",
        options: [
          {
            value: "1",
            label: "星期一"
          },
          {
            value: "2",
            label: "星期二"
          },
          {
            value: "3",
            label: "星期三"
          },
          {
            value: "4",
            label: "星期四",
            disabled: true
          },
          {
            value: "5",
            label: "星期五"
          }
        ]
      }
    };
  },
  methods: {}
};
</script>
<style lang="scss">
.radio-group {
  margin-right: 20px;
  margin-bottom: 20px;
  vertical-align: top;
}
</style>
