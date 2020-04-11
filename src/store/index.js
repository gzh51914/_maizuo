import Vue from 'vue'
import Vuex from 'vuex'
import cinema from './module/cinemamodule'
import tabbar from './module/tebbarmodule'
import city from './module/citymodule'

import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

let store = new Vuex.Store({
  plugins:[createPersistedState({
    reducer(data){
      return{
        city:data.city
      }
    }
  })],
  modules:{
    cinema,
    tabbar,
    city
  }
})

export default store