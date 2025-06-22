
/*!
 * AOS (Animate On Scroll) - Mini Loader v1
 * Apenas funcionalidade básica para fade-up e zoom-in
 */
(function () {
  const elements = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.addEventListener('DOMContentLoaded', () => {
    elements.forEach(el => observer.observe(el));
  });
})();
