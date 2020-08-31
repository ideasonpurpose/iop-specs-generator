/**
 * Vue Method: _download_styleguide
 * Downloads a HTML Styleguide file
 */

function _download_styleguide() {
  var userdata = {
    colors: app.colors,
    breakpoints: app.breakpoints,
    wrapper: app.wrapper,
    fonts : app.fonts,
    specimen: app.specimen
  }

  var opts = {
    method: 'GET',
    headers: {}
  };

  fetch('styleguide.html', opts).then(function (response) {
    return response.text();
  })
  .then(function (body) {
    /**
     * Replace demo data with real project data
     */
    var styledata = JSON.stringify(userdata);
    var contents = body.split('//$$demodata$$');
    contents[1] = styledata;

    app._download_file(
      contents.join(''), 
      'text/html', 
      'Styleguide'
    );
  });
}
