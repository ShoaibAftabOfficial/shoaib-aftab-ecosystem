/**
 * SAT JS - Main Entry Point
 */

import { $, $$, on, addClass, removeClass, toggleClass } from './modules/dom.js';
import { isObject, debounce, capitalize, uuid } from './modules/utilities.js';

const SAT = {
  // DOM
  $,
  $$,
  on,
  addClass,
  removeClass,
  toggleClass,

  // Utilities
  isObject,
  debounce,
  capitalize,
  uuid
};

// Export individual functions
export { $, $$, on, addClass, removeClass, toggleClass, isObject, debounce, capitalize, uuid };

// Default export
export default SAT;

// Make it available globally in browser environments
if (typeof window !== 'undefined') {
  window.SAT = SAT;
}
