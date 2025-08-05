// Smooth Scroll for Navigation Links
document.querySelectorAll('header a').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// FAQ Section Toggle
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';
        faqItems.forEach(i => i.querySelector('.faq-answer').style.display = 'none'); // Close other answers
        answer.style.display = isOpen ? 'none' : 'block'; // Toggle this answer
    });
});

// Add Animations on Scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

animatedElements.forEach(el => observer.observe(el));

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆️';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px';
backToTopButton.style.fontSize = '20px';
backToTopButton.style.backgroundColor = '#f1c40f';
backToTopButton.style.color = '#262626';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});


    document.addEventListener("DOMContentLoaded", () => {
        const header = document.querySelector("header.naglowek");
        if (header) {
            setTimeout(() => {
                header.classList.add("visible");
            }, 100); // małe opóźnienie po załadowaniu strony
        }
    });
