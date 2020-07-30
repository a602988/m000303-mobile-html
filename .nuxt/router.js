import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c6e2491 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _49a33cd9 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))

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
    path: "/en",
    component: _2c6e2491,
    name: "index___en"
  }, {
    path: "/inspire",
    component: _49a33cd9,
    name: "inspire___zh-Hant"
  }, {
    path: "/en/inspire",
    component: _49a33cd9,
    name: "inspire___en"
  }, {
    path: "/",
    component: _2c6e2491,
    name: "index___zh-Hant"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
