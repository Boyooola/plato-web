---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["privacy.html","terms.html","delete-account.html"]
---

# Landing page (index.html)

Scope: the public home page of Plato, plus its legal pages (privacy.html, terms.html, delete-account.html, 404.html) in the same world. Visitor mode: **Persuade** (the legal pages are Read).

Audience: Android dieters deciding whether to try Plato, mostly on phones; before launch, people willing to join Google Play's closed test. Action: leave a Gmail address to join the early testers (switches to "Get it on Google Play" at launch). Proof on hand: the real food photo, the clay art, the logo, the app's actual numbers and rules; owner's phone screenshots to come (empty frames until then, never fake screens). No testimonials, ratings or counts.

Memorable moment: the plate gets scanned in front of you.

## Direction contract

THESIS: The first screen is a scan. A real plate, shot from above, sits inside the logo's lime scan corners and gets labelled food by food as you watch. It refuses the category's split hero of copy, phone mockup and badge row.

OWN-WORLD: Forest & Lime from the app. A cream #F6F4EE table is the ground, and the plate photo is the hero object. Thick, round-ended lime #C8F169 scan brackets are drawn like the clay logo. White food tags have a warm #E6E2D8 border, and one forest #123B2A total chip carries the kcal in lime. Type is Bricolage Grotesque ExtraBold for display and Inter for text. Further down, forest panels carry the coach and the final call to action. Cards have 20px corners and buttons 18px.

STORY: The visitor sees a meal logged in two seconds. They come to believe logging is effortless and the numbers are honest: reviewed before saving, USDA-matched, calm about overs. They read the four ways to log, the coach and its daily tip, the price and the privacy terms in plain words. Then they join the early testers with their Gmail.

FIRST VIEWPORT: The nav runs across the top: logo, How it works, Coach, Pricing, Privacy, and a forest "Join the testers" button. The left ~40% holds a 76px headline, "Snap your plate. Plato does the counting.", a one-line lede, and an inline Gmail field with a "Join the early testers" button. The right ~60% holds the plate photo (~760px), bleeding off the right edge inside the lime brackets. Three tags land on the rice, broccoli and salmon, then "Dinner · 570 kcal", with a "Sample estimate" caption. On phones, the headline and form sit above the plate.

Owner decision (2026-11-22, after seeing it on their laptop: "too big"): the plate is sized to fit the first screen, both by width and by height (at most 700px, and never taller than the window minus the nav), and the headline tops out at 76px. The right-edge bleed is dropped wherever it would make the plate too big; never enlarge the hero past the viewport again.

FORM: The plate is the page, position 7 of 7 on my ordered list (dealt lead); seed:499a06b10c1f3c39. Signature interaction: the scan. The brackets close in, one lime scan line sweeps the plate, the tags pop onto their foods in sequence, and the total counts up. It plays once on load, and "Scan again" replays it. Under reduced motion it shows the final state still.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Owner's phone screenshots (Today, scan, coach, Progress) for the "ways to log" and coach sections.
- Developer name, support email, governing law for the legal pages.
- Custom domain (GitHub Pages URL until then).
