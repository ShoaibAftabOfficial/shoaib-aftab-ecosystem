# Events Module

SAT JS provides easy-to-use methods for handling events.

### `SAT.events.on(element, event, handler)`
Attaches an event listener to an element.

**Example:**
```javascript
SAT.events.on('#submit-btn', 'click', function(e) {
  e.preventDefault();
  console.log('Form submitted');
});
```

### `SAT.events.off(element, event, handler)`
Removes an event listener from an element.

**Example:**
```javascript
function handleClick() { console.log('Clicked'); }
SAT.events.on('#btn', 'click', handleClick);
SAT.events.off('#btn', 'click', handleClick);
```

### `SAT.events.trigger(element, eventType, detail)`
Triggers a custom event on an element.

**Example:**
```javascript
SAT.events.trigger('#my-div', 'custom:refresh', { id: 123 });
```
