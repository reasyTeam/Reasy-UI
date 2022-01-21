function getConfig(theme) {
  if (theme === undefined) {
    theme = process.env.THEME;
  }

  let outPath = "/dist",
    isProd = process.env.NODE_ENV === "production";
  switch (theme) {
    case "trade":
      outPath = "/dist/trade";
      break;
    case "ipcom":
      outPath = "/dist/ipcom";
      break;
    default:
      theme = "tenda";
  }

  return {
    isProd,
    variables: `@import "src/scss/varibles-${theme}.scss";`,
    outPath
  };
}

module.exports = {
  getConfig
};
