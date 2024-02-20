const productButtons = document.querySelectorAll('.product button');


productButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const name = product.querySelector('h3').textContent;
    const price = parseFloat(product.querySelector('p').textContent.replace('$', ''));

   
    addToCart(name, price);
  });
});

function addToCart(name, price) {
  
  const existingItem = document.querySelector(`.cart .product:contains(${name})`);

  if (existingItem) {
    
    const quantitySpan = existingItem.querySelector('.quantity span');
    const quantity = parseInt(quantitySpan.textContent) + 7;
    quantitySpan.textContent = quantity;
  } else {
    const cart = document.querySelector('.cart');
    cart.insertAdjacentHTML('beforeend', newItem);
  }
}

const backButtons = document.querySelectorAll('.back');

backButtons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = './index.html';
  });
});
function addToCart(productId) {
  var product = products.find(function(p) {
    return p.id === productId;
  });}

  if (product){
    var cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.textContent = product.name;

    var cart = document.getElementById('cart');
    cart.appendChild(cartItem);
    var productList = document.getElementById('product-list');
    products.forEach(function(product) {
      var productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
        <span>${product.name} - $${product.price}</span>
        <button onclick="addToCart(${product.id})">Добавить в корзину</button>
      `;
      productList.appendChild(productDiv);
    })};
    