/* ---- Typing effect ---- */
const roles = [
    'Desarrollador de Software',
    'Dev de Apps Multiplataforma',
    'Integrador de IA',
    'Android Developer'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typedText');

function type() {
    const current = roles[roleIndex];

    if (isDeleting) {
        typedEl.textContent = current.slice(0, charIndex - 1);
        charIndex--;
    } else {
        typedEl.textContent = current.slice(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === current.length) {
        setTimeout(() => { isDeleting = true; }, 2200);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    const speed = isDeleting ? 45 : 95;
    setTimeout(type, speed);
}

type();

/* ---- Scroll reveal ---- */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

/* ---- Sticky header + active nav link ---- */
const header = document.getElementById('header');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, { passive: true });

/* ---- Mobile menu ---- */
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuToggle.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
    });
});
