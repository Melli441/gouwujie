<template>
  <div class="select-bar">
    <slot></slot>
    <TabBarItem path="/home/fashion" active-color="#ff5777">
        <template v-slot:slot-text v-slot:slot-img>
          <div class="select-left">流行</div>
        </template>
    </TabBarItem>
    <TabBarItem path="/home/newStyle" active-color="#ff5777">
      <template v-slot:slot-text>
        <div class="select-center">新款</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/home/handpick" active-color="#ff5777">
      <template v-slot:slot-text>
        <div class="select-right">精选</div>
      </template>
    </TabBarItem>
  </div>
</template>

<script>
  import TabBarItem from './Tab-bar-item';
  export default {
    name: "SelectBar",
    components:{
      TabBarItem
    }
  }
</script>

<style scoped>
  .select-bar{
    width: 100vw;
    display: flex;
    font-size: 20px;
    line-height: 64px;
    color: #666666;
  }
  .select-left,.select-right{
    width: 33vw;
    text-align: center;
  }
  .select-center{
    width: 34vw;
    text-align: center;
  }
</style>
