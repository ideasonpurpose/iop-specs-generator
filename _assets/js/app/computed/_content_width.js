/**
 * Vue Method: _content_width
 * Calculates maximum content width for each breakpoint
 */

function _content_width() {
  var obj = {};
  var app = this;

  for (var i = 0; i < app.breakpoints.length; i++) {
    if ((i + 1 < app.breakpoints.length)) {
      var w = Math.min(parseInt(app.breakpoints[i + 1].value) - 1, parseInt(app.wrapper.maxwidth));
      obj[i] = w - app.breakpoints[i].wrapperGutter * 2;
    }
    else {
      obj[i] = (app.wrapper.maxwidth) - app.breakpoints[i].wrapperGutter * 2;
    }
  }

  return obj;
}
