import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // create paths to correct pages and associate components appropriately
    // {
    //   path: '/viewcompanies',
    //   name: 'viewcompanies',
    //   component: ViewCompanies,
    // },
    // {
    //   path: '/viewcompany',
    //   name: 'viewcompany',
    //   component: ViewCompanies,
    // },
  ],
});
