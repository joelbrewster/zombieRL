// Check if rot.js can work on this browser
if (!ROT.isSupported()) {
    alert("The rot.js library isn't supported by your browser.");
} else {
    // Good to go!
}

// Create a 80 x 20 display
var display = new ROT.Display({width: 80, height: 20});
var container = display.getContainer();
//Add the container to the page
document.body.appendChild(container);
