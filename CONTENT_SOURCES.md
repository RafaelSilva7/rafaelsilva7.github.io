# Content sources and review notes

Content imported on 20 November 2026. Visual identity is intentionally deferred to the design work in ChatGPT. Academic Pages, its sidebar, and light/dark behavior remain in place.

## Supplied sources

- `curriculo_lattes.pdf`: 20-page image-only CV, updated 5 November 2026 and generated 20 November 2026. Read using OCR and visual checks. Supports biography, degrees, supervisors, funding, research, teaching, service, ORCID, Lattes ID, and older outputs.
- `_Rafael da Costa Silva_ - _Google Scholar_.html`: saved profile with nine research outputs. Supports research interests, affiliation, publication titles, venues, and Scholar record identifiers.
- Scholar's saved HTML also contains signed-in account controls and unrelated account addresses. The original HTML is not copied into the site. Only public academic profile information is used; citation counts are omitted because they become stale.
- The portrait is extracted from the first page of Lattes. A separate, higher-resolution portrait can replace it later.
- The public contact address `rafael.csilva@usp.br` is corroborated by the [USP-hosted ENIAC paper](https://repositorio.usp.br/directbitstream/a87e0000-d6e4-466a-bf20-f35cba116f07/3279397.pdf).

The original PDF is retained outside the repository rather than republished. The CV page provides an English summary and links to Lattes.

## Publication reconciliation

All nine Scholar outputs and two additional Lattes outputs are represented. Entries retain author order; preprints, dissertations, and extended abstracts are explicitly distinguished from articles and conference papers.

| Output | Decision and evidence |
| --- | --- |
| Tackling Low-Resource ECG Classification | Display 2025, the [Springer publication year](https://link.springer.com/chapter/10.1007/978-3-031-79038-6_17). Keep BRACIS 2024 in the venue. Scholar lists the conference year. |
| Exploring Data-Oriented Strategies | Display 2026, the [Springer publication year](https://link.springer.com/chapter/10.1007/978-3-032-15990-8_15). Keep BRACIS 2025 in the venue. Scholar lists the conference year. |
| ARIMA / Hansen's disease | Display 2021, matching Scholar and the [publisher's PDF](https://www.mdpi.com/1660-4601/19/1/415/pdf?version=1641370458), published 31 December 2021. Lattes lists 2022. |
| Chagas disease detection | Author order follows Lattes and the [final CinC archive PDF](https://cinc.org/archives/2025/pdf/CinC2025-259.pdf). An earlier accepted-paper PDF omits Rafael and Diego; do not use that earlier version. |
| CLIC | Retain the supplied Scholar classification as a preprint; verify title and author order against [arXiv](https://arxiv.org/abs/2605.19132). Do not infer peer-reviewed status from other versions without review. |
| Beyond Single-Beat Classification | Full author order from the [official CBMS 2026 program](https://easychair.org/smart-program/IEEECBMS2026/slides.html). Keep the Scholar record link; a dedicated DOI/PDF has not been confirmed. |
| Autotie | Title, venue, year, and author order from Scholar. Full co-author names corroborated by the related Lattes project. Keep the Scholar record link until a publisher URL is confirmed. |
| Master's dissertation | Link to the [UFSCar repository](https://repositorio.ufscar.br/handle/20.500.14289/18513). |
| 2022 extended abstract and 2018 SECCOMP paper | Metadata from Lattes page 12. Preserve supplied initials for other authors. No dedicated links were supplied, so titles remain plain text. |

## Maintenance

- `_publications/` is the authoritative source for both homepage selections and the complete list. Set `selected: true` on an entry to feature it on the homepage; the initial three are a provisional editorial selection.
- Fields consumed by `_includes/publication-entry.html`: `title`, `authors` (ordered list), `venue`, `year`, `publication_type`, optional `pages`, and available `paperurl`, `doi` (full HTTPS URL), `codeurl`, `projecturl`, `slidesurl`, `bibtexurl`, `recordurl`/`record_label`, and `scholarurl`.
- Use `year` for grouping; do not invent month/day dates merely to sort citations. A `source` field records provenance but is not rendered.
- Demo publications were replaced. Other upstream demonstration collections, pages, and paper/slide assets are excluded from the build rather than presented as Rafael's work.
- No new font or palette decisions are implemented. Added CSS only keeps citations compact and links wrapping.

## Before publication

- The owner confirmed the default user-site domain `https://rafaelsilva7.github.io` and reported renaming the GitHub repository to `rafaelsilva7.github.io`. Configuration uses this URL with an empty `baseurl` and `repository: RafaelSilva7/rafaelsilva7.github.io`; the local origin is updated to match. The deployment workflow uses the base path returned by GitHub Pages, which should be empty for this user-site repository.
- Confirm the timing of the Peking University research visit. Lattes records the visit and supervisor but gives no dates; the CV does not claim the visit is current.
- Review the English biography, course titles, and provisional selection of three homepage papers.
- Add verified missing publication links and a dedicated downloadable CV if desired.
- Apply the eventual ChatGPT design specification, then check desktop/mobile appearance and both color modes.
- No commit, push, or deployment is part of this content pass.

## Validation of this content pass

- Passed YAML/front-matter parsing, required citation fields, unique output URLs, author-list consistency, and exact coverage of all nine Scholar record identifiers.
- Confirmed eleven research outputs, three selected homepage entries, all four navigation destinations, and the referenced portrait asset. Checked the extracted portrait visually.
- Verified source accents after import and ran `git diff --check` successfully.
- URL checks establish HTTPS syntax and preserve source-provided destinations; they do not establish that every external service will respond without bot restrictions.
- A full Jekyll build and rendered-site review were not run: Ruby and Bundler are unavailable in Windows and the installed Ubuntu WSL environment. These checks remain necessary before publication.
