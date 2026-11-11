<script setup>
// Bannière de titre (photo + voile bleu + fil d'Ariane), identique sur toutes les pages
import { t } from '../i18n'
defineProps({ title: String, image: String })
</script>

<template>
<div class="ap-bn"><img :src="image" alt=""><i></i><div class="w"><h1 class="bt">{{ t(title) }}</h1><p class="bb"><RouterLink to="/">{{ t('Accueil') }}</RouterLink> <b>»</b> <span>{{ t(title) }}</span></p></div></div>
</template>
