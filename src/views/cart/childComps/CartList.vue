<template>
	<div class="cart">
			<cart-list-item v-for="(item, index) in cartList" :key="index" :product="item"/>
	</div>

</template>

<script>
	import CartListItem from './CartListItem'

	import { mapGetters } from 'vuex'

	export default {
		name: 'CartList',
		data () {
			return {

			}
		},
		components: {
			CartListItem
		},
		computed: {
			...mapGetters(['cartList'])
		}
	}
</script>

<style scoped>
	.cart {
		height: calc(100% - 44px - 49px - 40px) ;
		padding: 0 10px;
	}

</style>
