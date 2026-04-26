
/**
 * Shoaib Aftab Tech JS (SAT JS)
 * Version: 1.0.0
 * License: MIT
 * Copyright (c) 2024 Shoaib Aftab Tech
 */
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.SAT = factory());
})(this, (function() {
  'use strict';

  /**
 * SAT JS - Core Module
 */

const core = {
  version: '1.0.0',
  name: 'Shoaib Aftab Tech JS (SAT JS)'
};

  /**
 * SAT JS - Polyfills Module
 */

// Basic polyfill for Element.matches (for very old browsers)
function initPolyfills() {
  if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
  }
}

  /**
 * SAT JS - DOM Manipulation Module
 */

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function on(element, event, handler) {
  if (typeof element === 'string') {
    element = $(element);
  }
  if (element) {
    element.addEventListener(event, handler);
  }
}

function addClass(element, className) {
  if (typeof element === 'string') {
    element = $(element);
  }
  if (element) {
    element.classList.add(className);
  }
}

function removeClass(element, className) {
  if (typeof element === 'string') {
    element = $(element);
  }
  if (element) {
    element.classList.remove(className);
  }
}

function toggleClass(element, className) {
  if (typeof element === 'string') {
    element = $(element);
  }
  if (element) {
    element.classList.toggle(className);
  }
}

  /**
 * SAT JS - Selectors Module
 */


function siblings(element) {
  if (typeof element === 'string') element = $(element);
  if (!element || !element.parentNode) return [];
  return Array.prototype.filter.call(element.parentNode.children, function(child) {
    return child !== element;
  });
}

function closest(element, selector) {
  if (typeof element === 'string') element = $(element);
  if (!element) return null;
  return element.closest(selector);
}

  /**
 * SAT JS - Events Module
 */


function off(element, event, handler) {
  if (typeof element === 'string') {
    element = $(element);
  }
  if (element) {
    element.removeEventListener(event, handler);
  }
}

function trigger(element, eventType, detail = null) {
  if (typeof element === 'string') {
    element = $(element);
  }
  if (element) {
    const event = new CustomEvent(eventType, { detail });
    element.dispatchEvent(event);
  }
}

  /**
 * SAT JS - AJAX Module
 */

async function get(url, headers = {}) {
  const response = await fetch(url, { method: 'GET', headers });
  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  return await response.json();
}

async function post(url, data = {}, headers = {}) {
  const mergedHeaders = { 'Content-Type': 'application/json', ...headers };
  const response = await fetch(url, {
    method: 'POST',
    headers: mergedHeaders,
    body: JSON.stringify(data)
  });
  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  return await response.json();
}

  /**
 * SAT JS - Storage Module
 */

const local = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    const val = localStorage.getItem(key);
    try { return JSON.parse(val); } catch(e) { return val; }
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  }
};

const session = {
  set(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    const val = sessionStorage.getItem(key);
    try { return JSON.parse(val); } catch(e) { return val; }
  },
  remove(key) {
    sessionStorage.removeItem(key);
  },
  clear() {
    sessionStorage.clear();
  }
};

  /**
 * SAT JS - Cookies Module
 */
function setCookie(name, value, days = 7) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function removeCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

  /**
 * SAT JS - URL Module
 */
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function getAllQueryParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const params = {};
  for (const [key, value] of urlParams.entries()) {
    params[key] = value;
  }
  return params;
}

  /**
 * SAT JS - String Utilities
 */

function toTitleCase(str) {
  if (!str) return '';
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function slugify(str) {
  if (!str) return '';
  return str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

  /**
 * SAT JS - Number Module
 */
function formatCurrency(num, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(num);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

  /**
 * SAT JS - Array Module
 */
function unique(arr) {
  return [...new Set(arr)];
}

function shuffle(arr) {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

  /**
 * SAT JS - Object Module
 */
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  return JSON.parse(JSON.stringify(obj));
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

  /**
 * SAT JS - Date Utilities
 */

function format(date, locale = 'en-US') {
  const d = new Date(date);
  return new Intl.DateTimeFormat(locale).format(d);
}

function isPast(date) {
  return new Date(date).getTime() < new Date().getTime();
}

  /**
 * SAT JS - Validation Module
 */

function isEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function isURL(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

function isEmpty(val) {
  return val === undefined || val === null || val === '';
}

  /**
 * SAT JS - Animation Module
 */


function fadeIn(element, duration = 400) {
  if (typeof element === 'string') element = $(element);
  if (!element) return;
  element.style.opacity = 0;
  element.style.display = element.dataset.display || 'block';

  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    element.style.opacity = Math.min(progress / duration, 1);
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

function fadeOut(element, duration = 400) {
  if (typeof element === 'string') element = $(element);
  if (!element) return;
  element.style.opacity = 1;

  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    element.style.opacity = Math.max(1 - (progress / duration), 0);
    if (progress < duration) {
      window.requestAnimationFrame(step);
    } else {
      element.dataset.display = window.getComputedStyle(element).display;
      element.style.display = 'none';
    }
  }
  window.requestAnimationFrame(step);
}

  /**
 * SAT JS - Utilities Module
 */

function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function capitalize(str) {
  if (typeof str !== 'string' || !str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function uuid() {
  return 'xxxx-xxxx-4xxx-yxxx-xxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

  /**
 * SAT JS - i18n & RTL Support
 */

function setRTL() {
  document.documentElement.setAttribute('dir', 'rtl');
}

function setLTR() {
  document.documentElement.setAttribute('dir', 'ltr');
}


  // Initialize polyfills
  initPolyfills();

  const SAT = {
    core,
    dom: { $, $$, addClass, removeClass, toggleClass },
    selectors: { siblings, closest },
    events: { on, off, trigger },
    ajax: { get, post },
    storage: { local, session },
    cookies: { setCookie, getCookie, removeCookie },
    url: { getQueryParam, getAllQueryParams },
    string: { capitalize, toTitleCase, slugify },
    number: { formatCurrency, random },
    array: { unique, shuffle, chunk },
    object: { deepClone, isEmptyObject },
    date: { format, isPast },
    validation: { isEmail, isURL, isEmpty },
    animation: { fadeIn, fadeOut },
    utilities: { isObject, debounce, uuid },
    i18n: { setRTL, setLTR }
  };

  return SAT;
}));
