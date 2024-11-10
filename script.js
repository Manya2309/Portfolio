// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
  });
  
  // Animate sections on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('pop-up');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, { threshold: 0.1 }); // Trigger when 10% of the element is in view
  
  // Select elements to animate on scroll
  document.querySelectorAll('.pop-up').forEach(section => {
    section.classList.remove('pop-up'); // Initial state without animation
    observer.observe(section);
  });
  