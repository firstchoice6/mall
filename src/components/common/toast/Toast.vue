<template>
	<div class="toast"  v-show='isShow'>
        <img :src="path">
		<div>{{message}}</div>
	</div>
</template>

<script>
	export default {
		name: 'Toast',
		data() {
			return {
				message: '',
				isShow: false,
                path: ''
			}
		},
		methods: {
			showToast(message,duration,path) {
				this.isShow = true
				this.message = message
                this.path = path
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
    .toast img {
        width: 40px
    }
</style>
