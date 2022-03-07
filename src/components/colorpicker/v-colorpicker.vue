<template>
  <div class="v-colorpicker">
    <div
      class="v-colorpicker__input"
      :class="{ 'v-colorpicker__input--disabled': disabled }"
    >
      <div v-for="(item, index) in RGB" :key="index">
        <span>{{ item }}</span>
        <v-input
          v-model="formatColor[index]"
          :width="44"
          :allow="/[0-9]/g"
          no-id
          :maxlength="3"
          :name="name | id(index)"
          :auto-correction="[0, 255]"
          @change="handlerChange"
          @input="handlerInput"
          @blur="handlerBlur"
          @focus="handlerFocus"
          :disabled="disabled"
        ></v-input>
      </div>
    </div>

    <ul
      v-if="showPanel"
      class="v-colorpicker__list"
      :class="{ 'v-colorpicker__list--disabled': disabled }"
    >
      <li
        v-for="(color, index) in formatColors"
        :key="index"
        class="v-colorpicker__list__item"
        :style="{ background: color }"
        @click="chooseColor(color)"
      ></li>
    </ul>
  </div>
</template>

<script>
import FormMixin from "../form-mixins";
import NameMixin from "../name-mixins";
const COLORS = [
  "#39B09A",
  "#1599FF",
  "#FF9800",
  "#0165B1",
  "#A90000",
  "#2D3195",
  "#727272",
  "#D2B98D"
];
export default {
  name: "v-colorpicker",
  mixins: [FormMixin, NameMixin],
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: [String, Array],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    colors: {
      type: Array,
      default: () => COLORS
    },
    showPanel: {
      type: Boolean,
      default: true
    },
    format: {
      type: String,
      default: "rgb",
      validator: function(value) {
        return ["rgb", "hex", "array"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    formatColor() {
      return this.validator(this.value);
    },
    formatColors() {
      const colors = this.colors;

      return colors.map(color => {
        if (this.validator(color).length) {
          if (Array.isArray(color)) {
            return this.toRgb(color);
          } else {
            return color;
          }
        }
      });
    }
  },
  data() {
    this.RGB = ["R", "G", "B"];
    return {};
  },
  methods: {
    chooseColor(color) {
      if (this.disabled) {
        return;
      }
      const formatVal = this.getFormatValue(color);

      this.$emit("click-panel", formatVal);
      this.$emit("change", formatVal);
      if (this.elFormItem && !this.elFormItem.ignore) {
        //当form组件存在且需要数据验证时
        this.$nextTick(() => {
          this.$dispatch("v-form-item", "form:blur");
        });
      }
    },
    handlerChange() {
      const { formatColor } = this,
        formatVal = this.getFormatValue(formatColor);

      this.$emit("change", formatVal);
    },
    getFormatValue(color) {
      const { format } = this;

      let formatVal;
      switch (format) {
        case "rgb":
          formatVal = this.toRgb(color);
          break;
        case "hex":
          formatVal = this.toHex(this.toRgb(color));
          break;
        case "array":
          formatVal = this.toRgbArr(color);
          break;
      }
      return formatVal;
    },
    handlerFocus(event) {
      this.$emit("focus", event);
    },
    handlerBlur(event) {
      this.$emit("blur", event);
    },
    handlerInput(val) {
      this.$emit("input", val);
    },
    //将 rgb(255, 255, 255) 或 #fff 转换为 [255, 255, 255] 格式
    toRgbArr(val) {
      if (Array.isArray(val)) {
        return val.map(item => Number(item));
      }
      const rgbVal = this.toRgb(val),
        reg = /\(([^)]*)\)/;

      if (reg.test(rgbVal)) {
        const formatArr = rgbVal.match(reg)[1].split(",");

        return formatArr.map(item => Number(item));
      } else {
        return [];
      }
    },
    //将 #fff 或 [255, 255, 255] 转换为 rgb(255, 255, 255) 格式
    toRgb(val) {
      if (Array.isArray(val)) {
        return "rgb(" + val.join(", ") + ")";
      }
      // 16进制颜色值的正则
      let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // 把颜色值变成小写
      let color = val.toLowerCase();
      if (reg.test(color)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color.length === 4) {
          let colorNew = "#";
          for (let i = 1; i < 4; i += 1) {
            colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
          }
          color = colorNew;
        }
        // 处理六位的颜色值，转为RGB
        let colorChange = [];
        for (let i = 1; i < 7; i += 2) {
          colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
        }
        return "rgb(" + colorChange.join(", ") + ")";
      } else {
        return color;
      }
    },
    //将 rgb(255, 255, 255) 转换为 #ffffff 格式
    toHex(val) {
      // let val = "rgb(11, 11, 999)";
      //十六进制颜色值的正则表达式
      const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // 如果是rgb颜色表示
      if (/^(rgb|RGB)/.test(val)) {
        let aColor = val.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        let strHex = "#";
        for (let i = 0; i < aColor.length; i++) {
          let hex = Number(aColor[i]).toString(16);
          if (hex.length < 2) {
            hex = "0" + hex;
          }
          strHex += hex;
        }
        // if (strHex.length !== 7) {
        //   strHex = val;
        // }
        return strHex;
      } else if (reg.test(val)) {
        let aNum = val.replace(/#/, "").split("");
        if (aNum.length === 6) {
          return val;
        } else if (aNum.length === 3) {
          let numHex = "#";
          for (let j = 0; j < aNum.length; j += 1) {
            numHex += aNum[j] + aNum[j];
          }
          return numHex;
        }
      }
      return val;
    },
    validator(val) {
      const color = this.toRgbArr(val);

      if (color.length !== this.RGB.length) {
        console.warn(`${val}设置无效，建议设置为6位16进制、RGB或数组格式`);
        return [];
      }
      return color;
    }
  }
};
</script>
