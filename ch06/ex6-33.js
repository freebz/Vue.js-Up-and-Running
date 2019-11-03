// Action Helpers

methods: {
  // Maps this.getMessage() to this.$store.dispatch('getMessage')
  ...mapActions(['getMessage'])

  // Maps this.update() to this.$store.dispatch('getMessages')
  ...mapActions({
    update: 'getMessages'
  })
}
