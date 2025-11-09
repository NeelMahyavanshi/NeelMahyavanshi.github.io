
// Portfolio JavaScript - Enhanced for performance and accessibility

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // 1. Smooth scroll for navigation links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // 2. Navbar scroll effects
    const nav = document.querySelector('nav');
    const scrollThreshold = 50;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > scrollThreshold;
        nav.style.background = scrolled ? 'rgba(26, 26, 31, 0.98)' : 'rgba(26, 26, 31, 0.95)';
        nav.style.boxShadow = scrolled ? '0 4px 20px rgba(0, 217, 255, 0.1)' : 'none';
    });

    // 3. Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    });

    // 4. Intersection Observer for fade-in animations (performance-friendly)
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

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // 5. Project card touch support for mobile
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        });
        
        card.addEventListener('touchend', function() {
            setTimeout(() => this.classList.remove('touch-active'), 600);
        });
    });

    // 6. Optional: Add loading animation removal
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
    
    // Set initial body opacity for fade-in
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
});
