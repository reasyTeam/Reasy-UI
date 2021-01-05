<template>
  <r-page>
    <r-h tag="h1" title="Datepicker 日期选择" desc="">
      <r-h tag="h2" title="大小" desc="">
        <div class="switch-group">
          <v-datepicker size="L" v-model="date1"></v-datepicker>
        </div>
        <div class="switch-group">
          <v-datepicker v-model="date2" is-range></v-datepicker>
        </div>
        <div class="switch-group">
          <v-datepicker size="S" v-model="date1"></v-datepicker>
        </div>
      </r-h>
      <r-h tag="h2" title="支持时间选择" desc="">
        <div class="switch-group">
          <v-datepicker
            type="datetime"
            v-model="date4"
            placeholder="xxxxxxxxxx"
          ></v-datepicker>
        </div>
        <div class="switch-group">
          <v-datepicker
            class="input-large"
            type="datetime"
            is-range
            v-model="date3"
            placeholder="时间"
            end-placeholder="结束时间"
          ></v-datepicker>
        </div>
      </r-h>
      <r-h tag="h2" title="自定义时间格式" desc="">
        <div class="switch-group">
          <v-datepicker
            v-model="date6"
            format="YYYY/MM/DD"
            placeholder="xxxxxxxxxx"
          ></v-datepicker>
        </div>
        <div class="switch-group">
          <v-datepicker
            type="datetime"
            v-model="date5"
            format="YYYY/MM/DD hh-mm-ss"
            placeholder="xxxxxxxxxx"
          ></v-datepicker>
        </div>
      </r-h>
      <r-h tag="h2" title="支持范围选择" desc="">
        <div class="switch-group">
          <v-datepicker v-model="date2" is-range></v-datepicker>
        </div>
        <div class="switch-group">
          <v-datepicker
            class="input-large"
            type="datetime"
            is-range
            size="S"
            v-model="date3"
            placeholder="时间"
            end-placeholder="结束时间"
          ></v-datepicker>
        </div>
      </r-h>
      <r-h tag="h2" title="禁用" desc="">
        <div class="switch-group">
          <v-datepicker
            v-model="date6"
            disabled
            format="YYYY/MM/DD"
            placeholder="xxxxxxxxxx"
          ></v-datepicker>
        </div>
      </r-h>
    </r-h>
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      date1: "2020-11-22",
      date2: ["2020-01-22", "2020-11-22"],
      date3: ["2020-01-22 00:11:22", "2020-11-22 14:22:22"],
      date4: "",
      date5: "2020/11/22 23-11-22",
      date6: "2020/04/01"
    };
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
.input-large {
  width: 400px;
}
</style>
