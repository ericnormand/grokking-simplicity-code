// Page 240 It's your turn

function incrementQuantityByName(cart, name) {
  var item = cart[name];
  var quantity = item['quantity'];
  var newQuantity = quantity + 1;
  var newItem = objectSet(item, 'quantity', newQuantity);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

function incrementSizeByName(cart, name) {
  var item = cart[name];
  var size = item['size'];
  var newSize = size + 1;
  var newItem = objectSet(item, 'size', newSize);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

// Page 241 Answer

function incrementFieldByName(cart, name, field) {
  var item = cart[name];
  var value = item[field];
  var newValue = value + 1;
  var newItem = objectSet(item, field, newValue);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}