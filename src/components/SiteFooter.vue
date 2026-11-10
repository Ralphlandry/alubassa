<script setup>
import { logoImg as logo } from '../assets/images'
</script>

<template>
<footer><div class="w"><div class="f"><div class="rv2 rv2-up" style="--d:0"><img :src="logo" alt="Logo Alubassa" width="130" height="130" style="border-radius:50%;margin-bottom:10px;width:130px;height:130px"><br><p>Aluminium pur, fabriqué au Cameroun. Alubassa, à vos côtés depuis toujours.</p></div>
<div class="rv2 rv2-up" style="--d:1"><h3>Navigation</h3><RouterLink to="/">Accueil</RouterLink><RouterLink to="/a-propos">À propos</RouterLink><RouterLink to="/packs">Nos packs</RouterLink><RouterLink to="/actualites">Actualités</RouterLink><RouterLink to="/contact">Contact</RouterLink></div>
<div class="rv2 rv2-up" style="--d:2"><h3>Suivez-nous</h3><a href="https://web.facebook.com/people/Alubassa-cmr/61579118047396/" target="_blank" rel="noopener">Facebook</a><a href="https://alubassa.com" target="_blank" rel="noopener">Boutique en ligne</a><a>Instagram, TikTok : Alubassa cmr</a></div>
<div class="rv2 rv2-up" style="--d:3"><h3>Nous contacter</h3><a href="tel:+237688360910">+237 688 360 910</a><a href="mailto:alubassa@alubassa.com">alubassa@alubassa.com</a><a>Marché Congo, Douala</a><a>Zone industrielle Bassa, Douala</a></div></div>
<div class="cp">© 2026 Alubassa. Tous droits réservés. <a href="https://nenxel.com">by Nenxel</a></div></div></footer>
</template>
