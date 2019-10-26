// Basic Usage

import PageHome from './components/pages/Home';
import PageAbout from './components/pages/About';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: PageHome
    },
    {
      path: '/about',
      component: PageAbout
    }
  ]
});
