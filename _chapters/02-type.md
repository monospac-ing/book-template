---
title: Setting the Type
numeral: II
order: 2
thumbnail: /assets/images/sample-2.png
image: /assets/images/sample-2.png
image_alt: Dithered vertical bars stepping from dark to light
---

Two typefaces carry the whole design. Archivo, a grotesque with a width axis, sets the display lines and the interface. EB Garamond sets the reading text. Both are variable fonts, so one file holds every weight, and Archivo can run from compressed to expanded.

## Where to change things

Open `assets/css/book.css`. The first block, under `:root`, holds the settings most worth changing:

- `--paper` and `--ink` for the page and text colors
- `--display` and `--text` for the two typefaces
- `--measure` for the length of a line of text
- `--body-size` and `--leading` for size and line spacing

The accent color lives in `_config.yml`, so it can change without touching the stylesheet.

## The width axis

The cover title and part titles use Archivo at `font-stretch: 62%`, its narrowest width. Try 100% for a normal width or 125% for an expanded one. A single number changes the voice of the book, which makes it a useful thing to test before settling on anything else.

## Using other fonts

To swap a typeface, add its `.woff2` files to `assets/fonts`, add an `@font-face` rule at the top of the stylesheet, and change the variable. Check the license first: the font has to allow web embedding. Archivo and EB Garamond are both under the SIL Open Font License, which does.
