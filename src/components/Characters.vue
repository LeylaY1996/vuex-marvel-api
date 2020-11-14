<template lang="html">
    <div>

        
        <div class="card-container">
            <div class="card" v-for="character in characters">
                <h3>{{ character.name }}</h3>
                    <router-link :to="{name: 'character',params:{ id:character.id } }">
                        <button type="button" class="btn-view">Detay</button>
                    </router-link>

            </div>
        </div>
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
    .card-container {
        display: grid;
        grid-template-columns: 200px 200px 200px;
        grid-gap: 30px;
        margin-left:550px;
    }

    .card {
        text-align:center;
        background-color: #333;
        min-height: 200px;
        max-width: 250px;
    }

    .card h3 {
        color: white;
    }

    .btn-view {
        padding: 10px;
        margin-top: 50px;
        border-radius: 15px;
        width: 120px;
        background-color: transparent;
        font-size:12px;
        font-weight: bolder;
        cursor:pointer
    }
</style>