// Passing Params to Components as Props

const PageUser = {
  template: '<p>User ID: {{ $route.params.userId }}</p>'
};

const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      component: PageUser
    }
  ]
});
