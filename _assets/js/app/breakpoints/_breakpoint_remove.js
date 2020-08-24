/**
 * Vue Method: _breakpoint_remove
 * Removes a breakpoint entirely and all its associated styling
 * 
 * @param {index} breakpoints array index 
 */

function _breakpoint_remove(index) {
  app.breakpoints.splice(index, 1);
}
