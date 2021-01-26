/// It's your turn

function add_contact(mailing_list, email) {
  var list_copy = mailing_list.slice();
  list_copy.push(email);
  return list_copy;
}

/// Answer

function add_contact(mailing_list, email) {
  return push(mailing_list, email);
}