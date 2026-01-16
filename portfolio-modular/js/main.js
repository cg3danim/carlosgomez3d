// Main initialization file that imports and initializes all modules
import { initScrollFeatures } from './scroll.js';
import { initStatsCounter } from './stats.js';
import { initAboutSection } from './about.js';
import './expertise.js'; // Just import to make toggleExpertise available globally
import './faq.js'; // Import to make toggleFAQ available globally

// Initialize all features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initScrollFeatures();
    initStatsCounter();
    initAboutSection();
});
