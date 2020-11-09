import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { public_key, url, hash } from '../marvel'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        characters: []
    },
    mutations: {
        getCharacters(state) {
            axios.get(`${url}/characters?ts=1&apikey=${public_key}&hash=${hash}`)
                .then((response) => {
                    response.data.data.results.forEach((item) => {
                        console.log(item)
                        state.characters.push(item)
                        console.log(this.characters)

                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    actions: {
        getCharacters: context => {
            context.commit('getCharacters')
        }
    },
    modules: {}
})