computed: {
  doubleFoo() {
    return this.foo * 2;
  },
  messageCount() {
    return this.$store.state.messages.length,
  },
  somethingElse() {
    return this.$store.state.somethingElse;
  }
}
