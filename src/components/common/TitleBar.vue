<template>
  <div>
    <ul>
      <li v-for="bar in recommend">
        <a :href="bar.link">
          <img :src="bar.image">
          &ensp;{{bar.title}}
        </a>
      </li>
    </ul>
    <ul>
      <li v-for="bar in recommend">
        <a :href="bar.link">
          <img :src="bar.image">
          &ensp;{{bar.title}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TitleBar",
    props:{
      recommend:{
        type:Array
      },
    },
    methods:{

    }
  }
</script>

<style scoped>
  ul{
    display: flex;
    list-style: none;
  }
  ul>li{
    padding: 10px;
  }
  ul>li>a>img{
    width: 20vw;
  }
</style>
