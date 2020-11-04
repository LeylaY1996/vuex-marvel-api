<template lang="html">
    <div>
        <h3>Hello this is characters.vue</h3>
    </div>
</template>
<script>
import {public_key, secret_key, hash } from '../marvel';
import axios from 'axios'
export default {
    name: 'Characters',
    mounted() {
        this.getCharacters();
    },
    methods:{
    getCharacters: function() {
        
      axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${public_key}&hash=${hash}`)
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