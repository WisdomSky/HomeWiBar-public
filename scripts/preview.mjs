/**
 * Renders the page to a standalone HTML file with the CSS and every image inlined, so it can be
 * rasterised by macOS Quick Look for a layout check without a browser.
 *
 *   npm run shots
 *   qlmanage -t -s 1400 -o /tmp/ql /tmp/homewibar_preview.html
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const { render } = await import('../dist-ssr/ssr.js')
const html = await render()

const assets = readdirSync('dist/assets')
const css = readFileSync(join('dist/assets', assets.find((f) => f.endsWith('.css'))), 'utf8')

const inlined = html.replace(/src="([^"]+\.png)"/g, (match, url) => {
  const stem = url.replace(/^.*\//, '').replace(/\.png$/, '')
  const hit = assets.find((f) => f.startsWith(stem) && f.endsWith('.png'))
  if (!hit) return match
  const b64 = readFileSync(join('dist/assets', hit)).toString('base64')
  return `src="data:image/png;base64,${b64}"`
})

writeFileSync(
  '/tmp/homewibar_preview.html',
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><style>${css}</style></head>` +
    `<body><div id="app">${inlined}</div></body></html>`,
)
const images = (inlined.match(/src="/g) || []).length
console.log(`wrote /tmp/homewibar_preview.html — ${inlined.length} bytes, ${images} images`)
