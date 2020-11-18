<template>
  <div>
    <NavBar class="category-nav">
      <template v-slot:center>
        商品分类
      </template>
    </NavBar>
    <SideBar :category="categoryList"></SideBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import SideBar from "components/common/SideBar";
  import {getCategory} from "network/category";

  export default {
    name: "Category",
    components:{
      NavBar,
      SideBar
    },
    data(){
      return{
        categoryList:null
      }
    },
    created() {
      getCategory().then(res=>{
        console.log(res)
        this.categoryList=res.data.data.category.list
      })
    },
  }
</script>

<style scoped>
.category-nav{
  background: var(--color-tint);
  color: #ffffff;
}
</style>
