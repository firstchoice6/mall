<template>
	<div class="back-top">
		<img src="~assets/img/common/top.png" />
	</div>
</template>

<script>
	export default {
		name: 'BackTop'
	}
</script>

<style scoped>
	.back-top {
		position: fixed;
		right: 10px;
		bottom: 60px;
	}
	.back-top img {
		z-index: 11;
		width: 50px;
		height: 50px;
	}
</style>
