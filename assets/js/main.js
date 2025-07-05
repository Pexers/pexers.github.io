/**
 * Modern JavaScript for sidebar navigation
 * Features: accessibility, performance optimization, keyboard navigation
 */

class SidebarNavigation {
    constructor() {
        // CSS custom properties for responsive breakpoints
        this.breakpoint = parseInt(getComputedStyle(document.documentElement)
            .getPropertyValue('--mobile-breakpoint')) || 768;

        // Cache DOM elements
        this.elements = {
            hamburger: document.getElementById('hamburger-toggle'),
            sidebar: document.getElementById('sidebar'),
            overlay: document.getElementById('sidebar-overlay'),
            navLinks: document.querySelectorAll('.sidebar-nav .nav-link')
        };

        // State management
        this.state = {
            isOpen: false,
            isMobile: window.innerWidth <= this.breakpoint
        };

        // Bind methods
        this.handleResize = this.debounce(this.handleResize.bind(this), 250);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.closeSidebar = this.closeSidebar.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);

        this.init();
    }

    init() {
        this.checkInitialState();
        this.attachEventListeners();
        this.setActiveNavItem();
        this.addSmoothScrolling();
    }

    checkInitialState() {
        this.state.isMobile = window.innerWidth <= this.breakpoint;
        this.updateUIState();
    }

    attachEventListeners() {
        // Resize handler with debouncing
        window.addEventListener('resize', this.handleResize);

        // Sidebar toggle
        this.elements.hamburger?.addEventListener('click', this.toggleSidebar);

        // Close sidebar when clicking overlay
        this.elements.overlay?.addEventListener('click', this.closeSidebar);

        // Keyboard navigation
        document.addEventListener('keydown', this.handleKeydown);

        // Close sidebar when clicking nav links on mobile
        this.elements.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (this.state.isMobile && this.state.isOpen) {
                    this.closeSidebar();
                }
            });
        });

        // Handle focus management
        this.elements.hamburger?.addEventListener('focus', this.handleFocus.bind(this));
    }

    toggleSidebar() {
        this.state.isOpen = !this.state.isOpen;
        this.updateUIState();
        this.manageFocus();
    }

    closeSidebar() {
        if (this.state.isOpen) {
            this.state.isOpen = false;
            this.updateUIState();
            this.manageFocus();
        }
    }

    updateUIState() {
        const { hamburger, sidebar, overlay } = this.elements;
        const { isOpen, isMobile } = this.state;

        // Update ARIA attributes
        hamburger?.setAttribute('aria-expanded', isOpen.toString());
        overlay?.setAttribute('aria-hidden', (!isOpen).toString());

        // Update CSS classes with smooth transitions
        requestAnimationFrame(() => {
            sidebar?.classList.toggle('sidebar-open', isOpen);
            overlay?.classList.toggle('overlay-active', isOpen);
            hamburger?.classList.toggle('active', isOpen);

            // Show/hide hamburger button based on state
            if (hamburger) {
                hamburger.style.display = isMobile ? (isOpen ? 'none' : 'flex') : 'none';
            }
        });
    }

    handleResize() {
        const wasMobile = this.state.isMobile;
        this.state.isMobile = window.innerWidth <= this.breakpoint;

        // If switching from mobile to desktop, ensure proper state
        if (wasMobile && !this.state.isMobile) {
            this.state.isOpen = false;
        }

        this.updateUIState();
    }

    handleKeydown(event) {
        // ESC key closes sidebar
        if (event.key === 'Escape' && this.state.isOpen) {
            this.closeSidebar();
            this.elements.hamburger?.focus();
        }

        // Tab trapping when sidebar is open on mobile
        if (this.state.isOpen && this.state.isMobile && event.key === 'Tab') {
            this.trapFocus(event);
        }
    }

    manageFocus() {
        if (this.state.isOpen && this.state.isMobile) {
            // Focus first nav link when sidebar opens
            const firstNavLink = this.elements.navLinks[0];
            firstNavLink?.focus();
        } else if (!this.state.isOpen && this.state.isMobile) {
            // Return focus to hamburger when sidebar closes
            this.elements.hamburger?.focus();
        }
    }

    trapFocus(event) {
        const focusableElements = this.elements.sidebar?.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }

    handleFocus() {
        // Ensure hamburger button is visible when focused
        if (this.state.isMobile && !this.state.isOpen) {
            this.elements.hamburger.style.display = 'flex';
        }
    }

    setActiveNavItem() {
        const currentPath = window.location.pathname;

        this.elements.navLinks.forEach(link => {
            try {
                const linkPath = new URL(link.href).pathname;
                const isActive = currentPath === linkPath;

                link.classList.toggle('active', isActive);
                link.toggleAttribute('aria-current', isActive);

                if (isActive) {
                    link.setAttribute('aria-current', 'page');
                }
            } catch (error) {
                console.warn('Invalid URL found in navigation:', link.href);
            }
        });
    }

    addSmoothScrolling() {
        // Add smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();

                    // Close sidebar on mobile when navigating to anchor
                    if (this.state.isMobile && this.state.isOpen) {
                        this.closeSidebar();
                    }

                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update focus for accessibility
                    targetElement.focus({ preventScroll: true });
                }
            });
        });
    }

    // Utility function for debouncing
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Performance optimization: Initialize when DOM is ready
const initSidebar = () => {
    try {
        new SidebarNavigation();
    } catch (error) {
        console.error('Failed to initialize sidebar navigation:', error);
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSidebar);
} else {
    initSidebar();
}

// Add CSS custom properties for dynamic theming
document.documentElement.style.setProperty('--sidebar-transition', '0.3s ease');
document.documentElement.style.setProperty('--mobile-breakpoint', '768px');
