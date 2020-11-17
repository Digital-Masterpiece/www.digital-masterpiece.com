import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a587e1b4 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _50f1b1f9 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _cb8a3e56 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _66182c2a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _a587e1b4,
    name: "about"
  }, {
    path: "/contact",
    component: _50f1b1f9,
    name: "contact"
  }, {
    path: "/services",
    component: _cb8a3e56,
    name: "services"
  }, {
    path: "/",
    component: _66182c2a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
