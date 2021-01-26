/// Original

function setPrice(item, new_price) {
  item.price = new_price;
}

/// Copy-on-write

function setPrice(item, new_price) {
  var item_copy = Object.assign({}, item);
  item_copy.price = new_price;
  return item_copy;
}