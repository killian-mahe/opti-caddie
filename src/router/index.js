import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ListEdit from '../views/ListEdit.vue'
import Geo from '../views/Geo.vue'
import Scan from '../views/Scan.vue'
import Identifiants from '../views/Identifiants.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/show_list',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false,
      hideForAuth: true
    }
  },
  {
    path: '/list_edit/:list_id',
    name: 'ListEdit',
    component: ListEdit,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/scan',
    name: 'Scan',
    component: Scan,
    meta: {
      requiresAuth: false,
      hideForAuth: true
    }
  },
  {
    path: '/identifiants',
    name: 'Identifiants',
    component: Identifiants,
    meta: {
      requiresAuth: false,
      hideForAuth: true
    }
  },
  {
    path: '/geo',
    name: 'Geo',
    component: Geo,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    redirect: {name:'Home'}
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  
  // requireAuth
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }

  // hideForAuth

  if (to.matched.some(record => record.meta.hideForAuth)) {
    if (store.getters.isLoggedIn) {
      next({ name: 'Home' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
