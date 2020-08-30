/**
 * Vue Method: _download_layout
 * Downloads layout data as SCSS
 */

function _download_layout() {
  function data_loop(value) {
    var data = '';

    for (var i in app.breakpoints) {
      var bp = app.breakpoints[i];

      if (bp.title && bp.value && bp[value]) {
        data += '  ' + bp.title.toLowerCase() + ': ' + bp[value] + 'px,\n';
      }
    }

    return data;
  }

  var data = '/**\n * Layout\n */\n\n';

  /**
   * Breakpoints
   */

  data += '// Breakpoints\n';
  data += '$site-breakpoints: (\n';
  data += data_loop('value');
  data += ');\n\n'

  /**
   * Rows & Columns
   */

  data += '// Columns and Rows\n' +
    '$row-class: ".row";\n' +
    '$column-class: ".col";\n' +
    '$column-count: 12;\n\n';

  /**
   * Column Gutters
   */

  data += '$column-gutter: (\n';
  data += data_loop('columnGutter');
  data += ');\n\n'

  /**
   * Wrapper Settings
   */
  data += '$wrapper-max-width: ' + app.wrapper.maxwidth + 'px;\n\n';

  data += '$wrapper-gutter: (\n';
  data += data_loop('wrapperGutter');
  data += ');\n\n'

  app._download_file(
    data,
    'text/css',
    '_layout.scss'
  );
}
