<template>
    <div id="shop-item">
        <div class="item-selector">
            <CheckButton :is-checked="product.checked" @click.native="checkClick" />
        </div>
        <div class="item-img">
            <img :src="product.img" alt="商品图片">
        </div>
        <div class="item-info">
            <div class="item-title">{{product.title}}</div>
            <div class="item-desc">{{product.desc}}</div>
            <div class="info-bottom">
                <div class="item-price left">¥{{product.price}}</div>
                <div class="item-count right">x{{product.count}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import CheckButton from './CheckButton'

export default {
    name: "ShopCartItem",
    props: {
        product: Object
    },
    components: {
        CheckButton
    },
    methods: {
        checkClick() {
            this.product.checked = !this.product.checked;
        }
    }
}

</script>
<style scoped>
	#shop-item {
	    width: 100%;
	    height: 140px;
	    display: flex;
	    font-size: 0;
	    padding: 5px;
	    margin: 10px 0;
	    background-color: #fff;
	    border-radius: 10px;
	}

	.item-selector {
	    width: 20px;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	}

	.item-title,
	.item-desc {
	    overflow: hidden;
	    text-overflow: ellipsis;
	    line-height: 20px;
	    display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}

	.item-img {
	    position: relative;
	    /*display: flex;*/
	    flex-shrink: 0;
	    flex-grow: 0;
	    overflow: hidden;
	    border-radius: 3px;
	    width: 80px;
	    height: 100px;
	    margin: 5px;
	}

	.item-img img {
	    width: 100%;
	}

	.item-info {
	    font-size: 15px;
	    color: #333;
	    padding: 5px 10px;
	    position: relative;
	    overflow: hidden;
	}

	.item-info .item-desc {
	    color: #666;
	    margin: 10px 0;
	}

	.item-desc {
	    background-color: #f9f9f9;
	    color: #999;
	    padding: 2px;
	    font-size: 12px;
	}

	.info-bottom {
	    margin-top: 10px;
	    position: absolute;
	    bottom: 10px;
	    left: 10px;
	    right: 10px;
	    color: #666

	}

	.info-bottom .item-price {
	    color: var(--color-tint);
	}

</style>
