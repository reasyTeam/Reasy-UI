const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const config = require("./components.js");

module.exports = {
  noCss: true,
  //解决打包后出现多个Vue的问题
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue"
    }
  },
  entry: config, // 入口文件路径
  output: {
    chunkFilename: "[name].js?[chunkhash:5]",
    filename: "[name]/index.js",
    libraryTarget: "commonjs2",
    libraryExport: "default"
  },
  resolve: {
    alias: {
      // 配置目录别名
      // 在任意目录下require('components/example') 相当于require('项目根目录/src/components/example')
      vue: "vue/dist/vue.js", //解决 [Vue warn]: You are using the runtime-only build of Vue
      "@": path.resolve("src")
    },
    extensions: [".js", ".vue"] // 引用js和vue文件可以省略后缀名
  },

  module: {
    // 配置loader
    rules: [
      {
        test: /\.js$/, //匹配所有.js文件
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/ //排除node_module下的所有文件
      },
      {
        test: /\.vue$/, //匹配所有.js文件
        loader: "vue-loader",
        options: {
          loaders: {
            js: "babel-loader"
          },
          extractCSS: true
        }
      }
    ]
  },
  devtool: false,
  plugins: [new VueLoaderPlugin(), new UglifyJsPlugin()]
};
