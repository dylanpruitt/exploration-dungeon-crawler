let MAP_SIZE = 13;

let plainTile = function (iX, iY) {
  this.x = iX;
  this.y = iY;
  this.isCollidable = false;
  this.westImage = "images/plains.png";
  this.northImage = "images/plains.png";
  this.southImage = "images/plains.png";
  this.eastImage = "images/plains_east.png";
};
let forestTile = function (iX, iY) {
  this.x = iX;
  this.y = iY;
  this.isCollidable = false;
  this.westImage = "images/forest.png";
  this.northImage = "images/forest.png";
  this.southImage = "images/forest.png";
  this.eastImage = "images/forest_east.png";
};
let cliffTile = function (iX, iY) {
  this.x = iX;
  this.y = iY;
  this.isCollidable = true;
  this.westImage = "images/cliff.png";
  this.northImage = "images/cliff.png";
  this.southImage = "images/cliff.png";
  this.eastImage = "images/cliff.png";
};
let hillTile = function (iX, iY) {
  this.x = iX;
  this.y = iY;
  this.isCollidable = false;
  this.westImage = "images/hills.png";
  this.northImage = "images/hills.png";
  this.southImage = "images/hills.png";
  this.eastImage = "images/hills_east.png";
};
let caveTile = function (iX, iY) {
  this.x = iX;
  this.y = iY;
  this.isCollidable = false;
  this.westImage = "images/cave_entrance.png";
  this.northImage = "images/cave_entrance.png";
  this.southImage = "images/cave_entrance.png";
  this.eastImage = "images/cave_entrance.png";
};
let largeRiverTile = function (iX, iY) {
  this.x = iX;
  this.y = iY;
  this.isCollidable = false;
  this.westImage = "images/mid_river_stream.png";
  this.northImage = "images/river_border.png";
  this.southImage = "images/river_border.png";
  this.eastImage = "images/mid_river_stream.png";
};

let bridgeTile = {
  x: 3,
  y: 4,
  isCollidable: false,
  westImage: "images/mid_river_bridge.png",
  northImage: "images/river_border.png",
  southImage: "images/river_border.png",
  eastImage: "images/mid_river_bridge.png",
};

let overworld = {
  map: [
    new cliffTile(1, 0),
    new forestTile(2, 0),
    new plainTile(3, 0),
    new cliffTile(4, 0),
    new cliffTile(7, 0),
    new cliffTile(8, 0),
    new plainTile(9, 0),
    new cliffTile(10, 0),
    new cliffTile(0, 1),
    new forestTile(1, 1),
    new forestTile(2, 1),
    new forestTile(3, 1),
    new cliffTile(4, 1),
    new cliffTile(5, 1),
    new cliffTile(6, 1),
    new plainTile(7, 1),
    new plainTile(8, 1),
    new plainTile(9, 1),
    new cliffTile(10, 1),
    new cliffTile(11, 1),
    new plainTile(0, 2),
    new forestTile(1, 2),
    new forestTile(2, 2),
    new plainTile(3, 2),
    new plainTile(4, 2),
    new forestTile(5, 2),
    new forestTile(6, 2),
    new plainTile(7, 2),
    new plainTile(8, 2),
    new forestTile(9, 2),
    new forestTile(10, 2),
    new plainTile(11, 2),
    new cliffTile(12, 2),
    new hillTile(0, 3),
    new plainTile(1, 3),
    new plainTile(2, 3),
    new plainTile(3, 3),
    new plainTile(4, 3),
    new plainTile(5, 3),
    new plainTile(6, 3),
    new plainTile(7, 3),
    new hillTile(8, 3),
    new plainTile(9, 3),
    new plainTile(10, 3),
    new cliffTile(11, 3),
    new cliffTile(0, 4),
    new largeRiverTile(1, 4),
    new largeRiverTile(2, 4),
    bridgeTile,
    new largeRiverTile(4, 4),
    new largeRiverTile(5, 4),
    new largeRiverTile(6, 4),
    new largeRiverTile(7, 4),
    new largeRiverTile(8, 4),
    new largeRiverTile(9, 4),
    new cliffTile(10, 4),
    new cliffTile(11, 4),
    new cliffTile(0, 5),
    new plainTile(1, 5),
    new forestTile(2, 5),
    new forestTile(3, 5),
    new forestTile(4, 5),
    new forestTile(5, 5),
    new plainTile(6, 5),
    new plainTile(7, 5),
    new plainTile(8, 5),
    new plainTile(9, 5),
    new plainTile(10, 5),
    new plainTile(11, 5),
    new cliffTile(12, 5),
    new forestTile(0, 6),
    new forestTile(1, 6),
    new forestTile(2, 6),
    new forestTile(3, 6),
    new plainTile(4, 6),
    new plainTile(5, 6),
    new plainTile(6, 6),
    new forestTile(7, 6),
    new forestTile(8, 6),
    new plainTile(9, 6),
    new plainTile(10, 6),
    new plainTile(11, 6),
    new hillTile(12, 6),
    new plainTile(0, 7),
    new plainTile(1, 7),
    new forestTile(2, 7),
    new plainTile(3, 7),
    new plainTile(4, 7),
    new plainTile(5, 7),
    new plainTile(6, 7),
    new plainTile(7, 7),
    new forestTile(8, 7),
    new plainTile(9, 7),
    new hillTile(10, 7),
    new plainTile(11, 7),
    new hillTile(12, 7),
    new cliffTile(1, 8),
    new forestTile(2, 8),
    new plainTile(3, 8),
    new forestTile(4, 8),
    new forestTile(5, 8),
    new forestTile(6, 8),
    new plainTile(7, 8),
    new plainTile(8, 8),
    new plainTile(9, 8),
    new plainTile(10, 8),
    new hillTile(11, 8),
    new cliffTile(12, 8),
    new cliffTile(0, 9),
    new forestTile(1, 9),
    new forestTile(2, 9),
    new forestTile(3, 9),
    new forestTile(4, 9),
    new forestTile(5, 9),
    new forestTile(6, 9),
    new plainTile(7, 9),
    new plainTile(8, 9),
    new plainTile(9, 9),
    new hillTile(10, 9),
    new hillTile(11, 9),
    new cliffTile(12, 9),
    new cliffTile(0, 10),
    new caveTile(1, 10),
    new plainTile(2, 10),
    new forestTile(3, 10),
    new forestTile(4, 10),
    new forestTile(5, 10),
    new forestTile(6, 10),
    new forestTile(7, 10),
    new forestTile(8, 10),
    new plainTile(9, 10),
    new plainTile(10, 10),
    new hillTile(11, 10),
    new cliffTile(12, 10),
    new cliffTile(1, 11),
    new cliffTile(2, 11),
    new plainTile(3, 11),
    new plainTile(4, 11),
    new plainTile(5, 11),
    new plainTile(6, 11),
    new forestTile(7, 11),
    new forestTile(8, 11),
    new forestTile(9, 11),
    new plainTile(10, 11),
    new cliffTile(11, 11),
    new cliffTile(3, 12),
    new plainTile(4, 12),
    new caveTile(5, 12),
    new plainTile(6, 12),
    new forestTile(7, 12),
    new cliffTile(8, 12),
    new cliffTile(9, 12),
    new cliffTile(10, 12),
  ],
  torches: [
    { x: 9, y: 9, isLit: false },
    { x: 10, y: 6, isLit: false },
    { x: 5, y: 6, isLit: false },
    { x: 2, y: 8, isLit: false },
    { x: 7, y: 12, isLit: false },
    { x: 4, y: 11, isLit: false },
    { x: 3, y: 0, isLit: false },
    { x: 0, y: 2, isLit: false },
    { x: 9, y: 3, isLit: false },
    { x: 4, y: 3, isLit: false },
    { x: 0, y: 6, isLit: false },
    { x: 7, y: 1, isLit: false },
    { x: 6, y: 8, isLit: false },
    { x: 7, y: 5, isLit: false },
    { x: 2, y: 5, isLit: false },
  ],
  shovelSpots: [
    { x: 1, y: 1, artifact: "Ruby Necklace" },
    { x: 9, y: 1, artifact: "Tennis Ball" },
    { x: 7, y: 3, artifact: "Vinyl Record" },
    { x: 1, y: 5, artifact: "Harmonica" },
    { x: 4, y: 6, artifact: "Old Pocketwatch" },
    { x: 9, y: 6, artifact: "Wooden Flute" },
    { x: 7, y: 8, artifact: "Arrowhead" },
    {
      x: 11,
      y: 8,
      artifact:
        "The General Theory of Employment, Interest, and Money by John Maynard Keynes",
    },
    { x: 4, y: 9, artifact: "Smiling Rock" },
    { x: 8, y: 11, artifact: "Jade Necklace" },
  ],
  treasureChests: [
    { x: 5, y: 2, artifact: "Old Soda Bottle" },
    { x: 11, y: 5, artifact: "Unsettling Garden Gnome" },
    { x: 3, y: 7, artifact: "Propeller Hat" },
    { x: 9, y: 8, artifact: "Survival Magazine" },
    { x: 10, y: 11, artifact: "Benevolent Garden Gnome" },
  ],
};

function getIndexFromPosition(x, y) {
  for (var i = 0; i < overworld.map.length; i++) {
    if (x === overworld.map[i].x && y === overworld.map[i].y) {
      return i;
    }
  }
}

function getTorchIndexFromPosition(x, y) {
  let NONE_FOUND = -1;
  for (let i = 0; i < overworld.torches.length; i++) {
    if (x === overworld.torches[i].x && y === overworld.torches[i].y) {
      return i;
    }
  }

  return NONE_FOUND;
}

function getShovelSpotIndexFromPosition(x, y) {
  let NONE_FOUND = -1;
  for (let i = 0; i < overworld.shovelSpots.length; i++) {
    if (x === overworld.shovelSpots[i].x && y === overworld.shovelSpots[i].y) {
      return i;
    }
  }

  return NONE_FOUND;
}

function getTreasureChestIndexFromPosition(x, y) {
  let NONE_FOUND = -1;
  for (let i = 0; i < overworld.treasureChests.length; i++) {
    if (x === overworld.treasureChests[i].x && y === overworld.treasureChests[i].y) {
      return i;
    }
  }

  return NONE_FOUND;
}