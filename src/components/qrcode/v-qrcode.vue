<template>
  <div :style="{ width: `${width}px` }" class="qrWrap">
    <header><slot name="top"></slot></header>
    <vue-qr
      ref="qrcode"
      :text="text"
      :bgSrc="bgSrc"
      :gifBgSrc="gifBgSrc"
      :backgroundColor="bgColor"
      :backgroundDimming="bgDimming"
      :size="sizeImg"
      :margin="margin"
      :logoSrc="logoSrc"
      :logoScale="logoScale"
      :logoMargin="logoMargin"
      :logoCornerRadius="logoCornerRadius"
      :autoColor="autoColor"
      :colorDark="colorDark"
      :colorLight="colorLight"
      :dotScale="dotScale"
      :logoBackgroundColor="'green'"
    ></vue-qr>
    <footer>
      <slot name="bottom"></slot>
      <v-button
        v-if="isDownload"
        type="primary"
        :size="btnSize"
        :disabled="disabled"
        @click="downLoadImg"
        >{{ btnText }}</v-button
      >
    </footer>
  </div>
</template>
<script>
import VueQr from "vue-qr";

export default {
  name: "v-qrcode",
  props: {
    text: { type: String, default: "" },
    bgSrc: String, //背景图片 实点缩放后才能见效果
    gifBgSrc: String, //GIF背景图,优先级高于bgSrc
    bgColor: String, //背景色，需要设置margin才能看到效果,表现为margin的颜色
    bgDimming: String, //叠加在背景图上的颜色，需要设置背景图且实点缩放后才能看到效果
    sizeImg: { type: Number, default: 120 },
    margin: { type: Number, default: 0 }, //二维码图像的外边距，（外边距会占二维码总宽度）
    logoSrc: String, //中间的logo
    logoScale: Number, //logo大小，插件默认0.2
    logoMargin: Number, //LOGO 标识周围的透明边框, 默认为0
    logoCornerRadius: String, //LOGO 标识及其边框的圆角半径，插件默认为8
    autoColor: { type: Boolean, default: true }, //是否将背景图的主要颜色将作为实点（colorDark）的颜色,插件默认为true
    colorDark: String, //实点的颜色
    colorLight: String, //空白区的颜色
    dotScale: Number, //数据区域点缩小比例(0,1]
    width: [Number, String],
    isDownload: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnSize: {
      type: String,
      default: "M"
    },
    btnText: {
      type: String,
      default: _("下载二维码")
    },
    fileName: {
      type: String,
      default: _("二维码")
    }
  },
  components: {
    VueQr
  },
  data() {
    return {};
  },
  methods: {
    downLoadImg() {
      let a = document.createElement("a"),
        event = new MouseEvent("click");
      a.href = this.$refs.qrcode.$el.currentSrc;
      a.download = this.fileName;
      a.dispatchEvent(event);
    }
  }
};
</script>
