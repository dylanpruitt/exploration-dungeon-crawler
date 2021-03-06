let Item = function (sName, sDescription, fUse) {
  this.name = sName;
  this.description = sDescription;
  this.use = fUse;
};

let compass = new Item("Compass", "An old compass.", () => {
  document.getElementById("description-text").innerHTML =
    "Your compass reads: " + player.direction;
});
let lantern = new Item("Lantern", "Your trusty light.", () => {
  let torchIndex = getTorchIndexFromPosition(player.x, player.y, player.z);

  if (torchIndex !== -1) {
    if (!world.torches[torchIndex].isLit && player.lanternLight > 0) {
      world.torches[torchIndex].isLit = true;
      player.totalTorchesLit++;
      document.getElementById("description-text").innerHTML =
        "New torch found!! Total torches lit: " + player.totalTorchesLit;
    } else if (world.torches[torchIndex].isLit) {
      player.lanternLight = player.maxLanternLight;
      document.getElementById("description-text").innerHTML =
        "Relit lantern at torch!";
      updateImage();
    }
  } else {
    document.getElementById("description-text").innerHTML =
      "You check the lantern. Light left: " + player.lanternLight;
  }
});
let shovel = new Item("Shovel", "A worn shovel.", () => {
  let spotIndex = getShovelSpotIndexFromPosition(player.x, player.y, player.z);

  if (spotIndex !== -1) {
    document.getElementById("description-text").innerHTML =
      "You dig and find " + world.shovelSpots[spotIndex].artifact + "!";
    player.artifacts.push(world.shovelSpots[spotIndex].artifact);
    world.shovelSpots.splice(spotIndex, 1);
  } else {
    document.getElementById("description-text").innerHTML =
      "You dig a hole with the shovel, but you can't seem to find anything.";
  }
});
let geolocator = new Item(
  "Geolocator",
  "It helps you see your position on the map.",
  () => {
    document.getElementById("description-text").innerHTML =
      "Your position: (" + player.x + ", " + player.y + ")";
  }
);
let key = new Item("Key", "A skeleton key.", () => {
  let chestIndex = getTreasureChestIndexFromPosition(player.x, player.y, player.z);

  if (chestIndex !== -1) {
    document.getElementById("description-text").innerHTML =
      "You use the key and find " +
      world.treasureChests[chestIndex].artifact +
      "!";
    player.artifacts.push(world.treasureChests[chestIndex].artifact);
    world.treasureChests.splice(chestIndex, 1);
  } else {
    document.getElementById("description-text").innerHTML =
      "There's nothing to use the key on!";
  }
});
