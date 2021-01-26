calc_cart_total(cart, function(total) {
  update_total_dom(total);
  working = false;
  runNext();
});

calc_cart_total(cart, update_total_dom);
working = false;
runNext();