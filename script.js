
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add a shadow to the navbar on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(26, 26, 26, 0.9)';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            nav.style.background = 'rgba(44, 44, 44, 0.8)';
            nav.style.boxShadow = 'none';
        }
    });
});
