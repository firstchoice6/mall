<template>
    <div class="bottom-bar" v-show="totalPrice">
        <check-button
        class="check-box"
        :is-checked="isSelectAll"
        @click.native="selectAllClick"/>
        <span>全选</span>
        <span class="right">
        	<span class="total-price">合计:
        		<span>{{totalPrice}}</span>
        	</span>
            <span class="buy-product" @click="calcClick">结算
            	<span v-show="checkLength">({{checkLength}})</span>
            </span>
        </span>
    </div>
</template>
<script>
import CheckButton from './CheckButton'
import { mapGetters } from 'vuex'
export default {
    name: 'CartBottomBar',
    data() {
        return {

        }
    },
    components: {
        CheckButton
    },
    computed: {
    	...mapGetters(['cartList']),
        totalPrice() {
            return "￥" + this.cartList.filter(item => item.checked).reduce((preValue, item) => {
                return preValue + item.price * item.count
            }, 0).toFixed(2)
        },
        checkLength() {
        	return this.cartList.filter(item => item.checked).length
        },
        isEmpty() {
            return this.cartList.find(item => item.checked)
        },
        isSelectAll() {
        	// return !(this.cartList.filter(item => !item.checked).length)
        	if(this.cartList.length === 0) return false
        	return !this.cartList.find(item => !item.checked)
        }
    },
    methods: {
    	selectAllClick() {
    		if (this.isSelectAll) {
    			this.cartList.forEach(item => item.checked = false)
    		} else {
    			this.cartList.forEach(item => item.checked = true)
    		}
    	},
        calcClick() {
            if(!this.isEmpty) {
                this.$toast.showToast('请选择要结算的商品',1000)
            }
        }
    }
}

</script>
<style scoped>
.bottom-bar {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
}

.check-box {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 12px;
}

.bottom-bar .total-price {
    margin-left: 40px;
    font-size: 15px;
    color: #666;
}

.bottom-bar .total-price span {
    font-size: 10px;
    color: var(--color-tint)
}

.right {
    float: right;
}

.bottom-bar .buy-product {
    font-weight: 300;
    font-size: 16px;
    background-color: var(--color-tint);
    color: #fff;
    width: 80px;
    height: 30px;
    margin: 7px;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
    float: right;
}

</style>
