<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { logoImg as logo, packImg, photos } from '../assets/images'
import floatingProduct from '../assets/img/DSC08527-Photoroom.png'
import alucamLogo from '../assets/img/partners/alucam.svg'
import { prefersReducedMotion } from '../utils'
import { useToast } from '../composables/useToast'
import { revealWithin } from '../composables/reveal'
import ProductCarousel from '../components/ProductCarousel.vue'
import NewsSlider from '../components/NewsSlider.vue'

const root = ref(null)
const rsk = ref(null)
const status = ref(null)
const toast = useToast()
let rsPaused = false
let rsTimer

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

const showCatalogue = () => toast.show('Le catalogue PDF sera bientôt disponible.', 3500)

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
onBeforeUnmount(() => clearInterval(rsTimer))
</script>

<template>
<main id="top" ref="root">
<div class="hero"><div class="w"><div class="hlg" aria-hidden="true"><i class="hlg-h"></i><i class="hlg-r"></i><div class="hlg-f"><img class="hlg-i" :src="floatingProduct" alt="" width="2048" height="2732"></div></div>
<h1>Alubassa, à vos côtés depuis toujours.</h1>
<p>Vos Maxi-Packs à Mini-Prix : marmites, poêles, bols, plateaux et bien plus, fabriqués au Cameroun en aluminium pur.</p>
<ul class="ticks"><li>100 % aluminium pur, healthy et recyclable</li><li>Fabriqué au Cameroun</li><li>Certifié ISO 9001 par Bureau Veritas</li></ul>
<div class="btns"><RouterLink class="cta" to="/packs">Voir les packs</RouterLink><RouterLink class="btn2" to="/contact">Où nous trouver</RouterLink></div></div></div>

<ProductCarousel />

<section class="rs" aria-labelledby="rst"><div class="rs-l"><img :src="photos.walk1" alt="" loading="lazy"><i></i></div><div class="rs-r"></div>
<div class="w rs-g"><div class="rs-t hr"><em>ALUBASSA</em><h2 id="rst">Nos engagements</h2><p>Alubassa est votre partenaire de confiance pour des solutions aluminium de qualité. Particulier, artisan, professionnel du bâtiment, entreprise ou distributeur : nous proposons des solutions adaptées à vos besoins, avec un accompagnement de proximité.</p><RouterLink class="rs-b" to="/a-propos">Savoir plus</RouterLink></div>
<div class="rs-c hr" style="--d:2"><div class="rs-k" id="rsk" ref="rsk" @mouseenter="pauseRs(true)" @mouseleave="pauseRs(false)" @focusin="pauseRs(true)"><RouterLink class="rc" to="/a-propos"><h3>Qualité</h3><p>Fiables, durables et adaptés aux réalités du marché.</p><span>Savoir plus</span></RouterLink><RouterLink class="rc" to="/a-propos"><h3>Savoir-faire</h3><p>Une expertise dans la transformation de l’aluminium.</p><span>Savoir plus</span></RouterLink><RouterLink class="rc" to="/a-propos"><h3>Disponibilité</h3><p>Une offre accessible à tous, professionnels comme particuliers.</p><span>Savoir plus</span></RouterLink><RouterLink class="rc" to="/a-propos"><h3>Sur mesure</h3><p>Une solution adaptée à votre usage et à votre budget.</p><span>Savoir plus</span></RouterLink><RouterLink class="rc" to="/a-propos"><h3>Proximité</h3><p>Une équipe commerciale et technique à votre écoute.</p><span>Savoir plus</span></RouterLink></div><div class="rs-n"><button id="rsp" aria-label="Précédent" @click="rsPrev">←</button><button id="rsx" aria-label="Suivant" @click="rsNext">→</button></div></div></div></section>
<section class="hs"><div class="w"><div class="hh hr"><em>Alubassa</em><h2>Notre gamme</h2><i></i></div><div class="gag"><RouterLink class="ga hr" style="--d:0" to="/packs"><div class="im"><img :src="packImg.suspendus" alt="Cuisson" loading="lazy"></div><div class="bd"><h3>Cuisson</h3><p>Marmites, poêles, mijoteuses et faitouts pour toutes vos recettes.</p><span>Savoir plus <b>→</b></span></div></RouterLink><RouterLink class="ga hr" style="--d:1" to="/packs"><div class="im"><img :src="packImg.pizza" alt="Plats et plateaux" loading="lazy"></div><div class="bd"><h3>Plats et plateaux</h3><p>Plateaux, plats à pizza et moules à gâteaux.</p><span>Savoir plus <b>→</b></span></div></RouterLink><RouterLink class="ga hr" style="--d:2" to="/packs"><div class="im"><img :src="packImg.menages" alt="Bols et saladières" loading="lazy"></div><div class="bd"><h3>Bols et saladières</h3><p>Bols, saladières, timbales et cuvettes pour préparer et servir.</p><span>Savoir plus <b>→</b></span></div></RouterLink><RouterLink class="ga hr" style="--d:3" to="/packs"><div class="im"><img :src="packImg.elegant" alt="Friture" loading="lazy"></div><div class="bd"><h3>Friture</h3><p>Plats à frire et friteuses pour vos fritures.</p><span>Savoir plus <b>→</b></span></div></RouterLink></div></div></section>
<section class="hs soft"><div class="w"><div class="hh hr"><em>Alubassa</em><h2>Nos packs</h2><i></i></div><div class="ptg"><RouterLink class="pt hr" style="--d:0" to="/packs"><img :src="packImg.fete" alt="Pack Fête" loading="lazy"><div>Pack Fête<b>10 000 FCFA</b></div></RouterLink><RouterLink class="pt hr" style="--d:1" to="/packs"><img :src="packImg.elite" alt="Pack Élite" loading="lazy"><div>Pack Élite<b>30 000 FCFA</b></div></RouterLink><RouterLink class="pt hr" style="--d:2" to="/packs"><img :src="packImg.luxa" alt="Pack Luxa" loading="lazy"><div>Pack Luxa<b>20 000 FCFA</b></div></RouterLink><RouterLink class="pt hr" style="--d:3" to="/packs"><img :src="packImg.chopa" alt="Pack Chop A" loading="lazy"><div>Pack Chop A<b>10 000 FCFA</b></div></RouterLink><RouterLink class="pt hr" style="--d:4" to="/packs"><img :src="packImg.pizza" alt="Pack Pizza" loading="lazy"><div>Pack Pizza<b>5 000 FCFA</b></div></RouterLink><RouterLink class="pt hr" style="--d:5" to="/packs"><img :src="packImg.menages" alt="Pack Ménages" loading="lazy"><div>Pack Ménages<b>2 500 FCFA</b></div></RouterLink></div><p class="c hr" style="margin:34px 0 0"><RouterLink class="cta" to="/packs">Voir tous les packs</RouterLink></p></div></section>
<section class="ec"><i class="ec-b" style="width:300px;height:300px;left:-80px;top:-60px"></i><i class="ec-b" style="width:180px;height:180px;right:6%;bottom:30px;animation-delay:-4s"></i>
<div class="w"><div class="hh hr ec-h"><em>Alubassa</em><h2>En ce moment</h2><i></i></div><div class="ec-g">
<article class="ec-c hr" style="--d:0"><div class="ec-i"><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.500" cy="8.500" r="1.500"/></svg></div><h3>Offres du moment</h3><ul class="ec-o"><li><RouterLink to="/packs">Pack Fête</RouterLink><b>10 000 FCFA</b></li><li><RouterLink to="/packs">Pack Élite</RouterLink><b>30 000 FCFA</b></li><li><RouterLink to="/packs">Pack Luxa</RouterLink><b>20 000 FCFA</b></li><li><RouterLink to="/packs">Pack Pizza</RouterLink><b>5 000 FCFA</b></li><li><RouterLink to="/packs">Pack Ménages</RouterLink><b>2 500 FCFA</b></li></ul><RouterLink class="ec-m" to="/packs">Toutes les offres <b>→</b></RouterLink></article>
<article class="ec-c hr" style="--d:1"><div class="ec-i"><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9l1-5h14l1 5M4 9a3 3 0 006 0 3 3 0 006 0 3 3 0 004 0M5 12v8h14v-8"/><path d="M10 20v-5h4v5"/></svg></div><h3>À la boutique</h3><span v-if="status" class="ec-st" id="ecs" :class="{ off: !status.open }">{{ status.open ? 'Ouvert maintenant' : 'Actuellement fermé' }}</span><p><b>Marché Congo</b>, face mosquée sénégalaise, Douala</p><p>Lundi au vendredi : 8h – 15h30<br>Samedi : 8h – 13h</p><RouterLink class="ec-m" to="/packs/boutique">Voir la boutique <b>→</b></RouterLink></article>
<article class="ec-c hr" style="--d:2"><div class="ec-i"><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.500 1.500a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg></div><h3>Nous joindre</h3><p><a href="tel:+237688360910">+237 688 360 910</a><br><a href="mailto:alubassa@alubassa.com">alubassa@alubassa.com</a></p><p>Orange Money : code marchand 729648</p><a class="cta ec-w" href="https://wa.me/237688360910?text=Bonjour%20Alubassa" target="_blank" rel="noopener">Écrire sur WhatsApp</a><RouterLink class="ec-m" to="/contact">Page contact <b>→</b></RouterLink></article></div></div></section>
<section class="hs"><div class="w"><div class="hh hr"><em>Alubassa</em><h2>Galerie photos</h2><i></i></div><div class="glr"><figure class="gi hr" style="--d:0"><img :src="photos.walk1" alt="L’équipe Alubassa" loading="lazy"><figcaption>L’équipe Alubassa</figcaption></figure><figure class="gi hr" style="--d:1"><img :src="photos.walk2" alt="Canton Bassa" loading="lazy"><figcaption>Canton Bassa</figcaption></figure><figure class="gi hr" style="--d:2"><img :src="photos.shop" alt="La boutique du Marché Congo" loading="lazy"><figcaption>La boutique du Marché Congo</figcaption></figure><figure class="gi hr" style="--d:3"><img :src="packImg.pizza" alt="Pack Pizza" loading="lazy"><figcaption>Pack Pizza</figcaption></figure><figure class="gi hr" style="--d:4"><img :src="packImg.chopa" alt="Pack Chop A" loading="lazy"><figcaption>Pack Chop A</figcaption></figure></div></div></section>
<section class="hs soft"><div class="w"><div class="hh hr"><em>Alubassa</em><h2>Partenaire officiel</h2><i></i></div><div class="ptn"><div class="pn hr" style="--d:0"><div class="lg"><img :src="alucamLogo" alt="Logo Alucam, compagnie camerounaise d’aluminium"></div><h3>Alucam</h3></div></div></div></section>
<section class="hs"><div class="w"><div class="hh hr"><em>Alubassa</em><h2>Actualités</h2><i></i></div><NewsSlider /><p class="c hr" style="margin:34px 0 0"><RouterLink class="cta" to="/actualites">Toutes les actualités</RouterLink></p></div></section>
<section class="hs soft"><div class="w"><div class="nl hr"><img :src="logo" alt="" width="84" height="84"><div><em>Catalogue</em><h2>Télécharger et consulter tous nos produits dans notre catalogue</h2></div><a class="cta" id="cat" href="#" role="button" @click.prevent="showCatalogue">Télécharger</a></div></div></section>
<div class="cert"><div class="w"><img :src="logo" alt="" width="44" height="44" class="rv2 rv2-up" style="border-radius:50%;--d:0"><span class="rv2 rv2-up" style="--d:1"><b>ISO 9001</b> · Bureau Veritas</span><span class="rv2 rv2-up" style="--d:2">100 % aluminium pur</span><span class="rv2 rv2-up" style="--d:3">Fabriqué au Cameroun</span></div></div>
</main>
</template>
