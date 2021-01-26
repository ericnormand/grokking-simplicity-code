// Page 212

/// Choice 1: Part of the barrier

function getsWatchDiscount(cart) {
  var total = 0;
  var names = Object.keys(cart);
  for(var i = 0; i < names.length; i++) {
    var item = cart[names[i]];
    total += item.price;
  }
  return total > 100 && cart.hasOwnProperty("watch");
}

/// Choice 2: Above the barrier

function getsWatchDiscount(cart) {
  var total = calcTotal(cart);
  var hasWatch = isInCart("watch");
  return total > 100 && hasWatch;
}

// Page 214

function add_item(cart, item) {
  logAddToCart(global_user_id, item);
  return objectSet(cart, item.name, item);
}

// Page 215

function update_shipping_icons(cart) {
  var buttons = get_buy_buttons_dom();
  for(var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var item = button.item;
    var new_cart = add_item(cart, item);
    if(gets_free_shipping(new_cart))
      button.show_free_shipping_icon();
    else
      button.hide_free_shipping_icon();
  }
}

// Page 216

function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);
  var total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
  logAddToCart();
}