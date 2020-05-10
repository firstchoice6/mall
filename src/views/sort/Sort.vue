<template>
    <div id="sort">
        <nav-bar class="sort-nav">
            <div slot="center">商品分类</div>
        </nav-bar>
        <div class="content">
            <left-side-bar class="left" :data-list="dataList" @selectItem="selectItem">
            </left-side-bar>
            <scroll class="right" :data="[sortData]">
                <sub-sort :sub-sorts="showSubsort"/>
                <tab-control :titles="['流行','新品','销量']" @tabClick="tabClick"/>
                <sort-detail :sort-detail="showSortDetail"/>
            </scroll>
        </div>
    </div>
</template>
<script>
    import NavBar from 'components/common/navbar/NavBar'
    import TabControl from 'components/content/tabControl/TabControl'
    import Scroll from 'components/common/scroll/Scroll'

    import LeftSideBar from './childComps/LeftSideBar'
    import SubSort from './childComps/SubSort'
    import SortDetail from './childComps/SortDetail'



    import { getSortData, getSubSortData, getSortDetail } from "network/sort"
    import {tabControlMixin} from "common/mixin";
    export default {
        name: "Sort",
        data() {
            return {
                dataList: [],
                sortData:{},
                currentIndex: -1
            }
        },
    mixins: [tabControlMixin],
        created() {
            this._getSortData()
        },
        computed: {
            showSubsort() {
                if(this.currentIndex === -1) return {}
                return this.sortData[this.currentIndex].subSorts
            console.log(this.sortData[0].subSorts)
            },
            showSortDetail() {
                if(this.currentIndex === -1) return []
                    return this.sortData[this.currentIndex].sortDetail[this.currentType]
            }
        },
        components: {
            NavBar,
            LeftSideBar,
            TabControl,
            Scroll,
            SubSort,
            SortDetail
        },
        methods: {
            _getSortData() {
                getSortData().then(res => {
                    this.dataList = res.data.category.list
                    for (let i = 0; i < this.dataList.length; i++) {
                        this.sortData[i] = {
                            subSorts: {},
                            sortDetail: {
                                'pop': [],
                                'new': [],
                                'sell': []
                            }
                        }
                    }

                    this._getSubSortData(0)
                })
            },
            _getSubSortData(index) {
                this.currentIndex = index
                const maitKey = this.dataList[index].maitKey
                // console.log(mailKey)
                getSubSortData(maitKey).then(res => {
                    this.sortData[index].subSorts = res.data
                    this.sortData = {...this.sortData}
                    this._getSortDetail('pop')
                    this._getSortDetail('sell')
                    this._getSortDetail('new')
                })
                // console.log(this.sortData)
            },
            _getSortDetail(type) {
                const miniWallkey = this.dataList[this.currentIndex].miniWallkey
                getSortDetail(miniWallkey,type).then(res => {
                    this.sortData[this.currentIndex].sortDetail[type] = res
                    this.sortData = {...this.sortData}
                })
            },
            selectItem(index) {
                this._getSubSortData(index)
            }
        }
    }

</script>
<style scoped>
    #sort {
        height: 100vh;
    }
    .sort-nav {
        background-color: var(--color-tint);
        color: #fff;
        width: 100%;
        position: fixed;
    }

    .left {
        width: 25%;
        background-color: red;
    }

    .right {
        width: 75%;
        position: absolute;
        top: 44px;
        bottom: 49px;
        right: 0;
        height: 100% - 49px;
    }
    .content {
        height: 100%;
    }

</style>
