// Scroll reveal animation for About heading - WORD BY WORD
function initScrollReveal() {
    const aboutHeading = document.getElementById('about-heading');
    
    if (!aboutHeading) {
        console.log('About heading not found');
        return;
    }
    
    // Split text into words and wrap each in a span
    const text = aboutHeading.textContent;
    const words = text.split(' ');
    aboutHeading.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
    
    const wordSpans = aboutHeading.querySelectorAll('span');
    
    function updateAboutHeadingColor() {
        const rect = aboutHeading.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Start revealing when heading starts entering viewport from bottom
        const startPoint = windowHeight * 0.8;
        // Finish revealing when heading is centered
        const endPoint = windowHeight * 0.3;
        
        const currentTop = rect.top;
        
        // Calculate overall progress
        let overallProgress = 0;
        
        if (currentTop >= endPoint && currentTop <= startPoint) {
            overallProgress = (startPoint - currentTop) / (startPoint - endPoint);
            overallProgress = Math.max(0, Math.min(1, overallProgress));
        } else if (currentTop < endPoint) {
            overallProgress = 1;
        }
        
        // Reveal words progressively based on scroll progress
        const totalWords = wordSpans.length;
        const wordsToReveal = Math.floor(overallProgress * totalWords);
        
        wordSpans.forEach((span, index) => {
            if (index < wordsToReveal) {
                span.classList.add('revealed');
            } else {
                span.classList.remove('revealed');
            }
        });
    }
    
    window.addEventListener('scroll', updateAboutHeadingColor);
    updateAboutHeadingColor(); // Initial call
}

// Initialize after DOM is ready
function initAboutSection() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollReveal);
    } else {
        initScrollReveal();
    }
}

export { initAboutSection, initScrollReveal };
