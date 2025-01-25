// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Tooltip for Skills
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    const skill = star.dataset.skill;
    star.innerHTML = skill;
  });

  star.addEventListener('mouseout', () => {
    star.innerHTML = '';
  });
});