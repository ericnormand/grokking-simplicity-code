// Page 102 It's your turn

function update_shipping_icons(cart) {
  var buy_buttons = get_buy_buttons_dom();
  for(var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    var new_cart = add_item(cart, item);
    if(gets_free_shipping(new_cart))
      button.show_free_shipping_icon();
    else
      button.hide_free_shipping_icon();
  }
}

// Page 103 Answer

function update_shipping_icons(cart) {
  var buy_buttons = get_buy_buttons_dom();
  for(var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    var hasFreeShipping = gets_free_shipping_with_item(cart, item);
    set_free_shipping_icon(button, hasFreeShipping);
  }
}

function gets_free_shipping_with_item(cart, item) {
  var new_cart = add_item(cart, item);
    return gets_free_shipping(new_cart);
}

function set_free_shipping_icon(button, isShown) {
  if(isShown)
    button.show_free_shipping_icon();
  else
    button.hide_free_shipping_icon();
}