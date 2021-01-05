<template>
  <r-page>
    <r-h
      tag="h1"
      title="Input 输入框"
      desc="用户可以输入任意字母，数字或符号（除非另有限制）的内容。"
    >
      <div>
        <p>
          1.输入框定义的大小为输入框的最小宽度，如为满足输入内容的要求，可按需要增加输入框的宽度（增量为8x)
        </p>
        <p>2.输入框根据输入内容分为普通输入框和特殊输入框。</p>
        <p>3.输入框有三种尺寸：大、默认(中)、小。</p>
      </div>
      <r-h tag="h2" title="普通输入框" desc="">
        <div class="input-group">
          <v-input type="text" value="L" size="L"></v-input>
        </div>
        <div class="input-group">
          <v-input type="text" value="M" size="M"></v-input>
        </div>
        <div class="input-group">
          <v-input type="text" value="S" size="S"></v-input>
        </div>
      </r-h>
      <r-h tag="h2" title="输入框" desc="">
        <br />
        <div>
          <div class="input-group">
            <v-input type="text" value="禁用" disabled></v-input>
          </div>
          <div class="input-group">
            <v-input
              type="text"
              :value="iconText"
              icon="v-icon-search"
              @change="changeInput"
            ></v-input>
          </div>
          <div class="input-group">
            <v-input
              type="text"
              v-model="clearText"
              placeholder="支持清除"
              is-clear
            ></v-input>
          </div>
          <div class="input-group">
            <v-input type="text" v-model="password" show-password></v-input>
          </div>

          <div class="input-group">
            <v-input
              type="text"
              suffix-icon="v-icon-search"
              v-model="suffix"
            ></v-input>
          </div>
          <div class="input-group">
            <v-input
              type="text"
              show-word-limit
              v-model="wordLimit"
              :maxlength="20"
            ></v-input>
          </div>
          <div class="input-group">
            <v-input type="text" v-model="width" width="400px"></v-input>
          </div>
          <div class="input-group">
            <v-input
              type="text"
              v-model="allow"
              placeholder="只允许输入数字"
              :allow="/[0-9]/g"
            ></v-input>
          </div>
          <div class="input-group">
            <v-input
              type="text"
              v-model="allow"
              placeholder="自动聚焦"
              autofocus
            ></v-input>
          </div>
          <div class="input-group">
            <v-input
              type="text"
              v-model="readonly"
              placeholder="只读"
              readonly
            ></v-input>
          </div>
          <div class="input-group">
            <v-input
              type="textarea"
              placeholder="多行文本"
              v-model="textarea"
              :maxlength="100"
              show-word-limit
            ></v-input>
          </div>
          <div class="input-group">
            <v-input
              type="textarea"
              placeholder="多行文本"
              v-model="textarea"
              :maxlength="100"
              :rows="8"
              show-word-limit
            ></v-input>
          </div>
          <div class="input-group">
            <v-input
              type="textarea"
              placeholder=""
              v-model="textarea1"
              :maxlength="100"
              show-word-limit
              disabled
            ></v-input>
          </div>
        </div>
      </r-h>
      <r-h tag="h2" title="输入框组" desc="">
        <div>设置宽度 80%</div>
        <div class="input-group">
          <v-input-group
            size="L"
            type="ip"
            v-model="ip"
            @change="changeIp"
            width="80%"
          ></v-input-group>
        </div>
        <div>MAC地址</div>
        <div class="input-group">
          <v-input-group type="mac" v-model="mac"></v-input-group>
        </div>
        <div>IP地址 禁用 小号</div>
        <div class="input-group">
          <v-input-group
            type="ip"
            v-model="ip1"
            disabled
            size="S"
          ></v-input-group>
        </div>
        <div>自定义</div>
        <div class="input-group">
          <v-input-group
            size="L"
            :maxlength="4"
            :input-nums="3"
            splitter="-"
            v-model="mac2"
          ></v-input-group>
        </div>
      </r-h>
      <r-h tag="h2" title="计数器" desc="">
        <div>计数器 大号</div>
        <div class="input-group">
          <v-input-number
            size="L"
            v-model="num"
            :min="1"
            :max="10"
          ></v-input-number>
        </div>
        <div>计数器 禁用</div>
        <div class="input-group">
          <v-input-number
            v-model="num2"
            :min="1"
            :max="100"
            disabled
            :step="0.1"
            :precision="2"
          ></v-input-number>
        </div>
        <div>计数器 步长0.2 宽度50%</div>
        <div class="input-group">
          <v-input-number
            v-model="num3"
            :min="0"
            :max="1"
            :step="0.2"
            width="50%"
          ></v-input-number>
        </div>
        <div>计数器 步长1 精度为小数点后2位</div>
        <div class="input-group">
          <v-input-number
            v-model="num4"
            :min="1"
            :max="100"
            :step="1"
            :precision="2"
            @change="changeNum"
          ></v-input-number>
        </div>
        <div>计数器 控制器在右边</div>
        <div class="input-group">
          <v-input-number
            v-model="num5"
            :min="1"
            :max="100"
            width="50%"
            controls-position="right"
          ></v-input-number>
        </div>
        <div>计数器 无控制器</div>
        <div class="input-group">
          <v-input-number
            v-model="num6"
            :min="1"
            :max="100"
            :is-controls="false"
          ></v-input-number>
        </div>
      </r-h>
    </r-h>
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      iconText: "前缀图标",
      clearText: "支持清除",
      ssid: "123123",
      ssid1: "",
      password: "12345678",
      suffix: "后缀图标",
      wordLimit: "123456",
      width: "设置宽度400px",
      allow: "",
      readonly: "只读",
      textarea: "",
      textarea1: "多行文本禁用",
      ip: "192.168.0.2",
      mac: "C8:3A:35:22:22:11",
      mac2: "2222-3333-4444",
      ip1: "192.168.3.2",
      num: 1,
      num2: 4,
      num3: 0.4,
      num4: 1.1,
      num5: 5,
      num6: 45
    };
  },
  methods: {
    changeIp(val) {
      console.log("changeIp", val);
    },
    changeNum() {
      console.log("input number", this.num4);
    },
    changeInput(val) {
      console.log("change input", val);
    }
  },
  watch: {
    ssid1(val) {
      console.log("ssid1", val);
    }
    // ip(val) {
    //   console.log("ip", val);
    // }
  }
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
