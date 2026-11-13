# The Cannabis Field Guide

A field-to-table guide to growing, preparing and cooking home-grown cannabis. The site is static: no server or installation is required to view it.

## Editing

- `app.js` contains the guides, recipes, categories and site behaviour.
- `style.css`, `readability.css` and `custom.css` control the design.
- `assets/hero.png` is the hero image.
- `index.html` is the live site's entry point.

Edit the files on GitHub or locally and commit to `main`. GitHub Pages publishes the repository root. Saved guides and reading progress stay in each visitor's browser.

`cannabis-field-guide.html` is a self-contained downloadable copy. After changing the site, regenerate it with Node.js using `node scripts/build-standalone.cjs`, then commit the updated HTML alongside the source changes. The downloadable file can also be opened directly in a browser.

Cannabis laws vary by location. Homemade products have unknown potency unless tested; the guide includes serving and storage precautions.
