function updatePostById(category, id, modifyPost) {
  return nestedUpdate(category, ['posts', id], modifyPost);
}

function updateAuthor(post, modifyUser) {
  return update(post, 'author', modifyUser);
}

function capitalizeName(user) {
  return update(user, 'name', capitalize);
}

updatePostById(blogCategory, '12', function(post) {
  return updateAuthor(post, capitalizeUserName);
});