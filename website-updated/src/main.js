import './libs/sa-icons.css';
// Import Shoaib Aftab CSS
import './libs/shoaib-aftab.min.css';

// Import Custom Styles overriding anything if strictly needed

// The Shoaib Aftab JS library registers globally as window.SA based on our IIFE build
import './libs/shoaib-aftab.min.js';

// Init Shoaib Aftab JS specific logics
document.addEventListener('DOMContentLoaded', () => {
    console.log('Shoaib Aftab CSS & JS initialized.');

    // Register PWA Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js', { scope: '/' });
        });
    }
});
