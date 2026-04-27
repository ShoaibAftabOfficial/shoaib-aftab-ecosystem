const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');

const srcDir = path.join(__dirname, '../src/modules');
const distDir = path.join(__dirname, '../dist');

// Define the order of imports to ensure proper cascading
const modules = [
  'variables.css',
  'reset.css',
  'colors.css',
  'spacing.css',
  'typography.css',
  'layout.css',
  'sizing.css',
  'borders.css',
  'effects.css',
  'positioning.css',
  'components.css',
  'utilities.css',
  'animations.css',
  'rtl.css',
  'print.css'
];

let cssContent = `/*
 * Shoaib Aftab CSS Framework
 * Version: 1.0.0
 * License: MIT
 * Copyright (c) 2024 Shoaib Aftab Tech
 */\n\n`;

modules.forEach(mod => {
  const modPath = path.join(srcDir, mod);
  if (fs.existsSync(modPath)) {
    cssContent += fs.readFileSync(modPath, 'utf8') + '\n';
  }
});

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Write the unminified file
const unminifiedPath = path.join(distDir, 'sa.css');
fs.writeFileSync(unminifiedPath, cssContent);

// Minify the CSS
const minified = new CleanCSS({
  level: 2,
  format: 'keep-breaks' // For better debugging while minified, or remove for max minification
}).minify(cssContent);

// Also create a fully compressed version
const fullyMinified = new CleanCSS({
  level: 2
}).minify(cssContent);

// Write the minified file
const minifiedPath = path.join(distDir, 'sa.min.css');
fs.writeFileSync(minifiedPath, `/* Shoaib Aftab CSS v1.0.0 | MIT License | Copyright (c) 2024 Shoaib Aftab Tech */\n${fullyMinified.styles}`);

console.log('Build completed successfully.');
console.log(`Original Size: ${(cssContent.length / 1024).toFixed(2)} KB`);
console.log(`Minified Size: ${(fullyMinified.styles.length / 1024).toFixed(2)} KB`);
