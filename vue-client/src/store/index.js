import { createLogger, createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    intros : [],
    intro : '',
    scapegoats: [],
    scapegoat: '',
    delays: [],
    delay: '',
    selectedIntro: -1,
    selectedScapegoat: -1,
    selectedDelay: -1,
    excuse : '',
    isLoading : false,
  },
  mutations: {
    loadIntros(state, payload){
      state.intros = payload
    },
    loadScapeGoats(state, payload){
      state.scapegoats = payload
    },
    loadDelays(state, payload){
      state.delays = payload
    },
    selectIntro(state, payload) {
      state.selectedIntro = payload
      state.excuse = `${state.intro} ${state.scapegoat} ${state.delay}`
    },
    selectScapegoat(state, payload) {
      state.selectedScapegoat = payload
      state.excuse = `${state.intro} ${state.scapegoat} ${state.delay}`
    },
    selectDelay(state, payload) {
      state.selectedDelay = payload
      state.excuse = `${state.intro} ${state.scapegoat} ${state.delay}`
    },
  },
  actions: {
    async init({commit}){
      await fetch('http://localhost:8800/api/excuses/intro/get')
      .then(res => res.json())
      .then(intros => {
        commit('loadIntros', intros)
      })

      await fetch('http://localhost:8800/api/excuses/scape-goat/get')
      .then(res => res.json())
      .then(scapegoats => {
        commit('loadScapeGoats', scapegoats)
      })

      await fetch('http://localhost:8800/api/excuses/delay/get')
      .then(res => res.json())
      .then(delays => {
        commit('loadDelays', delays)
      })
    }
  },
  getters: {
    shuffleExcuse(state, payload){
      state.intro = state.intros[Math.floor(Math.random() * state.intros.length)].title
      state.scapegoat = state.scapegoats[Math.floor(Math.random() * state.scapegoats.length)].title
      state.delay = state.delays[Math.floor(Math.random() * state.delays.length)].title

      state.excuse = `${state.intro} ${state.scapegoat} ${state.delay}`
    },
  },
  modules: {},
  plugins: [
    createLogger()
  ]
})
