class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .social-icon {
                    transition: all 0.3s ease;
                }
                .social-icon:hover {
                    transform: translateY(-3px);
                }
            </style>
            <footer class="bg-white/5 dark:bg-gray-800/50 backdrop-blur-md border-t border-white/10 py-8">
                <div class="container mx-auto px-6">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="mb-6 md:mb-0">
                            <p class="text-gray-600 dark:text-gray-400 text-center md:text-left">
                                © 2025 Saifullah Neoaz. All rights reserved.
                            </p>
                        </div>
                        <div class="flex space-x-6">
                            <a href="https://github.com/NeoKEX" class="social-icon text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-500">
                                <i data-feather="github" class="w-6 h-6"></i>
                            </a>
                            <a href="mailto:salneowaz@gmail.com" class="social-icon text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-500">
                                <i data-feather="mail" class="w-6 h-6"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);
