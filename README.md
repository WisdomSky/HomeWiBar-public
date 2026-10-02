# Landing page

The showcase page for HomeWiBar: Vue 3 + TypeScript + Tailwind v4, built with Vite, published to
GitHub Pages by `.github/workflows/deploy-pages.yml`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks, then writes dist/
npm run preview  # serve the built output
```

## The download button

Its URL lives in exactly one place. Either edit `downloadUrl` in `src/data/site.ts`, or — better,
because it keeps the URL out of the source — set a repository variable:

**Settings → Secrets and variables → Actions → Variables → New variable**, name
`VITE_DOWNLOAD_URL`, value the release asset URL. Then re-run the deploy workflow
(**Actions → Deploy landing page → Run workflow**).

While it is empty the button renders disabled with a "soon" tag rather than linking to nothing, so the
page can be published before the first build exists. `repoUrl` in the same file is the source link;
while it is still the placeholder `https://github.com/`, the header and footer hide their Source
links instead of pointing somewhere wrong.

## Copy lives in one file

`src/data/site.ts` holds the features, bullets, icon levels, specs, limitations, install steps and the
live reading shown under the hero. The components lay them out and do not hard-code copy, so a claim
can be corrected without touching a `.vue` file.

## Colours

The whole page is three colours — `#0F5354`, `#2AA4B3`, `#54BA96`, the teals the desktop behind the
screenshots is made of. Every other value in `@theme` in `src/style.css` is one of those three mixed
toward white or black until it can carry text, and each one is commented with the contrast it actually
achieves:

| Role | Value | Contrast |
| --- | --- | --- |
| page | `#06292a` | — |
| surface (wells, panels, icon strip) | `#0f5354` | — |
| body text | `#eaf7f7` | 14.1:1 page · 8.0:1 surface |
| muted text | `#a6d4d7` | 9.6:1 · 5.5:1 |
| small labels | `#7cb8bc` | 7.0:1 page only |
| accent one — buttons, links, markers | `#2aa4b3` | 5.2:1 page · **3.0:1 on a surface, so never used there** |
| accent two — live reading, callout | `#54ba96` | 6.5:1 page |

`#2AA4B3` is a mid-tone. It is fine as a fill behind dark text (5.2:1) and fine as text on the dark
page, but it fails on a `#0F5354` surface — that is why the copy button's hover state uses the text
colour instead. If you add a component on a surface, keep the accents off it.

## Install copy

The six install steps (including the `xattr -dr com.apple.quarantine …` alternative to right-click
Open) live in `installSteps` in `src/data/site.ts`, each with an optional `command` that renders in a
terminal block with a copy button. The command is data, not markup, so changing the path or adding a
step does not touch a component.

## The icon

`HomeWiBar-vector.svg` in this folder is the app icon — the same artwork as
`../Resources/HomeWiBar.svg`, which `../Resources/make-icon.sh` turns into the `.icns` the macOS app
ships. Vite inlines it (it is about 1 kB), so it arrives as a data URI: no extra request, and the
GitHub Pages base path cannot break it.

It is used in three places: the tab icon, set from `main.ts` so Vite resolves the URL; the header
mark; and the footer mark. The five bar levels in the "icon is the reading" strip are a different
thing — those are the menu bar glyph, not the app icon.

## The screenshots

`pages/screenshots/` is the only copy. `src/data/site.ts` imports the four captures directly and the
build copies them through **byte for byte** — they are not cropped, re-framed or re-encoded, and each
figure is capped at the capture's own pixel width (`Feature.width`), so nothing is ever upscaled.

They are whole desktop captures, which is worth knowing before you re-take one. Measured from the
images themselves:

| Capture | Image | App window inside it |
| --- | --- | --- |
| `network-tab-screenshot.png` | 882 × 759 | panel at x 277–585 — 322 px, exactly the app's 322 pt |
| `connected-devices-screenshot.png` | 744 × 674 | panel ~318 px wide |
| `messages-panel-screenshot.png` | 1031 × 805 | window 820 px wide — the app's default 820 pt |
| `band-locking-panel-screenshot.png` | 1303 × 1236 | window ~760 × 1018 |

So the desktop is in every frame, and in the two menu-panel captures it is *through* the panel as
well: a MenuBarExtra popover is a translucent material, so the teal wallpaper behind it tints the
panel's own background. That is why the page's surfaces are the app's window grey rather than
near-black — the screenshots were drawn against a background like this one.

If you would rather the figures were tight to the window, crop them to the boxes above (with a few
pixels to spare — an earlier attempt cut 4 px off each edge and clipped the panel) and drop the
replacements into `pages/screenshots/` under the same names. Nothing else has to change: the widths
in `src/data/site.ts` are the only numbers that would need updating.

The six menu bar icons are rendered by the app itself, at 8× so they stay sharp on the page:

```bash
swift build -c release
.build/release/HomeWiBar --render-shots /tmp/homewibar-shots   # panels + icon-1…5 + icon-unread
```

## Checking it without a browser

`npm run shots` server-renders the page to `/tmp/homewibar_preview.html` with the CSS and every image
inlined, so macOS Quick Look can rasterise it (`qlmanage -t -s 1500 -o /tmp/ql /tmp/homewibar_preview.html`).
Note that Quick Look lays the page out at a narrow viewport, so what you get is the stacked layout —
useful for checking that nothing is blank or clipped, not for checking the two-column desktop grid.

## Deploying

Push to `main`. The workflow installs, builds and publishes `pages/dist`.

If the site 404s its assets, the cause is almost always `base`: a project site is served from
`/<repo>/`, not `/`. `vite.config.ts` derives it from `GITHUB_REPOSITORY` and treats a
`<user>.github.io` repository as a root site. Set `VITE_BASE` to override it, for instance behind a
custom domain at the root.
