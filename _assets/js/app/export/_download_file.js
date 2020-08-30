/**
 * Vue Method: _download_file
 * Downloads a file
 * 
 * Callers: 
 * createdata/_download_app_data
 * createdata/_download_colors
 * createdata/_download_layout
 * _download_file_all
 *
 * @param {data} file data to be written to the document
 * @param {mime} file mimetype. e.g. application/json
 * @param {filename} can be with or without an extension
 */

function _download_file(data, mime, filename) {
  var link = document.createElement('a');

  link.download = filename;
  link.href = 'data:'+ mime +',' + encodeURIComponent(data);
  link.click();
}
