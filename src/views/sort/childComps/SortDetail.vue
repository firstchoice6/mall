<template>
    <grid-view>
        <goods-item v-for="(item, index) in sortDetail" :key="index" :goods-item="item"></goods-item>
    </grid-view>
</template>
<script>
import GoodsItem from 'components/content/goods/GoodsItem'
import GridView from 'components/common/gridView/GridView'
export default {
    name: 'SortDetail',
    components: {
        GridView,
        GoodsItem
    },
    props: {
        sortDetail: {
            type: Array,
            default () {
                return []
            }
        }
    }
}

</script>
<style scoped>
</style>
