# DOM Manipulation

SAT JS makes DOM selection and event handling extremely simple.

## Selection

### `SAT.dom.$(selector)`
Selects the first matching element in the DOM (wrapper for `querySelector`).

**Example:**
```javascript
const header = SAT.dom.$('.site-header');
console.log(header);
```

### `SAT.dom.$$(selector)`
Selects all matching elements (wrapper for `querySelectorAll`).

**Example:**
```javascript
const items = SAT.dom.$$('.list-item');
items.forEach(item => {
  item.style.color = 'red';
});
```

## Classes

### `SAT.dom.addClass(element, className)`
Adds a class to a specific element. You can pass either a DOM element or a string selector.

**Example:**
```javascript
SAT.dom.addClass('#my-div', 'sat-bg-primary-500');
```

### `SAT.dom.removeClass(element, className)`
Removes a class.

**Example:**
```javascript
SAT.dom.removeClass('#my-div', 'sat-hidden');
```

### `SAT.dom.toggleClass(element, className)`
Toggles a class.

**Example:**
```javascript
SAT.dom.toggleClass('#my-div', 'active');
```

## Events

### `SAT.events.on(element, event, handler)`
Attaches an event listener.

**Example:**
```javascript
SAT.events.on('#submit-btn', 'click', function(e) {
  e.preventDefault();
  console.log('Form submitted');
});
```
