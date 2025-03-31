document.addEventListener('DOMContentLoaded', function () {
    // Load common components (navbar & footer)
    loadComponent('navbar.html', 'navbar-container');
    loadComponent('footer.html', 'footer-section');

    // Load sections dynamically (only if their container exists)
    loadComponent('features.html', 'features-section');
    loadComponent('services.html', 'services-section');
    loadComponent('forums.html', 'forums-section');
    loadComponent('testimonials.html', 'testimonials-section');
    loadComponent('about.html', 'about-section');
    loadComponent('contact.html', 'contact-section');

    // Function to load an HTML component into a specific container
    function loadComponent(file, containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            fetch(file)
                .then(response => response.text())
                .then(html => {
                    container.innerHTML = html;
                })
                .catch(error => console.error(`Error loading ${file}:`, error));
        }
    }

    // Navbar toggler animation
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        // Create the cancel icon HTML
        const cancelIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>`;

        // Store original toggler content
        const originalTogglerContent = navbarToggler.innerHTML;

        // Toggle icon on menu open/close
        navbarCollapse.addEventListener('show.bs.collapse', function () {
            navbarToggler.innerHTML = cancelIcon;
            navbarToggler.classList.add('is-active');
        });

        navbarCollapse.addEventListener('hide.bs.collapse', function () {
            navbarToggler.innerHTML = originalTogglerContent;
            navbarToggler.classList.remove('is-active');
        });

        // Close menu when a link is clicked (on mobile)
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) { // Bootstrap's lg breakpoint
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
        });
    }
});
