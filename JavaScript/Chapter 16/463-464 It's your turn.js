// Page 463 It's your turn

var document = {...};

function save_ajax(document, callback) {...}

saveButton.addEventListener('click', function() {
  save_ajax(document);
});

// Page 464 Answer

var document = {...};

function save_ajax(document, callback) {...}

var save_ajax_queued = DroppingQueue(1, save_ajax);

saveButton.addEventListener('click', function() {
  save_ajax_queued(document);
});