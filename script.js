const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const signupForm = document.querySelector('.signup-form');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = signupForm.querySelector('input');
  const message = signupForm.querySelector('.form-message');

  message.textContent = `Merci ! Une confirmation a été envoyée à ${emailInput.value}.`;
  signupForm.reset();
});
