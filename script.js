// Set the footer year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Highlight the nav link for the section currently on screen
const links = document.querySelectorAll('nav a[href^="#"]');
const targets = [...links]
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(a =>
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id)
        );
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  targets.forEach(t => observer.observe(t));
}
