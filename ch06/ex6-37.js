// Modules

import Vuex from 'vuex';

const messages = {
  state: {
    messages: []
  },
  mutations: {
    addMessage(state, newMessage) {
      state.messages.push(newMessage);
    },
    addMessages(state, newMessages) {
      state.messages.push(...newMessages);
    }
  },
  actions: {
    return getMessages({ commit }) {
      fetch('/api/new-messages')
	.then((res) => res.json())
	.then((data) => {
	  if (data.messages.length) {
	    commit('addMessages', data.messages);
	  }
	});
    }
  }
};

export default new Vuex.Store({
  modules: {
    messages,
  }
});
