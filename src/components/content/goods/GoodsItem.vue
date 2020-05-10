<template>
    <div class="goods-item" @click="itemClick">
            <img v-lazy="showImage" @load="imageLoad">
            <div class="goods-info">
                <p>{{goodsItem.title}}</p>
                <span class="price">￥{{goodsItem.price}}</span>
                <span class="collect">☆{{goodsItem.cfav}}</span>
            </div>
    </div>
</template>
<script>
    export default {
        name: 'GoodsItem',
        props: {
            goodsItem: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        computed: {
            showImage: function() {
                return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
            }
        },
        methods: {
            imageLoad() {
                // 事件总线
                if(this.$route.path.indexOf('/home') + 1) {
                     // console.log('home image load')
                    this.$bus.$emit('homeItemImageLoad')
                } else if (this.$route.path.indexOf('/detail') + 1) {
                      // console.log('detail image load')
                    this.$bus.$emit('detailItemImageLoad')
                }

            },
            itemClick() {
                    this.$router.push('/detail/' + this.goodsItem.iid)
            }
        }
    }

</script>

<style>
    .goods-item {
        position: relative;
        padding-bottom: 40px;
        width: 48%;
    }

    .goods-item img {
        width: 100%;
        border-radius: 10px;
    }

    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .price {
        color: var(--color-tint);
        margin-right: 20px;
    }

    .collect {
        position: relative;
    }
</style>
