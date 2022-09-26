import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AnimeList from '../views/AnimeList.vue'

const routes = [
  {
    path: '/',
    name: 'AnimeList',
    component: AnimeList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
