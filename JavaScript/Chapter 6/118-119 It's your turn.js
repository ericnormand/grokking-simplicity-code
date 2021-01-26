// Page 118 It's your turn

var mailing_list = [];

function add_contact(email) {
  mailing_list.push(email);
}

function submit_form_handler(event) {
  var form = event.target;
  var email = form.elements["email"].value;
  add_contact(email);
}

// Page 119 Answer

/// Copy-on-write

var mailing_list = [];

function add_contact(mailing_list, email) {
  var list_copy = mailing_list.slice();
  list_copy.push(email);
  return list_copy;
}

function submit_form_handler(event) {
  var form = event.target;
  var email = form.elements["email"].value;
  mailing_list = add_contact(mailing_list, email);
}