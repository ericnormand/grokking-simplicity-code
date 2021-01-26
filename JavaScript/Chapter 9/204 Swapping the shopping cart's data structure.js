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