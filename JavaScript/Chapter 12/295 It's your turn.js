/// Answer

map(customers, function(customer) {
  return {
    firstName : customer.firstName,
    lastName : customer.lastName,
    address : customer.address
  };
});