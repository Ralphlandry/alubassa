<script setup>
import { watch, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import TopBar from './components/TopBar.vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import PromoPopup from './components/PromoPopup.vue'
import ToastMessage from './components/ToastMessage.vue'
import { revealElements } from './composables/reveal'
import { t } from './i18n'

const route = useRoute()

// Les colonnes du pied de page apparaissent au défilement, à chaque changement de page
function revealFooter() {
  nextTick(() => {
    const footer = document.querySelector('footer')
    if (footer) revealElements([...footer.querySelectorAll('.rv2')])
  })
}
onMounted(revealFooter)
watch(() => route.fullPath, revealFooter)
</script>

<template>
  <div id="site">
    <TopBar />
    <SiteHeader />
    <RouterView />
    <SiteFooter />
    <PromoPopup />
    <ToastMessage />
    <a class="wa" :href="'https://wa.me/237688360910?text=' + encodeURIComponent(t('Bonjour Alubassa'))" target="_blank" rel="noopener"
      :aria-label="t('Contacter Alubassa sur WhatsApp')">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3.5a12 12 0 0 0-10.3 18.2L4.5 28l6.5-1.2A12 12 0 1 0 16 3.5Z" />
        <path
          d="M12.1 10.1c.3-.6.7-.7 1-.7h.8c.3 0 .6.2.7.5l1 2.4c.1.3.1.6-.1.8l-.8 1c.7 1.3 1.8 2.4 3.1 3.1l1-.8c.2-.2.5-.2.8-.1l2.4 1c.3.1.5.4.5.7v.8c0 .4-.1.7-.7 1-1 .5-2.2.5-3.3.1-3.3-1.2-5.8-3.7-7-7-.4-1.1-.4-2.3.1-3.3Z" />
      </svg>
    </a>
  </div>
</template>
