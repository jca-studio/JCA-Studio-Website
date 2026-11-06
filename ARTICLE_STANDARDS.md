# JCA Studio | Article publishing standards

**Status:** Editorial standard for new journal articles. Adopted in draft only; no changes to existing published articles without explicit approval.

## Required on every journal article

1. **Consistent article hero:** project / journal eyebrow, descriptive headline, concise subtitle, byline/date, and a relevant authentic or approved hero image in the editorial two-column arrangement (image left, copy right; image stacks first on mobile). Alt text must describe the image accurately.
2. **Listen to this article:** accessible play, pause/resume, and stop controls near the byline. Read the headline, subtitle, and primary story in order—not navigation, controls, captions, AI Receipts, or legal/footer copy. Show clear unsupported/error states. Test on desktop and mobile before calling playback verified. Browser text-to-speech is the current draft baseline; recorded or generated narration with a dedicated audio player is an approved future enhancement, not a present capability.
3. **Share:** same circular controls as the original Christmas article: native share/copy link, X, LinkedIn, Facebook, and Pinterest. Buttons must have accessible labels, keyboard focus, functional destinations and URL-encoded article-specific title/image/link. During protected Vercel previews, explain that preview links may require login. Before publication verify sharing uses the actual public canonical URL and approved social image.
4. **AI Receipts:** transparent, specific explanation of **only tools actually used** for that installment and their contribution. Consolidate product variants under one tool when helpful. Distinguish development, writing, infrastructure, and hosting; don't claim AI performed independent work or tools were used without evidence.
5. **Editorial quality:** first-person, specific, candid, accurate and readable; original examples over generic AI claims. Review dates, claims, numbers, quotations, product names, image text, and attributions. Make AI contribution transparent without making the article sound templated. Give substantial work a compelling hook and a useful takeaway, not necessarily a rigid section structure.
6. **Endmatter:** project-relevant *Fine Print* (affiliations, trademark/IP, development status as applicable), a clear relevant call to action or contact route, and navigation back to the project hub or Projects page.
7. **Accessibility and responsive QA:** semantic heading hierarchy, text alternatives, tap targets, visible focus, media responsiveness, readable contrast, and graceful fallback when an enhancement is unsupported.
8. **Metadata and publishing:** unique title/description, canonical URL, appropriate social sharing metadata/image, indexability only on publication, and verified working links. Maintain Google Analytics / Vercel analytics where already configured.

## Conditional components

- **Inside the product / images:** when useful, use accurate screenshots or explicitly approved composites; prioritize storytelling over an exhaustive feature gallery. Verify image order and that mocked screens reflect real features.
- **Quantitative charts and build timelines:** only when they advance the narrative; detailed project mechanics can live in the future **Behind the Build** resource instead.
- **Tester signup:** only for articles that recruit testers; default to a transparent, low-friction email link rather than an unbuilt signup service.
- **Supporting links and source references:** include when factual claims or technical explanations warrant them.
- **Listen narration v2:** dedicated narrated audio player after validation; preserve ability to update audio as article copy changes.

## Review and release workflow

1. Collect feedback first; edit approved copy only when the author says the round is complete.
2. Work on the dedicated draft branch and Vercel preview. Never silently merge or release production.
3. Use the established first article as the visual baseline, but **do not alter the approved original article** without explicit approval.
4. Check actual images and article text against author approval; don't replace images with generated lookalikes without agreement.
5. Test on desktop and mobile, including sharing and listening functionality; report unverified behavior honestly.
6. Compare draft against production and confirm no unrelated changes; obtain explicit publication approval before merging.

## Current implementation notes

- Article 02 includes a browser text-to-speech player and sharing controls in the draft.
- The original published article already has sharing, AI Receipts, and Fine Print; the listening player has **not** yet been added to that locked article.
- Browser-generated speech and protected-preview sharing require device-level testing; working code alone is not proof of successful playback.
- **Behind the Build** is a planned project-area resource for chronological build logs, hours allocation, requirements/architecture, and technical AI Receipts—not part of the Article 02 launch.
