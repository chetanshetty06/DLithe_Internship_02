// Simulate user storage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Toggle between Sign Up and Login forms
document.getElementById('showLogin').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('signupForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
});

document.getElementById('showSignup').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('signupForm').classList.remove('hidden');
});

// Sign Up Form Submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  // Basic validation
  if (username && email && password) {
    // Check if user already exists
    const userExists = users.some((user) => user.username === username || user.email === email);
    if (userExists) {
      alert('User already exists. Please log in.');
      // Show login form
      document.getElementById('signupForm').classList.add('hidden');
      document.getElementById('loginForm').classList.remove('hidden');
    } else {
      // Save user to localStorage
      const user = { username, email, password };
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      alert('Sign Up Successful! Please log in.');
      // Clear form
      document.getElementById('signupForm').reset();
      // Show login form
      document.getElementById('signupForm').classList.add('hidden');
      document.getElementById('loginForm').classList.remove('hidden');
    }
  } else {
    alert('Please fill in all fields.');
  }
});

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Basic validation
  if (username && password) {
    // Check if user exists
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      alert('Login Successful! Redirecting to portfolio Page...');
      // Clear form
      document.getElementById('loginForm').reset();
      // Redirect to news.html
      window.location.href = 'portfolio.html';
    } else {
      alert('Invalid username or password.');
    }
  } else {
    alert('Please fill in all fields.');
  }
});