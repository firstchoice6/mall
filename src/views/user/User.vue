<template>
	<div class="user">
		<nav-bar class="nav-bar">
			<div slot="center">我的档案</div>
		</nav-bar>
		<div class="login">
			<img src="~assets/img/user/icon.jpg" class="icon">
			<div>
				<span>登录 / 注册</span><br>
				<span  class="login-desc"><img src="~assets/img/user/phone.svg">暂无绑定手机号</span>
			</div>
			<img src="~assets/img/common/right-arrow.svg" class="float-right img">
		</div>
		<div class="detail">
			<div class="border">
				<span class="count">0.00</span> 元
				<div>我的余额</div>
			</div>
			<div class="border">
				<span class="count">0</span> 个
				<div>我的余额</div>
			</div>
			<div>
				<span class="count">0</span> 分
				<div>我的积分</div>
			</div>
		</div>
		<div class="options">
			<div>
				<img src="~assets/img/user/message.svg">我的消息
				<img src="~assets/img/common/right-arrow.svg" class="float-right">
			</div>
			<div>
				<img src="~assets/img/user/cube.svg">我的收藏
				<img src="~assets/img/common/right-arrow.svg" class="float-right">
			</div>
		</div>
		<div class="options border-b">
			<div>
				<img src="~assets/img/user/coin.svg">积分商城
				<img src="~assets/img/common/right-arrow.svg" class="float-right">
			</div>
			<div>
				<img src="~assets/img/user/vip.svg">会员卡
				<img src="~assets/img/common/right-arrow.svg" class="float-right">
			</div>
			<div>
				<img src="~assets/img/user/cart.svg">我的购物车
				<img src="~assets/img/common/right-arrow.svg" class="float-right">
			</div>
		</div>
		<div class="options border-b">
			<div>
				<img src="~assets/img/user/bag.svg">下载购物App
				<img src="~assets/img/common/right-arrow.svg" class="float-right">
			</div>
			<div>
				<img src="~assets/img/user/setting.svg">设置
				<img src="~assets/img/common/right-arrow.svg" class="float-right">
			</div>
	 	</div>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	export default {
		name: "User",
		components: {
			NavBar
		}
	}
</script>

<style scoped>

	.nav-bar {
		background-color: var(--color-tint);
		color: #fff;
	}
	.login {
		background-color: var(--color-tint);
		padding: 8px 20px;
		color: #fff;
		margin-bottom: 10px;
	}
	.login .img {
		width: 20px;
		padding-top: 20px;
	}
	.login .icon {
		height: 60px;
		border-radius: 50%;
		margin-right: 30px;
	}

	.login .login-desc {
		font-size: 12px;
	}
	.login div {
		display: inline-block;
		/*font-size: 12px;*/
		position: relative;
		top: -15px;
	}
	.login div img {
		height: 20px;
		position: relative;
		top: 5px;
	}
	.detail {
		display: flex;
		border-bottom: 10px solid #eee;
	}
	.detail div {
		flex: 1;
		padding: 5px;
		text-align: center;
	}
	.detail .count {
		color: var(--color-tint);
		font-size: 20px;
	}
	.detail .border {
		border-right: 1px solid #eee;
	}
	.options div {
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #eee;
	}
	.float-right {
		float: right;
		padding-top: 5px;
	}
	.options img {
		width: 20px;
		margin: 0 15px;
		position: relative;
		top: 4px;
	}
	.border-b {
		border-top: 10px solid #eee;
	}
</style>
