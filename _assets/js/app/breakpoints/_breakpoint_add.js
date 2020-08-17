/**
 * Vue Method: _breakpoint_add
 * Adds a new breakpoint
 */

function _breakpoint_add() {
  app.breakpoints.push({
    'title': null,
    'value': null,
    'wrapperGutter': null,
    'columnGutter': null,
    'styles': {}
  })
}
