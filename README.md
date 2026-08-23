# Personal Portfolio — Setup & Customization Guide

## File Structure

```
portfolio/
├── index.html               ← Homepage (skeleton — do not edit for content changes)
├── project.html              ← Auto-renders any project detail page
├── publication.html          ← Auto-renders any publication detail page
│
├── content/                  ← ✏️  ALL CONTENT LIVES HERE (Markdown files)
│   ├── config.md              ← Profile info, nav, social links
│   ├── skills.md               ← Interests + tech tools
│   ├── projects.md             ← All projects
│   └── publications.md         ← All papers / research
│
├── resources/
│   ├── style_main.css          ← Homepage styles
│   ├── detail.css              ← Project + publication detail page styles
│   ├── content-body.css        ← Styles for the rendered Markdown body on detail pages
│   ├── content-loader.js       ← Tiny parser: reads content/*.md, shared by all 3 pages
│   ├── icons/                  ← Tech tool logos (PNG/SVG)
│   └── images/
│       ├── profile_pic.jpg     ← Your profile photo (add this)
│       └── projects/           ← Project hero images
│
└── README.md                  ← This file
```

**The rule of thumb: the skeleton (`.html`, `.css`, `.js` files) almost never
changes. Everything you'll actually want to update day-to-day lives in
`content/*.md`.**

---

## How content files work

Every file in `content/` is plain Markdown with a small **frontmatter**
block at the top (metadata between two `---` lines), for example:

```markdown
---
id: my-project
title: My Project
tags: [Python, FastAPI]
---
This part is normal Markdown. Use **bold**, `code`, lists, and
## headings freely — it gets rendered on the project's detail page.
```

`projects.md` and `publications.md` hold **multiple entries in one file**.
Each entry is separated from the next by a line containing only:

```
%%%
```

You can open any of the four files in `content/` right now — each one has
an instructional comment block at the top explaining exactly which fields
are required/optional for that file.

### Local Development

Because the site loads content via `fetch()`, you **cannot** open
`index.html` directly as a `file://` URL — the browser will block the
requests. Use a simple local server from the project root:

```bash
# Python 3 (recommended)
python -m http.server 8000
# Then open http://localhost:8000

# Node.js (if installed)
npx serve .
```

On **GitHub Pages** this is not an issue — files are served over HTTPS
and `fetch()` works out of the box.

---

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Set the source to the `main` branch, root folder (`/`).
4. Your portfolio will be live at `https://<username>.github.io/<repo>/`.

---

## How to Update Content

### 1 — Profile Photo

1. Add your photo as `resources/images/profile_pic.jpg`
   (any aspect ratio; it is cropped into a hexagon).
2. If the filename is different, update `image:` in `content/config.md`.

---

### 2 — Profile Info, Social Links, Nav

Edit `content/config.md`:

```yaml
---
profile:
  name: Your Name
  initials: YN            # shown in top-left header and as photo fallback
  title: "Role | Subtitle"
  description: "Your one-liner bio."
  image: resources/images/profile_pic.jpg

social:
  github:   "https://github.com/username"
  linkedin: "https://linkedin.com/in/username"
  email:    "mailto:you@email.com"
  # twitter:  "https://twitter.com/username"   # uncomment to enable
---
```

---

### 3 — Interests

Edit the `interests:` list in `content/skills.md`:

```yaml
interests:
  - Machine Learning
  - Computer Vision
  - Robotics            # ← add new topics here
```

---

### 4 — Tech Arsenal (Tool Icons)

1. Drop the logo file (SVG or PNG) into `resources/icons/`.
   Good free sources: [Simple Icons](https://simpleicons.org) (brand
   logos) or your own screenshots/exports.
2. Add an entry in `content/skills.md`:

```yaml
tools:
  - name: Kubernetes
    image: resources/icons/kubernetes.svg    # ← the file you just added
```

---

### 5 — Adding a New Project

Open `content/projects.md`, copy the block for an existing project
(everything from its opening `---` to just before the next `%%%`), paste
it after the last project separated by its own `%%%` line, then edit it:

```markdown
%%%

---
id: my-new-project              # URL slug — must be unique, no spaces
title: My New Project
description: One or two sentence summary shown on the homepage card.
image: resources/images/projects/my_project.jpg   # or an https:// URL
tags:
  - Python
  - PyTorch
github: "https://github.com/username/repo"   # leave "" to hide
demo:   "https://demo-url.com"               # leave "" to hide
paper:  ""                                   # leave "" to hide
---
Full write-up goes here as normal Markdown.

## Key Features

- Feature one
- Feature two

## Technical Details

Explain the approach. You can drop in fenced code blocks too:

\`\`\`python
print("this gets syntax highlighting + a Copy button automatically")
\`\`\`
```

The project card on the homepage automatically links to
`project.html?id=my-new-project`.

**Adding a project image:** store it in `resources/images/projects/`
(recommended at least 800×500px), or reference any public `https://` URL.

---

### 6 — Adding a New Publication

Open `content/publications.md` and do the same thing — copy a block, paste
it after the last one separated by `%%%`, and fill it in:

```markdown
%%%

---
id: my-paper-2025               # URL slug — must be unique
title: Full Title of the Paper
venue: Conference or Journal Name
year: 2025
authors:
  - Your Name
  - Co-Author Name
abstract: |
  Full abstract text goes here.
  Multiple paragraphs are supported.
link:   "https://doi.org/..."            # publisher link, "" to hide
pdf:    "resources/papers/paper.pdf"     # local PDF or URL, "" to hide
code:   "https://github.com/..."         # "" to hide
slides: ""                               # "" to hide
tags:
  - Topic 1
  - Topic 2
---
## Citation

\`\`\`bibtex
@article{name2025title,
  title={Full Title},
  journal={Journal Name},
  year={2025}
}
\`\`\`
```

The body below the frontmatter is optional — leave it empty if you don't
need a Citation block. It renders as normal Markdown on the publication's
detail page, so you can add extra commentary above the citation if you want.

---

### 7 — Changing Colors / Theme

All colors are CSS variables in `resources/style_main.css`
(duplicated in `resources/detail.css`). Edit the `:root` block at the top
of each file:

```css
:root {
    --text-color:   #2c3e50;   /* main text */
    --light-gray:   #f4f4f4;   /* page background */
    --border-color: #e0e0e0;
    --hover-color:  #3498db;   /* blue hover */
    --orange-color: #d16004;   /* accent / orange */
}
```

---

## FAQ

**Q: The page is blank when I open index.html directly.**
A: Use a local server (see "Local Development" above). `fetch()` is
blocked for `file://` URLs by the browser.

**Q: My profile photo isn't showing.**
A: Check the `image:` path in `content/config.md`. The path is relative
to the root of the portfolio folder. Make sure the file actually exists
at that path.

**Q: I want to remove the Publications section.**
A: Leave `content/publications.md` with no entries (delete everything
below the instructional comment block). The section will show "No
publications yet." To hide the section entirely, also remove its entry
from `nav:` in `content/config.md`.

**Q: How do I add a Twitter link in the footer?**
A: Uncomment the relevant line in `content/config.md`:
```yaml
social:
  twitter: "https://twitter.com/username"
```

**Q: Can I still use plain YAML somewhere instead of Markdown?**
A: The frontmatter block at the top of every content file *is* YAML —
you're already using it for all the structured fields (tags, links,
images, dates). Only the free-text write-up below the frontmatter is
Markdown. This combination keeps structured fields easy for the site to
render while keeping the actual writing easy for you to edit.
