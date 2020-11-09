<template lang="html">
    <div>
        <h3>Hello this is characters.vue</h3>
        <ul>
            <li v-for="character in characters">
                <router-link :to="{name: 'character',params:{ id:character.id } }">
                {{ character.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import {public_key, secret_key, hash } from '../marvel';
import { mapState } from 'vuex'
export default {
    name: 'Characters',
    mounted() {
        this.$store.dispatch('getCharacters')
        },
    computed:{
        ...mapState({
            characters: state => state.characters
        })
    },
    methods:{
  }
}
</script>
<style lang="css" scoped>

</style>