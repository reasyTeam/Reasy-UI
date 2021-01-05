<template>
  <r-page>
    <r-h tag="h1" title="Switch 开关" desc="">
      <r-h tag="h2" title="开关大小" desc="">
        <div class="switch-group">
          <v-switch size="L" v-model="switch1"></v-switch>
        </div>
        <div class="switch-group">
          <v-switch v-model="switch1"></v-switch>
        </div>
        <div class="switch-group">
          <v-switch size="S" v-model="switch1"></v-switch>
        </div>
      </r-h>
      <r-h tag="h2" title="开关文字" desc="">
        <div class="switch-group">
          <v-switch
            size="L"
            v-model="switch1"
            on-text="开启"
            off-text="关闭"
          ></v-switch>
        </div>
      </r-h>
      <r-h tag="h2" title="开关值" desc="">
        <div class="switch-group">
          <v-switch
            v-model="switch4"
            on-value="1"
            off-value="0"
            :before-change="beforeChange"
            @change="changeValue"
          ></v-switch>
          <div>{{ switch4 }}</div>
        </div>
      </r-h>
      <r-h tag="h2" title="禁用按钮" desc="">
        <div class="switch-group">
          <v-switch v-model="switch2" disabled></v-switch>
        </div>
        <div class="switch-group">
          <v-switch v-model="switch3" disabled></v-switch>
        </div>
        <div class="switch-group">
          <v-switch
            v-model="switch3"
            on-text="开启"
            off-text="关闭"
            disabled
          ></v-switch>
        </div>
      </r-h>
    </r-h>
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      switch1: true,
      switch2: false,
      switch3: true,
      switch4: "1"
    };
  },
  methods: {
    changeValue(value) {
      console.log(value);
    },
    beforeChange(value) {
      if (value === "0") {
        if (window.confirm("确定要关闭吗?")) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
};
</script>
<style lang="scss">
.switch-group {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
  vertical-align: top;
}
</style>
