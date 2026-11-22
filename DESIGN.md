---
name: Plato website
description: The public home of Plato, an Android AI calorie tracker. A real plate gets scanned in front of you, then the page explains, prices and protects.
colors:
  forest: "#123B2A"
  forest-deep: "#0E2F21"
  lime: "#C8F169"
  lime-press: "#B6E04F"
  sage: "#CFE3D6"
  mint: "#E9F0E3"
  ink: "#0F1F17"
  muted: "#5B6460"
  ground: "#F6F4EE"
  card: "#FFFFFF"
  border: "#E6E2D8"
  divider: "#EFECE4"
  carbs: "#2F6FDB"
  protein: "#D9582A"
  fat: "#C99400"
  error: "#B3261E"
  dark-ground: "#0B1410"
  dark-card: "#15201A"
  dark-border: "#26332C"
  dark-divider: "#1E2A24"
  dark-ink: "#EDF2EE"
  dark-muted: "#A4B0A8"
  dark-forest: "#173F2D"
  dark-mint: "#1A2E22"
  dark-carbs: "#7FB2FF"
  dark-protein: "#FF9B6A"
  dark-fat: "#F5C84B"
  dark-error: "#FF8F80"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Inter, system-ui, sans-serif"
    fontSize: "clamp(40px, min(5.6vw, 8.5svh), 76px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, Inter, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.4vw, 60px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, Inter, system-ui, sans-serif"
    fontSize: "clamp(24px, 2.4vw, 32px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  number:
    fontFamily: "Bricolage Grotesque, Inter, system-ui, sans-serif"
    fontSize: "40px"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  lede:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(18px, 1.5vw, 21px)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  body-strong:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.25
  label:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.3
  doc-subhead:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    letterSpacing: "0"
rounded:
  label: "6px"
  sm: "12px"
  btn-small: "14px"
  md: "16px"
  card: "20px"
  tip: "22px"
  feature: "24px"
  plan: "28px"
  panel: "32px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  content-max: "1240px"
  doc-max: "760px"
  section: "clamp(72px, 10vw, 136px)"
  nav-height: "76px"
  touch: "48px"
  card-inset: "18px 20px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.card}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.md}"
    height: "48px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.forest-deep}"
  button-lime:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.forest}"
    rounded: "{rounded.md}"
    height: "48px"
    padding: "0 20px"
  button-lime-hover:
    backgroundColor: "{colors.lime-press}"
  button-small:
    rounded: "{rounded.btn-small}"
    height: "44px"
    padding: "0 16px"
  signup-field:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "8px"
  pill-forest:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.card}"
    rounded: "{rounded.pill}"
    height: "40px"
    padding: "0 16px"
  pill-line:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "40px"
    padding: "0 16px"
  food-tag:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "9px 14px 10px"
  scan-total:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.lime}"
    rounded: "{rounded.feature}"
    padding: "14px 20px 16px"
  sample-fragment:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "18px 20px"
  feature-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.feature}"
    padding: "24px"
  forest-panel:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.card}"
    rounded: "{rounded.panel}"
    padding: "clamp(40px, 6vw, 80px)"
  plan-free:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plan}"
    padding: "clamp(28px, 4vw, 44px)"
  plan-pro:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.card}"
    rounded: "{rounded.plan}"
    padding: "clamp(28px, 4vw, 44px)"
  doc-box:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "18px 22px"
---

# Design System: Plato website

<!-- Recorded 2026-11-22 from the shipped build (styles.css, index.html, main.js and the legal pages). The site is a web surface of the app's "Forest & Lime" world; the app's own system lives in ../plato/DESIGN.md and is not restated here. -->

## Overview

**Creative North Star: "The Scanned Plate"**

The website is Forest & Lime from the app, opened up to a wide screen. A cream table is the ground, a real plate photographed from above is the hero object, and the app's thick round-ended lime scan corners close in around it while white food tags land on each food. Everything after the fold is the app explaining itself: editorial rows of the four ways to log, each beside a small sample fragment of what the app shows; a white meal card with its macro bars; forest panels where Plato speaks (the coach, the Pro plan, the closing call).

The page is calm and spacious, with big Bricolage Grotesque ExtraBold headlines in forest and Inter doing all the reading at 17px. Depth is soft and warm: one diffuse ambient shadow for floating things, a heavier double shadow under the plate, and thin warm borders everywhere else. Proof is the app's own numbers and the real photo; there are no testimonials, ratings, phone mockups or invented screens.

Legal pages (privacy, terms, delete account, 404) share the nav, footer and tokens, set in a single 760px reading column with white boxes for the short version and plain tables.

**Key Characteristics:**

- A real plate photo inside lime scan corners, bleeding off the right edge on wide screens: the plate is the page.
- Four white food tags (with a lime dot pinned to each food) and one forest total chip carrying 572 kcal in lime.
- White cards with thin warm borders on cream; forest panels for the coach, the Pro plan and the closing call.
- Every product fragment is labelled as a sample; no fake screenshots.
- Light and dark from `prefers-color-scheme`, with forest panels staying forest in both.
- One scan choreography on load, replayable, and a still final state under reduced motion.

## Colors

Cream and white carry the structure, forest is the brand voice, lime is the one highlight, and the three macro hues only code macros.

### Primary

- **Forest** (`forest`): headline color (h1, h2, the wordmark) in light mode, filled buttons, the scan total chip, sample "Log dinner" pills, check icons, the chart trend line, links on legal pages, and the background of every forest panel. Panels hard-code it so they stay forest in dark mode, where they shift to Lit Forest.
- **Deep Forest** (`forest-deep`): the pressed/hover state of the forest button.
- **Lime** (`lime`): the scan corners, the scan line and its swept band, the food dots, the kcal number in the total chip, the Pro price, icons and the closing-call corners on forest, the lime button on forest, focus outlines on forest or dark surfaces, and text selection. In dark mode it replaces forest as the button fill, trend line and icon stroke.
- **Pressed Lime** (`lime-press`): hover state of every lime button.

### Secondary

- **Sage** (`sage`): secondary text on forest (panel paragraphs, the total chip's small lines, the Pro plan's per-line, the closing call's note).
- **Mint** (`mint`): quiet tinted wells: the way-to-log icon tiles, note marks, the chart's rate pill, step-number discs, table headers, the signup success panel, and the coach tip card inside the forest panel.

### Tertiary

- **Carbs Blue** (`carbs`), **Protein Orange** (`protein`), **Fat Gold** (`fat`): the macro bars on the meal card, and nothing else. Their dark-mode steps are the app's on-forest hues.

### Neutral

- **Cream Table** (`ground`): the page ground, the nav background, the macro tiles inside the meal card.
- **White** (`card`): cards, food tags, sample fragments, the signup field, doc boxes and tables.
- **Warm Border** (`border`): every 1px card border, section rules, the field's 1.5px stroke, and the nav hairline once the page scrolls.
- **Divider** (`divider`): row separators inside fragments and lists, chart grid lines, bar tracks.
- **Ink** (`ink`): body text and h3.
- **Muted** (`muted`): ledes, captions, sample labels, secondary row text (5.6:1 on cream).
- **Error** (`error`): the signup error line only.
- **Dark set** (`dark-*`): the same roles under `prefers-color-scheme: dark`, taken from the app's dark mode (ground #0B1410, card #15201A, Lit Forest panels #173F2D).

### Named Rules

**The Lime Lives On Forest Rule.** Lime appears only on forest or dark surfaces, or as the scan corners themselves (the hero brackets, the label bracket on a sample fragment, the closing-call corners). On cream or white, the highlight is forest. Lime never sets text on a light surface.

**The Macro Hues Code Rule.** Blue, orange and gold mean carbs, protein and fat. They never decorate.

## Typography

**Display Font:** Bricolage Grotesque, weights 700 and 800, optical size 12 to 96 (with Inter, system-ui fallback)
**Body Font:** Inter, weights 400 to 700 (with system-ui, -apple-system, Segoe UI, Roboto)

**Character:** Bricolage's ExtraBold, set tight at -0.03em, gives headlines and numbers a friendly editorial weight; Inter reads quietly beneath it. The pairing is the app's.

### Hierarchy

- **Display** (800, clamp 40px to 76px, capped by viewport height, line-height 0.98): the hero h1 only, in forest. On phones under 560px it holds at clamp(38px, 11vw, 46px).
- **Headline** (800, clamp 34px to 60px, 1.02): section h2s. The closing call's h2 runs larger (clamp 40px to 72px); legal page h1s use clamp 40px to 60px and their h2s 26px.
- **Title** (800, clamp 24px to 32px, 1.1, -0.02em): h3s in ways-to-log rows, plans (30px), the meal card (26px), privacy columns (22px).
- **Number** (800, 40px, tnum): the kcal in the scan total chip; the same face carries the meal card kcal (30px), macro grams (24px), the trend weight (34px) and the plan prices (clamp 44px to 64px).
- **Lede** (400, clamp 18px to 21px, 1.55, max 34ch to 44ch): the hero sentence and section introductions, in muted.
- **Body** (400, 17px, 1.6, max 62ch; 68ch on legal pages).
- **Body Strong** (600, 15px): food tag names, buttons at 16px, row names.
- **Label** (500 to 600, 13px): tag details, sample captions, fragment titles, chart labels.
- **Doc Subhead** (Inter 700, 19px): h3 on legal pages, deliberately not display.

### Named Rules

**The Tabular Numbers Rule.** Every number that a reader compares (kcal, grams, prices, weights) carries tabular figures.

**The Sentence Case Rule.** Headlines, labels and buttons are sentence case. There are no uppercase kickers or eyebrows above headings.

## Layout

A single centered container (max 1240px) with a fluid gutter (clamp 16px to 56px). Sections breathe at clamp(72px, 10vw, 136px) vertically; consecutive sections drop their top padding so the rhythm reads as one long column.

- **Hero:** a 5:7 grid. Headline sits bottom-left, the lede and signup top-left, and the scan stage starts 3vw into the right column at min(52vw, 700px, 100svh − 150px), so the whole plate fits the first screen on short laptops too (the owner found a larger, edge-bleeding plate too big). A container query slims the total chip and moves the caption left when the stage is under 640px. The hero fills min(780px, viewport minus the 76px nav).
- **Under 960px:** one column in the order headline, plate, form. The lede is hidden in the hero and the scan centers at up to 620px.
- **Under 560px:** food tags collapse to short "Broccoli · 55" labels, the total chip shrinks, the corners thicken, and the findings are also available as a list for screen readers.
- **Section heads:** a 7:5 grid, headline left and muted paragraph right, aligned to the baseline; one column under 860px.
- **Ways to log:** editorial rows split 5:6 by warm rules, copy left and sample fragment right (max 520px).
- **Two-up sections** (numbers, coach panel, progress, plans) use 5:6, 6:6 or 7:5 grids that stack under 860px or 960px.
- **Legal pages:** one 760px column, paragraphs capped at 68ch.
- **Breakpoints:** 960px, 860px, 560px, 460px (the signup row stacks and the button goes full width).

## Elevation & Depth

Mostly flat and tonal: white on cream with a 1px warm border is the default container. Shadows are reserved for things that float over the photo or the page: the plate, the food tags, the total chip, the meal card. In dark mode the same shadows deepen to black at higher opacity.

### Shadow Vocabulary

- **Ambient** (`box-shadow: 0 18px 40px rgba(15, 31, 23, 0.12)`): food tags, the scan total chip, the meal card.
- **Plate** (`box-shadow: 0 40px 80px rgba(15, 31, 23, 0.16), 0 8px 18px rgba(15, 31, 23, 0.10)`): the hero plate only.
- **Pin** (`box-shadow: 0 2px 8px rgba(15, 31, 23, 0.3)`): the lime food dots.
- **Corner lift** (`filter: drop-shadow(0 6px 6px rgba(40, 60, 10, 0.22))`): the hero scan corners, so they read as a physical frame over the photo.

### Named Rules

**The Borders First Rule.** A resting card gets a 1px warm border, not a shadow. A shadow means the thing floats over something.

## Shapes

Soft, rounded rectangles throughout, scaled to the size of the container: 12px for the smallest phone tags, 14px to 16px for buttons, tags and tiles, 20px for cards, fragments and the signup field, 24px for feature cards and the total chip, 28px for plans, 32px for forest panels and the closing frame. Pills and the "Scan again" control are fully round. The plate and its photo are circles.

Where the site departs from the app: web buttons are 48px tall with 16px corners (the app's are 56px with 18px corners), and forest panels round to 32px (the app's to 28px), to suit desktop scale. Cards keep the app's 20px.

The one hard-edged shape is the sample nutrition label (6px corners, ink rules), which is drawn as the printed label it imitates.

The scan corner is the signature form: a thick round-capped stroke with a generous inner radius, drawn like the clay logo's corners. It appears at three scales: 26px strokes around the hero plate (30px on phones), 6px bracket corners on the label fragment, and 14px corners in all four corners of the closing frame.

## Components

### Buttons

- **Shape:** gently rounded rectangle (16px), 48px tall, Inter 600 16px.
- **Primary:** forest with white text; hover to deep forest; press scales to 0.97 over 120ms.
- **Lime:** lime with forest text, used on forest panels (the closing call) and as the primary fill in dark mode; hover to pressed lime.
- **Small:** the nav's "Join the testers", 44px tall, 14px corners, 15px text.
- **Focus:** a 3px forest outline offset 3px on light surfaces; lime on dark surfaces and inside forest panels (lime on cream fails non-text contrast).

### Signup form

- **Style:** a white field row (20px corners, 1.5px warm border, 8px inner padding) holding the email input and the button side by side; stacks under 460px.
- **Focus:** the row's border and a 3px outline turn forest (lime in dark mode and on the forest closing panel).
- **States:** a muted note under the row, a live status line (forest for ok, error red for errors), and a mint success panel with a check that replaces the row once signed up.
- **On forest:** the closing call's field is white with no border, its button lime, its note sage.

### Chips and pills

- **Forest pill:** 40px, fully round, forest with white text: the sample "Log dinner" and voice "Done" actions.
- **Line pill:** same shape, white with a warm border.
- **Rate pill:** mint with forest text (lime in dark), the chart's weekly rate.

### Cards / Containers

- **Sample fragment:** white, 20px corners, 1px warm border, 18px by 20px inset, a muted 13px title, rows split by dividers.
- **Feature card:** white, 24px corners, 1px border, 24px inset, ambient shadow (meal card); the chart card is the same without the shadow.
- **Doc box:** white, 20px corners, 1px border, 18px by 22px inset, for the short version on legal pages.

### Navigation

- Sticky, on the cream ground, 76px tall: logo plus "plato" wordmark (Bricolage 800 26px, forest), four Inter 500 15px links, a spacer, and the small primary button. A warm hairline appears once the page scrolls past 8px. Links hide under 860px, leaving logo and button.

### Scan stage (signature)

The hero figure. A circular plate photo (inset 5% of a square stage) with the plate shadow; four lime corner paths over it; a 3px lime scan line with a 64px lime-to-transparent band trailing above it; four food markers, each a lime dot with a white ring and a white tag to its left or right; and a forest total chip bottom-right reading "Dinner · 4 foods", 572 kcal in lime, and 41 g protein in sage. Inside the stage, beside the lower-left bracket, a caption on a ground-coloured pill reads "Sample estimate, for illustration." next to a round 44px icon button labelled "Scan again" for assistive tech; under 960px they sit below the stage. The broccoli and lemon tags sit left of their dots, rice left, salmon right (left on phones).

- **Choreography:** the stage arms hidden, then the corners scale in from 1.1 (560ms, ease-out), the line sweeps from 10% to 88% (1000ms after 380ms), each tag pops from 0.9 scale at its own delay (380ms, at 700ms, 780ms, 930ms, 1100ms), and the total chip rises 14px (520ms at 1420ms) while its number counts up over 760ms with a quartic ease-out. At 2200ms everything settles into the plain resting state and "Scan again" appears to replay it.
- **Without JS or with reduced motion:** the final state shows still, and "Scan again" stays hidden.

### Forest panel

The voice of Plato on the page. Forest (Lit Forest in dark), 32px corners, padding clamp 40px to 80px, white headline, sage body, lime check icons, clay art cropped off its top-right corner. The coach panel holds a mint tip card, a dark user bubble (corner tail bottom-right) and a white coach bubble (tail bottom-left). The closing call is the same forest frame with lime corners in all four corners, centered copy and the lime-buttoned signup.

### Plans

Two equal cards (28px corners): Free is white with a border and forest checks; Pro is forest with a lime price, sage per-line, pale text and lime checks, with clay art off its top-right corner.

### Legal page styles

A 760px column with the display h1, a muted meta line, 26px display h2s, Inter 700 h3s, forest links (lime in dark) at weight 500, white doc boxes, white bordered tables with mint headers, and numbered steps drawn as 32px mint discs with forest numerals.

## Do's and Don'ts

### Do:

- **Do** keep lime on forest or dark surfaces, or as the scan corners. On cream and white, use forest for the highlight.
- **Do** label every product fragment, chart, conversation and estimate as a sample ("Sample estimate, for illustration.", "Sample data, for illustration.").
- **Do** use the real food photo and the owner's clay art; the clay art sits off a panel's corner, never inside UI.
- **Do** use white cards with a 1px warm border (#E6E2D8) on the cream ground, and save shadows for things floating over the plate or page.
- **Do** give every animation a still path under `prefers-reduced-motion`: the scan shows its final state, the caret stops blinking, smooth scrolling turns off.
- **Do** follow the app's DESIGN.md for shared tokens (forest, lime, sage, mint, cream, border, macro hues, the dark set) and for the original clay logo, which is never redrawn.

### Don't:

- **Don't** use fake screenshots or phone mockups. Until the owner's real screenshots exist, show only sample fragments labelled as samples.
- **Don't** invent testimonials, ratings, user counts or accuracy claims.
- **Don't** set lime text or icons on cream or white; the scan corners are the only lime drawn on a light surface.
- **Don't** use the macro hues for anything but carbs, protein and fat.
- **Don't** put uppercase kickers or eyebrows above headings.
- **Don't** nest a card inside a card; a tile inside a card uses the cream ground, not another border.
