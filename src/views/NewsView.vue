<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { news } from '../data/news'
import { newsImg, photos } from '../assets/images'
import { revealWithin } from '../composables/reveal'
import PageBanner from '../components/PageBanner.vue'
import NewsCard from '../components/NewsCard.vue'

const route = useRoute()
const root = ref(null)
const activeTag = ref('Toutes')
const tags = ['Toutes', ...new Set(news.map((n) => n.tag))]

const filtered = computed(() => news.filter((n) => activeTag.value === 'Toutes' || n.tag === activeTag.value))
const index = computed(() => news.findIndex((n) => n.id === route.params.id))
const item = computed(() => (index.value >= 0 ? news[index.value] : null))
const older = computed(() => (item.value ? news[index.value + 1] : null))
const newer = computed(() => (item.value ? news[index.value - 1] : null))

// Réaffiche les éléments animés quand on revient de la fiche à la liste
watch(item, () => nextTick(() => revealWithin(root.value)))
onMounted(() => revealWithin(root.value))
</script>

<template>
<main data-pg="actualites" ref="root">
<PageBanner title="Actualités" :image="photos.walk1" />
<section><div class="w"><div id="al" v-if="!item"><div class="chips rv2 rv2-up" style="--d:0"><button v-for="t in tags" :key="t" :class="{ on: t === activeTag }" @click="activeTag = t">{{ t }}</button></div><div class="nwg" id="nwp"><NewsCard v-for="(n, i) in filtered" :key="activeTag + n.id" :item="n" :index="i" /></div></div><div id="ad" class="ad" v-else><RouterLink class="back" to="/actualites">← Toutes les actualités</RouterLink><div class="adg"><img :src="newsImg[item.id]" :alt="item.title"><div><span class="tg">{{ item.tag }}</span><small>{{ item.date }}</small><h2>{{ item.title }}</h2><p v-for="paragraph in item.body" :key="paragraph">{{ paragraph }}</p><div class="btns"><RouterLink v-if="item.cta.to" class="cta" style="background:var(--blue)" :to="item.cta.to">{{ item.cta.label }}</RouterLink><a v-else class="cta" style="background:var(--blue)" :href="item.cta.href" target="_blank" rel="noopener">{{ item.cta.label }}</a></div></div></div><div class="adn"><span><RouterLink v-if="newer" :to="'/actualites/' + newer.id">← {{ newer.title }}</RouterLink></span><span><RouterLink v-if="older" :to="'/actualites/' + older.id">{{ older.title }} →</RouterLink></span></div></div></div></section>
</main>
</template>
