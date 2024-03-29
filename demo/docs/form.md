# 表单

表单包含复选框、单选框、输入框、下拉选择框等元素，用于收集数据、校验和提交数据。
## 按需引用

```js
import { Base, Form } from "@reasy-team/reasy-ui";

Vue.use(Form);
Vue.use(Base);
```

## 前提条件

首先要在`Vue`的`prototype`上绑定`$valid`数据验证对象，对象形式时，执行`all`方法

```js
  const valid = {
    //函数形式
    num: function(str, min, max) {
      if (!/^([-0-9])?([0-9]+)$/.test(str)) {
        return "输入值必须为整数";
      }
      if (typeof min === "number" && typeof max === "number") {
        if (parseInt(str, 10) < min || parseInt(str, 10) > max) {
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

::: demo

```html
<v-form ref="form" :model="formData" @submit="submit">
  <v-form-item label="类型" prop="type" key="key1">
    <v-select name="type" v-model="formData.type" :options="options"></v-select>
  </v-form-item>
  <v-form-item label="值1" prop="data1" v-if="formData.type == 1">
    <v-input name="data1" v-model="formData.data1"></v-input>
  </v-form-item>
  <v-form-item label="值2" prop="data2" v-else>
    <v-input-group name="data2" type="ip" v-model="formData.data2"></v-input-group>
  </v-form-item>
  <v-form-item>
    <v-button name="ok11" type="primary" @click="submitForm">保存</v-button>
  </v-form-item>
</v-form>

<script>
  export default {
    data() {
      return {
        formData: {
          type: 1,
          data1: "1",
          data2: "2"
        },
        options: [
          {
            label: "类型1",
            value: 1
          },
          {
            label: "类型2",
            value: 2
          }
        ]
      };
    },
    methods: {
      submitForm() {
        this.$refs.form.submitForm();
      },
      submit(data) {
        this.$message.success("验证成功");
        console.log("submit data", data);
      }
    }
  };
</script>
```

:::


## 基本用法

表单元素组件为`v-form-item`，元素组件必须包含在`v-form-item`组件内才能生效。

`rules`为元素验证规则。

::: demo

```html
<v-form ref="form" :rules="rules" @submit="submit">
  <v-form-item label="数字" prop="ssid" unit="秒" key="数字key">
    <v-input name="ssid" v-model="ruleForm.ssid"></v-input>
  </v-form-item>
  <v-form-item label="密码" prop="pwd" remark="这里显示remark信息。">
    <v-input name="pwd" v-model="ruleForm.pwd" show-password type="password"></v-input>
    <template v-slot:unit>
      <label class="v-form-item__unit">这里显示单位信息</label>
    </template>
  </v-form-item>
  <v-form-item label="IP地址" prop="ip" description="这里显示描述信息描述信息">
    <v-input-group name="ip" type="ip" v-model="ruleForm.ip"></v-input-group>
  </v-form-item>
  <v-form-item label="个数" prop="index">
    <v-input-number name="index"
      v-model="ruleForm.index"
      :min="1"
      :max="12"
    ></v-input-number>
  </v-form-item>
  <v-form-item label="功率" prop="power">
    <v-slider name="power" :min="0" :max="100" v-model="ruleForm.power"></v-slider>
    <template v-slot:description>
      <label class="v-form-item__description">这里显示描述信息描5555述信息slot</label>
    </template>
  </v-form-item>
  <v-form-item label="加密" prop="security">
    <v-radio name="security" v-model="ruleForm.security" :options="radioOptions"></v-radio>
  </v-form-item>
  <v-form-item label="开启" prop="on">
    <v-switch name="pn" v-model="ruleForm.on"></v-switch>
  </v-form-item>
  <v-form-item label="限速" prop="downLimit">
    <v-select name="limit"
      v-model="ruleForm.downLimit"
      :options="options"
      is-manual
    ></v-select>
  </v-form-item>
  <v-form-item label="日期" prop="day">
    <v-checkbox-group
      is-select-all
      name="day"
      selectText="每天"
      v-model="ruleForm.day"
      :options="checkboxOptions"
      is-manual
    ></v-checkbox-group>
  </v-form-item>
  <v-form-item label="时间" prop="time" :required="false">
    <v-timepicker name="time" v-model="ruleForm.time"></v-timepicker>
    <v-form-item prop="time" is-no-label is-inline  :required="false">
      <v-datepicker name="date" v-model="ruleForm.date" type="datetime"></v-datepicker>
    </v-form-item>
  </v-form-item>
  <v-form-item label="日期时间" prop="date1" :required="false">
    <v-datepicker
      name="date2"
      v-model="ruleForm.date1"
      :width="400"
      is-range
      type="datetime"
    ></v-datepicker>
  </v-form-item>
  <v-form-item>
    <v-button name="ok" type="primary" @click="submitForm">保存</v-button>
    <v-button name="cancel" @click="cancel">取消</v-button>
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
          date1: [],
          on: true,
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
          downLimit: { type: "num", args: [1, 12] },
          day:[this.checkDay]
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
      checkDay(val){
        return val.length < 3 ? "至少选择三天" :false
      },
      cancel() {}
    },
    watch: {}
  };
</script>
```

:::


> 注意：如果涉及组件显示隐藏切换或者组件拿到的数据有问题时，请在`v-form-item`上绑定唯一的`key`。这是由于`Vue`对视图更新，进行`patch`操作时，对`DOM`进行复用引起的bug。

## 禁用

表单元素组件为`v-form-item`，元素组件必须包含在`v-form-item`组件内才能生效。

`rules`为元素验证规则。

::: demo

```html
<p>全部禁用</p>

<v-form ref="form" disabled :model="ruleForm" :rules="rules" @submit="submit">
  <v-form-item label="数字" prop="ssid" unit="秒">
    <v-input name="ssid1" v-model="ruleForm.ssid"></v-input>
  </v-form-item>
  <v-form-item label="密码" prop="pwd">
    <v-input name="pwd1" v-model="ruleForm.pwd"></v-input>
    <template v-slot:description>
      <label class="v-form-item__description">这里显示单位信息</label>
    </template>
  </v-form-item>
  <v-form-item label="IP地址" prop="ip" description="这里显示描述信息描述信息">
    <v-input-group name="ip1" type="ip" v-model="ruleForm.ip"></v-input-group>
  </v-form-item>
  <v-form-item label="个数" prop="index">
    <v-input-number name="index1"
      v-model="ruleForm.index"
      :min="1"
      :max="12"
    ></v-input-number>
  </v-form-item>
  <v-form-item label="功率" prop="power">
    <v-slider name="power1" :min="0" :max="100" v-model="ruleForm.power"></v-slider>
  </v-form-item>
  <v-form-item disabled>
    <v-button name="svae1" type="primary" @click="submitForm">保存</v-button>
    <v-button name="cancel1" @click="cancel">取消</v-button>
  </v-form-item>
</v-form>

<p>部分禁用</p>
<v-form>
  <v-form-item label="功率" prop="power">
    <v-slider name="power2" :min="0" :max="100" v-model="ruleForm.power"></v-slider>
  </v-form-item>
  <v-form-item disabled label="加密" prop="security">
    <v-radio name="security1" v-model="ruleForm.security" :options="radioOptions"></v-radio>
  </v-form-item>
  <v-form-item label="限速" prop="downLimit">
    <v-select name="limit1"
      v-model="ruleForm.downLimit"
      :options="options"
      is-manual
    ></v-select>
  </v-form-item>
  <v-form-item disabled label="日期" prop="day">
    <v-checkbox-group 
      name="day1"
      is-select-all
      selectText="每天"
      v-model="ruleForm.day"
      :options="checkboxOptions"
      is-manual
    ></v-checkbox-group>
  </v-form-item>
  <v-form-item label="时间" prop="time">
    <v-timepicker name="time1" v-model="ruleForm.time"></v-timepicker>
    <v-form-item prop="time" is-no-label is-inline>
      <v-datepicker name="date1" v-model="ruleForm.date" type="datetime"></v-datepicker>
    </v-form-item>
  </v-form-item>
  <v-form-item>
    <v-button name="save2" type="primary" @click="submitForm">保存</v-button>
    <v-button name="cancel2" @click="cancel">取消</v-button>
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
    watch: {}
  };
</script>
```

:::

> 注意：如果涉及组件显示隐藏切换或者组件拿到的数据有问题时，请在`v-form-item`上绑定唯一的`key`。这是由于`Vue`对视图更新，进行`patch`操作时，对`DOM`进行复用引起的bug。

## Props

| 参数           | 说明                                                                    | 类型     | 可选值 | 默认值 |
| -------------- | ----------------------------------------------------------------------- | -------- | ------ | ------ |
| rules          | 数据验证规则                                                            | boolean  |        | {}     |
| padding-width  | 表单选项文字与右边组件的距离                                            | number   |        | 24     |
| is-label-right | 文字方向是否右对齐                                                      | boolean  |        | false  |
| disabled       | 表单是否禁用                                                            | boolean  |        | false  |
| unit           | 表单显示的单位信息                                                      | string   | -      |
| description    | 表单显示的描述信息                                                      | string   | -      |
| beforeSubmit   | 表单提交前数据验证，返回 false 时不会执行 submit<br />function(data) {} | function |        |        |

## rules 验证规则

key 为 表单选项的 prop，

值为验证规则，多条验证规则时，为数组

验证规则，rules 选项配置

| 参数 | 说明                                               | 类型   | 可选值 | 默认值 |
| ---- | -------------------------------------------------- | ------ | ------ | ------ |
| type | 数据验证类型                                       | string |        |        |
| args | 数据验证需要用到的值                               | Array  |        |        |
| msg  | 错误提示信息，如果定义了，当验证错误时会提示此信息 | string |        |        |

## Methods

| 方法名        | 说明             | 参数 |
| ------------- | ---------------- | ---- |
| submitForm    | 提交表单事件     | —    |
| getSubmitData | 获取表单提交数据 | —    |

## @Events

| 事件名 | 说明                       | 参数           |
| ------ | -------------------------- | -------------- |
| submit | 表单验证完后的提交数据事件 | 提交的表单数据 |
| cancel | 表单取消事件               | —              |

## v-form-item

> 注意：如果涉及组件显示隐藏切换或者组件拿到的数据有问题时，请在`v-form-item`上绑定唯一的`key`。这是由于`Vue`对视图更新，进行`patch`操作时，对`DOM`进行复用引起的bug。
## Props

| 参数               | 说明                                                               | 类型           | 可选值 | 默认值       |
| ------------------ | ------------------------------------------------------------------ | -------------- | ------ | ------------ |
| label              | 选项文字                                                           | string         |        |              |
| is-no-label        | 不显示文字                                                         | boolean        |        | false        |
| prop               | 选项属性，用于数据验证规则和提交数据，不填不会对数据进行验证和提交 | string         |        |              |
| required           | 是否必填                                                           | boolean        |        | true         |
| ignore             | 是否忽略验证                                                       | boolean        |        | false        |
| valid              | 数据验证规格，与 rules 配置一致，支持 type， args，msg 配置        | Array / Object |        |              |
| disabled           | 选项是否禁用                                                       | boolean        |        | false        |
| isInline           | 是否不换行显示，适用于紧接着前面的组件显示在一行                   | boolean        |        | false        |
| show-pop-error     | 是否错误提示显示为提示小浮窗                                       | boolean        |        | false        |
| pop-error-position | 错误提示小浮窗位置，参考[tooltip](./#/component/tooltip)组件       | string         |        | right-center |

## Methods

| 方法名     | 说明                                           | 参数     |
| ---------- | ---------------------------------------------- | -------- |
| checkValid | 数据验证，返回是否验证成功<br />function(data) | 选项的值 |

## Slots

| name        | 说明                                                                            |
| ----------- | ------------------------------------------------------------------------------- |
| default     | 表单元素右边显示内容                                                            |
| content     | 右边多个数据验证时需要把第二个放入此插槽内，显示在 default 插槽后面             |
| label       | 表单元素左边文字内容                                                            |
| unit        | 单位信息，与`unit`属性作用相同，若同时配置`unit`属性，则只生效该slot            |
| description | 描述信息，可自定义特定样式描述信息，若同时配置`description`属性，则只生效该slot |
