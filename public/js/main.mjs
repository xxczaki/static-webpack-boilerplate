'use strict';

// Import css
import 'modern-normalize/modern-normalize.css';
import '../css/main.css';

// Register service worker
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js').then(registration => {
			console.log('SW registered:', registration);
		}).catch(error => {
			console.log('SW registration failed:', error);
		});
	});
}

// Counter
const element = document.querySelector('#btn');

element.addEventListener('click', () => {
	const counter = document.querySelector('#counter');

	counter.textContent++;
});

// Devtools console message ✨
console.log('%cHello World!', 'color: black; font-size: 25px; font-weight: bold;');
