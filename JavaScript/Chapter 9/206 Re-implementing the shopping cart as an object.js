/// Cart as array

function add_item(cart, item) {
  return add_element_last(cart, item);
}

function calc_total(cart) {
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price;
  }
  return total;
}

function setPriceByName(cart, name, price) {
  var cartCopy = cart.slice();
  for(var i = 0; i < cartCopy.length; i++) {
    if(cartCopy[i].name === name)
      cartCopy[i] = setPrice(cartCopy[i], price);
  }
  return cartCopy;
}

function remove_item_by_name(cart, name) {
  var idx = indexOfItem(cart, name);
  if(idx !== null)
    return splice(cart, idx, 1);
  return cart;
}

function indexOfItem(cart, name) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].name === name)
      return i;
  }
  return null;
}

function isInCart(cart, name) {
  return indexOfItem(cart, name) !== null;
}

/// Cart as object

function add_item(cart, item) {
  return objectSet(cart, item.name, item);
}

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
    var item = cart[name];
    var copy = setPrice(item, price);
    return objectSet(cart, name, copy);
  } else {
    var item = make_item(name, price);
    return objectSet(cart, name, item);
  }
}

function remove_item_by_name(cart, name) {
  return objectDelete(cart, name);
}

function isInCart(cart, name) {
  return cart.hasOwnProperty(name);
}