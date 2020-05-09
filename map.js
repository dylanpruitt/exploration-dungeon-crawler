let MAP_SIZE = 18;
let Z_SIZE = 2;

let plainTile = function (iX, iY, iZ = 1) {
  this.x = iX;
  this.y = iY;
  this.z = iZ;
  this.isCollidable = false;
  this.westImage = "images/plains.png";
  this.northImage = "images/plains.png";
  this.southImage = "images/plains.png";
  this.eastImage = "images/plains_east.png";
};
let forestTile = function (iX, iY, iZ = 1) {
  this.x = iX;
  this.y = iY;
  this.z = iZ;
  this.isCollidable = false;
  this.westImage = "images/forest.png";
  this.northImage = "images/forest.png";
  this.southImage = "images/forest.png";
  this.eastImage = "images/forest_east.png";
};
let cliffTile = function (iX, iY, iZ = 1) {
  this.x = iX;
  this.y = iY;
  this.z = iZ;
  this.isCollidable = true;
  this.westImage = "images/cliff.png";
  this.northImage = "images/cliff.png";
  this.southImage = "images/cliff.png";
  this.eastImage = "images/cliff.png";
};
let hillTile = function (iX, iY, iZ = 1) {
  this.x = iX;
  this.y = iY;
  this.z = iZ;
  this.isCollidable = false;
  this.westImage = "images/hills.png";
  this.northImage = "images/hills.png";
  this.southImage = "images/hills.png";
  this.eastImage = "images/hills_east.png";
};
let caveTile = function (iX, iY, iZ = 1) {
  this.x = iX;
  this.y = iY;
  this.z = iZ;
  this.isCollidable = false;
  this.westImage = "images/cave_entrance.png";
  this.northImage = "images/cave_entrance.png";
  this.southImage = "images/cave_entrance.png";
  this.eastImage = "images/cave_entrance.png";
};
let caveExitTile = function (iX, iY, iZ = 1) {
  this.x = iX;
  this.y = iY;
  this.z = iZ;
  this.isCollidable = false;
  this.westImage = "images/cave_exit.png";
  this.northImage = "images/cave_exit.png";
  this.southImage = "images/cave_exit.png";
  this.eastImage = "images/cave_exit.png";
};
let caveFloorTile = function (iX, iY, iZ = 1) {
  this.x = iX;
  this.y = iY;
  this.z = iZ;
  this.isCollidable = false;
  this.westImage = "images/cave_tile.png";
  this.northImage = "images/cave_tile.png";
  this.southImage = "images/cave_tile.png";
  this.eastImage = "images/cave_tile.png";
};

let world = {
  /// none -1, plain 0, forest 1, cliff 2, hill 3, entrance 4
  map: [
    -1, 2, 1, 0, 2, -1, -1, 2, 2, 0, 2, 0, 0, 2, -1, -1, -1, -1,
    2, 1, 1, 1, 2, 2, 2, 0, 0, 0, 2, 2, 0, 3, 2, 2, 2, -1,
    0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 2, 0, 0, 0, 0, 2,
    3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 2, 2, 0, 0,
    2, 0, 1, 1, 1, 0, 1, 0, 0, 0, 2, 2, 0, 3, 0, 2, 0, 0,
    2, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 3, 0, 3, 0, 0, 0, 0, 0,
    2, 2, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 3, 2, 2, 2, 0, 0,
    2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 3, 3, 2, 2, 4, 0, 2, 0,
    2, 4, 0, 1, 1, 1, 1, 1, 1, 0, 0, 3, 2, 0, 2, 4, 2, 0,
    -1, 2, 2, 0, 0, 0, 0, 1, 1, 1, 0, 2, 0, 1, 1, 0, 1, 0,
    -1, -1, -1, 2, 0, 0, 0, 0, 2, 2, 2, 1, 1, 0, 1, 2, 0, 3,
    -1, -1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 4, 0, 2, 0, 0,
    -1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 1, 2, 2, 1, 3, 1,
    2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4, 2, 2, 2, 1, 1, 0, 0,
    1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    1, 1, 2, 2, 0, 0, 2, -1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2,
    // Underground - exit 5, floor 6
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1,  2,  2, -1, -1, -1,  2,  2,  2, -1,  2,  2,  2,  2, -1, -1, -1,
    -1,  2,  6,  6,  2, -1,  2,  6,  6,  6,  2,  6,  6,  6,  5,  2, -1, -1,
     2,  5,  2,  6,  2, -1,  2,  6,  2,  6,  2,  6,  2,  2,  2,  5,  2, -1,
     2,  6,  6,  6,  2, -1,  2,  6,  6,  6,  6,  6,  2,  6,  6,  6,  2, -1,
     2,  6,  2,  2, -1, -1,  2,  6,  2,  2,  2,  6,  2,  2,  2,  6,  6,  2,
     2,  6,  6,  2, -1, -1,  2,  6,  2,  2,  6,  6,  2,  5,  2,  6,  2, -1,
    -1,  2,  2, -1, -1, -1,  2,  6,  2,  2,  2,  6,  2,  6,  6,  6,  2, -1,
    -1, -1, -1, -1, -1, -1,  2,  6,  6,  2,  5,  6,  2,  2,  2,  6,  2, -1,
    -1, -1, -1, -1, -1, -1, -1,  2,  2,  2,  2,  2, -1, -1, -1,  2, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ],
  torches: [
    { x: 9, y: 9, z: 1, isLit: false },
    { x: 10, y: 6, z: 1, isLit: false },
    { x: 5, y: 6, z: 1, isLit: false },
    { x: 2, y: 8, z: 1, isLit: false },
    { x: 7, y: 12, z: 1, isLit: false },
    { x: 4, y: 11, z: 1, isLit: false },
    { x: 3, y: 0, z: 1, isLit: false },
    { x: 0, y: 2, z: 1, isLit: false },
    { x: 9, y: 3, z: 1, isLit: false },
    { x: 4, y: 3, z: 1, isLit: false },
    { x: 0, y: 6, z: 1, isLit: false },
    { x: 7, y: 1, z: 1, isLit: false },
    { x: 6, y: 8, z: 1, isLit: false },
    { x: 7, y: 5, z: 1, isLit: false },
    { x: 2, y: 5, z: 1, isLit: false },
    { x: 11, y: 0, z: 1, isLit: false },
    { x: 13, y: 3, z: 1, isLit: false },
    { x: 17, y: 3, z: 1, isLit: false },
    { x: 16, y: 6, z: 1, isLit: false },
    { x: 13, y: 7, z: 1, isLit: false },
    { x: 15, y: 9, z: 1, isLit: false },
    { x: 12, y: 11, z: 1, isLit: false },
    { x: 10, y: 13, z: 1, isLit: false },
    { x: 14, y: 13, z: 1, isLit: false },
    { x: 16, y: 13, z: 1, isLit: false },
    { x: 4, y: 14, z: 1, isLit: false },
    { x: 1, y: 15, z: 1, isLit: false },
    { x: 8, y: 15, z: 1, isLit: false },
    { x: 14, y: 15, z: 1, isLit: false },
    { x: 5, y: 16, z: 1, isLit: false },
    { x: 17, y: 16, z: 1, isLit: false },
    { x: 15, y: 17, z: 1, isLit: false },
    // Underground
    { x: 2, y: 9, z: 0, isLit: false },
    { x: 1, y: 12, z: 0, isLit: false },
    { x: 7, y: 9, z: 0, isLit: false },
    { x: 7, y: 13, z: 0, isLit: false },
    { x: 10, y: 13, z: 0, isLit: false },
    { x: 11, y: 9, z: 0, isLit: false },
    { x: 13, y: 11, z: 0, isLit: false },
    { x: 16, y: 12, z: 0, isLit: false },
    { x: 15, y: 15, z: 0, isLit: false },
  ],
  shovelSpots: [
    { x: 1, y: 1, z: 1, artifact: "Ruby Necklace" },
    { x: 9, y: 1, z: 1, artifact: "Tennis Ball" },
    { x: 7, y: 3, z: 1, artifact: "Vinyl Record" },
    { x: 1, y: 5, z: 1, artifact: "Harmonica" },
    { x: 4, y: 6, z: 1, artifact: "Old Pocketwatch" },
    { x: 9, y: 6, z: 1, artifact: "Wooden Flute" },
    { x: 7, y: 8, z: 1, artifact: "Arrowhead" },
    {
      x: 11,
      y: 8,
      z: 1,
      artifact:
        "The General Theory of Employment, Interest, and Money by John Maynard Keynes",
    },
    { x: 4, y: 9, z: 1, artifact: "Smiling Rock" },
    { x: 8, y: 11, z: 1, artifact: "Rabbit Foot" },
    { x: 17, y: 7, z: 1, artifact: "Sapphire Necklace" },
    { x: 12, y: 12, z: 1, artifact: "Sun Pendant" },
    { x: 13, y: 12, z: 1, artifact: "Wacky Garden Gnome" },
    { x: 2, y: 14, z: 1, artifact: "Moon Pendant" },
    { x: 6, y: 14, z: 1, artifact: "Mood Ring" },
    { x: 12, y: 16, z: 1, artifact: "Shutter Shades" },
    // Underground
    { x: 9, y: 9, z: 0, artifact: "Ruby Ring" },
    { x: 11, y: 12, z: 0, artifact: "Bifocals" },
    { x: 15, y: 13, z: 0, artifact: "Broken Flip Phone" },
    { x: 7, y: 15, z: 0, artifact: "Playing Cards" },
  ],
  treasureChests: [
    { x: 5, y: 2, z: 1, artifact: "Old Soda Bottle" },
    { x: 11, y: 5, z: 1, artifact: "Unsettling Garden Gnome" },
    { x: 3, y: 7, z: 1, artifact: "Propeller Hat" },
    { x: 9, y: 8, z: 1, artifact: "Survival Magazine" },
    { x: 10, y: 11, z: 1, artifact: "Benevolent Garden Gnome" },
    { x: 16, y: 2, z: 1, artifact: "Traffic Cone" },
    { x: 14, y: 11, z: 1, artifact: "Bug Fossil" },
    { x: 4, y: 17, z: 1, artifact: "Fancy Mirror" },
    { x: 15, y: 17, z: 1, artifact: "Picture Frame" },
    // Underground
    { x: 2, y: 13, z: 0, artifact: "Hunter's Bow" },
  ],
  generateMap : function () {
    let tiles = [plainTile, forestTile, cliffTile, hillTile, caveTile, caveExitTile, caveFloorTile];
    let temporaryMap = [];
    let NO_TILE = -1;

    for (let i = Z_SIZE; i--;) {
      for (let j = 0; j < MAP_SIZE * MAP_SIZE; j++) {
        let zOffset = (Z_SIZE - i - 1) * MAP_SIZE; 
        let tileIndex = this.map[j + (zOffset * MAP_SIZE)];
        if (tileIndex !== NO_TILE) {
          let tilePosition = getPositionFromIndex ((j + (zOffset * MAP_SIZE)), zOffset);
          temporaryMap.push (new tiles[tileIndex](tilePosition.x, tilePosition.y, i));
        }
      }
    }
    this.map = temporaryMap;
  }
};

function getIndexFromPosition(x, y, z) {
  for (var i = 0; i < world.map.length; i++) {
    if (x === world.map[i].x && y === world.map[i].y && z === world.map[i].z) {
      return i;
    }
  }
}

function getPositionFromIndex(i, zOffset = 0) {
  let position = {
    x: i % MAP_SIZE,
    y: Math.floor(i / MAP_SIZE) - zOffset
  };
  return position;
}

function getTorchIndexFromPosition(x, y, z) {
  let NONE_FOUND = -1;
  for (let i = 0; i < world.torches.length; i++) {
    if (x === world.torches[i].x && y === world.torches[i].y && z === world.torches[i].z) {
      return i;
    }
  }

  return NONE_FOUND;
}

function getShovelSpotIndexFromPosition(x, y) {
  let NONE_FOUND = -1;
  for (let i = 0; i < world.shovelSpots.length; i++) {
    if (x === world.shovelSpots[i].x && y === world.shovelSpots[i].y && z === world.shovelSpots[i].z) {
      return i;
    }
  }

  return NONE_FOUND;
}

function getTreasureChestIndexFromPosition(x, y) {
  let NONE_FOUND = -1;
  for (let i = 0; i < world.treasureChests.length; i++) {
    if (x === world.treasureChests[i].x && y === world.treasureChests[i].y && z === world.treasureChests[i].z) {
      return i;
    }
  }

  return NONE_FOUND;
}
