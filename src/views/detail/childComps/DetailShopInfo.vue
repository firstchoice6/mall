<template>
	<div id="shop-info">
		<a :href="shopInfo.shopLink">
			<div class="shop-title">
				<img :src="shopInfo.shopLogo" >
				<span class="shop-name">{{shopInfo.shopName}}</span>
			</div>
		</a>
		<div class="shop-info">
			<div class="sales">{{shopInfo.sales | sellFilter}}<div class="info-text">总销量</div></div>
			<div class="goods-count">
				{{shopInfo.goodsCount}}
				<a :href="shopInfo.shopAllGoods">
					<div class="info-text">全部宝贝</div>
				</a>
			</div>
			<div class="score">
				<div v-for="(item, index) in shopInfo.score" :key="index">
					<span>{{item.name}}</span>
					<span class="score-default" :class="{'score-better': item.isBetter}">{{item.score}}</span>
					<span class="is-high" :class="{'better-more': item.isBetter}">{{item.isBetter ? '高': '低'}}</span>
				</div>
			</div>
		</div>
		<a :href="shopInfo.shopLink">
			<div class="shop-link">进店逛逛</div>
		</a>
	</div>
	
</template>

<script>
	export default {
		name: 'DetailShopInfo',
		filters: {
			sellFilter: function(value) {
				if(value < 10000) return value
				return (value / 10000).toFixed(1) + '万'		
			}
		},
		props: {
			shopInfo: {
				type: Object,
				default () {
					return {}
				}
			}
		}

	}
</script>

<style scoped>
	#shop-info {
		padding: 0 8px;
		margin: 20px 0;
	}

	.shop-title img {
		height: 50px;
		border-radius: 50%;
		border: 1px solid rgba(150, 150, 150, 0.3);
	}
	.shop-title .shop-name {
		margin-left: 10px;
		position: absolute;
		line-height: 50px;
	}
	.shop-info {
		display: flex;
		height: 90px;
	}

	.shop-info .sales {
		flex: 1;
		margin: 20px 0;
		text-align: center;
	}
	.info-text {
		margin-top: 5px;
	}
	.shop-info .goods-count {
		flex: 1;
		margin: 20px 0;
		text-align: center;
		border-right: 1px solid #ccc;
	}
	.shop-info .score {
		flex: 2;
		line-height: 30px;

	}
	.shop-info div div {
		font-size: 12px;
	}
	.score div {
		margin-left: 20px;
		height: 30px;
		line-height: 30px;
	}
	.score-default {
		padding: 0 10px;
		width: 40px;
		display: inline-block;
		color: #5ea732;
	}
	.score-better {
		color: #f13e3a;
	}
	.is-high {
		color: #fff;
		background-color: #5ea732;
	}	
	.better-more {
		background-color: #f13e3a;
	}

	.shop-link {
		margin: 10px auto;
		background-color: #f3f3f3;
		text-align: center;
		padding: 5px 0px;
		width: 45%;
		border-radius: 5px;
	}
</style>
