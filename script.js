
document.getElementById('themeToggle').onclick = () => {
    document.body.classList.toggle('light');
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.animate([
                { opacity: 0, transform: 'translateY(40px)' },
                { opacity: 1, transform: 'translateY(0)' }
            ], { duration: 700, fill: 'forwards' });
        }
    });
});
document.querySelectorAll('.card,.project,.price').forEach(el => observer.observe(el));