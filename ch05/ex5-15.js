import PageSettings from './components/pages/Settings';

const router = new VueRouter({
  routes: [
    {
      path: '/settings',
      alias: '/preferences',
      component: PageSettings
    }
  ]
});
