var Game = {
  _display: null,
  _currentScreen: null,
  _screenWidth: 80,
  _screenHeight: 24,
  init: function() {
    //init goes here
    this._display = new ROT.Display({width: this._screenWidth, height: this._screenHeight});
    //Create a helper function for binding to an event - send it to the screen
    var game = this;
    var bindEventToScreen = function(event) {
      window.addEventListener(event, function(e) {
        // When an event is received, send it to the screen if there is one
        if (game._currentScreen !== null) {
          //send the event type and data to the screen
          game._currentScreen.handleInput(event, e);
          //clear the screen
          game._display.clear();
          //render the screen
          game._currentScreen.render(game._display);
        }
      });
    }
    // Bind keyboard input events
    bindEventToScreen('keydown');
    // Unused for now
    // bindEventToScreen('keyup');
    // bindEventToScreen('keypress');
  },
  getDisplay: function() {
    return this._display;
  },
  getScreenWidth: function() {
    return this._screenWidth;
  },
  getScreenHeight: function() {
    return this._screenHeight;
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
