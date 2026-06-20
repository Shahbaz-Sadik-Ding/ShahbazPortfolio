import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change the base to '/your-repo-name/' if you host in a project repo
// (e.g. shahbazsadik.github.io/shahbaz-portfolio/).
// Keep '/' if the repo is named 'shahbazsadik.github.io' (user site).
export default defineConfig({
  plugins: [react()],
  base: '/shahbazportfolio/',
})
