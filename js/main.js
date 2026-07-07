document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Interface Navigation Logic ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('.primary-navigation');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            primaryNav.classList.toggle('open');
            document.body.style.overflow = isExpanded ? '' : 'hidden';
        });
    }

    // Close window execution trap upon layout redirect clicks
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (primaryNav && primaryNav.classList.contains('open')) {
                navToggle.setAttribute('aria-expanded', 'false');
                primaryNav.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    });

    // --- Dynamic Navigation Page State Highlighting ---
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });

    // --- Form Verification & Ingestion Handlers ---
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            const submitButton = contactForm.querySelector('button[type="submit"]');
            
            submitButton.disabled = true;
            submitButton.textContent = 'Processing Strategic Inquiry...';
            
            // Replicating baseline back-end API structural delay loops
            setTimeout(() => {
                contactForm.innerHTML = `
                    <div style="padding: 48px 0; border-top: 1px solid var(--color-gold); text-align: left;">
                        <h4 style="font-family: var(--font-serif); font-size: 1.75rem; color: var(--color-white); margin-bottom: 16px; font-weight:400;">Briefing Request Authenticated</h4>
                        <p style="font-size: 1rem; color: var(--color-text-body); line-height:1.75;">Thank you, ${data.name}. An executive managing partner will evaluate your operational parameters and contact your corporate inbox at ${data.email} within 24 business hours.</p>
                    </div>
                `;
            }, 1200);
        });
    }
});