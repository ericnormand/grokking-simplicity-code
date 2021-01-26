/// Original

function setPriceByName(cart, name, price) {
  var cartCopy = cart.slice();
  for(var i = 0; i < cartCopy.length; i++) {
    if(cartCopy[i].name === name)
      cartCopy[i] = setPrice(cartCopy[i], price);
    }
  return cartCopy;
}

function indexOfItem(cart, name) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].name === name)
      return i;
  }
  return null;
}

/// Written in terms of each other

function setPriceByName(cart, name, price) {
  var cartCopy = cart.slice(b);
  var i = indexOfItem(cart, name);
  if(i !== null)
    cartCopy[i] = setPrice(cartCopy[i], price);
  return cartCopy;
}

function indexOfItem(cart, name) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].name === name)
      return i;
  }
  return null;
}