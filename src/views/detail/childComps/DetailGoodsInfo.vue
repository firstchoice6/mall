<template>
	<div id="goods-info" v-if="Object.keys(goodsInfo).length !== 0">
		<p class="goods-desc">{{goodsInfo.desc}}</p>
		<div class="goods-key">{{goodsInfo.key}}</div>
		<img v-for="(item, index) in goodsInfo.img"
			:src="item" 
			:key="index" 
			class="goods-detail-img" 
			@load="imgLoad" />
	</div>
	
	
</template>

<script>
	export default {
		name: 'DetailGoodsInfo',
		data () {
			return {
				counter: 0,
				imagesLength: 0
			}
		},
		props: {
			goodsInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			imgLoad() {
				if(++this.counter === this.imagesLength) {
					this.$emit('imageLoad')
				}
			}
		},
		watch: {
			goodsInfo() {
				this.imagesLength = this.goodsInfo.img.length
			}
		}
	}
</script>

<style scoped>
	#goods-info {
		border-top: 5px solid #f2f5f8;
		padding: 20px 5px;
		border-bottom: 5px solid #f2f5f8;
	}
	.goods-desc {
		margin: 0 15px;
		padding: 15px 0;
		border-top: 1px solid #a3a3a5;
		border-bottom: 1px solid #a3a3a5;
		font-size: 14px;
		text-indent: 20px;
	}
	.goods-key {
		margin: 10px 0 10px 15px;
		color: #333;
		font-size: 15px;
	}
	.goods-detail-img {
		width: 100%;
	}
</style>
