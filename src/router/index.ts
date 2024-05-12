import { createMemoryHistory, createRouter } from "vue-router"

import AboutView from '../views/About.vue'
import CreateView from '../views/Create.vue'
import EditView from '../views/Edit.vue'
import HomeView from '../views/Home.vue'
import PlayView from '../views/Play.vue'
import RankingsView from '../views/Rankings.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/home', component: HomeView },
  { path: '/play', component: PlayView },
  { path: '/rankings', component: RankingsView },
  { path: '/create', component: CreateView },
  { path: '/edit', component: EditView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router