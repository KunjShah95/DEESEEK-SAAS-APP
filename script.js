// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Add animations on scroll
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.animate__animated');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(entry.target.dataset.animate);
        observer.unobserve(entry.target);
      }
    });
  });

  animateElements.forEach((element) => {
    observer.observe(element);
  });
});

// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  darkModeToggle.querySelector('i').classList.toggle('fa-sun');
});

// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item h3');

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentElement.classList.toggle('active');
  });
});