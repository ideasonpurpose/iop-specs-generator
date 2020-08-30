/**
 * Vue Method: _download_fonts
 * Downloads fonts data as SCSS
 */

function _download_fonts() {
  var data = '/**\n * Fonts\n';
  data += ' *\n';
  data += ' * Should always default to a system font stack\n';
  data += ' * https://css-tricks.com/snippets/css/system-font-stack/\n';
  data += ' */\n\n';

  data += '@import url("'+ app._import_googlefonts_string +'");\n\n';

  data += '.sans {\n'+
    '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;\n'+
  '}\n';

  app._download_file(
    data, 
    'text/css', 
    '_fonts.scss'
  );
}
