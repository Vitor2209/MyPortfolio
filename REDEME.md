# Vitor Dutra Melo — Portfolio

Personal portfolio website for **Vitor Dutra Melo** — Java Backend Developer.  
Showcases projects, skills and professional experience. Built as a lightweight, responsive static site (HTML / CSS / JS).

---

## 🔎 Overview

This repository contains the source code for Vitor's portfolio website:

- Clean, responsive design focused on clarity and readability
- Sections: About, Projects, Skills, Experience, Contact
- Simple social links (GitHub, LinkedIn, WhatsApp)
- Easy to host on static hosting (GitHub Pages, Netlify, Vercel, etc.)

---

## 🚀 Live demo

If deployed via GitHub Pages or another host, add your site URL here:
`https://your-username.github.io/your-repo-name/`

---

## 🧱 Built with

- Vanilla HTML5
- CSS (modern layout, responsive)
- JavaScript (small enhancements / navigation)
- No framework required — can be used as static site

---

## ⚙️ Local development

Minimal steps to preview locally:

**Option A — with Python (built-in, zero install)**

```bash
# Python 3
cd path/to/repo
python -m http.server 8000
# then open http://localhost:8000 in your browser
Option B — with npm http-server

bash
Copy code
# if you have Node.js installed
npm install -g http-server
cd path/to/repo
http-server -c-1
# open the printed URL (e.g. http://127.0.0.1:8080)
Option C — Live Server (VS Code)
Open the folder in VS Code and click Live Server to preview instantly.

📁 Project structure
bash
Copy code
/.
├─ index.html            # main page (or translated files)
├─ style.css             # global styles
├─ script.js             # client-side JS
├─ src/img/              # images (profile, screenshots)
└─ README.md
Keep relative paths intact (e.g. src/img/...) when deploying.

📦 How to deploy (GitHub Pages)
Method 1 — main branch + gh-pages branch (recommended for static sites)

Install gh-pages (optional) or use GitHub UI.

From your project root:

bash
Copy code
npm install --save-dev gh-pages
# add to package.json:
# "predeploy": "npm run build", (only for build steps)
# "deploy": "gh-pages -d ."
Or simply push to GitHub and in the repository settings → Pages choose branch: gh-pages or main / docs folder.

Wait a few minutes and your site will be live at:
https://<your-username>.github.io/<repo-name>/

Method 2 — Netlify / Vercel

Drag-and-drop the site folder or connect the repo, and deploy. Both services auto-detect static sites.

✅ Features
Lightweight and fast — static HTML/CSS/JS

Responsive layout (mobile-first adjustments)

Project cards with links to GitHub

Skills grid with icons

Experience timeline

Contact CTA with WhatsApp quick link

🛠 Improvements you can add
Add a contact form (EmailJS / serverless function)

Add analytics (privacy-aware, e.g. Plausible)

Add automated deploy via GitHub Actions

Add screenshots folder and show sample images in README

Add multi-language support (EN/PT)

📞 Contact
WhatsApp: +44 7785 314195 (link in site)

GitHub: https://github.com/Vitor2209

LinkedIn: https://www.linkedin.com/in/vitordutramelo/

📜 License
This project is open source under the MIT License — feel free to reuse and adapt.

🙋 Need help?
If you want, I can:

generate index.html screenshots and add them to README,

add CI for automatic GitHub Pages deploy,

translate README to Portuguese,

or prepare a one-click deploy config for Netlify/Vercel.

Just tell me which one and I’ll generate the files.

yaml
Copy code
