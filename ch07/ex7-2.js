const vm = new Vue({
  template: '<NotificationCount :initial-count="5" />',
  components: { NotificationCount }
}).$mount();
