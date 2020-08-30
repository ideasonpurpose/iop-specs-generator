/**
 * Vue Method: _import_googlefonts_string
 * Constructs the CSS string to import Google Fonts
 * 
 * E.G.
 * https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap
 */

function _import_googlefonts_string() {
  var selectedFonts = this.fonts;
  var str = 'https://fonts.googleapis.com/css2?';

  for (var font in selectedFonts) {
    str += 'family=' + selectedFonts[font].family.replace(/ /g, '+') + ':ital,wght@';
    var tuples = [];
 
    for (var variant in selectedFonts[font].selectedVariants) {
      var thisVariant = selectedFonts[font].selectedVariants[variant];

      if (thisVariant == 'regular') thisVariant = '0,400';
      else if (thisVariant == 'italic') thisVariant = '1,400';
      else if (thisVariant.split('italic').length > 1) {
        thisVariant = '1,' + thisVariant.split('italic')[0];
      }
      else thisVariant = '0,' + thisVariant;

      tuples.push(thisVariant)
    }

    str += tuples.sort().join(';') + '&';
  }

  str += 'display=swap';

  return str;
}
