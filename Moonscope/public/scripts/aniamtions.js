const button = document.getElementById('btn-login');

document.addEventListener('DOMContentLoaded', () => {
  const continueButton = document.getElementById('btn-continue');
  const goBackButton = document.getElementById('btn-go-back');
  const firstSection = document.getElementById('firstSection');
  const secondSection = document.getElementById('secondSection');

  continueButton.addEventListener('click', () => {
    firstSection.style.animation = 'scrollRight 1s forwards';
    firstSection.style.display = 'none';
    secondSection.style.display = 'block';
  });

  goBackButton.addEventListener('click', () => {
    secondSection.style.animation = 'scrollLeft 1s forwards';
    secondSection.style.display = 'none';
    firstSection.style.display = 'block';
  });
});

function login() {
  window.location.href = './login.html';
}

button.addEventListener('click', login);
