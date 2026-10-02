# Landing page

The showcase page for HomeWiBar: Vue 3 + TypeScript + Tailwind v4, built with Vite, published to
GitHub Pages by `.github/workflows/deploy-pages.yml`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks, then writes dist/
npm run preview  # serve the built output
```

```bash
swift build -c release
.build/release/HomeWiBar --render-shots /tmp/homewibar-shots   # panels + icon-1…5 + icon-unread
```

## Checking it without a browser

`npm run shots` server-renders the page to `/tmp/homewibar_preview.html` with the CSS and every image
inlined, so macOS Quick Look can rasterise it (`qlmanage -t -s 1500 -o /tmp/ql /tmp/homewibar_preview.html`).
Note that Quick Look lays the page out at a narrow viewport, so what you get is the stacked layout —
useful for checking that nothing is blank or clipped, not for checking the two-column desktop grid.
