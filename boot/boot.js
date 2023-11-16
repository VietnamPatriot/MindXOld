const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        window.location.href = 'index.html';
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
});
