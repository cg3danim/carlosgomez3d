// FAQ toggle functionality
function toggleFAQ(item) {
    const isActive = item.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    
    // Open clicked item if it wasn't already open
    if (!isActive) {
        item.classList.add('active');
    }
}

// Make function available globally for onclick handlers
window.toggleFAQ = toggleFAQ;

export { toggleFAQ };
