<template>
  <r-page>
    <r-h tag="h1" title="Slider 滑块" desc="滑动型输入器。">
      <div></div>
      <r-h tag="h2" title="普通滑块" desc="">
        <div class="slide-group">
          <v-slider v-model="slider1"></v-slider>
        </div>
      </r-h>
      <r-h tag="h2" title="显示输入框" desc="">
        <div class="slide-group">
          <v-slider :min="0" :max="100" show-input v-model="slider2"></v-slider>
        </div>
      </r-h>
      <r-h tag="h2" title="显示输入框控制" desc="">
        <div class="slide-group">
          <v-slider
            :min="0"
            :max="10"
            show-input
            show-input-controls
            v-model="slider3"
          ></v-slider>
        </div>
      </r-h>
      <r-h tag="h2" title="步长与精度" desc="size 大号">
        <div class="slide-group">
          <v-slider
            :min="0.2"
            :max="1"
            size="L"
            show-input
            :step="0.04"
            :precision="2"
            show-input-controls
            v-model="slider4"
          ></v-slider>
        </div>
      </r-h>
      <r-h tag="h2" title="显示范围值" desc="">
        <div class="slide-group">
          <v-slider
            :min="0"
            :max="100"
            show-range
            show-input-controls
            v-model="slider5"
          ></v-slider>
        </div>
      </r-h>
      <r-h tag="h2" title="禁用" desc="size 小号">
        <div class="slide-group">
          <v-slider
            :min="0"
            :max="100"
            size="S"
            show-input
            disabled
            show-range
            show-input-controls
            v-model="slider6"
            @change="changeSlider"
          ></v-slider>
        </div>
      </r-h>
      <r-h tag="h2" title="显示范围值与输入框" desc="">
        <div class="slide-group">
          <v-slider
            :min="0"
            :max="100"
            show-input
            show-range
            show-input-controls
            v-model="slider7"
          ></v-slider>
        </div>
      </r-h>
    </r-h>
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      slider1: 0.2,
      slider2: 3,
      slider3: 3,
      slider4: 0.4,
      slider5: 65,
      slider6: 34,
      slider7: 23
    };
  },
  methods: {
    changeSlider(val) {
      console.log("change", val);
    }
  }
};
</script>
<style>
.slide-group {
  margin-bottom: 20px;
}
</style>
