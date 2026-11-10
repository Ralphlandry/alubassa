import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// "preserve" garde les espaces du HTML d'origine : le rendu reste identique.
export default defineConfig({
  base: './',
  plugins: [
    vue({
      template: { compilerOptions: { whitespace: 'preserve' } }
    })
  ]
})
