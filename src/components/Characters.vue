<template lang="html">
    <div>
        <h3>Hello this is characters.vue</h3>
    </div>
</template>
<script>
import {public_key, secret_key } from '../marvel';
import axios from 'axios'
export default {
    name: 'Characters',
    mounted() {
        this.getCharacters();
    },
    methods:{
    getCharacters: function() {
        
      axios.get(`http://developer.marvel.com/v1/public/characters?apikey=${public_key}`)
      .then((result) => {
          console.log(result)
      })
      .catch((error) => {
          console.log(error)
      })
    }
  }
}
</script>
<style lang="css" scoped>

</style>