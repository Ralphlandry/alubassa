<script setup>
// Bannière de titre (photo + voile bleu + fil d'Ariane), identique sur toutes les pages
defineProps({ title: String, image: String })
</script>

<template>
<div class="ap-bn"><img :src="image" alt=""><i></i><div class="w"><h1 class="bt">{{ title }}</h1><p class="bb"><RouterLink to="/">Accueil</RouterLink> <b>»</b> <span>{{ title }}</span></p></div></div>
</template>
