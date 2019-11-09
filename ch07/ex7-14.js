// Working with Events

let clicked = false;

const wrapper = mount(NotificationsCount, {
  mocks: {
    $http: {
      get() {
	clicked = true;
	return Promise.resolve({ messageCount: 1 });
      }
    }
  },
  propsData: {
    initialCount: 2
  }
});
