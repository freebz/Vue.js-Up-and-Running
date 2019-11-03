computed: mapState({
  messageCount(state) {
    return state.messages.length + this.pendingMessages.length;
  }
})
