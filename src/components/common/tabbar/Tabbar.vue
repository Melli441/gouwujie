<template>
  <div id="tabbar">
    <slot></slot>
    <TabBarItem path="/home" active-color="#1296db">
      <!--        vue属性，后面可能需要这些属性传值-->
      <template v-slot:slot-img>
        <img src="@/assets/img/tabbar/Home.svg" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/tabbar/Home2.svg" alt="">
      </template>
      <template v-slot:slot-text>
        <div>首页</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/category" active-color="#1296db">
      <template v-slot:slot-img>
        <img src="@/assets/img/tabbar/Category.svg" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/tabbar/Category2.svg" alt="">
      </template>
      <template v-slot:slot-text>
        <div>分类</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/shopCart" active-color="#1296db">
      <template v-slot:slot-img>
        <img src="@/assets/img/tabbar/shop-cart.svg" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/tabbar/shopCart2.svg" alt="">
      </template>
      <template v-slot:slot-text>
        <div>购物车</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/profile" active-color="#1296db">
      <template v-slot:slot-img>
        <img src="@/assets/img/tabbar/Profile.svg" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/tabbar/Profile2.svg" alt="">
      </template>
      <template v-slot:slot-text>
        <div>我的</div>
      </template>
    </TabBarItem>
  </div>
</template>
<script>
  import TabBarItem from './Tab-bar-item';
  export default{
    name:'tabbar',
    components:{
      TabBarItem
    }
  }
</script>
<style>
  #tabbar{
    width: 100%;
    position:fixed;
    bottom:0;
    display: flex;
    justify-content: space-around;
    background: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }
  .tab-bar-item img{
    margin-top: 2px;
    width: 24px;
    height: 24px;
  }
</style>
