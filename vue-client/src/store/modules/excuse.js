const states = {
    intros : [],
    intro : null,
    scapegoats: [],
    scapegoat: null,
    delays: [],
    intro : null,
    scapegoat: null,
    delay: null,
    selectedIntro: -1,
    selectedScapegoat: -1,
    selectedDelay: -1,
    excuse : null,
}
const actions = {
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
    },
}
const mutations = {
    loadIntros(state, payload){
      state.intros = payload
    },
    loadScapeGoats(state, payload){
      state.scapegoats = payload
    },
    loadDelays(state, payload){
      state.delays = payload
    },
    selectIntro(state, payload){
      state.selectedIntro = payload
      state.intro = state.intros.find(intro => intro._id === payload).title

      state.excuse = `${state.intro} ${state.scapegoat} ${state.delay}`
    },
    selectScapegoat(state, payload){
      state.selectedScapegoat = payload
      state.scapegoat = state.scapegoats.find(scapegoat => scapegoat._id === payload).title

      state.excuse = `${state.intro} ${state.scapegoat} ${state.delay}`
    },
    selectDelay(state, payload){
      state.selectedDelay = payload
      state.delay = state.delays.find(delay => delay._id === payload ).title

      state.excuse = `${state.intro} ${state.scapegoat} ${state.delay}`
    },
}
const getters = {
    shuffleExcuse(state, payload){
      const randomIntro = state.intros[Math.floor(Math.random() * state.intros.length)]
      state.intro = randomIntro.title
      state.selectedIntro = randomIntro._id

      const randomScapegoat = state.scapegoats[Math.floor(Math.random() * state.scapegoats.length)]
      state.scapegoat = randomScapegoat.title
      state.selectedScapegoat = randomScapegoat._id

      const randomDelay = state.delays[Math.floor(Math.random() * state.delays.length)]
      state.delay = randomDelay.title
      state.selectedDelay = randomDelay._id

      state.excuse = `${state.intro}, ${state.scapegoat} ${state.delay}`
    },

}

export default {
  namespaced: true,
  states,
  actions,
  mutations,
  getters
}
