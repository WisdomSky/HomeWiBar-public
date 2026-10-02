import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

/**
 * `base` is the one thing a GitHub Pages deploy usually gets wrong: a project site is served from
 * `/<repo>/`, not `/`, so every asset 404s. Derived from the repository name Actions already
 * exports — `<user>.github.io` is a user site at the root, anything else is a project site.
 */
function basePath(): string {
  if (process.env.VITE_BASE) return process.env.VITE_BASE
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  if (!repo) return '/'
  return repo.endsWith('.github.io') ? '/' : `/${repo}/`
}

export default defineConfig({
  base: basePath(),
  plugins: [vue(), tailwindcss()],
  build: { outDir: 'dist', assetsDir: 'assets' },
})
