---
title: Publishing
numeral: III
order: 3
thumbnail: /assets/images/sample-3.png
image: /assets/images/sample-3.png
image_alt: A dithered landscape with a white sun over a dark field
---

The site is published by GitHub Pages, which is free for public repositories.

## Turning it on

In the repository on GitHub, open Settings, then Pages. Under "Build and deployment," choose "Deploy from a branch," select `main` and the root folder, and save. The site appears a minute or two later at the address shown at the top of that page.

## The one setting that matters

If the repository is named anything other than `username.github.io`, the site lives in a subfolder, such as `username.github.io/my-book`. Set `baseurl` in `_config.yml` to `/my-book` so that links and images find their way. Leave it empty for a custom domain.

## Changing the text later

Edit a file on GitHub, or on your computer with GitHub Desktop, and commit. Each commit rebuilds the site. The history keeps every earlier version, so nothing is lost when a passage is rewritten.
