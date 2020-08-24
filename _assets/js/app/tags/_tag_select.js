/**
 * Vue Method: _tag_select
 * Set the currently selected tag
 * 
 * @param {int} blockIndex - specimen index OR null
 */

function _tag_select(blockIndex) {
  app.selectedTagIndex = blockIndex;
  app.currentselector = app.specimen[blockIndex]['class'];

  var classname = 'type-' + app.currentselector;

  // sets a new selector object if it doesn't already exist
  if (!app.breakpoints[app.selectedBreakpoint].styles[classname]) {
    app.$set(app.breakpoints[app.selectedBreakpoint].styles, classname, {});
  }

  app.bindstyles = app.breakpoints[app.selectedBreakpoint].styles[classname];

  app.$forceUpdate();
}
