<script setup>
import { useToast } from '../composables/useToast'
const { message, visible } = useToast()
</script>

<template>
<div class="toast" id="toast" role="status" v-show="visible">{{ message }}</div>
</template>
