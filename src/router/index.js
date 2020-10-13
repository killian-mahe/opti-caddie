import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ListEdit from '../views/ListEdit.vue'
import Geo from '../views/Geo.vue'
import Scan from '../views/Scan.vue'
import Identifiants from '../views/Identifiants.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/list_edit',
    name: 'ListEdit',
    component: ListEdit
  },
  {
    path: '/scan',
    name: 'Scan',
    component: Scan
  },
  {
    path: '/identifiants',
    name: 'Identifiants',
    component: Identifiants
  },
  {
    path: '/geo',
    name: 'Geo',
    component: Geo
  }
]

const router = new VueRouter({
  routes
})

export default router
