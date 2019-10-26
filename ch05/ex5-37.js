// Route Names

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: PageUser
    }
  ]
});
