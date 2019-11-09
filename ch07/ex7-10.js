const wrapper = mount(Counter, {
  listeners: {
    count(clicks) {
      console.log(`Clicked ${clicks} times`);
    }
  }
});
