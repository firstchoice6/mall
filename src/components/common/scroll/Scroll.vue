<template>
    <div ref="wrapper" class="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name: 'Scroll',
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        // 创建对象
        this.scroll = new BScroll(this.$refs.wrapper, {
            probeType: this.probeType,
            click: true,
            pullUpLoad: this.pullUpLoad
        })
        //监听滚动位置
        if (this.probeType === 2 || this.probeType === 3) {
            this.scroll.on('scroll', (position) => {
                // console.log(position)
                this.$emit('scroll', position)
            })
        }

        //监听滚动
        if (this.pullUpLoad) {
            this.scroll.on('pullingUp', () => {
                this.$emit('pullingUp')
            })
        }


    },
    methods: {
        scrollTo(x, y, time = 300) {
            this.scroll && this.scroll.scrollTo(x, y, time)
        },
        finishPullUp() {
            this.scroll.finishPullUp()
        },
        refresh() {
            this.scroll && this.scroll.refresh()
            // console.log('image load')
        },
        getScrollY() {
            return this.scroll ? this.scroll.y : 0
        }
    }
}

</script>
<style scoped>
	.wrapper {
		overflow: hidden;
	}
</style>
