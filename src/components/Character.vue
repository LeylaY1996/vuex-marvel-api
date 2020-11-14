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
import { mapState } from 'vuex'
 
export default {
    name:'Character',
    data(){
        return{ 
           url:'',
           size:'portrait_xlarge.jpg'

        }
    },
    mounted(){
        this.$store.dispatch('getCharacter',this.$route.params.id);
        this.getImage()
        console.log()
    },
    computed: {
        ...mapState({
            character: state =>state.character,
            preUrl: state => state.url
        })
    },
    methods: {  
        getImage: function(){
            this.url = `${this.preUrl}${this.size}`
        }
    }
}

</script>
<style lang="css" scoped>

</style>