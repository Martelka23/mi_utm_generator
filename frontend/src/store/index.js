import { createStore } from 'vuex';

import infos from './modules/infos';
import traffic from './modules/traffic';

export default createStore({
  modules: {
    infos,
    traffic
  }
});