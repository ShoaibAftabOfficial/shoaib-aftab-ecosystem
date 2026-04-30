# Shoaib Aftab JS (Framework)

## About Shoaib Aftab Tech
We specialize in Custom Development, Software Engineering, and API Development (specifically WhatsApp Business API).

## Introduction
Shoaib Aftab JS is a powerful, utility-driven **Vanilla JavaScript Framework** built with absolutely **zero dependencies**. It strictly adheres to ECMAScript (W3C) specifications. It provides a robust set of 150+ functions under the global `SA` namespace, enabling DOM manipulation, AJAX, validation, string manipulation, and more, all without relying on third-party libraries.

## Installation

### NPM
```bash
npm install @shoaib-aftab/js
```

### CDN
```html
<script src="https://unpkg.com/@shoaib-aftab/js/dist/shoaib-aftab.min.js"></script>
```

## Usage

```javascript
// Example: DOM Manipulation
SA.dom.select('.my-button').addEventListener('click', () => {
  SA.dom.addClass(SA.dom.byId('my-modal'), 'sa-visible');
});

// Example: AJAX GET Request
SA.ajax.getJSON('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## Features
- **Zero Dependencies:** 100% self-contained Vanilla JS.
- **Global Namespace (`SA.`):** Prevents global scope pollution.
- **Comprehensive Utility Set:** DOM, AJAX, Storage, Strings, Arrays, Objects, Dates, and Validation.
- **Lightweight & Fast:** Built for modern browsers.

## Documentation
See the `docs/index.md` file for full documentation, complete with detailed examples and instructions.
