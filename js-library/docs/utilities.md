# Utilities

Helper functions to make daily JavaScript tasks easier.

## Data Types

### `SAT.utilities.isObject(item)`
Returns `true` if the item is a standard object (and not an array or null).

**Example:**
```javascript
SAT.utilities.isObject({ name: 'SAT' }); // true
SAT.utilities.isObject(['apple', 'banana']); // false
```

## Functions

### `SAT.utilities.debounce(func, wait)`
Delays the execution of a function until after `wait` milliseconds have elapsed since the last time it was invoked. Extremely useful for scroll or resize events.

**Example:**
```javascript
const handleResize = SAT.utilities.debounce(() => {
  console.log('Window resized');
}, 250);

window.addEventListener('resize', handleResize);
```

## Strings

### `SAT.string.capitalize(str)`
Capitalizes the first letter of a string.

**Example:**
```javascript
SAT.string.capitalize('shoaib'); // Returns 'Shoaib'
```

### `SAT.utilities.uuid()`
Generates a random UUID v4 string. Useful for creating unique IDs for DOM elements or list keys.

**Example:**
```javascript
const id = SAT.utilities.uuid();
// e.g., 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
```
