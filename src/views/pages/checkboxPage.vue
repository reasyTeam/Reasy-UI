<template>
  <r-page>
    <r-h tag="h1" title="checkbox 复选框" desc="">
      <r-h tag="h2" title="普通复选框" desc="">
        <div class="radio-group">
          <v-checkbox v-model="checkbox">开关</v-checkbox>
        </div>
      </r-h>
      <r-h tag="h2" title="自定义复选框值" desc="">
        <div class="radio-group">
          <v-checkbox v-model="checkbox3" on-value="on" off-value="off"
            >开关</v-checkbox
          >
          <span>{{ checkbox3 }}</span>
        </div>
      </r-h>
      <r-h tag="h2" title="禁用复选框" desc="">
        <div class="radio-group">
          <v-checkbox v-model="checkbox2" disabled>禁用</v-checkbox>
        </div>
      </r-h>
      <r-h tag="h2" title="复选框组" desc="">
        <div class="radio-group">
          <v-checkbox-group
            v-model="checkbox4.value"
            :options="checkbox4.options"
            @change="changeValue"
          ></v-checkbox-group>
        </div>
        <div class="radio-group">
          <v-checkbox-group
            v-model="checkbox4.value"
            is-select-all
            :options="checkbox4.options"
          ></v-checkbox-group>
        </div>
      </r-h>
      <r-h tag="h2" title="复选框组 最大最小配置" desc="">
        <div class="radio-group">
          <v-checkbox-group
            v-model="checkbox5.value"
            :max="3"
            :min="1"
            :options="checkbox5.options"
          ></v-checkbox-group>
        </div>
      </r-h>
    </r-h>
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      checkbox: false,
      checkbox2: true,
      checkbox3: "off",
      checkbox4: {
        value: [1],
        options: [1, 2, 3, 4]
      },
      checkbox5: {
        value: [1],
        options: [1, 2, 3, 4]
      }
    };
  },
  methods: {
    changeValue(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="scss">
.checkbox-group {
  margin-right: 20px;
  margin-bottom: 20px;
  vertical-align: top;
}
</style>
