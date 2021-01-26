/// It's your turn

var item = {
  name: "shoes",
  price: 7,
  quantity: 2
};

/// Answer

function tenXQuantity(item) {
  return update(item, 'quantity', function(quantity) {
    return quantity * 10;
  });
}