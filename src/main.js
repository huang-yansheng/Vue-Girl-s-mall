import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'


import toast from 'components/common/toast/index.js'

//安装使用vue-lazyload插件
//可以对vue-lazyload进行配置
Vue.use(VueLazyload,{
  //占位符设置
  loading: require('./assets/img/common/loading.gif')
})

//安装toast插件,本质上会调用toast对象的install函数
Vue.use(toast)

//解决移动端300ms延迟
FastClick.attach(document.body)


//创建一个$bus充当事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
