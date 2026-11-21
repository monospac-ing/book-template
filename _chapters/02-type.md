---
title: Setting the Type
numeral: II
order: 2
thumbnail: /assets/images/sample-2.png
image: /assets/images/sample-2.png
image_alt: Dithered vertical bars stepping from dark to light
---

One typeface carries the whole design: Newsreader, by Production Type, drawn for long reading on screens. Titles are set in its heaviest weight, the reading text a little above its regular, and the small labels around the page in spaced capitals.

## Where to change things

Open `assets/css/book.css`. The first block, under `:root`, holds the settings most worth changing:

- `--paper` and `--ink` for the page and text colors
- `--display` and `--text` for the title and reading typefaces
- `--measure` for the length of a line of text
- `--body-size` and `--leading` for size and line spacing

The accent color lives in `_config.yml`, so it can change without touching the stylesheet.

## Optical size

Newsreader has a second axis besides weight: optical size, from 6 to 72. Small sizes get sturdier strokes, looser spacing and a larger x-height so they hold up on screen; large sizes get finer contrast and tighter fit. The browser sets it automatically from the font size, so a title at 72 pixels and a footnote at 16 are each drawn for their size, from the same file.[^1]

## Weight

Both axes live in one file per style, so every weight from 200 to 800 is available. Try it: the sliders change the weight of this page as you drag.

<div class="weight-tool" data-weight-tool markdown="0">
  <label>Text <input type="range" min="200" max="800" step="10" value="460" data-var="--text-weight"><output>460</output></label>
  <label>Titles <input type="range" min="200" max="800" step="10" value="800" data-var="--title-weight"><output>800</output></label>
  <code></code>
</div>

To keep a setting, copy the line under the sliders into the `:root` block of `assets/css/book.css`. Text usually reads well between 400 and 480; light text on a dark page needs less weight than dark text on a light one.

## Using other fonts

To swap a typeface, add its `.woff2` files to `assets/fonts`, add an `@font-face` rule at the top of the stylesheet, and change the variable. Check the license first. A public repository makes the font files downloadable, so the license has to allow that. Fonts under the SIL Open Font License do, which includes every font on Google Fonts that uses it.

[^1]: The note numbers here use the font's own superior figures, drawn to sit high and small, unlike ordinary numbers that the browser shrinks and raises.
