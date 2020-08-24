/**
 * Vue Method: _font_add
 * Adds a font to the list of used fonts
 */

function _font_add() {
  var fontName = googlefontpicker.value.trim();
  var googlefonts = app.googlefonts.items;

  for(var id in googlefonts) {
    var font = googlefonts[id];

    if(font.family.toLowerCase().trim() == fontName.toLowerCase()) {
      var defaultVariant = font.variants.includes('regular') ? ['regular'] : [font.variants[0]];

      app.fonts.push({
        family: fontName,
        selectedVariants: defaultVariant
      });

      googlefontpicker.value = '';

      break;
    }
  }
}
