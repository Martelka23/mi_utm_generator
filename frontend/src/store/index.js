import axios from 'axios';
import { createStore } from 'vuex';

const URL = 'http://localhost:3000/'

export default createStore({
  state: {
    traffics: [],
    infos: []
  },

  getters: {
    getTraffics(state) {
      return state.traffics;
    },
    getInfos(state) {
      return state.infos;
    }
  },

  mutations: {
    mutateTraffics(state, payload) {
      state.traffics = payload;
    },
    mutateInfos(state, payload) {
      state.infos = payload;
    }
  },

  actions: {
    async loadTraffics(context) {
      const traffics = await axios
        .get(URL + 'sources/')
        .then(res => res.data)
        .catch(e => console.log(e));

      context.commit('mutateTraffics', traffics);
    },
    async loadInfos(context) {
      const infos = await axios
        .get(URL + 'info/')
        .then(res => res.data)
        .catch(e => console.log(e));

      console.log(infos);

      context.commit('mutateInfos', infos);
    }
  },

  modules: {
  }
})
