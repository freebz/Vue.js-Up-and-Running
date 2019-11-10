const store = new Vuex.Store({
  state: {
    users: undefined
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    updateUsers() {
      return fetch('/api/users')
	.then((res) => res.json())
	.then((users) => this.setUsers(users));
    }
  }
});
