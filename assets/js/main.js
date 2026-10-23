/* ==========================================================================
   PORTFOLIO RUNTIME
   - Renders all content from PORTFOLIO (assets/js/data.js)
   - Handles nav, filters, scroll reveal, counters, skill bars, typing effect
   ========================================================================== */
(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------- ICONS */
  const ICONS = {
    github: '<path d="M12 .5C5.63.5.5 5.63.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.2.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.63 18.37.5 12 .5Z"/>',
    linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.06c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.64 4.76 6.07V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9Z"/>',
    mail: '<path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2-.5L12 12l7.8-7H4.2Zm-.2 1.9V18h16V6.9l-7.6 6.9a1 1 0 0 1-1.2 0L4 6.9Z"/>',
    stack: '<path d="M17.8 20.2 12 17.4l-5.8 2.8L1.4 17.8 12 12l5.8 5.8ZM21.6 14.8 12 9.7 2.4 14.8 0 12.5 12 6.2l12 6.3v3.3Z"/>',
    phone: '<path d="M6.6 3h3l1.5 4-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3Z"/>',
    location: '<path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Zm0 9.5A2.5 2.5 0 0 0 14.5 9 2.5 2.5 0 0 0 12 6.5 2.5 2.5 0 0 0 9.5 9 2.5 2.5 0 0 0 12 11.5Z"/>',
    code: '<path d="M8.7 16.6 4.1 12l4.6-4.6L7.3 6 1.3 12l6 6 1.4-1.4Zm6.6 0 4.6-4.6-4.6-4.6L16.7 6l6 6-6 6-1.4-1.4Z"/>',
    users: '<path d="M16 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm8 1c-2.7 0-8 1.3-8 4v3h16v-3c0-2.7-5.3-4-8-4ZM8 14c-2.7 0-8 1.3-8 4v3h5v-3c0-1.5.6-2.7 1.7-3.6A12 12 0 0 0 8 14Z"/>',
    bolt: '<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/>',
    brain: '<path d="M12 2a4 4 0 0 0-4 4 3.5 3.5 0 0 0-2 6.2A4 4 0 0 0 9 18a4 4 0 0 0 3-2 4 4 0 0 0 3 2 4 4 0 0 0 3-5.8A3.5 3.5 0 0 0 16 6a4 4 0 0 0-4-4Z"/>',
    ai: '<path d="M12 2.5l1.75 5.15a1 1 0 0 0 .6.6L19.5 10l-5.15 1.75a1 1 0 0 0-.6.6L12 17.5l-1.75-5.15a1 1 0 0 0-.6-.6L4.5 10l5.15-1.75a1 1 0 0 0 .6-.6L12 2.5Zm6.8 11.2l.72 2.13a1 1 0 0 0 .65.65l2.13.72-2.13.72a1 1 0 0 0-.65.65l-.72 2.13-.72-2.13a1 1 0 0 0-.65-.65l-2.13-.72 2.13-.72a1 1 0 0 0 .65-.65l.72-2.13ZM5.2 14.8l.55 1.62a1 1 0 0 0 .53.53l1.62.55-1.62.55a1 1 0 0 0-.53.53l-.55 1.62-.55-1.62a1 1 0 0 0-.53-.53L1.95 17.5l1.62-.55a1 1 0 0 0 .53-.53l.55-1.62Z"/>',
    layers: '<path d="M12 2 2 7l10 5 10-5-10-5Zm0 6.9L5.4 5.6 2 7l10 5 8-4-3.4-1.4L12 8.9ZM2 12l10 5 10-5-2.6-1.3L12 14.4 4.6 10.7 2 12Zm0 4.4 10 5 10-5-2.6-1.3L12 18.8l-7.4-3.7L2 16.4Z"/>',
    server: '<path d="M3 4h18v7H3V4Zm2 2v3h14V6H5Zm-2 7h18v7H3v-7Zm2 2v3h14v-3H5Zm1-8.5h2v2H6v-2Zm0 9h2v2H6v-2Z"/>',
    layout: '<path d="M3 3h18v18H3V3Zm2 2v5h6V5H5Zm8 0v5h6V5h-6ZM5 12v7h6v-7H5Zm8 0v7h6v-7h-6Z"/>',
    database: '<path d="M12 2c4.4 0 8 1.3 8 3v14c0 1.7-3.6 3-8 3s-8-1.3-8-3V5c0-1.7 3.6-3 8-3Zm0 2C8.7 4 6 4.8 6 5s2.7 1 6 1 6-.8 6-1-2.7-1-6-1Zm6 6.3C16.6 11 14.4 11.2 12 11.2S7.4 11 6 10.3V12c0 .2 2.7 1 6 1s6-.8 6-1v-1.7ZM6 14.3c0 .2 2.7 1 6 1s6-.8 6-1V17c0 .2-2.7 1-6 1s-6-.8-6-1v-2.7Z"/>',
    tool: '<path d="M21 7 17 3l-4 4-2-2-2 2 2 2-6.5 6.5a2 2 0 0 0 0 2.8l.2.2a2 2 0 0 0 2.8 0L14 13l2 2 2-2-2-2 4-4Z"/>',
    handshake: '<path d="M13 6 8 11l2 2 3-3 5 5-2 2-1-1-1 1 1 1-2 2-1-1-1 1 1 1-3 3-2-2-3 3-1.5-1.5 3-3-1-1 1-1 1 1 1-1-1-1 1-1 1 1 3-3 2 2Z"/>',
    chat: '<path d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2Zm3 5v2h10V8H7Zm0 4v2h6v-2H7Z"/>',
    external: '<path d="M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14V3ZM5 5h5v2H7v10h10v-3h2v5H5V5Z"/>',
    check: '<path d="m9.6 16.6-4.2-4.2 1.4-1.4 2.8 2.8 8-8 1.4 1.4-9.4 9.4Z"/>',
    spark: '<path d="M12 2l2.2 6.3L21 10l-6.8 1.7L12 18l-2.2-6.3L3 10l6.8-1.7L12 2Z"/>',
    graduation: '<path d="m12 3 11 6-11 6L1 9l11-6Zm-6 8.9V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.1l-6 3.3-6-3.3Z"/>',
    award: '<path d="M12 2 9.5 8.5 2 9.3l5.5 5.3L5.8 22 12 18.6 18.2 22l-1.7-7.4L22 9.3l-7.5-.8L12 2Z"/>',
    download: '<path d="M12 3v10.2l3.6-3.6 1.4 1.4-6 6-6-6 1.4-1.4L10 13.2V3h2ZM4 19h16v2H4v-2Z"/>',
    arrow: '<path d="m13.2 5.4-1.4 1.4 4.6 4.6H4v2h12.4l-4.6 4.6 1.4 1.4 7-7-7-7Z"/>'
  };

  const icon = (name, cls = "") =>
    `<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">${ICONS[name] || ""}</svg>`;

  const esc = (s = "") =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ------------------------------------------------------------- RENDER: HERO */
  function renderHero() {
    const p = PORTFOLIO.profile;

    const nameEl = $("#heroName");
    if (nameEl) nameEl.textContent = p.name;

    const tagEl = $("#heroTagline");
    if (tagEl) tagEl.textContent = p.tagline;

    const locEl = $("#heroLocation");
    if (locEl) locEl.innerHTML = `${icon("location")}<span>${esc(p.location)}</span>`;

    const avEl = $("#heroAvailability");
    if (avEl) avEl.innerHTML = `<span class="pulse-dot"></span>${esc(p.availability)}`;

    // social links
    const socialsEl = $("#heroSocials");
    if (socialsEl) {
      socialsEl.innerHTML = p.socials
        .map(
          (s) => `<a class="social-btn" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(s.label)}" title="${esc(s.label)}">${icon(s.icon)}</a>`
        )
        .join("");
    }

    // contact chips
    const contactEl = $("#heroContact");
    if (contactEl) {
      const items = [
        { i: "mail", t: p.email, h: `mailto:${p.email}` },
        { i: "phone", t: p.phone, h: `tel:${p.phone.replace(/\s/g, "")}` }
      ];
      contactEl.innerHTML = items
        .map((x) => `<a class="chip" href="${esc(x.h)}">${icon(x.i)}<span>${esc(x.t)}</span></a>`)
        .join("");
    }

    // CV button
    const cvBtn = $("#heroResume");
    if (cvBtn) {
      if (p.resume) {
        cvBtn.href = p.resume;
        cvBtn.setAttribute("download", "");
      } else {
        cvBtn.href = "#contact";
        cvBtn.classList.add("is-disabled");
        cvBtn.title = "Add your CV path in assets/js/data.js to enable this button";
      }
    }

    // typing effect
    const typeEl = $("#heroRole");
    if (typeEl) startTyping(typeEl, p.roles);

    // profile photo: use the configured file, fall back to the monogram if it is missing
    const img = $(".portrait-frame img");
    if (img) {
      const candidates = [p.photo, p.photo.replace(/\.\w+$/, ".png"), "assets/img/profile.svg"].filter(Boolean);
      let i = 0;
      const tryNext = () => {
        if (i >= candidates.length) return;
        const probe = new Image();
        probe.onload = () => { img.src = candidates[i]; };
        probe.onerror = () => { i += 1; tryNext(); };
        probe.src = candidates[i];
      };
      tryNext();
    }
  }

  /* ------------------------------------------------------------- RENDER: STATS */
  function renderStats() {
    const el = $("#statsGrid");
    if (!el) return;
    el.innerHTML = PORTFOLIO.stats
      .map(
        (s) => `
      <div class="stat reveal">
        <div class="stat-value"><span data-count="${s.value}">0</span><span class="stat-suffix">${esc(s.suffix)}</span></div>
        <div class="stat-label">${esc(s.label)}</div>
        <div class="stat-sub">${esc(s.sub || "")}</div>
      </div>`
      )
      .join("");
  }

  /* ------------------------------------------------------------- RENDER: ABOUT */
  function renderAbout() {
    const a = PORTFOLIO.about;
    const lead = $("#aboutLead");
    if (lead) lead.textContent = a.lead;
    const body = $("#aboutBody");
    if (body) body.innerHTML = a.body.map((p) => `<p>${esc(p)}</p>`).join("");
    const hl = $("#aboutHighlights");
    if (hl) {
      hl.innerHTML = a.highlights
        .map(
          (h) => `
        <div class="highlight reveal">
          <div class="highlight-icon">${icon(h.icon)}</div>
          <div>
            <h4>${esc(h.title)}</h4>
            <p>${esc(h.text)}</p>
          </div>
        </div>`
        )
        .join("");
    }
  }

  /* ------------------------------------------------------------- RENDER: SKILLS */
  function renderSkills() {
    const el = $("#skillsGrid");
    if (!el) return;

    const card = (g) => `
      <article class="skill-card reveal track-${g.track}">
        <header class="skill-card-head">
          <span class="skill-icon">${icon(g.icon)}</span>
          <h3>${esc(g.title)}</h3>
        </header>
        <ul class="skill-list">
          ${g.items
            .map(
              (i) => `<li class="skill-item">${esc(i.name)}</li>`
            )
            .join("")}
        </ul>
      </article>`;

    const tech = PORTFOLIO.skillGroups.filter((g) => g.track !== "business");
    const business = PORTFOLIO.skillGroups.filter((g) => g.track === "business");

    el.innerHTML = `
      <div class="skills-sub reveal">
        <h3 class="skills-sub-title"><span class="dot dot-brand"></span>Technical toolkit</h3>
        <div class="skills-grid">${tech.map(card).join("")}</div>
      </div>
      <div class="skills-sub reveal">
        <h3 class="skills-sub-title"><span class="dot dot-amber"></span>Professional toolkit</h3>
        <div class="skills-grid skills-grid-2">${business.map(card).join("")}</div>
      </div>`;
  }

  /* ------------------------------------------------------------- RENDER: EXPERIENCE */
  function renderExperience() {
    const el = $("#timeline");
    if (!el) return;

    el.innerHTML = PORTFOLIO.experience
      .map(
        (e, i) => `
      <article class="tl-item reveal track-${e.track}" data-track="${e.track}" data-index="${i}">
        <div class="tl-marker"><span>${esc(e.mark || e.company.slice(0, 2).toUpperCase())}</span></div>
        <div class="tl-card accent-${esc(e.accent || "brand")}">
          <div class="tl-top">
            <div class="tl-head">
              ${e.logo ? `<span class="tl-logo"><img src="${esc(e.logo)}" alt="${esc(e.company)} logo" /></span>` : ""}
              <div class="tl-head-text">
                <h3 class="tl-role">${esc(e.role)}</h3>
                <p class="tl-company">
                  <span class="tl-track-tag tag-${e.track}">${e.track === "tech" ? "Engineering" : "Sales & Client Ops"}</span>
                  ${esc(e.company)}
                  <span class="tl-type">${esc(e.type)}</span>
                </p>
              </div>
            </div>
            <div class="tl-period">
              <strong>${esc(e.period)}</strong>
              ${e.duration ? `<span>${esc(e.duration)}</span>` : ""}
            </div>
          </div>
          <p class="tl-location">${icon("location")} ${esc(e.location)}</p>
          <ul class="tl-bullets">
            ${e.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}
          </ul>
        </div>
      </article>`
      )
      .join("");

    // filter buttons
    const filters = $$(".exp-filter");
    filters.forEach((btn) => {
      btn.addEventListener("click", () => {
        const track = btn.dataset.filter;
        filters.forEach((b) => {
        const on = b === btn;
        b.classList.toggle("active", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
        $$(".tl-item", el).forEach((item) => {
          const show = track === "all" || item.dataset.track === track;
          item.classList.toggle("is-hidden", !show);
        });
        // re-trigger reveal for visible items
        requestAnimationFrame(() => {
          $$(".tl-item:not(.is-hidden)", el).forEach((i) => i.classList.add("is-visible"));
        });
      });
    });
  }

  /* ------------------------------------------------------------- RENDER: PROJECTS */
  function renderProjects() {
    const el = $("#projectsGrid");
    if (!el) return;
    el.innerHTML = PORTFOLIO.projects
      .filter((p) => p.demo || p.code)
      .map(
        (p, i) => {
          const cover = p.image
            ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy">`
            : `<div class="cover" style="--g1:${esc(p.gradient[0])};--g2:${esc(p.gradient[1])}">
                 <span class="cover-mono">${esc(p.title.charAt(0))}</span>
                 <span class="cover-grid"></span>
               </div>`;
          const links = [];
          if (p.code) links.push(`<a class="link-btn" href="${esc(p.code)}" target="_blank" rel="noopener">${icon("github")}Code</a>`);
          if (p.demo) links.push(`<a class="link-btn" href="${esc(p.demo)}" target="_blank" rel="noopener">${icon("external")}${esc(p.linkLabel || "Visit website")}</a>`);
          if (!links.length) links.push(`<span class="link-btn muted">${icon("spark")}Case study</span>`);

          return `
        <article class="project-card reveal" style="--delay:${i * 70}ms">
          <div class="project-cover">${cover}</div>
          <div class="project-body">
            <span class="project-tagline">${esc(p.tagline)}</span>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.description)}</p>
            <div class="tag-row">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
            <div class="project-links">${links.join("")}</div>
          </div>
        </article>`;
        }
      )
      .join("");
  }

  /* ------------------------------------------------------------- RENDER: CERTS */
  function renderCerts() {
    const el = $("#certsGrid");
    if (!el) return;
    el.innerHTML = PORTFOLIO.certifications
      .map(
        (c) => `
      <article class="cert-card reveal">
        <div class="cert-badge">${c.logo ? `<img src="${esc(c.logo)}" alt="${esc(c.title)} logo" loading="lazy" />` : `<span>${esc(c.badge)}</span>`}</div>
        <div class="cert-body">
          <h3>${esc(c.title)}</h3>
          <p class="cert-issuer">${esc(c.issuer)}</p>
          <p class="cert-date">${icon("award")} ${esc(c.date)}</p>
          <div class="tag-row">${c.skills.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
          <a class="cert-link" href="${c.url ? esc(c.url) : "#credentials"}" ${c.url ? 'target="_blank" rel="noopener"' : ""}>
            ${c.url ? "View credential" : "Add verification link"} ${icon("arrow")}
          </a>
        </div>
      </article>`
      )
      .join("");
  }

  /* ------------------------------------------------------------- RENDER: EDUCATION */
  function renderEducation() {
    const el = $("#educationGrid");
    if (!el) return;
    el.innerHTML = PORTFOLIO.education
      .map(
        (e) => `
      <article class="edu-card reveal">
        <div class="edu-logo">${
          e.logo
            ? `<img src="${esc(e.logo)}" alt="${esc(e.institution)} logo" />`
            : esc(e.mark || "")
        }</div>
        <div class="edu-body">
          <h3>${esc(e.institution)}</h3>
          <p class="edu-degree">${esc(e.degree)}</p>
          ${e.note ? `<p class="edu-note">${esc(e.note)}</p>` : ""}
          <div class="edu-meta">
            ${e.period ? `<span>${icon("graduation")} ${esc(e.period)}</span>` : ""}
            ${e.grade ? `<span class="grade">${icon("award")} ${esc(e.grade)}</span>` : ""}
          </div>
        </div>
      </article>`
      )
      .join("");
  }

  /* ------------------------------------------------------------- RENDER: CONTACT */
  function renderContact() {
    const p = PORTFOLIO.profile;

    const email = $("#contactEmail");
    if (email) {
      email.textContent = p.email;
      email.href = `mailto:${p.email}`;
    }
    const phone = $("#contactPhone");
    if (phone) {
      phone.textContent = p.phone;
      phone.href = `tel:${p.phone.replace(/\s/g, "")}`;
    }
    const loc = $("#contactLocation");
    if (loc) loc.textContent = p.location;

    const el = $("#contactSocials");
    if (el) {
      el.innerHTML = p.socials
        .map(
          (s) => `<a class="chip" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${icon(s.icon)}<span>${esc(s.handle || s.label)}</span></a>`
        )
        .join("");
    }
  }

  /* ---------------------------------------------------------------- TYPING */
  function startTyping(el, words) {
    if (reduceMotion) {
      el.textContent = words[0];
      return;
    }
    let w = 0,
      c = 0,
      deleting = false;
    const tick = () => {
      const word = words[w];
      c += deleting ? -1 : 1;
      el.textContent = word.slice(0, c);
      let delay = deleting ? 45 : 85;
      if (!deleting && c === word.length) {
        delay = 1600;
        deleting = true;
      } else if (deleting && c === 0) {
        deleting = false;
        w = (w + 1) % words.length;
        delay = 350;
      }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 400);
  }

  /* ------------------------------------------------------- SCROLL REVEAL */
  function initReveal() {
    const items = $$(".reveal");
    if (reduceMotion) {
      items.forEach((i) => i.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach((i) => io.observe(i));
  }

  /* --------------------------------------------------------- ANIMATED BARS */
  function initBars() {
    const bars = $$(".bar span");
    if (reduceMotion) {
      bars.forEach((b) => (b.style.width = b.dataset.level + "%"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => (e.target.style.width = e.target.dataset.level + "%"), 120);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach((b) => io.observe(b));
  }

  /* --------------------------------------------------------- COUNTERS */
  function initCounters() {
    const nums = $$("[data-count]");
    if (reduceMotion) {
      nums.forEach((n) => (n.textContent = n.dataset.count));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          const target = parseInt(e.target.dataset.count, 10);
          const dur = 1400;
          const start = performance.now();
          const step = (now) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            e.target.textContent = Math.round(target * eased);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach((n) => io.observe(n));
  }

  /* ------------------------------------------------------------- NAV / UI */
  function initNav() {
    const nav = $("#navbar");
    const burger = $("#navToggle");
    const links = $("#navLinks");

    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
      const bar = $("#scrollProgress");
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    burger.addEventListener("click", () => {
      links.classList.toggle("open");
      burger.classList.toggle("active");
      burger.setAttribute("aria-expanded", links.classList.contains("open"));
    });
    $$("a", links).forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        burger.classList.remove("active");
      })
    );

    // active link on scroll
    const sections = $$("section[id]");
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          $$(".nav-link").forEach((l) =>
            l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id)
          );
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));

    // back to top
    const top = $("#backToTop");
    window.addEventListener(
      "scroll",
      () => top.classList.toggle("visible", window.scrollY > 700),
      { passive: true }
    );
    top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ------------------------------------------------------- CONTACT FORM */
  function initForm() {
    const form = $("#contactForm");
    if (!form) return;

    // Remove any _next hidden field since we're doing AJAX
    const nextField = form.querySelector('input[name="_next"]');
    if (nextField) nextField.remove();

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const msg = form.message.value.trim();
      const status = $("#formStatus");

      if (!name || !email || !msg) {
        status.textContent = "Please fill in your name, email and message.";
        status.className = "form-status error";
        return;
      }

      status.textContent = "Sending…";
      status.className = "form-status ok";

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { "Accept": "application/json" }
        });

        if (response.ok) {
          status.textContent = "Message sent! I'll get back to you soon.";
          status.className = "form-status ok";
          form.reset();
        } else {
          const data = await response.json().catch(() => ({}));
          status.textContent = data.error || "Something went wrong. Please try again.";
          status.className = "form-status error";
        }
      } catch (err) {
        status.textContent = "Network error. Please check your connection and try again.";
        status.className = "form-status error";
      }
    });
  }

  /* ------------------------------------------------------ CURSOR GLOW */
  function initGlow() {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
    const glow = $("#cursorGlow");
    let x = 0,
      y = 0,
      tx = 0,
      ty = 0;
    window.addEventListener("mousemove", (e) => {
      tx = e.clientX;
      ty = e.clientY;
    });
    const loop = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      glow.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  /* ------------------------------------------------------------- INIT */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderStats();
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
    renderCerts();
    renderEducation();
    renderContact();
    initReveal();
    initBars();
    initCounters();
    initNav();
    initForm();
    initGlow();
    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
    document.body.classList.add("loaded");
  });
})();
