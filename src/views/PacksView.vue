<script setup>
import { ref, onMounted } from 'vue'
import { packs } from '../data/packs'
import { packImg, photos } from '../assets/images'
import { waOrder } from '../utils'
import { revealWithin } from '../composables/reveal'
import PageBanner from '../components/PageBanner.vue'
import { t } from '../i18n'

const root = ref(null)
onMounted(() => revealWithin(root.value))
</script>

<template>
<main data-pg="packs" ref="root">
<PageBanner title="Nos packs" :image="packImg.luxa" />
<section id="packs" class="band"><div class="w"><div class="c rv2 rv2-up" style="--d:0"><span class="eyebrow">{{ t('Maxi-Packs, mini-prix') }}</span><h2 class="t">{{ t('Nos packs') }}</h2><p class="lead">{{ t('Commandez par WhatsApp ou payez par Orange Money (code marchand 729648).') }}</p></div>
<div class="grid" id="grid"><article v-for="(p, i) in packs" :key="p.id" class="card rv2 rv2-up" :style="{ '--d': i % 4 }"><img :src="packImg[p.img]" :alt="t(p.name)" loading="lazy"><div class="b"><h3>{{ t(p.name) }}</h3><span class="price">{{ p.price }} FCFA</span><ul><li v-for="it in p.items" :key="it">{{ t(it) }}</li></ul><a class="o" :href="waOrder(p.name)" target="_blank" rel="noopener">{{ t('Commander sur WhatsApp') }}</a></div></article></div>
<h2 class="t rv2 rv2-up" style="margin-top:56px;font-size:28px;--d:0">{{ t('Autres packs et offres spéciales') }}</h2><p class="lead rv2 rv2-up" style="--d:1">{{ t('Les packs proposés lors de nos dernières campagnes. Demandez-nous leur disponibilité.') }}</p>
<ul class="pl">
<li class="rv2 rv2-up" style="--d:0"><span>{{ t('Pack Tété') }}<small>{{ t('Coquelle bombée 26, cuvette 50, daga 28') }}</small></span><b>25 000 FCFA</b></li>
<li class="rv2 rv2-up" style="--d:1"><span>{{ t('Pack E’Bolo') }}<small>{{ t('Cuvette 36, coquelle bombée 26, poêle 24') }}</small></span><b>13 000 FCFA</b></li>
<li class="rv2 rv2-up" style="--d:2"><span>{{ t('Pack Unity') }}<small>{{ t('Cuvette 36, timbale, coquelle bombée 26') }}</small></span><b>10 000 FCFA</b></li>
<li class="rv2 rv2-up" style="--d:3"><span>{{ t('Pack Kombi') }}<small>{{ t('Plat calice, cuvette 36, poêle 24') }}</small></span><b>5 500 FCFA</b></li>
<li class="rv2 rv2-up" style="--d:0"><span>{{ t('Pack Mother’s Shine') }}<small>{{ t('3 grands plateaux') }}</small></span><b>15 000 FCFA</b></li>
<li class="rv2 rv2-up" style="--d:1"><span>{{ t('Pack Moula') }}<small>{{ t('3 moules à gâteaux') }}</small></span><b>5 000 FCFA</b></li>
<li class="rv2 rv2-up" style="--d:2"><span>{{ t('Pack Signature') }}<small>{{ t('Poêle 24, cuvette 36, timbale, saladière 24, daga cylindrique 22, faitout coquelle 26') }}</small></span><b>24 000 FCFA</b></li>
<li class="rv2 rv2-up" style="--d:3"><span>{{ t('L’Élégance cuisine') }}<small>{{ t('Sauteuse 24, cuvette 36, timbale, daga cylindrique 28') }}</small></span><b>22 000 FCFA</b></li>
<li class="rv2 rv2-up" style="--d:0"><span>{{ t('Le Prestige Alubassa') }}<small>{{ t('Poêle 24, timbale, cuvette 50, faitout coquelle 24') }}</small></span><b>15 000 FCFA</b></li>
<li class="rv2 rv2-up" style="--d:1"><span>{{ t('Le Trésor de maman') }}<small>{{ t('Mijoteuse 24, java 22, timbale, cuvette 50') }}</small></span><b>13 000 FCFA</b></li>
<li class="rv2 rv2-up" style="--d:2"><span>{{ t('L’Instant gourmet') }}<small>{{ t('Cuvette 36, saladière 24, 2 timbales, casserole luxe') }}</small></span><b>13 000 FCFA</b></li>
<li class="rv2 rv2-up" style="--d:3"><span>{{ t('Pack Essentiel') }}<small>{{ t('Java 22, poêle 24, cuvette 40, timbale') }}</small></span><b>7 000 FCFA</b></li>
<li class="rv2 rv2-up" style="--d:0"><span>{{ t('Duo Éclat') }}<small>{{ t('Poêle 24, timbale, java 22, cuvette 36') }}</small></span><b>6 000 FCFA</b></li></ul></div></section>
<section id="commande" class="band"><div class="w"><div class="c rv2 rv2-up" style="--d:0"><span class="eyebrow">{{ t('Simple et rapide') }}</span><h2 class="t">{{ t('Comment commander') }}</h2></div>
<div class="steps"><div class="rv2 rv2-z" style="--d:0"><h3>{{ t('Choisissez') }}</h3><p>{{ t('Parcourez nos packs et repérez celui qui vous convient.') }}</p></div><div class="rv2 rv2-z" style="--d:1"><h3>{{ t('Contactez-nous') }}</h3><p>{{ t('Écrivez-nous sur WhatsApp au +237 688 360 910.') }}</p></div><div class="rv2 rv2-z" style="--d:2"><h3>{{ t('Payez') }}</h3><p>{{ t('Par Orange Money (code marchand 729648) ou directement en boutique.') }}</p></div><div class="rv2 rv2-z" style="--d:3"><h3>{{ t('Récupérez') }}</h3><p>{{ t('Retrait à la boutique du Marché Congo, ou convenez des modalités avec notre équipe.') }}</p></div></div></div></section>
<section id="boutique" class="pk-store"><div class="w"><div class="pk-store__layout">
<div class="pk-store__copy rv2 rv2-l" style="--d:0"><span class="pk-store__eyebrow">{{ t('Venez nous voir') }}</span><h2>{{ t('La boutique Alubassa') }}</h2>
<p class="pk-store__lead">{{ t('Retrouvez toute la gamme sur place, avec de nombreuses surprises à chaque visite.') }}</p>
<div class="pk-store__details"><div><span>{{ t('Adresse') }}</span><p>{{ t('Marché Congo, face mosquée sénégalaise, Douala') }}</p></div><div><span>{{ t('Horaires') }}</span><p>{{ t('Lundi au vendredi : 8h – 15h30') }}<br>{{ t('Samedi : 8h – 13h') }}</p></div></div>
<RouterLink class="pk-store__cta" to="/contact">{{ t('Nous contacter') }}</RouterLink></div>
<div class="pk-store__frame rv2 rv2-r" style="--d:1"><img class="pk-store__photo" :src="photos.shop" :alt="t('Étagères de la boutique Alubassa remplies de casseroles et de marmites')" width="800" height="800" loading="lazy"></div>
</div></div></section>
</main>
</template>
