document.addEventListener('DOMContentLoaded', function() {
    // Show notification after 3 seconds
    setTimeout(() => {
        const notification = document.getElementById('notification');
        notification.classList.remove('translate-y-4', 'opacity-0');
        notification.classList.add('translate-y-0', 'opacity-100');
    }, 3000);

    // Close notification
    document.getElementById('close-notification').addEventListener('click', function() {
        const notification = document.getElementById('notification');
        notification.classList.add('translate-y-4', 'opacity-0');
        setTimeout(() => {
            notification.style.display = 'none';
        }, 300);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add shadow on scroll for navbar
    const navbar = document.querySelector('custom-navbar').shadowRoot.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-lg', 'bg-white/90', 'dark:bg-gray-900/90');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-white/90', 'dark:bg-gray-900/90');
        }
    });

    // Theme switcher functionality if implemented in navbar
    if (document.getElementById('theme-toggle')) {
        document.getElementById('theme-toggle').addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
}); 
