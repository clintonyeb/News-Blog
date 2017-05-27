import * as api from '../api'

const state = {
  news: []
}

const actions = {
  getNewsItems ({commit}) {
    api.getNewsItems(function(error, response) {
      if (error) return;
      commit('newsAvailable', response.articles)
    });
  }
}

const mutations = {
  newsAvailable (state, payload) {
    payload.map((obj) => {
      state.news.push(obj);
    })
  }
}

export default {
  state,
  actions,
  actions,
  mutations
}