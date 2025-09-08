// Part 1: Event Handling Example
const clickBtn = document.getElementById('clickBtn');
const message = document.getElementById('message');

clickBtn.addEventListener('click', () => {
  message.textContent = "🎉 You clicked the button!";
});

// Part 2: Interactive Features

// Light/Dark Mode Toggle
const toggleMode = document.getElementById('toggleMode');
toggleMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter Game
let count = 0;
const increaseBtn = document.getElementById('increaseBtn');
const counter = document.getElementById('counter');

increaseBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

// Part 3: Form Validation
const form = document.getElementById('registerForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // stop form from submitting

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Simple validation
  if (name === "" || email === "" || password === "") {
    formMessage.textContent = "⚠️ All fields are required!";
    formMessage.style.color = "red";
  } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    formMessage.textContent = "⚠️ Enter a valid email!";
    formMessage.style.color = "red";
  } else if (password.length < 6) {
    formMessage.textContent = "⚠️ Password must be at least 6 characters!";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "✅ Registration successful!";
    formMessage.style.color = "green";
  }
});
