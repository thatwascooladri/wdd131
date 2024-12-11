document.addEventListener('DOMContentLoaded', () => {
    handleContactForm();
    highlightActiveLink();
    initializeScrollToTopButton();
    dynamicDestinationInteractions();
});

function handleContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            const feedback = document.createElement('p');
            feedback.id = 'form-feedback';
            contactForm.appendChild(feedback);

            if (email && message) {
                feedback.style.color = 'green';
                feedback.textContent = 'Thank you for reaching out! I will respond soon.';
                contactForm.reset();
            } else {
                feedback.style.color = 'red';
                feedback.textContent = 'Please fill out all fields.';
            }
        });
    }
}

function highlightActiveLink() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach((link) => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initializeScrollToTopButton() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '⬆';
    scrollToTopBtn.className = 'scroll-to-top';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.style.display = 'none';

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
}

function dynamicDestinationInteractions() {
    const destinationCards = document.querySelectorAll('.destination-cards .card');

    if (destinationCards.length > 0) {
        destinationCards.forEach((card) => {
            card.addEventListener('mouseover', () => {
                card.style.transform = 'scale(1.05)';
                card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            });

            card.addEventListener('mouseout', () => {
                card.style.transform = 'scale(1)';
                card.style.boxShadow = 'none';
            });

            card.addEventListener('click', () => {
                alert(`Explore more about ${card.querySelector('p').textContent}!`);
            });
        });
    }
}
