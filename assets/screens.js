Game.Screen = {};

// Define the initial start screen
Game.Screen.startScreen = {
  enter: function() {
    console.log("Entered the start screen.");
  },
  exit : function() {
    console.log("Exited the start screen.");
  },
  render: function(display) {
    // Render the prompt to the screen
    display.drawText(1, 1, "%c{orange}Zombie Roguelike");
    display.drawText(1, 2, "Press [Enter] to start!");
  },
  handleInput: function(inputType, inputData) {
    //When [Enter] is pressed, go to the play screen
    if (inputType === 'keydown') {
      if (inputData.keyCode === ROT.VK_RETURN) {
        Game.switchScreen(Game.Screen.playScreen);
      }
    }
  }
}


