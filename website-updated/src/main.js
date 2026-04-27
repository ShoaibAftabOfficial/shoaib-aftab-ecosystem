// Import Shoaib Aftab CSS
import './libs/sa.min.css';

// Import Custom Styles overriding anything if strictly needed
import './style.css';

// The Shoaib Aftab JS library registers globally as window.SA based on our IIFE build
import './libs/sa.min.js';

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
