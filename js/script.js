
// Initialize AOS Animation
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // Auto TOC Generation
    const blogContent = document.querySelector('.blog-content');
    const tocContainer = document.getElementById('toc-container');

    if (blogContent && tocContainer) {
        const headings = blogContent.querySelectorAll('h2, h3');

        if (headings.length > 0) {
            const tocList = document.createElement('ul');
            tocList.className = 'list-unstyled mb-0';

            headings.forEach((heading, index) => {
                const id = 'heading-' + index;
                heading.id = id;

                const li = document.createElement('li');
                li.className = 'mb-2';

                const a = document.createElement('a');
                a.href = '#' + id;
                a.textContent = heading.textContent;
                a.className = 'text-decoration-none text-muted hover-text-gold transition-colors';
                if (heading.tagName === 'H3') {
                    a.classList.add('ms-3', 'small');
                }

                li.appendChild(a);
                tocList.appendChild(li);
            });

            tocContainer.appendChild(tocList);
        } else {
            document.getElementById('toc-wrapper').style.display = 'none';
        }
    }
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

if (backToTopBtn) {
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
}

// Close Mobile Menu on Link Click
const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
const navbarCollapse = document.querySelector('.navbar-collapse');
if (navbarCollapse) {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });
}
