<script setup>
import { logoImg as logo } from '../assets/images'
import { t } from '../i18n'
</script>

<template>
<footer><div class="w"><div class="f"><div class="rv2 rv2-up" style="--d:0"><img :src="logo" :alt="t('Logo Alubassa')" width="130" height="130" style="border-radius:50%;margin-bottom:10px;width:130px;height:130px"><br><p>{{ t('Aluminium pur, fabriqué au Cameroun. Alubassa, à vos côtés depuis toujours.') }}</p></div>
<div class="rv2 rv2-up" style="--d:1"><h3>{{ t('Navigation') }}</h3><RouterLink to="/">{{ t('Accueil') }}</RouterLink><RouterLink to="/a-propos">{{ t('À propos') }}</RouterLink><RouterLink to="/packs">{{ t('Nos packs') }}</RouterLink><RouterLink to="/actualites">{{ t('Actualités') }}</RouterLink><RouterLink to="/contact">{{ t('Contact') }}</RouterLink></div>
<div class="rv2 rv2-up" style="--d:2"><h3>{{ t('Suivez-nous') }}</h3><a href="https://web.facebook.com/people/Alubassa-cmr/61579118047396/" target="_blank" rel="noopener">Facebook</a><a href="https://alubassa.com" target="_blank" rel="noopener">{{ t('Boutique en ligne') }}</a><a>Instagram, TikTok : Alubassa cmr</a></div>
<div class="rv2 rv2-up" style="--d:3"><h3>{{ t('Nous contacter') }}</h3><a href="tel:+237688360910">+237 688 360 910</a><a href="mailto:alubassa@alubassa.com">alubassa@alubassa.com</a><a>Marché Congo, Douala</a><a>Zone industrielle Bassa, Douala</a></div></div>
<div class="cp">© 2026 Alubassa. {{ t('Tous droits réservés.') }} <a href="https://nenxel.com">by Nenxel</a></div></div></footer>
</template>
