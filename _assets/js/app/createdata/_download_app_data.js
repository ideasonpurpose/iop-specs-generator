/**
 * Vue Method: _download_app_data
 * Downloads app data as JSON
 * 
 */

function _download_app_data() {
  app._download_file(
    JSON.stringify(app._data), 
    'application/json', 
    'Project_Data'
  );
}
