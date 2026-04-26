// Import SAT CSS
import './libs/sat-css.min.css';

// Import Custom Styles overriding anything if strictly needed
import './style.css';

// The SAT JS library registers globally as window.SAT based on our IIFE build
import './libs/sat-js.min.js';

// Init SAT JS specific logics
document.addEventListener('DOMContentLoaded', () => {
    console.log('SAT CSS & JS initialized.');

    // Register PWA Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js', { scope: '/' });
        });
    }
});
