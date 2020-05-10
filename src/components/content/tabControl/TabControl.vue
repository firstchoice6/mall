<template>
	<div class="tab-control">
		<div v-for="(item, index) in titles"
		:key="index"
		:class="{active: currentIndex === index}"
		class="tab-control-item"
		@click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabControl',
		props: {
			titles:{
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			itemClick(index) {
				this.currentIndex = index
				this.$emit('tabClick', index)
			}
		}
	}
</script>

<style>
	.tab-control {
		display: flex;
		text-align: center;
		line-height: 40px;
		height: 40px;
		font-size: 15px;
		background-color: #fff;
	}
	.tab-control-item {
		flex: 1;
		
	}
	.tab-control-item span {
		padding: 5px 10px;
	}
	.active {
		color: var(--color-tint);
		

	}
	.active span {
		border-bottom: 2px solid var(--color-tint);
	}

</style>
