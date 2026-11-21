---
title: Writing the Text
numeral: I
order: 1
thumbnail: /assets/images/sample-1.png
image: /assets/images/sample-1.png
image_alt: A dithered gradient with a dark circle
image_caption: "Sample image, dithered with tools/dither.py."
---

Each part of the book is one Markdown file. The block between the two lines of dashes at the top is the front matter: the part's title, its numeral, its place in the order, and an optional image. Everything below it is the text.

## Front matter

The `order` number decides where a part falls in the book. Files are easiest to manage when their names begin with the same number, as in `01-writing.md`, but the number in the front matter is the one that counts. Leave out `numeral` for front and back matter, such as a foreword or a colophon.

## Formatting

Paragraphs are separated by a blank line. They are set the way a book sets them, with an indent and no space between, so the text reads as continuous prose.

> A quotation is a line that starts with a greater-than sign. It takes the accent color as a rule along its left edge.

A note is written as a marker in the text and the note itself anywhere below.[^1] The notes collect at the end of the page.

A line of three asterisks makes a section break.

***

Italic is a word between single asterisks, as in *Stop Stealing Sheep*. Bold is two asterisks on each side, though a book rarely needs it.

[^1]: Like this. The number links back to where the note was called.
