import Vue from 'vue'
import Router from 'vue-router'

import myheader from '@/components/myheader'
import page2 from '@/components/page2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: myheader
    },
    {
      path: '/page2',
      component: page2
    }
  ]
})
