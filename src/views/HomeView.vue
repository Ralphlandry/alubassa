<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { logoImg as logo, packImg, photos } from '../assets/images'
import floatingProduct from '../assets/img/DSC08527-Photoroom.png'
import alucamLogo from '../assets/img/partners/ALUCAM-ASI-news-Logo.jpg'
import cataloguePdf from '../assets/img/catalogue produit .pdf'
import { t } from '../i18n'
import { prefersReducedMotion } from '../utils'
import { revealWithin } from '../composables/reveal'
import ProductCarousel from '../components/ProductCarousel.vue'
import NewsSlider from '../components/NewsSlider.vue'

const root = ref(null)
const rsk = ref(null)
const status = ref(null)
const catalogueDownloading = ref(false)
let rsPaused = false
let rsTimer
let catalogueTimer

// Voyant « Ouvert maintenant » : horaires de la boutique, heure de Douala
function computeStatus() {
  try {
    const d = new Date(new Date().toLocaleString('en-US', { timeZone: 'Africa/Douala' }))
    const day = d.getDay()
    const m = d.getHours() * 60 + d.getMinutes()
    const open = (day >= 1 && day <= 5 && m >= 480 && m < 930) || (day === 6 && m >= 480 && m < 780)
    status.value = { open }
  } catch (e) {
    status.value = null
  }
}

// Slider « Nos engagements »
const rsStep = () => rsk.value.children[0].offsetWidth + 14
const rsNext = () => rsk.value.scrollBy({ left: rsStep(), behavior: 'smooth' })
const rsPrev = () => rsk.value.scrollBy({ left: -rsStep(), behavior: 'smooth' })
const pauseRs = (v) => { rsPaused = v }
const startCatalogueDownload = () => {
  catalogueDownloading.value = true
  clearTimeout(catalogueTimer)
  catalogueTimer = setTimeout(() => { catalogueDownloading.value = false }, 2000)
}

onMounted(() => {
  computeStatus()
  revealWithin(root.value)
  if (!prefersReducedMotion()) {
    rsTimer = setInterval(() => {
      if (rsPaused) return
      const k = rsk.value
      if (k.scrollLeft + k.clientWidth >= k.scrollWidth - 6) k.scrollTo({ left: 0, behavior: 'smooth' })
      else k.scrollBy({ left: rsStep(), behavior: 'smooth' })
    }, 4200)
  }
})
onBeforeUnmount(() => {
  clearInterval(rsTimer)
  clearTimeout(catalogueTimer)
})
</script>

<template>
<main id="top" ref="root">
<div class="hero"><div class="w"><div class="hlg" aria-hidden="true"><i class="hlg-h"></i><i class="hlg-r"></i><div class="hlg-f"><img class="hlg-i" :src="floatingProduct" alt="" width="2048" height="2732"></div></div>
<h1>{{ t('Alubassa, à vos côtés depuis toujours.') }}</h1>
<p>{{ t('Vos Maxi-Packs à Mini-Prix : marmites, poêles, bols, plateaux et bien plus, fabriqués au Cameroun en aluminium pur.') }}</p>
<ul class="ticks"><li>{{ t('100 % aluminium pur, healthy et recyclable') }}</li><li>{{ t('Fabriqué au Cameroun') }}</li><li>{{ t('Certifié ISO 9001 par Bureau Veritas') }}</li></ul>
<div class="btns"><RouterLink class="cta" to="/packs">{{ t('Voir les packs') }}</RouterLink><RouterLink class="btn2" to="/contact">{{ t('Où nous trouver') }}</RouterLink></div></div></div>

<ProductCarousel />

<section class="rs" aria-labelledby="rst"><div class="rs-l"><img :src="photos.walk1" alt="" loading="lazy"><i></i></div><div class="rs-r"></div>
<div class="w rs-g"><div class="rs-t hr"><em>ALUBASSA</em><h2 id="rst">{{ t('Nos engagements') }}</h2><p>{{ t('Alubassa est votre partenaire de confiance pour des solutions aluminium de qualité. Particulier, artisan, professionnel du bâtiment, entreprise ou distributeur : nous proposons des solutions adaptées à vos besoins, avec un accompagnement de proximité.') }}</p><RouterLink class="rs-b" to="/a-propos">{{ t('Savoir plus') }}</RouterLink></div>
<div class="rs-c hr" style="--d:2"><div class="rs-k" id="rsk" ref="rsk" @mouseenter="pauseRs(true)" @mouseleave="pauseRs(false)" @focusin="pauseRs(true)"><RouterLink class="rc" to="/a-propos"><h3>{{ t('Qualité') }}</h3><p>{{ t('Fiables, durables et adaptés aux réalités du marché.') }}</p><span>{{ t('Savoir plus') }}</span></RouterLink><RouterLink class="rc" to="/a-propos"><h3>{{ t('Savoir-faire') }}</h3><p>{{ t('Une expertise dans la transformation de l’aluminium.') }}</p><span>{{ t('Savoir plus') }}</span></RouterLink><RouterLink class="rc" to="/a-propos"><h3>{{ t('Disponibilité') }}</h3><p>{{ t('Une offre accessible à tous, professionnels comme particuliers.') }}</p><span>{{ t('Savoir plus') }}</span></RouterLink><RouterLink class="rc" to="/a-propos"><h3>{{ t('Sur mesure') }}</h3><p>{{ t('Une solution adaptée à votre usage et à votre budget.') }}</p><span>{{ t('Savoir plus') }}</span></RouterLink><RouterLink class="rc" to="/a-propos"><h3>{{ t('Proximité') }}</h3><p>{{ t('Une équipe commerciale et technique à votre écoute.') }}</p><span>{{ t('Savoir plus') }}</span></RouterLink></div><div class="rs-n"><button id="rsp" :aria-label="t('Précédent')" @click="rsPrev">←</button><button id="rsx" :aria-label="t('Suivant')" @click="rsNext">→</button></div></div></div></section>
<section class="hs"><div class="w"><div class="hh hr"><em>Alubassa</em><h2>{{ t('Notre gamme') }}</h2><i></i></div><div class="gag"><RouterLink class="ga hr" style="--d:0" to="/packs"><div class="im"><img :src="packImg.suspendus" :alt="t('Cuisson')" loading="lazy"></div><div class="bd"><h3>{{ t('Cuisson') }}</h3><p>{{ t('Marmites, poêles, mijoteuses et faitouts pour toutes vos recettes.') }}</p><span>{{ t('Savoir plus') }} <b>→</b></span></div></RouterLink><RouterLink class="ga hr" style="--d:1" to="/packs"><div class="im"><img :src="packImg.pizza" :alt="t('Plats et plateaux')" loading="lazy"></div><div class="bd"><h3>{{ t('Plats et plateaux') }}</h3><p>{{ t('Plateaux, plats à pizza et moules à gâteaux.') }}</p><span>{{ t('Savoir plus') }} <b>→</b></span></div></RouterLink><RouterLink class="ga hr" style="--d:2" to="/packs"><div class="im"><img :src="packImg.menages" :alt="t('Bols et saladières')" loading="lazy"></div><div class="bd"><h3>{{ t('Bols et saladières') }}</h3><p>{{ t('Bols, saladières, timbales et cuvettes pour préparer et servir.') }}</p><span>{{ t('Savoir plus') }} <b>→</b></span></div></RouterLink><RouterLink class="ga hr" style="--d:3" to="/packs"><div class="im"><img :src="packImg.elegant" :alt="t('Friture')" loading="lazy"></div><div class="bd"><h3>{{ t('Friture') }}</h3><p>{{ t('Plats à frire et friteuses pour vos fritures.') }}</p><span>{{ t('Savoir plus') }} <b>→</b></span></div></RouterLink></div></div></section>
<section class="hs soft"><div class="w"><div class="hh hr"><em>Alubassa</em><h2>{{ t('Nos packs') }}</h2><i></i></div><div class="ptg"><RouterLink class="pt hr" style="--d:0" to="/packs"><img :src="packImg.fete" :alt="t('Pack Fête')" loading="lazy"><div>{{ t('Pack Fête') }}<b>10 000 FCFA</b></div></RouterLink><RouterLink class="pt hr" style="--d:1" to="/packs"><img :src="packImg.elite" :alt="t('Pack Élite')" loading="lazy"><div>{{ t('Pack Élite') }}<b>30 000 FCFA</b></div></RouterLink><RouterLink class="pt hr" style="--d:2" to="/packs"><img :src="packImg.luxa" :alt="t('Pack Luxa')" loading="lazy"><div>{{ t('Pack Luxa') }}<b>20 000 FCFA</b></div></RouterLink><RouterLink class="pt hr" style="--d:3" to="/packs"><img :src="packImg.chopa" :alt="t('Pack Chop A')" loading="lazy"><div>{{ t('Pack Chop A') }}<b>10 000 FCFA</b></div></RouterLink><RouterLink class="pt hr" style="--d:4" to="/packs"><img :src="packImg.pizza" :alt="t('Pack Pizza')" loading="lazy"><div>{{ t('Pack Pizza') }}<b>5 000 FCFA</b></div></RouterLink><RouterLink class="pt hr" style="--d:5" to="/packs"><img :src="packImg.menages" :alt="t('Pack Ménages')" loading="lazy"><div>{{ t('Pack Ménages') }}<b>2 500 FCFA</b></div></RouterLink></div><p class="c hr" style="margin:34px 0 0"><RouterLink class="cta" to="/packs">{{ t('Voir tous les packs') }}</RouterLink></p></div></section>
<section class="ec"><i class="ec-b" style="width:300px;height:300px;left:-80px;top:-60px"></i><i class="ec-b" style="width:180px;height:180px;right:6%;bottom:30px;animation-delay:-4s"></i>
<div class="w"><div class="hh hr ec-h"><em>Alubassa</em><h2>{{ t('En ce moment') }}</h2><i></i></div><div class="ec-g">
<article class="ec-c hr" style="--d:0"><div class="ec-i"><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.500" cy="8.500" r="1.500"/></svg></div><h3>{{ t('Offres du moment') }}</h3><ul class="ec-o"><li><RouterLink to="/packs">{{ t('Pack Fête') }}</RouterLink><b>10 000 FCFA</b></li><li><RouterLink to="/packs">{{ t('Pack Élite') }}</RouterLink><b>30 000 FCFA</b></li><li><RouterLink to="/packs">{{ t('Pack Luxa') }}</RouterLink><b>20 000 FCFA</b></li><li><RouterLink to="/packs">{{ t('Pack Pizza') }}</RouterLink><b>5 000 FCFA</b></li><li><RouterLink to="/packs">{{ t('Pack Ménages') }}</RouterLink><b>2 500 FCFA</b></li></ul><RouterLink class="ec-m" to="/packs">{{ t('Toutes les offres') }} <b>→</b></RouterLink></article>
<article class="ec-c hr" style="--d:1"><div class="ec-i"><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9l1-5h14l1 5M4 9a3 3 0 006 0 3 3 0 006 0 3 0 004 0M5 12v8h14v-8"/><path d="M10 20v-5h4v5"/></svg></div><h3>{{ t('À la boutique') }}</h3><span v-if="status" class="ec-st" id="ecs" :class="{ off: !status.open }">{{ t(status.open ? 'Ouvert maintenant' : 'Actuellement fermé') }}</span><p><b>Marché Congo</b>, {{ t('face mosquée sénégalaise, Douala') }}</p><p>{{ t('Lundi au vendredi : 8h – 15h30') }}<br>{{ t('Samedi : 8h – 13h') }}</p><RouterLink class="ec-m" to="/packs/boutique">{{ t('Voir la boutique') }} <b>→</b></RouterLink></article>
<article class="ec-c hr" style="--d:2"><div class="ec-i"><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.500 1.500a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg></div><h3>{{ t('Nous joindre') }}</h3><p><a href="tel:+237688360910">+237 688 360 910</a><br><a href="mailto:alubassa@alubassa.com">alubassa@alubassa.com</a></p><p>{{ t('Orange Money : code marchand 729648') }}</p><a class="cta ec-w" :href="'https://wa.me/237688360910?text=' + encodeURIComponent(t('Bonjour Alubassa'))" target="_blank" rel="noopener">{{ t('Écrire sur WhatsApp') }}</a><RouterLink class="ec-m" to="/contact">{{ t('Page contact') }} <b>→</b></RouterLink></article></div></div></section>
<section class="hs"><div class="w"><div class="hh hr"><em>Alubassa</em><h2>{{ t('Galerie photos') }}</h2><i></i></div><div class="glr"><figure class="gi hr" style="--d:0"><img :src="photos.walk1" :alt="t('L’équipe Alubassa')" loading="lazy"><figcaption>{{ t('L’équipe Alubassa') }}</figcaption></figure><figure class="gi hr" style="--d:1"><img :src="photos.walk2" :alt="t('Canton Bassa')" loading="lazy"><figcaption>{{ t('Canton Bassa') }}</figcaption></figure><figure class="gi hr" style="--d:2"><img :src="photos.shop" :alt="t('La boutique du Marché Congo')" loading="lazy"><figcaption>{{ t('La boutique du Marché Congo') }}</figcaption></figure><figure class="gi hr" style="--d:3"><img :src="packImg.pizza" :alt="t('Pack Pizza')" loading="lazy"><figcaption>{{ t('Pack Pizza') }}</figcaption></figure><figure class="gi hr" style="--d:4"><img :src="packImg.chopa" :alt="t('Pack Chop A')" loading="lazy"><figcaption>{{ t('Pack Chop A') }}</figcaption></figure></div></div></section>
<section class="hs soft"><div class="w"><div class="hh hr"><em>Alubassa</em><h2>{{ t('Partenaire officiel') }}</h2><i></i></div><div class="ptn"><div class="pn hr" style="--d:0"><div class="lg"><img :src="alucamLogo" :alt="t('Logo Alucam, compagnie camerounaise d’aluminium')"></div><h3>Alucam</h3></div></div></div></section>
<section class="hs"><div class="w"><div class="hh hr"><em>Alubassa</em><h2>{{ t('Actualités') }}</h2><i></i></div><NewsSlider /><p class="c hr" style="margin:34px 0 0"><RouterLink class="cta" to="/actualites">{{ t('Toutes les actualités') }}</RouterLink></p></div></section>
<section class="hs soft"><div class="w"><div class="nl hr"><img :src="logo" alt="" width="84" height="84"><div><em>{{ t('Catalogue') }}</em><h2>{{ t('Télécharger et consulter tous nos produits dans notre catalogue') }}</h2></div><span class="nl-action" :class="{ 'is-downloading': catalogueDownloading }"><span class="nl-game" aria-hidden="true"><svg class="nl-arrow" viewBox="0 0 40 40"><path d="M4 20h27m-9-9 9 9-9 9"/></svg><span class="nl-box"><img class="nl-product" :src="floatingProduct" alt=""><i class="nl-carton-lid"></i><i class="nl-carton"></i></span></span><a class="cta" id="cat" :href="cataloguePdf" download="catalogue-alubassa.pdf" @click="startCatalogueDownload">{{ t('Télécharger') }}</a></span></div></div></section>
<div class="cert"><div class="w"><img :src="logo" alt="" width="44" height="44" class="rv2 rv2-up" style="border-radius:50%;--d:0"><span class="rv2 rv2-up" style="--d:1"><b>ISO 9001</b> · Bureau Veritas</span><span class="rv2 rv2-up" style="--d:2">{{ t('100 % aluminium pur') }}</span><span class="rv2 rv2-up" style="--d:3">{{ t('Fabriqué au Cameroun') }}</span></div></div>
</main>
</template>
