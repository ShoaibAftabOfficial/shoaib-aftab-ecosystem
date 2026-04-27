# Shoaib Aftab JS Documentation

Welcome to the comprehensive documentation for the **Shoaib Aftab JS** (Shoaib Aftab JS) library.

Shoaib Aftab JS is a modern, lightweight JavaScript library focused on providing rapid utility functions and simplified DOM manipulation without the overhead of heavy frameworks like jQuery.

## Getting Started

You can install Shoaib Aftab JS via NPM or download the script directly.

```bash
npm install @shoaib-aftab-tech/js
```

### Browser Usage

Include it in your project:
```html
<script src="node_modules/@shoaib-aftab-tech/js/dist/shoaib-aftab.min.js"></script>
<script>
  // SA is available globally
  const btn = SA.dom.$('#my-btn');
  SA.events.on(btn, 'click', () => {
    alert('Clicked!');
  });
</script>
```

## Available Modules

- [DOM Manipulation](dom.md)
- [Events](events.md)
- [AJAX](ajax.md)
- [Storage](storage.md)
- [Utilities & String](utilities.md)
