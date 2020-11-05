<template lang="html">
    <div>
        <h3>{{ this.$route.params.id }}</h3>
    </div>
</template>
<script>
import {public_key,url,hash} from '../marvel'
import axios from 'axios'
export default {
    name:'Character',
    data(){
        return{ 
           character: []

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