const wrapper = mount(NotificationsCount, {
  mocks: {
    $http: {
      get() {
	return Promise.resolve({ messageCount: 2 });
      }
    }
  },
  propsData: {
    initialCount: 0
  }
});
