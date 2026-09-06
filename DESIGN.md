# DESIGN.md — Terracotta (the Eatable Adventures Design System)

**Terracotta** is the design guide for building on-brand Eatable Adventures product UI. Drop this in your repo (or reference it from `CLAUDE.md`) so the agent designs with the right tokens, type, and graphic system. **Brand: "The Beating Heart of Food Innovation."** The visual system is born from the heartbeat — **pulse · rhythm · impact** — and is warm, human, and premium without arrogance. Type is **Rubik** (only), color is **EAV Red + warm creams**, surfaces are **rounded**, energy is **contained**.

> Companion files: `README.md` (full rationale + voice), `colors_and_type.css` (tokens), `grid.css` (the grid), `preview/` (specimen cards), `Brand Foundations.html` (one-page showcase), `templates/app-shell/` (a ready product shell). When in doubt, copy patterns from the foundations page or the app-shell template.

---

## 1. Principles (obey these)

1. **Operational clarity** — direct headlines, clean modules, clear hierarchy, enough air. Read quickly. Sophistication is in judgment, not complexity.
2. **Contained energy** — intensity, controlled. Red, the light point and gradients activate a composition without making it noisy.
3. **Real humanity** — people, contexts and processes feel close and in action; never cold or abstract.
4. **Structure with movement** — gridded and ordered, but alive. The brand does not shout, but does not disappear either.
5. **Brand intensity scales** — restrained (apps, data, reports) → intermediate (decks) → high (covers, campaigns). **Product UI is restrained**: white & cream grounds, Rubik, subtle red accents; gradients held for hero/CTA moments.
6. **One family, one system** — Rubik only; the EAV palette only; rounded cards/pills; the light point as a precise accent.
7. **Color is structural, not decorative** — assigned by hierarchy and meaning, with balance between intensity and rest.

---

## 2. Palette

Hex is the source of record for screen. Two **mother colors** (EAV Red + EAV Cream) anchor the system.

| Token | Hex | Role |
|---|---|---|
| **EAV Red** | `#BC2D29` | the representative color — identity, active, links, focus, CTAs |
| **EAV Cream** | `#FFF9EE` | highlighted/editorial blocks, app grounds |
| White | `#FFFFFF` | predominant ground; balances the gradients |
| **EAV Black** | `#1E1E1E` | footers & typography (primary text) |
| EAV Dark Cream | `#F5EACE` | secondary gradients, soft wells |
| EAV Light Grey | `#FAFAFA` | neutral / consulting grounds |
| EAV Grey | `#E8E8E8` | consulting blocks & dividers |
| EAV Yellow | `#FFA103` | the **light point** only |
| EAV Orange | `#DE5533` | gradient **transition** only |
| EAV Burgundy | `#450E14` | closings, CTAs, depth |

**Warm text ramp (derived):** `--fg1 #1E1E1E · --fg2 #574E48 · --fg3 #857B72 · --fg4 #ABA197`. Borders: `--border-1 #E8E8E8` (default), `--border-2 #F0ECE3` (faint).

**Hierarchy rules:** Red is the mark — use as a field/marker, never a soft tint. White carries air & cleanliness. Cream is the editorial block. Yellow is *only* the light point; Orange is *only* a gradient stop; Burgundy is for depth/closings. Don't introduce colors outside this palette.

---

## 3. Tailwind / shadcn tokens

`colors_and_type.css` ships full `hsl()` shadcn tokens (remap if you prefer bare triplets):

```css
--background: hsl(0 0% 100%);        /* white  */
--foreground: hsl(0 0% 12%);         /* EAV Black */
--primary: hsl(2 64% 45%);           /* EAV Red — primary actions */
--primary-foreground: hsl(0 0% 100%);
--secondary: hsl(40 38% 95%);        /* cream fill */
--muted: hsl(40 50% 97%);            /* cream */
--muted-foreground: hsl(24 8% 48%);  /* warm muted */
--accent: hsl(2 64% 45%);            /* EAV Red */
--destructive: hsl(2 64% 45%);
--ring: hsl(2 64% 45%);              /* red focus ring */
--radius: 10px;                      /* ROUNDED */
```

Brand extras (full hex, consume directly): `--red #BC2D29 · --burgundy #450E14 · --cream #FFF9EE · --yellow #FFA103 · --light-point #FFA103`. Radii: `--radius-sm 6 · md 10 · lg 16 · xl 24 · pill 999`.

---

## 4. Type — Rubik only

- **One family:** `font-family: 'Rubik', system-ui, sans-serif`. Weights **Light 300 · Regular 400 · Medium 500 · Bold 700 · Extrabold 800**, + italics. **No secondary typeface.** (A system mono is kept *only* as a functional fallback for code/tabular data — not a brand face.)
- **Headlines are Rubik Regular (400)** with an initial capital and the rest lowercase; emphasis is a single **bold (700) fragment**, and at most **one word may turn red** (headlines only, never body). Use `<b>` / `.hl` to bold a fragment, `.hl-red` for the red word.
- **Eyebrows:** Rubik Regular, UPPERCASE, tracked `+0.16em`, red or ink. Always above the headline.
- **Subtitles:** Regular, smaller than the headline. **Body:** Regular with bold highlights; long-form moves to Light (300) with Medium (500) highlights.
- **Scale** (`--t-*`, base 16): 12 (eyebrow) · 13 · 14 · 16 (body) · 18 (subtitle) · 22 · 28 · 36 (h1) · 46 · 60 · 76.
- Paragraphs **left-aligned**, never justified. Centered only for short hero blocks (covers, dividers).

---

## 5. Grid & spacing (`grid.css`)

- Flexible, **1–4 columns by content hierarchy** (1 = hero; 2 = 1/1 or 1/3; 3 = 1/1/1; 4 = cards/phases). A 12-column backbone subdivides cleanly; `.swiss-container` → `.swiss-grid` → `.col-N` / `.start-N` still available for data-dense product layouts.
- **8px baseline.** Spacing tokens `--b1…--b12` (8,16,24,32,40,48,64,80,96); `4px` half-step. Gutter 24, page margin 32.
- Consistent margins, well-separated blocks, **enough air**. Cards/boxes structure information.

---

## 6. Components

- **Primary button:** EAV Red, **pill** (`radius-pill`), white text, `px 18–20 / py 10`, 14px/500 → hover `--brand-strong` **+ the CTA pulse** (`box-shadow: var(--pulse-red-on)` — a soft same-color expansion).
- **CTA / closing button:** EAV Burgundy, cream text (depth moments, "Let's Beat").
- **Outline button:** white, `1px` EAV Red border, red text → hover `--brand-tint`.
- **Ghost:** transparent, `--fg2` → hover cream fill.
- **Card / box:** white (or cream for highlighted blocks), `1px` warm border, **rounded** (`radius-lg` 16px), flat or `--shadow-sm` at rest. Rounding drops only when a block bleeds to the format edge.
- **Input / search:** `1px` warm border, **rounded** (md, or pill for search); focus → **red** border + `0 0 0 3px rgba(188,45,41,.15)` ring.
- **Sidebar nav:** cream rail; active = white pill + `--shadow-sm` + **3px red left marker** + red label; idle `--fg2` → hover lift; disabled 40%.
- **Badges / pills:** rounded-full, 11px/500 — red ("Live"), cream, outline, burgundy ("Closed"). A 7px leading dot for status.
- **Table:** rounded container, cream header row (11px 700 UPPERCASE), `1px --border-2` row dividers, hover cream; numerics tabular; sort glyph in red.
- **App mark:** EAV Red **rounded** tile with `EA` in Rubik bold, paper-white — for favicons/avatars/compact chrome. The full wordmark (`assets/logo.svg`) signs everything else.

---

## 7. Graphic elements — pulse, rhythm, impact

- **Main brand gradient** (`--gradient-brand`): radial Yellow→Orange→Red→Burgundy. **Hero / brand moments only** — covers, openers, impact pages. Never app chrome.
- **Secondary cream** (`--gradient-cream`): a clean, soft pause for product surfaces and landing pages.
- **CTA pulse** (`--pulse-red-on`): a soft same-color expansion on action — the heartbeat of a button.
- **Light point** (`--gradient-lightpoint` / `.light-point`): EAV Yellow pulse that activates *one* focus. Over white, cream or photography only; signals, never decorates.

---

## 8. Iconography

- **Google Material Symbols (Outlined)** — `Weight 300`, `Grade 0`, `Optical Size 48`, **outline**. Load from Google Fonts; render ~18–22px in UI. Used as **functional support**, secondary to text — never hero or decorative. Do not hand-roll SVG or use emoji.
- **Logo:** `assets/logo.svg` — single-color "Eatable Adventures" wordmark (recolorable: black or EAV Red on light; white on dark/red/gradient).

---

## 9. Charts & data visualization

Fixed hierarchy — color by **relevance**, not decoration: **Red → Orange → Burgundy → Yellow → Dark Cream → Grey (neutral) → Black (axes/text)** (`--chart-1…5`, `--chart-neutral`, `--chart-axis`). Applies to every chart type. Expressive "impact" charts (gradients in the viz) are reserved for reports/covers, never consulting decks.

**Supported types** (see `Charts Catalogue.html` and the `preview/chart-*.html` cards): KPI tiles · bar · horizontal bars · line · area · donut · stacked bars · funnel · progress-vs-target · heatmap · sunburst · timeline/Gantt · radar · scatter/bubble · waterfall · treemap · sankey.

**Rules:** Rubik everywhere; axis labels 11px `--fg3`, value labels 500 in EAV Black; hairline axes + dashed guides, no boxed plots. Max five series/segments. No 3D, shadows or full pies. Rounded bar ends / cells. The only gradients inside a chart are the single-series area fade and the heatmap ramp. Waterfall decreases are hollow grey (neutral, not "bad"); sankey flows carry the source node's rank color at ~55%; sunburst children inherit the parent hue. The yellow light point marks "today"/a milestone or the last point of the primary line.

---

## 10. Motion & states

- Quick and contained: content fades in (`translateY(4px→0)` + opacity, ~0.15s); the CTA pulse expands on hover. Hovers shift ground or lift softly.
- **No** bounces, springs, parallax or looping decoration. Interaction changes color/elevation, not size.
- Press: ink/red → darker. Focus: red ring. Disabled: 40% + `not-allowed`.

---

## 11. Voice

Terse, concrete, proof-driven — **confident, not arrogant**. No empty words, no hype, no emoji. Talk about what's done (cases, figures, timelines), in business terms (P&L, decisions, impact). Names confidently: hubs, pilots, programs, the system. Brand names written exactly: **Eatable Adventures**, **The Beating Heart of Food Innovation**, **Let's Beat**.

**Do:** "We work from challenge to validated pilot. In 6 to 12 months." · "70 companies have executed real projects with us."
**Don't:** "We catalyze the global food ecosystem to co-create holistic impact 🚀"

---

## 12. Component coverage roadmap

The brand layer (tokens, type, colour, charts) is mature; the **interactive layer is the gap**. This is the deliberate set to build on top of [shadcn/ui](shadcn/README.md) — chosen because our shadcn token contract already lives in `colors_and_type.css`. Build by **usability necessity**, not feature-parity: a component that serves no user task is not added.

**Tier 1 — Forms & input** *(build first — every data app lives here)*
Button · Input · Textarea · Label · **Form group** (the atomic field unit) · Checkbox · Radio · Switch · Select · Combobox/autocomplete · Multi-select · Slider · **Date / date-range field** · Numeric stepper · Segmented control.
→ specimens: `preview/component-checkbox-radio · -select · -textarea · -numeric · -form-group · -segmented · -datefield`.

**Tier 2 — Overlays & feedback** *(currently we have none)*
Dialog · Alert-dialog (destructive confirm) · Drawer/sheet · Popover · Tooltip · Toast · Callout (inline alert) · Empty / non-ideal state · Spinner · Progress · Skeleton.
→ specimens: `preview/component-dialog · -alertdialog · -drawer · -popover-tooltip · -toast · -callout · -empty-state · -loading`.

**Tier 3 — Navigation & data** *(as the app grows)*
Tabs · Breadcrumbs · Dropdown menu · Accordion (collapse) · Pagination · Interactive table (sort/select/sticky — replaces today's static one) · Avatar · Tree.

**Deliberately deferred** (add only on real demand): hotkeys palette, dark theme, density modes. Note them so the absence is a decision, not an oversight.

---

## 13. Input & form states — the contract

A control is only finished when **all** its states are defined. The happy path is not the product. Every input ships with:

| State | EAV treatment |
|---|---|
| **Rest** | warm `1px var(--input)` border, `radius-md` (pill for search), white fill. |
| **Hover** | border darkens to `--fg4`; cursor `text`/`pointer`. |
| **Focus** | `--red` border **+** `0 0 0 3px rgba(188,45,41,.15)` ring. Never remove the outline — recolour it. |
| **Filled** | value in `--fg1`; placeholder `--fg4` (never use placeholder as a label). |
| **Invalid / error** | `--red` border + `0 0 0 3px rgba(188,45,41,.18)` + a **message** below: error icon + text in red. **Colour alone never carries error** — icon + text + position do (accessibility). EAV has no separate error hue; red is it. |
| **Disabled** | 40% opacity, `cursor:not-allowed`, no focus ring. |
| **Loading / pending** | inline spinner in the control; control stays in place (no layout shift). |

**The form group is the unit, not the input.** Every field = `label` (11px/700 uppercase tracked, `--fg2`) → control → helper (`--fg3`) *or* error (red). Required fields carry an asterisk. This wrapper is what enforces the 8px rhythm and accessibility across a form — see `preview/component-form-group.html`.

**Overlay conventions:** dialogs are focus-trapped and ESC-closable; destructive actions use a **blocking alert-dialog, never a toast**; tooltips never hold essential information; toasts auto-dismiss and never carry an action that must be taken. The light point (yellow) is a *signal*, not a generic warning colour — don't let it leak into callouts as a fill.

---

## 14. shadcn integration

Apps (e.g. jarvis) are built on shadcn/ui. The brand is delivered as **one CSS file** layered over stock components — components stay owned in the app repo, the brand lives in `shadcn/eav-theme.css`. Moving to shadcn is **additive**: our HSL token contract already matches shadcn's, so a stock `<Button>` is already EAV Red with a red ring; the theme file adds the EAV deltas (pill radius, CTA pulse, cream surfaces, error states). Full install order, component list, and per-component deltas: **`shadcn/README.md`**.

---

## Pre-ship checklist
- [ ] Rubik only; headlines Regular + one bold (or red) fragment; left-aligned; 8px rhythm.
- [ ] EAV palette only; red as a mark; cream blocks; yellow = light point, orange = gradient stop, burgundy = depth.
- [ ] Rounded cards/inputs, pill buttons; CTA pulse on primary actions.
- [ ] Restrained for product UI; hero gradient reserved for brand moments.
- [ ] Material Symbols (Outlined, weight 300), functional & secondary; no emoji, no hand-drawn SVG.
- [ ] Charts follow Red→Orange→Burgundy→Yellow→Dark Cream→Grey→Black.
- [ ] Copy terse, concrete, confident — never hype.
- [ ] Every input has all states: rest · hover · focus · filled · **invalid (icon+text, not colour alone)** · disabled · loading.
- [ ] Fields wrapped in a form group (label + helper/error); focus ring never suppressed; destructive actions use a blocking dialog, not a toast.
