import trans from './../translate/translate.js'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameList: [],
    gameSelected: {},
    nickname: '',
    gameMobileId: '',
    language: 'es',
    translate: trans,
    emailForm: {},
    skipGame: false
  },
  mutations: {
    gameList (state, list) {
      state.gameList = list
    },
    gameSelected (state, game) {
      state.gameSelected = game
    },
    nickname (state, nickname) {
      state.nickname = nickname
    },
    gameMobileId (state, gameMobileId) {
      state.gameMobileId = gameMobileId
    },
    setTranslate (state, translate) {
      state.translate = translate
    },
    setLanguage (state, language) {
      state.language = language
    },
    emailForm (state, emailForm) {
      state.emailForm = emailForm
    },
    skipGame (state, skipGame) {
      state.skipGame = skipGame
    }
  },
  actions: {

  }
})
