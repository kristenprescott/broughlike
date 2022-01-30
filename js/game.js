game = {
  setupCanvas: () => {
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");

    // dynamically size canvas/map
    canvas.width = tileSize * (numTiles + uiWidth);
    canvas.height = tileSize * numTiles;
    canvas.style.width = canvas.width + "px";
    canvas.style.height = canvas.height + "px";
    // remove default scaling for sprites
    ctx.imageSmoothingEnabled = false;
  },
  drawSprite: (sprite, x, y) => {
    // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    ctx.drawImage(
      spritesheet,
      sprite * 16,
      0,
      16,
      16,
      x * tileSize,
      y * tileSize,
      tileSize,
      tileSize
    );
  },
  draw: () => {
    // clear character after each render
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.drawSprite(0, x, y);
  },
};
