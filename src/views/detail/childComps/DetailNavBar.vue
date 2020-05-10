<template>
	<nav-bar>
		<div slot="left" class="left" @click="backClick">
			<img src="~assets/img/common/back.svg" >
		</div>
		<div slot="center" class="title">
			<div v-for="(item, index) in titles" 
			:key="index" 
			class="title-item"
			:class="{active: index === currentIndex}"
			@click="titleClick(index)">{{item}}</div>
		</div>
	</nav-bar>


</template>

<script>
	import NavBar from "components/common/navbar/NavBar"
	export default {
		name: 'DetailNavBar',
		data () {
			return {
				titles: ['商品', '参数', '评论', '推荐'],
				currentIndex: 0
			}
		},
		components: {
			NavBar
		},
		methods: {
			titleClick(index) {
				this.currentIndex = index
				this.$emit('titleClick',index)
			},
			backClick() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.title {
		display: flex;
	}
	.title-item {
		flex: 1;
		font-size: 13px;
	}

	.active {
		color: var(--color-tint)
	}
	.left img {
		margin-top: 12px;
		margin-left: 6px;
	}
</style>
