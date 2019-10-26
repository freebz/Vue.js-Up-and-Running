const router = new VueRouter({
  routes: [
    {
      path: '/blog',
      component: PageBlog,
      meta: {
	title: 'Welcome to my blog!'
      }
    }
  ]
});

router.afterEach((to) => {
  document.title = to.meta.title;
});
