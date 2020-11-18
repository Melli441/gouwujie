<template>
  <div>
    <SelectBarItem :filter="dataList"></SelectBarItem>
  </div>
</template>

<script>
  import {getHomedata} from "network/homedata";
  import SelectBarItem from "components/common/tabbar/Select-bar-item"
  export default {
    name: "Fashion",
    components:{
      SelectBarItem
    },
    data(){
      return{
        dataList:null,
      }
    },
    created() {
      getHomedata().then(res=>{
        console.log(res.data)
        this.dataList=res.data.list
      })
    },
  }
</script>

<style scoped>

</style>
