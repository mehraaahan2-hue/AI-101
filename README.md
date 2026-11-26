# Personal Portfolio Website

This is a simple personal website made with plain HTML, CSS, and JavaScript. It has no build step and does not need Node.js, npm, or a local server.

## 1. Open the site on your computer

1. Open this project folder in Finder (macOS) or File Explorer (Windows).
2. Find `index.html`.
3. Double-click `index.html`.
4. The site will open in your default web browser.

If you make an edit while the page is open, save the file and refresh the browser to see the change.

## 2. Add your own text and links

Open `index.html` in a text editor such as Visual Studio Code, Zed, Sublime Text, or Notepad.

Search for `EDIT:` to find the main areas to personalise. Replace every piece of text in square brackets, such as `[Your Name]`, `[Your role]`, and `[Project One]`.

Important places to update:

- Page title, search description, and social-sharing details near the top of `index.html`
- Initials in the top-left logo
- Hero tagline, name, role, email, location, and availability
- About text and skills
- Project titles, descriptions, years, categories, images, and links
- Experience and education rows
- Contact email and social profile links

To change an email link, update both parts of it. For example:

```html
<a href="mailto:you@example.com">you@example.com</a>
```

For links that are not ready yet, use `href="#"` temporarily. Remember to replace every `https://example.com` before publishing.

## 3. Swap in your own images

All images are inside the `images` folder. The current SVG files are placeholders.

The simplest approach is to add your own image files to that folder and then change the matching `src` in `index.html`. For example:

```html
<img src="images/my-photo.jpg" alt="Portrait of Your Name">
```

Suggested image sizes:

- Profile photo: portrait orientation, around 900 × 1100 pixels
- Project images: landscape orientation, around 1600 × 1000 pixels
- Social preview: 1200 × 630 pixels, ideally saved as `social-preview.jpg`

Use `.jpg` for photographs, `.png` for images that need transparency, or `.webp` for smaller modern image files. Keep image filenames lowercase and use hyphens instead of spaces.

Always update the `alt` text so it briefly describes the real image. If you replace `social-preview.svg`, also update the `og:image` filename near the top of `index.html`.

## 4. Push the project to a new GitHub repository

You need a free [GitHub account](https://github.com/) and Git installed on your computer.

### Create the repository on GitHub

1. Sign in to GitHub.
2. Click the **+** button in the top-right corner and choose **New repository**.
3. Give the repository a name, such as `personal-website`.
4. Choose **Public** if you want anyone to see the code, or **Private** if you do not.
5. Do **not** add a README, `.gitignore`, or licence on GitHub because this folder already contains a README.
6. Click **Create repository**.

### Upload this folder with Git

Open Terminal (macOS) or Git Bash (Windows), move into this project folder, and run these commands one at a time:

```bash
git init
git add .
git commit -m "Create personal website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your real GitHub username and repository name. GitHub may ask you to sign in.

For future updates, save your changes and run:

```bash
git add .
git commit -m "Update website"
git push
```

## 5. Deploy the site on Netlify

1. Sign in to [Netlify](https://www.netlify.com/) using your GitHub account.
2. From the Netlify dashboard, choose **Add new project**.
3. Choose **Import an existing project**.
4. Select **GitHub** and authorise Netlify if asked.
5. Select the GitHub repository you created above.
6. In the deployment settings, leave the **Build command** empty.
7. Set the **Publish directory** to the project root. Depending on the Netlify screen, leave it empty or enter `.` (a single period).
8. Click **Deploy**.

Netlify will give the site a temporary web address. You can change that address from the site settings or connect your own domain later.

Every future `git push` to the `main` branch will automatically trigger a new Netlify deployment.

## File guide

- `index.html` — all text, links, page sections, and image references
- `styles.css` — colours, typography, spacing, layout, responsive design, and light/dark themes
- `script.js` — mobile menu, theme switcher, current year, header effect, and scroll reveals
- `images/` — profile, project, favicon, and social-preview images

## Optional design changes

The main colours are CSS variables at the very top of `styles.css`. Change those values to adjust the palette. The site uses system fonts, so there are no font files or external services to install.

Before publishing, check the site on both a phone and a computer, test every link, and search the project for `[` or `example.com` to catch any placeholders you may have missed.
