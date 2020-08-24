/**
 * Vue Method: _download_app_data
 * Downloads app data as JSON
 * 
 */

function _download_app_data() {
  var userdata = {
    colors: app.colors,
    breakpoints: app.breakpoints,
    wrapper: app.wrapper,
    fonts : app.fonts,
    specimen: app.specimen
  }

  app._download_file(
    JSON.stringify(userdata), 
    'application/json', 
    'Project_Data'
  );
}
