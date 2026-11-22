# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS (plus a little vanilla JS), no build step, hosted on GitHub Pages from this repo (`Boyooola/plato-web`). A custom domain may be added later. Chosen by the owner on 2026-11-22.

## Users

- **Prospective users:** everyday dieters on Android who are deciding whether Plato is worth trying. They arrive from a link, a store listing or a search, usually on their phone, and want to know in seconds what it does, whether it's easy, and whether it's trustworthy.
- **Early testers:** before launch, the site recruits people for Google Play's closed test (a personal Play account needs at least 12 testers for 14 days).
- **Reviewers and existing users:** Google Play reviewers and users who need the privacy policy, terms or account-deletion instructions.

## Product Purpose

The public home of Plato, an Android AI calorie tracker. It explains the app, collects early-tester signups until the Play listing is live (then sends people to Google Play), and hosts the privacy policy, terms of use and account-deletion page that the app and Google Play link to. Success: a visitor understands Plato from the first screen and leaves their email, or later installs it; reviewers find the legal pages without hunting.

## Positioning

The app's positioning, stated without invented proof:

- **Fastest logging:** snap a photo, scan a barcode or label, type or say what you ate; the AI does the counting in seconds and shows it for review before saving.
- **Trustworthy numbers:** foods are matched to USDA FoodData Central with real serving sizes; every AI estimate is shown before it's saved.
- **A coach that knows your logs:** answers from your own meals, workouts and weight trend, plus a daily tip and a Monday recap.
- **Calm, not judgy:** going over is information, not failure.
- **Fair price:** a generous free tier (3 AI photo scans and 5 coach messages a day; barcode, label and typed logging unlimited) and Pro at $3.99/month or $24.99/year (the yearly plan starts with a 7-day free trial).

## Operating Context

- The app's full feature set is recorded in the app repo's `PRODUCT.md` (`../plato/PRODUCT.md`): Today, photo/barcode/label/voice logging, saved meals and recipes, coach with daily tips, weight trend, exercise and Health Connect, streaks with a weekly streak freeze, progress photos, milestones, widget, dark mode, reminders.
- Android only; sign in with Google.
- Early-tester signups are stored in the app's Supabase project (insert-only from the website; the owner reads them and adds the emails to the Play closed-test list).

## Capabilities and Constraints

- No server: static files only. Forms post to Supabase's REST API with the public publishable key.
- Legal pages: privacy policy (with an account-deletion section Google Play links to), terms of use. Placeholders for the developer name, support email and governing law until the owner supplies them.
- The Play Store link doesn't exist yet; the main action switches from "Join the early testers" to "Get it on Google Play" at launch.

## Brand Commitments

- Name: Plato. Voice: plain, friendly, short; numbers stated without judgement.
- Logo: the original clay plate-and-leaf logo on forest; never redrawn. Masters in `../plato/assets/images/brand/source/`.
- Visual world: the app's "Forest & Lime" (cream ground, forest panels, lime highlight, Bricolage Grotesque and Inter), recorded in the app repo's `DESIGN.md`. The website is a surface of the same world.

## Evidence on Hand

- Ten clay cover renders (`../plato/assets/images/art/`, owner-generated, prompts embedded), one food photograph (`../plato/assets/images/food/hero-plate.jpg`), the logo.
- App screenshots: the owner will supply real phone screenshots (Today, scan, coach, Progress). Until then the slots are empty frames, never fake screens.
- No testimonials, ratings, user counts, press or accuracy benchmarks exist. Do not invent them.

## Product Principles

- Show the app doing its job; claim nothing the app can't back up.
- Privacy is plain and findable: what leaves the phone and why, in words people read.
- One action per moment: join the testers now, install at launch.
- Calm confidence over hype, in the same voice as the app.

## Accessibility & Inclusion

WCAG 2.2 AA: contrast, keyboard access, visible focus, reduced-motion paths for every animation, readable at 320px wide.
