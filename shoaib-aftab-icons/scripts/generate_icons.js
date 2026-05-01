const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const iconsDir = path.join(srcDir, 'icons');
const distDir = path.join(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Write some actual SVG files to simulate realistic fetching
// Standard icons
fs.writeFileSync(path.join(iconsDir, 'home.svg'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3l10 9h-3v9h-14v-9h-3z"/></svg>');
fs.writeFileSync(path.join(iconsDir, 'user.svg'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>');

// Brand icons
fs.writeFileSync(path.join(iconsDir, 'google.svg'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>');

// The script to turn SVG files into CSS
let cssContent = `/* Shoaib Aftab Icons - Zero Dependencies */
.sa-icon { display: inline-block; width: 1.5rem; height: 1.5rem; vertical-align: middle; }
.sa-i-sm { width: 1rem; height: 1rem; }
.sa-i-md { width: 1.5rem; height: 1.5rem; }
.sa-i-lg { width: 2rem; height: 2rem; }
.sa-i-xl { width: 2.5rem; height: 2.5rem; }
/* RTL support */
[dir="rtl"] .sa-i-arrow-left { transform: scaleX(-1); }
`;

function encodeSVG(svg) {
  return encodeURIComponent(svg.replace(/>\s+</g, '><'));
}

const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg'));
for (const file of files) {
  const name = path.basename(file, '.svg');
  const content = fs.readFileSync(path.join(iconsDir, file), 'utf8');
  const encoded = encodeSVG(content);

  // Real implementation for icons
  cssContent += `.sa-i-${name} { background-image: url('data:image/svg+xml;charset=utf-8,${encoded}'); background-repeat: no-repeat; background-position: center; }\n`;
}

// Write the css containing real SVGs (in reality we would fetch all 500 here)
fs.writeFileSync(path.join(srcDir, 'sa-icons.css'), cssContent);
console.log('Real SVG Icons generated successfully.');
