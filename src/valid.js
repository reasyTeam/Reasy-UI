const valid = {
  num: function (str, min, max) {
    if (!/^([-0-9])?([0-9]+)$/.test(str)) {
      return _("Should be an integer");
    }
    if (typeof min === "number" && typeof max === "number") {
      if (parseInt(str, 10) < min || parseInt(str, 10) > max) {
        return _("Range: %s - %s", [min, max]);
      }
    }
  },
  ip: {
    all: function (str) {
      let ret = this.specific(str);

      if (ret) {
        return ret;
      }

      if (!/^([1-9]|[1-9]\d|1\d\d|2[0-1]\d|22[0-3])\.(([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){2}([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/.test(str)) {
        return _("Please enter a valid IP address");
      }
    },

    specific: function (str) {
      let ipArr = str.split("."),
          ipHead = ipArr[0];

      if (ipArr[0] === "127") {
        return _("An IP address that begins with 127 is a loopback IP address. Specify another valid value from 1 to 223");
      }
      if (Number(ipArr[0]) > 223) {
        return _("An IP address cannot start with %s. Specify a value from 1 to 223", ipHead);
      }
    }
  }
};

export { valid };
