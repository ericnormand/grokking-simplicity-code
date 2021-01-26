var firstTimers = filter(customers, function(customer) {
    return customer.purchases.length === 1;
});
var firstTimerEmails = map(firstTimers, function(customer) {
    return customer.email;
});

var firstTimers      = filter(customers, isFirstTimer);
var firstTimerEmails = map(firstTimers, getCustomerEmail);

function isFirstTimer(customer) {
  return customer.purchases.length === 1;
}

function getCustomerEmail(customer) {
  return customer.email;
}