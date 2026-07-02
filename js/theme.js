const html = document.documentElement;
const toggle = document.getElementById('themeToggle');

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
}

const saved = localStorage.getItem('portfolio-theme') || 'dark';
setTheme(saved);

toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});
