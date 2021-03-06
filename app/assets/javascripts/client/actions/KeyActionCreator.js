var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var ActionTypes = require('../constants/ActionTypes');
module.exports = KeyActionCreator = {
  handleKeyDown : function ( event ) {
    if(event.metaKey) return 0;
    event.preventDefault();
    event.stopped = true;

    var payload = {
      type    : ActionTypes.KEY_DOWN,
      keyCode : event.keyCode,
      charCode: event.charCode,
      ctrl    : event.ctrlKey,
      alt     : event.altKey,
      meta    : event.metaKey,
      shift   : event.shiftKey
    };

    AppDispatcher.dispatch( payload ); 
  },
}

window.onkeydown = KeyActionCreator.handleKeyDown;
