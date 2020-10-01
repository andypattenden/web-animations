import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Css from '../views/Css'
import CssWaapi from '../views/CssWaapi'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/css',
    name: 'CSS',
    component: Css,
  },
  {
    path: '/css-waapi',
    name: 'CSS/WAAPI',
    component: CssWaapi,
  },
  {
    path: '*',
    redirect: '/css',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
