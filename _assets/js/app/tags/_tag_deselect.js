/**
 * Vue Method: _tag_deselect
 * Deselects a tag, closes the sidebar editor
 */

function _tag_deselect() {
  app.selectedTagIndex = null;
  app.currentselector = false;
  app.bindstyles = {};

  app.$forceUpdate();
}
