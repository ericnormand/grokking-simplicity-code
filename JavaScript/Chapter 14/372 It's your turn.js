/// Answer

function update4(object, k1, k2, k3, k4, modify) {
  return update(object, k1, function(object2) {
    return update3(object2, k2, k3, k4, modify);
  });
}

function update5(object, k1, k2, k3, k4, k5, modify) {
  return update(object, k1, function(object2) {
    return update4(object2, k2, k3, k4, k5, modify);
  });
}