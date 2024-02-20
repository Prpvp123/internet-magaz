const backButtons = document.querySelectorAll('.back');

backButtons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = './index.html';
  });
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Здесь можно отправить данные на сервер или выполнить другие действия с входом
  alert('Вход выполнен успешно!');
  // Очистка формы
  this.reset();
});