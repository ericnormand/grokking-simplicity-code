/// Original

function setPriceByName(cart, name, price) {
  var cartCopy = cart.slice();
  var i = indexOfItem(cart, name);
  if(i !== null)
    cartCopy[i] = setPrice(cartCopy[i], price);
  return cartCopy;
}

function arraySet(array, idx, value) {
  var copy = array.slice();
  copy[idx] = value;
  return copy;
}

/// Written in terms of each other

function setPriceByName(cart, name, price) {
  var i = indexOfItem(cart, name);
  if(i !== null)
    return arraySet(cart, i, setPrice(cart[i], price));
  return cart;
}

function arraySet(array, idx, value) {
  var copy = array.slice();
  copy[idx] = value;
  return copy;
}