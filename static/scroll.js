// Enable smooth scroll to sections when clicking nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
// Enable smooth scroll to top when clicking the "Back to Top" button
document.querySelector('.back-to-top').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



// Smooth scroll on nav click
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Show/hide Back to Top button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
    backToTop.classList.add('fade-in');
    backToTop.classList.remove('fade-out');
  } else {
    backToTop.classList.add('fade-out');
    backToTop.classList.remove('fade-in');
    setTimeout(() => backToTop.style.display = 'none', 300); // match animation duration
  }
});

// Scroll to top on button click
backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Filter skill items with fade animation
const filterButtons = document.querySelectorAll('.skills-filter button');
const skillItems = document.querySelectorAll('.skill');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.skills-filter .active')?.classList.remove('active');
    btn.classList.add('active');

    const category = btn.dataset.filter;

    skillItems.forEach(skill => {
      skill.classList.add('fade-out-skill');

      setTimeout(() => {
        if (category === 'all' || skill.classList.contains(category)) {
          skill.style.display = 'inline-block';
        } else {
          skill.style.display = 'none';
        }
        skill.classList.remove('fade-out-skill');
        skill.classList.add('fade-in-skill');
      }, 150);
    });
  });
});
