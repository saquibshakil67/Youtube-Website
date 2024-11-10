// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Scroll Animation: Fade In Effect when sections come into view
const fadeElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  fadeElements.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight * 0.8) {
      element.classList.add('visible');
    }
  });
});

// Toggle Hamburger Menu for Mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar .nav-links');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Optional: Close the mobile menu if a link is clicked
document.querySelectorAll('.navbar .nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
});

// Optional: Fade-in animations on page load
window.addEventListener('load', () => {
  const pageElements = document.querySelectorAll('.fade-in-on-load');
  pageElements.forEach(element => {
    element.classList.add('visible');
  });
});
