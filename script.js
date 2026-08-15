const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
  const isOpen = header.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelector('.newsletter form').addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = 'Bienvenue à bord ✓';
  button.disabled = true;
});
