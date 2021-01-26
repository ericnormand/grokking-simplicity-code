var image = newImageDB.getImage('123');
if(image === undefined)
  image = oldImageDB.getImage('123');

function getWithRetries(url, retriesLeft, success, error) {
  if(retriesLeft <= 0)
    error('No more retries');
  ajaxGet(url, success, function(e) {
    getWithRetries(url, retriesLeft - 1, success, error);
  });
}