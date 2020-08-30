/**
 * Vue Method: _tag_select
 * Set the currently selected tag
 * 
 * @param {int} blockIndex - specimen index OR null
 */

function _tag_select(blockIndex) {
  app.selectedTagIndex = blockIndex;
  app.currentselector = app.specimen[blockIndex]['class'];

  console.log(app.currentselector)

  // sets a new selector object if it doesn't already exist
  if (!app.breakpoints[app.selectedBreakpoint].styles[app.currentselector]) {
    app.$set(app.breakpoints[app.selectedBreakpoint].styles, app.currentselector, {});
  }

  app.bindstyles = app.breakpoints[app.selectedBreakpoint].styles[app.currentselector];

  app.$forceUpdate();
}
