<template>
    <div class="recommend">
        <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
            <a href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomeRecommendView',
    props: {
        recommends: {
            type: Array,
            default () {
                return []
            }
        }
    }
}

</script>
<style>
.recommend {
    display: flex;
    padding: 10px 0 30px;
    border-bottom: 8px solid #eee;
}

.recommend-item {
	flex: 1;
	text-align: center;
	font-size: 12px;
}

.recommend-item img {
	height: 80px;
	width: 80px;
	margin-bottom: 10px;
}
</style>
