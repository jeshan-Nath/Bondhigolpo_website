function contactMessage() {
  alert("Thank you! We will contact you soon.");
}

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});
