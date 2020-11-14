import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { public_key, url, hash } from '../marvel'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        characters: [],
        character: [],
        url: ''
    },
    mutations: {
        getCharacters(state) {
            state.character = []

            axios.get(`${url}/characters?ts=1&apikey=${public_key}&hash=${hash}`)
                .then((response) => {
                    response.data.data.results.forEach((item) => {
                        state.characters.push(item)

                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getCharacter(state, id) {
            state.character = []
            console.log("leylaaaaaaaaaaaaaaaa", id)
            axios.get(`${url}/characters/${id}?ts=1&apikey=${public_key}&hash=${hash}`)
                .then((result) => {
                    console.log("burada", result.data.data)
                    result.data.data.results.forEach((item) => {
                        state.character.push(item);
                        state.url = `${item.thumbnail.path}/`

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
        },
        getCharacter(context, id) {
            context.commit('getCharacter', id)
        }
    },
    modules: {}
})