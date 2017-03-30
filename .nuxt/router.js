'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _0f4af605 = () => import('C:\\Users\\seamusd\\Documents\\GitHub\\nuxtexpress\\pages\\index.vue')

const _54b4d03b = () => import('C:\\Users\\seamusd\\Documents\\GitHub\\nuxtexpress\\pages\\users.vue')

const _451f5244 = () => import('C:\\Users\\seamusd\\Documents\\GitHub\\nuxtexpress\\pages\\aboutthis.vue')

const _02a85870 = () => import('C:\\Users\\seamusd\\Documents\\GitHub\\nuxtexpress\\pages\\transactionalservices\\_category\\_subCategory\\_name.vue')

const _aa8e94a6 = () => import('C:\\Users\\seamusd\\Documents\\GitHub\\nuxtexpress\\pages\\_id.vue')



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _0f4af605,
			name: "index"
		},
		{
			path: "/users",
			component: _54b4d03b,
			name: "users"
		},
		{
			path: "/aboutthis",
			component: _451f5244,
			name: "aboutthis"
		},
		{
			path: "/transactionalservices/:category?/:subCategory?/:name?",
			component: _02a85870,
			name: "transactionalservices-category-subCategory-name"
		},
		{
			path: "/:id",
			component: _aa8e94a6,
			name: "id"
		}
  ]
})
