import { createRouter, createWebHistory } from "vue-router"

import AboutView from '../views/About.vue'
import CreateView from '../views/Create.vue'
import EditView from '../views/Edit.vue'
import EditWordListView from '../views/EditWordList.vue'
import PlayView from '../views/play/Play.vue'
import RecordsView from '../views/Records.vue'

export const routes = [
  { path: '/', component: PlayView },
  { path: '/home', component: PlayView },
  { path: '/play', component: PlayView },
  { path: '/records', component: RecordsView },
  { path: '/create', component: CreateView },
  { path: '/edit/:id', component: EditWordListView },
  { path: '/edit', component: EditView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router