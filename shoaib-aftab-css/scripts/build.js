const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');

const srcDir = path.join(__dirname, '../src');
const distDir = path.join(__dirname, '../dist');
const modulesDir = path.join(srcDir, 'modules');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Ensure clean build each time
if (fs.existsSync(path.join(distDir, 'shoaib-aftab.min.css'))) {
  fs.unlinkSync(path.join(distDir, 'shoaib-aftab.min.css'));
}

const cssOrder = [
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

let finalCSS = `/*
 * Shoaib Aftab CSS Framework
 * Version: 1.0.0
 * Description: A modern, lightweight, and self-contained CSS framework built for production.
 * License: MIT
 * Copyright (c) 2024 Shoaib Aftab Tech
 */\n\n`;

for (const file of cssOrder) {
  const filePath = path.join(modulesDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    finalCSS += content + '\n';
  } else {
    console.warn(`Warning: ${file} not found in modules`);
  }
}

// Save non-minified
fs.writeFileSync(path.join(distDir, 'shoaib-aftab.css'), finalCSS);

// Minify
const minified = new CleanCSS().minify(finalCSS);

// Save minified
fs.writeFileSync(path.join(distDir, 'shoaib-aftab.min.css'), `/* Shoaib Aftab CSS Framework v1.0.0 | MIT License | (c) 2024 Shoaib Aftab Tech */\n` + minified.styles);

console.log('Build completed successfully!');
