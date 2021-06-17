<template>
  <div id="app">
    <h1>Fasitecando</h1>

    <div>
      
    </div>
  </div>
</template>

<script>
import DataUsersService from "./services/DataUsers";



export default {
  name: 'App',

  data(){
    return {
      id: 10
    }
    

  },
  methods: {
    getUser(){
      DataUsersService.getUserById(this.id).then( res => {
          console.log(res);
      })
    }
  }
  
}
</script>

<style>

</style>
