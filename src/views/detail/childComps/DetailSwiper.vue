<template>
	<swiper >
		<swiper-item v-for="(item, index) in topImages" :key="index" class="swiper-item">
			<img :src="item">
		</swiper-item>
	</swiper>
	
</template>

<script>
	import {Swiper, SwiperItem} from "components/common/swiper"
	export default {
		name: 'DetailSwiper',
		props:{
			topImages: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data () {
			return {

			}
		},
		components: {
			Swiper,
			SwiperItem
		}
	}
</script>

<style scoped>
	.swiper-item {
		height: 250px;
		overflow: hidden;
	}
</style>
