document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Get error elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMessage = document.getElementById('successMessage');

  // Clear old errors
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  let isValid = true;

  // Name validation
  if (name === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  // Email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = 'Invalid email format.';
    isValid = false;
  }

  // Message validation
  if (message === '') {
    messageError.textContent = 'Message is required.';
    isValid = false;
  }

  // Show success if all valid
  if (isValid) {
    successMessage.textContent = '✅ Message submitted successfully!';
    // Optionally reset form
    document.getElementById('contactForm').reset();
  }
});
