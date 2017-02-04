Game.Tile = function(properties) {
    properties = properties || {};
    // Call the Glyph constructor with our properties
    Game.Glyph.call(this, properties);
    // Set up the properties. We use false by default.
    this._isWalkable = properties['isWalkable'] || false;
    this._isDestroyable = properties['isDestroyable'] || false;
};

// Make tiles inherit all the functionality from glyphs
Game.Tile.extend(Game.Glyph);

// Standard getters
Game.Tile.prototype.isWalkable = function() {
    return this._isWalkable;
}
Game.Tile.prototype.isDestroyable = function() {
    return this._isDestroyable;
}

Game.Tile.nullTile = new Game.Tile({})
Game.Tile.floorTile = new Game.Tile({
    character: '.',
    isWalkable: true
});
Game.Tile.wallTile = new Game.Tile({
    character: '#',
    foreground: 'grey',
    isDestroyable: true
});
