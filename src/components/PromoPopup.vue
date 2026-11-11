<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { newsImg } from '../assets/images'
import { t } from '../i18n'

// Fenêtre d'offre : affichée une seule fois, 10 secondes après l'arrivée sur le site
const KEY = 'alubassa_promo_v1'
const open = ref(false)
const closeBtn = ref(null)
let memory = false
let previous = null
let timer

function seen() {
  try {
    return localStorage.getItem(KEY) === '1' || memory
  } catch (e) {
    return memory
  }
}
function mark() {
  memory = true
  try {
    localStorage.setItem(KEY, '1')
  } catch (e) {}
}
function onKey(e) {
  if (e.key === 'Escape') close()
}
function close() {
  open.value = false
  mark()
  document.removeEventListener('keydown', onKey)
  if (previous && previous.focus) previous.focus()
}
function show() {
  open.value = true
  mark()
  previous = document.activeElement
  document.addEventListener('keydown', onKey)
  nextTick(() => closeBtn.value && closeBtn.value.focus())
}

onMounted(() => {
  if (!seen()) timer = setTimeout(() => { if (!seen()) show() }, 10000)
})
onBeforeUnmount(() => {
  clearTimeout(timer)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
<div class="pp" id="pp" v-show="open" @click.self="close"><div class="pc" role="dialog" aria-modal="true" :aria-label="t('Offre spéciale Alubassa')"><button class="px" id="px" ref="closeBtn" :aria-label="t('Fermer')" @click="close">×</button><img id="ppi" :src="newsImg.maman" :alt="t('Pour maman : Pack Mother’s Shine à 15 000 FCFA et Pack Moula à 5 000 FCFA')" width="640" height="640"><RouterLink class="cta" id="pb" to="/packs" @click="close">{{ t('Voir les packs') }}</RouterLink></div></div>
</template>
