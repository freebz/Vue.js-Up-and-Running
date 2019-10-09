const userMixin = {
  data: () => ({
    user: undefined
  }),
  mounted() {
    fetch(`/api/user/${this.userId}`)
      .then((res) => res.json())
      .then((user) => {
	this.user = user;
      });
  }
}
