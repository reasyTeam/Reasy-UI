<template>
  <r-page>
    <r-h tag="h1" title="Timepicker 时间选择" desc="">
      <r-h tag="h2" title="时间选择器大小" desc="">
        <div class="switch-group">
          <v-timepicker size="L" v-model="time1"></v-timepicker>
        </div>
        <div class="switch-group">
          <v-timepicker v-model="time1"></v-timepicker>
        </div>
        <div class="switch-group">
          <v-timepicker size="S" v-model="time1"></v-timepicker>
        </div>
      </r-h>
      <r-h tag="h2" title="自定义时间格式" desc="">
        <div class="switch-group">
          <v-timepicker
            v-model="time2"
            format="hh:mm"
            :minute-interval="5"
            min="01:10"
            max="12:30"
          ></v-timepicker>
        </div>
        <div class="switch-group">
          <v-timepicker
            v-model="time6"
            format="hh/mm/ss"
            :minute-interval="5"
          ></v-timepicker>
        </div>
        <div class="switch-group">
          <v-timepicker
            v-model="time7"
            format="hh%mm"
            :minute-interval="5"
          ></v-timepicker>
        </div>
      </r-h>
      <r-h tag="h2" title="时间选择器大小限制" desc="">
        <div class="switch-group">
          <v-timepicker
            v-model="time1"
            format="hh:mm:ss"
            min="02:11:21"
            max="12:23:11"
            :minute-interval="1"
          ></v-timepicker>
        </div>
      </r-h>
      <r-h tag="h2" title="时间选择器支持范围选择" desc="">
        <div class="switch-group">
          <v-timepicker
            v-model="time3"
            format="hh:mm:ss"
            is-range
            placeholder="开始时间"
            end-placeholder="结束时间"
          ></v-timepicker>
        </div>
      </r-h>
      <r-h tag="h2" title="时间选择器禁用" desc="">
        <div class="switch-group">
          <v-timepicker
            v-model="time3"
            format="hh:mm:ss"
            is-range
            disabled
            placeholder="开始时间"
            end-placeholder="结束时间"
          ></v-timepicker>
        </div>
      </r-h>
    </r-h>
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      time1: "02:30:11",
      time2: "02:30",
      time3: ["02:11:12", "12:11:22"],
      time6: "12/35/22",
      time7: "05%15"
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
