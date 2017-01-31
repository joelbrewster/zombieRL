var Game = {
  _display: null,
  _currentScreen: null,
  init: function() {
    //init goes here
    this._display = new ROT.Display({width: 80, height: 24});
  },
  getDisplay: function() {
    return this._display;
  },
  switchScreen: function(screen) {
    //screen before, notify that exited
    if (this._currentScreen !== null) {
      this._currentScreen.exit();
    }
    //clear the display
    this.getDisplay().clear();
    if (!this._currentScreen !== null) {
      this._currentScreen.enter();
      this._currentScreen.render(this._display);
    }
  }
}
window.onload = function() {
  // Check if rot.js can work on this browser
	if (!ROT.isSupported()) {
		alert("The rot.js library isn't supported by your browser.");
	} else {
    Game.init();
    // add container to the page
    document.body.appendChild(Game.getDisplay().getContainer());
	}
}
