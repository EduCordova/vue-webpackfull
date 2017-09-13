import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import adopcion from '@/components/adopcion'
import notfound from '@/components/notfound'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {path: '/',component: home},
    {path: '/adopcion',component: adopcion},
    {path: '*',component: notfound},
  ]
})
