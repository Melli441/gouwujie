<template>
  <div>
    <ul>
     <li>    <!-- v-for="side in category"-->
        <router-link to="/category/isPopular" active-class="active">
<!--          <a :href="side.link">-->
<!--            <p v-text="side.title"></p>-->
<!--          </a>-->
            <p>正在流行</p>
        </router-link>
      </li>
      <li>
        <router-link to="/category/coat" active-class="active">
          <p>上衣</p>
        </router-link>
      </li>
      <li>
        <router-link to="/category/trousers" active-class="active">
          <p>裤子</p>
        </router-link>
      </li>
      <li>
        <router-link to="/category/skirt" active-class="active">
          <p>裙子</p>
        </router-link>
      </li>
      <li>
        <router-link to="/category/underwear" active-class="active">
          <p>内衣</p>
        </router-link>
      </li>
      <li>
        <router-link to="/category/shoes" active-class="active">
          <p>女鞋</p>
        </router-link>
      </li>
      <li>
        <router-link to="/category/boyfriend" active-class="active">
          <p>男友</p>
        </router-link>
      </li>
      <li>
        <router-link to="/category/bag" active-class="active">
          <p>包包</p>
        </router-link>
      </li>
      <li>
        <router-link to="/category/exercise" active-class="active">
          <p>运动</p>
        </router-link>
      </li>
      <li>
        <router-link to="/category/accessories" active-class="active">
          <p>配饰</p>
        </router-link>
      </li>
      <li>
        <router-link to="/category/beautyMakeup" active-class="active">
          <p>美妆</p>
        </router-link>
      </li>
      <li>
        <router-link to="/category/personalCare" active-class="active">
          <p>个护</p>
        </router-link>
      </li>
      <li>
        <router-link to="/category/household" active-class="active">
          <p>家居</p>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "SideBar",
    props:{
      category:{
        type:Array
      },
    },
  }
</script>

<style scoped>
  ul{
    width: 30vw;
    height: 100vh;
    list-style: none;
    color: var(--color-text);
    background: #F5F5F5;
    font-size: 18px;
    font-weight: 500;
  }
  ul>li{
    text-align: center;
    line-height: 50px;
  }
  .active{
    color: #ff5777;

  }
  .active>p{
    background: white;
  }
</style>
