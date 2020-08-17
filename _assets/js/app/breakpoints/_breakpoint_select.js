/**
 * Vue Method: _breakpoint_select
 */

function _breakpoint_select(index) {
  app.selectedBreakpoint = index;
  _tag_select(app.type.selected);
}
