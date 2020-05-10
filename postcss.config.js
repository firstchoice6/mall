module.exports = {
	plugins: {
		autoprefixer: {},
		"postcss-px-to-viewport" :{
			// 视口宽度，对应设计稿的宽度
			viewportWidth: 375,
			// 视口高度
			viewportHeight: 667,
			// 指定`px`转换伪视窗单位值的小数位数（很多时候无法整除）
			unitPrecision: 5,
			// 指定需要转换成的视窗单位，建议vw
			viewportUnit: 'vw',
			// 指定不需要转化的类
			selectorBlackList: ['ignore','tab-bar','tab-bar-item'],
			// 小于或等于1px的不转化为视窗单位
			minPixelValue: 1,
			// 允许在媒体查询中转化px
			mediaQuery: false
		}
	}
}