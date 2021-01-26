filter(customers, function(customer) {
  return customer.purchases.length === 0;
});

var allEmails = map(customers, function(customer) {
  return customer.email;
});

var emailsWithoutNulls = filter(emailsWithNulls, function(email) {
  return email !== null;
});