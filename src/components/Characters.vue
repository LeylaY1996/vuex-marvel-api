<template lang="html">
    <div>
        <h3>Hello this is characters.vue</h3>
        <ul>
            <li v-for="character in characters">
                {{ character.name }}
            </li>
        </ul>
    </div>
</template>
<script>
import {public_key, secret_key, hash } from '../marvel';
import axios from 'axios'
export default {
    name: 'Characters',
    data() {
        return{
            characters: []
        }
    },
    mounted() {
        this.getCharacters();
    },
    methods:{
    getCharacters: function() {
        
      axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${public_key}&hash=${hash}`)
      .then((response) => {
          response.data.data.results.forEach((item) => {
          console.log(item)
          this.characters.push(item)
          console.log(this.characters)

          })
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