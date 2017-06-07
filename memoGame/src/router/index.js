import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Memo from '@/components/Memo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/memo',
      name: 'memo',
      component: Memo
    }
  ]
})
