const path = require('path');
const webpack = require('webpack')
const root = path.resolve(__dirname, '..'); // 项目的根目录绝对路径
const CopyWebpackPlugin = require('copy-webpack-plugin'); //将特定文件输出指定位置
const {
    VueLoaderPlugin
} = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: ['./src/components/index.js']
    }, // 入口文件路径
    output: {
        path: path.join(root, 'dist/'), // 出口目录
        publicPath: process.env.NODE_ENV === 'publish' ? "/dist" : "/",
        chunkFilename: '[name].js?[chunkhash:5]',
        filename: 'reasy-ui-vue.js',
        libraryTarget: 'commonjs2',
        libraryExport: 'default',
        library: 'reasy-ui-vue'
    },
    resolve: {
        alias: { // 配置目录别名
            // 在任意目录下require('components/example') 相当于require('项目根目录/src/components/example')
            'vue': 'vue/dist/vue.js', //解决 [Vue warn]: You are using the runtime-only build of Vue
            '@': path.resolve('src')
        },
        extensions: ['.js', '.vue'], // 引用js和vue文件可以省略后缀名

    },

    module: { // 配置loader
        rules: [{ //npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
                test: /\.(scss|css)$/,
                use: [
                    //"vue-style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    /*  {
					 loader: 'css-loader',
					 options: {
					     modules: true,
					   importLoaders: 1
					 } 
				   }, */
                    'postcss-loader',
                    {
						loader: 'sass-loader',
						options: {
                            outputStyle: 'expanded'
                        }
					},
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            // Provide path to the file with resources
                            resources: './src/css/vars.scss',
                        },
                    }
                ],
                exclude: /node_modules/
            },

            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    publicPath: "/img/",
                    outputPath: "/img/",
                    name: '[name].[ext]?[hash:7]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader',
                options: {
                    publicPath: "/fonts/",
                    outputPath: "/fonts/",
                    name: 'v-[name].[ext]?[hash:7]'
                }
            },

            {
                test: /\.js$/, //匹配所有.js文件
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/ //排除node_module下的所有文件
            },
            {
                test: /\.vue$/, //匹配所有.js文件

                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader',
                        //css: 'style-loader',
                        scss: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    },
                    extractCSS: true
                }
            }
        ]

    },
    optimization: { //webpack 4
        minimize: false
    },
    devtool: false,
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css?[contenthash:5]',
            chunkFilename: '[id].css'
        }),
        new VueLoaderPlugin()
    ]
};