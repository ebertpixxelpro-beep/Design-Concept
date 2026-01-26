// Initialize AOS Animation
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled', 'shadow-sm');
    } else {
        navbar.classList.remove('scrolled', 'shadow-sm');
    }
});

// Back to Top Button Logic
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Close Mobile Menu on Link Click
const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
const navbarCollapse = document.querySelector('.navbar-collapse');
const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            bsCollapse.hide();
        }
    });
});
