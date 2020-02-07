import Vue from 'vue'
import Router from 'vue-router'

import header from '@/components/header'
import page2 from '@/components/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: header
    },
    {
      path: '/page2',
      component: page2
    }
  ]
})
