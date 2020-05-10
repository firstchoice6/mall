import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-type'

export default {
	addCart(context, payload) {
		// let oldProduct = null
		// for(let item of state.cartList){
		// 	if(item.iid === payload.iid) {
		// 		oldProduct = item
		// 	}
		// }
		return new Promise((resolve, reject) => {
			let oldProduct = context.state.cartList.find(item =>  item.iid === payload.iid)
			// 判断oldProduct
			if (oldProduct) {
				// oldProduct.count += 1
				context.commit(ADD_COUNTER, oldProduct)
				resolve('再次添加成功')
			} else {
				payload.count = 1
				// state.cartList.push(payload)
				context.commit(ADD_TO_CART, payload)
				resolve('添加成功')
			}
		})
		// 查找之前数组中是否有该商品

	}
}
