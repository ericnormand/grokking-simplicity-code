function gets_free_shipping(total, item_price) {
  return item_price + total >= 20;
}

function calc_total(cart) {
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
  }
  return total;
}