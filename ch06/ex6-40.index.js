import Vuex from 'vuex';
import * as messages from './modules/messages';

export default new Vuex.Store({
  modules: {
    messages,
  }
});
