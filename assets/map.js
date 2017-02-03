Game.Map = function(tiles) {
  this._tiles = tiles;
  //cache the width and height based on the length of the dimensions of the tiles array
  this._width = tiles.length;
  this._height = tiles[0].length;
};

//standard getters
Game.Map.prototype.getWidth = function() {
  return this._width;
};
Game.Map.prototype.getHeight = function() {
  return this._height;
};

// Get the tile for a given coordinate set
Game.Map.prototype.getTile = function(x, y) {
  //Make sure we are inside the bounds, if not return null tile
  if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
    return Game.Tile.nullTile;
  } else {
    return this._tiles[x][y] || Game.Tile.nullTile;
  }
};

Game.Map.prototype.destroy = function(x, y) {
  //If the tile is destroyable, change it to a floor
  if (this.getTile(x, y).isDestroyable()) {
    this._tiles[x][y] = Game.Tile.floorTile;
  }
}

Game.Map.prototype.getRandomFloorPosition = function() {
  // Randomly generate a tile which is a floor
  var x, y;
  do {
    x = Math.floor(Math.random() * this._width);
    y = Math.floor(Math.random() * this._width);
  } while (this.getTile(x, y) != Game.Tile.floorTile);
  return {x: x, y: y};
}
