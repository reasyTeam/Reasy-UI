<template>
  <div id="app">
    <v-form
      ref="form"
      :model="ruleForm"
      :rules="rules"
      @submit="submit"
      style="width: 500px; text-align:left; margin: 20px auto"
    >
      <v-form-item label="数字" prop="ssid" unit="秒">
        <v-input v-model="ruleForm.ssid"></v-input>
      </v-form-item>
      <v-form-item label="密码" prop="pwd">
        <v-input v-model="ruleForm.pwd"></v-input>
        <template v-slot:unit>这里显示单位信息</template>
      </v-form-item>
      <v-form-item
        label="IP地址"
        prop="ip"
        description="这里显示描述信息描述信息"
      >
        <v-input-group type="ip" v-model="ruleForm.ip"></v-input-group>
      </v-form-item>
      <v-form-item label="个数" prop="index">
        <v-input-number
          v-model="ruleForm.index"
          :min="1"
          :max="12"
        ></v-input-number>
      </v-form-item>
      <v-form-item label="功率" prop="power">
        <v-slider :min="0" :max="100" v-model="ruleForm.power"></v-slider>
      </v-form-item>
      <v-form-item label="加密" prop="security">
        <v-radio v-model="ruleForm.security" :options="radioOptions"></v-radio>
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
        <v-form-item prop="time" is-no-label is-inline>
          <v-datepicker v-model="ruleForm.date" type="datetime"></v-datepicker>
        </v-form-item>
      </v-form-item>
      <v-form-item label="日期时间" prop="date1">
        <v-datepicker
          v-model="ruleForm.date1"
          :width="400"
          is-range
          type="datetime"
        ></v-datepicker>
      </v-form-item>
      <v-form-item>
        <v-button type="primary" @click="submitForm">保存</v-button>
        <v-button @click="cancel">取消</v-button>
      </v-form-item>
    </v-form>
    <v-button>button</v-button><div style="height: 300px;">
  <v-chart-bar :series="series" :categories="categories"> </v-chart-bar>
</div>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      series: [
        {
          name: "KPI",
          data: [180, 80, 38, 144, 89]
        },
        {
          name: "NPM",
          data: [150, 178.34, 50, 178, 78]
        },
        {
          name: "ICU",
          data: [99, 56, 76, 28, 140]
        },
        {
          name: "GDP",
          data: [28, 90, 96, 96, 145]
        },
        {
          name: "PDD",
          data: [62, 24, 156, 60, 89]
        },
        {
          name: "KFF",
          data: [80, 98, 134, 96, 78]
        }
      ],
      categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"],
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
        date1: [],
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
          { type: "num", args: [1, 12], msg: "请输入正确的范围，范围1-12" }
        ],
        power: { type: "num", args: [1, 12] },
        ip: [{ type: "ip" }, this.checkIp],
        index: { type: "num", args: [1, 12] },
        downLimit: { type: "num", args: [1, 12] }
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
    checkIp(ip) {
      let ipArr = ip.split(".");
      if (+ipArr[0] <= 193) {
        return "自定义验证说明";
      }
    },
    cancel() {}
  },
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  box-sizing: border-box;
}
</style>
