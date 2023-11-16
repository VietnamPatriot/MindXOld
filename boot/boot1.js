const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    const user = { email, password };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Đăng ký thành công!');
});
