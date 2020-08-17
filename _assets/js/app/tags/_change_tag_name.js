/**
 * Vue Method: _tag_classname_change
 * Changes the object styles from the previous class to the new classname
 */

function _tag_classname_change() {
  var blockSelector = 'type-' + app.type.currentselector;
  var newBlockSelector = 'type-'+app.type.blocks[app.type.selected].class;

  for(var bp in app.breakpoints) {
    var thisBp = app.breakpoints[bp];

    if (thisBp.styles[blockSelector]) {
      thisBp.styles[newBlockSelector] = thisBp.styles[blockSelector];
      delete thisBp.styles[blockSelector];
    }
  }

  console.log(app.type.currentselector);

  _tag_select(app.type.selected);
}
