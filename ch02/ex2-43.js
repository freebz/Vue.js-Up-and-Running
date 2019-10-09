import userMixin from './mixins/user';

Vue.component('user-admin', {
  mixins: [userMixin],
  template: '<div v-if="user">Name: {{ user.name }}</div>',
  props: {
    userId: {
      type: Number
    }
  },
  data: () => ({
    user: undefined
  }),
  mounted() {
    this.getUserInformation(this.userId)
      .then((user) => {
	this.user = user;
      });
  }
});
