import axios from 'axios';

const URL = 'https://192.168.125.90:3000/';

export default {
  state: {
    traffics: []
  },
  getters: {
    getTraffics(state) {
      return state.traffics;
    }
  },
  mutations: {
    mutateTraffics(state, payload) {
      state.traffics = payload;
    }
  },
  actions: {
    async loadTraffics(context) {
      const traffics = await axios
        .get(URL + 'sources/')
        .then(res => res.data)
        .catch(e => console.log(e));

      context.commit('mutateTraffics', traffics);
    }
  }
};