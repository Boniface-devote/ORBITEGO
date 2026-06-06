// Mobile menu toggle
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Close mobile menu when a link is clicked
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      if (hamburger) hamburger.classList.remove('active');
    });
  });
}

// Smooth scrolling for anchor links
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Navbar scroll effect
function navbarScrollEffect() {
  const nav = document.querySelector('nav');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      nav.style.borderBottomColor = 'rgba(42, 54, 71, 0.5)';
    } else {
      nav.style.borderBottomColor = 'rgba(42, 54, 71, 1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

// Form submission handler
function handleFormSubmit() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      // Show success message (in production, send to backend)
      console.log('Form submitted:', data);
      
      // Clear form
      form.reset();
      
      // Show success message
      const message = document.createElement('div');
      message.className = 'success-message';
      message.textContent = 'Thank you! We will get back to you soon.';
      message.style.cssText = `
        background-color: #10b981;
        color: white;
        padding: 1rem;
        border-radius: 6px;
        margin-top: 1rem;
        text-align: center;
      `;
      
      form.parentNode.insertBefore(message, form.nextSibling);
      
      // Remove message after 5 seconds
      setTimeout(() => {
        message.remove();
      }, 5000);
    });
  });
}

// Intersection Observer for fade-in animations
function initScrollAnimations() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll('.service-card, .portfolio-item, .pillar-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
  toggleMobileMenu();
  smoothScroll();
  navbarScrollEffect();
  handleFormSubmit();
  initScrollAnimations();
});

// Navigation active state
function setActiveNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentUrl = window.location.pathname;

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentUrl || 
        (currentUrl === '/' && link.getAttribute('href') === 'index.html')) {
      link.style.color = 'var(--accent-color)';
      link.style.borderBottom = '2px solid var(--accent-color)';
    }
  });
}

// Run on page load
window.addEventListener('load', setActiveNavigation);
