import axios from 'axios';

const URL = 'https://generator.mediainstinctgroup.ru/api/';

export default {
  state: {
    infos: []
  },
  getters: {
    getInfos(state) {
      return state.infos;
    }
  },
  mutations: {
    mutateInfos(state, payload) {
      state.infos = payload;
    }
  },
  actions: {
    async loadInfos(context) {
      const infos = await axios
        .get(URL + 'info/')
        .then(res => res.data)
        .catch(e => console.log(e));

      context.commit('mutateInfos', infos);
    }
  }
};