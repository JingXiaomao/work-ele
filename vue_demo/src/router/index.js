import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Menu1 from '@/components/Menu1'
import subMenu1 from '@/components/subMenu1'
import subMenu2 from '@/components/subMenu2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },{
      path: '/menu1',
      component: Menu1,
      children:[
        {
          path: 'subMenu1',
          component: subMenu1,
        },
        {
          path: 'subMenu2',
          component: subMenu2,
        },
        {
          path: '',
          redirect:'subMenu2'
        }
      ]
    }
  ]
})
