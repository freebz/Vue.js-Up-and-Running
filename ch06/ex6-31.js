// Actions

import Vuex from 'vuex';

export default new Vuex.Store({
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
    getMessages(context) {
      fetch('/api/new-messages')
	.then((res) => res.json())
	.then((data) => {
	  if (data.messages.length) {
	    context.commit('addMessages', data.messages);
	  }
	});
    }
  }
});
