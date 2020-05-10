<template>
	<div id="detail">
		<detail-nav-bar class="nav-bar" @titleClick="titleClick" ref="nav"/>
<!-- 		<toast :msg="toastMsg" :is-show="isShow" /> -->
		<Scroll class="content"
				ref="scroll"
				@scroll="contentScroll"
				:probe-type="3">
			<detail-swiper :top-images="topImages"/>
			<detail-base-info :goods="goods" />
			<detail-shop-info :shop-info="shopInfo" />
			<detail-goods-info :goods-info="goodsInfo" @imageLoad="imageLoad"/>
			<detail-goods-params ref="params" :goods-params="goodsParams"/>
			<detail-comment ref="comment" :goods-comment="goodsComment"/>
			<goods-list ref="recommend" :goods="recommends">
				<span slot="goodsListTitle" class="goodsListTitle">—— 看了又看 ——</span>
			</goods-list>
		</Scroll>
		<back-top @click.native="backClick" v-show="isShowBackTop"/>
		<detail-bottom-bar @addCart="addToCart"/>

	</div>
</template>

<script>
	// import
		import DetailNavBar from "./childComps/DetailNavBar"
		import DetailSwiper from "./childComps/DetailSwiper"
		import DetailBaseInfo from "./childComps/DetailBaseInfo"
		import DetailShopInfo from "./childComps/DetailShopInfo"
		import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
		import DetailGoodsParams from "./childComps/DetailGoodsParams"
		import DetailComment from "./childComps/DetailComment"
		import DetailBottomBar from "./childComps/DetailBottomBar"

		import Scroll from 'components/common/scroll/Scroll'
		import GoodsList from "components/content/goods/GoodsList"

		import {getDetail, Goods, ShopInfo, GoodsInfo, GoodsParams,getRecommend} from "network/detail"
		import {debounce} from "common/utils"
		import {backTopMixin} from "common/mixin"
		import {BACK_POSITION} from "common/const"

		import { mapActions } from 'vuex'

		// import Toast from 'components/common/toast/Toast'


	export default {
		name: 'Detail',
		mixins:[backTopMixin],
		data () {
			return {
				iid: null,
				topImages: [],
				goods: {},
				shopInfo: {},
				goodsInfo: {},
				goodsParams: {},
				goodsComment: {},
				recommends: [],
				themeTopY: [],
				getThemeTopY: null,
				currendIndex: 0,
				// toastMsg: '',
				// isShow: false
			}
		},
		created() {
			this.iid = this.$route.params.iid

			getDetail(this.iid).then(res => {
				const data = res.result
				this.topImages = data.itemInfo.topImages

				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
				this.shopInfo = new ShopInfo(data.shopInfo)

				this.goodsInfo = new GoodsInfo(data.detailInfo)

				this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule)

				if (data.rate.cRate !== 0) {
					this.goodsComment = data.rate.list[0]
					// console.log(this.goodsComment.user)
				}
			})

			getRecommend().then(res => {
				// console.log(res)
				this.recommends = res.data.list
			})

			this.getThemeTopY = debounce(() => {
				this.themeTopY = []
		    	this.themeTopY.push(0)
		    	this.themeTopY.push(this.$refs.params.$el.offsetTop)
		    	this.themeTopY.push(this.$refs.comment.$el.offsetTop)
		    	this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
		    	this.themeTopY.push(Number.MAX_VALUE)
		    	// console.log(this.themeTopY)
			})
		},
	    mounted() {
	    	// 监听item中图片加载完成
	    	const refresh = debounce(this.$refs.scroll.refresh)
	    	this.$bus.$on('detailItemImageLoad', () => {
	    		refresh()
	    	})
	    },
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			Scroll,
			DetailGoodsInfo,
			DetailGoodsParams,
			DetailComment,
			GoodsList,
			DetailBottomBar,
			// Toast
		},
		methods: {
			...mapActions(['addCart']),
			imageLoad() {
				this.$refs.scroll.refresh()
				this.getThemeTopY()
			},
			titleClick(index) {
				this.$refs.scroll.scrollTo(0, -this.themeTopY[index]+44, 500)
				// console.log(this.themeTopY)
			},
			contentScroll(position) {
				const positionY = -position.y
				let len = this.themeTopY.length
				for (let i = 0; i < len-1; i++) {
				 	if(this.currendIndex !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])) {
				 		this.currendIndex = i
				 		// console.log(i)
				 		this.$refs.nav.currentIndex = this.currentIndex
				 	}
				}

				this.isShowBackTop = (-position.y) > BACK_POSITION
			},
			addToCart() {
				// console.log('1234')
				// 获取购物车需要展示信息
				const product = {}
				product.img = this.topImages[0]
				product.title = this.goods.title
				product.desc = this.goods.desc
				product.price = this.goods.realPrice
				product.iid = this.iid

				// console.log(product)

				// this.$store.commit('addCart', product)
				// this.$store.dispatch('addCart', product).then(res => {
				// 	console.log(res)
				// })
				this.addCart(product).then(res => {
				// 	this.isShow = true
				// 	this.toastMsg = res

				// 	setTimeout(() => {
				// 		this.isShow = false
				// 		this.toastMsg = ''
				// 	},800
				// 	)
					this.$toast.showToast(res,1000)
				}

				)
			}
		}
	}
</script>

<style scoped>
	#detail {
		position: relative;
		z-index: 9;
		background-color: #fff;
		height: 100vh;
	}
	.nav-bar {
		position: relative;
		background-color: #fff;
		z-index: 11;
	}
	.content {
		height: calc(100% - 93px)
	}
	.goodsListTitle {
		width: 100%;
		text-align: center;
		margin: 10px 0;
		color: var(--color-tint);
	}
</style>
