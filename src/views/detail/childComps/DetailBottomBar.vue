<template>
<div id="bottom-bar">
	<div class="bar-item left">
		<div>
			<i class="icon service"></i>
			<span>客服</span>
		</div>
		<div>
			<i class="icon shop"></i>
			<span>店铺</span>
		</div>
		<div>
			<i class="icon collect"></i>
			<span>收藏</span>
		</div>
	</div>
	<div class="bar-item right">
		<span class="add-in" @click="addToCart">加入购物车</span>
		<span class="buy-now">立即购买</span>
	</div>
</div>
</template>

<script>
	export default {
		name: 'DetailBottomBar',
		methods: {
			addToCart() {
				this.$emit('addCart')
			}
		}
	}
</script>

<style scoped>
	#bottom-bar {
		border-top: 1px solid rgba(100,100,100,.1);
		position: relative;
		background-color: #fff;
		height: 49px;
		/*bottom: 49px;*/
		display: flex;
		font-size: 14px;
		text-align: center;
		color: #333;
	}
	.bar-item{
		flex: 1;
		display: flex;
	}
	.left div {
		display: inline-block;
		flex: 1;
	}
	.icon {
		display: block;
		width: 22px;
		height: 22px;
		background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
		margin: 2px auto;
	}
	.left .service {
		background-position: 0 -52px;
	} 
	.left .shop {
		background-position: 0 -98px;
	}
	#bottom-bar .right {
		font-size: 15px;
		line-height: 49px;
	}
	.right .add-in {
		flex: 1;
		background-color: #fad810;
	}
	.right .buy-now {
		flex: 1;
		background-color: var(--color-tint);
	}
</style>
