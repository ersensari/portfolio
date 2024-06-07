
document.querySelectorAll('.menu a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });

    document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');

    updateIndicator();
  });
});

function updateIndicator() {
  const activeLink = document.querySelector('.menu a.active');
  const indicator = document.querySelector('.menu .indicator');
  if (activeLink) {
    const offsetTop = activeLink.offsetTop + activeLink.offsetHeight / 2;
    indicator.style.top = `${offsetTop}px`;
  }
}

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.timeline-content');
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const id = section.getAttribute('id');
      document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
      document.querySelector(`.menu a[href="#${id}"]`).classList.add('active');
      updateIndicator();
    }
  });
});

document.addEventListener('DOMContentLoaded', updateIndicator);
