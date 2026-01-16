// Toggle expertise items
function toggleExpertise(item) {
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.expertise-item').forEach(i => i.classList.remove('active'));
    if (!isActive) {
        item.classList.add('active');
    }
}

// Make function available globally for onclick handlers
window.toggleExpertise = toggleExpertise;

export { toggleExpertise };
