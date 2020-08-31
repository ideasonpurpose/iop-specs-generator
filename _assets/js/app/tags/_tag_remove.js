/**
 * Vue Method: _tag_remove
 * Removes a tag
 */

function _tag_remove() {
  var index = app.selectedTagIndex;

  app._tag_deselect();
  app.specimen.splice(index, 1);
}
