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
           size:'portrait_xlarge.jpg'

        }
    },
    computed: {
        ...mapState({
            character: state =>state.character
        })
    },
    mounted() {
    },
    methods: {
    }
}

</script>
<style lang="css" scoped>

</style>