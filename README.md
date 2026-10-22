# Sameer Ali — Portfolio

A fast, dependency-free personal portfolio site. Plain HTML, CSS and JavaScript —
no build step, no `npm install`, nothing to break when you come back to it in six months.

---

## 1. Run it locally

**Option A — double-click `index.html`.**
Works immediately, but `file://` restricts some browser features.

**Option B — local server (recommended):**

```bash
cd portfolio
node server.js          # → http://localhost:8899
```

Then open <http://localhost:8899>.

---

## 2. Edit your content

**Everything lives in one file: `assets/js/data.js`.**

Open it and change the values. Save, refresh the browser. That's it.

| What to change | Where in `data.js` |
| --- | --- |
| Name, job titles, tagline | `profile` |
| Email, phone, CV link | `profile` |
| GitHub / LinkedIn / Stack Overflow links | `profile.socials` |
| Headline numbers (years, certs, tech count) | `stats` |
| Your story / "About" paragraphs | `about` |
| About highlight cards | `about.highlights` |
| Skills + proficiency bars | `skillGroups` |
| Jobs (all 5 roles) | `experience` |
| Projects | `projects` |
| Certifications + verification links | `certifications` |
| Education | `education` |

> **Adding a job?** Copy an existing block in `experience` and change the values.
> Set `track: "tech"` for engineering roles or `track: "business"` for sales /
> customer-operations roles — that is what colours the timeline and drives the
> "Engineering" / "Sales & Client Ops" filter buttons.
>
> **Skill groups** are split into two rows by the same `track` field:
> `track: "tech"` fills the **Technical toolkit** grid (3 columns),
> `track: "business"` fills the **Professional toolkit** grid (2 columns).
> Add a group by copying an existing one — the layout re-flows automatically.

---

## 3. Files you need to add

| File | Where to put it | Notes |
| --- | --- | --- |
| Your photo | `assets/img/profile.jpg` | Already added (900×900 crop). Replace the file with a new photo using the same name — square crops look best. |
| Company logos | `assets/img/logos/` | Already added: `astrik.png`, `totalsolutions.png`, `snoonu.png`, `ibex.png`. White backgrounds are trimmed and transparent. |
| Education logos | `assets/img/logos/` | Already added: `vupakistan.png`, `aptech.png`, `gnc-karachi.png`, `educators.png`. |
| Your CV | `assets/cv/Sameer-Ali-CV.pdf` | Then set `profile.resume = "assets/cv/Sameer-Ali-CV.pdf"` to enable the "Download CV" button. |
| Project screenshots | `assets/img/projects/` | Set `image: "assets/img/projects/your-app.png"` on a project. Optional — gradient covers are used otherwise. |

> Logos are trimmed and scaled automatically, so you can drop in a replacement
> PNG at any size and it will still fit the tile correctly. Each logo sits in a
> white rounded tile that sizes itself to the logo's aspect ratio.

---

## 4. Design tokens

Colours, fonts, radius and spacing live at the top of `assets/css/styles.css`.
The site uses a **single light theme** — navy + gold.

| Token | Value | Used for |
| --- | --- | --- |
| `--brand` | `#1d4e9c` navy | Primary accent, engineering track, buttons |
| `--gold` | `#9a7011` | Sales & client-ops track, secondary accents |
| `--cyan` | `#2f6bb0` steel blue | Fine detail — dates, tags, code text |
| `--success` | `#10b981` green | Availability dot + form success only |
| `--bg` | `#f2f5fa` | Page background |
| `--grad-brand` | navy → blue → gold | Large headings and stat numbers |
| `--grad-btn` | navy → deep navy | Buttons (keeps white text readable) |
| `--grad-bar` | navy → bright blue | Technical skill bars |

To re-theme, edit the `:root` block in `assets/css/styles.css` — that's the
only place colours are defined. Every component reads from these variables.

---

## 5. Deploy (free, ~2 minutes)

**Netlify** — drag the `portfolio` folder onto <https://app.netlify.com/drop>.

**Vercel** — `npx vercel --prod` from inside the folder.

**GitHub Pages** — push the folder to a repo, then
`Settings → Pages → Deploy from branch → main / root`.

---

## 6. File map

```
portfolio/
├── index.html              # page structure
├── server.js               # optional local dev server
├── assets/
│   ├── css/styles.css      # all styling + responsive breakpoints
│   ├── js/data.js          # ← YOUR CONTENT LIVES HERE
│   ├── js/main.js          # rendering + animations + interactions
│   └── img/
│       ├── profile.jpg     # your photo
│       ├── profile.svg     # fallback monogram avatar
│       ├── favicon.svg     # browser tab icon
│       └── logos/          # company + education logos
│           ├── astrik.png
│           ├── totalsolutions.png
│           ├── snoonu.png
│           ├── ibex.png
│           ├── vupakistan.png
│           ├── aptech.png
│           ├── gnc-karachi.png
│           └── educators.png
```

---

## 7. Features included

- Clean light theme — navy + gold, on near-white surfaces
- Animated gradient/grid background, typing role rotator, scroll-reveal
- **Two-track experience timeline** with working filters
  (All / Engineering / Sales & Client Operations) and real company logos
  — navy for engineering, gold for sales & client operations
- Scroll-spy navigation, mobile drawer, scroll-progress bar, back-to-top
- Skill proficiency bars that animate on scroll
- Project cards with optional real screenshots
- Credential cards with issuer, date, skills and a verification-link slot
- Working contact form (opens the visitor's email client — no backend needed)
- SEO meta tags, Open Graph card, and JSON-LD `Person` schema
- Fully responsive; `prefers-reduced-motion` supported
