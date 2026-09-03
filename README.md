# Malte Willmes — Academic Website

Source code for my personal academic website.

The site presents my research projects, publications, presentations, scientific software, and data resources.

## Site structure

The website is built with Jekyll and hosted with GitHub Pages.

Content is organized primarily through:

- `_research/` — research projects
- `_presentations/` — talks and presentations
- `_pages/` — main website pages
- `scripts/fetch_zotero.py` — retrieves publication metadata from Zotero
- `_data/` — navigation and generated publication data

Publication records are generated from my Zotero library during the GitHub Pages build.

## Local development

Install the Ruby dependencies:

```bash
bundle install
```

Run the website locally:

```bash
bundle exec jekyll serve
```

JavaScript dependencies can be installed with:

```bash
npm install
```

After modifying the JavaScript source files, rebuild the bundled JavaScript with:

```bash
npm run build:js
```

## Acknowledgments

This website is based on the **Minimal Academic Site** template and has been substantially modified for my personal academic website.

The theme has the following open-source lineage:

- **Minimal Academic Site**, developed by Md Rezwane Sadik, provided the minimalist design used as the starting point for this website.
- **Academic Pages**, originally created by Stuart Geiger and subsequently maintained by Robert Zupko and other contributors, provided the underlying academic-website architecture.
- **Minimal Mistakes**, created by Michael Rose, provided the original Jekyll theme on which Academic Pages was based.

I am grateful to these developers and the broader open-source community for making their work available for reuse and modification.

Additional modifications to the design, research and presentation collections, interactive presentation map, Zotero publication workflow, and site content were made for this website.

## License

The underlying website code retains the MIT License and copyright notice included with the original theme. See `LICENSE` for details.

Unless otherwise indicated, the research text, photographs, figures, CV, datasets, and other original content associated with this personal website are the intellectual property of their respective authors and are not intended to be covered by the software license simply by being hosted in this repository.
