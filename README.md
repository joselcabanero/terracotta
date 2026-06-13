# Eatable Adventures — Design System

A faithful, reusable design system for **Eatable Adventures'** internal product, **Ecosystem DB** (a.k.a. *Startup Intelligence*) — a graph-based intelligence platform for the agrifood-tech & agritech startup ecosystem. It manages startups, investors, people, and corporate entities, and its headline use case is **matching startups with investors** by taxonomy alignment.

This folder gives a design agent everything needed to produce on-brand interfaces, mockups, prototypes, and slides: design tokens (color + type), real brand assets, written tone/voice guidance, and a high-fidelity UI kit recreating the product.

---

## Source material

Everything here was reverse-engineered from the production codebase. Explore it directly for deeper fidelity:

- **App repo:** `github.com/joselcabanero/ecosystem-db` (private) — Next.js 14 App Router + Firebase + Tailwind + shadcn/ui.
  - Design tokens: `src/app/globals.css`, `tailwind.config.ts`, `components.json`
  - Sector/taxonomy color map: `lib/ontology-colors.ts`, `src/lib/taxonomy.ts`
  - App shell: `src/components/{app-layout,sidebar,top-bar}.tsx`
  - Core list/table: `src/components/EntityList.tsx`; pages under `src/app/{home,startups,investors,people,corporate,graph,programs,settings}`
  - Brand mark: `public/logo.svg`
  - Product narrative: `SPEC.md`, `VIBE_PROMPT.md`, `CLAUDE.md`
- **Related repos in the same ecosystem** (not used directly here, but relevant context): `ecosystem-discovery-agent`, `eatable-ontology-showcase`, `Taxonomia`.

> Note for the reader: these repos are private. If you have access, browsing them will let you build with even higher fidelity (e.g. exact filter logic, the matching algorithm, the full taxonomy).

---

## The product at a glance

- **One product, one surface:** a desktop-first internal web app. No marketing site, no mobile app. Auth is Google OAuth gated to `@eatableadventures.com`.
- **Shape:** a persistent left **icon-rail sidebar** (collapsible 52px → 200px) + a 64px **top bar** (breadcrumb · global search · user) + a scrollable content area with `24px` padding.
- **Primary objects:** `nodes` (startup / investor / person / corporate) linked by `edges` (works_at, founded, invested_in, advises, partnered_with, member_of).
- **Core screens:** Home (news + recent activity), entity Lists (filterable tables), entity Detail, Add/Edit forms, Graph explorer (force-directed), Programs (saved filter/match sets), Settings (CSV import + users).
- **Domain taxonomy** (sectors): Agritech · Innovative Food · Food Logistics & Delivery · In-store Retail & Restaurant Tech · Kitchen & Cooking Tech · Food as a Medicine.

---

## CONTENT FUNDAMENTALS — voice & copy

The product's copy is **terse, functional, and unfussy** — the register of an internal analyst tool, not a consumer brand.

- **Tone:** Neutral, professional, low-ceremony. No marketing adjectives, no exclamation, no emoji. It reads like a well-built database admin tool.
- **Person:** Mostly **impersonal / imperative**. Labels are nouns ("Startups", "Investors", "Programs"); helper lines are short third-person descriptions ("Browse and filter all startups"). When it addresses the user it's brief and direct ("Access is granted by your administrator").
- **Casing:**
  - **Page & section titles:** Title Case or sentence case headline ("Startups", "Recent Activity", "Latest Startups").
  - **Eyebrows / section dividers on Home:** **UPPERCASE, letter-spaced** ("AGRIFOODTECH NEWS", "RECENT INVESTMENT ROUNDS").
  - **Sidebar group labels:** lowercase→UPPERCASE mono micro-labels ("MAIN", "DB", "TOOLS") in IBM Plex Mono, 9px, tracked.
  - **Table column headers:** UPPERCASE, 12px, tracked, neutral-500.
  - **Buttons:** Sentence case ("Add Startup", "Save filter", "Export", "Continue with Google").
- **Microcopy patterns:**
  - Counts are explicit and terse: "{n} total", "1–25 of 312", "{n} rows match current filters".
  - Empty states are plain and slightly soft: "No results found.", "No recent additions in this region.", "News unavailable — check back later."
  - Em dashes ("—") are used as the null/placeholder glyph in table cells and as a soft separator in meta lines.
  - Toasts confirm actions in past tense: "Startup deleted", "Exported 50 rows as CSV", 'Filter "Series A in Europe" saved'.
- **Naming:** Internal/domain vocabulary is used confidently without explanation — "nodes", "edges", "Programs", "Watchlists", "Rounds Inbox", "match score", "taxonomy". The audience is internal experts.
- **Vibe:** *Bloomberg-terminal-for-foodtech, warmed up.* Dense, data-first, on warm paper with a confident coral/amber identity. Information over decoration.

**Do:** "Browse and filter all startups" · "{n} total" · "Add Startup"
**Don't:** "Discover amazing startups! 🚀" · "Oops! Nothing here yet" · "Click here to get started"

---

## VISUAL FOUNDATIONS

A **warm, high-density, shadcn/ui (new-york) system** built on the Eatable Adventures brand palette. The aesthetic is restrained and utilitarian but appetising — warm paper/cream surfaces, hairline warm borders, charcoal text and actions, and a coral→brick→amber accent family reserved for identity, highlights, and selected state.

**Brand palette (8 swatches):** Paper `#FFFFFF` · Cream `#FFF9EE` · Sand `#F5EACE` · Amber `#FFA103` · Coral `#DE5533` · Brick `#BC2D29` · Wine `#450E14` · Ink `#1E1E1E`.

### Color
- **Warm neutrals do the work.** Backgrounds are white (`#fff`) with cream (`#FFF9EE`) and sand (`#F5EACE`) for section surfaces; content sits on white cards with `1px` warm borders (`#EBE2D2`). Text runs charcoal (`#1E1E1E`), secondary `#7C726C`, faint meta `#ABA097`. Wells/chips use warm `#FBF3E2`.
- **Primary actions are charcoal, not coral.** The main button is ink `#1E1E1E` with cream text (`#FFF9EE`) → hover `#38302C`. Following the shadcn move — dark = action, brand color = identity.
- **Coral `#DE5533` is the headline brand color**, with **brick `#BC2D29`** as its darker, more readable pair and **amber `#FFA103`** as the highlight. Used for the `EA` monogram tile (coral fill, cream text), the **active nav item** (brick text/icon on `#FDECE4` coral tint), links, and focus rings. Tint `#FDECE4` is the "selected" background.
- **Semantic / domain color is data, not chrome.** Sector badges use the canonical ontology palette (greens for Agritech/Innovative Food, ambers/oranges for Logistics & Retail, purple for Food-as-Medicine). Node-type colors (startup blue / investor green / person purple / corporate orange) color the graph and entity badges. These are kept from the production app as data-encoding colors and intentionally sit apart from the warm brand chrome.

### Type
- **Inter** for everything UI (400/500/600/700), with stylistic sets `cv11`+`ss01` enabled for a cleaner, slightly technical character. **IBM Plex Mono** (400/500) for micro-labels, the monogram, and numeric/system accents.
- **Small and tight.** Page titles are only 24px (`font-medium`, `tracking-tight`); section headers 20px `font-semibold`; body/table text 14px; dense meta 11–13px. Letter-spacing is tightened on headings (`-0.01…-0.02em`) and widened on uppercase mono labels.
- Hierarchy comes from **weight + color + size**, not from large display type. There is no serif and no display face.

### Spacing, layout & shape
- **4px base grid.** Content padding `24px` (`p-6`); card padding `12–16px`; tight `gap-1.5/gap-2` clusters inside rows.
- **Corner radii:** controls/buttons/inputs `8px` (`rounded-lg`) — sometimes `6px` (`rounded-md`) for inner controls; **cards & containers `12px`** (`rounded-xl`); badges & avatars `9999px` (fully round). The base shadcn `--radius` is `0.5rem`.
- **Fixed app frame:** sidebar and top bar are fixed; only the content column scrolls. Tables live inside a single bordered, rounded-xl container with a `neutral-50` header and `divide-y` hairline rows.

### Borders, elevation & surfaces
- **Borders before shadows.** The system leans on `1px` hairline borders (`#e5e5e5`, dividers `#f5f5f5`) far more than shadow. Cards are flat with a border; shadow appears only subtly on hover (`hover:shadow-sm`) or on floating surfaces (login card, popovers, dialogs).
- Shadows are the soft shadcn scale (`shadow-sm` → `shadow-lg`); never heavy or colored. No glows, no neumorphism.
- No gradients anywhere in chrome. No background images, textures, or patterns. Surfaces are flat white/neutral.

### Motion
- **Minimal and quick.** Page content fades in with `fadeIn` — `opacity 0→1` + `translateY(4px→0)` over **0.15s ease-out**. Sidebar expand/collapse is a `200ms` width transition. Hovers are `transition-colors` (background/text only). A 2px black top-loader bar (`#000`) marks route changes.
- **No** bounces, springs, parallax, or decorative looping animation. Interaction states change color, not size.

### Interaction states
- **Hover:** subtle background shift — rows → `#fafafa`; ghost buttons → `#f5f5f5` / darker text; cards → border darkens to `neutral-400` + `shadow-sm`; links → underline.
- **Active/selected nav:** `#FDECE4` coral-tint background, `#BC2D29` brick icon + label.
- **Press:** primary ink button darkens to `#38302C`; brand elements darken. No scale-down.
- **Focus:** coral focus ring (`--ring` = `#DE5533`) on inputs / the search pill. Visible but quiet.
- **Disabled:** `opacity` drop (35–50%), `cursor-not-allowed`; "soon" features dimmed in nav.

### Cards (the recurring unit)
White background · `1px` `#e5e5e5` border · `rounded-xl` (12px) · no/minimal shadow at rest · optional `hover:shadow-sm` + border darken. Card header is a `text-sm font-semibold` title with an optional `neutral-100` bottom divider; body is dense rows or a small stat. This single pattern composes the entire UI — news cards, activity columns, detail cards, list containers.

---

## ICONOGRAPHY

- **System:** [**Lucide**](https://lucide.dev) (`lucide-react`), used everywhere — outline, ~1.5px stroke, rounded joins, drawn on a 24px grid and rendered at **16px** (`w-4 h-4`) in nav/buttons and 12–14px in dense contexts. This is the shadcn-default icon set and the app uses it exclusively.
- **In-product icons seen:** `Home, Building2, TrendingUp, Briefcase, Users, FolderKanban, Bookmark, Network, Settings, BarChart2, Telescope, Inbox, Search, User, Plus, Trash2, Download, SlidersHorizontal, ChevronUp/Down/Left/Right, ChevronsUpDown, X, Loader2`.
- **Recreations should link Lucide from CDN** (`https://unpkg.com/lucide@latest`) rather than redrawing glyphs. Do **not** hand-roll SVG icons or substitute emoji.
- **No icon font, no PNG icons, no emoji.** Unicode is used only as glyphs-in-text: the em dash `—` as the null/placeholder value, and `→` in "View all →" links.
- **Brand mark / logo:** `assets/logo.svg` — the Eatable Adventures wordmark (single-color, black). In-app the identity is most often expressed as a compact **`EA` monogram**: an `8×8` `6px`-radius tile filled brand-coral `#DE5533` with `EA` set in IBM Plex Mono cream `#FFF9EE`. The full `logo.svg` wordmark appears on the login screen (`h-28`). There is no separate favicon/standalone mark in the repo.
- **Brand color of imagery:** there is essentially **no photography or illustration** in the product — it is a data tool. The only "imagery" is the force-directed graph (colored nodes on white) and small colored sector/category dots. Keep any added imagery neutral, flat, and data-adjacent.

---

## CONTENTS — file index

| Path | What it is |
|---|---|
| `README.md` | This file — context, voice, visual foundations, iconography, index. |
| `DESIGN.md` | Condensed, code-ready design guide for AI coding agents (Claude Code) — Tailwind/shadcn tokens, type, components, voice, checklist. |
| `colors_and_type.css` | All design tokens as CSS variables (neutrals, brand, sector/node/status colors, type scale, radii, shadows, spacing) + semantic element styles. Import this first. |
| `SKILL.md` | Agent-Skill front-matter so this system can be used as a downloadable Claude Skill. |
| `assets/` | Brand assets — `logo.svg` (Eatable Adventures wordmark). |
| `fonts/` | Font note — the system uses Google-hosted Inter + IBM Plex Mono (see below). |
| `preview/` | Small standalone HTML specimen cards that populate the Design System tab (type, color, spacing, components, brand). |
| `ui_kits/ecosystem-db/` | High-fidelity, interactive recreation of the app: `index.html` (click-through demo) + JSX components (`Sidebar`, `TopBar`, `EntityTable`, `Home`, primitives, etc.) + its own `README.md`. |

### Fonts
The app uses **Inter** and **IBM Plex Mono**, both served from Google Fonts via `next/font`. `colors_and_type.css` mirrors that with a Google Fonts `@import`, so no local files are required for HTML output. If you need a fully offline bundle, download the two families into `fonts/` and replace the `@import` with `@font-face` rules.

---

## How to use this system

1. **Link the tokens:** `<link rel="stylesheet" href="colors_and_type.css">` (adjust the relative path), then build with the CSS variables.
2. **Lead with warm neutrals + ink actions.** Reach for paper/cream/sand surfaces and charcoal text/buttons first; use `--brand` (coral) / `--brand-strong` (brick) / `--brand-amber` for identity, highlights, and selected state; use sector/node/status colors only to encode data.
3. **Borders over shadows, small tight type, 4px grid, rounded-xl cards.**
4. **Compose from the UI kit** in `ui_kits/ecosystem-db/` for anything app-like — don't reinvent the shell.
5. **Icons:** Lucide from CDN, 16px, outline.
