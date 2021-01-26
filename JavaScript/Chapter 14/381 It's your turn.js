/// Answer

function incrementSizeByName(cart, name) {
  return nestedUpdate(cart, [name, 'options', 'size'], function(size) {
    return size + 1;
  });
}