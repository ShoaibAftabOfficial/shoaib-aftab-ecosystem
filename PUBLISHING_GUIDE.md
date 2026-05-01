# Shoaib Aftab Ecosystem - Publishing & Release Guide

This guide provides step-by-step instructions on how to publish the `shoaib-aftab-css`, `shoaib-aftab-js`, and `shoaib-aftab-icons` libraries to GitHub and NPM, and how to create a public release to transition from a Beta version to a stable production version.

---

## 1. Committing & Pushing Code to GitHub

When you have made changes to your code locally and are ready to upload them to your GitHub repository, follow these steps:

1. **Open your terminal** and navigate to your project root (e.g., `cd shoaib-aftab-css`).
2. **Check the status** of your changed files:
   `git status`
3. **Stage the changes** you want to commit:
   `git add .`
4. **Commit the changes** with a descriptive message:
   `git commit -m "feat: added new utility classes and improved documentation"`
5. **Push the code** to the main branch on GitHub:
   `git push origin main`

---

## 2. Publishing to NPM

To make your package available on NPM (so users can run `npm install @shoaib-aftab/css`), follow these steps for each folder:

1. **Navigate to the target folder** (e.g., `cd shoaib-aftab-css`).
2. **Ensure your build is up-to-date:**
   `npm run build`
3. **Log in to NPM** (if you haven't already):
   `npm login`
   *(Enter your NPM username, password, and email).*
4. **Update the version number** in `package.json` if this is a new release (e.g., change `"1.0.0"` to `"1.0.1"`).
5. **Publish the package**:
   `npm publish --access public`
   *(The `--access public` flag is necessary for scoped packages like `@shoaib-aftab/css`).*

---

## 3. Creating a Public Release on GitHub

Creating a GitHub Release marks a specific point in your code's history as a stable version. This signals to your users that the code is no longer in "Beta" and is ready for production use.

### Step-by-Step Instructions:
1. Go to your repository page on GitHub (e.g., `https://github.com/shoaib-aftab-tech/shoaib-aftab-css`).
2. On the right side of the screen, look for the **Releases** section and click on **Create a new release** (or **Draft a new release**).
3. **Choose a tag:** Type a new tag matching your version (e.g., `v1.0.0`) and click **Create new tag: v1.0.0 on publish**.
4. **Release Title:** Use the tag name or a short description (e.g., `v1.0.0 - Initial Stable Release`).
5. **Release Description:** Provide details about what this release includes. Example:

   ## 🚀 Shoaib Aftab CSS v1.0.0 is Here!

   We are excited to announce the first stable release of the Shoaib Aftab CSS Framework!

   ### Key Features:
   - **Zero Dependencies:** Pure W3C standard CSS.
   - **Utility Classes:** 400+ utility classes.
   - **RTL & Dark Mode:** Full native support.

   *(Note: This official release removes the Beta status, making the framework production-ready!)*

6. **Publish:** Scroll down and click the **Publish release** button.

Once published, GitHub automatically packages your code at that exact version, removing the "Beta" implication and providing a clear, stable download for developers worldwide.
