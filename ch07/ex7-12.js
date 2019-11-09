// Mocking and Stubbing Data

const wrapper = mount(NotificationsCount, {
  propsData: {
    initialCount: 0
  }
});

wrapper.setMethods({
  handleUpdate() {
    this.messageCount += 2;
  }
});
