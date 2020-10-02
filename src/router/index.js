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
    meta: {
      title: 'CSS Animations',
    },
  },
  {
    path: '/toggling-animations-demo',
    name: 'Toggling Animation Demo Page',
    component: TogglingAnimationsDemo,
    meta: {
      title: 'Toggling CSS Animations',
    },
  },
  {
    path: '/web-animations-api-demo',
    name: 'Web Animations API Demo Page',
    component: WebAnimationsApiDemo,
    meta: {
      title: 'Web Animations API',
    },
  },
  {
    path: '/intersection-observer-api-demo',
    name: 'Intersection Observer Api Demo Page',
    component: IntersectionObserverApiDemo,
    meta: {
      title: 'Intersection Observer API',
    },
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

router.beforeEach((to, from, next) => {
  const titleSuffix = 'Web Animation Demo'
  if (to.meta.title) {
    document.title = `${to.meta.title} - ${titleSuffix}`
  } else {
    document.title = titleSuffix
  }
  next()
})

export default router
