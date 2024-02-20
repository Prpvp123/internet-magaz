const backButtons = document.querySelectorAll('.back');

backButtons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = './index.html';
  });
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;


  if (password !== confirmPassword) {
    alert('Пароли не совпадают. Пожалуйста, попробуйте еще раз.');
    return;
  }


  alert('Регистрация прошла успешно!');

  this.reset();
});