<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { packs } from '../data/packs'
import { packImg } from '../assets/images'
import { waOrder, prefersReducedMotion } from '../utils'

// Slider 3D « Nos produits en vedette » : défilement automatique, flèches, clic et glissement
const cur = ref(0)
const vw = ref(window.innerWidth)
const n = packs.length
let timer
let startX = null

function itemStyle(i) {
  const cw = Math.min(300, vw.value * 0.64)
  const s = cw * 0.62
  let o = i - cur.value
  if (o > n / 2) o -= n
  if (o < -n / 2) o += n
  const a = Math.abs(o)
  return {
    transform: 'translateX(' + o * s + 'px) translateZ(' + -a * 150 + 'px) rotateY(' + -o * 40 + 'deg)',
    opacity: a > 2.5 ? 0 : 1 - a * 0.18,
    zIndex: 10 - Math.round(a),
    pointerEvents: a > 2.5 ? 'none' : 'auto'
  }
}

const go = (d) => { cur.value = (cur.value + d + n) % n }
function stop() { clearInterval(timer) }
function play() {
  stop()
  if (!prefersReducedMotion()) timer = setInterval(() => go(1), 2800)
}
const next = () => { go(1); play() }
const prev = () => { go(-1); play() }
const select = (i) => { cur.value = i; play() }
const down = (e) => { startX = e.clientX; stop() }
function up(e) {
  if (startX !== null && Math.abs(e.clientX - startX) > 40) go(e.clientX < startX ? 1 : -1)
  startX = null
  play()
}
const onResize = () => { vw.value = window.innerWidth }

onMounted(() => {
  window.addEventListener('resize', onResize)
  play()
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  stop()
})
</script>

<template>
<div class="stage3d"><h2>Nos produits en vedette</h2><p class="sub">Glissez ou utilisez les flèches pour parcourir les packs</p>
<div class="cv" id="cv" aria-roledescription="carrousel" aria-label="Packs Alubassa" @mouseenter="stop" @mouseleave="play" @pointerdown="down" @pointerup="up"><div class="tr" id="tr"><div v-for="(p, i) in packs" :key="p.id" class="it" :data-i="i" :style="itemStyle(i)" @click="select(i)"><img :src="packImg[p.img]" :alt="p.name"><div>{{ p.name }}<b>{{ p.price }} F</b></div></div></div></div>
<div class="nv"><button id="pv" aria-label="Précédent" @click="prev">←</button><a id="oc" :href="waOrder(packs[cur].name)" target="_blank" rel="noopener">Commander ce pack</a><button id="nx" aria-label="Suivant" @click="next">→</button></div></div>
</template>
