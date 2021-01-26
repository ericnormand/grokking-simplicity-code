/// It's your turn

function payrollCalc(employees) {
  // ...
  return payrollChecks;
}

/// Answer

function payrollCalcSafe(employees) {
  var copy = deepCopy(employees);
  var payrollChecks = payrollCalc(copy);
  return deepCopy(payrollChecks);
}