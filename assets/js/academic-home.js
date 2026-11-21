const links = Array.from(document.querySelectorAll('.home-nav a'));
const sections = links.map(link => document.getElementById(link.hash.slice(1)));
function updateSection() {
  const threshold = document.querySelector('.home-nav').getBoundingClientRect().bottom + 40;
  let current = sections[0];
  sections.forEach(section => { if (section.getBoundingClientRect().top <= threshold) current = section; });
  links.forEach(link => {
    if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
let scheduled = false;
window.addEventListener('scroll', () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => { updateSection(); scheduled = false; });
}, { passive: true });
window.addEventListener('resize', updateSection);
updateSection();
