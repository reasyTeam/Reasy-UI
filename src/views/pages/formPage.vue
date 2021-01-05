<template>
  <r-page>
    <r-h tag="h1" title="Form 表单">
      <r-h tag="h2" title="表单" desc="">
        <v-form ref="form" :model="ruleForm" :rules="rules" @submit="submit">
          <v-form-item label="数字" prop="ssid">
            <v-input v-model="ruleForm.ssid"></v-input>
          </v-form-item>
          <v-form-item label="密码" prop="pwd">
            <v-input v-model="ruleForm.pwd"></v-input>
          </v-form-item>
          <v-form-item label="功率" prop="power">
            <v-slider :min="0" :max="100" v-model="ruleForm.power"></v-slider>
          </v-form-item>
          <v-form-item label="IP地址" prop="ip">
            <v-input-group type="ip" v-model="ruleForm.ip"></v-input-group>
          </v-form-item>
          <v-form-item label="个数" prop="index">
            <v-input-number
              v-model="ruleForm.index"
              :min="1"
              :max="100"
            ></v-input-number>
          </v-form-item>
          <v-form-item label="加密" prop="security">
            <v-radio
              v-model="ruleForm.security"
              :options="radioOptions"
            ></v-radio>
          </v-form-item>
          <v-form-item label="限速" prop="downLimit">
            <v-select
              v-model="ruleForm.downLimit"
              :options="options"
              is-manual
            ></v-select>
          </v-form-item>
          <v-form-item label="日期" prop="day">
            <v-checkbox-group
              is-select-all
              selectText="每天"
              v-model="ruleForm.day"
              :options="checkboxOptions"
              is-manual
            ></v-checkbox-group>
          </v-form-item>
          <v-form-item label="时间" prop="time">
            <v-timepicker v-model="ruleForm.time"></v-timepicker>
          </v-form-item>
          <v-form-item label="日期时间" prop="date" :required="false">
            <v-datepicker
              v-model="ruleForm.date"
              type="datetime"
            ></v-datepicker>
          </v-form-item>
          <v-form-item>
            <v-button type="primary" @click="submitForm">保存</v-button>
            <v-button @click="cancel">取消</v-button>
          </v-form-item>
        </v-form>
      </r-h>
    </r-h>
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        ssid: "111",
        pwd: "123",
        power: 12,
        ip: "192.168.0.10",
        index: 10,
        downLimit: 1,
        day: [],
        time: "10:12",
        date: "",
        security: ""
      },
      options: [
        {
          label: "1MB",
          value: 1
        },
        {
          label: "2MB",
          value: 2
        },
        {
          label: "3MB",
          value: 3
        },
        {
          label: "4MB",
          value: 4
        }
      ],
      checkboxOptions: [
        {
          label: "星期一",
          value: "1"
        },
        {
          label: "星期二",
          value: "2"
        },
        {
          label: "星期三",
          value: "3"
        },
        {
          label: "星期四",
          value: "4"
        },
        {
          label: "星期五",
          value: "5"
        },
        {
          label: "星期六",
          value: "6"
        },
        {
          label: "星期日",
          value: "7"
        }
      ],
      radioOptions: [
        {
          label: "加密",
          value: "aes"
        },
        {
          label: "不加密",
          value: "none"
        }
      ],
      rules: {
        ssid: [
          { type: "num", max: 12, min: 1, msg: "请输入正确的范围，范围1-12" }
        ],
        power: { type: "num", max: 12, min: 1 },
        ip: { type: "ip" },
        index: { type: "num", max: 12, min: 1 },
        downLimit: { type: "num", max: 12, min: 1 }
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.submitForm();
    },
    submit(data) {
      this.$message.success("验证成功");
      console.log("submit data", data);
    },
    cancel() {}
  },
  watch: {}
};
</script>
<style lang="scss">
.input-group {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
  vertical-align: top;
}
</style>
