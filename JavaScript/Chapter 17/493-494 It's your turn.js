// Page 493 It's your turn

var sum = 0;

function countRegister(registerid) {
  var temp = sum;
  registerTotalAjax(registerid, function(money) {
    sum = temp + money;
  });
}

countRegister(1);
countRegister(2);

// Page 494 Answer

var sum = 0;

function countRegister(registerid) {
  registerTotalAjax(registerid, function(money) {
    sum += money;
  });
}

countRegister(1);
countRegister(2);