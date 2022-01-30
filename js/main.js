// tile size in px:
tileSize = 64;
// width/height of map in tiles:
numTiles = 9;
// numTiles = 13;
// space for game ui:
uiWidth = 4;

level = 1;
maxHp = 6;

// load spritesheet
spritesheet = new Image();
spritesheet.src = "./imgs/spritesheet.png";
spritesheet.onload = showTitle;

gameState = "loading";

startingHp = 3;
numLevels = 6;

// wasd instructions for movement
document.querySelector("html").addEventListener("keypress", (e) => {
  e = e || window.event;
  if (gameState == "title") {
    startGame();
  } else if (gameState == "dead") {
    showTitle();
  } else if (gameState == "running") {
    if (e.key === "w") player.tryMove(0, -1);
    if (e.key === "a") player.tryMove(-1, 0);
    if (e.key === "s") player.tryMove(0, 1);
    if (e.key === "d") player.tryMove(1, 0);
  }
});
// for using arrows:
document.querySelector("html").addEventListener("keydown", (e) => {
  e = e || window.event;
  if (gameState == "title") {
    startGame();
  } else if (gameState == "dead") {
    showTitle();
  } else if (gameState == "running") {
    if (e.key === "ArrowUp") player.tryMove(0, -1);
    if (e.key === "ArrowDown") player.tryMove(0, 1);
    if (e.key === "ArrowLeft") player.tryMove(-1, 0);
    if (e.key === "ArrowRight") player.tryMove(1, 0);
  }
});

// draw the screen every 15ms(60+fps)
setInterval(draw, 15);

setupCanvas();

// generateLevel();

// // start player on random floor tile
// player = new Player(randomPassableTile());
