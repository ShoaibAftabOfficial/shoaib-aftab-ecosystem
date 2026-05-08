# Shoaib Aftab Ecosystem - Publishing & Release Guide

یہ گائیڈ آپ کو قدم بہ قدم بتائے گی کہ کوڈ کو **ShoaibAftabTech** کی GitHub Organization اور **@shoaibaftabtech** کی NPM Organization پر کیسے پبلش کرنا ہے، اور GitHub پر Release کیسے بنانی ہے۔

---

## 1. Committing & Pushing Code to GitHub Organization
اپنے کمپیوٹر سے کوڈ GitHub Organization پر بھیجنے کے لیے ٹرمینل (Terminal) میں یہ کمانڈز چلائیں:

1. `git status`
2. `git add .`
3. `git commit -m "feat: initial stable release of ecosystem"`
4. `git push origin main`

---

## 2. Publishing to NPM Organization (@shoaibaftabtech)

NPM پر پبلش کرتے وقت اکثر دو بڑے مسائل (Errors) آتے ہیں جن کا حل نیچے تفصیل سے دیا گیا ہے:

### ⚠️ مسئلہ نمبر 1: `Cannot find module 'clean-css'` یا `terser` کا ایرر
**وجہ:** یہ ایرر اس لیے آتا ہے کیونکہ فولڈر کے اندر ڈیوائیلپمنٹ ٹولز ڈاؤنلوڈ نہیں ہوئے۔
**حل:** بلڈ کمانڈ چلانے سے پہلے ہمیشہ `npm install` کی کمانڈ چلائیں۔

### ⚠️ مسئلہ نمبر 2: `404 Not Found` کا ایرر NPM Publish پر (اس پر خاص توجہ دیں)
**وجہ اور حل:** اگر آپ کا NPM پیکیج نام `@shoaibaftabtech/css` ہے اور آپ `npm publish` چلاتے ہیں تو 404 ایرر کی 3 بڑی وجوہات ہوتی ہیں جن کا حل یہ ہے:

**پہلا حل:** آپ کے `package.json` میں یہ لائن ہونی چاہیے (جو کہ ہم نے کوڈ میں شامل کر دی ہے):
```json
"publishConfig": { "access": "public" }
```

**دوسرا حل (Token Permissions):**
اگر آپ `.npmrc` میں ٹوکن استعمال کر رہے ہیں اور پھر بھی 404 آ رہا ہے، تو اس کا مطلب ہے آپ کا ٹوکن اس آرگنائزیشن میں **Write** (لکھنے) کی اجازت نہیں رکھتا۔ NPM پر جا کر نیا ٹوکن بنائیں:
1. NPM پر لاگ ان کریں۔
2. "Access Tokens" میں جائیں اور **Generate New Token** پر کلک کریں۔
3. **Granular Access Token** منتخب کریں۔
4. "Packages and scopes" والے حصے میں اپنی آرگنائزیشن (`@shoaibaftabtech`) کو **Read and Write** کی ایکسیس دیں۔
5. اس نئے ٹوکن کو اپنی `.npmrc` فائل میں اس طرح لکھیں (کوئی سپیس نہ دیں):
```text
//registry.npmjs.org/:_authToken=آپ_کا_نیا_گرینولر_ٹوکن_یہاں_آئے_گا
```

**تیسرا حل (Direct Login):** اگر ٹوکن کا مسئلہ حل نہ ہو تو ٹوکن ہٹا کر روٹ فولڈر میں یہ کمانڈ چلائیں:
```bash
npm login
```
اور براہ راست براؤزر سے لاگ ان کریں۔

---

### پبلش کرنے کے مکمل سٹیپس (باری باری ہر فولڈر کے لیے):

#### Shoaib Aftab CSS کے لیے:
1. `cd shoaib-aftab-css`
2. `npm install`
3. `npm run build`
4. `npm publish --access public`
5. `cd ..`

#### Shoaib Aftab JS کے لیے:
1. `cd shoaib-aftab-js`
2. `npm install`
3. `npm run build`
4. `npm publish --access public`
5. `cd ..`

#### Shoaib Aftab Icons کے لیے:
1. `cd shoaib-aftab-icons`
2. `npm install`
3. `npm run build`
4. `npm publish --access public`
5. `cd ..`

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
