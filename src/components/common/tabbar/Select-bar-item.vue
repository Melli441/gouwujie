<template>
  <div class="select-bar-item">
    <ul>
      <li v-for="list in filter">
        <a :href="list.link">
          <img :src="list.image">
          &ensp;{{list.title}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Select-bar-item",
    props:{
      filter:{
        type:Array
      },
      activeColor:{
        type:String,
        default: '#ff5777'
      }
    },
  }
</script>

<style scoped>

</style>
