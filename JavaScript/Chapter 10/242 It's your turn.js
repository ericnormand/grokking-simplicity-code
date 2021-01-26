/// It's your turn

function incrementFieldByName(cart, name, field) {
  var item = cart[name];
  var value = item[field];
  var newValue = value + 1;
  var newItem = objectSet(item, field, newValue);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}

/// Answer

function incrementFieldByName(cart, name, field) {
  if(field !== 'size' && field !== 'quantity')
    throw "This item field cannot be incremented: " + "'" + field + "'.";
  var item = cart[name];
  var value = item[field];
  var newValue = value + 1;
  var newItem = objectSet(item, field, newValue);
  var newCart = objectSet(cart, name, newItem);
  return newCart;
}