// Mutations

import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    addMessage(state, newMessage) {
      state.messages.push(newMessage);
    }
  }
});
