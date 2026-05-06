# Shoaib Aftab Ecosystem - Publishing & Release Guide

یہ گائیڈ آپ کو قدم بہ قدم بتائے گی کہ کوڈ کو **ShoaibAftabTech** کی GitHub Organization اور **@shoaibaftabtech** کی NPM Organization پر کیسے پبلش کرنا ہے، اور GitHub پر Release کیسے بنانی ہے۔

---

## 1. Committing & Pushing Code to GitHub Organization
اپنے کمپیوٹر سے کوڈ GitHub Organization پر بھیجنے کے لیے ٹرمینل (Terminal) میں یہ کمانڈز چلائیں:

1. `git status` (تبدیلیاں چیک کرنے کے لیے)
2. `git add .` (تمام فائلوں کو شامل کرنے کے لیے)
3. `git commit -m "feat: initial stable release of ecosystem"` (تبدیلی کا نام)
4. `git push origin main` (GitHub پر بھیجنے کے لیے)

---

## 2. Publishing to NPM Organization (@shoaibaftabtech)

یہ پیکجز آپ کی پرسنل آئی ڈی کی بجائے باقاعدہ NPM Organization (`@shoaibaftabtech`) پر پبلش ہوں گے۔ چونکہ آپ اس آرگنائزیشن کے Owner ہیں اور آپ کے پاس Read/Write ایکسیس ٹوکن موجود ہے، اس لیے پبلش کرنے سے پہلے یقینی بنائیں کہ آپ اپنے اکاؤنٹ میں لاگ ان ہیں۔

### لاگ ان کا طریقہ (اگر لاگ ان نہیں ہیں):
```bash
npm login
```
*(یہاں اپنا NPM یوزرنیم، پاسورڈ اور ای میل دیں)*

اگر آپ Access Token کے ذریعے پبلش کرنا چاہتے ہیں تو آپ اپنی `.npmrc` فائل میں ٹوکن سیٹ کر سکتے ہیں۔

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

*(نوٹ: `--access public` لازمی ہے کیونکہ آپ ایک آرگنائزیشن اسکوپ `@shoaibaftabtech` کے تحت پبلش کر رہے ہیں)*

---

## 3. Creating a Public Release on GitHub (کاپی پیسٹ مواد)

GitHub پر Release بنانے سے آپ کا پروجیکٹ باقاعدہ مستند (Stable) مانا جاتا ہے۔ اپنی **ShoaibAftabTech** آرگنائزیشن کی ریپوزٹری کھولیں، دائیں جانب **"Releases"** پر کلک کریں اور پھر **"Draft a new release"** پر کلک کریں۔ نیچے دیا گیا مواد کاپی اور پیسٹ کریں۔

### 🎨 1. Shoaib Aftab CSS (Framework) کے لیے

- **Choose a tag (ٹیگ کے خانے میں لکھیں):** `css-v1.0.0`
- **Release title (ٹائٹل کے خانے میں لکھیں):**
  ```text
  Shoaib Aftab CSS Framework v1.0.0 - Stable Release 🚀
  ```
- **Describe this release (ڈسکرپشن کے بڑے خانے میں یہ پورا کاپی کر کے پیسٹ کریں):**
  ```markdown
  ## 🎉 First Stable Release of Shoaib Aftab CSS Framework

  We are thrilled to announce the official `v1.0.0` production-ready release of the **Shoaib Aftab CSS Framework**.

  ### 🔥 Key Features & Highlights:
  - **100% Zero Dependencies:** Pure W3C CSS architecture. No Tailwind, no Bootstrap required.
  - **Utility-First Design:** Over 400+ highly optimized utility classes.
  - **Native RTL Support:** Seamless automated integration for Urdu, Arabic, and Persian layouts.
  - **Dark Mode Ready:** Built-in `prefers-color-scheme` media queries.

  **Installation via NPM Organization:**
  ```bash
  npm install @shoaibaftabtech/css
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
  - **100% Zero Dependencies:** Pure Vanilla JavaScript (ECMAScript standards).
  - **Global `SA` Namespace:** Clean architecture for DOM, Events, and AJAX.
  - **150+ Utility Functions:** String, Array, Object manipulation, Date formatting, and Validation.

  **Installation via NPM Organization:**
  ```bash
  npm install @shoaibaftabtech/js
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
  - **500+ Premium Icons:** A massive collection.
  - **Zero Runtime Dependencies:** Compiled purely into CSS `data:image` encodings.
  - **Brand Colors:** True-color brand logos (e.g., Google, WhatsApp, Facebook).
  - **Advanced Variants:** Outline, Solid, Two-Tone, Color, Round, and Square variants.

  **Installation via NPM Organization:**
  ```bash
  npm install @shoaibaftabtech/icons
  ```
  ```

سبز رنگ کے **"Publish release"** بٹن پر کلک کر دیں۔
