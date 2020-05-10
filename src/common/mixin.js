import BackTop from "components/content/backtop/BackTop"

export const backTopMixin = {
	components: {
		BackTop
	},
	data() {
		return{
			isShowBackTop: false
		}
	},
	methods: {
    	backClick() {
    		// 500ms回到(0,0)
    		this.$refs.scroll.scrollTo(0, 0, 500)
    	}
    }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: 'pop'
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      // console.log(this.currentType);
    }
  }
}