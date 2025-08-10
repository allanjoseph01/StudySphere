
document.addEventListener("DOMContentLoaded", function () {
  const signinForm = document.getElementById('signin-form');
  const signupForm = document.getElementById('signup-form');
  const signupBtn = document.getElementById('signup');
  const signinBtn = document.getElementById('signinBtn');
  const rightSide = document.querySelector('.rightSide');

  function fadeOutIn(hideForm, showForm) {
    hideForm.classList.add('hidden');
    showForm.classList.remove('hidden');
  }

  signupBtn.addEventListener('click', () => {
    console.log("Signup button clicked");
    fadeOutIn(signinForm, signupForm);
    rightSide.classList.add('hidden');
  });

  signinBtn.addEventListener('click', () => {
    console.log("Signin button clicked");
    fadeOutIn(signupForm, signinForm);
    rightSide.classList.remove('hidden');
  });
});
