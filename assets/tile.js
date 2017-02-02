Game.Tile = function(glyph) {
  this._glyph = glyph;
};

Game.Tile.prototype.getGlyph = function() {
  return this._glyph;
};
