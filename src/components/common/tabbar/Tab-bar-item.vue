<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActived" name="slot-img"></slot>
    <slot v-else name="slot-active-img"></slot>
    <div :style="activeStyle">
      <slot name="slot-text"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Tab-bar-item",
    data(){
      return{
        //isActived:false
      }
    },
    computed:{
      isActived(){
        //点击可以变换图标
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
        //图标下面字体的动态变换如果点击传父级的颜色否则传{}，然后再去App.vue的父级TabBarItem加上active-color="red"
        return this.isActived?{color:this.activeColor}:{}
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default: '#1296db'
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    height: 51px;
    text-align: center;
  }
</style>
