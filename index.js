// index.js
document.addEventListener('DOMContentLoaded', function() {
    // Load the sections
    fetch('features.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('features-section').innerHTML = html;
        });
    
    fetch('services.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('services-section').innerHTML = html;
        });
    
    fetch('forums.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('forums-section').innerHTML = html;
        });
    
    fetch('testimonials.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('testimonials-section').innerHTML = html;
        });
    
    fetch('about.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('about-section').innerHTML = html;
        });
    
    fetch('contact.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('contact-section').innerHTML = html;
        });
    
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-section').innerHTML = html;
        });
    
    // Close the mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) { // Bootstrap's lg breakpoint
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});