<template>
  <div id="app">456456465
    <a href="ceshi.html">跳转到ceshi</a> 
    <button @click="goto">跳转</button>  
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{

    }
  },
  methods:{
    goto(){
      this.$router.push({ path: './testd.html', query: {} })
      console.log(this)
    }
  }
}
</script>


<style>
</style>
