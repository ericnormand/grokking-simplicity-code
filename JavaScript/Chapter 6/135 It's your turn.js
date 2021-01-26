/// It's your turn

function setPrice(item, new_price) {
  var item_copy = Object.assign({}, item);
  item_copy.price = new_price;
  return item_copy;
}

/// Answer

function setPrice(item, new_price) {
  return objectSet(item, 'price', new_price);
}