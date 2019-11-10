const UserView = {
  template: `
    <div>
      <p v-if="user">User name: {{ user.name }}</p>
      <p v-else>Loading...</p>
    </div>`,
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
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
};
