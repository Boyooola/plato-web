// Plato website: the hero scan, the tester signup, and small page details.

// At launch, put the Play Store link here: every signup form becomes a Google Play button.
const PLAY_URL = "";

// The app's Supabase project. The publishable key is public by design; the
// tester_signups table only accepts inserts (row-level security), nothing can be read.
const SUPABASE_URL = "https://hmzaqrwzpmupwjmgykij.supabase.co";
const SUPABASE_KEY = "sb_publishable_rfZb8F2zq0QMrvuyvMXeew_f1O9zlWN";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

// Nav: a hairline once the page scrolls ---------------------------------------------
const nav = document.querySelector(".nav");
if (nav) {
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// The hero scan --------------------------------------------------------------------------
const scan = document.querySelector("[data-scan]");
if (scan) {
  const counter = scan.querySelector("[data-count]");
  const again = scan.querySelector("[data-scan-again]");
  const target = counter ? Number(counter.dataset.count) : 0;
  let raf = 0;

  const countUp = () => {
    if (!counter) return;
    const start = performance.now();
    const dur = 760;
    cancelAnimationFrame(raf);
    const step = (now) => {
      const t = Math.min(1, Math.max(0, (now - start) / dur));
      const eased = 1 - Math.pow(1 - t, 4);
      counter.textContent = Math.round(target * eased).toLocaleString("en-US");
      if (t < 1) raf = requestAnimationFrame(step);
    };
    counter.textContent = "0";
    raf = requestAnimationFrame(step);
  };

  const play = () => {
    if (reduceMotion.matches) {
      scan.classList.remove("is-armed", "is-scanning");
      return;
    }
    scan.classList.remove("is-scanning");
    scan.classList.add("is-armed");
    void scan.offsetWidth; // restart the CSS animations
    scan.classList.add("is-scanning");
    window.setTimeout(countUp, 1420);
    // Settle into the plain resting state, so nothing depends on animation fill.
    window.setTimeout(() => {
      scan.classList.remove("is-armed", "is-scanning");
      cancelAnimationFrame(raf);
      if (counter) counter.textContent = target.toLocaleString("en-US");
      if (again) again.hidden = false;
    }, 2200);
  };

  const img = scan.querySelector("img");
  const begin = () => window.setTimeout(play, 250);
  if (!reduceMotion.matches) {
    scan.classList.add("is-armed");
    if (img && !img.complete) img.addEventListener("load", begin, { once: true });
    else begin();
  } else if (again) {
    again.hidden = true;
  }
  if (again) again.addEventListener("click", play);
}

// Tester signup ------------------------------------------------------------------------
const GMAIL_HINT = /@(gmail|googlemail)\.com$/i;
const EMAIL_OK = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function setStatus(form, text, tone) {
  const status = form.querySelector(".signup-status");
  if (!status) return;
  status.textContent = text;
  if (tone) status.dataset.tone = tone;
  else delete status.dataset.tone;
}

function done(form, text) {
  const doneText = form.querySelector("[data-done-text]");
  if (doneText && text) doneText.textContent = text;
  setStatus(form, "", null);
  form.classList.add("is-done");
}

async function submitSignup(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const input = form.querySelector('input[type="email"]');
  const trap = form.querySelector('input[name="website"]');
  const button = form.querySelector('button[type="submit"]');
  const email = (input.value || "").trim();

  if (trap && trap.value) { done(form); return; } // a bot filled the hidden field
  if (!EMAIL_OK.test(email) || email.length > 254) {
    setStatus(form, "That email doesn’t look right. Check it and try again.", "error");
    input.setAttribute("aria-invalid", "true");
    input.focus();
    return;
  }
  input.removeAttribute("aria-invalid");
  button.disabled = true;
  const label = button.textContent;
  button.textContent = "Adding you…";
  setStatus(form, "", null);

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/tester_signups`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email, source: "website" }),
    });
    if (res.status === 201) {
      done(form, GMAIL_HINT.test(email)
        ? "You’re on the list. We’ll email you when the test opens."
        : "You’re on the list. Google Play needs the Gmail on your phone, so if this isn’t it, add that one too.");
      document.querySelectorAll("[data-signup]").forEach((f) => { if (f !== form) done(f); });
    } else if (res.status === 409) {
      done(form, "You’re already on the list. We’ll email you when the test opens.");
    } else if (res.status === 400) {
      setStatus(form, "That email doesn’t look right. Check it and try again.", "error");
    } else {
      throw new Error(String(res.status));
    }
  } catch {
    setStatus(form, "Couldn’t add you just now. Check your connection and try again.", "error");
  } finally {
    button.disabled = false;
    button.textContent = label;
  }
}

if (PLAY_URL) {
  document.querySelectorAll("[data-signup]").forEach((form) => {
    const a = document.createElement("a");
    a.className = "btn";
    a.href = PLAY_URL;
    a.textContent = "Get it on Google Play";
    form.replaceWith(a);
  });
  document.querySelectorAll("[data-cta]").forEach((a) => {
    a.href = PLAY_URL;
    a.textContent = "Get Plato";
  });
} else {
  document.querySelectorAll("[data-signup]").forEach((form) => form.addEventListener("submit", submitSignup));
}

// Sample weight chart: noisy daily weigh-ins and the smoothed trend --------------------
const chart = document.querySelector(".chart");
if (chart) {
  const dotsG = chart.querySelector("[data-dots]");
  const trendPath = chart.querySelector("[data-trend]");
  // 42 days of sample weigh-ins: a steady 0.4 kg/week loss plus day-to-day water swings.
  const noise = [0.5, -0.3, 0.8, 0.1, -0.6, 0.4, 0.9, -0.2, 0.3, -0.7, 0.6, 0.0, -0.4, 0.7,
    0.2, -0.5, 0.5, 0.9, -0.1, -0.6, 0.3, 0.6, -0.3, 0.1, 0.8, -0.4, -0.2, 0.5, 0.0, -0.7,
    0.4, 0.7, -0.3, 0.2, -0.5, 0.6, 0.1, -0.2, 0.5, -0.6, 0.3, 0.0];
  const days = noise.map((n, i) => ({ i, kg: 80.8 - (0.4 / 7) * i + n * 0.9 }));
  const x = (i) => 64 + (i / (days.length - 1)) * 528;
  const y = (kg) => 40 + ((81 - kg) / 3) * 180;
  const ns = "http://www.w3.org/2000/svg";
  days.forEach((d) => {
    const c = document.createElementNS(ns, "circle");
    c.setAttribute("class", "dot");
    c.setAttribute("cx", x(d.i).toFixed(1));
    c.setAttribute("cy", y(d.kg).toFixed(1));
    c.setAttribute("r", "4.5");
    dotsG.appendChild(c);
  });
  let t = days[0].kg;
  const pts = days.map((d, idx) => {
    if (idx > 0) t += 0.1 * (d.kg - t);
    return [x(d.i), y(t)];
  });
  trendPath.setAttribute("d", pts.map((p, idx) => `${idx ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" "));
}

// Footer year ----------------------------------------------------------------------------
document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = String(new Date().getFullYear()); });
