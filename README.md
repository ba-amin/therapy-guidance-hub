# Therapy Guidance Hub
Trying to provide practical guide containing Schema Therapy and CBT manuals, user instructions, and supporting resources.

Start with [Schema Domains and Recognition](Guide%20to%20Schema%20Domains%20and%20Recognition.html)
for the five-domain map, all eighteen schemas, original examples, and an unscored
reflection worksheet. The overview separates recognition questions from diagnosis
and collects its references in the final section.

Open [the hub](index.html) to browse the overview and seven bilingual schema guides. The newest schema guide is
[Approval-Seeking / Recognition-Seeking](Interactive%20Guide%20to%20the%20Approval%20Seeking%20Recognition%20Seeking%20Schema.html),
with fifteen sections, dedicated emotional-needs coverage, visible and masked signs,
fictional examples, detailed coping and mode explanations, and two private worksheets.
It covers both seeking acceptance through pleasing and seeking recognition through
achievement, image, or status, while distinguishing these patterns from ordinary
appreciation, useful feedback, and practical responsibilities. It ends
with a bibliography separating consulted sources from further reading. Its
[authoring outline](docs/drafts/approval-seeking-recognition-seeking.md) and
[evidence and coverage record](docs/research/approval-seeking-recognition-seeking-sources.md)
record the content plan, source access, limitations, and verification status.

The [Entitlement / Grandiosity guide](Interactive%20Guide%20to%20the%20Entitlement%20Grandiosity%20Schema.html)
distinguishes respectful self-advocacy from rigid demands for exceptions; its
[evidence record](docs/research/entitlement-grandiosity-sources.md) documents the
source review, coverage audit, and completed technical checks.

The [Enmeshment / Undeveloped Self guide](Interactive%20Guide%20to%20the%20Enmeshment%20Undeveloped%20Self%20Schema.html)
also includes expanded coping and mode explanations; its
[evidence record](docs/research/enmeshment-undeveloped-self-sources.md) records source scope and limitations.

The [Unrelenting Standards / Hypercriticalness guide](Interactive%20Guide%20to%20the%20Unrelenting%20Standards%20Hypercriticalness%20Schema.html)
now meets the expanded requirements for a schema brief, dedicated core
emotional needs, visible and masked signs, and detailed coping/mode explanations.
Its [evidence and coverage record](docs/research/unrelenting-standards-sources.md)
tracks consulted sources, study limitations, and final verification status.

## Styling

Every HTML page loads `styles/shared.css` first, followed by its component stylesheet
(`hub.css`, `subjugation.css`, `defectiveness.css`, or `interactive-guide.css`). The shared
file owns repeated colors, language visibility, layout, typography, and component
rules. Page styles contain the remaining components and intentional differences,
including responsive and print overrides. `interactive-guide.css` is reused by
the domains overview, Unrelenting Standards, Insufficient Self-Control, Enmeshment,
Entitlement, and Approval-Seeking guides; new guides that
follow the authoring template should reuse it rather than copy its rules.

Guide documents use `class="guide-page"` on `<html>` to scope common guide styles.
The template-based guides also use `interactive-guide`. The Subjugation and
Defectiveness/Shame guides use `classic-guide` for their shared component rules.
Keep these classes when switching languages or
creating another guide that uses these conventions. Add reusable styles to the
shared file instead of copying them into HTML; reserve inline styles for values
that JavaScript updates, such as progress-bar widths.

Open `index.html` directly, or serve this directory with any static HTTP server.
Keep the `styles/`, `scripts/`, and `assets/` directories alongside the HTML files
when copying or publishing the hub. No build step is needed, and browsers can reuse the shared stylesheet
while navigating between guides.

All pages use locally bundled variable fonts through `styles/shared.css`:
Vazirmatn for Persian, Inter for English, and Source Serif 4 for English guide
headings. The shared `--font-fa`, `--font-en`, and `--font-serif` tokens own these
choices; controls and diagram labels inherit the selected language's font.
Fonts load as needed, with system fallbacks while loading, and require no Google
Fonts connection. Sources, versions, and licenses are in [assets/fonts](assets/fonts/README.md).
Pages with a Content Security Policy must allow `font-src 'self'` for these assets.

Template-based guides reuse `scripts/interactive-guide.js` for language switching,
contents navigation, worksheet clearing, and printing expanded explanations and
complete worksheet responses. Load it with `defer` and allow `script-src 'self'`
in the page's Content Security Policy. The script stores only the language
preference; worksheet answers stay in the page and are not saved or transmitted.

## Guide authoring drafts

Use the [shared authoring standard](docs/schema-guide-standard.md) and
[reusable guide template](docs/schema-guide-template.md) to align section order,
examples, worksheets, evidence, bilingual behavior, and visual components.
The [minimum-coverage requirements](docs/schema-guide-standard.md#minimum-coverage-for-introducing-and-recognizing-a-schema)
use the existing Defectiveness / Shame guide as a content benchmark. They require
an opening definition/domain/needs brief, a dedicated core-emotional-needs section
with examples, separate visible and hidden/masked signs, and useful comparisons
with related schemas. Relationship effects, professional-support guidance, and
realistic progress are also explicit. Section 3 now names core emotional needs;
the fifteen-section order remains. These documentation changes need to be applied
when revising existing guide pages and outlines.
Schema-specific outlines are available for [Subjugation](docs/drafts/subjugation.md),
[Defectiveness and Shame](docs/drafts/defectiveness-shame.md),
[Unrelenting Standards and Hypercriticalness](docs/drafts/unrelenting-standards.md),
[Insufficient Self-Control and Self-Discipline](docs/drafts/insufficient-self-control.md),
[Enmeshment and Undeveloped Self](docs/drafts/enmeshment-undeveloped-self.md),
[Entitlement and Grandiosity](docs/drafts/entitlement-grandiosity.md), and
[Approval-Seeking and Recognition-Seeking](docs/drafts/approval-seeking-recognition-seeking.md).
Each outline now explicitly develops coping styles and modes: what may activate
them, how they can feel and appear, what purpose a response serves, how a sequence
can repeat, and where a Healthy Adult response could help. The template makes this
coverage mandatory and connects it to the existing reflection and practice fields.
These are authoring resources; the standard identifies alignment work still needed
in individual HTML guides. The Unrelenting Standards outline now incorporates the
expanded introductory and recognition requirements in the revised HTML, with
forty browser checks and its coverage audit recorded in the evidence record. The Enmeshment guide already implements
the expanded coping and mode coverage; the Subjugation, Defectiveness/Shame, and
Insufficient Self-Control pages still need the corresponding outline material applied.
The Entitlement guide implements the complete current template. Its evidence
record documents the content and bilingual review, forty passing browser checks,
local-link checks, and verification of complete long answers in the printed PDF.
The Approval-Seeking guide has been checked against the same current template.
Its evidence record documents source/content review, bilingual structural checks,
forty passing browser checks, and local-link verification. The generated English
PDF preserved all eighty lines of a long test answer and the bibliography;
selected-language printing and disclosure restoration passed in both languages.
