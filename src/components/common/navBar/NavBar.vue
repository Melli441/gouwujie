<template>
  <div class="nav-bar">
<!--   包一个div为了方便控制div里的内容，以免被替换无效-->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    line-height: 44px;
    /*background: lightblue;*/
  }
  .left,.right{
    width: 60px;
    /*background: lightcoral;*/
  }
  .center{
    flex: 1; /*除了其他地方都是center的*/
    /*background: darkred;*/
    /*color: #fff;*/
    text-align: center;
  }
</style>
