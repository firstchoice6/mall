<template>
    <div id="goods-params" v-if="Object.keys(goodsParams).length !== 0">
        <table class="info-size" v-for="(table, index) in goodsParams.size" :key="index">
            <tr v-for="(tr, indey) in table" :key="indey" class="tr">
                <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
            </tr>
        </table>
        <table class="info-param">
            <tr v-for="(info, index) in goodsParams.info" :key="index">
                <td class="info-param-key">{{info.key}}</td>
                <td class="param-value">{{info.value}}</td>
            </tr>
        </table>
        <div class="info-img" v-if="goodsParams.image.length !== 0">
            <img :src="goodsParams.image">
        </div>
    </div>
</template>
<script>
export default {
    name: 'DetailGoodsParams',
    props: {
        goodsParams: {
            type: Object,
            default () {
                return {}
            }
        }
    }
}

</script>
<style scoped>
	#goods-params {
	    padding: 20px 15px;
	    font-size: 14px;

	}
	
	#goods-params table {
	    width: 100%;
	    border-collapse: collapse;
	}

	#goods-params tr {
	    height: 42px;
	}

	#goods-params tr td {
	    border-bottom: 1px solid rgba(100, 100, 100, .1);
	}

	.info-param-key {
	    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
	    width: 95px;
	}

	.info-param {
	    border-top: 1px solid rgba(0, 0, 0, .1);
	}

	.param-value {
	    color: var(--color-tint)
	}

	.info-img img {
	    width: 100%;
	}

</style>
