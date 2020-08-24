/**
 * Vue Method: _font_remove
 * Removes a font from the list of used fonts
 */

function _font_remove(index) {
  /**
   * When removing a font family, 
   * make sure we remove all style references
   * to that family, including font-weight and italics.
   */

  for (bp in app.breakpoints) {
    var thisStyles = app.breakpoints[bp].styles;

    for (selector in thisStyles) {
      var thisSelector = thisStyles[selector];

      if(thisSelector['font-family'] == app.fonts[index].family) {
        delete thisSelector['font-family'];
        delete thisSelector['font-weight'];
        delete thisSelector['font-style'];
      }
    }
  }

  app.fonts.splice(index, 1);
}
