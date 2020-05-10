<template>
	<div class="toast"  v-show='isShow'>
		<div>{{message}}</div>
	</div>
</template>

<script>
	export default {
		name: 'Toast',
		data() {
			return {
				message: '',
				isShow: false
			}
		},
		methods: {
			showToast(message,duration) {
				this.isShow = true
				this.message = message
				setTimeout(() => {
					this.isShow = false
					this.message = ''
				},duration)
			}
		}
	}
</script>

<style scoped>
	.toast {
		position: fixed;
		padding: 20px 30px;
		top: 50%;
		left: 50%;
		background-color: rgba(27,27,27,.7);
		transform: translate(-50%, -50%);
		border-radius: 10px;
		z-index: 999;
		text-align: center;
		color: #ddd;
	}
</style>
