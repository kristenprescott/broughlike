game = {
  setupCanvas: function () {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");

    // dynamically size canvas/map
    canvas.width = tileSize * (numTiles + uiWidth);
    canvas.height = tileSize * numTiles;
    canvas.style.width = canvas.width + "px";
    canvas.style.height = canvas.height + "px";
  },
};
