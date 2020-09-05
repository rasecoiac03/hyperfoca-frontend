import Vuex from 'vuex'

import career from './career'
import auth from './auth'

new Vuex.Store({
  modules: {
    career,
    auth,
  }
})