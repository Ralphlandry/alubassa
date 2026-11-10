import { prefersReducedMotion } from '../utils'

/* ---- Apparition des éléments au défilement (accueil, packs, actualités, contact, pied de page) ---- */
let observer

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in', 'in2')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )
  }
  return observer
}

export function revealElements(els) {
  els.forEach((el) => el.classList.remove('in', 'in2'))
  void document.body.offsetWidth // force le navigateur à rejouer la transition
  els.forEach((el) => getObserver().observe(el))
}

export function revealWithin(root) {
  if (root) revealElements([...root.querySelectorAll('.rv2, .hr')])
}

/* ---- Compteurs animés (page À propos) ---- */
export function countUp(el) {
  const n = +el.dataset.n
  const suffix = el.dataset.s || ''
  if (prefersReducedMotion()) {
    el.textContent = n + suffix
    return
  }
  let t0 = null
  const step = (t) => {
    t0 = t0 || t
    const p = Math.min((t - t0) / 1500, 1)
    el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))) + suffix
    if (p < 1) requestAnimationFrame(step)
  }
  step(performance.now())
}

/* ---- Apparition spécifique à la page À propos (.rv, .ap-clip, compteurs) ---- */
export function createAboutReveal(root) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          if (entry.target.dataset.n) countUp(entry.target)
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )
  root.querySelectorAll('.rv, .ap-clip, [data-n]').forEach((el) => io.observe(el))
  return io
}
