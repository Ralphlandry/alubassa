// Lien WhatsApp avec message de commande déjà rédigé
export const WHATSAPP = '237688360910'

export function waOrder(packName) {
  return `https://wa.me/${WHATSAPP}?text=` + encodeURIComponent('Bonjour, je souhaite commander le ' + packName + '.')
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
