<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { logoImg as logo } from '../assets/images'

const route = useRoute()
const nv = ref(null)
const ind = ref(null)
const menuOpen = ref(false)
const scrolled = ref(false)

const active = computed(() => {
  const p = route.path
  if (p === '/') return 'home'
  if (p.startsWith('/a-propos')) return 'about'
  if (p.startsWith('/packs')) return 'packs'
  if (p.startsWith('/actualites')) return 'news'
  if (p.startsWith('/contact')) return 'contact'
  return ''
})

const activeEl = () => (nv.value ? nv.value.querySelector('a.on:not(.cta)') : null)

// Déplace la pastille bleu pâle sous le lien survolé (ou le lien actif)
function mv(a) {
  const i = ind.value
  if (!i) return
  if (!a || window.innerWidth <= 1000) {
    i.style.opacity = 0
    return
  }
  i.style.width = a.offsetWidth + 'px'
  i.style.transform = 'translateX(' + a.offsetLeft + 'px)'
  i.style.opacity = 1
}

const onScroll = () => {
  scrolled.value = window.scrollY > 30
}
const onResize = () => mv(activeEl())

watch(active, async () => {
  await nextTick()
  mv(activeEl())
})
watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  }
)

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
  window.addEventListener('load', onResize)
  setTimeout(onResize, 400)
  nextTick(onResize)
  onScroll()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('load', onResize)
})
</script>

<template>
<header :class="{ sc: scrolled }"><div class="w"><RouterLink class="logo" to="/" aria-label="Alubassa, accueil"><img :src="logo" alt="Logo Alubassa" width="46" height="46" style="border-radius:50%;display:block"></RouterLink>
<nav id="nv" ref="nv" :class="{ open: menuOpen }" @mouseleave="mv(activeEl())"><i id="nvi" ref="ind"></i><RouterLink to="/" :class="{ on: active === 'home' }" @mouseenter="mv($event.currentTarget)" @focus="mv($event.currentTarget)">Accueil</RouterLink><RouterLink to="/a-propos" :class="{ on: active === 'about' }" @mouseenter="mv($event.currentTarget)" @focus="mv($event.currentTarget)">À propos</RouterLink><RouterLink to="/packs" :class="{ on: active === 'packs' }" @mouseenter="mv($event.currentTarget)" @focus="mv($event.currentTarget)">Nos packs</RouterLink><RouterLink to="/actualites" :class="{ on: active === 'news' }" @mouseenter="mv($event.currentTarget)" @focus="mv($event.currentTarget)">Actualités</RouterLink><RouterLink class="cta" to="/contact">Contact</RouterLink></nav><button class="bg" id="bg" aria-label="Menu" :aria-expanded="String(menuOpen)" @click="menuOpen = !menuOpen"><span></span><span></span><span></span></button></div></header>
</template>
