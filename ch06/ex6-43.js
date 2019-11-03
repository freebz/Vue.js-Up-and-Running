store.commit('messages/addMessage', newMessage);

store.dispatch('messages/getMessages');
