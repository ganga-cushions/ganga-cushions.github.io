const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('enquiry-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    'Hello Ganga Cushions, I would like to make an enquiry.',
    `Name: ${data.get('name')}`,
    `Requirement: ${data.get('requirement')}`,
    `Location: ${data.get('location') || 'Not specified'}`,
    `Details: ${data.get('details') || 'Please contact me to discuss.'}`
  ].join('\n');
  window.open(`https://wa.me/919511776777?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
