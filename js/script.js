// ========================================
// MODERN AI PORTFOLIO - SCRIPT.JS
// ========================================

// Particle Background Animation
class ParticleBackground {
    constructor() {
        this.canvas = document.getElementById('particle-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 100;
        this.mouse = { x: null, y: null, radius: 150 };

        this.init();
        this.animate();
        this.addEventListeners();
    }

    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((particle, i) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off edges
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.mouse.radius) {
                particle.x -= dx / distance * 2;
                particle.y -= dy / distance * 2;
            }

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(0, 217, 255, 0.5)';
            this.ctx.fill();

            // Connect particles
            this.particles.forEach((particle2, j) => {
                if (i !== j) {
                    const dx2 = particle.x - particle2.x;
                    const dy2 = particle.y - particle2.y;
                    const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

                    if (distance2 < 100) {
                        this.ctx.beginPath();
                        this.ctx.strokeStyle = `rgba(0, 217, 255, ${0.2 - distance2 / 500})`;
                        this.ctx.lineWidth = 0.5;
                        this.ctx.moveTo(particle.x, particle.y);
                        this.ctx.lineTo(particle2.x, particle2.y);
                        this.ctx.stroke();
                    }
                }
            });
        });
    }

    addEventListeners() {
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });

        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
    }
}

// Custom Cursor
class CustomCursor {
    constructor() {
        this.cursor = document.querySelector('.cursor');
        this.follower = document.querySelector('.cursor-follower');
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            this.follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });

        // Enlarge on hover
        document.querySelectorAll('a, button, .project-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.follower.style.width = '60px';
                this.follower.style.height = '60px';
            });

            el.addEventListener('mouseleave', () => {
                this.follower.style.width = '40px';
                this.follower.style.height = '40px';
            });
        });
    }
}

// Typing Animation
class TypingAnimation {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];

        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.speed;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = 2000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.fade-in');
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, this.observerOptions);

        this.elements.forEach(el => observer.observe(el));
    }
}

// Counter Animation
class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    this.animateCounter(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, { threshold: 0.5 });

        this.counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
}

// Smooth Scroll
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Navbar Scroll Effect
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                this.navbar.style.background = 'rgba(10, 10, 15, 0.8)';
            } else {
                this.navbar.style.background = 'rgba(10, 10, 15, 0.95)';
                this.navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
            }

            lastScroll = currentScroll;
        });
    }
}

// Mobile Menu Toggle
class MobileMenu {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        if (!this.hamburger) return;

        this.hamburger.addEventListener('click', () => {
            this.navMenu.classList.toggle('active');
            this.hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu.classList.remove('active');
                this.hamburger.classList.remove('active');
            });
        });
    }
}

// Easter Egg - Konami Code
class KonamiCode {
    constructor() {
        this.pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        this.current = 0;
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            if (e.key === this.pattern[this.current]) {
                this.current++;

                if (this.current === this.pattern.length) {
                    this.activate();
                    this.current = 0;
                }
            } else {
                this.current = 0;
            }
        });
    }

    activate() {
        document.body.style.filter = 'hue-rotate(180deg)';
        alert('🎮 Konami Code Activated! You found the secret!');
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 5000);
    }
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new ParticleBackground();
    new CustomCursor();

    // Typing animation
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        new TypingAnimation(
            typingElement,
            ['AI Engineer', 'ML Developer', 'Data Scientist', 'Problem Solver'],
            150
        );
    }

    new ScrollAnimations();
    new CounterAnimation();
    new SmoothScroll();
    new NavbarScroll();
    new MobileMenu();
    new KonamiCode();

    // Add project card tilt effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // Add skill tag hover effect
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    console.log('%c🚀 Portfolio Loaded Successfully!', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
    console.log('%c💡 Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #8b5cf6; font-size: 14px;');
});
