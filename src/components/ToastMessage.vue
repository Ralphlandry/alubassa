<script setup>
import { useToast } from '../composables/useToast'
import { t } from '../i18n'
const { message, visible } = useToast()
</script>

<template>
<div class="toast" id="toast" role="status" v-show="visible">{{ t(message) }}</div>
</template>
