import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuOpen: false
  },
  mutations: {
    SET_MENU_ACTIVE (state) {
    state.isMenuOpen = true
  },
  SET_MENU_INACTIVE (state) {
    state.isMenuOpen = false
  }
  },
  actions: {
     toggleMenu ({ commit, state }) {
    const { isMenuOpen } = state
    if (isMenuOpen === true) {
      commit('SET_MENU_INACTIVE')
    } else {
      commit('SET_MENU_ACTIVE')
    }
  },
  showMenu ({ commit }) {
    commit('SET_MENU_ACTIVE')
  },
  hideMenu ({ commit }) {
    commit('SET_MENU_INACTIVE')
  }
  },
  modules: {
  }
})
