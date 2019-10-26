router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record) => {
    return record.meta.requiresAuth;
  }

  if (requiresAuth && !userAuthenticated()) {
    next('/login');
  } else {
    next();
  }
});
