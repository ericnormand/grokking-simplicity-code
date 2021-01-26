saveUserAjax(user, function() {
  setUserLoadingDOM(false);
});
setUserLoadingDOM(true);
saveDocumentAjax(document, function() {
  setDocLoadingDOM(false);
});
setDocLoadingDOM(true);