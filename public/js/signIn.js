const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');
const signupBtn = document.getElementById('signup');
const signinBtn = document.getElementById('signinBtn');

function fadeOutIn(hideForm, showForm) {
  hideForm.classList.add('hidden');
  showForm.classList.remove('hidden');
}

signupBtn.addEventListener('click', () => {
  fadeOutIn(signinForm, signupForm);
});

signinBtn.addEventListener('click', () => {
  fadeOutIn(signupForm, signinForm);
});

