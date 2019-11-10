const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: PageHome
    },
    {
      path: '/user/:userId',
      component: PageUser
    },
    {
      path: '/settings',
      component: PageSettings,
      children: [
	{
	  path: 'profile',
	  component: PageSettingsProfile
	},
	{
	  path: 'email',
	  component: PageSettingsEmail
	}
      ]
    }
  ]
});
