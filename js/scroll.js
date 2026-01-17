// Scroll Progress Bar
function initScrollProgress() {
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('scrollProgress').style.width = scrolled + '%';
    });
}

// Fade in elements on scroll
function initFadeInObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#contact') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else if (href === '#contact') {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Back to top functionality
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Handle smooth scroll on page load if hash is present
function handleHashOnLoad() {
    // Check both native hash and our custom targetHash from the head script
    const hash = window.location.hash || window.targetHash;
    if (hash) {
        try {
            const target = document.querySelector(hash);
            if (target) {
                // Ensure scroll restoration is manual
                if ('scrollRestoration' in history) {
                    history.scrollRestoration = 'manual';
                }

                const scrollDown = () => {
                    window.scrollTo(0, 0);
                    setTimeout(() => {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                        // Restore hash to URL if it was moved to targetHash
                        if (window.targetHash) {
                            history.replaceState(null, null, window.location.pathname + window.location.search + window.targetHash);
                            window.targetHash = null;
                        }
                    }, 500);
                };

                if (document.readyState === 'complete') {
                    scrollDown();
                } else {
                    window.addEventListener('load', scrollDown);
                }
            }
        } catch (e) {
            console.error("Invalid hash target", e);
        }
    }
}

// Initialize all scroll-related functions
function initScrollFeatures() {
    initScrollProgress();
    initFadeInObserver();
    initSmoothScroll();
    initBackToTop();
    handleHashOnLoad();
}

export { initScrollFeatures, initScrollProgress, initFadeInObserver, initSmoothScroll, initBackToTop };
