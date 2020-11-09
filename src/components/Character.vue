<template lang="html">
    <div>
        <h3>{{ this.$route.params.id }}</h3>
        <ul>
            <li v-for="char in character">
                {{ char.name }}
                {{ char.description }}
            </li>
        </ul>
        <img :src="url">
    </div>
</template>
<script>
import {public_key,url,hash} from '../marvel'
import axios from 'axios'
export default {
    name:'Character',
    data(){
        return{ 
           character: [],
           url:'',
           size:'portrait_xlarge.jpg'

        }
    },
    mounted() {
         this.getCharacter();
        console.log(this.$route.params.id)
    },
    methods: {
        getCharacter: function(){

            var characterId = this.$route.params.id
            axios.get(`${url}/characters/${characterId}?ts=1&apikey=${public_key}&hash=${hash}`)
                .then((result) => {
                    console.log("burada",result.data.data)
                    result.data.data.results.forEach((item) => {
                        this.character.push(item);
                        this.url = `${item.thumbnail.path}/${this.size}`
                        this.url2 = `http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge.jpg`
                        console.log(this.url2)

                        console.log(this.url)
                    })
                })
                .catch((error) =>{
                    console.log(error)
                })
        }
    }
}

</script>
<style lang="css" scoped>

</style>