import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import PacksView from './views/PacksView.vue'
import NewsView from './views/NewsView.vue'
import ContactView from './views/ContactView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/a-propos', name: 'about', component: AboutView },
  // /packs/commande et /packs/boutique ouvrent la page Nos packs, puis descendent jusqu'à la section
  { path: '/packs/:section(commande|boutique)?', name: 'packs', component: PacksView },
  // /actualites ouvre la liste, /actualites/:id ouvre une actualité
  { path: '/actualites/:id?', name: 'news', component: NewsView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default createRouter({
  // Mode "hash" : fonctionne sur n'importe quel hébergement statique, sans configuration serveur
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.params.section) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const el = document.getElementById(to.params.section)
          if (el) el.scrollIntoView()
          resolve(false)
        }, 60)
      })
    }
    return { top: 0, left: 0, behavior: 'instant' }
  }
})
