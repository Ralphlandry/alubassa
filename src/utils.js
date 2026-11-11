// Lien WhatsApp avec message de commande déjà rédigé
import { locale } from './i18n'

export const WHATSAPP = '237688360910'

export function waOrder(packName) {
  const message = locale.value === 'en'
    ? 'Hello, I would like to order ' + packName + '.'
    : 'Bonjour, je souhaite commander le ' + packName + '.'
  return `https://wa.me/${WHATSAPP}?text=` + encodeURIComponent(message)
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
