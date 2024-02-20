const cartItems = document.querySelectorAll('.cart-item');
const orderButton = document.querySelector('.order');
const backButton = document.querySelector('.back');


cartItems.forEach(item => {
  const deleteButton = item.querySelector('.delete');
  deleteButton.addEventListener('click', () => {
    item.remove();
  });
});


orderButton.addEventListener('click', () => {
  
});


backButton.addEventListener('click', () => {
    
  
});

const backButtons = document.querySelectorAll('.back');

backButtons.forEach(button => {
  button.addEventListener('click', () => {
    window.history.back();
  });
});
const orderButtons = document.querySelectorAll('.order');

orderButtons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = './catalog.html';
  });
});

var plusBtns = document.querySelectorAll('.plus-btn');
var minusBtns = document.querySelectorAll('.minus-btn');
plusBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var quantity = this.parentNode.querySelector('.quantity');
    quantity.textContent = parseInt(quantity.textContent) + 1;
  });
});
minusBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    var quantity = this.parentNode.querySelector('.quantity');
    var newQuantity = parseInt(quantity.textContent) - 1;
    if (newQuantity >= 0) {
      quantity.textContent = newQuantity;
    }
  });
});