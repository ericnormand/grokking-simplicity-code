// Page 434 It's your turn

var plates = ...;
var forks = ...;
var cups = ...;
var total = ...;

function doDishes() {
  total = 0;
  wash_ajax(plates, function() {
    total += plates.length;
    wash_ajax(forks, function() {
      total += forks.length;
      wash_ajax(cups, function() {
        total += cups.length;
        update_dishes_dom(total);
      });
    });
  });
}

doDishes();

// Page 435 Answer

var forks = ...;
var cups = ...;

function doDishes(plates, forks, cups, callback) {
  var total = 0;
  wash_ajax(plates, function() {
    total += plates.length;
    wash_ajax(forks, function() {
      total += forks.length;
      wash_ajax(cups, function() {
        total += cups.length;
        callback(total);
      });
    });
  });
}

doDishes(plates, forks, cups, update_dishes_dom);