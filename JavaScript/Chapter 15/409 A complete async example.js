var buy_button = document.getElementByID('buy-now-shoes');

buy_button.addEventListener('click', function() {
  add_to_cart_ajax({item: 'shoes'}, function() {
    shopping_cart.add({item: 'shoes'});
    render_cart_icon();
    buy_button.innerHTML = "Buy Now";
  });
  buy_button.innerHTML = "loading";
});