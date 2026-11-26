const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuButton.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.textContent = '☰';
  }));
}
const form = document.getElementById('enquiry-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const lines = [
      'Hello Ganga Cushions, I would like to request a quotation.',
      '',
      `Name: ${data.get('name') || ''}`,
      `Requirement: ${data.get('requirement') || ''}`,
      `Town / area: ${data.get('location') || 'Not specified'}`,
      `Details: ${data.get('details') || 'Not specified'}`
    ];
    window.open('https://wa.me/919511776777?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
  });
}
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const select = document.querySelector('select[name="requirement"]');
    if (select) select.value = link.dataset.service;
  });
});
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
