/// Page 288

/// Code from chapter 3

function emailsForCustomers(customers, goods, bests) {
  var emails = [];
  for(var i = 0; i < customers.length; i++) {
    var customer = customers[i];
    var email = emailForCustomer(customer, goods, bests);
    emails.push(email);
  }
  return emails;
}

/// Using forEach()

function emailsForCustomers(customers, goods, bests) {
  var emails = [];
  forEach(customers, function(customer) {
    var email = emailForCustomer(customer, goods, bests);
    emails.push(email);
  });
  return emails;
}