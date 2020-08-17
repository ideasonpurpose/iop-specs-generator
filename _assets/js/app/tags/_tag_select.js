/**
 * Vue Method: _tag_select
 * Set the currently selected tag
 * 
 * @param {int} blockIndex - type.blocks index OR false
 */

function _tag_select(blockIndex) {
  app.type.selected = blockIndex;
  app.type.currentselector = app.type.blocks[blockIndex]['class'];

  var blockSelector = 'type-' + app.type.currentselector;

  // sets a new selector object if it doesn't already exist
  if (!app.breakpoints[app.selectedBreakpoint].styles[blockSelector]) {
    app.breakpoints[app.selectedBreakpoint].styles[blockSelector] = {};
  }

  app.type.styles = app.breakpoints[app.selectedBreakpoint].styles[blockSelector];

  console.log(app.breakpoints[app.selectedBreakpoint].styles)
}
