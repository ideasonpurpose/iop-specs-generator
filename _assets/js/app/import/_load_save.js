/**
 * Vue Method: _load_save
 * Loads data into the project
 */

function _load_save(app, data) {
  if(!data) return false;

  Object.assign(app._data, JSON.parse(data));
  app.$forceUpdate();
}

