# SAT JS Documentation

Welcome to the comprehensive documentation for the **SAT JS** library.

SAT JS is a modern, lightweight JavaScript library focused on providing rapid utility functions and simplified DOM manipulation without the overhead of heavy frameworks like jQuery.

## Getting Started

You can install SAT JS via NPM or download the script directly.

```bash
npm install @shoaib-aftab-tech/js
```

### Browser Usage

Include it in your project:
```html
<script src="node_modules/@shoaib-aftab-tech/js/dist/sat-js.min.js"></script>
<script>
  // SAT is available globally
  const btn = SAT.$('#my-btn');
  SAT.on(btn, 'click', () => {
    alert('Clicked!');
  });
</script>
```

## Available Modules

- [DOM Manipulation](dom.md)
- [Utilities](utilities.md)
