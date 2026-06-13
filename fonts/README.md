# Fonts

The Eatable Adventures product uses two Google-hosted families, loaded in-app via `next/font`:

- **Inter** — all UI text. Weights 400 / 500 / 600 / 700. Stylistic sets `cv11` + `ss01` enabled (`font-feature-settings: 'cv11','ss01'`).
- **IBM Plex Mono** — micro-labels, the `EA` monogram, numeric/system accents. Weights 400 / 500.

`../colors_and_type.css` pulls both from Google Fonts with an `@import`, so HTML output needs no local files.

## Going offline
If you need a self-contained bundle, download the two families (e.g. from fonts.google.com) into this folder as `.woff2`/`.ttf` and replace the `@import` in `colors_and_type.css` with `@font-face` rules:

```css
@font-face {
  font-family: 'Inter';
  src: url('fonts/Inter-Variable.woff2') format('woff2');
  font-weight: 100 900;
}
@font-face {
  font-family: 'IBM Plex Mono';
  src: url('fonts/IBMPlexMono-Regular.woff2') format('woff2');
  font-weight: 400;
}
```

Both are open-source (Inter: SIL OFL; IBM Plex Mono: SIL OFL).
