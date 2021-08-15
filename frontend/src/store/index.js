import { createLogger, createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    intros : [ ],
    scapegoats: [ ],
    delays: [ ],
    selectedItemId: -1,
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
    selectItem(state){
      let item = state.intros.find((i) => {
        i.id === state.selectedItemId
      })

      if(item){
        return item.items
      }
      return []
    }
  },
  modules: {},
  plugins: [
    createLogger()
  ]
})
