const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', event => {
    event.preventDefault();

    const username = document.getElementById('register-username');
    const email = document.getElementById('register-email');
    const password = document.getElementById('register-password');

    
    if (usernameIsInvalid(username.value)) {
        showError(username, 'Неверное имя пользователя');
    } else {
        hideError(username);
    }

    if (emailIsInvalid(email.value)) {
        showError(email, 'Неверная электронная почта');
    } else {
        hideError(email);
    }

    if (passwordIsInvalid(password.value)) {
        showError(password, 'Неверный пароль');
    } else {
        hideError(password);
    }

    
    if (usernameIsValid(username.value) && emailIsValid(email.value) && passwordIsValid(password.value)) {
        registerUser(username.value, email.value, password.value);
    }
});

function showError(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    input.classList.add('error');
}

function hideError(input) {
    const errorMessage = input.nextElementSibling;
    errorMessage.style.display = 'none';
    input.classList.remove('error');
}

function usernameIsInvalid(username) {
    
}

function emailIsInvalid(email) {
    
}

