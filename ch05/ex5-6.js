// Dynamic Routing

const router = new VuewRouter({
  routes: [
    {
      path: '/user/:userId',
      component: PageUser
    }
  ]
});
