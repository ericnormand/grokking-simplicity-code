/// It's your turn

if(array.length === 0) {
  console.log("Array is empty");
}

if(hasItem(cart, "shoes")) {
  return setPriceByName(cart, "shoes", 0);
}

when(array.length === 0, function() {
  console.log("Array is empty");
});

when(hasItem(cart, "shoes"), function() {
  return setPriceByName(cart, "shoes", 0);
});

/// Answer

function when(test, then) {
  if(test)
    return then();
}