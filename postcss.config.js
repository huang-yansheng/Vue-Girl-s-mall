module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,//视窗的宽度，对应的是我们设计稿的宽度 
      viewportHeight: 667,//视窗的高度，对应的是我们设计稿的高度（也可以不配置）
      unitPrecision: 5,//指定'px'转换为视窗单位值时的小数点后几位（有时候无法整除）
      viewportUnit: 'vw',//转成的单位，建议为vw
      selectorBlackList: ['ignore','tab-bar','tab-bar-item'],//指定不需要转换的类
      minPixelValue: 1,//小于或等于1px的不转换成视窗单位
      mediaQuery: false//允许在媒体查询中转换"px"
    }
  }
}
