var shoppingCart = reduce(itemsAdded, {}, function(cart, item) {
  if(!cart[item])
    return add_item(cart, {name: item, quantity: 1, price: priceLookup(item)});
  else {
    var quantity = cart[item].quantity;
    return setFieldByName(cart, item, 'quantity', quantity + 1);
  }
});


var shoppingCart = reduce(itemsAdded, {}, addOne);

function addOne(cart, item) {
  if(!cart[item])
    return add_item(cart, {name: item, quantity: 1, price: priceLookup(item)});
  else {
    var quantity = cart[item].quantity;
    return setFieldByName(cart, item, 'quantity', quantity + 1)
  }
}