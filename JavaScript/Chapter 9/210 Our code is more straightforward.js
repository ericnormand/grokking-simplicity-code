/// One-liners

function add_item(cart, item) {
  return objectSet(cart, item.name, item);
}

function gets_free_shipping(cart) {
  return calc_total(cart) >= 20;
}

function cartTax(cart) {
  return calc_tax(calc_total(cart));
}

function remove_item_by_name(cart, name) {
  return objectDelete(cart, name);
}

function isInCart(cart, name) {
  return cart.hasOwnProperty(name);
}

/// Complex implementations

function calc_total(cart) {
  var total = 0;
  var names = Object.keys(cart);
  for(var i = 0; i < names.length; i++) {
    var item = cart[names[i]];
    total += item.price;
  }
  return total;
}

function setPriceByName(cart, name, price) {
  if(isInCart(cart, name)) {
    var itemCopy = objectSet(cart[name], 'price', price);
    return objectSet(cart, name, itemCopy);
  } else {
    return objectSet(cart, name, make_item(name, price));
  }
}