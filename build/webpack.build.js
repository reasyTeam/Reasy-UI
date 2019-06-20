const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(baseConfig, {
/* 	module: {
		rules: [{
			enforce: 'pre',
			test: /\.(js|vue)$/,
			loader: 'eslint-loader',
			exclude: /node_modules/
		  }]
	}, */
    plugins: [
        new CleanWebpackPlugin(["dist"], {
            root: path.join(__dirname, "../")
        }),

         /* new UglifyJsPlugin({

            minify(file, sourceMap) {

                const extractedComments = [];
				
                // Custom logic for extract comments
                const { error, map, code, warnings } = require('uglify-js') // Or require('./path/to/uglify-module')
                    .minify(file, {
                        mangle: {
                            eval: true,
                            toplevel: true,

                        },

                        parse: {
                            bare_returns: false, //support top level return statements
                            html5_comments: true,
                            shebang: false
                        },

                        compress: { //https://www.npmjs.com/package/uglify-js#parse-options
                            inline: 0, //false -- same as 0 0 -- disabled inlining  1 -- inline simple functions  2 -- inline functions with arguments  3 -- inline functions with arguments and variables  true -- same as 3
                            arguments: false, //replace arguments[index] with function parameter name whenever possible.
                            booleans: false, //various optimizations for boolean context, for example !!a ? b : c → a ? b : c
                            collapse_vars: true, // Collapse single-use non-constant variables, side effects permitting.
                            comparisons: true, //apply certain optimizations to binary nodes, e.g. !(a <= b) → a > b, attempts to negate binary nodes, e.g. a = !b && !c && !d && !e → a=!(b||c||d||e) etc.
                            conditionals: true, //apply optimizations for if-s and conditional expressions
                            dead_code: true, //remove unreachable code
                            directives: true, //remove redundant or non-standard directives
                            drop_console: true, //
                            drop_debugger: true,
                            evaluate: true, //attempt to evaluate constant expressions
                            expression: false, //Pass false to preserve completion values from terminal statements without return, e.g. in bookmarklets.
                            global_defs: {}, //
                            hoist_funs: false, //hoist function declarations
                            hoist_props: false, //
                            hoist_vars: false, //hoist var declarations (this is false by default because it seems to increase the size of the output in general)
                            if_return: false, //optimizations for if/return and if/continue
                            join_vars: false, // join consecutive var statements
                            keep_fargs: false, //Prevents the compressor from discarding unused function arguments. You need this for code which relies on Function.length.
                            keep_fnames: false, //Pass true to prevent the compressor from discarding function names. Useful for code relying on Function.prototype.name
                            keep_infinity: false, //Pass true to prevent Infinity from being compressed into 1/0, which may cause performance issues on Chrome.
                        },


                        ie8: false,
                        nameCache: null, // or specify a name cache object


                        warnings: false,

                    });

                return { error, map, code, warnings, extractedComments };
            }

        }) */
    ]
})