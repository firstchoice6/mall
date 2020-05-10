<template>
	<div id="comment" v-if="Object.keys(goodsComment).length !== 0">
		<div class="title">
			<span>用户评价</span>
			<span class='more-evaluate'>更多&gt;</span>
		</div>
		<div class="comment-item">
			<img :src="goodsComment.user.avatar" class="user-icon">
			<span class="user-name">{{goodsComment.user.uname}}</span>	
			<div>
				<p class="comment-content">{{goodsComment.content}}</p>
				<div class="comment-time">
					<span>{{goodsComment.created  | showDate}}</span>
					<span>{{goodsComment.style}}</span>
				</div>
			</div>
			<div class="comment-pic"  v-for="(pic, index) in goodsComment.images" :key="index">
				<img :src="pic">
			</div>
		</div>
	</div>
</template>

<script>
	import {formatDate}  from "common/utils"
	export default {
		name: 'DetailComment',
		filters: {
			showDate: function (value) {
				let data = new Date(value*1000)
				return formatDate(data, 'yyyy-MM-dd')
			}
		},
		props: {
			goodsComment: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	#comment {
		padding: 0 10px 20px;
		border-top: 5px solid #f2f5f8;
		border-bottom: 5px solid #f2f5f8;
	}
	.title {
		height: 50px;
		line-height: 50px;
		justify-content: space-between;
		border-bottom: 1px solid rgba(0,0,0,0.1);
		margin-bottom: 10px;
	}
	.title .more-evaluate {
		float: right;
	}

	.comment-item .user-icon {
		width: 42px;
		border-radius: 50%;
	}
	.comment-item .user-name {
		position: relative;
		left: 10px;
		top: -10px;
	}
	.comment-content {
		padding: 10px 0;
	}
	.comment-time span {
		padding-right: 30px;
		font-size: 12px;
		color: #999;
	}
	.comment-pic {
		margin-top: 10px;
 
		width: 100px;
		height: 100px;
		overflow: hidden;
		display: inline-block;
	}
	.comment-pic img {
		width: 100%;
		padding: 1px;
	}
</style>
