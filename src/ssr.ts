/**
 * Server-render entry, used only to check the page from a terminal: it renders to static HTML, which
 * is then rasterised by macOS Quick Look so the layout can be inspected without a browser. Not part
 * of the deployed site.
 */
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'

export async function render(): Promise<string> {
  return await renderToString(createSSRApp(App))
}
