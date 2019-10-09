// Scoped Slots

Vue.component('user-data', {
  template: '<div class="user"><slot :user="user"></slot></div>',
  data: () => ({
    user: undefined,
  }),
  mounted() {
    // Set this.user...
  }
});
