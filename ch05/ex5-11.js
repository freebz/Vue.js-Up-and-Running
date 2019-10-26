// Nested Routes

import PageSettings from './components/pages/Settings';
import PageSettingsProfile from './components/pages/SettingsProfile';
import PageSettingsEmail from './components/pages/SettingsEmail';

const router = new VueRouter({
  routes: [
    {
      path: '/settings',
      component: PageSettings,
      children: [
	{
	  path: 'profile',
	  component: PageSettingsProfile,
	},
	{
	  path: 'email',
	  component: PageSettingsEmail,
	}
      ]
    }
  ]
});
