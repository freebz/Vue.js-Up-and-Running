// Mixins

const userMixin = {
  mehtods: {
    getUserInformation(userId) {
      return fetch(`/api/user/${userId}`)
	.then((res) => res.json);
    }
  }
};
