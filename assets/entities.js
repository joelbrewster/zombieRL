// Create our Mixins namespace
Game.Mixins = {};

// Define our Moveable mixin
Game.Mixins.Moveable = {
name: 'Moveable',
tryMove: function(x, y, map) {
  var tile = map.getTile(x, y);
  // Check if we can walk on the tile
  // and if so simply walk onto it
  if (tile.isWalkable()) {
    // Update the entity's position
    this._x = x;
    this._y = y;
    return true;
    // Check if the tile is destroyable, and
    // if so try to destroy it
  } else if (tile.isDestroyable()) {
    map.destroy(x, y);
    return true;
    }
    return false;
  }
}

// Player template
Game.PlayerTemplate = {
  character: '@',
  foreground: 'white',
  background: 'black',
  mixins: [Game.Mixins.Moveable]
}
