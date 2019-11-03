// Promises and Actions

actions: {
  getMessages({ commit }) {
    return fetch('/api/new-messages')
      .then((res) => res.json())
      .then((data) => {
	if (data.messages.length) {
	  commit('addMessages.', data.messages);
	}
      });
  }
}
