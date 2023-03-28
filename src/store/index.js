import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import cars from './cars'
import user from './user'
import owner from './owner'
import company from './company'
import team from './team'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    cars,
    user,
    owner,
    company,
    team
  },
  strict: process.env.DEV,
})
