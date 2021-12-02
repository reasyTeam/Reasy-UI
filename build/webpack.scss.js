const path = require("path");
const root = path.resolve(__dirname, ".."); // 项目的根目录绝对路径
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const config = require("./scss.js");

// 文件拷贝，将主题相关文件拷贝到theme文件夹

// end

module.exports = {
  entry: config, // 入口文件路径
  output: {
    path: path.join(root, "dist/lib"), // 出口目录
    filename: "[name]/index.js",
    publicPath: "/"
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
        //npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
        test: /\.(scss|css)$/,
        use: [
          //"vue-style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              prependData: `@import "src/scss/varibles.scss";`
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
        options: {
          publicPath: "../../fonts/",
          outputPath: "../fonts/",
          name: "v-[name].[ext]?[hash:7]"
        }
      }
    ]
  },
  optimization: {
    //webpack 4
    minimize: false
  },
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]/style.css",
      chunkFilename: "[id].css"
    })
  ]
};
