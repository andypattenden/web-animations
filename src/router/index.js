import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import BasicCssAnimationDemo from '../views/BasicCssAnimationDemo'
import TogglingAnimationsDemo from '../views/TogglingAnimationsDemo'
import WebAnimationsApiDemo from '../views/WebAnimationsApiDemo'
import IntersectionObserverApiDemo from '../views/IntersectionObserverApiDemo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/basic-css-animation-demo',
    name: 'CSS Animation Demo Page',
    component: BasicCssAnimationDemo,
  },
  {
    path: '/toggling-animations-demo',
    name: 'Toggling Animation Demo Page',
    component: TogglingAnimationsDemo,
  },
  {
    path: '/web-animations-api-demo',
    name: 'Web Animations API Demo Page',
    component: WebAnimationsApiDemo,
  },
  {
    path: '/intersection-observer-api-demo',
    name: 'Intersection Observer Api Demo Page',
    component: IntersectionObserverApiDemo,
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
