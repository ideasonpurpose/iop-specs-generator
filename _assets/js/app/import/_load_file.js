/**
 * Vue Method: _load_file
 * Reads an imported json file
 */


function _load_file(event) {
  const input = event.target;

  if ('files' in input && input.files.length > 0) {
    var reader = new FileReader();
    var file = input.files[0];

    return new Promise(function (resolve, reject) {
      reader.onload = function (event) {
        resolve(event.target.result)
      }

      reader.onerror = function (error) { 
        reject(error) 
      }

      reader.readAsText(file);
    })
      .then(function (data) {
        _load_save(app, data);
      })
      .catch(function (error) {
        console.log(error)
      });
  }
}

