/// It's your turn

function setQuantityByName(cart, name, quantity) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].name === name)
      cart[i].quantity = quantity;
  }
}

/// Answer

function setQuantityByName(cart, name, quantity) {
  var cartCopy = cart.slice();
  for(var i = 0; i < cartCopy.length; i++) {
    if(cartCopy[i].name === name)
      cartCopy[i] = objectSet(cartCopy[i], 'quantity', quantity);
  }
  return cartCopy;
}