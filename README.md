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
shared font and component rules. Keep these classes when switching languages or
creating another guide that uses these conventions. Add reusable styles to the
shared file instead of copying them into HTML; reserve inline styles for values
that JavaScript updates, such as progress-bar widths.

Open `index.html` directly, or serve this directory with any static HTTP server.
Keep the `styles/` directory alongside the HTML files when copying or publishing
the hub. No build step is needed, and browsers can reuse the shared stylesheet
while navigating between guides.
