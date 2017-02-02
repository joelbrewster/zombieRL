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

// Define our playing screen
Game.Screen.playScreen = {
  enter: function() {
    console.log("Entered the play screen.");
  },
  exit : function() {
    console.log("Exited the play screen.");
  },
  // Render the prompt to the screen
  render: function(display) {
  display.drawText(3, 5, "%c{red}%b{white}Game started");
  display.drawText(4, 6, "Press [Enter] to win, [Esc] to lose!");
},
  handleInput: function(inputType, inputData) {
    if (inputType === 'keydown') {
      // If enter is pressed, go to the win screen
      // If escape is pressed, go to lose screen
      if (inputData.keyCode === ROT.VK_RETURN) {
        Game.switchScreen(Game.Screen.winScreen);
      } else if (inputData.keyCode === ROT.VK_ESCAPE) {
        Game.switchScreen(Game.Screen.loseScreen);
      }
    }
  }
}
