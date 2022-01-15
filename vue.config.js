const path = require("path");
const multer = require("multer");
const upload = multer({ dest: "upload/" });

function resolve(dir) {
  return path.resolve(__dirname, dir);
}
// vue.config.js
module.exports = {
  // 选项...
  pages: {
    index: {
      entry: "src/main.js",
      title: "reasy-ui"
    }
  },
  outputDir: "docs",
  publicPath: "./",
  devServer: {
    //index: "falsy",
    setup: app => {
      app.post("/cgi-bin/**", upload.single("file"), function(req, res) {
        console.log("req.body========", req.body);
        console.log("req.file========", req.file);
        setTimeout(() => {
          res.send({ status: "success" });
        }, 1000);
      });
    },
    after: function() {
      console.log("########################  after");
    }
  },
  css: {
    loaderOptions: {
      scss: {
        // eslint-disable-next-line prettier/prettier
        prependData: `@import "src/scss/varibles-tenda.scss";`
      }
    },
    extract: {
      filename: "css/[name]_[chunkhash:8].css",
      chunkFilename: "css/[name]_[chunkhash:8].css"
    }
  },
  filenameHashing: false,
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  }
};
