const UserList = {
  template: '...',
  mounted() {
    this.$store.dispatch('updateUsers');
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  }
};
