const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const loader = require("sass-loader");

const isProd = process.env.NODE_ENV === "production";

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: "./demo/index.js",
  output: {
    path: path.resolve(process.cwd(), "./docs/"),
    publicPath: process.env.CI_ENV || "",
    filename: "[name].[hash:7].js",
    chunkFilename: isProd ? "page/[name].[hash:7].js" : "[name].js"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      '@': path.resolve(__dirname, "../src"),
      packages: path.resolve(__dirname, "../packages"),
      demo: path.resolve(__dirname, "../demo")
    },
    modules: ["node_modules"]
  },
  devServer: {
    host: "127.0.0.1",
    port: 10001,
    publicPath: "/",
    hot: true
  },
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(vue|js)$/,
        exclude: /node_modules|docs|src/,
        loader: "eslint-loader"
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              prependData: `@import "src/scss/vars.scss";`
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, "./md-loader/index.js")
          }
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: "url-loader?limit=8192&name=img/[hash:8].[name].[ext]"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./demo/index.tpl",
      filename: "./index.html",
      favicon: "./public/favicon.ico",
      title: "reasy-ui-vue"
    }),
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "process.env.FAAS_ENV": JSON.stringify(process.env.FAAS_ENV)
    }),
    new webpack.LoaderOptionsPlugin({
      vue: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    })
  ],
  optimization: {
    minimizer: []
  },
  devtool: "#eval-source-map"
};

if (isProd) {
  webpackConfig.externals = {
    vue: "Vue",
    "vue-router": "VueRouter",
    "highlight.js": "hljs"
  };
  webpackConfig.plugins.push(
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:7].css"
    })
  );
  webpackConfig.optimization.minimizer.push(
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: false
    }),
    new OptimizeCSSAssetsPlugin({})
  );
  webpackConfig.optimization.splitChunks = {
    cacheGroups: {
      vendor: {
        test: /[\\/]src[\\/]/,
        name: "reasy-ui-vue",
        chunks: "all"
      }
    }
  };
  webpackConfig.devtool = false;
}

module.exports = webpackConfig;
