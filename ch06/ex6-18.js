import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    messages: [...]
  },
  getters: {
    unreadFrom: (state) => statem.messages
      .filter((message) => !message.read)
      .map((message) => message.user.name)
  }
});
