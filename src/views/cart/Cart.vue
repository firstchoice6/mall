<template>
    <div id="cart">
        <nav-bar class="cart-nav">
            <div slot="center">购物车({{length}})</div>
        </nav-bar>
        <scroll class="content">
        	<div v-show="!length" class="empty">
				<img src="~assets/img/cart/cartEmpty.png">
				<div>购物车里空空如也<br> 赶快去逛逛吧</div>
        	</div>
        	<cart-list />
        	<goods-list ref="recommend" :goods="recommends">
				<span slot="goodsListTitle" class="goodsListTitle">—— 为你推荐 ——</span>
			</goods-list>
        </scroll>
        <cart-bottom-bar />

    </div>
</template>
<script>
	import NavBar from 'components/common/navbar/NavBar'
	import Scroll from 'components/common/scroll/Scroll'
	import GoodsList from "components/content/goods/GoodsList"
	import CartList from './childComps/CartList'
	import CartBottomBar from './childComps/CartBottomBar'

	import { mapGetters } from 'vuex'
	import {getRecommend} from "network/detail"

	export default {
	    name: "Cart",
	    data() {
	    	return {
	    		recommends: []
	    	}
	    },
	    components: {
	        NavBar,
	        CartList,
	        Scroll,
	        GoodsList,
	        CartBottomBar
	    },
	    computed: {
	        // ...mapGetters(['cartLength','cartList'])
	        ...mapGetters({
	            length: 'cartLength'
	        })
	    },
	    created() {
	    	getRecommend().then(res => {
				// console.log(res)
				this.recommends = res.data.list
			})
	    }
	}

</script>
<style scoped>

	.cart-nav {
	    background-color: var(--color-tint);
	    color: #fff;
	}
	.empty {
		padding: 30px 0;
		/*margin: 30px 0;*/
	}
	.empty img {
		margin: 0 auto;
		display: block;
	}
	.empty div {
		margin: 20px auto;
		text-align: center;
		line-height: 20px;
	}
	.content {
		height: calc(100% - 93px);
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		overflow: hidden;
		background-color: #f2f2f2;
	}
	.goodsListTitle {
		width: 100%;
		text-align: center;
		margin: 10px 0;
		color: var(--color-tint);
	}
</style>
