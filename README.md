# Book template

A template for publishing a book-length text as a website: a cover, a table of contents, and one page per part, read in order. Built with Jekyll and published free with GitHub Pages. No build tools needed on your computer.

## Start

1. Create a new public repository on GitHub and upload these files (or use **Use this template** if this repo is marked as a template).
2. Open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
3. If the repository is not named `username.github.io`, set `baseurl` in `_config.yml` to `/repository-name`.

The site appears at the address shown on the Pages settings screen after a minute or two.

## Where things are

| File or folder | What it does |
| --- | --- |
| `_config.yml` | Title, subtitle, author, publisher, accent color |
| `_chapters/` | One Markdown file per part. `order` in the front matter sets the sequence |
| `index.html` | The cover |
| `contents.html` | The table of contents, built from `_chapters/` |
| `_layouts/chapter.html` | The page template: running head, title, text, page turn |
| `assets/css/book.css` | All styles. Start with the variables under `:root` |
| `assets/fonts/` | Common Serif (SIL Open Font License) |
| `tools/dither.py` | Dither an image to 1-bit for chapter images |

## A chapter file

```markdown
---
title: Writing the Text
numeral: I          # leave out for foreword, colophon, etc.
order: 1            # position in the book
thumbnail: /assets/images/sample-1.png   # optional, shown in contents
image: /assets/images/sample-1.png       # optional, shown at the top of the part
image_alt: Describe the image
---

Text in Markdown.
```

## Credits

Font: [Common Serif](https://github.com/StefanPeev/Common-Serif) by Stefan Peev, under the SIL Open Font License 1.1 (see `assets/fonts/`). "Common Serif" is a Reserved Font Name: the files here are the complete fonts converted to WOFF2. A subset or other modified version must be renamed.
