/**
 * Vue Method: _download_colors
 * Downloads color data as SCSS
 * 
 */

function _download_colors() {
  var data = '/**\n * Colors\n */\n\n';

  for (var color in app.colors) {
    var color = app.colors[color];
    var title = color.title.toLowerCase();
    var code = color.code.toLowerCase();

    if (title.length && code.length) {
      data += '$' + title + ': ' + code + ";\n";
    }
  }

  app._download_file(
    data, 
    'text/css', 
    '_colors.scss'
  );
}
