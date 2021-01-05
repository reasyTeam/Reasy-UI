const valid = {
  num: function(str, min, max) {
    if (!/^([-0-9])?([0-9]+)$/.test(str)) {
      return "输入值必须为整数";
    }
    if (typeof min === "number" && typeof max === "number") {
      if (parseInt(str, 10) < min || parseInt(str, 10) > max) {
        return `有效输入范围：${min} - ${max}`;
      }
    }
  },
  ip: {
    all: function(str) {
      let ret = this.specific(str);

      if (ret) {
        return ret;
      }

      if (
        !/^([1-9]|[1-9]\d|1\d\d|2[0-1]\d|22[0-3])\.(([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){2}([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/.test(
          str
        )
      ) {
        return "请输入一个有效的IP地址";
      }
    },

    specific: function(str) {
      let ipArr = str.split("."),
        ipHead = ipArr[0];

      if (ipArr[0] === "127") {
        return "以127开头的IP地址为环回地址，请重新输入";
      }
      if (Number(ipArr[0]) > 223) {
        return ipHead + " 为无效值，请输入一个1-223之间的值";
      }
    }
  }
};

export { valid };
