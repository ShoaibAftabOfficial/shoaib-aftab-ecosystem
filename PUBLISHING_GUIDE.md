# Shoaib Aftab Ecosystem - Publishing & Release Guide

یہ گائیڈ آپ کو قدم بہ قدم بتائے گی کہ کوڈ کو GitHub اور NPM پر کیسے اپلوڈ کرنا ہے، اور GitHub پر Release کیسے بنانی ہے تاکہ آپ کے پراجیکٹس Beta ورژن سے نکل کر پبلک Production ورژن بن جائیں۔ نیچے دیے گئے ٹائٹل اور ڈسکرپشن آپ براہ راست کاپی کر کے استعمال کر سکتے ہیں۔

---

## 1. Committing & Pushing Code to GitHub
اپنے کمپیوٹر سے کوڈ GitHub پر بھیجنے کے لیے ٹرمینل (Terminal) میں یہ کمانڈز چلائیں:

1. `git status` (تبدیلیاں چیک کرنے کے لیے)
2. `git add .` (تمام فائلوں کو شامل کرنے کے لیے)
3. `git commit -m "feat: initial stable release of ecosystem"` (تبدیلی کا نام)
4. `git push origin main` (GitHub پر بھیجنے کے لیے)

---

## 2. Publishing to NPM
NPM پر پبلش کرنے کے لیے آپ کو باری باری تینوں فولڈرز کے اندر جا کر یہ کمانڈز چلانی ہیں:

### Shoaib Aftab CSS کے لیے:
1. `cd shoaib-aftab-css`
2. `npm run build`
3. `npm publish --access public`
4. `cd ..`

### Shoaib Aftab JS کے لیے:
1. `cd shoaib-aftab-js`
2. `npm run build`
3. `npm publish --access public`
4. `cd ..`

### Shoaib Aftab Icons کے لیے:
1. `cd shoaib-aftab-icons`
2. `npm run build`
3. `npm publish --access public`
4. `cd ..`

*(نوٹ: اگر آپ نے NPM پر لاگ ان نہیں کیا ہوا تو پہلے `npm login` چلا لیں۔)*

---

## 3. Creating a Public Release on GitHub (کاپی پیسٹ مواد)

GitHub پر Release بنانے سے آپ کا پروجیکٹ باقاعدہ مستند (Stable) مانا جاتا ہے۔ GitHub پر اپنی ریپوزٹری کھولیں، دائیں جانب **"Releases"** پر کلک کریں اور پھر **"Draft a new release"** پر کلک کریں۔ نیچے دیا گیا مواد ہر لائبریری کے حساب سے کاپی اور پیسٹ کریں۔

### 🎨 1. Shoaib Aftab CSS (Framework) کے لیے

- **Choose a tag (ٹیگ کے خانے میں لکھیں):** `css-v1.0.0`
- **Release title (ٹائٹل کے خانے میں لکھیں):**
  ```text
  Shoaib Aftab CSS Framework v1.0.0 - Stable Release 🚀
  ```
- **Describe this release (ڈسکرپشن کے بڑے خانے میں یہ پورا کاپی کر کے پیسٹ کریں):**
  ```markdown
  ## 🎉 First Stable Release of Shoaib Aftab CSS Framework

  We are thrilled to announce the official `v1.0.0` production-ready release of the **Shoaib Aftab CSS Framework**. This release marks the transition out of the Beta phase.

  ### 🔥 Key Features & Highlights:
  - **100% Zero Dependencies:** Pure W3C CSS architecture. No Tailwind, no Bootstrap required.
  - **Utility-First Design:** Over 400+ highly optimized utility classes for rapid UI development.
  - **Native RTL Support:** Seamless automated integration for Urdu, Arabic, and Persian layouts.
  - **Dark Mode Ready:** Built-in `prefers-color-scheme` media queries.
  - **Modular Architecture:** Organized perfectly into Variables, Colors, Layouts, Typography, and Components.

  **Installation:**
  ```bash
  npm install @shoaib-aftab/css
  ```
  ```

---

### ⚙️ 2. Shoaib Aftab JS (Framework) کے لیے

- **Choose a tag (ٹیگ کے خانے میں لکھیں):** `js-v1.0.0`
- **Release title (ٹائٹل کے خانے میں لکھیں):**
  ```text
  Shoaib Aftab JS Framework v1.0.0 - Stable Release 🚀
  ```
- **Describe this release (ڈسکرپشن کے بڑے خانے میں یہ پورا کاپی کر کے پیسٹ کریں):**
  ```markdown
  ## 🎉 First Stable Release of Shoaib Aftab JS Framework

  We are thrilled to announce the official `v1.0.0` production-ready release of the **Shoaib Aftab JS Framework**.

  ### 🔥 Key Features & Highlights:
  - **100% Zero Dependencies:** Pure Vanilla JavaScript (ECMAScript standards). No jQuery or external tools needed.
  - **Global `SA` Namespace:** Clean, non-polluting architecture for DOM, Events, and AJAX.
  - **150+ Utility Functions:** Fully equipped with functions for String, Array, Object manipulation, Date formatting, and Data Validation.
  - **Lightweight:** Highly minified for maximum performance in modern browsers.

  **Installation:**
  ```bash
  npm install @shoaib-aftab/js
  ```
  ```

---

### 🖼️ 3. Shoaib Aftab Icons (Library) کے لیے

- **Choose a tag (ٹیگ کے خانے میں لکھیں):** `icons-v1.0.0`
- **Release title (ٹائٹل کے خانے میں لکھیں):**
  ```text
  Shoaib Aftab Icon Library v1.0.0 - Stable Release 🚀
  ```
- **Describe this release (ڈسکرپشن کے بڑے خانے میں یہ پورا کاپی کر کے پیسٹ کریں):**
  ```markdown
  ## 🎉 First Stable Release of Shoaib Aftab Icon Library

  We are thrilled to announce the official `v1.0.0` production-ready release of the **Shoaib Aftab Icon Library**.

  ### 🔥 Key Features & Highlights:
  - **500+ Premium Icons:** A massive collection covering all major web application needs.
  - **Zero Runtime Dependencies:** SVGs are compiled purely into CSS `data:image` encodings. No font files required.
  - **Brand Colors:** Includes original, true-color brand logos (e.g., Google, WhatsApp, Facebook).
  - **Advanced Variants:** Outline, Solid, Two-Tone, and Color variants with Round and Square background shapes.
  - **Smart RTL:** Directional icons (like arrows) automatically mirror when `[dir="rtl"]` is detected.

  **Installation:**
  ```bash
  npm install @shoaib-aftab/icons
  ```
  ```

جب آپ یہ سب تفصیلات کاپی پیسٹ کر لیں تو نیچے موجود سبز رنگ کے **"Publish release"** بٹن پر کلک کر دیں۔ اس سے آپ کے پروجیکٹس مکمل طور پر لائیو اور پبلک پروڈکشن ورژن میں تبدیل ہو جائیں گے!
