<template>
	<scroll id="tab-menu">
		<div class="menu-list">
            <div v-for="(item, index) in dataList"
            	:key="index"
            	class="menu-list-item"
            	:class="{active: index===currentIndex}"
            	@click="listItemClick(index)">
            	{{item.title}}
        	</div>
         </div>
     </scroll>
</template>

<script>
	import Scroll from 'components/common/scroll/Scroll'
	export default {
		name: 'LeftSideBar',
		data () {
			return {
				currentIndex: 0
			}
		},
		props: {
			dataList: {
				type: Array,
				default() {
					return []
				}
			}
		},
		components: {
			Scroll
		},
		methods: {
			listItemClick(index) {
				this.currentIndex = index;
				this.$emit('selectItem',index)
			}
		}

	}
</script>

<style scoped>
	#tab-menu {
		background-color: #f6f6f6;
		/*width: 25%;*/
        position: absolute;
        top: 44px;
        bottom: 49px;
        /*left: 0;*/
        height: 100% - 49px;
	}
	.menu-list-item {
		text-align: center;
		padding: 10px 10px;
		border-bottom: 1px solid #f1f1f1;
	}
	.active {
		border-left: 3px solid var(--color-tint);
		color: var(--color-tint);
		background-color: #fff;
		border-bottom: none;
		padding: 12px 10px;
	}
</style>
