Game.Map = function(tiles) {
  this._tiles = tiles;
  //cache the width and height based on the length of the dimensions of the tiles array
  this._width = tiles.length;
  this._height = tile[0].length;
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
