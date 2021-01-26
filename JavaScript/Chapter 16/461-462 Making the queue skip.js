// Page 462

/// Normal Queue

function Queue(worker) {
  var queue_items = [];
  var working = false;

  function runNext() {
    if(working)
      return;
    if(queue_items.length === 0)
      return;
    working = true;
    var item = queue_items.shift();
    worker(item.data, function(val) {
      working = false;
      setTimeout(item.callback, 0, val);
      runNext();
    });
  }

  return function(data, callback) {
    queue_items.push({
      data: data,
      callback: callback || function(){}
    });
    setTimeout(runNext, 0);
  };
}

function calc_cart_worker(cart, done) {
  calc_cart_total(cart, function(total) {
    update_total_dom(total);
    done(total);
  });
}

var update_total_queue = Queue(calc_cart_worker);

/// Dropping Queue

function DroppingQueue(max, worker) {
  var queue_items = [];
  var working = false;

  function runNext() {
    if(working)
      return;
    if(queue_items.length === 0)
      return;
    working = true;
    var item = queue_items.shift();
    worker(item.data, function(val) {
      working = false;
      setTimeout(item.callback, 0, val);
      runNext();
    });
  }

  return function(data, callback) {
    queue_items.push({
      data: data,
      callback: callback || function(){}
    });
    while(queue_items.length > max)
      queue_items.shift();
    setTimeout(runNext, 0);
  };
}

function calc_cart_worker(cart, done) {
  calc_cart_total(cart, function(total) {
    update_total_dom(total);
    done(total);
  });
}

var update_total_queue = DroppingQueue(1, calc_cart_worker);