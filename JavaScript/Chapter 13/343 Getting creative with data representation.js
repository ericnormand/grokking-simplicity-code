var itemsAdded = ["shirt", "shoes", "shirt", "socks", "hat", "...."];

var shoppingCart = reduce(itemsAdded, {}, addOne);

function addOne(cart, item) {
  if(!cart[item])
    return add_item(cart, {name: item, quantity: 1, price: priceLookup(item)});
  else {
    var quantity = cart[item].quantity;
    return setFieldByName(cart, item, 'quantity', quantity + 1)
  }
}

var itemOps = [['add', "shirt"], 
               ['add', "shoes"],
               ['remove', "shirt"],
               ['add', "socks"],
               ['remove', "hat"],
              ];

var shoppingCart = reduce(itemOps, {}, function(cart, itemOp) {
  var op = itemOp[0];
  var item = itemOp[1];
  if(op === 'add')    return addOne(cart, item);
  if(op === 'remove') return removeOne(cart, item);
});

function removeOne(cart, item) {
  if(!cart[item])
    return cart;
  else {
    var quantity = cart[item].quantity;
    if(quantity === 1)
      return remove_item_by_name(cart, item);
    else
      return setFieldByName(cart, item, 'quantity', quantity - 1)
  }
}