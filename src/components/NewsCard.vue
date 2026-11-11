<script setup>
import { newsImg } from '../assets/images'
import { t } from '../i18n'
defineProps({ item: Object, index: { type: Number, default: 0 } })
</script>

<template>
<RouterLink class="nw" :style="{ '--d': index }" :to="'/actualites/' + item.id" :data-tag="t(item.tag)"><div class="im"><img :src="newsImg[item.id]" :alt="t(item.title)" loading="lazy"></div><div class="bd"><div class="mt"><span class="tg">{{ t(item.tag) }}</span><span>{{ t(item.date) }}</span></div><h3>{{ t(item.title) }}</h3><p>{{ t(item.excerpt) }}</p><span class="rm">{{ t('Lire la suite') }} <b>→</b></span></div></RouterLink>
</template>
