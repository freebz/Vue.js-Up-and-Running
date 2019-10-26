const router = new VueRoute({
  routes: [
    {
      path: '/settings',
      component: PageSettings,
      children: [
	{
	  path: 'profile',
	  component: PageSettingsProfile
	},
	{
	  path: '*',
	  component: PageNotFound
	}
      ]
    },
    {
      path: '*',
      component: PaeNotFound
    }
  ]
});
