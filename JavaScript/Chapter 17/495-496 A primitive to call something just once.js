// Page 96

function sendAddToCartText(number) {
  sendTextAjax(number, "Thanks for adding something to your cart. Reply if you have any questions!");
}

function JustOnce(action) {
  var alreadyCalled = false;
  return function(a, b, c) {
    if(alreadyCalled) return;
    alreadyCalled = true;
    return action(a, b, c);
  };
}

sendAddToCartTextOnce("555-555-5555-55");
sendAddToCartTextOnce("555-555-5555-55");
sendAddToCartTextOnce("555-555-5555-55");
sendAddToCartTextOnce("555-555-5555-55");