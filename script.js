document.addEventListener('DOMContentLoaded', function() {
    // ========================
    // Notification
    // ========================
    const notification = document.getElementById('notification');
    if (notification) {
        // Show notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('translate-y-4', 'opacity-0');
            notification.classList.add('translate-y-0', 'opacity-100');
        }, 3000);

        // Close notification
        const closeBtn = document.getElementById('close-notification');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                notification.classList.add('translate-y-4', 'opacity-0');
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 300);
            });
        }
    }

    // ========================
    // Smooth scrolling for anchors
    // ========================
    const offset = 80; // adjust if navbar height changes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: elementPosition - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================
    // Navbar shadow on scroll
    // ========================
    customElements.whenDefined('custom-navbar').then(() => {
        const navbarEl = document.querySelector('custom-navbar');
        if (navbarEl?.shadowRoot) {
            const navbar = navbarEl.shadowRoot.querySelector('nav');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 10) {
                    navbar.classList.add('shadow-lg', 'bg-white/90', 'dark:bg-gray-900/90');
                } else {
                    navbar.classList.remove('shadow-lg', 'bg-white/90', 'dark:bg-gray-900/90');
                }
            });
        }
    });

    // ========================
    // Theme toggle
    // ========================
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    // Apply saved or system theme preference
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // ========================
    // Intersection Observer for animations
    // ========================
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target); // animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
});
