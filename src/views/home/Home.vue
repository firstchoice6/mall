<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<tab-control :titles="['流行','新款','精选']"
						  @tabClick="tabClick"
						  ref="tabControl2"
						  class="tabControl"
						  v-show="isTabFixed"/>
		<scroll class="content"
				ref="scroll"
				:probe-type="3"
				@scroll="contentScroll"
				:pull-up-load="true"
				@pullingUp="loadMore">
			<home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
			<home-recommend-view :recommends="recommends"/>
			<home-feature-view />
			<tab-control :titles="['流行','新款','精选']"
						  @tabClick="tabClick"
						  ref="tabControl1"/>
			<goods-list :goods="showGoods"/>
		</scroll>
		<back-top @click.native="backClick" v-show="isShowBackTop"/>

	</div>

</template>
<script>
	// import
		import HomeSwiper from "./childComps/HomeSwiper"
		import HomeRecommendView from "./childComps/HomeRecommendView"
		import HomeFeatureView from "./childComps/HomeFeatureView"

		import NavBar from "components/common/navbar/NavBar"
		import TabControl from "components/content/tabControl/TabControl"
		import GoodsList from "components/content/goods/GoodsList"
		import Scroll from "components/common/scroll/Scroll"


		import {getHomeMultidata,getHomeGoods} from "network/home"
		import {debounce} from "common/utils"
		import {backTopMixin} from "common/mixin"
		import {BACK_POSITION} from "common/const"


	export default {
	    name: "Home",
	    mixins:[backTopMixin],
	    data() {
	    	return {
	    		banners: [],
	    		recommends: [],
	    		goods:{
	    			'pop': {page: 0, list:[]},
	    			'new': {page: 0, list:[]},
	    			'sell': {page: 0, list:[]}
	    		},
	    		currentType: 'pop',
	    		tabOffsetTop: 0,
	    		saveY: 0,
	    		isTabFixed: false
	    	}
	    },
	    computed: {
	    	showGoods() {
	    		return this.goods[this.currentType].list
	    	}
	    },
	    components: {
	        NavBar,
	        HomeSwiper,
	        HomeRecommendView,
	        HomeFeatureView,
	        TabControl,
	        GoodsList,
	        Scroll
	    },
	    created() {
	    	this.getHomeMultidata()
	    	this.getHomeGoods('pop')
	    	this.getHomeGoods('new')
	    	this.getHomeGoods('sell')
	    },
	    mounted() {
	    	// 监听item中图片加载完成
	    	const refresh = debounce(this.$refs.scroll.refresh)
	    	this.$bus.$on('homeItemImageLoad', () => {
	    		refresh()
	    	})
	    	// 获取tabcontrol的offsetTop（组件通过$el获取）

	    },
	    activated() {
            this.$refs.scroll.refresh()
	    	this.$refs.scroll.scrollTo(0, this.saveY, 0)    	
	    },
	    deactivated() {
	    	this.saveY = this.$refs.scroll.getScrollY()
	    },
	    methods: {
	    	// 网络请求相关方法
	    	getHomeMultidata() {
	    		getHomeMultidata().then(res =>{
		    		this.banners = res.data.banner.list
		    		this.recommends = res.data.recommend.list
		    	})
	    	},
	    	getHomeGoods(type) {
	    		const page = this.goods[type].page + 1
	    		getHomeGoods(type,page).then(res => {
	    			this.goods[type].list.push(...res.data.list)
	    			this.goods[type].page += 1
		    		// console.log(res.data.list)
		    		this.$refs.scroll.finishPullUp()
		    	})
	    	},
	    	// 事件监听相关方法
	    	tabClick(index) {
	    		switch(index) {
	    			case 0:
	    				this.currentType = 'pop'
	    				break
	    			case 1:
	    				this.currentType = 'new'
	    				break
	    			case 2:
	    				this.currentType = 'sell'
	    				break
	    		}
	    		this.$refs.tabControl1.currentIndex = index
	    		this.$refs.tabControl2.currentIndex = index
	    	},
	    	contentScroll(position) {
	    		// 判断backTop是否显示
	    		this.isShowBackTop = (-position.y) > BACK_POSITION
	    		// 决定tabControl是否吸顶（position: fixed）
	    		this.isTabFixed = (-position.y) > this.tabOffsetTop
	    	},	    	
	    	loadMore() {
	    		this.getHomeGoods(this.currentType)
	    	},
	    	swiperImageLoad() {
	    		this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
	    	}

	    }
	}

</script>
<style scoped>
	#home {
		/*padding-top: 44px;*/
		height: 100vh;
	}
	.home-nav {
		background-color: var(--color-tint);
		color: #fff;
	}
	.tab-control {
		position: relative;
		z-index: 9;
	}
	.content {
		height: calc(100% - 93px);
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		overflow: hidden;
	}
</style>
