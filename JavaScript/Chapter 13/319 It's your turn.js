function maxKey(array, init, f) {
  return reduce(array, init, function(biggestSoFar, element) {
    if(f(biggestSoFar) > f(element))
      return biggestSoFar;
    else
    return element;
  });
}

function max(array, init) {
  return maxKey(array, init, function(x) {
    return x;
  });
}