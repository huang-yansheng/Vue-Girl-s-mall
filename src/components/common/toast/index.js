import Toast  from './Toast'

const toast = {}

//install函数默认接受Vue实例作为参数
toast.install = function(Vue){
  //1、创建组件构造器,Toast是一个包含组件选项的对象
  const toastContrustor = Vue.extend(Toast)

  //2、通过new的方式，根据组件构造器，可以创建一个组件对象Toast实例
  const toast = new toastContrustor()

  //3、将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  //4、toast.$el对应的就是包含Toast组件的div元素
  document.body.appendChild(toast.$el)

  //5、我们可以在vue的原型上创建这个对象
  Vue.prototype.$toast = toast
}


export default toast
