import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import FacebookPage from '@/components/FacebookPage.vue'
import InstaPage from '@/components/InstaPage.vue'
import QuoraPage from '@/components/QuoraPage.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/facebook',
    name: 'facebook',
    component: FacebookPage
  },
  {
    path: '/instagram',
    name: 'instagram',
    component: InstaPage
  },
  {
    path: '/quora',
    name: 'quora',
    component: QuoraPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
