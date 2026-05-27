/* ===========================
   LANGUAGE SWITCHER
   =========================== */

document.addEventListener('DOMContentLoaded', function () {
    const langLinks = document.querySelectorAll('.lang-link');

    // Initialize language from localStorage or default to English
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    // Language switcher listeners
    langLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});

function setLanguage(lang) {
    // Update active state
    const langLinks = document.querySelectorAll('.lang-link');
    langLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-lang') === lang) {
            link.classList.add('active');
        }
    });

    // Save to localStorage
    localStorage.setItem('language', lang);

    // Here you would implement actual language switching logic
    // For now, we'll just update the document language attribute
    document.documentElement.lang = lang;

    // You can add translation logic here
    // For example, you could have a translations object and update text content
    console.log('Language set to:', lang);
}

/* ===========================
   DARK MODE THEME TOGGLE
   =========================== */

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');

    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Theme toggle button listener
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
});

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update meta theme color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#141925' : '#ffffff');
    }
}

/* ===========================
   NAVIGATION & HAMBURGER MENU
   =========================== */

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideNav = navMenu?.contains(event.target);
        const isClickInsideHamburger = hamburger?.contains(event.target);

        if (!isClickInsideNav && !isClickInsideHamburger && navMenu?.classList.contains('active')) {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        }
    });

    // Update active navigation link
    updateActiveNavLink();
    window.addEventListener('hashchange', updateActiveNavLink);
});

function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/* ===========================
   SERVICE TOGGLES
   =========================== */

function toggleService(index) {
    const serviceContent = document.getElementById(`service-${index}`);
    const toggleBtn = event.target;

    if (serviceContent) {
        serviceContent.classList.toggle('open');
        toggleBtn.classList.toggle('open');
    }
}

/* ===========================
   FORM HANDLING
   =========================== */

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

function handleFormSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        company: formData.get('company'),
        industry: formData.get('industry'),
        inquiryType: formData.get('inquiry-type'),
        budget: formData.get('budget'),
        timeline: formData.get('timeline'),
        message: formData.get('message'),
        subscribe: formData.get('subscribe') ? true : false,
        timestamp: new Date().toISOString()
    };

    // Validate required fields
    if (!validateForm(data)) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }

    // Validate email
    if (!isValidEmail(data.email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Here you would typically send the data to a server
    // For now, we'll store it locally and show a success message
    console.log('Form submitted with data:', data);

    // Show success message
    showFormMessage(
        'Thank you for your inquiry! We\'ll review your information and get back to you within 24 hours. Check your email for confirmation.',
        'success'
    );

    // Reset form
    event.target.reset();

    // Scroll to message
    const messageElement = document.getElementById('formMessage');
    if (messageElement) {
        messageElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function validateForm(data) {
    // Check required fields
    const requiredFields = ['name', 'email', 'company', 'industry', 'inquiryType', 'timeline', 'message'];

    for (let field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            return false;
        }
    }

    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(message, type) {
    const messageElement = document.getElementById('formMessage');

    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = `form-message ${type}`;
        messageElement.style.display = 'block';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 5000);
    }
}

/* ===========================
   SCROLL ANIMATIONS
   =========================== */

// Add smooth scroll behavior and fade-in animations
document.addEventListener('DOMContentLoaded', function () {
    // Observe elements for fade-in animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    const animateElements = document.querySelectorAll(
        '.service-card, .stat-card, .case-study, .resource-card, .faq-item'
    );

    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

/* ===========================
   UTILITY FUNCTIONS
   =========================== */

// Smooth scroll for anchor links
document.addEventListener('click', function (event) {
    const link = event.target.closest('a[href^="#"]');

    if (link) {
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading state to buttons
document.addEventListener('click', function (event) {
    const button = event.target.closest('button[type="submit"]');

    if (button && !button.classList.contains('loading')) {
        button.classList.add('loading');
        button.textContent = 'Sending...';

        // Reset after 2 seconds (or when response comes back)
        setTimeout(() => {
            if (button.classList.contains('loading')) {
                button.classList.remove('loading');
                button.textContent = 'Submit Inquiry';
            }
        }, 2000);
    }
});

/* ===========================
   LOCAL STORAGE FOR FORM
   =========================== */

// Save form progress locally
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        // Load saved data
        loadFormData();

        // Save data on input
        contactForm.addEventListener('input', function () {
            saveFormData();
        });

        // Clear saved data on successful submit
        contactForm.addEventListener('submit', function () {
            setTimeout(() => {
                localStorage.removeItem('contactFormData');
            }, 500);
        });
    }
});

function saveFormData() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        localStorage.setItem('contactFormData', JSON.stringify(data));
    }
}

function loadFormData() {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
        const data = JSON.parse(savedData);
        const contactForm = document.getElementById('contactForm');

        if (contactForm) {
            for (let key in data) {
                const field = contactForm.querySelector(`[name="${key}"]`);
                if (field) {
                    field.value = data[key];
                }
            }
        }
    }
}

/* ===========================
   TRACKING & ANALYTICS
   =========================== */

// Track user interactions (optional - can be connected to analytics service)
document.addEventListener('click', function (event) {
    const link = event.target.closest('a');
    const button = event.target.closest('button');

    if (link && link.href) {
        trackEvent('link_click', {
            href: link.href,
            text: link.textContent
        });
    }

    if (button) {
        trackEvent('button_click', {
            text: button.textContent
        });
    }
});

function trackEvent(eventName, eventData) {
    // This would connect to your analytics service
    // For now, just log to console in development
    if (window.location.hostname === 'localhost') {
        console.log(`Event: ${eventName}`, eventData);
    }
}

/* ===========================
   ACCESSIBILITY ENHANCEMENTS
   =========================== */

// Enhance keyboard navigation
document.addEventListener('keydown', function (event) {
    // Close mobile menu on Escape
    if (event.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        if (navMenu?.classList.contains('active')) {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        }
    }
});

// Focus management for mobile menu
document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navMenu && navLinks.length > 0) {
        // Set first link as tab target when menu opens
        const firstLink = navLinks[0];
        const lastLink = navLinks[navLinks.length - 1];

        firstLink.addEventListener('focus', function () {
            // Ensure menu is visible
        });
    }
});
