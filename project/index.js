document.addEventListener('DOMContentLoaded', () => {
    handleContactForm();
    highlightActiveLink();
    initializeScrollToTopButton();
    dynamicDestinationInteractions();
    applyLazyLoading();
});

function handleContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            const feedback = document.getElementById('form-feedback') || document.createElement('p');
            feedback.id = 'form-feedback';
            contactForm.appendChild(feedback);

            if (email && message) {
                const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
                submissions.push({ email, message, timestamp: new Date().toISOString() });
                localStorage.setItem('submissions', JSON.stringify(submissions));

                feedback.style.color = 'green';
                feedback.textContent = 'Thank you for reaching out! I will respond soon.';
                contactForm.reset();
            } else {
                feedback.style.color = 'red';
                feedback.textContent = 'Please fill out all fields.';
            }
        });

        const viewSubmissionsButton = document.createElement('button');
        viewSubmissionsButton.textContent = 'View Submissions';
        viewSubmissionsButton.style.marginTop = '10px';
        viewSubmissionsButton.addEventListener('click', () => {
            const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
            if (submissions.length === 0) {
                console.log('No submissions found.');
            } else {
                submissions.forEach(({ email, message, timestamp }) => {
                    console.log(`Email: ${email}, Message: ${message}, Time: ${new Date(timestamp).toLocaleString()}`);
                });
            }
        });

        contactForm.appendChild(viewSubmissionsButton);
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

function applyLazyLoading() {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}
