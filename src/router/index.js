import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import Image from '@/view/Image'
import Joke from '@/view/Joke'

// import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
     {
      path: '/image',
      name: 'Image',
      component: Image
    },
      {
      path: '/joke',
      name: 'Joke',
      component: Joke
    }



  ]
})
