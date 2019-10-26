// Navigation Guards

router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/account') && !userAuthnticated()) {
    next('/login');
  } else {
    next();
  }
});
