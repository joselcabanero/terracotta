# DESIGN.md — Eatable Adventures (Ecosystem DB / Startup Intelligence)

Design guide for building on-brand UI. Drop this in your repo (or reference it from `CLAUDE.md`) so the agent designs with the right tokens, type, and grid. **Design language: International Typographic Style (Josef Müller-Brockmann)** — austere, objective, grid-driven. Stack of record: Next.js 14 + Tailwind + shadcn/ui, **grotesk (Helvetica/Inter)**, **Lucide** icons.

> Companion files: `README.md` (full rationale), `colors_and_type.css` (tokens), `grid.css` (the grid), `ui_kits/ecosystem-db/` (working components). When in doubt, copy patterns from the UI kit.

---

## 1. The seven principles (obey these)

1. **The grid is the law** — 12 columns, 24px gutter, 32px margin. Compose by choosing columns; asymmetry from placement, not offsets.
2. **Objective, not expressive** — design serves the data. No decoration that doesn't carry meaning.
3. **One grotesk, flush-left** — single neutral sans, ragged-right. No serifs, no centered text.
4. **Hierarchy from size, weight & position** — never from color/ornament. Modular 1.25 scale.
5. **8px baseline rhythm** — type, leading, spacing, heights all multiples of 8.
6. **Ink, paper, and ONE red** — `#111` + `#FFF` + `#E1251B`. Data palette is the only exception.
7. **Rules not shadows, squares not pills** — hard ink keylines, flat surfaces, `radius: 0`.

---

## 2. Palette

| Token | Hex | Use |
|---|---|---|
| Paper | `#FFFFFF` | ground, cards |
| Ground-2 | `#F4F4F2` | secondary surface, hover |
| Fill | `#EAEAEA` | chips, wells |
| Divider | `#DBDBDB` | hairline borders |
| Muted | `#6F6F6F` | secondary/caption text |
| Secondary | `#4A4A4A` | body-secondary text |
| **Ink** | `#111111` | text + primary actions + keylines |
| **Red** | `#E1251B` | THE accent — identity, active, links, focus |
| Red-pressed | `#B71C13` | pressed red |

**Neutral ramp:** `#FFFFFF · #F4F4F2 · #EAEAEA · #DBDBDB · #C2C2C2 · #9B9B9B · #6F6F6F · #4A4A4A · #222 · #111`.

**Data-encoding palette (the one exception — small fields/dots/keylines only, never chrome):**
Sectors — Agritech `#1D9E75` · Innovative Food `#639922` · Food Logistics `#EF9F27` · Retail/Restaurant `#D85A30` · Kitchen/Cooking `#97C459` · Food-as-Medicine `#7F77DD`.
Node types — startup `#2563eb` · investor `#16a34a` · person `#9333ea` · corporate `#ea580c`.

---

## 3. Tailwind / shadcn tokens

shadcn consumes `hsl(var(--x))`, so store bare HSL triplets in `globals.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;          /* paper */
    --foreground: 0 0% 7%;            /* ink #111 */
    --card: 0 0% 100%;
    --card-foreground: 0 0% 7%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 7%;
    --primary: 0 0% 7%;              /* ink — primary buttons */
    --primary-foreground: 0 0% 100%; /* paper */
    --secondary: 0 0% 92%;           /* #EAEAEA fill */
    --secondary-foreground: 0 0% 7%;
    --muted: 0 0% 96%;               /* #F4F4F2 */
    --muted-foreground: 0 0% 44%;    /* #6F6F6F */
    --accent: 3 78% 49%;             /* red #E1251B */
    --accent-foreground: 0 0% 100%;
    --destructive: 3 78% 49%;        /* the one red */
    --destructive-foreground: 0 0% 100%;
    --border: 0 0% 86%;              /* #DBDBDB */
    --input: 0 0% 7%;                /* inputs carry an ink keyline */
    --ring: 3 78% 49%;               /* red focus ring */
    --radius: 0rem;                  /* SQUARE */
  }
}
```

Brand-only extras (full colors, consume directly): `--brand:#E1251B; --brand-strong:#B71C13; --ink:#111; --rule:#111;`.

> ⚠️ shadcn tokens are bare triplets → `hsl(var(--primary))`. The `--brand`/`--ink`/`--rule` extras are full hex → `var(--brand)`. **`--radius` is `0`** — Tailwind `rounded-*` resolve to square; use `rounded-full` only for data dots.

---

## 4. Grid (`grid.css`)

```html
<div class="swiss-container">      <!-- max 1440, 32px margins -->
  <div class="swiss-grid">         <!-- 12 cols, 24px gutter -->
    <header class="col-12">…</header>
    <h1 class="col-8">Headline</h1> <!-- spans 8 of 12 -->
    <aside class="col-3 start-10">…</aside> <!-- asymmetric placement -->
  </div>
</div>
```

- 12 columns · `--grid-gutter: 24px` · `--grid-margin: 32px` · `--grid-max: 1440px`.
- Baseline `8px`; spacing tokens `--b1…--b12` (8,16,24,32,40,48,64,80,96). `4px` half-step.
- `.col-1…12` span; `.start-1…12` set the start line (asymmetry). `.stack`, `.stack-3/4` for vertical rhythm.
- Overlays for specimens: `.grid-overlay` (red column fields), `.baseline-overlay` (8px lines).

---

## 5. Type

- **One grotesk:** `font-family: 'Helvetica Neue', Helvetica, Arial, 'Inter', sans-serif`. Inter is the loaded fallback. **IBM Plex Mono** for tabular numerals only. Set everything **flush-left / ragged-right**.
- **Modular scale, ratio 1.25, base 16** (`--t-*`):

| Token | px | Role |
|---|---|---|
| `--t-5xl` | 76 | poster |
| `--t-4xl` | 61 | display |
| `--t-3xl` | 49 | display |
| `--t-2xl` | 39 | h1 (700, −0.02em) |
| `--t-xl` | 31 | h2 (700) |
| `--t-lg` | 25 | h3 (500) |
| `--t-md` | 20 | h4 / lead |
| `--t-base` | 16 | body (1.5 line-height) |
| `--t-ui` | 14 | dense UI body |
| `--t-xs` | 13 | meta / caption |

- Labels/eyebrows: UPPERCASE, **700**, tracked `+0.12…0.14em`. Column headers: 11px 700 UPPERCASE under a 2px ink rule.
- Emphasis = weight (400/500/700) + size + grid position. Never color.

---

## 6. Components

- **Primary button:** `bg-[#111] text-white`, **square**, `px-4 py-2`, 14px/500 → hover `#000`.
- **Outline button:** white, `1px solid #111`, ink text → hover bg `#F4F4F2`.
- **Ghost:** transparent, `#4A4A4A` → hover bg `#EAEAEA`.
- **Red button:** `bg-[#E1251B] text-white` → hover `#B71C13` (destructive + emphatic actions).
- **Card:** paper, `1px solid #111` (or `#DBDBDB`), **square**, flat. Header = UPPERCASE bold title over a **2px ink rule**.
- **Input / search:** `1px solid #111`, square; focus → **red** border + `0 0 0 1px #E1251B` ring.
- **Active nav:** **3px red left marker bar** + ink bold label on `#F4F4F2`. Idle `#4A4A4A` → hover `#EAEAEA`. Disabled 35%.
- **EA monogram:** **square** red `#E1251B` field, `EA` in grotesk bold, paper-white.
- **Badges:** square, UPPERCASE, 11px 700 — ink fill, ink outline, or red ("live"). Sector chips: ink outline + a small sector-color square.
- **Table:** ink keyline frame; header row 11px 700 UPPERCASE under 2px ink rule; `1px #DBDBDB` row dividers; hover `#F4F4F2`; numerics tabular.

---

## 7. Iconography

- **Lucide only** (`lucide-react`), outline, ~1.5px stroke, **16px** in nav/buttons (12–14 dense). Never hand-roll SVG or use emoji.
- Unicode in text: em dash `—` = null/placeholder; `→` in "View all →".
- Logo: `EATABLE ADVENTURES` wordmark; compact identity = the square red `EA` monogram.

---

## 8. Motion & states

- Fades only: `translateY(4px→0)` + opacity, **0.15s ease-out**. Sidebar width `200ms`. Hovers `transition-colors`.
- **No** bounces, springs, parallax, loops. Interaction changes color, not size.
- Hover = ground shift / link turns red. Active = red marker. Press = ink→black, red→`#B71C13`. Focus = red ring. Disabled = 35–50% + `not-allowed`.

---

## 9. Voice

Terse, functional, impersonal — an internal analyst tool, not a consumer brand. No marketing adjectives, no exclamation, **no emoji**.
- Labels are nouns ("Startups", "Programs"); helper lines short ("Browse and filter all startups").
- Counts explicit: "{n} total", "1–25 of 312". Empty: "No results found." Toasts past-tense: "Startup deleted".
- Domain vocabulary used confidently: nodes, edges, Programs, Watchlists, Rounds Inbox, match score, taxonomy.

**Do:** "Browse and filter all startups" · "{n} total" · "Add Startup"  **Don't:** "Discover amazing startups! 🚀"

---

## Pre-ship checklist
- [ ] Everything on the 12-col grid; composed by column placement, flush-left.
- [ ] Ink/paper carry it; red only for identity/active/links/focus; data colors only as small fields.
- [ ] One grotesk; modular sizes; 8px rhythm; emphasis by weight not color.
- [ ] Square corners; ink keylines (rules) instead of shadows; flat surfaces.
- [ ] Lucide 16px; no emoji, no hand-drawn SVG.
- [ ] Copy terse, noun-led, no marketing tone.
