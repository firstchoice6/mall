<template>
   <tab-bar>
      <tab-bar-item path="/home" activeColor="#019889">
        <img slot='item-icon' src="~assets/img/TabBar/order.svg">
        <img slot='item-icon-active' src="~assets/img/TabBar/order_active.svg">
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path="/sort" activeColor="#019889">
        <img slot='item-icon' src="~assets/img/TabBar/filter.svg">
        <img slot='item-icon-active' src="~assets/img/TabBar/filter_active.svg">
        <div slot='item-text'>分类</div></tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#019889">
        <img slot='item-icon' src="~assets/img/TabBar/cart.svg">
        <img slot='item-icon-active' src="~assets/img/TabBar/cart_active.svg">
        <div slot='item-text'>购物车</div></tab-bar-item>
      <tab-bar-item path="/user" activeColor="#019889">
        <img slot='item-icon' src="~assets/img/TabBar/user.svg">
        <img slot='item-icon-active' src="~assets/img/TabBar/user_active.svg">
        <div slot='item-text'>我的</div></tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: "MainTabBar", 
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>
