# AQA AS Biology 7401: MarkScheme Decoder & Self-Marking Lab

A comprehensive, interactive web application and teacher/student toolkit for AQA AS & A-Level Biology (Specifications 7401 & 7402). 

Includes:
- **Specification Browser**: Interactive syllabus breakdown across Units 3.1 to 3.8.
- **Examiner Workshop (Strategy 1)**: Authentic flawed student answers, marking grids, criteria analysis, and 100% exemplar rewrites.
- **Live Projector Mode**: Fullscreen classroom teaching mode with revealable mark schemes, timer, and student discussion prompts.
- **Self-Marking Lab (Strategy 2)**: Student practice quizzes with instant feedback and mark scheme criteria matching.
- **Printable Student Worksheets**: Print-ready, single-sheet A4 PDF-optimized revision packs with lined answer spaces and purple-pen checklists.

---

## 🚀 How to Publish on GitHub Pages

This repository is pre-configured for instant deployment to GitHub Pages. Follow the steps below:

### Method 1: Automatic Deployment via GitHub Actions (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of AQA Biology MarkScheme Lab"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages in your repository settings**:
   - On GitHub, go to your repository.
   - Click on the **Settings** tab (gear icon at the top).
   - In the left sidebar under the "Code and automation" section, click **Pages**.
   - Under **Build and deployment** > **Source**, click the dropdown and select **GitHub Actions**.

3. **That's it!**
   - The `.github/workflows/deploy.yml` workflow will automatically run every time you push to `main`.
   - Your site will be live at:
     ```
     https://<your-username>.github.io/<your-repo-name>/
     ```

---

### Method 2: Manual CLI Deployment via `gh-pages` Branch

If you prefer building and pushing directly from your machine:

1. In your terminal, run:
   ```bash
   npm run deploy
   ```
2. On GitHub, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Select the `gh-pages` branch and `/ (root)` folder, then click **Save**.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for GitHub Pages static hosting
npm run build:pages

# Preview production build locally
npm run preview
```
