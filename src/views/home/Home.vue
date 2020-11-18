<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
    <!--  {{result}}-->
    <SwiperA :banner="bannerList"></SwiperA>
    <TitleBar :recommend="recommendList"></TitleBar>
    <SelectBar></SelectBar>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import {getHomeMultidata} from "network/home";
  import SwiperA from "components/common/SwiperA";
  import TitleBar from "components/common/TitleBar";
  import SelectBar from "components/common/tabbar/SelectBar";

  export default {
    name: "Home",
    components:{
      NavBar,
      SwiperA,
      TitleBar,
      SelectBar,
    },
    data(){
      return{
        // result:null,
        bannerList:null,
        recommendList:null,
      }
    },
    //2.axios获取数据,新建home.js封装方法再在这里调用
    created() {
      getHomeMultidata().then(res=>{
        // this.result=res
        console.log(res)
        this.bannerList=res.data.data.banner.list
        this.recommendList=res.data.data.recommend.list
      })
    },
  }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #ffffff;
  }
</style>
