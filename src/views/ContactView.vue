<script setup>
import { ref, reactive, onMounted } from 'vue'
import { photos } from '../assets/images'
import { WHATSAPP } from '../utils'
import { useToast } from '../composables/useToast'
import { revealWithin } from '../composables/reveal'
import PageBanner from '../components/PageBanner.vue'

const root = ref(null)
const toast = useToast()
const f = reactive({ n: '', t: '', e: '', m: '' })

// Pas de serveur : le message est préparé puis envoyé via WhatsApp
function submit() {
  const name = f.n.trim()
  const message = f.m.trim()
  if (!name || !message) {
    toast.show('Merci d’indiquer votre nom et votre message.', 3800)
    return
  }
  const text =
    'Bonjour Alubassa, je suis ' + name + '.' +
    (f.t.trim() ? ' Tél : ' + f.t.trim() + '.' : '') +
    (f.e.trim() ? ' E-mail : ' + f.e.trim() + '.' : '') +
    '\n' + message
  window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text), '_blank', 'noopener')
  toast.show('Ouverture de WhatsApp…', 3800)
  f.n = f.t = f.e = f.m = ''
}

onMounted(() => revealWithin(root.value))
</script>

<template>
<main data-pg="contact" ref="root">
<PageBanner title="Contact" :image="photos.shop" />
<section class="ct-s"><i class="ct-b" style="width:260px;height:260px;left:-60px;top:40px"></i><i class="ct-b" style="width:140px;height:140px;right:8%;top:20px;animation-delay:-3s"></i>
<div class="w ct-g"><form class="cf hr" id="cf" novalidate @submit.prevent="submit"><h2>Écrivez-nous</h2>
<label><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg><input name="n" v-model="f.n" placeholder="Nom complet" aria-label="Nom complet" autocomplete="name" required></label>
<label><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg><input name="t" v-model="f.t" type="tel" placeholder="Téléphone" aria-label="Téléphone" autocomplete="tel"></label>
<label><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg><input name="e" v-model="f.e" type="email" placeholder="E-mail" aria-label="E-mail" autocomplete="email"></label>
<label class="ta"><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/></svg><textarea name="m" v-model="f.m" rows="4" placeholder="Votre message" aria-label="Votre message" required></textarea></label>
<button class="cs" type="submit">Envoyer</button><p class="cn">Votre message s’ouvre dans WhatsApp, prêt à être envoyé. Vous préférez l’e-mail ? <a href="mailto:alubassa@alubassa.com">alubassa@alubassa.com</a></p></form>
<div class="ct-r"><div class="ct-t hr" style="--d:1"><h2>Un besoin ? Dites-nous bonjour !</h2><p>Votre besoin est spécifique ? Parlons-en. Écrivez-nous, appelez-nous ou passez à la boutique du Marché Congo : notre équipe commerciale et technique est à votre écoute.</p></div>
<div class="ct-i hr" style="--d:2"><div><b><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/></svg></b><a href="tel:+237688360910">+237 688 360 910</a></div><div><b><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></b><a href="mailto:alubassa@alubassa.com">alubassa@alubassa.com</a></div><div><b><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.800 12 21 12 21z"/><circle cx="12" cy="9.500" r="2.500"/></svg></b><span>Marché Congo, face mosquée sénégalaise, Douala</span></div><div><b><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></b><span>Lun–ven 8h–15h30 · Sam 8h–13h</span></div>
<div class="so"><span>Retrouvez-nous sur</span><a href="https://web.facebook.com/people/Alubassa-cmr/61579118047396/" target="_blank" rel="noopener" aria-label="Facebook"><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8V6.500c0-.7.3-1 1-1h2V2h-3c-3 0-4 2-4 4v2H8v3.500h2V22h4V11.500h2.600L17 8z"/></svg></a><a href="https://wa.me/237688360910" target="_blank" rel="noopener" aria-label="WhatsApp"><svg class="ic2" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21l1.600-4.800A9 9 0 1112 21a9 9 0 01-4.200-1z"/><path d="M9 8.500c0 3 3.500 6.500 6.500 6.500l1-1.800-2-1-1 .8a5 5 0 01-2.300-2.300l.8-1-1-2z"/></svg></a></div><p class="om">Orange Money : code marchand 729648 · Instagram, TikTok : Alubassa cmr</p></div></div></div></section>
<section class="ct-m"><div class="w"><div class="hh hr"><em>Alubassa</em><h2>Où nous trouver</h2><i></i></div>
<div class="mp-g"><div class="mp hr"><svg viewBox="0 0 600 420" role="img" aria-label="Plan indicatif des deux adresses d’Alubassa à Douala"><rect width="600" height="420" fill="#e6edff"/>
<path class="mp-bl" d="M40 40h150v90H40zM230 40h120v90H230zM390 40h170v90H390zM40 170h110v100H40zM190 170h160v100H190zM390 170h170v100H390zM40 310h200v80H40zM280 310h120v80H280zM440 310h120v80H440z" fill="#fff" opacity=".75"/>
<g class="mp-r"><path class="mp-d" d="M0 150H600M0 290H600M210 0V420M370 0V420" stroke-width="16"/><path class="mp-d" d="M0 20L600 400" stroke-width="9" opacity=".7"/><path class="mp-d" d="M0 230H600M130 0V420M470 0V420" stroke-width="6" opacity=".7"/></g>
<path class="mp-rt" d="M120 340C170 300 230 290 290 250S380 150 430 110" fill="none" stroke="#03269e" stroke-width="4" stroke-dasharray="3 12" stroke-linecap="round"/>
<g class="mp-p" style="--d:0"><circle class="pl" cx="120" cy="340" r="14" fill="#03269e"/><path d="M120 340l-14-34a16 16 0 1128 0z" fill="#03269e" transform="translate(0 -4)"/><circle cx="120" cy="306" r="6" fill="#fff"/><g><rect x="138" y="296" width="150" height="30" rx="15" fill="#fff"/><text x="213" y="316" text-anchor="middle" font-size="14" font-weight="700" fill="#03269e">Usine · Bassa</text></g></g>
<g class="mp-p" style="--d:1"><circle class="pl" cx="430" cy="110" r="14" fill="#e3201b"/><path d="M430 110l-14-34a16 16 0 1128 0z" fill="#e3201b" transform="translate(0 -4)"/><circle cx="430" cy="76" r="6" fill="#fff"/><g><rect x="330" y="28" width="200" height="30" rx="15" fill="#fff"/><text x="430" y="48" text-anchor="middle" font-size="14" font-weight="700" fill="#03269e">Boutique · Marché Congo</text></g></g></svg><small>Plan indicatif, pas à l’échelle</small></div>
<div class="ml hr" style="--d:1"><div class="mc"><h3><i style="background:#e3201b"></i>Boutique, Marché Congo</h3><p>Face mosquée sénégalaise, Douala<br>Lun–ven 8h–15h30 · Sam 8h–13h</p><a class="cta" href="https://www.google.com/maps/search/?api=1&amp;query=March%C3%A9+Congo+Douala" target="_blank" rel="noopener">Ouvrir dans Google Maps</a></div>
<div class="mc"><h3><i></i>Usine, zone industrielle Bassa</h3><p>Zone industrielle Bassa, Douala</p><a class="cta" href="https://www.google.com/maps/search/?api=1&amp;query=Zone+industrielle+Bassa+Douala" target="_blank" rel="noopener">Ouvrir dans Google Maps</a></div></div></div></div></section>
</main>
</template>
