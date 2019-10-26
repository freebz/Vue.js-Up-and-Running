// Route Order

const routerA = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      component: PageUser
    },
    {
      path: '/user/me',
      component: PageMe
    }
  ]
});

const routerB = new VueRouter({
  routes: [
    {
      path: '/user/me',
      component: PageMe
    },
    {
      path: '/user/:userId',
      component: PageUser
    }
  ]
});
