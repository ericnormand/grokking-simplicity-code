/// It's your turn

function shoesAndSocksInventory(products) {
  var inventory = 0;
  for(var p = 0; p < products.length; p++) {
    var product = products[p];
    if(product.type === "shoes" || product.type === "socks") {
      inventory += product.numberInInventory;
    }
  }
  return inventory;
}

/// Answer

function shoesAndSocksInventory(products) {
  var shoesAndSocks = filter(products, function(product) {
    return product.type === "shoes" || product.type === "socks";
  });
  var inventories = map(shoesAndSocks, function(product) {
    return product.numberInInventory;
  });
  return reduce(inventories, 0, plus);
}