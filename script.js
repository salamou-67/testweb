// Mobile menu toggle
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    document.getElementById("nav-links").classList.remove("active");
  });
});

// Fade-in animation on scroll
const items = document.querySelectorAll('.menu-item');
const revealOnScroll = () => {
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);