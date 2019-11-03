methods: {
  addNewMessage(payload) {
    return this.$store.commit('addMessage', payload);
  },
}
