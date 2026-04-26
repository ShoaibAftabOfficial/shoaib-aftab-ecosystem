const fs = require('fs');
const path = require('path');
const { minify } = require('terser');

const srcDir = path.join(__dirname, '../src');
const distDir = path.join(__dirname, '../dist');

async function build() {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Very simple bundler approach for our modules
  const domCode = fs.readFileSync(path.join(srcDir, 'modules/dom.js'), 'utf8');
  const utilsCode = fs.readFileSync(path.join(srcDir, 'modules/utilities.js'), 'utf8');

  // Strip imports/exports to create a simple UMD/IIFE bundle
  const stripExport = (code) => code.replace(/export\s+function/g, 'function').replace(/import\s+.*?from\s+['"].*?['"];?/g, '');

  let bundleContent = `
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

  ${stripExport(domCode)}

  ${stripExport(utilsCode)}

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
