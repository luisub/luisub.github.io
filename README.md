# Luis Aguilera — academic website

A static academic portfolio for GitHub Pages. There is no build step, package manager, analytics, or visitor tracking. All fonts, images, styles, and scripts are served locally.

## Preview

From this directory, run `python3 -m http.server 8000 --bind 127.0.0.1` and open `http://127.0.0.1:8000`.

## Editing

- `index.html`: biography, research themes, publications, software, teaching, and contact information. All content is present in the HTML and remains readable without JavaScript.
- `styles.css`: shared typography, layout, responsive rules, and print styles.
- `script.js`: mobile menu, publication filtering, and current-section navigation.
- `404.html`: custom GitHub Pages error page. Root-relative asset links also work for missing pages in nested directories.
- `assets/`: local research image, favicon, fonts, and license notices.
- `sitemap.xml` and `robots.txt`: search engine discovery.

To add a publication, copy a `.publication` list item, update its year, title, authors, journal, and DOI, and set `data-kind` to `article`, `conference`, or `preprint`. Set `data-first-author="true"` only when appropriate. Bold Luis's name in the author list. The filters compute counts from the actual items; keep the initial count in `.publication-count` current too.

The selected list is not presented as a complete bibliography. The first-author filter includes preprints. Journal articles exclude preprints and conference papers. Print styles show the entire selected list, even when a filter is active.

## CV and privacy

The CV is available on request through the existing public LinkedIn profile. No CV attachment was available during this redesign. No home address, telephone number, date of birth, private email, references' contact details, or private CV document has been added.

To publish a CV later, create a separate public version, review both its visible content and document metadata, and link only that version. Keep the original private document outside this repository. The site currently includes only the academic biography and professional profiles already on the original site, plus cited research and teaching resources.

## Content sources

Biography, appointment, degree description, software descriptions, UQ-Bio leadership, and the selected publication list originated in the previous website. No appointment dates, grants, awards, citation totals, or additional credentials were inferred. Research themes and the introductory statement synthesize that existing material and should be reviewed as personal positioning.

Publication links were checked against journal or institutional records where available:

- [MicroLive](https://doi.org/10.1093/bioadv/vbag095), also documented in the [project's package record](https://pypi.org/project/microlive/).
- [Methods in quantitative biology](https://doi.org/10.1088/1478-3975/adda85), with an [institutional copy](https://minerva-access.unimelb.edu.au/server/api/core/bitstreams/8b8ab9cf-d61e-4e5d-91d5-31a530b0c4f2/content) documenting the recorded teaching resources.
- [Sequential experiment design](https://doi.org/10.1109/CDC56724.2024.10886397), confirmed in the [PubMed record](https://pubmed.ncbi.nlm.nih.gov/40636454/).
- [Mechanistic models and machine learning](https://www.frontiersin.org/journals/cell-and-developmental-biology/articles/10.3389/fcell.2023.1151318/full).
- [IRES and cap translation](https://www.nature.com/articles/s41594-020-0504-7).
- [Computational design and interpretation of single-RNA translation experiments](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1007425). The title has been corrected to match the published article.
- [Translational frameshifting](https://doi.org/10.1016/j.molcel.2019.05.002), confirmed against the [authors' institutional manuscript](https://stasevichlab.colostate.edu/papers/Lyon-Stasevich-MolecularCell-MainPlusStarMethods.pdf).
- [UTag](https://doi.org/10.64898/2026.05.06.723082): title, authors, year, and preprint status retained from the original site; the DOI resolves to the bioRxiv preprint and its citation metadata was checked.

The [UQ-Bio program homepage](https://q-bio.org/wp/) describes the summer school as a 2020–2024 program. The teaching description uses past tense and links to the continuing learning resources; these program dates do not assert the dates of Luis’s individual role. The old `/wp/uqbio/` link redirected to an unrelated archived career discussion and has been replaced.

Recorded tutorials: [Image processing fundamentals](https://doi.org/10.25675/10217/240613) and [Segmentation and particle tracking](https://doi.org/10.25675/10217/240616).

## Asset attribution

`assets/microlive-gui.png` is the unmodified [MicroLive GUI image](https://raw.githubusercontent.com/ningzhaoAnschutz/microlive/main/docs/gui_image.png) from the [MicroLive project](https://github.com/ningzhaoAnschutz/microlive). Its original file is available by clicking either image. The hero uses a CSS viewport onto the microscopy panel, preserving its scale bar and tracking annotations. The full interface appears in the software section. The project's GPL v3 license is retained in `assets/licenses/microlive-GPL-3.0.txt`.

DM Sans and Source Serif 4 are locally hosted variable fonts from Google Fonts. Their SIL Open Font License notices are in `assets/licenses/`.

## Verification

Before publishing, inspect desktop and mobile layouts, exercise all four publication filters, check mobile menu keyboard behavior and section links, and review the contact and CV wording. `node --check script.js` checks JavaScript syntax. This repository does not need a build process to deploy on GitHub Pages.
