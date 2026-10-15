# Therapy Guidance Hub
Trying to provide practical guide containing Schema Therapy and CBT manuals, user instructions, and supporting resources.

## Styling

Every HTML page loads `styles/shared.css` first, followed by its own stylesheet
(`hub.css`, `subjugation.css`, `defectiveness.css`, or `unrelenting.css`). The shared
file owns repeated colors, language visibility, layout, typography, and component
rules. Page styles contain the remaining components and intentional differences,
including responsive and print overrides.

Guide documents use `class="guide-page"` on `<html>` to scope common guide styles.
The Subjugation and Defectiveness/Shame guides also use `classic-guide` for their
shared component rules. Keep these classes when switching languages or
creating another guide that uses these conventions. Add reusable styles to the
shared file instead of copying them into HTML; reserve inline styles for values
that JavaScript updates, such as progress-bar widths.

Open `index.html` directly, or serve this directory with any static HTTP server.
Keep the `styles/` and `assets/` directories alongside the HTML files when copying or publishing
the hub. No build step is needed, and browsers can reuse the shared stylesheet
while navigating between guides.

All pages use locally bundled variable fonts through `styles/shared.css`:
Vazirmatn for Persian, Inter for English, and Source Serif 4 for English guide
headings. The shared `--font-fa`, `--font-en`, and `--font-serif` tokens own these
choices; controls and diagram labels inherit the selected language's font.
Fonts load as needed, with system fallbacks while loading, and require no Google
Fonts connection. Sources, versions, and licenses are in [assets/fonts](assets/fonts/README.md).
Pages with a Content Security Policy must allow `font-src 'self'` for these assets.

## Guide authoring drafts

Use the [shared authoring standard](docs/schema-guide-standard.md) and
[reusable guide template](docs/schema-guide-template.md) to align section order,
examples, worksheets, evidence, bilingual behavior, and visual components.
Schema-specific outlines are available for [Subjugation](docs/drafts/subjugation.md),
[Defectiveness and Shame](docs/drafts/defectiveness-shame.md), and
[Unrelenting Standards and Hypercriticalness](docs/drafts/unrelenting-standards.md).
These are drafting resources; the standard identifies alignment work still needed
in the existing HTML guides.
