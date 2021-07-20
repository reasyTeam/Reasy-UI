<template>
  <div
    class="v-upload__image"
    :class="{ 'is-disabled': disabled }"
    ref="image"
    @click="clickFile"
  >
    <div class="v-upload__image__middle">
      <!-- 未上传 -->
      <template v-if="uploadType === 0">
        <span class="v-upload__image__icon v-icon-add"></span>
        <div class="v-upload__image__text">添加</div>
      </template>
      <!-- 上传中 -->
      <template v-if="uploadType === 1">
        <span class="v-upload__image__icon v-icon-image"></span>
      </template>
      <!-- 上传后 -->
      <template v-if="uploadType === 2">
        <img
          v-if="dataImage"
          class="v-upload__image__src"
          :style="{ maxHeight: height + 'px', maxWidth: width + 'px' }"
          :src="dataImage"
        />
        <span v-else class="v-upload__image__icon--big v-icon-image"></span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    //图片base64
    dataImage: String,
    //上传状态 0： 初始状态  1：上传中 2：上传成功
    uploadType: Number
  },
  data() {
    return {
      width: 0,
      height: 0
    };
  },
  mounted() {
    let elem = this.$refs.image;
    this.width = elem.clientWidth;
    this.height = elem.clientHeight;
  },
  methods: {
    clickFile() {
      this.$emit("clickFile");
    }
  }
};
</script>
