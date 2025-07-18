# FitSpo Landing Page

This repository contains the source code for the **FitSpo** early‑access landing page. The page is a single‑page site built with vanilla HTML, CSS and minimal JavaScript. It uses a dark, fashion‑forward design with coral accents to evoke the brand and invites visitors to join the waitlist via a simple email form.

## Structure

- `index.html` – the main HTML document containing the page markup. This includes meta tags for SEO and Open Graph, the hero section, feature highlights, app preview, FAQ accordion and footer. Two identical waitlist forms are included and configured for Netlify Forms (via `data-netlify="true"`).
- `global.css` – global stylesheet defining the dark theme, responsive layout, cards and animations. Adjust variables at the top of this file to tweak colours or spacing.
- `script.js` – enhances the waitlist forms by intercepting submission, posting data via `fetch` and showing a toast notification. The Netlify backend still receives the form data.
- `robots.txt` – blocks search engines from indexing this pre‑launch site.
- `assets/` – contains image assets such as `logo.png` and `hero-bg.png`. Replace these files to customise the brand or hero backdrop.

## Customising the Page

### Changing Copy
Edit the text directly in `index.html`. All headings, paragraphs and FAQs are plain HTML content. Update the `title` and `meta` description near the top of the file to reflect any changes in messaging.

### Updating Colours or Layout
The colour palette and spacing are centralised in CSS custom properties at the top of `global.css`. Changing values such as `--bg-color`, `--text-color` or `--accent` will update the entire site. Adjust section paddings, border radii or typography within this file for finer control.

### Swapping Images
Place replacement images in the `assets` directory using the same filenames to avoid updating references:

- **Logo** – overwrite `assets/logo.png` with your own logo (PNG, square recommended).
- **Hero Background** – replace `assets/hero-bg.png` with a high‑resolution background image (e.g. a stylised fashion photo). For best results, keep the focal point off‑centre so that the overlay text remains legible.

### Modifying the Form Endpoint
By default the forms use **Netlify Forms** to capture email addresses. When deployed on Netlify, submissions appear in the site’s **Forms** tab. To switch to another provider:

1. Remove `data-netlify="true"` and the hidden `form-name` fields from the `<form>` tags in `index.html`.
2. Replace the form markup with your provider’s embed code (e.g. a Mailchimp form) or update `script.js` to send the form data to your API endpoint via `fetch()`.

## Deploying Changes

1. Commit and push your changes to the `main` branch of the GitHub repository.
2. In Netlify, connect this repository and choose the **main** branch as the production branch (no build command required since this is a static site). Netlify will automatically deploy updates whenever you push to `main`.

If you choose another hosting provider (e.g. Vercel or GitHub Pages) the site will also work, but you’ll need to configure your forms separately since Netlify’s form handling is specific to their platform.