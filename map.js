let MAP_SIZE = 18;

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
  map: [
    new cliffTile(1, 0),
    new forestTile(2, 0),
    new plainTile(3, 0),
    new cliffTile(4, 0),
    new cliffTile(7, 0),
    new cliffTile(8, 0),
    new plainTile(9, 0),
    new cliffTile(10, 0),
    new plainTile(11, 0),
    new plainTile(12, 0),
    new cliffTile(13, 0),
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
    new plainTile(12, 1),
    new hillTile(13, 1),
    new cliffTile(14, 1),
    new cliffTile(15, 1),
    new cliffTile(16, 1),
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
    new plainTile(13, 2),
    new plainTile(14, 2),
    new hillTile(15, 2),
    new plainTile(16, 2),
    new cliffTile(17, 2),
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
    new plainTile(12, 3),
    new plainTile(13, 3),
    new cliffTile(14, 3),
    new cliffTile(15, 3),
    new plainTile(16, 3),
    new plainTile(17, 3),
    new cliffTile(0, 4),
    new plainTile(1, 4),
    new forestTile(2, 4),
    new forestTile(3, 4),
    new forestTile(4, 4),
    new plainTile(5, 4),
    new forestTile(6, 4),
    new plainTile(7, 4),
    new plainTile(8, 4),
    new plainTile(9, 4),
    new cliffTile(10, 4),
    new cliffTile(11, 4),
    new plainTile(12, 4),
    new hillTile(13, 4),
    new plainTile(14, 4),
    new cliffTile(15, 4),
    new plainTile(16, 4),
    new plainTile(17, 4),
    new cliffTile(0, 5),
    new plainTile(1, 5),
    new forestTile(2, 5),
    new forestTile(3, 5),
    new plainTile(4, 5),
    new forestTile(5, 5),
    new forestTile(6, 5),
    new plainTile(7, 5),
    new plainTile(8, 5),
    new plainTile(9, 5),
    new plainTile(10, 5),
    new plainTile(11, 5),
    new cliffTile(12, 5),
    new cliffTile(13, 5),
    new plainTile(14, 5),
    new cliffTile(15, 5),
    new plainTile(16, 5),
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
    new plainTile(13, 6),
    new plainTile(14, 6),
    new plainTile(15, 6),
    new plainTile(16, 6),
    new plainTile(17, 6),
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
    new plainTile(13, 7),
    new plainTile(14, 7),
    new plainTile(15, 7),
    new plainTile(16, 7),
    new plainTile(17, 7),
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
    new hillTile(12, 8),
    new cliffTile(13, 8),
    new cliffTile(14, 8),
    new cliffTile(15, 8),
    new plainTile(16, 8),
    new plainTile(17, 8),
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
    new cliffTile(13, 9),
    new caveTile(14, 9),
    new plainTile(15, 9),
    new cliffTile(16, 9),
    new plainTile(17, 9),
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
    new plainTile(13, 10),
    new cliffTile(14, 10),
    new caveTile(15, 10),
    new cliffTile(16, 10),
    new plainTile(17, 10),
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
    new plainTile(12, 11),
    new forestTile(13, 11),
    new forestTile(14, 11),
    new cliffTile(15, 11),
    new forestTile(16, 11),
    new plainTile(17, 11),
    new cliffTile(3, 12),
    new plainTile(4, 12),
    new caveTile(5, 12),
    new plainTile(6, 12),
    new forestTile(7, 12),
    new cliffTile(8, 12),
    new cliffTile(9, 12),
    new cliffTile(10, 12),
    new forestTile(11, 12),
    new forestTile(12, 12),
    new plainTile(13, 12),
    new forestTile(14, 12),
    new cliffTile(15, 12),
    new plainTile(16, 12),
    new hillTile(17, 12),
    new cliffTile(2, 13),
    new plainTile(3, 13),
    new plainTile(4, 13),
    new plainTile(5, 13),
    new plainTile(6, 13),
    new plainTile(7, 13),
    new plainTile(8, 13),
    new cliffTile(9, 13),
    new forestTile(10, 13),
    new forestTile(11, 13),
    new forestTile(12, 13),
    new caveTile(13, 13),
    new plainTile(14, 13),
    new cliffTile(15, 13),
    new plainTile(16, 13),
    new plainTile(17, 13),
    new cliffTile(1, 14),
    new plainTile(2, 14),
    new plainTile(3, 14),
    new plainTile(4, 14),
    new plainTile(5, 14),
    new plainTile(6, 14),
    new plainTile(7, 14),
    new plainTile(8, 14),
    new hillTile(9, 14),
    new cliffTile(10, 14),
    new plainTile(11, 14),
    new forestTile(12, 14),
    new cliffTile(13, 14),
    new cliffTile(14, 14),
    new forestTile(15, 14),
    new hillTile(16, 14),
    new forestTile(17, 14),
    new cliffTile(0, 15),
    new plainTile(1, 15),
    new plainTile(2, 15),
    new plainTile(3, 15),
    new forestTile(4, 15),
    new plainTile(5, 15),
    new plainTile(6, 15),
    new plainTile(7, 15),
    new plainTile(8, 15),
    new plainTile(9, 15),
    new caveTile(10, 15),
    new cliffTile(11, 15),
    new cliffTile(12, 15),
    new cliffTile(13, 15),
    new forestTile(14, 15),
    new forestTile(15, 15),
    new plainTile(16, 15),
    new plainTile(17, 15),
    new forestTile(0, 16),
    new plainTile(1, 16),
    new plainTile(2, 16),
    new plainTile(3, 16),
    new plainTile(4, 16),
    new plainTile(5, 16),
    new plainTile(6, 16),
    new cliffTile(7, 16),
    new plainTile(8, 16),
    new plainTile(9, 16),
    new plainTile(10, 16),
    new plainTile(11, 16),
    new plainTile(12, 16),
    new plainTile(13, 16),
    new forestTile(14, 16),
    new plainTile(15, 16),
    new plainTile(16, 16),
    new plainTile(17, 16),
    new forestTile(0, 17),
    new forestTile(1, 17),
    new cliffTile(2, 17),
    new cliffTile(3, 17),
    new plainTile(4, 17),
    new plainTile(5, 17),
    new cliffTile(6, 17),
    new cliffTile(8, 17),
    new plainTile(9, 17),
    new plainTile(10, 17),
    new plainTile(11, 17),
    new plainTile(12, 17),
    new plainTile(13, 17),
    new plainTile(14, 17),
    new plainTile(15, 17),
    new cliffTile(16, 17),
    new cliffTile(17, 17),
    // Underground
    new cliffTile(2, 8, 0),
    new cliffTile(3, 8, 0),
    new cliffTile(7, 8, 0),
    new cliffTile(8, 8, 0),
    new cliffTile(9, 8, 0),
    new cliffTile(11, 8, 0),
    new cliffTile(12, 8, 0),
    new cliffTile(13, 8, 0),
    new cliffTile(14, 8, 0),
    new cliffTile(1, 9, 0),
    new caveFloorTile(2, 9, 0),
    new caveFloorTile(3, 9, 0),
    new cliffTile(4, 9, 0),
    new cliffTile(6, 9, 0),
    new caveFloorTile(7, 9, 0),
    new caveFloorTile(8, 9, 0),
    new caveFloorTile(9, 9, 0),
    new cliffTile(10, 9, 0),
    new caveFloorTile(11, 9, 0),
    new caveFloorTile(12, 9, 0),
    new caveFloorTile(13, 9, 0),
    new caveExitTile(14, 9, 0),
    new cliffTile(15, 9, 0),
    new cliffTile(0, 10, 0),
    new caveExitTile(1, 10, 0),
    new cliffTile(2, 10, 0),
    new caveFloorTile(3, 10, 0),
    new cliffTile(4, 10, 0),
    new cliffTile(6, 10, 0),
    new caveFloorTile(7, 10, 0),
    new cliffTile(8, 10, 0),
    new caveFloorTile(9, 10, 0),
    new cliffTile(10, 10, 0),
    new caveFloorTile(11, 10, 0),
    new cliffTile(12, 10, 0),
    new cliffTile(13, 10, 0),
    new cliffTile(14, 10, 0),
    new caveExitTile(15, 10, 0),
    new cliffTile(16, 10, 0),
    new cliffTile(0, 11, 0),
    new caveFloorTile(1, 11, 0),
    new caveFloorTile(2, 11, 0),
    new caveFloorTile(3, 11, 0),
    new cliffTile(4, 11, 0),
    new cliffTile(6, 11, 0),
    new caveFloorTile(7, 11, 0),
    new caveFloorTile(8, 11, 0),
    new caveFloorTile(9, 11, 0),
    new caveFloorTile(10, 11, 0),
    new caveFloorTile(11, 11, 0),
    new cliffTile(12, 11, 0),
    new caveFloorTile(13, 11, 0),
    new caveFloorTile(14, 11, 0),
    new caveFloorTile(15, 11, 0),
    new cliffTile(16, 11, 0),
    new cliffTile(0, 12, 0),
    new caveFloorTile(1, 12, 0),
    new cliffTile(2, 12, 0),
    new cliffTile(3, 12, 0),
    new cliffTile(6, 12, 0),
    new caveFloorTile(7, 12, 0),
    new cliffTile(8, 12, 0),
    new cliffTile(9, 12, 0),
    new cliffTile(10, 12, 0),
    new caveFloorTile(11, 12, 0),
    new cliffTile(12, 12, 0),
    new cliffTile(13, 12, 0),
    new cliffTile(14, 12, 0),
    new caveFloorTile(15, 12, 0),
    new caveFloorTile(16, 12, 0),
    new cliffTile(17, 12, 0),
    new cliffTile(0, 13, 0),
    new caveFloorTile(1, 13, 0),
    new caveFloorTile(2, 13, 0),
    new cliffTile(3, 13, 0),
    new cliffTile(6, 13, 0),
    new caveFloorTile(7, 13, 0),
    new cliffTile(8, 13, 0),
    new cliffTile(9, 13, 0),
    new caveFloorTile(10, 13, 0),
    new caveFloorTile(11, 13, 0),
    new cliffTile(12, 13, 0),
    new caveExitTile(13, 13, 0),
    new cliffTile(14, 13, 0),
    new caveFloorTile(15, 13, 0),
    new cliffTile(16, 13, 0),
    new cliffTile(1, 14, 0),
    new cliffTile(2, 14, 0),
    new cliffTile(6, 14, 0),
    new caveFloorTile(7, 14, 0),
    new cliffTile(8, 14, 0),
    new cliffTile(10, 14, 0),
    new caveFloorTile(11, 14, 0),
    new cliffTile(12, 14, 0),
    new caveFloorTile(13, 14, 0),
    new caveFloorTile(14, 14, 0),
    new caveFloorTile(15, 14, 0),
    new caveFloorTile(16, 14, 0),
    new cliffTile(6, 15, 0),
    new caveFloorTile(7, 15, 0),
    new caveFloorTile(8, 15, 0),
    new cliffTile(9, 15, 0),
    new caveExitTile(10, 15, 0),
    new caveFloorTile(11, 15, 0),
    new cliffTile(12, 15, 0),
    new cliffTile(13, 15, 0),
    new cliffTile(14, 15, 0),
    new caveFloorTile(15, 15, 0),
    new cliffTile(16, 15, 0),
    new cliffTile(7, 16, 0),
    new cliffTile(8, 16, 0),
    new cliffTile(9, 16, 0),
    new cliffTile(10, 16, 0),
    new cliffTile(11, 16, 0),
    new cliffTile(15, 16, 0),
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
};

function getIndexFromPosition(x, y, z) {
  for (var i = 0; i < world.map.length; i++) {
    if (x === world.map[i].x && y === world.map[i].y && z === world.map[i].z) {
      return i;
    }
  }
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
