
/**
 * SAT JS Framework
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


  const SAT = {
    $,
    $$,
    on,
    addClass,
    removeClass,
    toggleClass,
    isObject,
    debounce,
    capitalize,
    uuid
  };

  return SAT;
}));
