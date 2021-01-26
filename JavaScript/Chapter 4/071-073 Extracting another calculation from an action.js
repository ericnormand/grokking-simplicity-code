// Page 71

/// Original

function add_item_to_cart(name, price) {
  shopping_cart.push({
    name: name,
    price: price
  });

  calc_cart_total();
}

/// Extracted

function add_item_to_cart(name, price) {
  add_item(name, price);
  calc_cart_total();
}

function add_item(name, price) {
  shopping_cart.push({
    name: name,
    price: price
  });
}

// Page 72

/// Eliminated input

function add_item_to_cart(name, price) {
  add_item(shopping_cart, name, price);
  calc_cart_total();
}

function add_item(cart, name, price) {
  cart.push({
    name: name,
    price: price
  });
}

// Page 73

/// Eliminated output

function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total();
}

function add_item(cart, name, price) {
  var new_cart = cart.slice();
  new_cart.push({
    name: name,
    price: price
  });
  return new_cart;
}
