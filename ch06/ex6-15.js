computed: {
  doubleFoo() {
    return this.foo * 2;
  },
  ...mapState({
    messageCount: (state) => state.messages.length,
    somethingElse: 'somethingElse'
  })
}
