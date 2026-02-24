# Copenhagen Theme Project Structure

This document explains the current layout of the project and where to look for common concerns.

## Top-Level

- `package.json`: Node tooling, scripts, and dependencies.
- `manifest.json`: Zendesk theme manifest and metadata.
- `script.js` / `style.css`: Compiled JS and CSS outputs (theme entry points).
- `rollup.config.mjs`: Bundler configuration for JS assets.
- `tsconfig.json`: TypeScript configuration (even if most files are JS).
- `jest.config.mjs` / `jest.setup.js`: Test setup and config.
- `translations.yml`: Source for translation extraction.
- `zass.mjs`: Sass build tooling.
- `generate-import-map.mjs`: Import map generation.
- `AGENTS.md` / `CLAUDE.md`: Internal process or agent notes.
- `CHANGELOG.md`: Release history.

## Source Code

- `src/`: Primary JavaScript source.
  - `index.js`: Main entry that wires modules together.
  - `navigation.js`, `search.js`, `forms.js`, `share.js`: Page-level behaviors.
  - `Dropdown.js` / `dropdowns.js`: Dropdown UI logic and helpers.
  - `focus.js`, `Keys.js`: Accessibility and keyboard utilities.
  - `modules/`: Feature-specific modules (subsystem code).
  - `Dropdown.spec.js`: Unit tests for dropdown logic.

## Styles

- `styles/`: Sass source organized by feature and page area.
  - `index.scss`: Style entry point that imports partials.
  - `_variables.scss`: Theme tokens (colors, spacing, typography).
  - `_base.scss`: Reset and base element rules.
  - `_header.scss`, `_footer.scss`: Global layout sections.
  - `_home-page.scss`, `_article.scss`, `_search.scss`: Page-specific styling.
  - `normalize.css`: CSS normalization.

## Templates

- `templates/`: Handlebars templates rendered by Zendesk.
  - `article_page.hbs`, `category_page.hbs`, etc.: Page layouts.

## Assets

- `assets/`: Prebuilt JS bundles used by specific features.
  - `*-bundle.js`: Feature bundles.
  - `*-translations-bundle.js`: Feature translation bundles.
  - `shared-bundle.js`: Shared runtime modules.

## Translations

- `translations/`: Locale JSON files (e.g., `ar.json`).

## Tooling and Automation

- `bin/`: Scripts for extraction, uploads, and updates.
  - `theme-upload.js`: Zendesk theme upload.
  - `update-translations.js`: Translation build/update.
  - `extract-strings.mjs`: i18n string extraction.
- `.husky/`: Git hooks (commit message enforcement).
- `.github/`: CI config and code owners.
- `.eslintrc.js`: Lint configuration.
- `.a11yrc.json.example`: Accessibility lint config example.

## Where to Start

- Looking for UI structure? Check `templates/` and `styles/` first.
- Looking for interactive behavior? Check `src/`.
- Updating translations? Check `translations.yml` and `translations/`.
- Updating build pipeline? Check `rollup.config.mjs` and `zass.mjs`.
