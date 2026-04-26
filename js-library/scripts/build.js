const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

const srcDir = path.join(__dirname, '../src');
const distDir = path.join(__dirname, '../dist');

async function build() {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Read code
  const coreCode = fs.readFileSync(path.join(srcDir, 'modules/core.js'), 'utf8');
  const domCode = fs.readFileSync(path.join(srcDir, 'modules/dom.js'), 'utf8');
  const eventsCode = fs.readFileSync(path.join(srcDir, 'modules/events.js'), 'utf8');
  const ajaxCode = fs.readFileSync(path.join(srcDir, 'modules/ajax.js'), 'utf8');
  const selectorsCode = fs.readFileSync(path.join(srcDir, 'modules/selectors.js'), 'utf8');
  const storageCode = fs.readFileSync(path.join(srcDir, 'modules/storage.js'), 'utf8');
  const cookiesCode = fs.readFileSync(path.join(srcDir, 'modules/cookies.js'), 'utf8');
  const urlCode = fs.readFileSync(path.join(srcDir, 'modules/url.js'), 'utf8');
  const stringCode = fs.readFileSync(path.join(srcDir, 'modules/string.js'), 'utf8');
  const numberCode = fs.readFileSync(path.join(srcDir, 'modules/number.js'), 'utf8');
  const arrayCode = fs.readFileSync(path.join(srcDir, 'modules/array.js'), 'utf8');
  const objectCode = fs.readFileSync(path.join(srcDir, 'modules/object.js'), 'utf8');
  const dateCode = fs.readFileSync(path.join(srcDir, 'modules/date.js'), 'utf8');
  const validationCode = fs.readFileSync(path.join(srcDir, 'modules/validation.js'), 'utf8');
  const animationCode = fs.readFileSync(path.join(srcDir, 'modules/animation.js'), 'utf8');
  const utilsCode = fs.readFileSync(path.join(srcDir, 'modules/utilities.js'), 'utf8');
  const i18nCode = fs.readFileSync(path.join(srcDir, 'modules/i18n.js'), 'utf8');
  const polyfillsCode = fs.readFileSync(path.join(srcDir, 'modules/polyfills.js'), 'utf8');

  // Strip exports and imports
  const stripExport = (code) => {
    return code
      .replace(/export\s+async\s+function/g, 'async function')
      .replace(/export\s+function/g, 'function')
      .replace(/export\s+const/g, 'const')
      .replace(/export\s+let/g, 'let')
      .replace(/import\s+.*?from\s+['"].*?['"];?/g, '');
  };

  let bundleContent = `
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

  ${stripExport(coreCode)}
  ${stripExport(polyfillsCode)}
  ${stripExport(domCode)}
  ${stripExport(selectorsCode)}
  ${stripExport(eventsCode)}
  ${stripExport(ajaxCode)}
  ${stripExport(storageCode)}
  ${stripExport(cookiesCode)}
  ${stripExport(urlCode)}
  ${stripExport(stringCode)}
  ${stripExport(numberCode)}
  ${stripExport(arrayCode)}
  ${stripExport(objectCode)}
  ${stripExport(dateCode)}
  ${stripExport(validationCode)}
  ${stripExport(animationCode)}
  ${stripExport(utilsCode)}
  ${stripExport(i18nCode)}

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
`;

  // Write unminified
  fs.writeFileSync(path.join(distDir, 'sat-js.js'), bundleContent);

  // Write minified
  try {
    const minified = await minify(bundleContent, {
      compress: true,
      mangle: true
    });
    fs.writeFileSync(path.join(distDir, 'sat-js.min.js'), minified.code);
    console.log('Build completed successfully.');
  } catch (err) {
    console.error('Build failed', err);
  }
}

build();
