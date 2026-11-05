# JCA Studio · Editorial and Publishing Governance

Status: **Proposed release policy — review before merging.** This document is introduced in draft PR #11 and is not yet enforced by GitHub branch-protection or CI checks.

## Approved site architecture
- Main navigation stays **Projects / About / Contact**.
- Homepage features the most recently **published** journal entry, while preserving the About and Contact content.
- Projects lists **projects**, not individual articles.
- Each project has a landing page with a short introduction and dated journal entries, ordered **newest first** and labeled by sequence number.
- Each journal entry has its own permanent URL, with AI Receipts and Fine Print.
- Project titles can be editorial working titles; do not treat **The Christmas Game** as a finalized product name.
- New draft content stays on a separate branch and Vercel Preview until expressly approved for publication.
- Publishing a new entry may require changes to the homepage feature, Projects index and project hub. It must not automatically rewrite existing entries.

## Locked content
The following production content is treated as editorially locked until explicit, file-specific permission:
- `journal/christmas-tradition/index.html` — original approved Christmas article
- Approved About and Contact copy in `index.html`
- Core navigation, analytics integrations, global visual language, and existing metadata

The main homepage `index.html` can be changed **only in explicitly approved sections** (e.g. the current featured article); do not edit About, Contact or other sections incidentally.
The existing article URL must remain stable to protect external links.

## Draft PR #11: authorized scope
Changes to preview the agreed information architecture:
- `index.html` — **featured article section only**, plus temporary preview label and supporting isolated styling.
- `journal/index.html` — smaller page heading, project-level index.
- `journal/christmas-game/index.html` — new project hub (working editorial name).
- `journal/six-weeks-already-playable/index.html` — revised second entry, timeline, estimates chart, screenshot placeholders.
- `SITE_GOVERNANCE.md` — this policy.

Not authorized:
- Rewriting `journal/christmas-tradition/index.html`.
- Modifying `styles.css` or the About/Contact content.
- Merging into `main` or publishing the new article without explicit approval.

## Pre-publication QA
1. Compare the PR diff with `main` and list every changed path; investigate any unexpected path.
2. Verify previously approved files are byte-for-byte identical.
3. Confirm the homepage About/Contact region and masthead/navigation are unchanged.
4. Check Vercel Preview on desktop and mobile; check wrapping, tap targets, heading hierarchy, and images.
5. Check internal links (home → new entry; Projects → project hub; hub → each article), existing navigation and email/LinkedIn links.
6. Check Google Analytics and Vercel Analytics integrations and social metadata.
7. Verify each new article's facts, dates, hours, image rights, AI Receipts and Fine Print; never invent tool usage.
8. Replace screenshot placeholders with authorized authentic images or explicitly accept placeholders for a continued draft.
9. When approved for publication, remove preview-only banners and robots noindex from publishable pages, add appropriate page metadata/canonical, and replace any draft dates or labels.
10. Confirm explicit user approval of the final preview **before** merge to `main`, then smoke-test production.

## Intended future automation (not yet configured)
- GitHub CI file-scope checks and approved-content checksum verification.
- GitHub branch protection / rulesets requiring passing checks before merging.
- Automated smoke tests and optional visual screenshot comparisons.
- A structured content index to generate project and latest-entry listings rather than editing multiple HTML pages by hand.

An editorial lock in this Markdown file is **a working rule, not a technical GitHub lock**. Technical enforcement requires configuring and testing the CI and repository rules.
