var sum = 0;

function countRegister(registerid) {
  var temp = sum;
  registerTotalAjax(registerid, function(money) {
    sum = temp + money;
  });
}

countRegister(1);
countRegister(2);