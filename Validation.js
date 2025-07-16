
  const form = document.getElementById('signupForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    
    const fullName = document.getElementById('fullName');
    if (fullName.value.trim() === "") {
      showError(fullName, "Please enter your full name.");
      isValid = false;
    } else {
      hideError(fullName);
    }

    
    const email = document.getElementById('email');
    if (!email.value.includes("@")) {
      showError(email, "Please provide a valid email.");
      isValid = false;
    } else {
      hideError(email);
    }

    const password = document.getElementById('password');
    if (password.value.length < 8) {
      showError(password, "Password must be at least 8 characters.");
      isValid = false;
    } else {
      hideError(password);
    }

    const confirmPassword = document.getElementById('confirmPassword');
    if (password.value !== confirmPassword.value) {
      showError(confirmPassword, "Passwords do not match.");
      isValid = false;
    } else {
      hideError(confirmPassword);
    }

  
    const terms = document.getElementById('terms');
    if (!terms.checked) {
      terms.nextElementSibling.nextElementSibling.style.display = 'block';
      isValid = false;
    } else {
      terms.nextElementSibling.nextElementSibling.style.display = 'none';
    }

    if (isValid) {
      alert("Sign up successful!");
      form.reset();
    }
  });

  function showError(input, message) {
    input.classList.add("invalid");
    input.nextElementSibling.textContent = message;
    input.nextElementSibling.style.display = "block";
  }

  function hideError(input) {
    input.classList.remove("invalid");
    input.nextElementSibling.style.display = "none";
  }
