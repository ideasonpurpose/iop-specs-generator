function _isUnusedClass(blockSelector) {
  var unused = true;

  for( var block in app.specimen ) {
    var blockClassname = 'type-' + app.specimen[block].class;

    if( blockClassname == blockSelector ) {
      unused = false;
      break;
    }
  }

  return unused;
}


/**
 * Vue Method: _tag_classname_change
 * Changes the object styles from the previous class to the new classname
 */

function _tag_classname_change() {
  app.specimen[app.selectedTagIndex].class = app.specimen[app.selectedTagIndex].class.replace(/ /g, '-');

  var blockSelector = 'type-' + app.currentselector;
  var newBlockSelector = 'type-' + app.specimen[app.selectedTagIndex].class;

  for (var bp in app.breakpoints) {
    var thisBp = app.breakpoints[bp];

    /**
     * Element was assigned an existing class
     */
    if (thisBp.styles[newBlockSelector]) {
      /**
       * Remove previous class if not used elsewhere
       */

      if( _isUnusedClass(blockSelector) ) {
        delete thisBp.styles[blockSelector];
      }
    }

    /**
     * Element was assigned a new class
     * Clonse previous styles into the new class
     * then, remove the previous class
     */
    else if (thisBp.styles[blockSelector]) {
      thisBp.styles[newBlockSelector] = Object.assign({}, thisBp.styles[blockSelector]);

      if( _isUnusedClass(blockSelector) ) {
        delete thisBp.styles[blockSelector];
      }
    }
  }

  app.$forceUpdate();
  _tag_select(app.selectedTagIndex);
}
