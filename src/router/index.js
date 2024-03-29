import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/billOpen',
    name: 'billOpen',
    component: () => import(/* webpackChunkName: "about" */ '../views/billOpen.vue')
  },
  {
    path: '/myBill',
    name: 'myBill',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/myBill.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base:  window.__POWERED_BY_QIANKUN__ ? '/app-ebill' : process.env.BASE_URL,
  routes
})

export default router
