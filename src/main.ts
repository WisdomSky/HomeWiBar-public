import { createApp } from 'vue'
import App from './App.vue'
import appIcon from '../HomeWiBar-vector.svg'
import './style.css'

// The tab icon is the app icon. It is set here rather than in index.html so Vite resolves the
// hashed URL and the GitHub Pages base path for us.
const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]') ?? document.createElement('link')
link.rel = 'icon'
link.type = 'image/svg+xml'
link.href = appIcon
if (!link.parentNode) document.head.append(link)

createApp(App).mount('#app')
