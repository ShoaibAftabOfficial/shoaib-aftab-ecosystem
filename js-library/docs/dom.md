# DOM Manipulation

SAT JS makes DOM selection and event handling extremely simple.

## Selection

### `SAT.$(selector)`
Selects the first matching element in the DOM (wrapper for `querySelector`).

**Example:**
```javascript
const header = SAT.$('.site-header');
console.log(header);
```

### `SAT.$$(selector)`
Selects all matching elements (wrapper for `querySelectorAll`).

**Example:**
```javascript
const items = SAT.$$('.list-item');
items.forEach(item => {
  item.style.color = 'red';
});
```

## Classes

### `SAT.addClass(element, className)`
Adds a class to a specific element. You can pass either a DOM element or a string selector.

**Example:**
```javascript
SAT.addClass('#my-div', 'sat-bg-primary-500');
```

### `SAT.removeClass(element, className)`
Removes a class.

**Example:**
```javascript
SAT.removeClass('#my-div', 'sat-hidden');
```

### `SAT.toggleClass(element, className)`
Toggles a class.

**Example:**
```javascript
SAT.toggleClass('#my-div', 'active');
```

## Events

### `SAT.on(element, event, handler)`
Attaches an event listener.

**Example:**
```javascript
SAT.on('#submit-btn', 'click', function(e) {
  e.preventDefault();
  console.log('Form submitted');
});
```
