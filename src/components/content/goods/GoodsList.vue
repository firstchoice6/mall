<template>
	<div class="goods">
		<slot name="goodsListTitle"></slot>
		<goods-item v-for="(item, index) in goods" :key="index" :goods-item="item" />
	</div>
</template>

<script>
	import GoodsItem from './GoodsItem'
	export default {
		name: 'GoodsList',
		props: {
			goods:{
				type: Array,
				default() {
					return []
				}
			}
		},
		components: {
			GoodsItem
		}
	}
</script>

<style>
.goods {
	margin-top: 5px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 0 2px;
}

</style>
