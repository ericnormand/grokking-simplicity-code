var shirt = {
  name: "shirt",
  price: 13,
  options: {
    color: "blue",
    size: 3
  }
};

function incrementSize(item) {
  var options = item.options;
  var size = options.size;
  var newSize = size + 1;
  var newOptions = objectSet(options, 'size', newSize);
  var newItem = objectSet(item, 'options', newOptions);
  return newItem;
}