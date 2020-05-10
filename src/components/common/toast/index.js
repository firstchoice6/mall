import Toast from './Toast'
const obj = {}
obj.install = function(Vue) {

	// console.log('toast安装成功')

	// 创建组件构造器
	const toastConstrustor = Vue.extend(Toast)
	// new的方式,根据组件构造器,可以创建出来一个组件对象
	const toast = new toastConstrustor()
	// 将组件对象手动挂载到某一元素上
	toast.$mount(document.createElement('div'))
	// toast.$el对应的就是div
	document.body.appendChild(toast.$el)

	Vue.prototype.$toast = toast
}

export default obj