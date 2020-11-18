<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name:'SwiperA',
    props:{
      banner:{
        type:Array
      }
    },
    updated() {
      let mySwiper = new Swiper('.swiper-container',{
        autoplay:3000,
        loop:true
        // onClick: function(swiper){
        //   console.log(mySwiper.realIndex);     //当前索引
        // }
      })
    },
  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 225px;
  }
  .swiper-slide>a>img{
    width: 100vw;
    height: 220px;
  }
</style>
