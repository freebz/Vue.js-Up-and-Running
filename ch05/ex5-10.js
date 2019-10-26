const PageUser = {
  props: ['userId'],
  template: '<p>User ID: {{ userId }}</p>'
};

const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      component: PageUser,
      props: true
    }
  ]
});
