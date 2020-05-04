let player = {
  direction: "east",
  x: 7,
  y: 9,
  z: 1,
  totalTorchesLit: 0,
  lanternLight: 18,
  maxLanternLight: 18,
  artifacts: [],
  hasShovel: false,
  hasKey: false,
  goLeft: function () {
    if (player.direction === "east") {
      player.direction = "north";
    } else if (player.direction === "north") {
      player.direction = "west";
    } else if (player.direction === "west") {
      player.direction = "south";
    } else if (player.direction === "south") {
      player.direction = "east";
    }
    document.getElementById("description-text").innerHTML = "You turn left.";
    updateImage();
  },
  goRight: function () {
    if (player.direction === "west") {
      player.direction = "north";
    } else if (player.direction === "north") {
      player.direction = "east";
    } else if (player.direction === "east") {
      player.direction = "south";
    } else if (player.direction === "south") {
      player.direction = "west";
    }
    document.getElementById("description-text").innerHTML = "You turn right.";
    updateImage();
  },
  goForward: function () {
    if (player.direction === "west" && player.x > 0) {
      if (
        !world.map[getIndexFromPosition(player.x - 1, player.y, player.z)].isCollidable
      ) {
        player.x--;
        document.getElementById("description-text").innerHTML =
          "You move forward.";
      } else {
        document.getElementById("description-text").innerHTML =
          "You can't move here.";
      }
    } else if (player.direction === "north" && player.y > 0) {
      if (
        !world.map[getIndexFromPosition(player.x, player.y - 1, player.z)].isCollidable
      ) {
        player.y--;
        document.getElementById("description-text").innerHTML =
          "You move forward.";
      } else {
        document.getElementById("description-text").innerHTML =
          "You can't move here.";
      }
    } else if (player.direction === "east" && player.x < MAP_SIZE - 1) {
      if (
        !world.map[getIndexFromPosition(player.x + 1, player.y, player.z)].isCollidable
      ) {
        player.x++;
        document.getElementById("description-text").innerHTML =
          "You move forward.";
      } else {
        document.getElementById("description-text").innerHTML =
          "You can't move here.";
      }
    } else if (player.direction === "south" && player.y < MAP_SIZE - 1) {
      if (
        !world.map[getIndexFromPosition(player.x, player.y + 1, player.z)].isCollidable
      ) {
        player.y++;
        document.getElementById("description-text").innerHTML =
          "You move forward.";
      } else {
        document.getElementById("description-text").innerHTML =
          "You can't move here.";
      }
    }
    console.log(player.x + "," + player.y + " " + player.lanternLight);
    updateImage();

    let torchIndex = getTorchIndexFromPosition(player.x, player.y, player.z);
    if (torchIndex !== -1) {
      if (world.torches[torchIndex].isLit) {
        document.getElementById("description-text").innerHTML =
          "There is an lit torch here. You can relight your lantern.";
      } else {
        document.getElementById("description-text").innerHTML =
          "There is an unlit torch here. Use your lantern to light it!";
      }
    }

    let chestIndex = getTreasureChestIndexFromPosition(player.x, player.y, player.z);
    if (chestIndex !== -1) {
      document.getElementById("description-text").innerHTML =
        "There is a treasure chest here. You can use a key to open it.";
    }
    if (player.lanternLight > 0) {
      player.lanternLight--;
    }

    if (
      player.x === 3 &&
      player.y === 11 &&
      player.z === 1 &&
      !player.hasShovel
    ) {
      document.getElementById("description-text").innerHTML =
        "You found a shovel!";
      player.hasShovel = true;
      document.getElementById("shovel").style.visibility = "visible";
    }
    if (player.x === 11 && player.y === 2 && player.z === 1 && !player.hasKey) {
      document.getElementById("description-text").innerHTML =
        "You found a key!";
      player.hasKey = true;
      document.getElementById("key").style.visibility = "visible";
    }
    this.caveLogic();
  },
  caveLogic: function () {
    if (
      (player.x === 14 && player.y === 9) ||
      (player.x === 1 && player.y === 10) ||
      (player.x === 15 && player.y === 10) ||
      (player.x === 13 && player.y === 13) ||
      (player.x === 10 && player.y === 15)
    ) {
      if (player.z === 1) {
        player.z--;
        document.getElementById("description-text").innerHTML =
          "You enter a cave.";
      } else {
        player.z++;
        document.getElementById("description-text").innerHTML =
          "You left the cave.";
      }
    }
  },
};
