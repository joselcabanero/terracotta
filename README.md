# Eatable Adventures — Design System

A faithful, reusable design system for **Eatable Adventures'** internal product, **Ecosystem DB** (a.k.a. *Startup Intelligence*) — a graph-based intelligence platform for the agrifood-tech & agritech startup ecosystem. It manages startups, investors, people, and corporate entities, and its headline use case is **matching startups with investors** by taxonomy alignment.

This folder gives a design agent everything needed to produce on-brand interfaces, mockups, prototypes, and slides: design tokens (color + type), a 12-column grid system, real brand assets, written tone/voice guidance, and a high-fidelity UI kit recreating the product.

> **Design language: International Typographic Style (Josef Müller-Brockmann).** The system is austere and objective — **ink + paper + one functional red**, set in a grotesk, laid out on a strict **12-column modular grid** with an **8px baseline** and a **1.25 modular type scale**. Order comes from size, weight, and position on the grid; never from ornament, shadow, or decorative color.

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

## DESIGN LANGUAGE — International Typographic Style (Müller-Brockmann)

The seven principles the whole system obeys. When in doubt, return here.

1. **The grid is the law.** Every layout sits on a **12-column modular grid** (`grid.css`) with a **24px gutter** and **32px page margin**. Composition decisions are made by choosing *which columns* an element occupies. Asymmetry is created by placement on the grid, not by arbitrary offsets.
2. **Objective, not expressive.** Design serves the information. No decoration, no flourish, no "brand moment" that doesn't carry meaning. If an element isn't doing a job, it's removed.
3. **One grotesk, flush-left.** A single neutral sans (Helvetica/Akzidenz lineage) does all the work, set **flush-left / ragged-right**. No serifs, no second display face, no centered text.
4. **Hierarchy from size, weight & position** — never from color or ornament. The **1.25 modular scale** gives a small set of objective sizes; emphasis is weight (400/500/700) and where a thing sits on the page.
5. **8px baseline rhythm.** Type, leading, spacing, and component heights are all multiples of 8, so vertical rhythm is mathematically consistent everywhere.
6. **Ink, paper, and ONE red.** Color is functional. Black `#111111` and white `#FFFFFF` carry the interface; a single Swiss red `#E1251B` marks identity, the active state, links, and focus. The categorical **data palette** (sectors, node types) is the one sanctioned exception, used only as small fields inside data views.
7. **Rules, not shadows; squares, not pills.** Structure is drawn with **hard ink keylines** (1–2px rules). Surfaces are flat (no shadow except floating dialogs). Corners are **square** (`radius 0`); the only curve is the data dot.

---

## CONTENT FUNDAMENTALS — voice & copy

The product's copy is **terse, functional, and unfussy** — the register of an internal analyst tool, not a consumer brand.

- **Tone:** Neutral, professional, low-ceremony. No marketing adjectives, no exclamation, no emoji. It reads like a well-built database admin tool.
- **Person:** Mostly **impersonal / imperative**. Labels are nouns ("Startups", "Investors", "Programs"); helper lines are short third-person descriptions ("Browse and filter all startups"). When it addresses the user it's brief and direct ("Access is granted by your administrator").
- **Casing:**
  - **Page & section titles:** Title Case or sentence case headline ("Startups", "Recent Activity", "Latest Startups").
  - **Eyebrows / section dividers on Home:** **UPPERCASE, letter-spaced** ("AGRIFOODTECH NEWS", "RECENT INVESTMENT ROUNDS").
  - **Sidebar group labels:** UPPERCASE grotesk micro-labels ("MAIN", "DB", "TOOLS"), 11px, bold, tracked `+0.12em`.
  - **Table column headers:** UPPERCASE, 11px, bold, tracked, under a 2px ink keyline.
  - **Buttons:** Sentence case ("Add Startup", "Save filter", "Export", "Continue with Google").
- **Microcopy patterns:**
  - Counts are explicit and terse: "{n} total", "1–25 of 312", "{n} rows match current filters".
  - Empty states are plain and slightly soft: "No results found.", "No recent additions in this region.", "News unavailable — check back later."
  - Em dashes ("—") are used as the null/placeholder glyph in table cells and as a soft separator in meta lines.
  - Toasts confirm actions in past tense: "Startup deleted", "Exported 50 rows as CSV", 'Filter "Series A in Europe" saved'.
- **Naming:** Internal/domain vocabulary is used confidently without explanation — "nodes", "edges", "Programs", "Watchlists", "Rounds Inbox", "match score", "taxonomy". The audience is internal experts.
- **Vibe:** *Swiss data instrument.* Objective, gridded, monochrome with a single red mark. Dense, flush-left, information over decoration — a Müller-Brockmann timetable for the agrifood-tech ecosystem.

**Do:** "Browse and filter all startups" · "{n} total" · "Add Startup"
**Don't:** "Discover amazing startups! 🚀" · "Oops! Nothing here yet" · "Click here to get started"

---

## VISUAL FOUNDATIONS

An **austere, objective, grid-driven** system in the International Typographic Style. **Ink + paper + one functional red**, set in a grotesk on a 12-column / 8px-baseline grid. Hierarchy is built from size, weight, and position — not from ornament, shadow, or decorative color.

**Core palette:** Paper `#FFFFFF` · Ink `#111111` · **Red `#E1251B`** (the single accent) — plus an objective neutral ramp `#F4F4F2 · #EAEAEA · #DBDBDB · #9B9B9B · #6F6F6F · #4A4A4A`.

### Color
- **Ink and paper carry the interface.** Surfaces are white (`#FFFFFF`) with a neutral secondary ground (`#F4F4F2`). Text is ink (`#111111`), secondary `#4A4A4A`, muted `#6F6F6F`, faint meta `#9B9B9B`. Wells/chips use `#EAEAEA`.
- **Primary actions are ink, not red.** The main button is ink `#111111` with paper text → hover black `#000`. Red is held in reserve so it always means something.
- **Red `#E1251B` is the single functional accent** — used as a **field or marker**, never a soft tint: the `EA` monogram, the active-nav marker bar, links (ink text + red underline), focus rings, and "live" status. Pressed red is `#B71C13`.
- **Data color is the one exception.** Categorical hues (sector taxonomy, node types) encode meaning and are used only as **small squares / dots / keylines** inside data views — never as page chrome. News tags are monochrome by default; match scores are ranked by **weight**, not hue.

### Type
- **One grotesk:** `Helvetica Neue → Helvetica → Arial`, with **Inter** as the loaded cross-platform fallback (Akzidenz-Grotesk is the historical reference; see the substitution note below). **IBM Plex Mono** is kept only for tabular numerals and code. No stylistic sets — objective default.
- **Strict 1.25 modular scale, base 16px:** 13 · 16 · 20 · 25 · 31 · 39 · 49 · 61 · 76. Dense UI keeps a 14px step. Headings are flush-left, tight (`-0.015…-0.03em`), heavier as they grow (h1 = 39/700).
- Hierarchy comes from **size + weight + position on the grid**. No serif, no centered text, no decorative display face.

### Grid, spacing & layout
- **12-column modular grid** (`grid.css`): `24px` gutter, `32px` page margin, `1440px` max type area. Use `.swiss-container` → `.swiss-grid` → `.col-1…col-12` (and `.start-N` for asymmetric placement).
- **8px baseline.** All spacing is a multiple of 8 (`--b1…--b12`; 4 is the half-step). Leading and component heights snap to it.
- **Fixed app frame:** sidebar and top bar are fixed; only the content column scrolls. Content placed on the grid, flush-left.

### Borders, elevation & shape
- **Rules, not shadows.** Structure is drawn with **hard ink keylines** — `2px` rules to open a section/table head, `1px` `#DBDBDB` hairlines for dividers. Surfaces are **flat**; shadow appears only on truly floating layers (dialog/popover), never on resting cards.
- **Square by rule.** `--radius: 0`. Buttons, inputs, cards, badges are rectangular. The only curve is the `9999px` **data dot**.
- No gradients, textures, images, or glows in chrome. Ever.

### Motion
- **Minimal and quick.** Content fades in (`translateY(4px→0)` + opacity, **0.15s ease-out**); sidebar width animates `200ms`. Hovers are `transition-colors` only.
- **No** bounces, springs, parallax, or looping animation. Interaction changes color, not size.

### Interaction states
- **Hover:** subtle ground shift — rows/ghost buttons → `#F4F4F2`/`#EAEAEA`; links → turn red.
- **Active/selected nav:** **3px red marker bar** + ink bold label on `#F4F4F2` (no pill, no tint fill).
- **Press:** ink button → black `#000`; red → `#B71C13`. No scale-down.
- **Focus:** `1px` red ring (`--ring` = `#E1251B`) on inputs / search. Quiet but visible.
- **Disabled:** `opacity` 35–50% + `cursor-not-allowed`.

### Cards (the recurring unit)
Paper background · `1px` ink (or `#DBDBDB`) keyline · **square** (radius 0) · **flat** at rest. A card header is an UPPERCASE bold title over a **2px ink rule**; the body is dense rows or a single large tabular figure. This one rectilinear pattern composes the whole UI — news cards, activity columns, detail panels, list containers.

---

## ICONOGRAPHY

- **System:** [**Lucide**](https://lucide.dev) (`lucide-react`), used everywhere — outline, ~1.5px stroke, rounded joins, drawn on a 24px grid and rendered at **16px** (`w-4 h-4`) in nav/buttons and 12–14px in dense contexts. This is the shadcn-default icon set and the app uses it exclusively.
- **In-product icons seen:** `Home, Building2, TrendingUp, Briefcase, Users, FolderKanban, Bookmark, Network, Settings, BarChart2, Telescope, Inbox, Search, User, Plus, Trash2, Download, SlidersHorizontal, ChevronUp/Down/Left/Right, ChevronsUpDown, X, Loader2`.
- **Recreations should link Lucide from CDN** (`https://unpkg.com/lucide@latest`) rather than redrawing glyphs. Do **not** hand-roll SVG icons or substitute emoji.
- **No icon font, no PNG icons, no emoji.** Unicode is used only as glyphs-in-text: the em dash `—` as the null/placeholder value, and `→` in "View all →" links.
- **Brand mark / logo:** `assets/logo.svg` — the Eatable Adventures wordmark (single-color). In-app the identity is most often expressed as a compact **`EA` monogram**: a **square** red `#E1251B` field with `EA` set in **grotesk bold**, paper-white. The full `logo.svg` wordmark appears on the login screen. There is no separate favicon/standalone mark in the repo.
- **Brand color of imagery:** there is essentially **no photography or illustration** in the product — it is a data tool. The only "imagery" is the force-directed graph (colored nodes on white) and small colored sector/category dots. Keep any added imagery neutral, flat, and data-adjacent.

---

## CONTENTS — file index

| Path | What it is |
|---|---|
| `README.md` | This file — context, voice, visual foundations, iconography, index. |
| `DESIGN.md` | Condensed, code-ready design guide for AI coding agents (Claude Code) — Tailwind/shadcn tokens, type, components, voice, checklist. |
| `styles.css` | **Single entry point** — `@import`s `colors_and_type.css` + `grid.css`. Link this one file to get everything. |
| `colors_and_type.css` | All design tokens as CSS variables (ink/paper/red, neutral ramp, data-encoding colors, **1.25 modular type scale**, square radii, flat elevation, 8px spacing) + semantic element styles. Import this first. |
| `grid.css` | The 12-column modular grid + 8px baseline: container, grid, `.col-N`/`.start-N` spans, baseline spacing utilities, and column/baseline overlays. Import after `colors_and_type.css`. |
| `SKILL.md` | Agent-Skill front-matter so this system can be used as a downloadable Claude Skill. |
| `assets/` | Brand assets — `logo.svg` (Eatable Adventures wordmark). |
| `fonts/` | Font note — the system uses the grotesk Helvetica/Arial stack (Inter loaded as fallback) + IBM Plex Mono (see below). |
| `preview/` | Small standalone HTML specimen cards that populate the Design System tab (type, color, spacing, components, brand). |
| `ui_kits/ecosystem-db/` | High-fidelity, interactive recreation of the app: `index.html` (click-through demo) + JSX components (`Sidebar`, `TopBar`, `EntityTable`, `Home`, primitives, etc.) + its own `README.md`. |

### Fonts
The Swiss system is set in a **grotesk**: `Helvetica Neue → Helvetica → Arial` (the Akzidenz-Grotesk / Helvetica lineage Müller-Brockmann worked in), with **Inter** loaded from Google Fonts as the cross-platform fallback so the look holds on machines without Helvetica. **IBM Plex Mono** is kept for tabular numerals. `colors_and_type.css` loads Inter + IBM Plex Mono via `@import`, so no local files are required.

> **Font substitution flag:** true Akzidenz-Grotesk and Helvetica Neue are licensed/system-dependent fonts and are **not** bundled. On most machines the stack resolves to Helvetica or Arial (faithful), falling back to Inter elsewhere. If you want pixel-exact Swiss type, license Akzidenz-Grotesk or Helvetica Neue and drop the web fonts into `fonts/`, then update `--font-sans`.

---

## How to use this system

1. **Link the tokens, then the grid:** `<link rel="stylesheet" href="colors_and_type.css">` then `<link rel="stylesheet" href="grid.css">` (adjust relative paths).
2. **Compose on the grid.** Wrap content in `.swiss-container` → `.swiss-grid`, place elements with `.col-N` / `.start-N`. Create interest by *asymmetric placement* on the 12 columns, not by offsets or ornament.
3. **Ink + paper + one red.** Ink text and buttons, paper grounds, neutral ramp for hierarchy; `--brand` (red `#E1251B`) only for identity, active state, links, and focus. Categorical data colors only as small fields inside data views.
4. **Rules not shadows, squares not pills, flush-left grotesk, 8px rhythm.** Open sections and tables with `2px` ink keylines; keep `--radius: 0`.
5. **Compose from the UI kit** in `ui_kits/ecosystem-db/` for anything app-like — don't reinvent the shell.
6. **Icons:** Lucide from CDN, 16px, outline.
