### 表单

### 前提条件

首先要在`Vue`的`prototype`上绑定`$valid`数据验证对象，对象形式时，执行`all`方法

::: demo

```html
  const valid = {
    //函数形式
    num: function(str, min, max) {
      if (!/^([-0-9])?([0-9]+)$/.test(str)) {
        return "输入值必须为整数";
      }
      if (typeof min === "number" && typeof max === "number") {
        if (parseInt(str, 10) <script min || parseInt(str, 10) > max) {
          return `有效输入范围：${min} - ${max}`;
        }
      }
    },
    //对象形式
    ssid: {
      all: function(str) {
        let ret = this.specific(str);

        if (ret) {
          return ret;
        }
      },

      specific: function(str) {
        if(str.length > 32) {
          return "请输入正确的ssid";
        }
      }
    }
  };

  //绑定在原型链上
  Vue.prototype.$valid = valid;
```

:::

### 基本用法

表单元素组件为`v-form-item`，元素组件必须包含在`v-form-item`组件内才能生效。

`rules`为元素验证规则。

::: demo

```html
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
      :max="12"
    ></v-input-number>
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
  </v-form-item>
  <v-form-item label="日期时间" prop="date" :required="false">
    <v-datepicker v-model="ruleForm.date" type="datetime"></v-datepicker>
  </v-form-item>
  <v-form-item>
    <v-button type="primary" @click="submitForm">保存</v-button>
    <v-button @click="cancel">取消</v-button>
  </v-form-item>
</v-form>

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
            { type: "num", args: [1, 12], msg: "请输入正确的范围，范围1-12" }
          ],
          power: { type: "num", args: [1, 12] },
          ip: { type: "ip" },
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
      cancel() {}
    },
    watch: {}
  };
</script>
```

:::

## 属性 Attributes

| 参数           | 说明                                                                    | 类型     | 可选值 | 默认值 |
| -------------- | ----------------------------------------------------------------------- | -------- | ------ | ------ |
| rules          | 数据验证规则                                                            | boolean  | —      | {}     |
| model          | 表单数据对象                                                            | Object   | —      | {}     |
| is-label-right | 文字方向是否右对齐                                                      | boolean  | —      | false  |
| beforeSubmit   | 表单提交前数据验证，返回 false 时不会执行 submit<br />function(data) {} | function | —      | —      |
|                |                                                                         | —        |        |        |

### rules 验证规则

key 为 表单选项的 prop，

值为验证规则，多条验证规则时，为数组

验证规则，rules 选项配置

| 参数 | 说明                                               | 类型            | 可选值 | 默认值 |
| ---- | -------------------------------------------------- | --------------- | ------ | ------ |
| type | 数据验证类型                                       | string          | —      | —      |
| max  | 最大值或最大长度                                   | string / number | —      | —      |
| min  | 最小值或最小长度                                   | string / number | —      | —      |
| msg  | 错误提示信息，如果定义了，当验证错误时会提示此信息 | string          | —      | —      |

### v-form Methods

| 方法名        | 说明             | 参数 |
| ------------- | ---------------- | ---- |
| submitForm    | 提交表单事件     | —    |
| getSubmitData | 获取表单提交数据 | —    |

## v-form Events

| 事件名 | 说明                       | 参数           |
| ------ | -------------------------- | -------------- |
| submit | 表单验证完后的提交数据事件 | 提交的表单数据 |
| cancel | 表单取消事件               | —              |

### v-form-item Attributes

| 参数        | 说明                                                               | 类型    | 可选值 | 默认值 |
| ----------- | ------------------------------------------------------------------ | ------- | ------ | ------ |
| label       | 选项文字                                                           | string  | —      | —      |
| is-no-label | 不显示文字                                                         | boolean | —      | false  |
| prop        | 选项属性，用于数据验证规则和提交数据，不填不会对数据进行验证和提交 | string  | —      | —      |
| required    | 是否必填                                                           | boolean | —      | true   |

## v-form-item Methods

| 方法名     | 说明                                           | 参数     |
| ---------- | ---------------------------------------------- | -------- |
| checkValid | 数据验证，返回是否验证成功<br />function(data) | 选项的值 |
