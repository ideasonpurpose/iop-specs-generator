/**
 * Vue Method: _download_typography
 * Downloads typography data as SCSS
 */

/**
 * Verifies that the selector has properties
 * and at least one of those has a value
 */
function validateSelector (sel) {
  if ( Object.keys(sel).length ) {

    for (var prop in sel) {
      if(sel[prop].trim().length) {
        return true;
        break;
      }
    }

  }

  return false;
}

function _download_typography() {
  var data = '/**\n * Typography\n */\n\n';

  data += '.type- {';

  // loop breakpoints
  for (var i in app.breakpoints) {
    var styles = app.breakpoints[i].styles;
    var indent = '  ';

    // ignore sm breakpoint
    if (app.breakpoints[i].title != 'sm') {
      data += '\n  @include mq(' + app.breakpoints[i].title + ') {';
      indent = '    ';
    }

    // loop breakpoint styles
    for (var selector in styles) {
      if( validateSelector(styles[selector]) ) {

        // begin selector
        data += '\n'+ indent +'&' + selector.toLowerCase() + ' {\n';

        // loop selector properties
        for (var prop in styles[selector]) {
          var val = styles[selector][prop].trim();

          // ignore empty value properties
          if(val.length) {

            // wrap font family value with double quotes (for multiple word fontfaces)
            if (prop == "font-family") {
              val = '"' + val + '"';
            }

            data += '  ' + indent + prop + ': ' + val + ';\n';
          }
        }

        // end selector
        data += indent + '}\n';
      }
    }

    // ignore sm breakpoint
    if (app.breakpoints[i].title != 'sm') {
      data += '  }\n';
    }
  }

  data += '}\n';

  app._download_file(data, 'text/css', '_typography.scss');
}
