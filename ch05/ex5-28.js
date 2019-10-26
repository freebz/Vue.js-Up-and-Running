const router = new VueRouter({
  routes: [
    {
      path: '/account',
      component: PageAccount,
      meta: {
	requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !userAuthenticated()) {
    next('/login');
  } else {
    next();
  }
});
