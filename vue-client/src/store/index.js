import { registerRuntimeCompiler } from '@vue/runtime-core'
import { createLogger, createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './modules/auth'
import excuse from './modules/excuse'

export default createStore({
  namespaced: true,

  modules: {auth, excuse},
  plugins: [
    createLogger(),
    createPersistedState()
  ]
})
