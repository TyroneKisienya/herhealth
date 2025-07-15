import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import GetInvolved from './pages/GetInvolved.vue'
import Blog from './pages/Blog.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About},
  {path: '/get-involved', component: GetInvolved},
  {path: '/blog', component: Blog}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
