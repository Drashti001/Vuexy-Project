import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    // {
    //   path: '/car-details',
    //   name: 'car-details',
    //   component: () => import('@/views/CarDetails.vue'),
    //   // meta: {
    //   //   pageTitle: 'Car Details',
    //   //   breadcrumb: [
    //   //     {
    //   //       text: 'Car Details',
    //   //       active: true,
    //   //     },
    //   //   ],
    //   // },
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/car-details/:id/:carId',
      name: 'car-details',
      component: () => import('@/views/CarDetails.vue'),
      
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile.vue'),
      
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutUs.vue'),
      
    },
   
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
