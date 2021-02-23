module.exports = {
	publicPath:'/',
	configureWebpack:{//需要在这个对象中配置
		resolve:{
			alias:{
				//内部已经配置过 @ = src了
				"assets":'@/assets',
				"common":"@/common",
				"components":"@/components",
				"network":"@/network",
				"views":"@/views",
        "store":"@/store"
			}
		}
	},
    css:{
      loaderOptions:{
        sass:{
          prependData:`@import 'assets/scss/one.scss';`
        }
      }
    }
}
