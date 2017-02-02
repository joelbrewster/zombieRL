var Game = {
  _display: null,
  _currentScreen: null,
  init: function() {
    //init goes here
    this._display = new ROT.Display({width: 80, height: 24});
    //Create a helper function for binding to an event - send it to the screen
    var game = this;
    var bindEventToScreen = function(event) {
      window.addEventListener(event, function(e) {
        // When an event is received, send it to the screen if there is one
        if (game._currentScreen !== null) {
          //send the event type and data to the screen
          game._currentScreen.handleInput(event, e);
        }
      });
    }
    bindEventToScreen('keydown');
    bindEventToScreen('keyup');
    bindEventToScreen('keypress');
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
    //Update the current screen, tell it that we entered it
    this._currentScreen = screen;
    if (this._currentScreen) {
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
    // Initialize the game
    Game.init();
    // add container to the page
    document.body.appendChild(Game.getDisplay().getContainer());
    // Load the start screen
    Game.switchScreen(Game.Screen.startScreen);
	}
}
