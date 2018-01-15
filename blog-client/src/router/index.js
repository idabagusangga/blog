import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import detailedArticle from '@/components/detailedArticle'
import loginform from '@/components/loginform'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
      // {
      //     path:'/',
      //     name:'login',
      //     component:loginform
      // },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[{
          path:':id',
          name:'detailedArticle',
          component:detailedArticle,
          props: true
      }]
    }
  ]
})
