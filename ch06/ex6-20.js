import Vuex from 'vuex';

export default new Vue.Store({
  state: {
    messages: [...]
  },
  getters: {
    unread: (state) => state.filter((message) => !message.read),
    unreadFrom: (state, getters) => getters.unread
      .map((message) => message.user.name)
  }
});
