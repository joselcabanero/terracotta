# Terracotta (EAV) × shadcn/ui — integration guide

This folder makes a shadcn application (jarvis) read as **Eatable Adventures**.
You are **not** rebuilding components — you install stock shadcn components and
let `eav-theme.css` re-skin them. Components stay owned by your repo; the brand
lives in one CSS file. Changing to shadcn is additive, not a rewrite.

> Olivier's rule: install a component only when a user task needs it. A library
> of unused components is a maintenance tax, not an asset. *Less, but better.*

---

## 1. Wire up the theme

```css
/* app/globals.css (or equivalent), AFTER the shadcn base layer */
@import "tailwindcss";
@import "./globals.css";        /* your existing shadcn tokens */
@import "../path/to/eav-theme.css";
```

**Tailwind version note.** Your tokens are written as full `hsl(...)` values
(Tailwind v4 style). If jarvis is on Tailwind v3 (`hsl(var(--primary))` in
`tailwind.config`), strip the `hsl()` wrapper so the vars hold channels only:
`--primary: 2 64% 45%;`. Everything else is identical.

Load Rubik (you already have the files in `/fonts`):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,800;1,400&display=swap" rel="stylesheet">
```

---

## 2. Components to install — by usability priority

`npx shadcn@latest add <name>`

### Tier 1 — Forms & input (install first; this is the real gap)
| shadcn component | EAV delta (already handled by eav-theme.css unless noted) |
|---|---|
| `button` | pill radius, weight 500, primary pulses on hover. Add `data-variant="cta"` for the burgundy "Let's Beat" button. |
| `input` | warm border, red focus ring, `aria-invalid` → red. **Always** wrap in `form` (label + message). |
| `textarea` | same focus/invalid contract as input. |
| `label` | use `--fg2`, 11px uppercase tracked for field labels (see DESIGN.md §13). |
| `form` | the spine of accessible forms — gives you label + description + **error message** wiring for free. Non-negotiable for every field. |
| `checkbox`, `radio-group`, `switch` | EAV Red when checked. |
| `select` | searchable via `command`; trigger inherits input styling. |
| `combobox` (= `command` + `popover`) | autocomplete / type-ahead — the "Suggest" pattern for your startups data. |
| `command` | the multi-select / filter palette (also powers an Omnibar). |
| `slider` | recolour track/thumb to EAV Red (utility classes). |
| `calendar` + `popover` → date picker | dates are everywhere in pilots/programs — high priority. |
| `tabs` / segmented | cream rail, white active pill, red label. |

### Tier 2 — Overlays & feedback (you currently have none of these)
| shadcn component | Use it for |
|---|---|
| `dialog` | focused create/edit task; **focus-trapped**, ESC closes. |
| `alert-dialog` | destructive confirms ("Delete pilot?"). Never use a toast for this. |
| `drawer` / `sheet` | side panel for record detail / filters without losing context. |
| `popover` | lightweight contextual editing & menus. |
| `tooltip` | terse label on truncation / icon-only controls. Never hide essential info here. |
| `sonner` (toast) | transient confirmation ("Saved"). Auto-dismiss; never for errors needing action. |
| `alert` (callout) | inline, persistent status inside the page (info / warning / error). |
| `progress` + `skeleton` + spinner | honest loading. Skeleton for layout-stable waits, spinner for short ones. |
| *empty state* | not a shadcn primitive — see `preview/component-empty-state.html`. The most-skipped, highest-impact screen. |

### Tier 3 — Navigation & data (add as the app grows)
`breadcrumb`, `dropdown-menu`, `navigation-menu`, `accordion` (collapse),
`pagination`, `table` (sortable/selectable — replaces the static one),
`avatar`, `tooltip`-on-`badge`. For trees use `accordion` recursively or a
dedicated tree lib themed with the tokens.

---

## 3. What stays EAV-specific (don't let shadcn flatten these)

1. **Pill buttons** + the **CTA pulse** on primary hover — your signature.
2. **Red focus ring**, always visible, never `outline:none` without a replacement.
3. **Cream surfaces** for editorial/highlight blocks; white for working chrome.
4. **The light point (yellow)** activates *one* focus per view — it is a signal,
   never decoration. Don't let it become a generic "warning yellow".
5. **Error = EAV Red.** You have no separate error hue by design; rely on icon +
   text + position, not colour alone (accessibility).
