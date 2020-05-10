<template>
    <div>
        <grid-view :cols="3" :lineSpace="15" :v-margin="20" v-if="subSorts.list">
            <div class="item" v-for="(item, index) in subSorts.list" :key="index">
                <a :href="item.link">
                    <img class="item-img" :src="item.image" />
                    <div class="item-text">{{item.title}}</div>
                </a>
            </div>
        </grid-view>
    </div>
</template>
<script>
import GridView from 'components/common/gridView/GridView'
export default {
    name: 'SubSort',
    data() {
        return {

        }
    },
    props: {
        subSorts: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    components: {
        GridView
    }
}

</script>
<style scoped>
	.panel img {
		width: 100%;
	}
	.item {
		text-align: center;
		font-size: 12px;
	    /*border: 1px solid #eee;*/
	}
	.item-text {
		margin-top: 10px;
	}
	.item-img {
	    width: 80%;
	}


</style>
