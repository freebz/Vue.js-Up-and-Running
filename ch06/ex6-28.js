methods: {
  addMessage(payload) {
    return this.$store.commit('addMessage', payload);
  },
}
