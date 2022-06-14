const path = require("path");
const root = path.resolve(__dirname, ".."); // 项目的根目录绝对路径
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { getConfig } = require("./config");
const { variables } = getConfig();

module.exports = {
  entry: {
    style: "./src/scss/index.scss",
    "style-full": "./src/scss/index-full.scss"
  }, // 入口文件路径
  output: {
    path: path.join(root, "theme"), // 出口目录
    filename: "[name].js",
    publicPath: "/"
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
      "@": path.resolve("src")
    }
  },

  module: {
    // 配置loader
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              prependData: variables //`@import "src/scss/varibles.scss";`
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
    minimize: false
  },
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
