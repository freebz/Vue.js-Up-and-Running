// Per-Route Guards

const router = new VueRouter({
  routes: [
    {
      path: '/account',
      component: PageAccount,
      beforeEnter(to, from, next) {
	if (!userAuthenticated()) {
	  next('/login');
	} else {
	  next();
	}
      }
    }
  ]
});
