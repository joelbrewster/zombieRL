var Game = {
  _display: null,
  _currentScreen: null,
  init: function() {
    //init goes here
    this._display = new ROT.Display({width: 80, height: 24});
  },
  getDisplay: function() {
    return this._display;
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
    // Create a 80 x 20 display
		// var display = new ROT.Display({width:80, height:20});
		// var container = display.getContainer();
    //Add the container to the page
		// document.body.appendChild(container);

    // //Start of hello word to test out display.drawText
		// var foreground, background, colors;
		// for (var i = 0; i < 15; i++) {
    //   //calculate foreground colors and get darker
    //   //calculate background colors and get lighter
			// foreground = ROT.Color.toRGB([255 - (i*20),
			                              // 255 - (i*20),
			                              // 255 - (i*20)]);
			// background = ROT.Color.toRGB([i*20, i*20, i*20]);
    //   // specify colors
			// colors = "%c{" + foreground + "}%b{" + background + "}";
    //   // draw the text at col 2, row 1
			// display.drawText(2, i, colors + "Hello, world!");
		// }
	}
}
