<template>
  <r-page>
    <r-h tag="h1" title="Select 选择框" desc="">
      <r-h tag="h2" title="选择器大小" desc="">
        <div class="select-group">
          <v-select
            v-model="select.value"
            size="L"
            :options="select.option"
          ></v-select>
        </div>
        <div class="select-group">
          <v-select v-model="select.value" :options="select.option"></v-select>
        </div>
        <div class="select-group">
          <v-select
            v-model="select.value"
            size="S"
            :options="select.option"
          ></v-select>
        </div>
      </r-h>
      <r-h tag="h2" title="普通选择器" desc="">
        <div class="select-group">
          <v-select v-model="select.value" :options="select.option"></v-select>
        </div>
      </r-h>
      <r-h tag="h2" title="选择器宽度" desc="">
        <div class="select-group">
          <v-select
            v-model="select1.value"
            is-manual
            width="300px"
            manual-text="手动配置22222222"
            :options="select1.option"
            @visible-change="visibleChange"
          ></v-select>
        </div>
        <div class="select-group">
          <v-select
            v-model="select1.value"
            width="100px"
            :options="select1.option"
          ></v-select>
        </div>
      </r-h>
      <r-h tag="h2" title="支持自定义选择器" desc="">
        <div class="select-group">
          <v-select
            v-model="select1.value"
            is-manual
            placeholder="xxxxxxxxxxxxxxxx"
            manual-text="手动配置22222222"
            :options="select1.option"
          ></v-select>
        </div>
      </r-h>
      <r-h tag="h2" title="支持选项位置" desc="">
        <div class="select-group">
          <div>top</div>
          <v-select
            v-model="select1.value"
            is-manual
            position="top"
            placeholder="xxxxxxxxxxxxxxxx"
            manual-text="手动配置22222222"
            :options="select1.option"
          ></v-select>
        </div>
        <div class="select-group">
          <div>bootom</div>
          <v-select
            v-model="select1.value"
            is-manual
            position="bottom"
            placeholder="xxxxxxxxxxxxxxxx"
            manual-text="手动配置22222222"
            :options="select1.option"
          ></v-select>
        </div>
        <div class="select-group">
          <div>auto</div>
          <v-select
            v-model="select1.value"
            is-manual
            placeholder="xxxxxxxxxxxxxxxx"
            manual-text="手动配置22222222"
            :options="select1.option"
          ></v-select>
        </div>
      </r-h>
      <r-h tag="h2" title="禁用选择器" desc="">
        <div class="select-group">
          <v-select
            v-model="select1.value"
            is-manual
            disabled
            manual-text="手动配置22222222"
            :options="select1.option"
          ></v-select>
        </div>
        <div class="select-group">
          <v-select
            v-model="select2.value"
            :options="select2.option"
          ></v-select>
        </div>
        <div class="select-group">
          <v-select
            is-clear
            disabled
            is-multiple
            placeholder="xxxxx"
            v-model="select3.value"
            :options="select3.option"
          ></v-select>
        </div>
      </r-h>
      <r-h tag="h2" title="多选选择器" desc="">
        <div class="select-group">
          <v-select
            is-multiple
            size="L"
            v-model="select3.value"
            :options="select3.option"
            @change="changeSelect"
          ></v-select>
        </div>
        <div class="select-group">
          <v-select
            is-multiple
            v-model="select3.value"
            :options="select3.option"
          ></v-select>
        </div>
        <div class="select-group">
          <v-select
            is-multiple
            size="S"
            placeholder="请选择"
            v-model="select3.value"
            :options="select3.option"
          ></v-select>
        </div>
      </r-h>
      <r-h tag="h2" title="支持清除选择器" desc="">
        <div class="select-group">
          <v-select
            is-clear
            placeholder="xxxxx"
            v-model="select2.value"
            :options="select2.option"
          ></v-select>
        </div>
        <div class="select-group">
          <v-select
            is-clear
            is-multiple
            :multiple-limit="2"
            placeholder="xxxxx"
            v-model="select3.value"
            :options="select3.option"
          ></v-select>
        </div>
        <div class="select-group">
          <v-select
            is-clear
            placeholder="xxxxx"
            is-manual
            v-model="select1.value"
            :options="select1.option"
          ></v-select>
        </div>
      </r-h>
    </r-h>
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      select: {
        value: 1,
        option: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      },
      select1: {
        value: "2",
        option: [
          {
            value: "1",
            label: "一"
          },
          {
            value: "2",
            label: "二"
          },
          {
            value: "3",
            label: "三"
          },
          {
            value: "4",
            label: "四"
          }
        ]
      },
      select2: {
        value: "3",
        option: [
          {
            value: "1",
            label: "一",
            disabled: true
          },
          {
            value: "2",
            label: "二"
          },
          {
            value: "3",
            label: "三"
          },
          {
            value: "4",
            label: "四"
          }
        ]
      },
      select3: {
        value: ["2", "4"],
        option: [
          {
            value: "1",
            label: "一"
          },
          {
            value: "2",
            label: "二"
          },
          {
            value: "3",
            label: "三",
            disabled: true
          },
          {
            value: "4",
            label: "四"
          }
        ]
      }
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.select.option.push(7);
    // }, 2000);
  },
  methods: {
    visibleChange(val) {
      console.log("show", val);
    },
    changeSelect(val) {
      console.log("change", val);
    }
  }
};
</script>
<style lang="scss">
.select-group {
  display: inline-block;
  margin-bottom: 20px;
  margin-right: 20px;
}
</style>
