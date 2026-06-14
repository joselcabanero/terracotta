# Ecosystem DB — UI Kit

A high-fidelity, interactive recreation of **Eatable Adventures' Ecosystem DB** (Startup Intelligence) web app — the agrifood-tech startup/investor intelligence platform. Built as a click-through prototype with reusable React components.

> Recreated from the production source `github.com/joselcabanero/ecosystem-db` (Next.js 14 + Tailwind + shadcn/ui). Components here are simplified, mostly-cosmetic versions — they reproduce the look and the key interactions, not the real Firestore/data layer.

## Run it
Open `index.html` in a browser. No build step — React + Babel run in-browser. The mock data layer lives in `data.jsx`.

## Click-through flow
1. **Login** — Google OAuth card (mock). Click *Continue with Google*.
2. **Home** — agrifoodtech news grid + three recent-activity columns. Click *View all* to jump.
3. **Startups** — filterable, sortable entity table. Open *Filters*, sort columns, click a company.
4. **Detail** — startup profile: header, overview / funding / location / connected-nodes cards.
5. Sidebar **nav** routes between sections (Investors / People / Graph / etc. show honest "not reconstructed" placeholders — only Home, Startups and a Startup Detail are fully built, which together cover the whole component vocabulary).

## Files
| File | Component(s) |
|---|---|
| `index.html` | Loads React/Babel/Lucide, all `.jsx`, and the shared `colors_and_type.css` + interactive-state CSS. |
| `App.jsx` | Shell + routing state (auth → route → detail). |
| `data.jsx` | Mock startups, investors, people, news; sector/node/tag color maps. |
| `Icon.jsx` | `<Icon name>` — renders a Lucide glyph from the UMD global (the app's icon system). |
| `Primitives.jsx` | `Button`, `Card`, `SectorBadge`, `Chip`, `Eyebrow`. |
| `Sidebar.jsx` | Collapsible icon rail (52 → 200px) with grouped nav + active/hover states. |
| `TopBar.jsx` | Breadcrumb · global search pill · bug button · user. |
| `LoginScreen.jsx` | Google OAuth card. |
| `HomeScreen.jsx` | News cards + activity columns. |
| `StartupsScreen.jsx` | EntityList: toolbar, filter panel, sortable table, pagination. |
| `DetailScreen.jsx` | Startup profile cards + connected nodes. |

## Implementation notes
- **Icons** come from Lucide (CDN UMD) — the app uses `lucide-react`. Never hand-draw SVG icons; add a `<window.Icon name="…">`.
- **Interactive states** (hover, focus) are CSS-class driven (see the `<style>` block in `index.html`) rather than JS inline-style, so they repaint reliably. Discrete "active page" highlighting remounts the Sidebar via a React `key`.
- **Colors & type** are pulled from the shared `colors_and_type.css` + `grid.css` (copies of the design-system root token files) plus literal hex values matching the austere **International Typographic Style** palette — ink `#111`, paper `#fff`, and the single red `#E1251B`.
- To extend: add a screen component, export it on `window`, wire a route branch in `App.jsx`, and add a `<script type="text/babel" src>` tag in `index.html`.
