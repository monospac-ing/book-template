---
title: Setting the Type
numeral: II
order: 2
thumbnail: /assets/images/sample-2.png
image: /assets/images/sample-2.png
image_alt: Dithered vertical bars stepping from dark to light
---

One typeface carries the whole design: Common Revised, a variable build of Common Serif by Stefan Peev, which is itself built on Libertinus Serif. Titles are set in its bold, the reading text in its regular and italic, and the small labels around the page in its true small caps rather than shrunken capitals.

## Where to change things

Open `assets/css/book.css`. The first block, under `:root`, holds the settings most worth changing:

- `--paper` and `--ink` for the page and text colors
- `--display` and `--text` for the title and reading typefaces
- `--measure` for the length of a line of text
- `--body-size` and `--leading` for size and line spacing

The accent color lives in `_config.yml`, so it can change without touching the stylesheet.

## OpenType features

The font has features most fonts lack: small caps, old-style figures, fractions, superior figures for notes, and nine stylistic sets. The stylesheet turns some on with `font-variant` properties. Old-style figures sit in the running text, like 1928 or 2026, and the note numbers use the font's own superiors.[^1]

## Weight

The font is variable, so it holds every weight from 400 to 700 in one file, not just a regular and a bold. Try it: the sliders change the weight of this page as you drag.

<div class="weight-tool" data-weight-tool markdown="0">
  <label>Text <input type="range" min="400" max="700" step="5" value="460" data-var="--text-weight"><output>460</output></label>
  <label>Titles <input type="range" min="400" max="700" step="5" value="700" data-var="--title-weight"><output>700</output></label>
  <label>Outline <input type="range" min="0" max="0.04" step="0.002" value="0.02" data-var="--title-stroke" data-unit="em"><output>0.02</output></label>
  <code></code>
</div>

To keep a setting, copy the line under the sliders into the `:root` block of `assets/css/book.css`. Text usually reads well between 400 and 480; light text on a dark page needs less weight than dark text on a light one. Titles stop at 700, the heaviest weight the font has, so the outline adds weight beyond that by tracing each letter in the same color.

## Using other fonts

To swap a typeface, add its `.woff2` files to `assets/fonts`, add an `@font-face` rule at the top of the stylesheet, and change the variable. Check the license first. A public repository makes the font files downloadable, so the license has to allow that. Fonts under the SIL Open Font License do.

[^1]: Superior figures are designed to sit high and small, unlike ordinary numbers that the browser shrinks and raises.
