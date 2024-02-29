const signupButton = document.querySelector('.signup-btn'); 
const signupForm = document.getElementById('signup-form');
const closeButton = document.getElementById('close-signup');

signupButton.addEventListener('click', function() {
  signupForm.style.display = 'block'; 
});

closeButton.addEventListener('click', function() {
  signupForm.style.display = 'none';
});



const loginButton = document.querySelector('.login-btn'); 
const loginForm = document.getElementById('login-form');
const closeLoginButton = document.getElementById('close-login');

loginButton.addEventListener('click', function() {
  loginForm.style.display = 'block';
});

closeLoginButton.addEventListener('click', function() {
  loginForm.style.display = 'none';
});

// ... your existing JavaScript code ...

const browseButton = document.querySelector('.button'); /* Assuming 'button' is the class */
const noAuctionsMessage = document.getElementById('no-auctions-message');

browseButton.addEventListener('click', function() {
  noAuctionsMessage.style.display = 'block'; 
});
