# RTL Support

SAT CSS is built with native RTL (Right-To-Left) support using CSS logical properties and attribute selectors.

To enable RTL mode for languages like Urdu, Arabic, or Persian, simply set the `dir="rtl"` attribute on your `<html>` or `<body>` tag.

```html
<html dir="rtl" lang="ur">
  <head>
    <link rel="stylesheet" href="sat-css.min.css">
  </head>
  <body>
    <div class="sat-me-4">Margin End 4 (which becomes Margin Left in RTL)</div>
    <div class="sat-ps-8">Padding Start 8 (which becomes Padding Right in RTL)</div>
  </body>
</html>
```
