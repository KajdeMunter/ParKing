import Vue from 'vue';
import Router from 'vue-router';
import notFoundPage from './views/errors/notFound.vue'
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
  routes: [
      {
        path: '/login',
        name: 'login',
        component: Login,
      },
      {
          path: '/register',
          name: 'register',
          component: Register,
      },
      {
        path: '/',
        name: 'List',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "list" */ './views/List.vue'),
      },
      {
          path: '/map',
          name: 'Map',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "map" */ './views/Map.vue'),
      },
      {
          path: '/settings',
          name: 'Settings',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue'),
      },
      {
          path: '*',
          name: '404',
          component: notFoundPage,
      }
  ],
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        return next({
            path: '/login',
            query: { returnUrl: to.path }
        });
    }
    next();
});
