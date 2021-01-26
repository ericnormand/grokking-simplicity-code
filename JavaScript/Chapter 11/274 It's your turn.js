/// It's your turn

IF(array.length === 0, function() {
  console.log("Array is empty");
}, function() {
  console.log("Array has something in it.");
});

IF(hasItem(cart, "shoes"), function() {
  return setPriceByName(cart, "shoes", 0);
}, function() {
  return cart; // unchanged
});

/// Answer

function IF(test, then, ELSE) {
  if(test)
    return then();
  else
    return ELSE();
}