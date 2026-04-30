# Shoaib Aftab CSS (Framework) - Documentation

## Introduction
A lightweight, utility-first CSS Framework with **zero dependencies**. It strictly adheres to the W3C CSS Specification. This documentation provides comprehensive examples to help you build interfaces rapidly.

## Installation

### 1. Using NPM (Recommended for Projects)
```bash
npm install @shoaib-aftab/css
```
Then import it into your CSS or JS:
```css
@import '@shoaib-aftab/css/dist/shoaib-aftab.min.css';
```

### 2. Using CDN (For Quick Prototyping)
```html
<link rel="stylesheet" href="https://unpkg.com/@shoaib-aftab/css/dist/shoaib-aftab.min.css">
```

---

## Code Examples

### 1. Buttons
We provide simple, elegant button classes out of the box.

```html
<!-- Primary Button -->
<button class="sa-btn sa-btn-primary">Submit Form</button>

<!-- Outline Button -->
<button class="sa-btn sa-btn-outline">Cancel</button>

<!-- Block Button -->
<button class="sa-btn sa-btn-success sa-btn-block">Confirm Order</button>
```

### 2. Cards
Cards are essential for grouping content.

```html
<div class="sa-card sa-max-w-lg">
  <div class="sa-card-header">
    User Profile
  </div>
  <div class="sa-card-body">
    <p class="sa-text-gray-700">Name: Shoaib Aftab</p>
    <p class="sa-text-gray-700">Role: Software Engineer</p>
  </div>
  <div class="sa-card-footer sa-flex sa-justify-end sa-gap-2">
    <button class="sa-btn sa-btn-outline">Edit</button>
    <button class="sa-btn sa-btn-primary">Save</button>
  </div>
</div>
```

### 3. Forms
Form elements are styled consistently.

```html
<div class="sa-form-group">
  <label class="sa-label">Email Address</label>
  <input type="email" class="sa-input" placeholder="Enter your email">
</div>

<div class="sa-form-group">
  <label class="sa-label">Password</label>
  <input type="password" class="sa-input sa-input-error" placeholder="Enter your password">
  <p class="sa-text-xs sa-text-danger-500 sa-mt-1">Password is required.</p>
</div>
```

### 4. Layout (Grid & Flexbox)
Easily structure your layouts using Flex and Grid utilities.

```html
<!-- Grid Example: 3 Columns -->
<div class="sa-grid sa-grid-cols-3 sa-gap-4">
  <div class="sa-bg-primary-100 sa-p-4 sa-rounded-md">Item 1</div>
  <div class="sa-bg-primary-100 sa-p-4 sa-rounded-md">Item 2</div>
  <div class="sa-bg-primary-100 sa-p-4 sa-rounded-md">Item 3</div>
</div>

<!-- Flex Example: Centered Content -->
<div class="sa-flex sa-items-center sa-justify-between sa-p-4 sa-bg-gray-50">
  <div class="sa-font-bold">Logo</div>
  <div class="sa-flex sa-gap-2">
    <a href="#" class="sa-no-underline sa-text-primary-600">Home</a>
    <a href="#" class="sa-no-underline sa-text-gray-600">About</a>
  </div>
</div>
```

---

## RTL Support
Full support for Urdu, Arabic, and other Right-To-Left languages.

Add `dir="rtl"` to your HTML tag:
```html
<html dir="rtl">
<body>
  <!-- Elements like .sa-start-0 will automatically attach to the right side -->
  <div class="sa-pe-4">This padding is automatically applied to the right side in RTL mode.</div>
</body>
</html>
```

---

## API Reference Summary

- **Colors:** `.sa-bg-primary-50` to `.sa-bg-primary-900`, `.sa-text-danger-500`, etc.
- **Typography:** `.sa-text-xs` to `.sa-text-3xl`, `.sa-font-bold`, `.sa-text-center`
- **Spacing:** `.sa-p-1` to `.sa-p-16`, `.sa-m-1` to `.sa-m-16` (also `-t`, `-b`, `-s`, `-e`, `-x`, `-y`)
- **Layout:** `.sa-flex`, `.sa-grid`, `.sa-hidden`, `.sa-w-full`, `.sa-h-screen`
- **Components:** `.sa-btn`, `.sa-input`, `.sa-card`, `.sa-alert`, `.sa-badge`, `.sa-table`, `.sa-modal`
- **Effects:** `.sa-shadow-sm` to `.sa-shadow-xl`, `.sa-rounded-md` to `.sa-rounded-full`, `.sa-opacity-50`
