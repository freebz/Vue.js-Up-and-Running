// In-Component Guards

const PgeAccount = {
  template: '<div>...account page...</div>',
  beforeRouteEnter(to, from, next) {
    if (!userAuthnticated()) {
      next('/login');
    } else {
      next();
    }
  }
};
