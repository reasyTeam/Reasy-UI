module.exports = {  
  plugins: [
    require('autoprefixer')({
            "overrideBrowserslist": [
                "defaults",
                "not ie < 9",
                "last 20 versions",
                "> 1%",
                "iOS 7",
                "last 3 iOS versions"
            ]
    })/* ,
	require('postcss-pxtorem')({ 
		rootValue: 12,
	  unitPrecision: 5,
	  propList: ['*', '!border*', '!background*'],
	  selectorBlackList: [".no-tr-"], //不对这些样式进行转换
	  replace: true,
	  mediaQuery: false,
	  minPixelValue: 12
	}) */
  ]  
}