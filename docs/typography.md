# Typography

SAT CSS makes it easy to handle fonts, sizes, weights, and alignment.

## Font Sizes

Use `.sat-text-{size}` classes to control the font size.

### Example
```html
<h1 class="sat-text-4xl sat-font-bold">Heading 4XL</h1>
<p class="sat-text-base sat-text-gray-600">This is base level paragraph text.</p>
```

**Visual Representation:**
<h1 style="font-size: 2.25rem; font-weight: 700; margin:0;">Heading 4XL</h1>
<p style="font-size: 1rem; color: #4b5563; margin:0;">This is base level paragraph text.</p>

## Text Alignment

Classes: `.sat-text-left`, `.sat-text-center`, `.sat-text-right`, `.sat-text-justify`

```html
<div class="sat-text-center sat-bg-gray-100 sat-p-4">
  Centered Text
</div>
```
