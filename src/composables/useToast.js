import { ref } from 'vue'

// Petit message temporaire en bas de l'écran (partagé par toute l'application)
const message = ref('')
const visible = ref(false)
let timer

export function useToast() {
  function show(text, duration = 3500) {
    message.value = text
    visible.value = true
    clearTimeout(timer)
    timer = setTimeout(() => {
      visible.value = false
    }, duration)
  }
  return { message, visible, show }
}
