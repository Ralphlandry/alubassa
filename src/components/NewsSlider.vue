<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { news } from '../data/news'
import { prefersReducedMotion } from '../utils'
import NewsCard from './NewsCard.vue'

// Slider horizontal des actualités (accueil) : défilement automatique, flèches et barre de progression
const track = ref(null)
const progress = ref('25%')
let paused = false
let timer

const step = () => track.value.children[0].offsetWidth + 22
function update() {
  const t = track.value
  progress.value = Math.max(12, ((t.scrollLeft + t.clientWidth) / t.scrollWidth) * 100) + '%'
}
const next = () => track.value.scrollBy({ left: step() })
const prev = () => track.value.scrollBy({ left: -step() })
const pause = (v) => { paused = v }
const touchEnd = () => setTimeout(() => { paused = false }, 2500)

onMounted(() => {
  update()
  if (!prefersReducedMotion()) {
    timer = setInterval(() => {
      if (paused) return
      const t = track.value
      if (t.scrollLeft + t.clientWidth >= t.scrollWidth - 6) t.scrollTo({ left: 0 })
      else t.scrollBy({ left: step() })
    }, 3200)
  }
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
<div class="nws"><div class="nwt" id="nwh" ref="track" @scroll.passive="update" @mouseenter="pause(true)" @mouseleave="pause(false)" @touchstart.passive="pause(true)" @touchend.passive="touchEnd"><NewsCard v-for="(n, i) in news" :key="n.id" :item="n" :index="i" /></div></div><div class="nsc"><div class="nsp"><i id="nsb" :style="{ width: progress }"></i></div><button id="nsp" aria-label="Précédent" @click="prev">←</button><button id="nsn" aria-label="Suivant" @click="next">→</button></div>
</template>
