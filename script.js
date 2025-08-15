// Emmy's Portfolio Site - Enhanced JavaScript
// Global navigation component loader
function loadNavigation() {
    // Add cache-busting timestamp to ensure fresh navigation
    const timestamp = new Date().getTime();
    console.log('Loading navigation with timestamp:', timestamp);
    
    fetch(`nav.html?t=${timestamp}`)
        .then(response => {
            console.log('Navigation response status:', response.status);
            return response.text();
        })
        .then(html => {
            console.log('Navigation HTML loaded, length:', html.length);
            console.log('Navigation content preview:', html.substring(0, 200));
            
            // Insert navigation at the beginning of the body
            document.body.insertAdjacentHTML('afterbegin', html);
            
            // Set active navigation state based on current page
            setActiveNavigation();
            
            // Initialize navigation functionality
            initNavigation();
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
            // Fallback: create basic navigation if file can't be loaded
            createFallbackNavigation();
        });
}

// Set active navigation state
function setActiveNavigation() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        if (page === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Determine current page
function getCurrentPage() {
    const pathname = window.location.pathname;
    const hash = window.location.hash;
    
    if (pathname.includes('career.html')) {
        return 'career';
    } else if (hash === '#testimonials') {
        return 'testimonials';
    } else if (hash === '#work') {
        return 'work';
    } else {
        return 'home';
    }
}

// Create fallback navigation if nav.html can't be loaded
function createFallbackNavigation() {
    const fallbackNav = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-brand">
                    <a href="index.html" class="brand-link">
                        <div class="logo-container">
                            <svg class="logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div class="logo-glow"></div>
                        </div>
                        <span class="brand-text">Emmy Yardley</span>
                    </a>
                </div>
                
                <div class="nav-links">
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="career.html" class="nav-link">Career</a>
                    <a href="testimonials.html" class="nav-link">Testimonials</a>
                    <a href="index.html#work" class="nav-link">Let's Work Together</a>
                </div>
                
                <button class="mobile-menu-btn" aria-label="Toggle menu">
                    <span class="hamburger"></span>
                    <span class="hamburger"></span>
                    <span class="hamburger"></span>
                </button>
            </div>
            
            <div class="mobile-menu">
                <a href="index.html" class="mobile-nav-link">Home</a>
                <a href="career.html" class="mobile-nav-link">Career</a>
                <a href="index.html#testimonials" class="mobile-nav-link">Testimonials</a>
                <a href="index.html#work" class="mobile-nav-link">Let's Work Together</a>
            </div>
        </nav>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', fallbackNav);
    initNavigation();
}

// Initialize navigation functionality
function initNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
}

// Load navigation when DOM is ready
document.addEventListener('DOMContentLoaded', loadNavigation);

// Update active navigation when hash changes
window.addEventListener('hashchange', setActiveNavigation);

// Enhanced functionality for the site
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 72; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Observe work cards
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Enhanced button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    }

    // Throttle scroll events for performance
    let ticking = false;
    function updateNavbar() {
        handleScroll();
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
});
