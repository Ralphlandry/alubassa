<script setup>
import { newsImg } from '../assets/images'
defineProps({ item: Object, index: { type: Number, default: 0 } })
</script>

<template>
<RouterLink class="nw" :style="{ '--d': index }" :to="'/actualites/' + item.id" :data-tag="item.tag"><div class="im"><img :src="newsImg[item.id]" :alt="item.title" loading="lazy"></div><div class="bd"><div class="mt"><span class="tg">{{ item.tag }}</span><span>{{ item.date }}</span></div><h3>{{ item.title }}</h3><p>{{ item.excerpt }}</p><span class="rm">Lire la suite <b>→</b></span></div></RouterLink>
</template>
