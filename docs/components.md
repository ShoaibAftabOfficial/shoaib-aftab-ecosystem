# Components

Basic UI components are built into SAT CSS to save you time.

## Buttons

Use `.sat-btn` combined with `.sat-btn-primary`, `.sat-btn-secondary`, or `.sat-btn-danger`.

```html
<button class="sat-btn sat-btn-primary">Primary Button</button>
<button class="sat-btn sat-btn-danger">Delete</button>
```

**Visual Representation:**
<button style="background: #2563eb; color: white; padding: 0.5rem 1rem; border:none; border-radius: 0.25rem; margin-right: 0.5rem;">Primary Button</button>
<button style="background: #dc2626; color: white; padding: 0.5rem 1rem; border:none; border-radius: 0.25rem;">Delete</button>

## Cards

```html
<div class="sat-card sat-max-w-sm">
  <div class="sat-card-header sat-font-bold sat-text-lg">Card Title</div>
  <div class="sat-card-body">This is the card body text.</div>
  <div class="sat-card-footer sat-text-right">
    <button class="sat-btn sat-btn-primary">Action</button>
  </div>
</div>
```
