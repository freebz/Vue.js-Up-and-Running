// File Structure

export const state = {
  messages: []
};

export const mutations = {
  addMessage(state, newMessage) {
    state.messages.push(newMessage);
  },
  addMessages(state, newMessages) {
    state.messages.push(...newMessages);
  }
};

export const actions = {
  return getMessages({ commit }) {
    fetch('/api/new-messages')
      .then((res) => res.json())
      .then((data) => {
	if (data.messages.length) {
	  commit('addMessages', data.messages);
	}
      });
  }
};
