// HTML5 History Mode

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: PageHome },
    { path: '/about', component: PageAbout }
  ]
});
