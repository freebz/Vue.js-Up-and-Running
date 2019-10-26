// Redirect and Alias

const router = new VueRouter({
  routes: [
    {
      pat: '/settings',
      redirect: '/preferences'
    }
  ]
});
