<template>
    <div class="base-info" v-if="Object.keys(goods).length !== 0">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span class="price-desc" v-if="goods.discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-service">
            <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DetailBaseInfo',
    props: {
        goods: {
            type: Object,
            default() {
            	return {}
            }
        }
    }
}

</script>
<style scoped>
	.base-info {
	    margin-top: 10px;
	    color: #999;
	    padding: 0 8px;
	}

	.info-title {
	    color: #222;
	}

	.info-price {
	    margin-top: 15px;
	    margin-bottom: 20px;
	    position: relative;
	}

	.info-price .n-price {
	    color: var(--color-tint);
	    font-size: 20px;
	    
	}

	.info-price .o-price {
	    font-size: 13px;
	    margin-left: 5px;
	    text-decoration: line-through;
	}

	.price-desc {
	    background-color: var(--color-tint);
	    padding: 2px 4px;
	    border-radius: 4px;
	    margin-left: 2px;
	    color: #fff;
	    position: absolute;
	    top: -4px;
	    font-size: 10px;
	}

	.info-other {
	    display: flex;
	    padding-bottom: 5px;
	    border-bottom: 2px solid #f2f5f8;
		justify-content: space-between;
		font-size: 12px;
	}
	.info-service {
		display: flex;
		justify-content: space-between;
		line-height: 60px;
		height: 60px;
	}
	.info-service img {
		height: 14px;
		position: relative;
		top: 2px;


	}
	.info-service span {
		font-size: 13px;
		color: #333;
	}
</style>
