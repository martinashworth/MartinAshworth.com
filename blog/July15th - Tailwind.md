## ✅ Fixing Tailwind CSS CLI Issues in a Local Project

I ran into trouble installing Tailwind CSS locally via npm — specifically, the `tailwindcss` CLI binary wasn’t appearing in `node_modules/.bin/`.

Google Gemini misdiagnosed the issue as a broken npm environment, but ChatGPT correctly identified the real cause: I had installed **Tailwind v4**, which no longer bundles the CLI by default.

### 🔧 What worked

- Rolled back to **Tailwind CSS v3**, which includes the CLI
- Cleaned up with:
  ```bash
  rm -rf node_modules package-lock.json
  npm install -D tailwindcss@3 postcss autoprefixer
  ```
- Ran:
  ```bash
  npx tailwindcss init
  ```
- Created a minimal `src/input.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- Built with:
  ```bash
  npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify
  ```
- Added a `watch` script to `package.json`:
  ```json
  "scripts": {
    "watch": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
  }
  ```
- Used **VSCode’s integrated terminal** to run the watcher in one tab and work in another

### 🤖 Gemini’s postmortem

Gemini acknowledged the misdiagnosis. Its troubleshooting model assumed Tailwind’s internal structure hadn’t changed, and it didn’t check the installed version. It committed to updating its diagnostic logic to account for breaking changes in package releases.

### ✅ Lesson

This was a great example of a **versioning issue being misread as an environment issue** — and how helpful version-aware debugging can be.