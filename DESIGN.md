# DESIGN.md — Eatable Adventures (Ecosystem DB / Startup Intelligence)

Design guide for building on-brand UI. Drop this in your repo (or reference it from `CLAUDE.md`) so the agent designs with the right tokens, type, and voice. Stack of record: **Next.js 14 + Tailwind + shadcn/ui (new-york)**, **Inter** + **IBM Plex Mono**, **Lucide** icons.

> Companion files: `README.md` (full rationale), `colors_and_type.css` (all tokens), `ui_kits/ecosystem-db/` (working component recreations). When in doubt, copy patterns from the UI kit.

---

## 1. Essence

Warm, high-density, **food-forward data tool**. Think "Bloomberg terminal for foodtech, warmed up." Restrained and utilitarian, but appetising: warm paper/cream surfaces, hairline borders, charcoal text and actions, and a coral→brick→amber accent used only for identity, highlights, and selected state. **Information over decoration.**

**Three rules that carry most of the look:**
1. **Warm neutrals + ink actions.** Surfaces are paper/cream/sand; primary buttons are charcoal `#1E1E1E`, not coral.
2. **Coral is identity, not chrome.** Use `--brand` (coral) / brick / amber for the logo, active nav, links, focus — never as a generic fill.
3. **Borders before shadows.** Flat white/cream cards with 1px warm borders; shadow only on hover/floating surfaces.

---

## 2. Brand palette (the 8 swatches)

| Token | Hex | Use |
|---|---|---|
| Paper | `#FFFFFF` | base background, cards |
| Cream | `#FFF9EE` | section / page surfaces, login |
| Sand | `#F5EACE` | emphasis bands, sparingly |
| Amber | `#FFA103` | highlights, accents, data |
| **Coral** | `#DE5533` | **headline brand** — monogram, focus ring |
| Brick | `#BC2D29` | readable brand text/icon, links, destructive |
| Wine | `#450E14` | deepest warm dark, rare |
| Ink | `#1E1E1E` | text + primary actions |

---

## 3. Tailwind / shadcn tokens

The app uses shadcn's `hsl(var(--x))` pattern, so `globals.css` stores **bare HSL triplets**:

```css
@layer base {
  :root {
    --background: 0 0% 100%;          /* paper  */
    --foreground: 0 0% 12%;           /* ink    */
    --card: 0 0% 100%;
    --card-foreground: 0 0% 12%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 12%;
    --primary: 0 0% 12%;              /* ink — primary buttons */
    --primary-foreground: 40 100% 97%;/* cream */
    --secondary: 41 71% 95%;          /* warm fill #FBF3E2 */
    --secondary-foreground: 0 0% 12%;
    --muted: 41 71% 95%;
    --muted-foreground: 25 9% 45%;    /* warm-500 #7C726C */
    --accent: 13 71% 53%;             /* coral #DE5533 */
    --accent-foreground: 40 100% 97%;
    --destructive: 2 64% 45%;         /* brick #BC2D29 */
    --destructive-foreground: 40 100% 97%;
    --border: 40 41% 89%;             /* warm border #EBE2D2 */
    --input: 40 41% 89%;
    --ring: 13 71% 53%;               /* coral focus ring */
    --radius: 0.5rem;                 /* 8px */
  }
}
```

Brand-only extras (define directly, used as full colors): `--brand:#DE5533; --brand-strong:#BC2D29; --brand-amber:#FFA103; --brand-tint:#FDECE4; --brand-fg:#FFF9EE;`

**Warm neutral ramp** (when you need raw hex, not the shadcn token): `#FFFFFF · #FFFBF4 · #FBF3E2 · #F5EACE · #EBE2D2 · #ABA097 · #7C726C · #4A433F · #1E1E1E`.

> ⚠️ shadcn tokens are bare triplets — always consume them as `hsl(var(--primary))`. The `--brand*` extras are full hex — consume directly as `var(--brand)`.

---

## 4. Type

- **Inter** (next/font) for all UI — weights 400/500/600/700, with `font-feature-settings: 'cv11','ss01'`.
- **IBM Plex Mono** (400/500) for micro-labels, the `EA` monogram, and numerics.
- Small and tight. Hierarchy from weight + color + size, never large display type.

| Role | Size / weight / tracking |
|---|---|
| Page title (`h1`) | 24px / 500 / `-0.02em` |
| Section (`h2`) | 20px / 600 / `-0.01em` |
| Card title (`h3`) | 14px / 600 |
| Body / table | 14px / 400 |
| Meta / caption | 12px / 400, `--muted-foreground` |
| Column header | 12px / 600, UPPERCASE, `+0.04em`, muted |
| Eyebrow | 12px / 600, UPPERCASE, `+0.06em`, muted |
| Mono group label | 9px / 400, UPPERCASE, `+0.7px`, IBM Plex Mono |

---

## 5. Shape, spacing, elevation

- **4px grid.** Page padding `24px`; card padding `12–16px`; tight clusters `gap-1.5/2`.
- **Radii:** controls/inputs/buttons `8px` (`rounded-lg`), inner controls `6px`; **cards `12px`** (`rounded-xl`); badges/avatars full.
- **Elevation:** borders first. `1px` `--border` (`#EBE2D2`) hairlines; dividers `#F4ECDD`. Shadow only on hover (`shadow-sm`) or floating surfaces (dialog/popover/login).
- No gradients, textures, or background images in chrome. Flat surfaces.

---

## 6. Components

- **Primary button:** `bg-[#1E1E1E] text-[#FFF9EE]`, `rounded-lg`, `px-3.5 py-2`, 14px/500 → hover `#38302C`.
- **Outline button:** white, `1px --border`, ink text → hover bg `#FFFBF4`, border darkens.
- **Ghost button:** transparent, `--fg2` text → hover bg `#FBF3E2`.
- **Destructive:** brick `#BC2D29` / cream text.
- **Card:** white, `1px --border`, `rounded-xl`, no shadow at rest; `hover:shadow-sm` + border darken when interactive.
- **Input / search pill:** `1px --border`, `rounded-lg` (search is `rounded-full`); focus → coral border + `0 0 0 1px coral` ring.
- **Active nav:** `bg-[#FDECE4] text-[#BC2D29]` with coral/brick icon; idle nav `--fg4` → hover `#FBF3E2`; disabled 35% opacity.
- **EA monogram:** coral `#DE5533` tile, `6px` radius, `EA` in IBM Plex Mono cream `#FFF9EE`.
- **Badges:** fully round, 11px/500. Sector badges use the data palette (below); neutral chips use `#FBF3E2`.

---

## 7. Iconography

- **Lucide only** (`lucide-react`), outline, ~1.5px stroke, **16px** in nav/buttons (12–14px dense). Never hand-roll SVG icons or use emoji.
- Unicode glyphs allowed in text: em dash `—` as the null/placeholder value; `→` in "View all →".
- Logo: `EATABLE ADVENTURES` wordmark (single-color); compact identity = the `EA` monogram.

---

## 8. Data colors (NOT brand — encode meaning only)

These come from the production taxonomy and intentionally sit apart from the warm brand chrome. Don't use them as decoration.

- **Sectors:** Agritech `#1D9E75` · Innovative Food `#639922` · Food Logistics `#EF9F27` · Retail/Restaurant `#D85A30` · Kitchen/Cooking `#97C459` · Food-as-Medicine `#7F77DD` · Other `#888780`.
- **Node types:** startup `#2563eb` · investor `#16a34a` · person `#9333ea` · corporate `#ea580c`.
- **News tags (bg/fg):** Funding `#dcfce7`/`#15803d` · Tech `#dbeafe`/`#1d4ed8` · Market `#fef3c7`/`#b45309` · Policy `#f3e8ff`/`#7e22ce` · People `#ffe4e6`/`#be123c`.
- **Match score:** ≥60 `#16a34a` · 30–59 `#d97706` · <30 `#dc2626`.

---

## 9. Motion & states

- Fades only: content enters with `translateY(4px→0)` + opacity over **0.15s ease-out**. Sidebar width `200ms`. Hovers are `transition-colors`.
- **No** bounces, springs, parallax, or looping animation. Interaction changes color, not size.
- Hover = subtle bg shift; press = darker (no scale); focus = coral ring; disabled = 35–50% opacity + `not-allowed`.

---

## 10. Voice

Terse, functional, impersonal — an internal analyst tool, not a consumer brand. No marketing adjectives, no exclamation, **no emoji**.

- Labels are nouns ("Startups", "Programs"); helper lines are short ("Browse and filter all startups").
- Counts explicit: "{n} total", "1–25 of 312". Empty states plain: "No results found." Toasts past-tense: "Startup deleted".
- Domain vocabulary used confidently: nodes, edges, Programs, Watchlists, Rounds Inbox, match score, taxonomy.

**Do:** "Browse and filter all startups" · "{n} total" · "Add Startup"
**Don't:** "Discover amazing startups! 🚀" · "Oops! Nothing here yet"

---

## Quick checklist before shipping UI
- [ ] Warm surfaces (paper/cream), not cool gray. Borders, not heavy shadows.
- [ ] Primary action is ink `#1E1E1E`; coral reserved for identity/active/focus.
- [ ] Inter + IBM Plex Mono; small tight type; 24px max page title.
- [ ] Lucide icons at 16px; no emoji, no hand-drawn SVG.
- [ ] `rounded-xl` cards, `rounded-lg` controls, 4px-grid spacing.
- [ ] Data colors used only to encode meaning.
- [ ] Copy is terse, noun-led, no marketing tone.
