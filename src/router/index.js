import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ListEdit from '../views/ListEdit.vue'
import Geo from '../views/Geo.vue'

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
    path: '/geo',
    name: 'Geo',
    component: Geo
  }
]

const router = new VueRouter({
  routes
})

export default router
