<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { logoImg as logo, photos, partners } from '../assets/images'
import { prefersReducedMotion } from '../utils'
import { createAboutReveal } from '../composables/reveal'

const root = ref(null)
const spb = ref(null)
const mqs = ref(null)
const r1 = ref(null)
const r2 = ref(null)
const activeDot = ref(0)
const dotLabels = ['Notre histoire', 'Qui sommes-nous', 'Engagement', 'Solutions', 'Contact']
const reduce = prefersReducedMotion()
let io
let sections = []

// Cartes « Particulier » / « Professionnel » : ouverture et fermeture
function toggleCard(e) {
  const button = e.currentTarget
  const open = button.parentNode.classList.toggle('open')
  button.setAttribute('aria-expanded', open)
}

// Flèches « ↓ » : descendent à la section suivante
function goNext(e) {
  e.currentTarget.closest('.st').nextElementSibling.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
}

// Points de navigation à droite
const scrollToSection = (i) => sections[i].scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })

// Défilement : barre de progression, bandes de texte qui glissent, point actif
function onScroll() {
  const d = document.documentElement
  const vh = window.innerHeight
  spb.value.style.width = (window.scrollY / (d.scrollHeight - vh)) * 100 + '%'
  const m = mqs.value.getBoundingClientRect()
  const x = (vh - m.top) * 0.35
  if (!reduce) {
    r1.value.style.transform = 'translateX(' + -x + 'px)'
    r2.value.style.transform = 'translateX(' + x + 'px)'
  }
  let k = 0
  sections.forEach((s, i) => {
    if (s.getBoundingClientRect().top < vh * 0.45) k = i
  })
  activeDot.value = k
}

onMounted(() => {
  sections = [...root.value.querySelectorAll('.st')]
  io = createAboutReveal(root.value)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (io) io.disconnect()
})
</script>

<template>
<main id="ap" data-pg="a-propos" ref="root">
<i id="spb" ref="spb"></i>
<div class="ap-bn"><img id="bn" :src="photos.history" alt=""><i></i><div class="w"><p class="bt">À propos</p><p class="bb"><RouterLink to="/">Accueil</RouterLink> <b>»</b> <span>À propos</span></p></div></div>
<div class="ap-h"><div class="w"><div><span class="eyebrow">À propos d’Alubassa</span>
<h1>L’aluminium<br>qui <em>brille</em><br>chez vous.</h1>
<p class="ap-lead">Alubassa fabrique au Cameroun des ustensiles en aluminium pur, pour toutes les cuisines.</p>
<div class="btns"><RouterLink class="cta" to="/packs">Découvrir nos packs</RouterLink><RouterLink class="ap-b2" to="/contact">Nous contacter</RouterLink></div></div>
<div class="ap-ph"><div class="ap-arch"><img id="hp" :src="photos.aboutHero" alt="Gamme de marmites, poêle et gobelet en aluminium pur Alubassa" width="900" height="650"></div>
<svg class="ap-rot" viewBox="0 0 120 120" aria-hidden="true"><defs><path id="cp" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"/></defs><text font-size="11" font-weight="700" letter-spacing="1.6" fill="#03269e"><textPath href="#cp">ALUMINIUM PUR • FABRIQUÉ AU CAMEROUN • </textPath></text></svg><img class="ap-lg" :src="logo" alt="Logo Alubassa" width="56" height="56"></div></div></div>
<section class="st soft"><div class="w hi-g"><div class="rv l"><span class="eyebrow">Depuis 1957</span><h2 class="t">Notre Histoire</h2>
<p>Créée en 1957 Alubassa est spécialisée dans la fabrication des articles de ménage en aluminium pur. Alubassa fabrique aussi des accessoires de couverture. Ses 250 employés œuvrent tous les jours pour couvrir les besoins des ménages du Cameroun, des pays de la sous-région CEMAC, des pays de l’Afrique de l’Ouest avec le Nigeria comme pôle principal.</p>
<p>Alubassa explore actuellement l’opportunité du boom du secteur des constructions pour ajouter à ses ustensiles de ménage des offres destinées à l’industrie du bâtiment. Il s’agit d’une panoplie de produits pliés et d’habillage comprenant des gouttières, des tôles faîtières, des panneaux pour façades en aluminium et des faux plafonds. L’avantage compétitif d’Alubassa réside dans son savoir-faire et la qualité du matériau qui est l’aluminium pure.</p>
<div class="hi-s"><div><b data-n="1957">0</b><span>Année de création</span></div><div><b data-n="250">0</b><span>Employés</span></div><div><b>CEMAC</b><span>Et Afrique de l’Ouest</span></div></div></div>
<div class="hi ap-clip rv"><img id="hi" :src="photos.history" alt="Un employé d’Alubassa façonne une plaque d’aluminium pur à l’atelier" width="900" height="652"></div></div>
<div class="w"><button class="st-cue" @click="goNext">Qui sommes-nous ?<i>↓</i></button></div></section>
<section class="st wb"><i class="ec-b" style="width:300px;height:300px;left:-90px;top:-70px"></i><i class="ec-b" style="width:170px;height:170px;right:5%;bottom:40px;animation-delay:-4s"></i>
<div class="w"><div class="wb-g"><div class="wb-t"><span class="eyebrow rv">Qui sommes-nous</span>
<p class="wb-big rv"><mark>Alubassa</mark> est votre partenaire de confiance pour des solutions <mark>aluminium</mark> de qualité.</p>
<p class="rv">Particulier, artisan, professionnel du bâtiment, entreprise ou distributeur : nous proposons des solutions adaptées à vos besoins, avec un accompagnement de proximité.</p>
<p class="rv">Notre expertise dans la transformation et la commercialisation de produits en aluminium nous permet de proposer des solutions pertinentes et professionnelles.</p>
<p class="rv">Retrouvez-nous à l’usine, en zone industrielle de Bassa, et à la boutique du Marché Congo, à Douala.</p></div>
<div class="wb-ph rv r"><img :src="photos.walk2" alt="L’équipe Alubassa rassemblée au Canton Bassa" width="800" height="533"><img class="st-seal" :src="logo" alt="Logo Alubassa" width="96" height="96"></div></div>
<div class="wb-s"><div class="wb-c rv" style="--d:0"><div class="ec-i"><span class="al">Al</span></div><b data-n="100" data-s=" %">0</b><span>Aluminium pur</span></div><div class="wb-c rv" style="--d:1"><div class="ec-i"><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z"/><path d="M8.500 12l2.500 2.500 4.500-5"/></svg></div><b>ISO 9001</b><span>Certifié Bureau Veritas</span></div><div class="wb-c rv" style="--d:2"><div class="ec-i"><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/></svg></div><b data-n="23">0</b><span>Packs au catalogue</span></div><div class="wb-c rv" style="--d:3"><div class="ec-i"><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.200 7-11.500A7 7 0 005 9.500C5 14.800 12 21 12 21z"/><circle cx="12" cy="9.500" r="2.500"/></svg></div><b data-n="2">0</b><span>Usine à Bassa et boutique au Marché Congo</span></div></div>
<button class="st-cue wb-cue" @click="goNext">Découvrez notre engagement produit<i>↓</i></button></div></section>
<section class="st soft"><div class="w"><span class="eyebrow rv">Notre engagement produit</span><h2 class="t rv">Pensé pour votre cuisine</h2></div>
<div class="st-mq" id="mqs" ref="mqs"><div class="st-row" id="r1" ref="r1"><span>100 % aluminium pur</span><b>●</b><span class="o">100 % healthy</span><b>●</b><span>100 % recyclable</span><b>●</b></div><div class="st-row" id="r2" ref="r2"><span class="o">Fabriqué au Cameroun</span><b>●</b><span>Aluminium pur</span><b>●</b><span class="o">ISO 9001</span><b>●</b></div></div>
<div class="w"><div class="by"><div class="by-t t1 bl rv z" style="--d:0"><div class="by-i"><span class="by-al">Al</span></div><h3>100 % aluminium pur</h3><p>Une matière noble pour des ustensiles robustes.</p><em class="by-w">01</em></div><div class="by-t t2 rv z" style="--d:1"><div class="by-i"><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8-5-8-11a4.500 4.500 0 018-2.700A4.500 4.500 0 0120 10c0 6-8 11-8 11z"/></svg></div><h3>100 % healthy</h3><p>Pensés pour une cuisine saine au quotidien.</p><em class="by-w">02</em></div><div class="by-t t3 rv z" style="--d:2"><div class="by-i"><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 01-14 5.300M4 12a8 8 0 0114-5.300"/><path d="M18 3v4h-4M6 21v-4h4"/></svg></div><h3>100 % recyclable</h3><p>Un matériau qui peut être recyclé.</p><em class="by-w">03</em></div><div class="by-t t6 bl rv z" style="--d:3"><div class="by-i"><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.200 7-11.500A7 7 0 005 9.500C5 14.800 12 21 12 21z"/><circle cx="12" cy="9.500" r="2.500"/></svg></div><h3>Fabriqué au Cameroun</h3><p>Produit localement, au plus près de vous.</p><em class="by-w">04</em></div></div></div><div class="w"><button class="st-cue" @click="goNext">Et pour qui est-ce fait ?<i>↓</i></button></div></section>
<section class="st"><div class="w"><div class="c rv"><span class="eyebrow">Une solution adaptée</span><h2 class="t">Pour chaque besoin</h2><p class="lead">Touchez une carte pour voir ce que nous vous proposons.</p></div>
<div class="st-so"><div class="st-sc rv l"><button class="hd" aria-expanded="false" @click="toggleCard"><small>Je suis un</small><h3>Particulier</h3><b>+</b></button><div class="ex"><div><p>Des packs complets à petits prix pour équiper votre cuisine, offrir un cadeau utile ou préparer un événement.</p><RouterLink class="cta" to="/packs">Voir nos packs</RouterLink></div></div></div>
<div class="st-sc rv r"><button class="hd" aria-expanded="false" @click="toggleCard"><small>Je suis un</small><h3>Professionnel ou distributeur</h3><b>+</b></button><div class="ex"><div><p>Chaque projet est unique. Nous étudions vos besoins pour trouver la solution la plus adaptée à votre usage et à votre budget.</p><RouterLink class="cta" to="/contact">Nous contacter</RouterLink></div></div></div></div></div><div class="w"><button class="st-cue" @click="goNext">Pourquoi nous faire confiance ?<i>↓</i></button></div></section>
<section class="st" style="padding-top:0"><div class="w"><div class="ab-ct rv z"><img :src="logo" alt="" width="90" height="90"><div><h2>Prêt à équiper votre cuisine ?</h2><p>Écrivez-nous sur WhatsApp ou passez à la boutique du Marché Congo.</p></div><a class="ab-wa" href="https://wa.me/237688360910?text=Bonjour%20Alubassa%2C%20je%20souhaite%20des%20informations." target="_blank" rel="noopener">Écrire sur WhatsApp</a></div></div></section>
<nav class="st-dots" aria-label="Chapitres"><button v-for="(t, i) in dotLabels" :key="t" :title="t" :aria-label="t" :class="{ on: i === activeDot }" @click="scrollToSection(i)"></button></nav>
</main>
</template>
