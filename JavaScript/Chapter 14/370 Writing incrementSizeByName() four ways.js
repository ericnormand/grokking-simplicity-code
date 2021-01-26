/// Option 1: using update() and incrementSize()

function incrementSizeByName(cart, name) {
  return update(cart, name, incrementSize);
}

/// Option 2: using update() and update2()

function incrementSizeByName(cart, name) {
  return update(cart, name, function(item) {
    return update2(item, 'options', 'size', function(size) {
      return size + 1;
    });
  });
}

/// Option 3: using update()

function incrementSizeByName(cart, name) {
  return update(cart, name, function(item) {
    return update(item, 'options', function(options) {
      return update(options, 'size', function(size) {
        return size + 1;
      });
    });
  });
}

/// Option 4: writing it manually as gets, modify, and sets

function incrementSizeByName(cart, name) {
  var item       = cart[name];
  var options    = item.options;
  var size       = options.size;
  var newSize    = size + 1;
  var newOptions = objectSet(options, 'size', newSize);
  var newItem    = objectSet(item, 'options', newOptions);
  var newCart    = objectSet(cart, name, newItem);
  return newCart;
}