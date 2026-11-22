# plato-web

The public website for **Plato**, the Android AI calorie tracker: the landing page, the early-tester signup, and the legal pages the app and Google Play link to.

Plain static HTML, CSS and a little JavaScript. There's no build step: what's in the repo is the site.

## Pages

| File | What it is |
|---|---|
| `index.html` | Landing page. The hero "scans" a real plate and labels the foods. Below it: ways to log, honest numbers, the coach, progress, pricing, privacy in plain words, and the tester signup. |
| `privacy.html` | Privacy policy. Google Play's privacy policy URL points here. |
| `terms.html` | Terms of use. |
| `delete-account.html` | How to delete an account, in the app or by email. Google Play's account-deletion URL points here. |
| `404.html` | Not found. It uses root paths, which Cloudflare Pages serves for unknown URLs. |
| `styles.css`, `main.js` | Shared by every page. |

## Run it locally

```bash
python -m http.server 8130
```

Then open http://127.0.0.1:8130/. The `_headers` file only applies on Cloudflare.

## Publish (Cloudflare Pages, useplato.app)

The site lives at **https://useplato.app**. The domain is registered with Cloudflare, and Cloudflare Pages deploys this repo.

**First-time setup** (once, in the Cloudflare dashboard):
1. Workers & Pages → Create → Pages → Connect to Git → pick `Boyooola/plato-web`.
2. Production branch `master`. Framework preset **None**, no build command, build output directory `/`.
3. After the first deploy: the project → Custom domains → add `useplato.app`. Add `www.useplato.app` too and redirect it to the bare domain (Rules → Redirect Rules).
4. Optional, for the support address: Email → Email Routing, then forward `support@useplato.app` to your inbox.

After that, every push to `master` goes live in about a minute, and other branches get preview links.

**Headers:** `_headers` sets security headers and caching:
- A Content-Security-Policy that allows only this site, Google Fonts and the Supabase project.
- No framing, `nosniff`, and the camera, microphone and location turned off.
- A week of caching for `assets/`.

If you add a script, font or API from somewhere else, add its origin to the policy there.

**The app links here:** `EXPO_PUBLIC_PRIVACY_URL=https://useplato.app/privacy.html` and `EXPO_PUBLIC_TERMS_URL=https://useplato.app/terms.html`, set in the app's `.env` and in its EAS `production` environment.

**Also included:** `robots.txt` and `sitemap.xml` for search engines. `404.html` uses root paths (`/styles.css`), which suits a site served from the domain root.

## Before publishing: fill these in

Search for `[` in `privacy.html`, `terms.html`, `delete-account.html`, `index.html` and `404.html`:

- `[Developer name]`: the name you publish under.
- `[support email]`: a support address. It also appears in the footer's Contact link.
- `[country or state]`: the governing law in the terms.

The legal text started as drafts in the app repo (`../plato/legal/`), and the copies here are now the published version. Keep them in step with any feature that changes what data leaves the phone. They are plain-language drafts, not legal advice.

## Early-tester signups

The signup forms post to the app's Supabase project. Table `public.tester_signups` comes from migration `20261123010000_tester_signups.sql` in the app repo. The site uses the public publishable key in `main.js`, and the table only accepts inserts, so no visitor can read the list.

| Response | Meaning |
|---|---|
| 201 | Added |
| 409 | Already on the list (shown as success) |
| 400 | Not a valid email |

A hidden field catches simple bots.

Read the list in the Supabase SQL editor:

```sql
select email, created_at from public.tester_signups order by created_at;
```

Add those Gmail addresses to the closed-test track in Play Console.

**At launch,** set `PLAY_URL` at the top of `main.js` to the Play Store link. Every signup form then becomes a "Get it on Google Play" button.

## App screenshots

The page shows the app with labelled sample UI fragments, not screenshots. When real phone screenshots exist, they can go into the "ways to log" rows (`.frag`) as images, framed like the cards.

## Images and their origin

| File | Origin |
|---|---|
| `assets/food/plate.webp` | Cut out from the app's food photo |
| `assets/art/*.webp` | The owner's clay renders, with their prompts |
| `assets/brand/og.png` | The share image, composed in HTML |
| `assets/brand/plato-logo.png` | The original clay logo (never redrawn) |

Each file's origin is recorded inside it, or in a `.json` file beside it.

## Design

The site uses the app's **Forest & Lime** design (`../plato/DESIGN.md`): a cream ground, deep forest panels, lime only on forest and as the scan corners, Bricolage Grotesque for headlines and Inter for text. It supports light and dark (it follows the visitor's device) and reduced motion (the scan shows its final state, without animating).
