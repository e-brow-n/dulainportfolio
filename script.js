// Boot Sequence
window.addEventListener('load', () => {
    const bootScreen = document.getElementById('boot-screen');
    setTimeout(() => {
        bootScreen.classList.add('hidden');
    }, 2000);
});

// Custom Cursor
const cursor = document.getElementById('custom-cursor');
const cursorDot = cursor.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add hover effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .card, .widget-toggle, .project-card-link');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Typing Effect
const typingText = document.querySelector('.typing-text');
const phrases = [
    'mechatronics enthusiast',
    'fusion 360 expert',
    'fluid simulation designer',
    'future engineer',
    'melbourne high student'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => {
            isDeleting = true;
        }, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    
    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, typingSpeed);
}

setTimeout(typeEffect, 2500);

// Music Player Widget
const musicPlayer = document.getElementById('music-player');
const musicToggle = document.getElementById('music-toggle');

musicToggle.addEventListener('click', () => {
    musicPlayer.classList.toggle('active');
});

// Modal
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

// Modal Close
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-scrim')) {
        modal.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});

// Image Modal for Creative Cards
const creativeCards = document.querySelectorAll('.creative-card .card-image img');
creativeCards.forEach(img => {
    img.addEventListener('click', () => {
        modalBody.innerHTML = `
            <img src="${img.src}" alt="${img.alt}" style="max-width: 100%; max-height: 70vh; object-fit: contain;">
        `;
        modal.classList.add('active');
    });
});

// Image Modal for F1 Case Study Images
const f1Images = document.querySelectorAll('.phase-images img');
f1Images.forEach(img => {
    img.addEventListener('click', () => {
        modalBody.innerHTML = `
            <img src="${img.src}" alt="${img.alt}" style="max-width: 100%; max-height: 70vh; object-fit: contain;">
        `;
        modal.classList.add('active');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Make hero section visible immediately
document.querySelector('.hero-section').style.opacity = '1';
document.querySelector('.hero-section').style.transform = 'translateY(0)';

// Add glass-card class to cards
document.querySelectorAll('.project-card, .creative-card').forEach(card => {
    card.classList.add('glass-card');
});

// Orbit squares: allow hover only while visible on the front arc
const orbitSquares = document.querySelectorAll('.orbit-square');
const orbitingContainer = document.querySelector('.orbiting-squares');
let orbitHoverLocked = false;

function refreshOrbitSquareInteraction() {
    if (orbitHoverLocked) return;

    orbitSquares.forEach(square => {
        const opacity = parseFloat(getComputedStyle(square).opacity);
        square.classList.toggle('is-interactive', opacity > 0.4);
    });

    document.querySelectorAll('.orbit-square.is-interactive').forEach(square => {
        if (!square.dataset.orbitCursorBound) {
            square.dataset.orbitCursorBound = 'true';
            square.addEventListener('mouseenter', () => {
                orbitHoverLocked = true;
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            square.addEventListener('mouseleave', () => {
                orbitHoverLocked = false;
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        }
    });
}

function orbitInteractionLoop() {
    refreshOrbitSquareInteraction();
    requestAnimationFrame(orbitInteractionLoop);
}

if (orbitingContainer && orbitSquares.length) {
    requestAnimationFrame(orbitInteractionLoop);
}
